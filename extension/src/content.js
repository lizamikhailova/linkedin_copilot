function normalizeAuthorName(value) {
  if (!value) {
    return undefined;
  }

  const lines = value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length === 0) {
    return undefined;
  }

  return [...new Set(lines)][0];
}

function getVisibleArea(rect) {
  const visibleWidth =
    Math.min(rect.right, window.innerWidth) - Math.max(rect.left, 0);
  const visibleHeight =
    Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

  if (visibleWidth <= 0 || visibleHeight <= 0) {
    return 0;
  }

  return visibleWidth * visibleHeight;
}

function getBestVisiblePost() {
  const posts = Array.from(
    document.querySelectorAll(".fie-impression-container"),
  );

  if (posts.length === 0) {
    return null;
  }

  const rankedPosts = posts
    .map((post) => {
      const rect = post.getBoundingClientRect();
      const visibleArea = getVisibleArea(rect);

      return {
        post,
        rect,
        visibleArea,
      };
    })
    .filter(({ visibleArea, rect }) => visibleArea > 0 && rect.height > 0)
    .sort((a, b) => {
      if (b.visibleArea !== a.visibleArea) {
        return b.visibleArea - a.visibleArea;
      }

      return Math.abs(a.rect.top) - Math.abs(b.rect.top);
    });

  return rankedPosts[0]?.post ?? null;
}

function readVisiblePost() {
  const post = getBestVisiblePost();

  if (!post) {
    return null;
  }

  const authorContainer = post.querySelector(
    ".update-components-actor__single-line-truncate",
  );
  const authorName = normalizeAuthorName(
    authorContainer?.querySelector(":scope > span:first-child")?.textContent ??
      authorContainer?.querySelector("span:first-child")?.textContent ??
      authorContainer?.textContent ??
      undefined,
  );

  const text =
    post.querySelector(".update-components-update-v2__commentary")?.textContent ??
    post.textContent ??
    "";

  if (!text.trim()) {
    return null;
  }

  return {
    sourceUrl: window.location.href,
    authorName,
    text: text.trim(),
  };
}

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message?.type === "linkedin-capture-ping") {
    sendResponse({ ok: true });
    return;
  }

  if (message?.type !== "capture-current-post") {
    return;
  }

  sendResponse(readVisiblePost());
});
