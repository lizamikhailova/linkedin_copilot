-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sourceUrl" TEXT,
    "authorName" TEXT,
    "text" TEXT NOT NULL,
    "capturedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "summary" TEXT,
    "topics" TEXT,
    "tone" TEXT,
    "relevanceScore" INTEGER,
    "recommendedAction" TEXT,
    "status" TEXT NOT NULL DEFAULT 'CAPTURED',
    "blacklistMatched" BOOLEAN NOT NULL DEFAULT false,
    "blacklistReason" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "BlacklistEntry" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "term" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "DailyLimitSettings" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "maxReviewsPerDay" INTEGER NOT NULL DEFAULT 25,
    "maxLikesPerDay" INTEGER NOT NULL DEFAULT 10,
    "maxCommentsPerDay" INTEGER NOT NULL DEFAULT 5,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Decision" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "postId" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "note" TEXT,
    "decidedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Decision_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "BlacklistEntry_term_key" ON "BlacklistEntry"("term");
