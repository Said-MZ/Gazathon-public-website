# Gazathon Public Website

A Next.js public website for Gazathon with demo donation flows and bundled demo content.

## 2-minute local setup with Docker

You only need Docker Desktop (or Docker Engine with the Compose plugin). No local Node.js install is required.

```bash
git clone <repo-url>
cd Gazathon-public-website
docker compose up --build
```

Open [http://localhost:3000](http://localhost:3000) when the container starts.

The container runs `npm run seed` before starting the production Next.js server. The seed step is intentionally fast and confirms that all demo data is bundled in the app; there is no database or extra service to configure.

To stop the app:

```bash
docker compose down
```

## Local development without Docker

If you prefer running the app directly on your machine:

```bash
npm ci
npm run seed
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Useful commands

```bash
npm run dev        # Start the Next.js dev server
npm run build      # Build the production app
npm run start      # Start the standalone production app after building
npm run smoke      # Smoke-test the built standalone app
npm run seed       # Verify bundled demo seed data
docker compose up --build  # Build and run the app in Docker
```
