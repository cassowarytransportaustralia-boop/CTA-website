// Static content data for Nexus Regional Hub presentation
// Keeps section components small and readable.

export const NAV_SECTIONS = [
  { id: "welcome", label: "Welcome", num: "01" },
  { id: "challenge", label: "The Challenge", num: "02" },
  { id: "why-wagga", label: "Why Wagga Wagga", num: "03" },
  { id: "masterplan", label: "The Hub Model", num: "04" },
  { id: "how-it-works", label: "How It Works", num: "05" },
  { id: "ownership", label: "Community Ownership", num: "06" },
  { id: "veterans", label: "Veteran Program", num: "07" },
  { id: "manufacturing", label: "Local Manufacturing", num: "08" },
  { id: "revenue", label: "Revenue Model", num: "09" },
  { id: "membership", label: "Membership", num: "10" },
  { id: "road-safety", label: "Road Safety", num: "11" },
  { id: "events", label: "Community Events", num: "12" },
  { id: "emergency", label: "Emergency Response", num: "13" },
  { id: "economic", label: "Economic Impact", num: "14" },
  { id: "roadmap", label: "Roadmap", num: "15" },
  { id: "national", label: "National Vision", num: "16" },
  { id: "cta", label: "Partner With Us", num: "17" },
];

export const IMAGES = {
  hero: "https://images.pexels.com/photos/32915384/pexels-photo-32915384.jpeg",
  masterplan: "https://images.pexels.com/photos/28104341/pexels-photo-28104341.jpeg",
  freight: "https://images.pexels.com/photos/12261472/pexels-photo-12261472.jpeg",
  community: "https://images.pexels.com/photos/17240674/pexels-photo-17240674.jpeg",
  infrastructure: "https://images.pexels.com/photos/5640602/pexels-photo-5640602.jpeg",
  veterans:
    "https://images.unsplash.com/photo-1543132220-3ec99c6094dc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODh8MHwxfHNlYXJjaHwyfHx2ZXRlcmFuJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MHx8fHwxNzgwNDY0ODc5fDA&ixlib=rb-4.1.0&q=85",
  emergency: "https://images.pexels.com/photos/6519865/pexels-photo-6519865.jpeg",
};

export const CHALLENGE_STATS = [
  { value: "23%", label: "of heavy-vehicle crashes nationally are fatigue-related", source: "NHVR data placeholder" },
  { value: "$1.4B", label: "estimated annual leakage of regional spend to metro centres", source: "Regional economics placeholder" },
  { value: "61%", label: "of Riverina towns report critical accommodation shortages", source: "Tourism NSW placeholder" },
  { value: "18-29", label: "age cohort showing strongest net regional out-migration", source: "ABS placeholder" },
  { value: "5,800+", label: "ADF veterans transitioning each year across Australia", source: "DVA placeholder" },
  { value: "1 in 3", label: "regional SMEs cite infrastructure as their primary growth blocker", source: "RAI placeholder" },
];

export const WHY_WAGGA = [
  { k: "Olympic & Sturt Highway junction", v: "Two national freight corridors converging on a single regional centre." },
  { k: "Inland rail alignment", v: "Direct beneficiary of Inland Rail with intermodal capacity scaling through 2030." },
  { k: "Population trajectory", v: "Largest inland city in NSW with 1.6% annual growth and strong net-positive migration." },
  { k: "Defence anchor", v: "RAAF Base Wagga & Kapooka — Australia's premier Army recruit training centre." },
  { k: "Agricultural backbone", v: "Riverina region produces ~25% of NSW agricultural output." },
  { k: "Education depth", v: "Charles Sturt University & TAFE NSW providing skilled workforce pipeline." },
  { k: "Manufacturing momentum", v: "Bomen industrial precinct expansion and SAP zoning supporting fabrication." },
  { k: "Tourism gateway", v: "Murrumbidgee River, food & wine trail, festival calendar, regional events." },
];

