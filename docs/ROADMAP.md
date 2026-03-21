# 🗺️ SMG Distribuciones - Strategic Roadmap

**Business Context:** SMG Distribuciones is a B2B wholesaler in the Los Lagos region, Chile. We currently capture leads effectively via Cloudflare Pages and D1 databases. The next evolution transitions SMG from a static marketing presence to a fully transactional e-commerce and logistics B2B platform.

---

## 📅 NOW (Current Quarter)
*Focus: Internal Operations & Catalog Digitalization*

**1. Backoffice & CRM Management (Internal Admins)**
* **Hypothesis:** By creating an internal dashboard connected to our Cloudflare D1 database, we will reduce lead-response time by 50% because the team currently lacks a single pane of glass to validate and onboard B2B customers.
* **Success Metric:** Time-to-activation per lead.

**2. Dynamic B2B Product Catalog**
* **Hypothesis:** By digitizing the physical catalog into a dynamic Cloudflare D1/R2-backed Next.js experience, we will increase average order discovery because clients can search inventory securely without relying solely on PDF sharing via WhatsApp.
* **Success Metric:** Catalog page load speed and search engagement.

---

## 🚀 NEXT (Following Quarter)
*Focus: Transactionality & B2B Customer Portal*

**1. Enterprise B2B Authentication (SSO / Portal)**
* **Hypothesis:** Implementing secure authentication (via Cloudflare Access or NextAuth) will allow recurring customers to log in securely, reducing manual orders via WhatsApp by 30%.
* **Success Metric:** % of orders placed via platform vs. direct message.

**2. E-Commerce Cart & Ordering System**
* **Hypothesis:** By enabling a digital shopping cart with specific B2B pricing tiers, we will increase order volume and ticket size because clients can self-serve outside business hours.
* **Success Metric:** GMV (Gross Merchandise Value) through the platform.

**3. Integration with SII (Servicio de Impuestos Internos)**
* **Hypothesis:** By integrating an API for "Facturación Electrónica" generation upon order placement, we will save 10 hours a week in manual accounting.
* **Success Metric:** Reduction in manual invoicing hours. 

---

## 🔭 LATER (Future Exploration)
*Focus: Logistics Optimization & Retention*

**1. Mobile App for Delivery Drivers (Logistics)**
* **Hypothesis:** A dedicated mobile-first PWA for SMG drivers mapping the Carretera Austral will decrease delivery errors because they can track routes offline or with poor signal.

**2. Automated B2B Debt / Credit Lifecycle**
* **Hypothesis:** Managing lines of credit ("Cuentas Corrientes") natively within the platform will improve steady cash flow and reduce late payments.

**3. AI Order Suggestions based on Seasonality**
* **Hypothesis:** Utilizing Cloudflare Workers AI to analyze past vendor purchases in Los Lagos and suggest refills before stockouts will increase customer retention and LTV by 15%.
