// ─────────────────────────────────────────────────────────────────────────────
// DATA — edit here to update the entire site
// ─────────────────────────────────────────────────────────────────────────────

export const SITE = {
  name: "Satvik Kumar",
  email: "satvikkumar2101@gmail.com",
  linkedin: "https://linkedin.com/in/21satvikkumar",
  github: "https://github.com/21satvik",
  cvLink: "/pdf/resume.pdf",
  location: "Dublin, Ireland",
  available: true,
  avatar: "https://avatars.githubusercontent.com/u/68138315?v=4",
};

export const HERO = {
  headline: ["I turn data", "into decisions."],
  sub: "Analytics & Consultancy — from raw pipelines to the boardroom slide. MSc Business Analytics, UCD Dublin. Graduating 2026. Open to data analyst and strategy roles.",
};

export const ABOUT = {
  opening: "Engineer turned analyst. I like understanding why things work, not just making them work.",
  paragraphs: [
    "I have a background in software engineering — real production work at Samsung R&D, research at McGill, mobile apps. Over time I found myself more drawn to the business questions behind the technical ones: what does this data actually mean, and what should we do about it.",
    "That led me to UCD's MSc in Business Analytics, where I've been applying that engineering mindset to data, strategy, and decision-making. I'm comfortable working across both technical and business teams, which tends to be where the most interesting problems live.",
    "Currently based in Dublin, graduating in 2026, and looking for roles in data analytics or strategy.",
  ],
  facts: [
    { label: "Based in",    value: "Dublin, Ireland" },
    { label: "Currently",   value: "MSc Business Analytics, UCD" },
    { label: "Previously",  value: "Samsung · McGill · Canverro" },
    { label: "Looking for", value: "Data Analyst · Strategy roles in tech or finance" },
  ],
};

export const RECOMMENDATIONS = [
  {
    text: "Satvik successfully converted the existing IMAGE project Chrome extension to create a prototype that works on Safari, including iOS. Even after his internship officially ended, he continued to assist with documentation and testing. I appreciated his dedication, and his ability to make progress with limited oversight.",
    author: "Jeffrey Blum",
    role: "Mentor, McGill SRL Lab · Mitacs 2023",
    context: "McGill University",
    logo: "/images/mcgill.jpeg",
    avatar: "/images/jeffrey-blum.jpeg",
  },
  {
    text: "I had seen Satvik's work at Samsung Prism Research Internship as I was part of the research as a Professor. While working on this project he has shown extraordinary research skills to come up with proof of concept for the problem which didn't have any prior solution.",
    author: "Dr. C. Malathy",
    role: "Professor, SRM Institute of Science & Technology",
    context: "Samsung Prism Research",
    logo: "/images/samsung.jpeg",
    avatar: "/images/malathy.jpeg",
  },
  {
    text: "I first associated with Satvik Kumar when I presented him with a prize in a Hackathon. He has exhibited an excellent set of qualities as a student as well as an individual, with his unique perspective and learning of the subject matter.",
    author: "Dr. M. Pushpalatha",
    role: "Head of Department, SRM Institute of Science & Technology",
    context: "Ultron Hackathon",
    logo: "/images/srm.jpeg",
    avatar: null,
  },
];

export const STATS = [
  { num: "3.95/4.2",   label: "Business Analytics at UCD" },
  { num: "9.08/10",    label: "Computer Science at SRM" },
  { num: "3",  label: "Countries worked in" },
  { num: "2026", label: "Graduating in" },
];

