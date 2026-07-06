# LearnMate – AI Career Coach

LearnMate is an AI career coach web app designed to provide resume feedback and interview practice.

I built it for students and early-career developers who want practical career help without jumping across multiple tools. The goal was to make one place where a user can log in, upload resume data, get AI-assisted feedback, and work through interview-oriented flows in a centralized way.

## What the project does

LearnMate focuses on a few core workflows:

- Clerk-based authentication with role-based access
- Resume upload and parsing workflow
- AI-assisted career guidance and feedback
- Interview preparation flows

The project has been used by ~40+ users so far. It is still evolving, but the base product is functional and deployed.

## Tech stack

- **Framework:** Next.js 15, React 18, TypeScript
- **Styling / UI:** Tailwind CSS, Radix UI, Lucide icons
- **Database:** Neon Postgres
- **ORM:** Drizzle ORM
- **Authentication:** Clerk
- **AI integration:** AI SDK, Google models, Hugging Face Inference
- **Background workflows:** Inngest
- **File / document tooling:** pdf-parse, jsPDF, html2canvas, ImageKit
- **Deployment:** Vercel

## Why I built it this way

I wanted the app to function as a complete product to explore architectural decisions and tradeoffs.

- **Next.js App Router** made it easier to keep frontend and backend logic in the same codebase.
- **TypeScript** helped keep API and UI changes safer as the project grew.
- **Neon + Drizzle** gave me a clean relational database setup without adding too much operational overhead.
- **Clerk** was a practical choice for authentication because it reduced auth boilerplate and let me focus on product workflows instead of session management.
- **Inngest** allowed me to move longer-running and background tasks out of the main request cycle.

## Main features

- Clerk-based authentication with role-based access flows
- Resume upload and parsing workflow
- AI-assisted career guidance
- Interview preparation workflow
- Deployable full-stack product with database integration

## Local setup

Clone the repository and install dependencies:

```bash
git clone https://github.com/AnujYadav-1915/AI_Career_Coach_Agent.git
cd AI_Career_Coach_Agent
npm install
```

Create an environment file:

```bash
cp .env.example .env
```

Add the required environment variables in `.env`. Based on the `.env.example`, you will need:

- `NEXT_PUBLIC_NEON_DB_CONNECTION_STRING`
- Clerk publishable and secret keys
- Clerk fallback redirect URLs

Depending on the feature set you want to test, you may also need keys for AI providers, Inngest, and ImageKit.

Then start the development server:

```bash
npm run dev
```

## Scripts

Some useful scripts from the project:

```bash
npm run build
npm run start
npm run lint
npm run prepare-falcon-data
npm run test-falcon
```

## Project structure

The repository is organized as follows:

- `app/` – routes, pages, and server-side app logic
- `components/` – reusable UI and feature components
- `configs/` – app configuration and schema-related setup
- `drizzle/` – database and migration-related files
- `scripts/` – data preparation and model-related scripts
- `public/` – static assets

## Additional docs

Additional integration and setup documentation can be found in the `/docs` folder:

- `DEPLOYMENT_GUIDE.md`
- `FALCON_INTEGRATION.md`
- `FALCON_SETUP_GUIDE.md`
- `INNGEST_CLOUD_SETUP.md`
- `setup-services.md`

## Challenges

A few parts of the project presented interesting technical challenges:

- Handling resume and document processing cleanly in a serverless environment.
- Structuring prompts and context so that AI output remains useful instead of generic.
- Keeping the app deployable while continuing to experiment with features.
- Managing multiple moving parts like auth, database, AI tooling, and background jobs in one codebase without excessive coupling.

## Current limitations

A few things are still rough and need improvement:

- Interview evaluation can be made more structured.
- AI output quality still depends heavily on prompt quality.
- Some workflows can be simplified further.
- Observability and logging are still basic.

## What I want to improve next

The next round of work will likely focus on:

- Better interview scoring and feedback structure.
- Cleaner analytics and activity tracking.
- Stronger validation and error handling across API routes.
- Better admin-side visibility into user flows.
- Improving the consistency of AI-generated responses.

## Live project

- **Live:** [anuj-kumar-ai-career-coach.vercel.app](https://anuj-kumar-ai-career-coach.vercel.app/)
- **Repository:** [AI_Career_Coach_Agent](https://github.com/AnujYadav-1915/AI_Career_Coach_Agent)

## Notes

This is a side project built to learn by shipping. Most of the learning came from dealing with product decisions, auth, deployment, data flow, and AI integration inside one real codebase instead of building isolated demos.