export const PRECINCTS = [
  {
    id: "community",
    title: "Community Precinct",
    eyebrow: "0.6 ha",
    summary: "The civic heart — open, accessible, programmed year-round.",
    bullets: ["Community hall (400 cap.)", "Training & education centre", "Public library node", "Bookable meeting rooms", "Veteran support centre"],
  },
  {
    id: "accommodation",
    title: "Accommodation Precinct",
    eyebrow: "0.9 ha",
    summary: "Stop, sleep, stay — capturing overnight spend in town.",
    bullets: ["40 room regional hotel", "Caravan facilities (32 bays)", "RV parking (60 bays)", "Overflow event accommodation"],
  },
  {
    id: "transport",
    title: "Transport Precinct",
    eyebrow: "0.8 ha",
    summary: "A fatigue-management asset on a national freight corridor.",
    bullets: ["High-flow fuel station", "EV charging (8 bays, 350kW)", "Secure HGV parking (24 bays)", "Driver showers & rest rooms"],
  },
  {
    id: "commercial",
    title: "Commercial Precinct",
    eyebrow: "0.7 ha",
    summary: "Local-first retail and food, anchored by tourism services.",
    bullets: ["12-vendor food court", "Specialty café & roastery", "Retail tenancies (10 lots)", "Visitor information centre"],
  },
  {
    id: "event",
    title: "Event Precinct",
    eyebrow: "0.8 ha",
    summary: "365-day activation — markets, festivals, regional gatherings.",
    bullets: ["Weekly farmers markets", "Festival grounds (5,000 cap.)", "Community events lawn", "Outdoor entertainment stage"],
  },
  {
    id: "emergency",
    title: "Emergency Response Precinct",
    eyebrow: "0.4 ha",
    summary: "Built to keep the region operating when systems fail.",
    bullets: ["Disaster coordination centre", "Backup power & comms", "Emergency accommodation (80 beds)", "Supply distribution hub"],
  },
];

export const FLOW_ROLES = [
  {
    title: "Council",
    subtitle: "Asset owner",
    color: "green",
    items: ["Land contribution / lease", "Planning support", "Grant facilitation", "Community engagement", "Long-term asset oversight"],
  },
  {
    title: "Cassowary",
    subtitle: "Developer & operator",
    color: "gold",
    items: ["Project development", "Project management", "Contractor management", "Tenant acquisition", "Operations & membership"],
  },
  {
    title: "Community",
    subtitle: "Beneficiary",
    color: "charcoal",
    items: ["Permanent local jobs", "Civic infrastructure", "Recurring revenue", "Services & amenity", "Year-round events"],
  },
];

export const VETERAN_SKILLS = [
  { k: "Logistics", v: "Daily ops, fleet, scheduling, depot management" },
  { k: "Leadership", v: "Team management, accountability, training new staff" },
  { k: "Asset management", v: "Lifecycle, maintenance regimes, compliance" },
  { k: "Emergency management", v: "Crisis response, command structures, resilience" },
  { k: "Operations", v: "SOPs, safety culture, high-tempo environments" },
];

export const VETERAN_ROLES = [
  "Hub General Manager",
  "Facilities Manager",
  "Transport Precinct Lead",
  "Emergency Response Coordinator",
  "Training & Induction Officer",
  "Member Services Manager",
];

export const MANUFACTURING_PILLARS = [
  { k: "Local fabrication", v: "Steel, modular, joinery sourced inside the Riverina." },
  { k: "Local construction", v: "Head-contractor with mandated local-trade quotas." },
  { k: "Local suppliers", v: "Concrete, electrical, plumbing, signage — within 200km." },
  { k: "Regional trades", v: "Apprenticeship pathways with TAFE NSW partnership." },
  { k: "Multiplier", v: "Every $1 spent locally returns ~$1.85 in regional economic activity." },
];

export const REVENUE_SCENARIOS = {
  conservative: {
    label: "Conservative",
    note: "Lower utilisation, slower ramp, no upside from events.",
    streams: [
      { name: "Fuel", value: 4.2 },
      { name: "Accommodation", value: 3.1 },
      { name: "Food court", value: 1.6 },
      { name: "Retail", value: 0.9 },
      { name: "Membership", value: 0.8 },
      { name: "Events", value: 0.5 },
      { name: "Advertising", value: 0.3 },
      { name: "Tourism", value: 0.4 },
      { name: "EV charging", value: 0.2 },
    ],
  },
  moderate: {
    label: "Moderate",
    note: "Realistic ramp, mid-case utilisation, recurring events.",
    streams: [
      { name: "Fuel", value: 6.8 },
      { name: "Accommodation", value: 5.2 },
      { name: "Food court", value: 2.6 },
      { name: "Retail", value: 1.5 },
      { name: "Membership", value: 1.4 },
      { name: "Events", value: 1.1 },
      { name: "Advertising", value: 0.5 },
      { name: "Tourism", value: 0.7 },
      { name: "EV charging", value: 0.5 },
    ],
  },
  optimistic: {
    label: "Optimistic",
    note: "Strong tourism uplift, national member base, EV growth.",
    streams: [
      { name: "Fuel", value: 9.4 },
      { name: "Accommodation", value: 7.8 },
      { name: "Food court", value: 3.9 },
      { name: "Retail", value: 2.4 },
      { name: "Membership", value: 2.6 },
      { name: "Events", value: 2.0 },
      { name: "Advertising", value: 0.9 },
      { name: "Tourism", value: 1.3 },
      { name: "EV charging", value: 1.1 },
    ],
  },
};

