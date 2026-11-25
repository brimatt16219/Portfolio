---
title: l3lint
outcome: A linter that checks commercial-card Level 2/3 payment data against 78 card-network rules and explains likely interchange downgrades before you submit.
year: 2026
role: Design & build
timeline: Nov 2026
stack: [C#, .NET 10, MCP, GitHub Actions, SARIF, xUnit]
links:
  code: https://github.com/brimatt16219/l3lint
  docs: https://brimatt16219.github.io/l3lint/
featured: true
order: 1
---

<!-- DRAFT: written from the repo and your resume. Add anything you measured (lint time per payload, rule coverage by brand) and make the decisions read the way you'd explain them in an interview. -->

## Problem

Enhanced data fails quietly. A business-card transaction with bad Level 3 data still approves, then settles at a higher interchange rate, and nobody notices until the statement. Since Visa's Commercial Enhanced Data Program, placeholder descriptions, line items that don't add up and missing fields fail Visa's review. I see this every day working on payment integrations at Fiserv. l3lint catches these problems in seconds, while they're still cheap to fix.

## Key decisions

**One offline engine, four ways to use it.** The CLI, the MCP server, the GitHub Action and the .NET library are thin hosts over the same core, so a payload gets identical findings wherever it's checked. An architecture test enforces the dependency direction: rules, adapters and reporting depend on Core, and nothing depends on a host.

**Mask first, then lint.** Anything that looks like a card number is masked before any rule reads the payload. The tool makes no network calls and sends no telemetry, because payment payloads shouldn't leave the machine just to be linted.

**Advisory, with sources.** Card networks and issuers decide the rate, so l3lint can't promise a tier. Every rule cites the public documentation it comes from and carries a confidence label, and `l3lint explain <rule>` shows the requirement, the reason and passing and failing examples. A finding is something you can check, not something you have to take on trust.

**Meet payloads where they are.** Adapters read Stripe, Adyen, Braintree, Cybersource, Authorize.net and Checkout.com request bodies, plus CSV exports, and map them into one canonical model. Findings point back at the original field, for example `/amount_details/line_items/1/discount_amount`.

**Fixes an agent can apply safely.** Suggested fixes are emitted as JSON Patches, so the MCP server lets an AI agent lint the payloads it writes and apply only the safe corrections.

## Result

Published as a .NET tool on NuGet, with self-contained binaries for Windows, macOS and Linux. 78 rules across Visa, Mastercard, Amex, Discover and a general pack. Output in text, JSON, SARIF (for GitHub code scanning), JUnit XML and Markdown.

## Production notes

- **Testing:** 537 xUnit tests, plus snapshot tests, property-based tests, fuzzing and a golden corpus of fixtures.
- **Security:** card numbers masked before any rule runs; offline by design.
- **CI:** exit codes built for pipelines (0 clean, 1 findings, 2 usage, 3 internal), and a GitHub Action that uploads SARIF on every pull request.
- **Delivery:** NuGet trusted publishing from GitHub Actions; a documentation site with one page per rule.

## What I'd do differently

<!-- e.g. where the rule format or adapter model would change if you started again. -->
