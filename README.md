# LearnMate

LearnMate is an AI-assisted career platform for resume feedback and interview practice.

I built it to solve a problem I kept seeing around me: a lot of students want feedback on resumes and interviews, but most tools are either too generic or too expensive. This project started as a way to make that process simpler and more practical for students and early-career developers.

## What it does

LearnMate helps users:

- sign up and manage an account
- upload or submit resume content for feedback
- practice interview-style questions
- access role-based features using JWT authentication
- use an interface designed for repeat usage, not just a one-time demo

At the moment, the project has been used by 40+ users. The goal was not to fake scale — it was to build something functional, usable, and deployable from end to end.

## Tech stack

- **Frontend:** React.js / Next.js
- **Backend:** Node.js
- **Database:** PostgreSQL (Neon)
- **Auth:** JWT, RBAC
- **AI integration:** OpenAI API
- **Deployment:** Vercel
- **CI/CD:** GitHub Actions

## Why I built it this way

I wanted the project to feel like a real product, not just a college submission.

- **Next.js** made it easier to keep the frontend and backend logic in one codebase.
- **PostgreSQL** was a better fit than a purely document-based setup because I wanted cleaner relational modeling for users, roles, and usage data.
- **JWT + RBAC** gave me a simple but practical auth system that I could extend later.
- **GitHub Actions + Vercel** kept deployment simple and repeatable.

## Core features

- User authentication with JWT
- Role-based access control
- Resume feedback workflow
- Interview practice module
- Protected routes and basic session handling
- Deployment pipeline for production updates

## Local setup

Clone the repository and install dependencies:

```bash
git clone https://github.com/AnujYadav-1915/Learnmate.git
cd Learnmate
npm install
```

Create an environment file:

```bash
cp .env.example .env
```

Add the required values in `.env`, such as:

- database connection string
- JWT secret
- OpenAI API key

Then start the development server:

```bash
npm run dev
```

## Project structure

The project is organized to keep product logic separate from UI concerns as much as possible.

- `app/` or `pages/` for routes and UI
- API logic for backend workflows
- auth layer for protected access
- DB models / queries for persistence
- reusable components for forms, layouts, and dashboards

## Challenges

A few parts of this project took more time than expected:

- keeping auth flows simple without making the app fragile
- designing resume feedback flows that felt useful instead of gimmicky
- handling AI-dependent features without making the entire product rely on perfect model output
- keeping the app deployable while still iterating quickly

## Current limitations

This project is still evolving, and a few parts are intentionally simple right now:

- interview scoring is basic
- AI responses still need better structure and consistency
- admin controls are limited
- there is no billing or subscription system yet
- logging and observability can be improved further

## What I want to improve next

The next version will likely focus on:

- better interview scoring and evaluation
- cleaner analytics around user activity
- stronger validation and error handling
- richer admin tooling
- improved prompt engineering for more reliable feedback

## Live project

- **Live:** https://anuj-kumar-ai-career-coach.vercel.app/
- **Author:** Anuj Kumar

## Notes

This is a side project built to learn by shipping. A lot of the value came from solving real implementation issues across auth, deployment, database design, and API integration — not just from getting a polished UI on screen.