export const EXPERIENCE = [
  {
    company: "University College Dublin",
    logo: "/images/ucd.jpeg",
    role: "Tutor",
    dept: "Business Analytics",
    period: "Jan 2026 – Present",
    location: "Dublin",
    description: "Alongside my MSc, I tutor undergraduate students through analytics projects — covering everything from statistical methods to translating model outputs into business recommendations.",
    bullets: [
      "Mentored students through end-to-end analytics projects, from data cleaning to stakeholder presentation",
      "Bridged the gap between statistical theory and practical business application",
    ],
  },
  {
    company: "Canverro",
    logo: "/images/canverro.jpeg",
    role: "Data Analyst",
    dept: null,
    period: "Jun 2024 – Feb 2025",
    location: "Bengaluru · Remote",
    description: "Early-stage startup where I owned the analytics function end-to-end — from raw transaction data to dashboards the business actually made decisions from.",
    bullets: [
      "Identified top-performing products from transaction data → 15% uplift in homepage conversion",
      "Automated dashboards tracking CTR, Bounce Rate, AOV → 150+ hours saved annually",
      "Translated behavioural patterns into actionable marketing strategy across cross-functional teams",
    ],
  },
  {
    company: "McGill University",
    logo: "/images/mcgill.jpeg",
    role: "Research Intern",
    dept: "Mitacs Globalink Scholar",
    period: "Jun – Sep 2023",
    location: "Montreal",
    description: "Spent a summer in Montreal building accessibility tech as a Mitacs Globalink Research Scholar — a competitive international programme drawing thousands of applicants annually. The goal: help visually impaired users interpret charts and graphics on the web.",
    bullets: [
      "Selected for the Mitacs Globalink scholarship from a large international applicant pool to research at McGill's SRL Lab",
      "Built a mobile browser extension to interpret graphical content for visually impaired users",
      "Integrated voice assistant, haptic feedback, and multi-sensory options into iOS Safari using Swift",
    ],
  },
  {
    company: "Samsung R&D Institute",
    logo: "/images/samsung.jpeg",
    role: "R&D Intern",
    dept: "Prism Programme",
    period: "Dec 2021 – Oct 2022",
    location: "Bengaluru",
    description: "Worked on video processing research at Samsung's R&D division — building systems for stitching and rendering high field-of-view video content.",
    bullets: [
      "Engineered a video frame stitching system to expand field-of-view for event-based content",
      "Built an interactive player for panning and rendering viewports across stitched frames",
    ],
  },
  {
    company: "DeepKlarity",
    logo: "/images/deepklarity.jpeg",
    role: "SDE Intern",
    dept: null,
    period: "Apr 2022",
    location: "Bengaluru · Remote",
    description: "Built offline-first mobile applications and data collection tooling.",
    bullets: [
      "Built mobile applications with offline mode using local database access",
      "Developed Python scraping scripts for structured data collection and refinement",
    ],
  },
];

