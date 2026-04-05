async function getActiveTabId() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab?.id;
}

async function ensureContentScript(tabId) {
  try {
    await chrome.tabs.sendMessage(tabId, {
      type: "linkedin-capture-ping",
    });
    return;
  } catch (_error) {
    await chrome.scripting.executeScript({
      target: { tabId },
      files: ["src/content.js"],
    });
  }
}

function isCapturedPostPayload(value) {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value;

  return (
    typeof candidate.sourceUrl === "string" &&
    typeof candidate.text === "string" &&
    (typeof candidate.authorName === "string" ||
      typeof candidate.authorName === "undefined")
  );
}

async function captureCurrentPost() {
  const tabId = await getActiveTabId();

  if (!tabId) {
    console.warn("No active tab found.");
    return;
  }

  try {
    await ensureContentScript(tabId);

    const payload = await chrome.tabs.sendMessage(tabId, {
      type: "capture-current-post",
    });

    if (!isCapturedPostPayload(payload)) {
      console.warn("No capturable post found on the current page.");
      return;
    }

    const response = await fetch("http://localhost:3000/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Capture request failed: ${response.status} ${errorText}`);
    }

    console.info("LinkedIn post captured successfully.");
  } catch (error) {
    console.error("LinkedIn capture failed.", error);
  }
}

chrome.action.onClicked.addListener(() => {
  void captureCurrentPost();
});
