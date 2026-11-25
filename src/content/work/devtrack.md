---
title: DevTrack
outcome: A job-application tracker with sign-in, status pipelines and notes on every application.
year: 2025
role: Full-stack build
timeline: "2025"
stack: [React, TypeScript, Tailwind CSS, Node.js, Express]
links:
  live: https://devtrack-omega-three.vercel.app
  code: https://github.com/brimatt16219/devtrack
featured: true
order: 2
---

<!-- DRAFT: fill in from memory and the repo. Replace anything that isn't accurate. -->

## Problem

A job search spread across spreadsheets, inboxes and job boards loses track of where each application stands. I built DevTrack to run my own search end to end: every application, its stage, and what happened at each step in one place.

## Key decisions

**Authentication from day one.** Applications and notes are personal, so every record belongs to a signed-in user. <!-- What auth approach did you use: sessions, JWT, a provider? Why? -->

**Status as a pipeline, not a free-text field.** Applications move through fixed stages (applied, interviewing, offer, rejected), so the dashboard can count and filter them. <!-- List your real stages. -->

**Notes attached to the application.** Interview prep, recruiter names and follow-up dates sit with the application they belong to instead of in a separate doc.

## Result

Deployed at the live link. <!-- How many applications have you tracked with it? Did it change how you run your search? -->

## Production notes

- **Data:** <!-- Where is data stored? How is it scoped per user? -->
- **Security:** <!-- password hashing, token expiry, input validation -->

## What I'd do differently

<!-- -->
