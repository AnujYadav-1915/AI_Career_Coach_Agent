# LearnMate – AI Career Coach

LearnMate is a web app for resume feedback and interview practice.

I built it for students and early-career developers who want practical career help without jumping across five different tools. The goal was to make one place where a user can log in, upload resume data, get AI-assisted feedback, and work through interview-oriented flows in a cleaner way.

## What the project does

LearnMate currently focuses on a few core workflows:

- user sign-up and authentication
- resume-based career feedback
- interview preparation flows
- role-based access for different parts of the app
- AI-assisted response generation inside a deployable product

The project has been used by 40+ users so far. It is still evolving, but the base product is functional and deployed.

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

I wanted the app to feel like a real product, not just a one-page demo.

- **Next.js app router** made it easier to keep frontend and backend logic in the same codebase.
- **TypeScript** helped keep API and UI changes safer as the project grew.
- **Neon + Drizzle** gave me a clean relational setup without adding too much overhead.
- **Clerk** was a practical choice for authentication because it reduced auth boilerplate and let me focus on product workflows.
- **Inngest** gave me room to move longer-running or background tasks out of the main request cycle.

## Main features

- Clerk-based authentication
- role-based access flows
- resume upload / parsing workflow
- AI-assisted career guidance
- interview preparation workflow
- deployable full-stack product with database integration

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

Add the required environment variables in `.env`. Depending on the feature set you want to run, this may include:

- Neon database connection string
- Clerk keys
- AI provider keys
- Inngest keys
- ImageKit configuration

Then start the development server:

```bash
npm run dev
```

## Scripts

Some useful scripts from the project:

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run prepare-falcon-data
npm run test-falcon
```

## Project structure

The repository is split into a few main parts:

- `app/` – routes, pages, and server-side app logic
- `components/` – reusable UI and feature components
- `configs/` – app configuration and schema-related setup
- `drizzle/` – database and migration-related files
- `scripts/` – data preparation / model-related scripts
- `public/` – static assets

There are also a few integration and setup guides in the repo for deployment and external services.

## Challenges

A few parts of the project were more involved than they looked at first:

- getting auth and protected flows to feel simple from the user side
- handling resume/document processing cleanly
- making AI output useful instead of generic
- keeping the app deployable while still experimenting with features
- managing multiple moving parts like auth, DB, AI tooling, and background jobs in one codebase

## Current limitations

A few things are still rough and need improvement:

- interview evaluation can be made more structured
- AI output quality still depends a lot on prompt quality
- some workflows can be simplified further
- observability and logging are still basic
- there is room to clean up docs and project organization

## What I want to improve next

The next round of work will likely focus on:

- better interview scoring and feedback structure
- cleaner analytics and activity tracking
- stronger validation and error handling
- better admin-side visibility into user flows
- improving the consistency of AI-generated responses

## Live project

- **Live:** [anuj-kumar-ai-career-coach.vercel.app](https://anuj-kumar-ai-career-coach.vercel.app/)
- **Repository:** [AI_Career_Coach_Agent](https://github.com/AnujYadav-1915/AI_Career_Coach_Agent)

## Notes

This is a side project built to learn by shipping. Most of the learning came from dealing with product decisions, auth, deployment, data flow, and AI integration inside one real codebase instead of building isolated demos.
