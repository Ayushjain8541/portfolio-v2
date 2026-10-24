// Personal content from Ayush’s supplied story, resume, public work, and internship notes.
// Keep internal company schemas and implementation details out of this public portfolio.

export type Experience = {
  company: string;
  role: string;
  dates: string;
  receiptRole: string;
  receiptLine?: string;
  recruiterLine: string;
  /** shown under "Earlier experience" in recruiter mode */
  earlier?: boolean;
  bullets?: string[];
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
  recruiter?: string;
  /** icon shown on the polaroid until a real photo exists */
  icon: string;
  /** /public/photos/<photo>.jpg */
  photo?: string;
  link?: string;
  note?: string;
};

export const site = {
  name: "Ayush Jain",
  shortName: "ayush.",
  location: "Singapore",
  tagline: "CS at NUS. Usually building something.",
  links: {
    email: "ayush.jain@u.nus.edu",
    linkedin: "https://www.linkedin.com/in/ayushjainz/",
    github: "https://github.com/Ayushjain8541",
    instagram: "",
    resume: "/resume.pdf",
  },
  loader: [
    "Putting the coffee on",
    "Setting up the chessboard",
    "Finding that ticket to Vietnam",
    "Okay, come on in.",
  ],
  enterButton: "come on in →",
  hero: {
    kicker: "AYUSH JAIN · COMPUTER SCIENCE, NUS",
    titleLine1: "Hey, I’m Ayush.",
    titleLine2: "Come on in.",
    sub: "A borrowed Coursera login, a chess bot, three months in Vietnam, and a hackathon win. There’s a bit of a story behind the stuff in this room.",
    scrollHint: "scroll. I’ll show you around.",
    recruiterCta: "just here for the résumé? ↗",
  },
  origin: {
    label: "where it started",
    title: "A borrowed login.",
    body: "My brother gave me access to his uni’s Coursera account. I took an intro to Python course, then tried building a chess AI. I loved chess. Wasn’t particularly good at it. Apparently my solution was to make the computer play for me.",
    chessTooltip:
      "My first chess bot. It started with liking chess and wanting to see if I could make the computer play it.",
    robotClick:
      "The bike’s staying. There’s a story here too, but that’s for another day.",
    laurelTooltip:
      "That first chess project was when coding stopped being just an exercise.",
  },
  school: {
    label: "temasek jc → nus",
    title: "Okay, I’m doing CS.",
    body: "H2 Computing at Temasek JC meant more projects, more tinkering, and helping organise Building BloCS to teach Python to others. Somewhere in there, coding stopped being just a subject. So I took Computer Science at NUS.",
    footnote:
      "Building BloCS introduced 100+ students to computing. Turns out helping someone else get it is pretty satisfying too.",
    credential: "Temasek JC, 2021–2022 · NUS Computer Science, 2025–present",
    tooltip:
      "H2 Computing, projects, and Building BloCS at Temasek JC. Then a Bachelor of Computing (Honours) in Computer Science at NUS.",
  },
  cycling: {
    tooltip:
      "The bike’s staying. There’s a story here too, but that’s for another day.",
  },
  ticket: {
    stub: {
      from: "SIN",
      to: "SGN",
      year: "2026",
      passengers: "1",
      duration: "3 MTHS",
      fromCity: "Singapore",
      toCity: "Ho Chi Minh City",
    },
    title: "So I went to Vietnam.",
    body: "I winged the NOC application and ended up in Ho Chi Minh City, knowing no one. Three months at Momos, a very fast-moving startup, became three months of shipping, hackathons, café hopping, meeting founders, and travelling Vietnam.",
    footnote:
      "The best part was the people. We kept pushing each other to build. It went from “we’re on an overseas programme” to “we’re building a scene.”",
    subTooltip:
      "NUS Overseas Colleges, Vietnam. May to July 2026. An internship at Momos, a lot of coffee stops, and a cohort that started to feel like a hacker house.",
  },
  work: {
    label: "the laptop",
    windowTitle: "~/things-i-built",
    intro:
      "Some shipped at work. Some started at a hackathon. Some were just me wondering if I could make something work.",
    sidebar: {
      featured: "selected work",
      more: "on the side",
    },
  },
  receipt: {
    label: "the work behind the story",
    title: "A few things shipped.",
    body: "The internship version of the story. A lot of learning by doing, asking better questions, and finding out that shipping is more than getting the code to run.",
    header: "AYUSH JAIN · THE WORK SO FAR",
    order: "Singapore ↔ Ho Chi Minh City",
    extrasLabel: "also picked up",
    extras: ["TypeScript", "Python", "AWS", "Postgres", "asking why"],
    subtotal: "subtotal: a lot learned",
    tip: "still plenty to figure out.",
    footer: "next chapter? let’s talk.",
  },
  events: {
    label: "aabw · vietnam · july 2026",
    title: "We actually won.",
    body: "Our team, the Goopers, went into Agentic AI Build Week and came out as Founder Track winners with BrainSquared. A last-minute pivot, one very long night, and a team that somehow kept it together.",
    takeaway:
      "Winning was surreal. But meeting founders who were building genuinely useful stuff was the part that stuck. It made me want to build better things.",
    result: "BrainSquared · Founder Track winner",
    post: "https://www.linkedin.com/feed/update/urn:li:activity:7482362876209356800/",
    teamPost:
      "https://www.linkedin.com/feed/update/urn:li:activity:7483059442851282944/",
  },
  twin: {
    label: "a few things about me",
    title: "Anything else?",
    body: "Ask about the projects, NOC, or how this all started.",
    chips: [
      "What happened in Vietnam?",
      "Tell me about the hackathon",
      "What have you built?",
      "How did you get into coding?",
    ],
    placeholder: "what do you want to know?",
    unknown:
      "I haven’t written that one down yet. Drop me a message and ask me properly.",
    disclaimer:
      "A small guide with replies I’ve written. Not a live AI version of me.",
    limit: "That’s a full page for now. You can reach the actual me by email.",
    maxMessages: 10,
  },
  night: {
    kicker: "SINGAPORE · ONE MORE CUP",
    title: "Coffee sometime?",
    body: "About something you’re building, something I’ve built, or a good place to ride. I’m up for a chat.",
    doNotClick: "one last detour",
    doNotClickAfter: "worth the detour.",
    footer: "Ayush Jain · still building, still figuring it out.",
  },
  caffeine: {
    low: "Coffee break? The espresso machine still works.",
    refilled: "Okay, ready for another lap.",
  },
  sneakers: "The gear changes. The curiosity stays.",
  showSneakers: false,
  consoleMessage:
    "Hey, you found the code. If you’re building something interesting, drop me a message: ",
  experience: [
    {
      company: "Momos",
      role: "Software Engineering Intern (Backend)",
      dates: "May 2026 – Jul 2026",
      receiptRole: "backend engineering intern",
      receiptLine: "production backend · NOC Vietnam",
      recruiterLine:
        "Owned and shipped a production backend integration across two TypeScript/Node.js services and a React frontend, from discovery and data modelling through testing and launch.",
      bullets: [
        "Aligned five cross-functional teams and automated approximately 10 hours of manual work per week.",
        "Built an event-driven AWS pipeline with API Gateway, SQS, and Lambda, with idempotent writes, scheduled reconciliation, and monitoring.",
        "Optimised Lambda dependency loading to maintain p99 API latency below 500 ms, and designed a billing-integration data model with recovery and write ordering in mind.",
      ],
    },
    {
      company: "Welyft",
      role: "Software Engineer Intern",
      dates: "Mar 2025 – Aug 2025",
      receiptRole: "software engineer intern",
      receiptLine: "chatbot automation · full-stack development",
      recruiterLine:
        "Built an AWS EC2-hosted chatbot automation system, automated compliance workflows, and shipped a responsive customer-facing landing site.",
      bullets: [
        "Reduced manual scheduling effort by more than 60% with chatbot automation.",
        "Automated monthly CPF workflows using Python, n8n, PGP encryption, and SFTP.",
        "Built the landing site with TypeScript and Tailwind CSS.",
      ],
    },
  ] as Experience[],
  projects: [
    {
      id: "brainsquared",
      title: "BrainSquared",
      line: "Company knowledge, without everyone having to dig through old chats. Built with the Goopers. Won the AABW Founder Track.",
      recruiterLine:
        "Co-built an organisational AI memory layer that turns prompts, workflows, agent setups, and decisions into a reusable knowledge graph. Designed structured extraction, deduplication, and standards validation, with governed knowledge exposed through MCP.",
      stack: ["TypeScript", "Knowledge graphs", "MCP"],
      date: "Jul 2026 · AABW winner",
      featured: true,
      link: "https://github.com/Luigi-Simon/BrainSquared",
    },
    {
      id: "learngraph",
      title: "LearnGraph",
      line: "Your notes know what you’ve read. This tries to figure out what you actually understand.",
      recruiterLine:
        "Led backend development of an adaptive learning platform at OpenAI Build Week, Education Track. Built FastAPI/Postgres ingestion, pgvector and BM25 hybrid retrieval with reciprocal rank fusion, evidence-based flashcards, RAG grading, and prerequisite-aware mastery updates exposed through MCP.",
      stack: ["FastAPI", "PostgreSQL", "pgvector", "RAG"],
      date: "Jul 2026 · OpenAI Build Week",
      featured: true,
    },
    {
      id: "momos-backend",
      title: "Shipping at Momos",
      line: "An internship project that went all the way from “why are we doing this by hand?” to a production backend integration.",
      recruiterLine:
        "Owned an event-driven integration across two Node.js services and a React frontend. API Gateway, SQS, and Lambda handle the event flow, with idempotent writes and scheduled reconciliation. Automated approximately 10 hours of manual work per week.",
      stack: ["TypeScript", "AWS", "Node.js", "React"],
      date: "May–Jul 2026",
      featured: true,
    },
    {
      id: "second-brain",
      title: "Second Brain",
      line: "A place for what I learn, so the next project doesn’t start from zero. Notes go in, a connected wiki comes out.",
      recruiterLine:
        "A local knowledge vault with a browsing dashboard, an ingestion workflow for linked wiki pages, and a queryable knowledge graph for AI tools. Keeps source notes separate from synthesised knowledge.",
      stack: ["Python", "Knowledge graphs", "MCP"],
      featured: true,
      link: "https://github.com/Ayushjain8541/second-brain",
    },
    {
      id: "chess",
      title: "Chess, in Python",
      line: "The project that got me hooked. I liked chess, so I tried making a computer play it. This link is the early Pygame chess code.",
      recruiterLine:
        "An early Python/Pygame chess project with an interactive board and a separate rules engine. A browser-playable version of the bot is something I’d like to add later.",
      stack: ["Python", "Pygame"],
      featured: false,
      link: "https://github.com/Ayushjain8541/chess-game",
    },
    {
      id: "url-shortener",
      title: "URL Shortener",
      line: "A small project that turned into a proper look at redirects, caching, click counts, and what happens under load.",
      recruiterLine:
        "Built a React/Express/Postgres URL shortener with deterministic Base62 codes, click analytics, a redirect cache, batched click tracking, Docker Compose, and local load testing.",
      stack: ["React", "Express", "PostgreSQL", "Docker"],
      featured: false,
      link: "https://github.com/Ayushjain8541/url_shortener",
    },
    {
      id: "project-helper",
      title: "CS Project Helper",
      line: "For the “I want to build something, but where do I even start?” stage. A project planner for CS students.",
      recruiterLine:
        "A full-stack project-planning tool for computer science students, with a TypeScript frontend and Python backend.",
      stack: ["TypeScript", "Python"],
      featured: false,
      link: "https://github.com/Ayushjain8541/CS-Project-Helper",
    },
    {
      id: "resume-analyser",
      title: "AI Resume Analyser",
      line: "Upload a résumé, get structured feedback, and figure out what to work on next.",
      recruiterLine:
        "A resume-review interface with PDF upload, structured feedback, and scoring views, built with React Router and TypeScript.",
      stack: ["TypeScript", "React Router", "AI"],
      featured: false,
      link: "https://github.com/Ayushjain8541/AI-Resume-Analyser",
    },
  ] as Project[],
  leadership: [
    {
      title: "That AABW win",
      polaroid:
        "BrainSquared won the Founder Track at Agentic AI Build Week in Vietnam. We were pretty happy just to have shipped something. Winning was a bit surreal.",
      recruiter:
        "Co-built BrainSquared with the Goopers and won the Agentic AI Build Week Founder Track in July 2026.",
      icon: "✦",
      note: "AABW · JUL 2026",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7482362876209356800/",
    },
    {
      title: "The Goopers",
      polaroid:
        "A last-minute pivot, very little sleep, and a team that kept going. Really glad I got to share this one with them.",
      icon: "✳",
      note: "TEAM GOOPERS",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7483059442851282944/",
    },
    {
      title: "Building a scene",
      polaroid:
        "The NOC Vietnam cohort made three months abroad feel like a hacker house. We supported each other, kept building, and somehow turned an overseas programme into a little scene of our own.",
      recruiter:
        "Completed NUS Overseas Colleges in Ho Chi Minh City, Vietnam, alongside an internship at Momos from May to July 2026.",
      icon: "↗",
      note: "NOC · VIETNAM",
    },
  ] as Leadership[],
  skills: {
    languages: ["TypeScript", "JavaScript", "Python", "Java", "SQL", "C"],
    dataMl: [
      "LLM applications",
      "RAG",
      "Knowledge graphs",
      "MCP",
      "Hybrid retrieval",
      "pgvector",
    ],
    platforms: ["AWS", "PostgreSQL", "MySQL", "MongoDB", "Supabase"],
    consulting: [
      "Node.js",
      "Express",
      "FastAPI",
      "React",
      "Next.js",
      "Docker",
      "Terraform",
      "Datadog",
      "Jest",
      "JUnit",
    ],
  },
  education: {
    school: "National University of Singapore",
    degree: "Bachelor of Computing (Honours), Computer Science",
    dates: "Aug 2025 – Present",
  },
  recruiter: {
    title: "Computer Science at NUS · Backend engineering & applied AI",
    summary: [
      "I’m a Computer Science student at NUS who likes building things that solve a real problem, from production backend integrations to tools built around LLMs and knowledge graphs.",
      "At Momos in Ho Chi Minh City, I owned a backend project end to end during NUS Overseas Colleges. Before that, I built automation systems and shipped a landing site at Welyft.",
      "With the Goopers, I co-built BrainSquared and won the Founder Track at Agentic AI Build Week. I also led backend development for LearnGraph at OpenAI Build Week.",
    ],
    banner: "This is the short version. The full room is here →",
    back: "back to the room →",
  },
  seo: {
    title: "Ayush Jain · building things, figuring it out",
    description:
      "Computer Science at NUS, backend engineering, applied AI, and a few good detours. Explore Ayush’s journey through a room of chess, coffee, and a ticket to Vietnam.",
  },
};

export const SHOW_UNCONFIRMED = false;
export const visibleProjects = site.projects.filter(
  (p: Project) => SHOW_UNCONFIRMED || !p.confirm,
);
export const chapters = [
  { id: "hero", label: "welcome" },
  { id: "origin", label: "first lines" },
  { id: "school", label: "school" },
  { id: "ticket", label: "vietnam" },
  { id: "work", label: "projects" },
  { id: "receipt", label: "experience" },
  { id: "events", label: "aabw" },
  { id: "twin", label: "notebook" },
  { id: "night", label: "coffee?" },
] as const;
export type ChapterId = (typeof chapters)[number]["id"];
export const chapterIndex = Object.fromEntries(
  chapters.map((chapter, index) => [chapter.id, index]),
) as Record<ChapterId, number>;
