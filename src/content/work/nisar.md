---
title: NISAR Surface Change Explorer
outcome: Won the Art and Technology Award at NASA Space Apps 2026 with a map of Earth's surface changing, built on NISAR radar data.
year: 2026
role: AI lead, API & architecture
team: 5-person team
timeline: Oct 2026
stack: [React, CesiumJS, Flask, SQLAlchemy, Python, MCP]
links:
  live: https://nisar-surface-change-app.vercel.app
  code: https://github.com/cirillojon/nisar-surface-change-app
featured: true
order: 2
---

<!-- DRAFT: written from the repo and your resume. Check that "my part" matches what you'd say in an interview, and add any numbers (time to first image for a drawn area, data read vs. granule size). -->

## Problem

NISAR, the NASA–ISRO radar satellite, sees the ground move: crops growing, floods spreading, cities sinking. Its data ships as very large HDF5 granules that are slow to find and hard to open. Our team, Subject to Change, set out to make it feel like "Google Maps for NISAR": draw on a map and see what changed, when, by how much and how sure the record is, without granule IDs or downloads. We built it for the Space Apps 2026 challenge *Dancing with the SARs*.

## My part

I led the AI work, designed the Flask and SQLAlchemy REST APIs and the overall site architecture, and built the landing page and the documentation site.

## Key decisions

**Read only the pixels you asked for.** A granule can be far larger than the area someone draws. The data path searches NASA's CMR catalog live, then uses HTTP range requests to read just the selected area's pixels from each HDF5 file, so a drawn rectangle returns results without anything being downloaded first.

**One API for people and agents.** The REST API powers the app, and an MCP server exposes the same data as read-only tools for AI agents. Every finding in the app shows the REST and MCP calls that rebuild it, so a result can be reproduced outside the UI.

**Honest about what the data can show.** NISAR values come from real granules. Rain and river flow are shown alongside on the same dates, but the app draws no conclusions from them. Explanations are offered as labelled hypotheses, each with an alternative and a test.

## Result

Won the **Art and Technology Award** at NASA Space Apps 2026. The app is live, with six study sites, twelve guided stories, a 2D map and a 3D CesiumJS globe, and findings you can export as a printable brief, CSV or API calls.

## Production notes

- **Deployment:** React frontend on Vercel; Flask API and MCP server on Fly.io.
- **Safety:** the MCP tools are read-only.
- **Accessibility:** keyboard navigation throughout, a guided tour on the first visit, and a layout that works on phones.

## What I'd do differently

<!-- -->
