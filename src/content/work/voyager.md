---
title: Voyager
outcome: Finds the stores near you and the shortest route that visits every one of them.
year: 2025
role: Design & full-stack build
timeline: "2025"
stack: [React, TypeScript, Zustand, TanStack Query, Google Maps API, Node.js, Express]
links:
  live: https://voyager-rose-seven.vercel.app
  code: https://github.com/brimatt16219/Voyager
featured: true
order: 1
---

<!-- DRAFT: everything below is written from the repo and stack. Check each claim, add real numbers (stops, route time, response time), and replace anything that isn't how you actually reasoned. -->

## Problem

Running errands across several stores turns into guessing which order to drive them in. Voyager takes a search ("pharmacy", "hardware store"), finds the nearby locations, and returns the order that keeps total travel shortest.

## Key decisions

**A heuristic instead of an exact solver.** Visiting every stop in the shortest order is the travelling salesman problem, and the exact answer gets exponentially slower as stops are added. Voyager uses 2-opt on the server: start from a reasonable tour and keep reversing any segment that makes it shorter, until no swap helps. It's fast enough to feel instant for errand-sized routes and gets close to optimal. The tradeoff is that it can stop at a local minimum. [Try the 2-opt visualizer in the lab](/lab/two-opt).

**Routing on the server, not in the browser.** The optimization runs in an Express service so the Maps API key and distance lookups stay off the client, and the frontend only renders the result.

**Server state and UI state kept apart.** TanStack Query owns everything fetched (places, distances, the solved route), with caching and retries. Zustand holds what the user is doing: selected stops, the active route and map focus. Neither library has to pretend to be the other.

**A full-screen dark map.** The map is the interface. Controls sit over it instead of beside it, so the route stays the largest thing on screen.

## Result

Deployed and usable at the live link. <!-- Add: typical stop count, solve time, anything you measured. -->

## Production notes

- **Cost:** distance lookups are the paid part of the Maps API. <!-- How do you limit or cache them? -->
- **Security:** the API key lives on the server.
- **Latency:** <!-- solve time for N stops -->

## What I'd do differently

<!-- e.g. Or-opt moves on top of 2-opt, real driving-time matrices instead of straight-line distance, saving routes. -->
