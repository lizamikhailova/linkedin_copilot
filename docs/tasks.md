# LinkedIn Engagement Copilot MVP Task Breakdown

## Build Order

1. Project bootstrap
2. Data model and persistence
3. Browser helper capture flow
4. Analysis pipeline
5. Blacklist and limits
6. Review queue
7. History and analytics
8. Testing and polish

## Milestone 1: Bootstrap

### Tasks

- Initialize app scaffold
- Set up package manager and scripts
- Add linting and formatting
- Add environment variable handling
- Create `docs/` and `src/` project structure

### Deliverable

A runnable local app with a placeholder home page and clear scripts for development.

## Milestone 2: Data Model

### Tasks

- Add SQLite database
- Add Prisma schema
- Create initial migrations
- Seed default settings

### Entities

`Post`
- `id`
- `sourceUrl`
- `authorName`
- `text`
- `capturedAt`
- `summary`
- `topics`
- `tone`
- `relevanceScore`
- `recommendedAction`
- `status`
- `blacklistMatched`
- `blacklistReason`

`BlacklistEntry`
- `id`
- `term`
- `active`
- `createdAt`

`DailyLimitSettings`
- `id`
- `maxReviewsPerDay`
- `maxLikeCandidatesPerDay`
- `maxCommentCandidatesPerDay`
- `updatedAt`

`Decision`
- `id`
- `postId`
- `action`
- `note`
- `decidedAt`

## Milestone 3: Browser Helper Capture

### Tasks

- Build browser helper scaffold
- Capture current post URL, author name, and text
- Send captured post data to local app
- Save raw post records
- Show capture success and error states

### Acceptance Criteria

- User can capture a post while browsing
- Captured posts appear in an inbox or pending state

## Milestone 4: Analysis Pipeline

### Tasks

- Add summary generation service
- Add scoring service
- Store structured analysis results
- Add recommendation mapping from score to action
- Add retry or re-run analysis action

### Acceptance Criteria

- User can analyze a saved post
- System returns summary, score, and recommended action

## Milestone 5: Topic Blacklist

### Tasks

- Build blacklist settings UI
- Add create, update, delete flows
- Implement case-insensitive keyword matching
- Mark blocked posts during analysis
- Exclude or label blocked posts in queue

### Acceptance Criteria

- Posts matching blacklist terms are flagged consistently
- Blacklist reason is visible in the UI

## Milestone 6: Daily Engagement Limits

### Tasks

- Build limit settings UI
- Store limits in database
- Count daily decisions by action type
- Mark excess recommendations as deferred
- Surface limit status in queue

### Acceptance Criteria

- Queue reflects limit enforcement correctly
- User can see when a post is deferred because of limits

## Milestone 7: Review Queue

### Tasks

- Build queue list view
- Sort by priority score descending
- Show summary, score, action, and flags
- Add actions: `skip`, `like candidate`, `comment candidate`, `save for later`
- Persist decisions

### Acceptance Criteria

- User can process posts one by one from the queue
- Every action is logged

## Milestone 8: History and Analytics

### Tasks

- Build history page
- Add filters by action and date
- Build lightweight analytics dashboard
- Show totals for analyzed, blocked, approved, and deferred posts

### Acceptance Criteria

- User can review past decisions and core usage metrics

## Milestone 9: Testing and Polish

### Tasks

- Add schema and API tests
- Add core UI smoke tests
- Test blacklist edge cases
- Test daily limit edge cases
- Improve empty states and error messaging

### Acceptance Criteria

- Core flows are covered by tests
- MVP is stable for daily local use

## Technical Notes

- Prefer server-side analysis endpoints with structured JSON output
- Keep scoring logic transparent and configurable
- Use enums for action and status fields
- Start with local-only storage and no auth
- Keep browser helper capture explicit and user-triggered

## Suggested File Layout

```text
docs/
  prd.md
  tasks.md
src/
  app/
  components/
  lib/
  server/
extension/
prisma/
  schema.prisma
```

## First Build Sprint

If we start implementation next, the best first ticket sequence is:

1. Scaffold Next.js app with Prisma and SQLite
2. Create schema for posts, blacklist entries, limits, and decisions
3. Build browser helper capture flow
4. Build analysis endpoint with placeholder scoring
5. Build review queue UI
6. Add blacklist settings
7. Add daily limit enforcement
