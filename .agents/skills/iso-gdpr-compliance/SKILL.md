---
name: iso-gdpr-compliance
description: Integrates ISO standards (9001, 27001, 22301, 27017, 27018, 27701, 31000) and GDPR into the software development lifecycle.
---

# ISO & GDPR Compliance Framework

This skill enforces strict adherence to international quality, security, risk, and privacy standards during the coding, planning, and deployment phases. Activating this skill guarantees that all deliverables meet high corporate governance standards.

## 1. Quality Management (ISO 9001:2015)
- **Continuous Improvement:** Code must be modular (Next.js React components) and self-documenting.
- **Traceability:** Every architectural decision must be logged in `DECISIONS.md`.
- **Quality Assurance (QA):** Enforce strict Lighthouse audits (Performance, Accessibility, Best Practices) prior to any release.

## 2. Information Security (ISO 27001:2022, ISO 27017, ISO 27018)
- **Secure by Design:** Never hardcode secrets, private API keys, or credentials in the frontend.
- **Cloud Security:** Ensure Cloudflare Pages enforces HTTPS. Implement strict HTTP security headers (e.g., `Content-Security-Policy`, `Strict-Transport-Security`, `X-Frame-Options`).
- **PII in Cloud (27018):** Any personally identifiable information processed by the cloud must be encrypted at rest and in transit.

## 3. Privacy Management (ISO 27701, GDPR)
- **Data Minimization:** Only collect the absolutely necessary data. Given the landing page routes leads to WhatsApp, do not store user session data or tracking IPs without explicit, opt-in consent.
- **Transparency:** The interface must visibly link to a transparent Privacy Policy if any tracker or analytics (like Cloudflare Web Analytics) is implemented.

## 4. Business Continuity & Resiliency (ISO 22301:2019)
- **Fault-Tolerance:** Maintain `PROJECT-STATE.md` continuously updated so any developer or AI Agent can instantly recover project context if a critical failure or session expiration occurs.
- **Deployment Reliability:** Rely on Cloudflare Pages static edge network to guarantee uptime and DDoS mitigation.

## 5. Risk Management (ISO 31000)
- **Risk Identification:** Proactively identify technical limitations (like API Quota limits) and security vulnerabilities.
- **Mitigation Tracking:** All identified risks MUST be logged immediately in `KNOWN_ISSUES.md` with a proposed mitigation strategy and triaged into the `KANBAN.md`.
