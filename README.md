# 🏛️ CivicSolve · Geospatial Civic Problem-Solving Platform
> **Government of India · Smart Cities Mission & Quadruple-Helix Civic Architecture**

CivicSolve is a next-generation geospatial civic infrastructure platform designed to bridge citizens, municipal authorities (ULB), grassroots civil society (NGOs), academia (Universities), and private enterprise (Industry/CSR) for transparent, rapid urban problem resolution.

---

## 🌟 Key Features

1. **Geospatial Defect Reporting & Watermarked Evidence**:
   - High-definition camera capture with real-time GPS coordinates, NavIC satellite lock, WGS-84 datum, and tamper-proof SHA-256 EXIF timestamp watermark.
   - Live camera viewfinder HUD with optical reticle, crosshair, and compass bearing.
2. **Citizen Civic Hub & Live 5-Step Work Tracker**:
   - 5-step repair milestone lifecycle: `Report Geotagged` ➔ `AI Severity Triage` ➔ `Crew Dispatched` ➔ `Physical Repair` ➔ `Citizen Feedback & QC`.
   - Side-by-side geotagged before-and-after repair inspections.
   - Resident quality feedback form (1–5 stars, asphalt flushness, drainage QC, comments) with instant government audit clearance.
3. **Municipal Admin & AI Governance Command**:
   - Incident triage, heatmaps, SLA tracking, priority overrides, and live Citizen CSAT / Contractor Performance Audit ledger for transparent payment clearance.
4. **NGO & Grassroots Civil Society Portal**:
   - Independent verification audits, vulnerable resident outreach, and field relief.
5. **University & Academic Research Workspace**:
   - Applied civic R&D lab integrations, sensor data APIs, and student engineering capstone teams.
6. **Industry & Corporate CSR Hub**:
   - Hardware prototyping, IoT vibration sensing, cold-mix asphalt innovations, and corporate CSR co-funding grants.
7. **Jan Parichay SSO Authentication**:
   - Official 2026 National Single Sign-On modal with 5 role profiles, 1-click **⚡ Fill Demo Pass**, and **🚀 Quick Check** instant evaluation bypass.

---

## 🛠️ Technology Stack

- **Framework**: React 19 + TypeScript
- **Styling**: Tailwind CSS v4 + Vanilla CSS Design System
- **Mapping**: Leaflet + OpenStreetMap + Geospatial Coordinates
- **Icons**: Lucide React
- **Build Tool**: Vite 8.3
- **Deployment**: GitHub Pages via automated GitHub Actions workflow

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Clone repository
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Build production bundle
npm run build
```

---

## 🌐 Deploying to GitHub Pages

This repository is pre-configured with an automated **GitHub Actions** deployment workflow (`.github/workflows/deploy.yml`).

### Steps to Deploy:
1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "feat: CivicSolve 2026 production release"
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPOSITORY_NAME>.git
   git branch -M main
   git push -u origin main
   ```

2. **Enable GitHub Pages in your Repository Settings**:
   - Go to your repository on [GitHub.com](https://github.com).
   - Click **Settings** ➔ **Pages** (in the left sidebar).
   - Under **Build and deployment** ➔ **Source**, select **GitHub Actions**.
   - GitHub will automatically run the build and deploy workflow!
   - Your live site will be published at:  
     `https://<YOUR_GITHUB_USERNAME>.github.io/<YOUR_REPOSITORY_NAME>/`

---

## 📜 License
Released under the MIT License for public civic infrastructure empowerment.
