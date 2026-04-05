# LinkedIn Engagement Copilot PRD

## Overview

LinkedIn Engagement Copilot is a human-in-the-loop assistant for reviewing LinkedIn feed posts and helping the user decide where to engage. The MVP focuses on browser-assisted capture, analysis, prioritization, and guardrails. It does not post on the user's behalf and does not attempt to imitate the user's writing style.

## Problem

The user wants help staying active on LinkedIn without spending large amounts of time scanning the feed manually. The current process is inconsistent, hard to prioritize, and difficult to scale while preserving judgment and control.

## Goal

Help the user review feed content faster by surfacing the highest-value posts and recommending safe actions such as `skip`, `like candidate`, or `comment candidate`.

## Non-Goals

- Fully autonomous LinkedIn activity
- Automatic liking or commenting without user review
- Comment generation in the user's voice in the MVP
- Browser automation that simulates user behavior in the MVP

## Users

- Primary user: a single operator managing their own LinkedIn engagement workflow

## MVP Scope

### Included

- Browser helper for post capture while browsing
- Post summarization
- Relevance scoring
- Topic blacklist
- Daily engagement limits
- Review queue
- Decision logging
- Basic analytics

### Deferred

- Comment drafting in the user's voice
- Personalization by author
- Duplicate-comment detection
- CRM tags and audience segmentation
- Reply drafting

## User Stories

1. As a user, I want to capture a post while browsing LinkedIn so the system can analyze it without manual re-entry.
2. As a user, I want the system to summarize each post so I can scan quickly.
3. As a user, I want a relevance score so I can focus on the posts that matter most.
4. As a user, I want blacklisted topics filtered out so I avoid engaging with unwanted themes.
5. As a user, I want daily action limits so I keep activity within a controlled range.
6. As a user, I want an approval queue so I can decide whether to skip, like, or treat a post as a comment candidate.
7. As a user, I want a history of decisions so I can review what I approved or skipped.
8. As a user, I want simple analytics so I can see how much time the system saves and how often recommendations are accepted.

## Product Requirements

### 1. Browser Helper Capture

The system must provide a browser helper that the user can use while browsing LinkedIn. The helper should capture the currently viewed post into the local app for later review.

The first MVP should support:

- explicit user-triggered capture only
- post URL, when available
- author name, when available
- post text
- capture date, auto-generated

The helper should not perform automatic engagement actions.

### 2. Summarization

The system must generate a concise summary for each post. The summary should capture the central topic, tone, and whether the content appears actionable for engagement review.

### 3. Relevance Scoring

The system must assign a score from 0 to 100 using explainable heuristics. The first MVP should use transparent weighted rules rather than opaque ranking logic.

Suggested score inputs:

- author importance
- topic relevance
- freshness
- conversation potential
- brand fit

### 4. Topic Blacklist

The user must be able to maintain a list of blocked topics or keywords. Posts that match the blacklist should either:

- be excluded from the queue, or
- be clearly marked as blocked with a reason

The first MVP should support keyword-based matching with case-insensitive comparisons.

Posts matching the blacklist should be hidden from the default review queue.
Blocked posts should remain hidden with no separate audit or review surface in the MVP.

### 5. Daily Engagement Limits

The user must be able to set a maximum number of engagement actions per day.

The first MVP should support:

- total daily review target
- max likes per day
- max comments per day

When limits are reached, additional posts should remain in the queue but be marked as deferred.

Daily limits apply to final external actions, not internal recommendations.
Deferred posts should automatically resurface once daily action capacity resets on the next day.

### 6. Review Queue

The system must show analyzed posts in priority order with:

- author
- original post text
- summary
- relevance score
- blacklist status
- recommended action

Allowed actions for the MVP:

- `skip`
- `like candidate`
- `comment candidate`
- `save for later`

### 7. Decision Logging

Each review action must be recorded with:

- post id
- chosen action
- decision timestamp
- optional user note

### 8. Basic Analytics

The system must expose simple metrics:

- posts analyzed
- posts blocked by blacklist
- recommendations by type
- approvals by type
- actions deferred because of daily limits

## Functional Requirements

- The user can capture posts from the browser helper into the local app.
- The user can create, edit, and delete blacklist entries.
- The user can set or update daily engagement limits.
- The system can analyze newly added posts on demand.
- The queue can be filtered by status, action type, and blocked state.
- The system stores past decisions locally.

## Non-Functional Requirements

- The system should be usable by one person locally.
- Data storage should be simple and low-maintenance for the MVP.
- Scoring and blocking logic should be explainable.
- The UI should support a fast review flow on laptop-sized screens.

## Safety and Guardrails

- No automatic posting in the MVP
- No simulated user behavior
- Capture must be user-triggered
- User approval required for every decision
- Blacklisted topics must override positive scoring
- Daily engagement limits must be enforced in the review workflow

## Success Metrics

- Average time to review a post
- Percentage of posts skipped before full reading
- Percentage of recommendations accepted
- Number of posts blocked by blacklist
- Number of actions deferred by daily limits

## Open Questions

- None for the current MVP scope

## Recommended MVP Stack

- Frontend: Next.js
- Backend: Next.js route handlers
- Database: SQLite with Prisma
- AI layer: structured prompt pipeline for summary and scoring
- Browser helper: Chrome extension or content-script-based browser helper for capture only
- Auth: none for local MVP

## Release Plan

### Phase 1

Browser helper capture, analysis, blacklist, daily limits, queue, and logging

### Phase 2

Analytics and workflow refinement

### Phase 3

Optional drafting and richer prioritization after the MVP is stable
