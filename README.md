# Café & Cadence

An interactive portfolio prototype themed around cafés, cycling, and a personal journey. Built with Next.js, React Three Fiber, and GSAP, with an explorable 3D room and a scroll-driven story.

## Run

Node 20.9+ is required.

```sh
npm ci
npm run dev -- --hostname 127.0.0.1 --port 3000
```

Open http://127.0.0.1:3000 and choose **come on in**.

## The room

- A chessboard for the first Python project and chess bot.
- A Python notebook for Temasek JC, Building BloCS, and NUS.
- A SIN → SGN ticket for three months of NOC Vietnam.
- Laptop folders with selected work and side projects, plus a receipt printer for internships.
- An AABW trophy and photo wall for the Goopers’ Founder Track win.
- An interactive road bicycle, coffee machine, authored question guide, and evening contact scene.
- A short version at `/recruiter`, with technical details and the supplied resume.

## Edit content

`content/site.ts` is the main editing point for story, projects, experience, education, contacts, and captions. Keep the scenic route about the personal journey; technical depth belongs in project details and experience. Each story is a separate room object.

Personal photographs are pending. Add photos to `public/photos/<name>.jpg` and set each entry’s `photo` field in `site.leadership` to replace its labeled placeholder. The supplied resume lives at `public/resume.pdf`. The chess project links to the current code; a playable bot will come later.

Object placement is in `components/experience/Room.tsx`; desktop/mobile camera paths are in `lib/cameraPath.ts`. The question guide uses authored replies in `content/twin-fallback.ts` and does not call a model.

## Validation

```sh
npm run build
npx tsc --noEmit
```

Run type checking after the first build or `npx next typegen`, which generates Next.js route types. The upstream scripts in `scripts/` are retained as references; several still target the original site’s labels and content. This adaptation was checked through browser controls.

## Repository

Your repository is [Ayushjain8541/portfolio-v2](https://github.com/Ayushjain8541/portfolio-v2), connected as `origin`; the working branch is `main`. The original project is retained as the `upstream` remote. No deployment has been created.