export const PROJECTS = [
  {
    slug: "logguard",
    name: "LogGuard",
    tagline: "GenAI that reads your logs without reading your data.",
    year: "2026",
    status: "Complete",
    category: "RAG · Agentic AI",
    description: "A RAG-powered log analyser that grounds every response in your actual infrastructure docs — runbooks, past incidents, server contacts. Four specialised agents cross-validate findings before surfacing anything. PII is redacted before any API call.",
    challenge: "Generic AI gives generic answers. The problem was getting it to respond with your actual infrastructure — the right server, the right contact, the right runbook — not a plausible-sounding guess that wastes time during an incident.",
    outcome: "A privacy-conscious system where 4 agents reach consensus before surfacing any finding. PII is redacted before any external API call.",
    tags: ["Python", "ChromaDB", "RAG", "Agentic AI", "GDPR"],
    link: "https://github.com/21satvik/RAG_Log_Analyzer",
    linkLabel: "GitHub",
  },
  {
    slug: "busconnects",
    name: "BusConnects Audit",
    tagline: "The NTA says punctuality is improving. I built a pipeline to check.",
    year: "2026",
    status: "Complete",
    category: "Data Engineering · Civic Analytics",
    description: "BusConnects is the first complete overhaul of Dublin's bus network — every existing route changed, 72,000 public submissions, €2.6–3.4bn in planned investment. The NTA self-reports its own KPIs. This project independently verifies them. A Python pipeline polls the TFI GTFS-R API every 60 seconds, writes to PostgreSQL on an Oracle A1 server, and runs ghost bus detection every 30 minutes across all 160 Dublin Bus and Go-Ahead routes. 1.6M+ rows collected. NTA's own December 2025 report data extracted and loaded into a structured 137-row database for cross-reference.",
    challenge: "Three S6 buses disappeared in a row at UCD Village. No alert. No cancellation notice. Just gone from the TFI app. When it kept happening, I looked into how the NTA measures punctuality. If a trip disappears from the live feed, it can't be measured as late. So I built something that could catch it.",
    outcome: "Go-Ahead evening rush delays run 74% worse than Dublin Bus (4.04 vs 2.32 min avg). Go-Ahead buses lose TFI app visibility at 21–32% journey completion vs Dublin Bus at 45–57%. The NTA's own data shows Go-Ahead W-Orbital lost km deteriorated 165% since launch — buried in a bar chart while the press release leads with punctuality gains.",
    tags: ["Python", "PostgreSQL", "GTFS-R", "Tableau", "Data Engineering", "Civic Data", "Oracle Cloud"],
    link: "https://github.com/21satvik/Busconnects-audit",
    linkLabel: "GitHub",
  },
  {
    slug: "displacement-trade",
    name: "The Displacement Trade",
    tagline: "A markdown file wiped $285 billion off the stock market. I measured what actually moved.",
    year: "2026",
    status: "Active",
    category: "Financial Data Science · Event Study",
    description: "A formal event study measuring stock market reactions to 9 AI product releases across 20 companies from ChatGPT to Claude Cowork. Market models strip out broad market noise to isolate stock-specific abnormal returns. Built a 5-dimension exposure scoring framework (revenue concentration from SEC 10-K filings, substitutability, moat weakness, price sensitivity, supplier-competitor duality) and validated it against actual CARs. The framework explains 47% of cross-event variation (p = 0.0009) but fails within individual events, where sector panic overrides fundamentals. Forward-looking watchlist pairs 9 companies with specific AI triggers.",
    challenge: "Thomson Reuters posted its worst day on record and its best day in 26 years within fifteen trading days, both driven by the same AI company. The raw price drops conflated broad market movement with AI-specific damage. The challenge was building a framework that separates signal from sector panic.",
    outcome: "Most AI launches produce zero significant abnormal returns. Two events broke through: Chegg earnings (CAR: -56%) and Claude Cowork (9 significant CARs). S&P Global (exposure score 1.45/10, regulatory moat) fell -18.2%, nearly as much as Thomson Reuters (5.10/10, 45% EBIT from legal). The market panics by sector, not by fundamentals.",
    tags: ["Python", "Event Study", "OLS Regression", "yfinance", "SEC 10-K", "Tableau", "t-test"],
    link: "/pdf/displacement_trade.html",
    linkLabel: "Report",
  },
  {
    slug: "churn",
    name: "Churn Prediction",
    tagline: "€556K in revenue at risk. Found it before it walked out the door.",
    year: "2025",
    status: "Complete",
    category: "Predictive Analytics · Strategy",
    description: "Built a churn prediction model and then made it actually useful — turning 84.6% model accuracy into a board-ready recommendation with €389K saved annually and 1,280% ROI.",
    challenge: "Most churn models end at the model. This one needed to end at a decision.",
    outcome: "Month-to-month customers churn at 42% vs 2.8% for long-term. That single finding drove the entire retention strategy.",
    tags: ["Python", "XGBoost", "Scikit-learn", "Logistic Regression", "Business Impact Analysis"],
    link: "https://github.com/21satvik/Customer-Churn-Analysis",
    linkLabel: "GitHub",
    report: "/pdf/churn_report.html",
  },
  {
    slug: "urbaneats",
    name: "UrbanEats Expansion",
    tagline: "27% of customers were going to the wrong branch. Fixed that.",
    year: "2025",
    status: "Complete",
    category: "Network Optimisation · Strategy",
    description: "A full three-phase analytics project built for board presentation. Phase 1: descriptive analysis of 4 years of demand data revealed Branch D2 was serving 95,233 customers (27% of its base) in remote districts — operational strain hiding behind good revenue numbers. Phase 2: Holt-Winters forecasting across 10 districts (avg MAPE 6.66%) identified which areas had genuine growth trajectories and which were declining. Phase 3: linear programming optimisation turned those forecasts into a concrete expansion plan — 5 branches, €1.36M investment, €220K under budget.",
    challenge: "Justify a multi-million euro capital expenditure to a sceptical board — with data at every step, not just the conclusion.",
    outcome: "5-branch network recommended across D8, D12, D16, D20, D24. 95,082 projected annual customers. €220K contingency maintained. D22 excluded despite pressure — forecasts showed 26% demand decline by 2028.",
    tags: ["Python", "Holt-Winters", "Linear Programming", "Forecasting"],
    link: "/pdf/urbaneats.html",
    linkLabel: "Report",
  },
  {
    slug: "irish-port",
    name: "Irish Port Freight Analysis",
    tagline: "Brexit cut trade with Britain by up to 1,195 tonnes a quarter. The data proved it.",
    year: "2025",
    status: "Complete",
    category: "Statistical Analysis · Policy",
    description: "Full inferential statistics study on Ireland's maritime freight network using CSO data (2017–2025). Ran t-tests, ANOVA, regression, and confidence intervals to answer six research questions about port dominance, trade balance, seasonality, and the measurable impact of Brexit and COVID-19 on freight volumes.",
    challenge: "Turn a dataset of port tonnage into statistically defensible answers about Ireland's trade resilience — not just descriptive observations.",
    outcome: "Brexit finding: trade with Great Britain declined by 245K–1,195K tonnes per quarter (95% CI, p=0.001). COVID finding: no statistically significant long-term decline — the port system recovered fully. Dublin handles 50% of national tonnage but its dominance is stable, not accelerating (regression p=0.259).",
    tags: ["Excel", "Statistics", "Hypothesis Testing", "ANOVA", "Regression", "CSO Data"],
    link: "/pdf/irishport.html",
    linkLabel: "Report",
  },
];

