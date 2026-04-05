export const PostStatus = {
  CAPTURED: "CAPTURED",
  ANALYZED: "ANALYZED",
  BLOCKED: "BLOCKED",
  DEFERRED: "DEFERRED",
  REVIEWED: "REVIEWED",
} as const;

export type PostStatus = (typeof PostStatus)[keyof typeof PostStatus];

export const RecommendedAction = {
  SKIP: "SKIP",
  LIKE_CANDIDATE: "LIKE_CANDIDATE",
  COMMENT_CANDIDATE: "COMMENT_CANDIDATE",
  SAVE_FOR_LATER: "SAVE_FOR_LATER",
} as const;

export type RecommendedAction =
  (typeof RecommendedAction)[keyof typeof RecommendedAction];

export type InboxPost = {
  id: string;
  sourceUrl: string | null;
  authorName: string | null;
  text: string;
  capturedAt: Date;
  recommendedAction: RecommendedAction | null;
  status: PostStatus;
};
