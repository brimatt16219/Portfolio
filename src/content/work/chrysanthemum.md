---
title: Chrysanthemum
outcome: A browser gardening game for growing flowers and selling them, built to learn game loops in React.
year: 2025
role: Design & build
timeline: "2025"
stack: [React, TypeScript, Tailwind CSS, Vite]
links:
  live: https://chrysanthemum-pink.vercel.app/
  code: https://github.com/brimatt16219/Chrysanthemum
featured: false
order: 4
---

<!-- DRAFT: check against the repo. -->

## Problem

React is built around events: something happens, state changes, the UI re-renders. A game needs time to pass on its own: plants grow whether or not you click. Chrysanthemum was a way to learn how to run a game loop inside a framework that doesn't assume one.

## Key decisions

**Time drives the state.** <!-- How did you implement the tick: setInterval, requestAnimationFrame, timestamps compared on load? -->

**Plain React, no game engine.** Keeping it to React and TypeScript meant every mechanic (growth, inventory, selling) had to be modelled directly as state.

**Saving progress.** <!-- localStorage? Does growth continue while the tab is closed? -->

## Result

Playable at the live link.

## What I'd do differently

<!-- -->
