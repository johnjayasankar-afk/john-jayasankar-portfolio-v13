# John Jayasankar — personal site

Vite + React + TypeScript. Ready for GitHub and Vercel.

## Deploy on Vercel

1. Unzip this folder and push it to a new GitHub repo (the folder contents should be the repo root — `package.json` at the top level).
2. In [Vercel](https://vercel.com/new), import that repo.
3. Leave the defaults: Framework **Vite**, build `npm run build`, output `dist`.
4. Deploy. Routes like `/about` and `/work` are rewritten to `index.html` via `vercel.json`.

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.
