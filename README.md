# Café & Cadence

An interactive portfolio prototype themed around cafés, cycling, and a personal journey. Built with Next.js, React Three Fiber, and GSAP, with an explorable 3D room and a scroll-driven story.

## Run

Node 20.9+ is required.

```sh
npm ci
npm run dev -- --hostname 127.0.0.1 --port 3000
```

Open http://127.0.0.1:3000 and choose **come on in**.

## This first pass

- Sage café walls, warm timber, a chalkboard menu, a miniature café, and a new neon sign.
- A custom 3D road bicycle; click it or use **take a spin** to turn its wheels.
- The original eight-chapter camera journey, golden-hour-to-night lighting, coffee refill, receipt printer, photo wall, and project window.
- A scripted café notebook that works locally without credentials. It does not use a model or represent anyone’s personal biography.
- A short version at `/recruiter` for accessible, quick reading.
- Personal claims, the previous owner’s contact links, and their resume have been removed from the displayed experience. Empty personal links stay hidden.

## Personalize later

`content/site.ts` is the main editing point for your name, biography, projects, experience, education, contact links, captions, and chapter copy. Work and life placeholders are explicitly marked. Replace `name: "Your name"` when ready.

Add your photos to `public/photos/<name>.jpg` and set each entry’s `photo` field in `site.leadership`. Add your own PDF, then set `site.links.resume` to its path. The short-version resume button will appear when that link is present.

The bicycle is in `components/experience/objects/Bicycle.tsx`; object placement is in `components/experience/Room.tsx`; desktop/mobile camera paths are in `lib/cameraPath.ts`.

## Validation

```sh
npm run build
npx tsc --noEmit
```

Run type checking after the first build or `npx next typegen`, which generates Next.js route types. The upstream scripts in `scripts/` are retained as references; several still target the original site’s labels and content. This adaptation was checked through browser controls.

## Repository

Your repository is [Ayushjain8541/portfolio-v2](https://github.com/Ayushjain8541/portfolio-v2), connected as `origin`; the working branch is `main`. The original project is retained as the `upstream` remote. No deployment has been created.