export const ACCESSIBILITY = {
  headline: ["Built for", "everyone."],
  sub: "Two projects. Different years, different countries, different problems. Both for people the tech industry usually forgets to design for.",
  opening: "I didn't set out to specialise in accessibility. But two projects brought me there, and both times I found myself more invested than I expected.",
  projects: [
    {
      name: "IMAGE Project — McGill University",
      year: "2023",
      location: "Montreal, Canada",
      logo: "/images/mcgill.jpeg",
      siteUrl: "https://image.a11y.mcgill.ca/",
      sampleImg: "https://image.a11y.mcgill.ca/images/home/sample-rendering.jpg",
      body: "The IMAGE Project (Internet Multimodal Access to Graphical Exploration) is published, multi-year funded research at McGill's Shared Reality Lab — built to help blind and low-vision users interpret photographs, charts, and maps on the web through spatial audio and haptic feedback. As a Mitacs Globalink Scholar, I ported their Chrome extension to iOS Safari, integrating voice assistant, haptic, and multi-sensory feedback so it worked on mobile for the first time. The project is open source, ACM-published, and partnered with the Canadian Council of the Blind.",
      quote: "Satvik successfully converted the existing IMAGE project Chrome extension to create a prototype that works on Safari, including iOS. Even after his internship officially ended, he continued to assist with documentation and testing. I appreciated his dedication, and his ability to make progress with limited oversight.",
      quoteAuthor: "Jeffrey Blum, Mentor — McGill SRL Lab · Mitacs 2023",
    },
    {
      name: "enAble — Accessibility Mapping App",
      year: "2022",
      location: "Chennai, India",
      logo: "/images/srm.jpeg",
      archUrl: "https://github.com/AishwaryaPai20/ultron/raw/main/assets/videos/assiting%20tool.gif",
      body: "Finding out whether a building has a ramp, an accessible toilet, or Braille signage shouldn't require a phone call or a wasted journey. That's the problem enAble was built to solve.\n\nThe app is a centralised platform for storing and sharing accessibility information about physical spaces — offices, schools, public buildings, marketplaces. Users can search for locations, see exactly what accessibility features are available, and get voice-guided directions to navigate there. Submissions are community-driven, so the information grows over time.\n\nBuilt in 48 hours with Flutter, Firebase, and Mapbox — mobile app, Firebase authentication, real-time Firestore data, and a companion React web portal, all shipped within the window. Placed 1st Runner-up at Ultron 5.0, SRMIST.",
      quote: null,
      quoteAuthor: null,
    },
  ],
  closing: "These two projects aren't the core of what I do professionally. But they shaped how I think about who gets to use the things we build — and that thinking shows up in everything else.",
};

export const SKILLS = {
  Languages:  ["Python", "SQL", "Java", "Go", "JavaScript", "Dart", "Swift", "NoSQL"],
  Tools:      ["Tableau", "Power BI", "Excel", "AWS", "Docker", "Firebase", "GitHub", "Linux"],
  Analytics:  ["XGBoost", "Scikit-learn", "Predictive Modelling", "Linear Programming", "RAG", "Agentic AI", "Time Series", "Statistical Methods"],
};

export const EDUCATION = [
  {
    school: "University College Dublin",
    logo: "/images/ucd.jpeg",
    sub: "Smurfit Graduate Business School",
    degree: "MSc Business Analytics",
    period: "2025 – 2026",
    grade: "3.95 GPA",
    honour: "1st Class Honours",
    highlights: ["Statistical Methods — A+", "Optimisation in Business — A", "Programming for Analytics — A"],
    note: "Top of cohort.",
  },
  {
    school: "SRM Institute of Science & Technology",
    logo: "/images/srm.jpeg",
    sub: "Chennai, India",
    degree: "BTech Computer Science",
    period: "2020 – 2024",
    grade: "9.08 / 10",
    honour: "Academic Winner · Batch of 2024",
    highlights: ["1st Runner-up, Ultron Hackathon 2022", "Mitacs Globalink Scholar 2023", "Hackathon Mentor, Hackathon Finalist"],
    note: "Where I learned to build.",
  },
];