export const MEMBERSHIP_BENEFITS = [
  { k: "Fuel discounts", v: "Cents-per-litre savings at the hub and partner sites." },
  { k: "Accommodation discounts", v: "Member rates at the hub hotel and partner regional stays." },
  { k: "Partner discounts", v: "Local food, retail, services within the Wagga catchment." },
  { k: "Event access", v: "Member-priced or pre-release tickets to festivals & markets." },
  { k: "Tourism incentives", v: "Region-wide trail passes, attractions, day tours." },
];

export const ROAD_SAFETY = [
  { k: "Fatigue management", v: "Safe, well-lit stopping point on the Sturt/Olympic freight network." },
  { k: "Driver amenity", v: "Showers, meals, accommodation, secure parking — all on one site." },
  { k: "Emergency access", v: "On-site first aid station with direct comms to local emergency services." },
  { k: "Programme alignment", v: "Aligns with Heavy Vehicle Safety Initiative & Road Safety Program funding." },
];

export const EVENTS = [
  "Farmers Markets (weekly)",
  "Veteran Recognition Events",
  "Regional Music & Food Festivals",
  "Agricultural Shows",
  "Business & Trade Expos",
  "Community Gatherings",
  "Charity & Fundraising Events",
  "School & Education Days",
];

export const EMERGENCY_USES = [
  { k: "Floods", v: "Evacuation centre, supply distribution, emergency accommodation." },
  { k: "Bushfires", v: "Safe refuge, comms hub, agency staging area." },
  { k: "Storms", v: "Power backup, charging stations, shelter for displaced residents." },
  { k: "Heatwaves", v: "Cooling centre for vulnerable residents and visitors." },
];

export const ECONOMIC_PROJECTION = [
  { year: "Y1", construction: 420, permanent: 35, visitors: 4, gdp: 12 },
  { year: "Y2", construction: 380, permanent: 95, visitors: 12, gdp: 28 },
  { year: "Y3", construction: 120, permanent: 140, visitors: 22, gdp: 46 },
  { year: "Y4", construction: 80, permanent: 165, visitors: 28, gdp: 58 },
  { year: "Y5", construction: 60, permanent: 185, visitors: 35, gdp: 71 },
  { year: "Y6", construction: 55, permanent: 195, visitors: 38, gdp: 78 },
  { year: "Y7", construction: 50, permanent: 205, visitors: 41, gdp: 84 },
  { year: "Y8", construction: 50, permanent: 215, visitors: 44, gdp: 90 },
  { year: "Y9", construction: 45, permanent: 222, visitors: 46, gdp: 95 },
  { year: "Y10", construction: 45, permanent: 230, visitors: 49, gdp: 100 },
];

export const ROADMAP = [
  { phase: "Phase 1", title: "Feasibility", window: "Months 0–6", points: ["Site selection", "Demand modelling", "Stakeholder mapping", "Concept design"] },
  { phase: "Phase 2", title: "Funding", window: "Months 4–12", points: ["Grant submissions", "Federal / state alignment", "Capital structuring", "Anchor tenants"] },
  { phase: "Phase 3", title: "Approvals", window: "Months 10–18", points: ["DA & planning", "Environmental", "Traffic & safety", "Community consultation"] },
  { phase: "Phase 4", title: "Construction", window: "Months 16–30", points: ["Local-first procurement", "Apprenticeship intake", "Staged delivery", "Veteran ops onboarding"] },
  { phase: "Phase 5", title: "Operations", window: "Months 28+", points: ["Member acquisition", "Tenant fit-out", "Event calendar live", "Emergency capability online"] },
  { phase: "Phase 6", title: "Expansion", window: "Year 3+", points: ["Network site selection", "Replication playbook", "National brand standards", "Veteran ops network"] },
];

export const NATIONAL_HUBS = [
  { name: "Wagga Wagga", x: 660, y: 470, status: "pilot" },
  { name: "Dubbo", x: 640, y: 410, status: "wave-1" },
  { name: "Tamworth", x: 700, y: 360, status: "wave-1" },
  { name: "Mildura", x: 540, y: 470, status: "wave-1" },
  { name: "Toowoomba", x: 730, y: 290, status: "wave-2" },
  { name: "Bunbury", x: 130, y: 470, status: "wave-2" },
  { name: "Mount Gambier", x: 530, y: 540, status: "wave-2" },
  { name: "Mackay", x: 730, y: 200, status: "wave-3" },
  { name: "Katherine", x: 410, y: 150, status: "wave-3" },
  { name: "Geraldton", x: 110, y: 350, status: "wave-3" },
];
