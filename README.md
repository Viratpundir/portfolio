# Portfolio (Virat Pundir)

This is a minimal Vite + React portfolio site generated and populated with the provided info.

## Run locally

```bash
cd "c:\Users\Virat Singh Pundir\OneDrive\Desktop\portfolio"
npm install
npm run dev
```

Open the URL shown by Vite (usually http://127.0.0.1:4173/).

## What I changed
- Added `src/data.js` and wired `src/App.jsx` to read data from it.
- Added basic styling in `src/style.css` and Vite project files.

## Next steps
- Replace `src/data.js` contact `#` links with real URLs.
- Add images or a resume PDF in `public/` and link them.
 
## Deploy

Vercel (recommended):

1. Connect this repository in Vercel.
2. Vercel will detect the project. Set the build command to `npm run build` and the output directory to `dist` (the provided `vercel.json` already configures this).

GitHub Pages (optional):

1. Install the deploy helper: `npm install --save-dev gh-pages`.
2. Run `npm run deploy:gh` to build and publish the `dist` folder to GitHub Pages (ensure the repo is pushed to GitHub first).

## Resume

- A placeholder `public/resume.pdf` was added and the "Download Resume" button links to it. Replace `public/resume.pdf` with your actual resume PDF to enable downloads.