export const CREDENTIALS = [
  { title: "Bloomberg Global Trading Challenge", issuer: "Bloomberg", year: "2025", logo: "/images/bloomberg.jpeg" },
  { title: "Amazon ML Summer School",            issuer: "Amazon",    year: "2022", logo: "/images/amazon.jpeg" },
  { title: "Supervised ML: Regression & Classification", issuer: "DeepLearning.AI", year: "2022", logo: "/images/coursera.jpeg" },
  { title: "Oracle Academy Database Foundations", issuer: "Oracle",   year: "2023", logo: "/images/oracle.jpeg" },
  { title: "Red Hat Enterprise Linux",           issuer: "Coursera",  year: "2023", logo: "/images/coursera.jpeg" },
  { title: "HackerRank Problem Solving",         issuer: "HackerRank", year: "2022", logo: null },
];

export const VOLUNTEERING = [
  {
    role: "Associate Technical Lead & Mentor",
    event: "Open-Source & Technical Events",
    cause: "Leadership",
    org: "SRMKzilla",
    logo: "/images/srmkzilla.jpeg",
    period: "Oct 2021 – May 2023",
    description: "Joined SRMKzilla — SRMIST's open-source Mozilla campus club — as a member and worked up to Associate Technical Lead. Led projects end-to-end, ran technical workshops on open-source contribution and web development, and mentored junior members. The role where I learned that leading a team is a different skill from building things.",
  },
  {
    role: "Hackathon Mentor",
    event: "Data Science Hackathons",
    cause: "Mentoring",
    org: "Data Science Community SRM",
    logo: "/images/datasciencecommunitysrm.jpeg",
    period: "2022 – 2024",
    description: "Mentored participants during Data Science Community SRM hackathons — helping teams work through problem framing, model selection, and presenting findings clearly under time pressure.",
  },
];

export const ACHIEVEMENTS = [
  {
    tag: "Scholarship",
    title: "Mitacs Globalink Research Scholar",
    description: "Awarded the Mitacs Globalink scholarship to conduct accessibility research at McGill University, Montreal. One of ~500 international recipients selected annually from thousands of applicants.",
    issuer: "Mitacs · McGill University",
    year: "2023",
    highlight: true,
  },
  {
    tag: "Academic",
    title: "Academic Winner · Batch of 2024",
    description: "Recognised as a top academic performer in the BTech Computer Science graduating cohort at SRMIST — awarded at graduation for performance across four years.",
    issuer: "SRM Institute of Science & Technology",
    year: "2024",
    highlight: true,
  },
  {
    tag: "Hackathon",
    title: "1st Runner-Up · Ultron 5.0",
    description: "Built enAble — an accessibility mapping app for buildings and public spaces — in 48 hours. Placed 1st runner-up at Ultron 5.0.",
    issuer: "SRMIST Dept. of Computing Technologies",
    year: "2022",
    highlight: true,
  },
  {
    tag: "Challenge",
    title: "Bloomberg Global Trading Challenge",
    description: "Competed in Bloomberg's global simulated trading challenge, applying portfolio strategy and market analysis under live market conditions.",
    issuer: "Bloomberg",
    year: "2025",
    highlight: true,
  },
  {
    tag: "Programme",
    title: "Amazon ML Summer School",
    description: "Selected for Amazon's invite-only ML Summer School — covering supervised learning, deep learning, and practical NLP with Amazon scientists.",
    issuer: "Amazon",
    year: "2022",
    highlight: true,
  },
  {
    tag: "GPA",
    title: "3.95 GPA · 1st Class Honours",
    description: "Achieved 1st Class Honours in MSc Business Analytics at UCD Smurfit, with an A+ in Statistical Methods and A grades across core modules.",
    issuer: "University College Dublin",
    year: "2026",
    highlight: true,
  },
  { tag: "ML",       title: "Supervised ML: Regression & Classification", issuer: "DeepLearning.AI", year: "2022", highlight: false, logo: "/images/coursera.jpeg" },
  { tag: "Database", title: "Oracle Academy Database Foundations",         issuer: "Oracle",          year: "2023", highlight: false, logo: "/images/oracle.jpeg"   },
  { tag: "Linux",    title: "Red Hat Enterprise Linux",                    issuer: "Coursera",        year: "2023", highlight: false, logo: "/images/coursera.jpeg" },
  { tag: "DSA",      title: "HackerRank Problem Solving",                  issuer: "HackerRank",      year: "2022", highlight: false, logo: null                    },
];