# First adaptation verification

Verified on 24 October 2026 against the local production build.

- `npm run build`: passed; all routes compiled and generated.
- `npx tsc --noEmit`: passed after route type generation.
- `git diff --check`: passed.
- Design detector on the new bicycle, room, origin actions, closing actions, and short version: no findings.
- Desktop at 1440 × 900 and mobile at 390 × 844: scene and text render, with no horizontal document overflow. The mobile bicycle framing was widened during the final pass.
- Chapter navigation, bicycle interaction, project details, and café notebook prompt/reply: exercised through the browser interface.
- `/` and `/recruiter`: HTTP 200, with original owner's personal content absent from rendered HTML.
- `/opengraph-image`: HTTP 200 and PNG content type.
- `/api/twin`: scripted reply returned 200; empty and overlong messages returned 400.

This is a visual first pass. Personal name, projects, experience, education, contact details, resume, and photos remain unprovided and explicitly marked or hidden. The café notebook is scripted, not a personal AI twin. No deployment or remote repository was created. Browser inspection encountered an upstream Three.js clock deprecation warning; it did not prevent the scene or checked interactions from running. The removed soft-shadow mode was updated to the supported percentage mode.

The upstream capture scripts remain reference material and were not used as this adaptation's test suite.
