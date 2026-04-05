# LinkedIn Engagement Copilot

Local MVP scaffold for a human-in-the-loop LinkedIn engagement copilot with:

- a Next.js review app
- Prisma + SQLite persistence
- a capture-only browser helper scaffold

## Getting Started

1. Install dependencies:

```bash
bun install
```

2. Create your local environment file:

```bash
cp .env.example .env
```

3. Generate the Prisma client:

```bash
bun run prisma:generate
```

4. Run the app:

```bash
bun run dev
```

5. Optional Prisma migration when you are ready to create the local database:

```bash
bun run prisma:migrate
```

## Structure

```text
docs/
extension/
prisma/
src/
```

## Notes

- The browser helper is intentionally capture-only in this scaffold.
- No automated posting behavior is included.
- Bun is the default package manager for this repo.
