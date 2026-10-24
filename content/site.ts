// Personal story and contact details are intentionally pending.
// Empty links are hidden until real destinations are supplied.

export type Experience = {
  company: string;
  role: string;
  dates: string;
  receiptRole: string;
  receiptLine?: string;
  recruiterLine: string;
  /** shown under "Earlier experience" in recruiter mode */
  earlier?: boolean;
};

export type Project = {
  id: string;
  title: string;
  line: string;
  recruiterLine: string;
  stack: string[];
  link?: string;
  date?: string;
  featured: boolean;
  /** Optional draft visibility flag. */
  confirm?: boolean;
};

export type Leadership = {
  title: string;
  polaroid: string;
  recruiter: string;
  /** icon shown on the polaroid until a real photo exists */
  icon: string;
  /** /public/photos/<photo>.jpg */
  photo?: string;
};

export const site = {
  name: "Your name",
  shortName: "café & cadence",
  location: "a café somewhere",
  tagline: "a life in motion. a coffee in hand.",
  links: {
  "email": "",
  "linkedin": "",
  "github": "",
  "instagram": "",
  "resume": ""
},
  loader: [
  "warming up the espresso machine",
  "checking the tyre pressure",
  "taking the scenic route",
  "your table is ready."
],
  enterButton: "come on in →",
  hero: {
  "kicker": "CAFÉ & CADENCE · A PORTFOLIO IN PROGRESS",
  "titleLine1": "life, in motion.",
  "titleLine2": "coffee in hand.",
  "sub": "a corner for the things i make, the roads i ride, and everything in between.",
  "scrollHint": "take the scenic route. scroll to explore.",
  "recruiterCta": "the short version ↗"
},
  origin: {
  "label": "the ride",
  "title": "two wheels. endless detours.",
  "body": "the ride is part of the story. so is the coffee stop along the way.",
  "robotClick": "a little momentum goes a long way. wheels spinning, coffee waiting.",
  "laurelTooltip": "a reminder to slow down, look around, and enjoy the ride."
},
  ticket: {
  "stub": {
    "from": "HERE",
    "to": "NEXT",
    "year": "OPEN",
    "passengers": "1",
    "age": "∞"
  },
  "title": "the scenic route.",
  "body": "some turns take you somewhere new. others bring you back to yourself.",
  "footnote": "your places, turning points, and milestones will go here. the story can wait; the journey has a home.",
  "subTooltip": "the café: a place to pause between wherever you were and wherever you’re going."
},
  work: {
  "label": "on the table",
  "windowTitle": "~/selected-work",
  "intro": "a place for the things i make. personal projects will replace the marked spaces below.",
  "sidebar": {
    "featured": "selected",
    "more": "on the side"
  }
},
  receipt: {
  "label": "the experience",
  "title": "a little of everything.",
  "body": "every chapter adds something. your experience will be itemized here, one line at a time.",
  "header": "CAFÉ & CADENCE",
  "order": "one journey · table by the window",
  "extrasLabel": "on the house",
  "extras": [
    "curiosity",
    "coffee",
    "a change of scenery"
  ],
  "subtotal": "subtotal: still becoming",
  "tip": "take your time.",
  "footer": "there’s always another chapter."
},
  events: {
  "label": "off the clock",
  "title": "the bits in between.",
  "body": "a wall for rides, cafés, people, and the small things worth keeping. your photos go here."
},
  twin: {
  "label": "the café notebook",
  "title": "pull up a chair.",
  "body": "a small guide to this space. personal stories can be added later.",
  "chips": [
    "what is this place?",
    "show me the projects",
    "why cycling and coffee?",
    "what can i explore?"
  ],
  "placeholder": "ask about this space…",
  "unknown": "that page hasn’t been written yet. for now, explore the ride, the work, and the photo wall.",
  "disclaimer": "an interactive preview with scripted replies. your personal story comes later.",
  "limit": "that’s a full notebook for now. take another lap around the café.",
  "maxMessages": 10
},
  night: {
  "kicker": "LAST LIGHT · ONE MORE CUP",
  "title": "same time tomorrow?",
  "body": "for a coffee, a ride, or a good conversation. there’s always room at the table.",
  "doNotClick": "one last detour",
  "doNotClickAfter": "always worth the detour.",
  "footer": "café & cadence · a portfolio taking shape"
},
  caffeine: {
  "low": "time for a pit stop. click the espresso machine.",
  "refilled": "fresh espresso. ready for another lap."
},
  sneakers: "the gear changes. the curiosity stays.",
  showSneakers: false,
  consoleMessage: "a little coffee, a little code, a little motion. welcome to café & cadence.",
  experience: [
  {
    "company": "the beginning",
    "role": "Your first chapter",
    "dates": "to be added",
    "receiptRole": "first chapter",
    "receiptLine": "your starting point goes here",
    "recruiterLine": "Placeholder: add your first role, project, or meaningful starting point."
  },
  {
    "company": "the detour",
    "role": "Your turning point",
    "dates": "to be added",
    "receiptRole": "a new direction",
    "receiptLine": "the experience that changed things",
    "recruiterLine": "Placeholder: add a role, a change of direction, or something you learned."
  },
  {
    "company": "the next stop",
    "role": "What you’re doing now",
    "dates": "to be added",
    "receiptRole": "the next chapter",
    "receiptLine": "still unfolding",
    "recruiterLine": "Placeholder: add your current work and what you want to do next."
  }
] as Experience[],
  projects: [
  {
    "id": "this-space",
    "title": "Café & Cadence",
    "line": "this little corner of the internet. a 3D café, a bicycle, and a story waiting to unfold.",
    "recruiterLine": "An interactive portfolio adapted from an MIT-licensed Next.js and Three.js base, with a custom bicycle and café theme.",
    "stack": [
      "Next.js",
      "Three.js",
      "GSAP"
    ],
    "featured": true
  },
  {
    "id": "project-one",
    "title": "Your first project",
    "line": "a reserved space for something you’re proud of. add its story, details, and link when you’re ready.",
    "recruiterLine": "Placeholder: replace with a real project, your contribution, and its result.",
    "stack": [
      "placeholder"
    ],
    "featured": true
  },
  {
    "id": "project-two",
    "title": "Another good idea",
    "line": "a side project, a collaboration, or a problem you couldn’t leave alone. this space is yours.",
    "recruiterLine": "Placeholder: replace with another real project and its supporting evidence.",
    "stack": [
      "placeholder"
    ],
    "featured": true
  },
  {
    "id": "field-notes",
    "title": "Field notes",
    "line": "a reserved page for experiments, observations, and things learned along the way.",
    "recruiterLine": "Placeholder: add an experiment, journal, or small piece of work.",
    "stack": [
      "placeholder"
    ],
    "featured": false
  }
] as Project[],
  leadership: [
  {
    "title": "the morning ride",
    "polaroid": "Photo space: a ride worth remembering. Add your own photo and caption here.",
    "recruiter": "Placeholder: a ride or personal milestone.",
    "icon": "↗"
  },
  {
    "title": "the usual order",
    "polaroid": "Photo space: your favourite café, a good cup, or a familiar corner.",
    "recruiter": "Placeholder: your café ritual.",
    "icon": "☕"
  },
  {
    "title": "a good detour",
    "polaroid": "Photo space: somewhere you found by taking the long way home.",
    "recruiter": "Placeholder: a place that matters to you.",
    "icon": "↝"
  },
  {
    "title": "good company",
    "polaroid": "Photo space: the people who make the journey worth it.",
    "recruiter": "Placeholder: a community or collaboration.",
    "icon": "✳"
  },
  {
    "title": "a small win",
    "polaroid": "Photo space: something you worked toward, however big or small.",
    "recruiter": "Placeholder: an achievement you want to share.",
    "icon": "✦"
  },
  {
    "title": "what’s next",
    "polaroid": "Photo space: an open road, an unfinished idea, a next chapter.",
    "recruiter": "Placeholder: what you’re looking forward to.",
    "icon": "→"
  }
] as Leadership[],
  skills: {
  "languages": [
    "to be added"
  ],
  "dataMl": [
    "to be added"
  ],
  "platforms": [
    "to be added"
  ],
  "consulting": [
    "to be added"
  ]
},
  education: {
  "school": "Your school or learning path",
  "degree": "to be added",
  "dates": "to be added"
},
  recruiter: {
  "title": "A portfolio in progress",
  "summary": [
    "This is the short version of Café & Cadence: a personal portfolio built around cafés, cycling, and a journey still being written.",
    "The visual base is ready to explore. Personal details, projects, experience, and contact links are intentionally waiting for real content."
  ],
  "banner": "you’re in the short version. explore the full café →",
  "back": "back to the café →"
},
  seo: {
  "title": "Café & Cadence · a portfolio in motion",
  "description": "An interactive portfolio of coffee, cycling, and the things made along the way. A personal space taking shape."
},
};

export const SHOW_UNCONFIRMED = false;
export const visibleProjects = site.projects.filter((p: Project) => SHOW_UNCONFIRMED || !p.confirm);
export const chapters = [
  { id: "hero", label: "welcome" }, { id: "origin", label: "the ride" },
  { id: "ticket", label: "the route" }, { id: "work", label: "the work" },
  { id: "receipt", label: "experience" }, { id: "events", label: "moments" },
  { id: "twin", label: "notebook" }, { id: "night", label: "last cup" },
] as const;
export type ChapterId = (typeof chapters)[number]["id"];
