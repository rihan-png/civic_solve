# 🏛️ CivicSolve · Geospatial Civic Problem-Solving Platform
> **Government of India · Smart Cities Mission & Quadruple-Helix Urban Infrastructure Governance**

[![Deploy to GitHub Pages](https://github.com/rihan-png/civic_solve/actions/workflows/deploy.yml/badge.svg)](https://github.com/rihan-png/civic_solve/actions/workflows/deploy.yml)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-success?logo=github&logoColor=white)](https://rihan-png.github.io/civic_solve/)
[![React 19](https://img.shields.io/badge/React-19.2-61dafb?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![OpenRouter AI](https://img.shields.io/badge/AI%20Engine-OpenRouter%20Free%20Tier-FF6B6B?logo=openai&logoColor=white)](https://openrouter.ai/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 🌐 Live Application
- **Live URL**: [https://rihan-png.github.io/civic_solve/](https://rihan-png.github.io/civic_solve/)
- **Source Code**: [https://github.com/rihan-png/civic_solve](https://github.com/rihan-png/civic_solve)

---

## 📖 Overview

**CivicSolve** is a production-grade geospatial civic infrastructure platform engineered for Indian Urban Local Bodies (ULBs) — specifically piloted for Jharkhand municipal corporations (Ranchi Municipal Corporation, Jamshedpur NAC, Dhanbad Municipal Corporation). 

By uniting **Citizens, Municipal Authorities, Civil Society (NGOs), Academia (Universities), and Industry (CSR)** in a unified **Quadruple-Helix Architecture**, CivicSolve closes the loop from defect reporting to physical asphalt compaction, citizen verification, and contractor payment clearance.

---

## 🌟 Core Features

### 1. 🤖 OpenRouter Autonomous Civic Triage Engine
- Integrated with high-performance free-tier LLMs via OpenRouter:
  - **Google Gemini 2.0 Flash** (`google/gemini-2.0-flash-exp:free`) — Fast multimodal reasoning.
  - **Meta Llama 3.3 70B** (`meta-llama/llama-3.3-70b-instruct:free`) — High-precision municipal triage.
  - **DeepSeek R1 Reasoning** (`deepseek/deepseek-r1:free`) — Chain-of-thought severity classification.
  - **Mistral 7B Instruct** (`mistralai/mistral-7b-instruct:free`) — Lightweight edge routing.
- **Automated Structured Output**:
  - Hazard severity score (85–99% confidence level).
  - Population density and vehicular risk evaluation.
  - Municipal department routing (e.g. *RMC PWD Bitumen Cell*, *JNAC Maintenance*).
  - Bilingual actionable repair directives (Hindi & English).
- **Zero-Friction Fallback**: Built-in deterministic simulation engine guarantees 100% uptime even without an external API key.

### 2. 📸 Tamper-Proof Geospatial Evidence Capture
- High-definition camera viewfinder HUD with real-time GPS coordinates, NavIC satellite lock, WGS-84 datum, compass bearing, and cryptographic SHA-256 EXIF timestamp watermark.
- Prevents falsified or stale duplicate reports.

### 3. 🔄 5-Step Milestone Work Tracker & Citizen CSAT Ledger
1. **Report Geotagged & Logged** (WGS-84 NavIC coordinates & initial citizen photo).
2. **AI Municipal Triage & Verification** (Automated SLA, severity rating, and department assignment).
3. **PWD Bitumen Squad Dispatched** (Equipment & hot-mix asphalt allocation).
4. **Physical Compaction & Repair** (Post-work photographic audit upload).
5. **Citizen CSAT & QC Clearance** (Resident 1–5 star rating, surface flushness check, and contractor payment signoff).

### 4. 🗺️ Interactive Leaflet GIS Heatmap
- Live geospatial mapping with dynamic severity clustering (Critical, High, Medium, Low).
- District & department filtering across Jharkhand municipalities (Ranchi, Jamshedpur, Dhanbad, Bokaro, Deoghar, Hazaribagh).
- Direct toggle between standard map tiles, satellite terrain, and municipal boundary layers.

### 5. 🏛️ Jan Parichay National SSO Authentication
- Official 2026 National Single Sign-On modal with 5 distinct role profiles:
  - 👤 **Citizen / Resident** (Track personal grievances, submit CSAT feedback)
  - 🏛️ **Municipal Admin (ULB)** (Dispatch crews, manage SLAs, approve payments)
  - 🤝 **Civil Society / NGO** (Independent verification audits, field relief)
  - 🎓 **University / R&D** (Applied sensor data access, student capstone research)
  - 💼 **Industry / CSR Sponsor** (Equipment co-funding, cold-mix asphalt innovations)
- 1-click **⚡ Fill Demo Pass** and **🚀 Quick Check** instant evaluation bypass for reviewers and evaluators.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend Framework** | React 19.2 + TypeScript 6.0 | Modern concurrent UI architecture |
| **Build Tool** | Vite 8.3 | Ultra-fast HMR and optimized production bundling |
| **Styling** | Tailwind CSS v4 + Vanilla CSS | Responsive, accessible, and government-grade design system |
| **Geospatial & Maps** | Leaflet 1.9 + OpenStreetMap | Interactive GIS map markers, popups, and radius heatmaps |
| **AI / LLM Triage** | OpenRouter API (Gemini, Llama, DeepSeek) | Multilingual civic hazard triage and department routing |
| **Data Visualization** | Recharts 3.10 | Municipal SLA trends, CSAT audit analytics, and budget charts |
| **Icons & UI Assets** | Lucide React | Clean, scalable vector iconography |
| **CI/CD Deployment** | GitHub Actions | Automated build and deployment to GitHub Pages |

---

## 🚀 Quick Start (Local Development)

### 1. Clone the repository
```bash
git clone https://github.com/rihan-png/civic_solve.git
cd civic_solve
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Environment Variables (Optional)
Copy the environment template:
```bash
cp .env.example .env
```
Add your free [OpenRouter API Key](https://openrouter.ai/keys) to `.env`:
```env
VITE_OPENROUTER_API_KEY=your_openrouter_api_key_here
```
*(Note: CivicSolve functions fully out of the box with the built-in deterministic simulation engine if no key is configured! You can also paste your key directly into the AI Engine modal inside the app.)*

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 5. Production Build
```bash
npm run build
```

---

## 🤖 OpenRouter AI Configuration

CivicSolve supports direct live triage with any free or paid model on OpenRouter:
1. Open the app and click the **AI Engine** button in the header.
2. Select your preferred model (e.g. `Google Gemini 2.0 Flash (Free)` or `DeepSeek R1 (Free)`).
3. Optionally enter an API key in the **Custom API Key** field (saved securely in your browser's `localStorage`).
4. Click **Run Live Triage** to see real-time inference with latency benchmarking!

---

## 🌐 GitHub Pages Deployment

The repository includes a GitHub Actions workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) that automatically builds and deploys on every push to `main`.

### To ensure GitHub Pages is enabled:
1. Navigate to **Settings** ➔ **Pages** in this GitHub repository.
2. Under **Build and deployment** ➔ **Source**, ensure **GitHub Actions** is selected.
3. Every commit pushed to `main` triggers a live deployment to:  
   👉 **[https://rihan-png.github.io/civic_solve/](https://rihan-png.github.io/civic_solve/)**

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for more information.
