// lib/data/experiences.ts
// Static data for all 16 experience pages.
// Drop-in replacement until Directus is connected.
// When Directus is ready: delete this file and switch
// lib/experiences.ts to fetch from the SDK instead.

export type ExperienceType = 'core' | 'premium' | 'premium-request';

export interface Benefit {
  label: string;
  description: string;
}

export interface Experience {
  id: string;
  status: 'draft' | 'published';
  title: string;
  slug: string;
  type: ExperienceType;
  label_text: string;
  hero_headline: string;
  hero_subheadline: string;
  hero_image: string;           // placeholder path — swap with real images
  hook_text: string;
  what_is_it: string;           // HTML string
  inclusion_heading: string;
  inclusion_body: string;
  why_it_works_intro: string;
  benefits: Benefit[];
  forum_block_body: string;     // HTML string
  testimonial_quote?: string;
  testimonial_name?: string;
  testimonial_company?: string;
  photo_gallery: string[];      // placeholder paths
  primary_cta_heading: string;
  primary_cta_body: string;
  secondary_cta_heading: string;
  secondary_cta_body: string;
  footer_experience_links: string[];
  seo_title: string;
  seo_description: string;
}

export const EXPERIENCES: Experience[] = [
  // ─────────────────────────────────────────────
  // 1. SHADOW WORK & PARTS DIALOGUE — CORE
  // ─────────────────────────────────────────────
  {
    id: '1',
    status: 'published',
    title: 'Shadow Work & Parts Dialogue',
    slug: 'shadow-work',
    type: 'core',
    label_text: 'CORE RETREAT EXPERIENCE — INCLUDED IN EVERY FORUM RETREAT',
    hero_headline: 'Shadow Work for Executive Leaders',
    hero_subheadline:
      'The parts of you running the show in your business — the controller, the perfectionist, the one still leading from an old wound — deserve more than management. They need integration.',
    hero_image: '/images/experiences/shadow-work-hero.jpg',
    hook_text:
      "You've optimized your business. You've built the team. You've done the strategy work.\n\nAnd yet — the same patterns keep showing up. The reactive decision. The relationship that won't resolve. The meeting where you said something you didn't mean and couldn't explain why.\n\nThat's not a strategy problem. That's shadow.",
    what_is_it: `<p>Shadow work is the practice of bringing the hidden, disowned parts of yourself into conscious awareness. Every leader has them — the inner critic driving perfectionism, the people-pleaser undermining authority, the controller sabotaging trust, the part still carrying an old wound and making decisions from fear disguised as strategy.</p>
<p>Parts Dialogue is a structured process rooted in Internal Family Systems (IFS) and related modalities. In a facilitated group setting at Tubac Ranch, you engage these inner parts directly — not analyzing them from a distance, but entering into actual dialogue. The result is integration: instead of being driven by parts you don't know are there, you begin to lead from a more whole, clear, and grounded place.</p>
<p>For high-performing EO and YPO leaders, this is often the work that changes everything else. The external strategies are in place. The team is capable. The business is sound. It's the inner interference — invisible to you, visible to everyone around you — that's costing you most.</p>`,
    inclusion_heading: 'This Experience Is Included in Every Forum Retreat',
    inclusion_body:
      "Shadow Work & Parts Dialogue is part of the core facilitation framework Dr. Mark brings to every retreat — not an add-on, not optional. It is woven into the retreat arc because it is foundational to the kind of transformation EO/YPO forums come to Tubac Ranch for. The planning call is where you and Dr. Mark decide how much time and emphasis to give it based on your forum's specific goals.",
    why_it_works_intro:
      "Leaders carry a particular kind of weight — the pressure of constant performance, the habit of control, the blind spots that come from operating at altitude. Shadow Work is designed to cut through that, in a safe group container where every member of your forum is doing the same work at the same time.",
    benefits: [
      { label: 'Pattern recognition', description: 'The specific inner dynamics creating your recurring business and relational problems, named and visible for the first time.' },
      { label: 'Reduced reactivity', description: 'Less hijacking in high-stakes conversations, fewer decisions made from the triggered self.' },
      { label: 'Real presence', description: 'Leadership groundedness that comes from integration rather than management, because it comes from a whole place.' },
      { label: 'Forum depth', description: 'A level of authentic connection between members that regular monthly meetings rarely reach.' },
    ],
    forum_block_body: `<p>Shadow Work & Parts Dialogue is one of the core experiences in Dr. Mark Pirtle's custom forum retreats at Tubac Ranch. It is not available as a standalone workshop, a half-day session, or an individual coaching add-on.</p>
<p>Real integration doesn't happen in a single afternoon. It happens over days — when experiences build on each other, when your group moves through something together, and when the work has time to settle before you return to your life and your business.</p>`,
    photo_gallery: [
      '/images/experiences/shadow-work-1.jpg',
      '/images/experiences/shadow-work-2.jpg',
      '/images/experiences/shadow-work-3.jpg',
    ],
    primary_cta_heading: 'Ready to bring this to your forum?',
    primary_cta_body: "Shadow Work & Parts Dialogue is included in every retreat. Let's talk about what your forum needs and build the experience around it.",
    secondary_cta_heading: 'Not a forum leader yet?',
    secondary_cta_body: "Join the interest list and we'll walk you through how this work transforms leadership — and how to bring it to your group.",
    footer_experience_links: ['leadership-hot-seats', 'the-belief-audit', 'fire-ceremony', 'the-narrative-flip'],
    seo_title: 'Shadow Work for Executive Leaders | Forum Retreats at Tubac Ranch, Arizona',
    seo_description: "Shadow Work & Parts Dialogue is a core experience in Dr. Mark Pirtle's EO/YPO forum retreats at Tubac Ranch, Arizona. Surface the blind spots costing you most.",
  },

  // ─────────────────────────────────────────────
  // 2. EQUINE-ASSISTED LEADERSHIP — PREMIUM
  // ─────────────────────────────────────────────
  {
    id: '2',
    status: 'published',
    title: 'Equine-Assisted Leadership',
    slug: 'equine-assisted-leadership',
    type: 'premium',
    label_text: 'PREMIUM RETREAT EXPERIENCE — AVAILABLE AS AN ADD-ON',
    hero_headline: 'Equine-Assisted Leadership Coaching for EO/YPO Forums',
    hero_subheadline:
      "Horses don't respond to your title, your track record, or the story you tell about your leadership style. They respond to who you actually are — right now, in this moment.",
    hero_image: '/images/experiences/equine-hero.jpg',
    hook_text:
      "Every leader has a gap between how they think they show up and how they actually show up.\n\nMost of the time, that gap is invisible. Your team works around it. Your forum is too polite to name it. Your own mind has excellent reasons for why it isn't a problem.\n\nA horse will show you in thirty seconds.",
    what_is_it: `<p>Horses are among the most precise feedback systems available for leadership development. They read your energy, your nervous system state, your level of presence — and they respond in kind, without judgment, without agenda, without the social filters that make human feedback unreliable. They don't care about your résumé. They respond to what's actually happening in your body and your field.</p>
<p>In a facilitated Equine-Assisted Leadership session at Tubac Ranch, you work with horses in a structured set of exercises designed to surface your actual leadership presence — not your intended presence. Are you grounded or scattered? Directing from clarity or from anxiety? Building connection or demanding compliance? The horse tells you, in real time, in a language your nervous system understands better than your mind does.</p>
<p>What happens in these sessions consistently becomes one of the most referenced moments across the entire retreat. Leaders who arrive skeptical leave with insights about their presence, their authority, and their relationship with control that they couldn't have reached through any conversation, assessment, or workshop exercise alone.</p>`,
    inclusion_heading: 'This Experience Is Available as a Premium Add-On',
    inclusion_body:
      "Equine-Assisted Leadership is not included in the base retreat — it's a premium experience added to your custom retreat itinerary during the planning process. If you're interested in including this in your forum retreat, mention it in your inquiry form or bring it up on your planning call.",
    why_it_works_intro:
      "The horse doesn't lie. That's the point — and it's also why this experience produces the kind of leadership insight that workshops, assessments, and even months of coaching sometimes can't reach.",
    benefits: [
      { label: 'Unfiltered self-awareness', description: 'A direct, embodied encounter with the gap between perceived and actual leadership presence.' },
      { label: 'Nervous system intelligence', description: 'The ability to recognize and regulate your own state in high-stakes situations — a skill the horse teaches faster than any workshop.' },
      { label: 'Leadership under uncertainty', description: 'Real-time practice in directing, connecting, and influencing without authority, control, or the usual tools of executive power.' },
      { label: 'Shared reference point', description: 'An experience so visceral and memorable that your forum will reference it in meetings months later.' },
    ],
    forum_block_body: `<p>Equine-Assisted Leadership is one of the premium experiences available as part of Dr. Mark Pirtle's custom forum retreats at Tubac Ranch. It is not offered as a standalone session or day program.</p>
<p>What makes this transformational in a retreat context is everything that comes before and after it — the shadow work that has already begun, the trust the group has already built, the facilitated reflection that follows. Pulled out of that context, it's interesting. Inside that context, it's revelatory.</p>`,
    photo_gallery: [
      '/images/experiences/equine-1.jpg',
      '/images/experiences/equine-2.jpg',
      '/images/experiences/equine-3.jpg',
    ],
    primary_cta_heading: 'Want to include this in your retreat?',
    primary_cta_body: "Equine-Assisted Leadership is a premium add-on. Mention your interest in the inquiry form and we'll talk through it on your planning call.",
    secondary_cta_heading: 'Exploring your options?',
    secondary_cta_body: "Join the interest list for a short series on equine leadership work — what it is, what it produces, and how to bring it to your forum.",
    footer_experience_links: ['plant-medicine-journeys', '1-1-coaching-bodywork', 'outdoor-excursions', 'prayer-lodge-ceremonies'],
    seo_title: 'Equine-Assisted Leadership Coaching | EO/YPO Forum Retreats at Tubac Ranch, Arizona',
    seo_description: "Horses give leaders the feedback no 360 review can. Equine-Assisted Leadership is a premium add-on in Dr. Mark Pirtle's forum retreats at Tubac Ranch, Arizona.",
  },

  // ─────────────────────────────────────────────
  // 3. PLANT MEDICINE JOURNEYS — PREMIUM-REQUEST
  // ─────────────────────────────────────────────
  {
    id: '3',
    status: 'published',
    title: 'Plant Medicine Journeys',
    slug: 'plant-medicine-journeys',
    type: 'premium-request',
    label_text: 'PREMIUM RETREAT EXPERIENCE — AVAILABLE BY REQUEST ONLY',
    hero_headline: 'Plant Medicine Journeys for Executive Leaders',
    hero_subheadline:
      'Dissolve the armor. Access the clarity beneath it. This is not a wellness trend. It is some of the most serious inner work available — offered only in the appropriate container, with experienced facilitation.',
    hero_image: '/images/experiences/plant-medicine-hero.jpg',
    hook_text:
      "You have read the books. You have done the coaching. You may have even done therapy.\n\nAnd there are still things in your leadership — patterns, reactions, places you go quiet when you shouldn't, places you push when it costs you — that haven't moved.\n\nPlant medicine work moves them.",
    what_is_it: `<p>Plant medicine work is one of the most direct routes to the parts of yourself you've been too busy — or too defended — to access. In a safe, carefully prepared container with an experienced facilitator, you move beyond the noise of the thinking mind into a deeper layer of awareness. Old patterns become visible. Defenses that have been running automatically for years become transparent. And something genuinely new can emerge.</p>
<p>For leaders, this is not recreational. It is some of the most serious inner work available to a human being. It accelerates the self-awareness that can take years of traditional therapy or coaching to approach. You see clearly — not what you want to be true, but what is actually true — about your patterns, your defenses, your relationships, and your potential.</p>
<p>At Tubac Ranch, this experience is offered only within a multi-day retreat context, with thorough preparation before, proper integration support after, and Dr. Mark Pirtle's experienced facilitation throughout. Safety, intention, and care are the non-negotiables.</p>`,
    inclusion_heading: 'This Experience Requires a Separate Conversation',
    inclusion_body:
      "Plant Medicine Journeys is not included in the base retreat and is not confirmed through the standard inquiry process alone. It requires a dedicated conversation about preparation, safety, participant readiness, legal context, and suitability for your specific group. If you are interested, note it in your inquiry form. Dr. Mark will initiate a separate, confidential conversation before this is confirmed.",
    why_it_works_intro:
      "The executives who have done this work — in the right container, with the right facilitation — consistently describe it as among the most significant experiences of their lives. Not because it was comfortable. Because it was true.",
    benefits: [
      { label: 'Blind spot removal', description: 'Direct, undeniable access to the patterns and defenses that have been running below the level of conscious awareness.' },
      { label: 'Accelerated integration', description: 'The kind of self-awareness that traditional coaching approaches over months or years, accessed in a single carefully held experience.' },
      { label: 'Emotional range', description: 'Capacity for the full spectrum of human experience, which makes leaders more present, more connected, and more effective.' },
      { label: 'Lasting shift', description: 'When paired with proper integration support, the changes that emerge from this work tend to hold as a genuine recalibration.' },
    ],
    forum_block_body: `<p>Plant Medicine Journeys is available only as part of Dr. Mark Pirtle's custom forum retreats at Tubac Ranch. It is not offered as a standalone experience, a day program, or an individual session.</p>
<p>The container matters completely. What makes this work transformational is everything surrounding it: the days of trust-building, the shadow work that has already begun, the facilitated integration that follows, the presence of a group that has moved through something together.</p>`,
    photo_gallery: [
      '/images/experiences/plant-medicine-1.jpg',
      '/images/experiences/plant-medicine-2.jpg',
      '/images/experiences/plant-medicine-3.jpg',
    ],
    primary_cta_heading: 'Interested in including this in your retreat?',
    primary_cta_body: "Note your interest in the inquiry form. Dr. Mark will reach out to have a separate conversation before this is confirmed as part of your program.",
    secondary_cta_heading: 'Want to learn more first?',
    secondary_cta_body: "Join the interest list for a grounded, honest overview of what plant medicine work involves for leaders — and how it fits within a forum retreat.",
    footer_experience_links: ['equine-assisted-leadership', 'shadow-work', 'prayer-lodge-ceremonies', '1-1-coaching-bodywork'],
    seo_title: 'Plant Medicine Journeys for Executive Leaders | Forum Retreats at Tubac Ranch, Arizona',
    seo_description: "Plant Medicine Journeys is a premium, request-only experience in Dr. Mark Pirtle's EO/YPO forum retreats at Tubac Ranch. Serious inner work for leaders ready to go deep.",
  },

  // ─────────────────────────────────────────────
  // 4. LEADERSHIP HOT SEATS — CORE
  // ─────────────────────────────────────────────
  {
    id: '4',
    status: 'published',
    title: 'Leadership Hot Seats',
    slug: 'leadership-hot-seats',
    type: 'core',
    label_text: 'CORE RETREAT EXPERIENCE — INCLUDED IN EVERY FORUM RETREAT',
    hero_headline: 'Leadership Hot Seats for EO/YPO Forums',
    hero_subheadline:
      "The feedback you actually need — direct, caring, and grounded in real trust. This is what your forum is capable of, when the container is right.",
    hero_image: '/images/experiences/hot-seats-hero.jpg',
    hook_text:
      "EO and YPO forums exist for this. The peer accountability. The honest mirror. The room where you can say the thing you can't say anywhere else.\n\nBut most forums know they're not fully there yet. The monthly meetings are good. They could be transformational.\n\nThe difference is facilitation and depth — and a few days away from everything else.",
    what_is_it: `<p>A Leadership Hot Seat is a structured, high-trust process where one member of the forum brings a real challenge — a decision they've been circling for months, a relationship that keeps costing them, a pattern they can see but can't seem to change — into the center of the group, and receives direct, honest, carefully held feedback from their peers.</p>
<p>This is not a venting session and it is not an advice pile-on. It is a skilled facilitated process designed to surface truth quickly. Dr. Mark Pirtle creates the container — the safety, the structure, and the permission — that allows people to say what they actually see and to hear what they actually need.</p>
<p>In a retreat context at Tubac Ranch, away from the schedules and social dynamics of regular forum meetings, Hot Seats go to depths they rarely reach in a conference room. People are more open. The trust has been built over days, not hours. The breakthroughs are more visible, more lasting, and more likely to actually change something.</p>`,
    inclusion_heading: 'This Experience Is Included in Every Forum Retreat',
    inclusion_body:
      "Leadership Hot Seats are part of the core facilitation framework Dr. Mark brings to every forum retreat. The planning call is where you and Dr. Mark discuss how many hot seats to include, which members are most ready for them, and how to sequence them within your retreat arc.",
    why_it_works_intro:
      "Your forum already has the ingredients — trust, peer experience, commitment to each other's growth. Leadership Hot Seats are the process that activates those ingredients fully, in a container skilled enough to hold what comes up.",
    benefits: [
      { label: 'Accelerated clarity', description: 'Real decisions that have been circling for months resolved in a single facilitated session, because the right questions finally got asked.' },
      { label: 'Courageous communication modeled', description: 'Every member of the forum watches what honest, caring feedback looks and feels like — and takes that standard home.' },
      { label: 'Forum trust deepened', description: 'Witnessed vulnerability changes relationships. The person who sat in the hot seat and the people who sat with them know each other differently now.' },
      { label: 'Transferable process', description: 'Your forum leaves with a shared understanding of how to hold each other at this level in your regular meetings going forward.' },
    ],
    forum_block_body: `<p>Leadership Hot Seats are one of the core experiences in Dr. Mark Pirtle's custom forum retreats at Tubac Ranch. They are not offered as standalone facilitation sessions or half-day programs.</p>
<p>The depth a Hot Seat reaches depends entirely on the depth of trust that has been built before it happens. In a retreat context, where your forum has already moved through shared experiences together, the trust is there. The Hot Seat then does what it's designed to do.</p>`,
    photo_gallery: [
      '/images/experiences/hot-seats-1.jpg',
      '/images/experiences/hot-seats-2.jpg',
      '/images/experiences/hot-seats-3.jpg',
    ],
    primary_cta_heading: 'Ready to take your forum deeper?',
    primary_cta_body: "Leadership Hot Seats are included in every retreat. Let's talk about your forum's goals and build the retreat around them.",
    secondary_cta_heading: 'Not a forum leader yet?',
    secondary_cta_body: "Join the interest list and we'll share how facilitated peer feedback transforms leadership — and what it takes to create that container for your group.",
    footer_experience_links: ['shadow-work', 'the-belief-audit', 'fire-ceremony', 'the-narrative-flip'],
    seo_title: 'Leadership Hot Seats | EO/YPO Forum Facilitation at Tubac Ranch, Arizona',
    seo_description: "Leadership Hot Seats are a core experience in every Dr. Mark Pirtle forum retreat at Tubac Ranch. Real challenges. Real feedback. The clarity your forum needs.",
  },

  // ─────────────────────────────────────────────
  // 5. FIRE CEREMONY — CORE
  // ─────────────────────────────────────────────
  {
    id: '5',
    status: 'published',
    title: 'Fire Ceremony',
    slug: 'fire-ceremony',
    type: 'core',
    label_text: 'CORE RETREAT EXPERIENCE — INCLUDED IN EVERY FORUM RETREAT',
    hero_headline: 'Fire Ceremony for Executive Leaders at Tubac Ranch',
    hero_subheadline:
      "What are you ready to release? The belief. The grudge. The version of yourself you've outgrown. Fire has been doing this work for thousands of years.",
    hero_image: '/images/experiences/fire-ceremony-hero.jpg',
    hook_text:
      "There are things every leader is carrying that don't show up on any balance sheet or performance review.\n\nOld stories about what you have to be to succeed. Decisions you made under pressure that you're still defending. Relationships where something went wrong and never fully resolved.\n\nYou don't need to analyze them. You need to release them.",
    what_is_it: `<p>Fire has been used as an agent of transformation across cultures for thousands of years — not as metaphor, but as actual practice. In a guided fire ceremony at Tubac Ranch, you bring forward — in writing, in intention, in spoken word — the things you are ready to release: the belief that has limited you, the story you have outgrown, the weight you have been carrying that no longer belongs to you.</p>
<p>The act of releasing something into fire is psychologically and somatically different from deciding to let it go intellectually. There is a physicality to it. A finality. And in a group setting — with your entire forum present, each person engaged in their own release simultaneously — the collective energy amplifies what each individual experiences in a way that is immediately felt.</p>
<p>This is not ceremonial theater. It is a structured ritual with clear intention and experienced facilitation, designed to create genuine psychological movement — the kind that shows up afterward in how you lead, how you relate, and how much of your energy is no longer tied to the past.</p>`,
    inclusion_heading: 'This Experience Is Included in Every Forum Retreat',
    inclusion_body:
      "Fire Ceremony is woven into the arc of every retreat Dr. Mark facilitates at Tubac Ranch. It is typically held in the evening — under the desert sky, away from artificial light — and serves as one of the most significant transition points in the retreat sequence.",
    why_it_works_intro:
      "High-performers are exceptionally good at carrying things — commitments, pressure, unresolved tension, old decisions that cost them. Fire Ceremony offers something rare: a sanctioned, skillfully held moment to put some of it down.",
    benefits: [
      { label: 'Real release', description: 'Not intellectual reframing but somatic, ritual letting go — the kind that actually frees up the energy that was being spent maintaining the weight.' },
      { label: 'Shared vulnerability', description: 'Something changes in a group when everyone has witnessed each other release something real. The forum that walks away from a fire ceremony knows each other differently.' },
      { label: 'Clear transitions', description: 'The ceremony marks an ending and a beginning. Leaders leave with a felt sense of having closed something — which creates genuine space for what comes next.' },
      { label: 'A practice they can return to', description: 'The internal act of naming, acknowledging, and releasing is something your forum members can take home and use independently.' },
    ],
    forum_block_body: `<p>Fire Ceremony is one of the core experiences in Dr. Mark Pirtle's custom forum retreats at Tubac Ranch. It is not offered as a standalone event or evening program.</p>
<p>Its power is entirely dependent on context. A fire ceremony at the end of two days of shadow work and hot seats is a different experience than a fire ceremony on its own. The retreat arc builds to it.</p>`,
    photo_gallery: [
      '/images/experiences/fire-ceremony-1.jpg',
      '/images/experiences/fire-ceremony-2.jpg',
      '/images/experiences/fire-ceremony-3.jpg',
    ],
    primary_cta_heading: 'Ready to bring your forum to Tubac Ranch?',
    primary_cta_body: "Fire Ceremony is included in every retreat. Let's talk about your forum's goals and design the full experience around them.",
    secondary_cta_heading: 'Want to know more before you reach out?',
    secondary_cta_body: "Join the interest list for a short series on how ritual and ceremony fit into leadership development — and what your forum might be ready for.",
    footer_experience_links: ['shadow-work', 'leadership-hot-seats', 'the-narrative-flip', 'prayer-lodge-ceremonies'],
    seo_title: 'Fire Ceremony for Leaders | EO/YPO Forum Retreats at Tubac Ranch, Arizona',
    seo_description: "Fire Ceremony is a core experience in every Dr. Mark Pirtle forum retreat at Tubac Ranch. Release what's holding your leadership back — in ritual, together, in the desert.",
  },

  // ─────────────────────────────────────────────
  // 6. THE BELIEF AUDIT — CORE
  // ─────────────────────────────────────────────
  {
    id: '6',
    status: 'published',
    title: 'The Belief Audit',
    slug: 'the-belief-audit',
    type: 'core',
    label_text: 'CORE RETREAT EXPERIENCE — INCLUDED IN EVERY FORUM RETREAT',
    hero_headline: 'The Belief Audit — Executive Leadership Retreat, Tubac Ranch Arizona',
    hero_subheadline:
      "The story you've been telling yourself might be the most expensive thing in your business. This is how you find it — and what you do with it.",
    hero_image: '/images/experiences/belief-audit-hero.jpg',
    hook_text:
      "You didn't get where you are by accident. You got here because of a set of operating beliefs that drove relentless performance, smart decisions, and the ability to push through.\n\nSome of those beliefs are still serving you.\n\nSome of them stopped serving you years ago — and are now quietly generating the problems you can't seem to solve no matter how good your strategy gets.",
    what_is_it: `<p>A Belief Audit is a structured process of surfacing and examining the operating assumptions underneath your decisions, your relationships, and your recurring patterns. Not the beliefs you consciously hold — but the deeper ones running quietly in the background: <em>I have to do it myself if it's going to get done right. Showing vulnerability will cost me authority. Success requires sacrifice.</em></p>
<p>These beliefs were formed for a reason. They may have even been true at some point. But they are often outdated — shaped by earlier chapters of your life and your business, still driving decisions in the current one — without your knowledge or consent.</p>
<p>The Belief Audit, facilitated by Dr. Mark Pirtle at Tubac Ranch, surfaces them. Names them. Examines the actual evidence for them. And opens the door — not to optimistic replacement, but to genuine choice. You leave with access to your own operating system in a way you didn't have before.</p>`,
    inclusion_heading: 'This Experience Is Included in Every Forum Retreat',
    inclusion_body:
      "The Belief Audit is part of the SkillfullyAware® framework that Dr. Mark brings to every forum retreat. It runs as a facilitated group process — meaning every member of your forum engages with their own operating beliefs simultaneously, in a shared container where what surfaces for one person often illuminates something for others.",
    why_it_works_intro:
      "The most persistent problems in any leader's business — the pattern that keeps repeating, the team dynamic that won't shift, the decision that keeps getting delayed — are almost never strategic problems. They are belief problems. The Belief Audit goes to the source.",
    benefits: [
      { label: 'Root cause clarity', description: 'The specific limiting beliefs generating your most persistent and expensive problems, named and visible rather than operating invisibly from below.' },
      { label: 'Cognitive flexibility', description: 'The ability to question assumptions in real time, under pressure, before they generate reactive decisions.' },
      { label: 'Reduced internal friction', description: 'When beliefs that were costing energy are surfaced and examined, the energy they were consuming becomes available.' },
      { label: 'A repeatable self-audit practice', description: "Dr. Mark teaches the process, not just delivers it. Your forum members leave able to run their own belief audits independently." },
    ],
    forum_block_body: `<p>The Belief Audit is one of the core experiences in Dr. Mark Pirtle's custom forum retreats at Tubac Ranch. It is not offered as a standalone workshop or individual session outside of the retreat context.</p>
<p>Surfacing a limiting belief in isolation is interesting. Surfacing it in the presence of your forum — people who know you, who may have watched that belief play out in your decisions for years — and then having days to work with what emerges, is transformational.</p>`,
    photo_gallery: [
      '/images/experiences/belief-audit-1.jpg',
      '/images/experiences/belief-audit-2.jpg',
      '/images/experiences/belief-audit-3.jpg',
    ],
    primary_cta_heading: "Ready to find what's actually running your leadership?",
    primary_cta_body: "The Belief Audit is included in every retreat. Let's build a forum experience around what your group needs most.",
    secondary_cta_heading: 'Want to explore this before you commit?',
    secondary_cta_body: "Join the interest list for a short series on how limiting beliefs operate in executive leadership — and what it looks like to audit and update them.",
    footer_experience_links: ['shadow-work', 'the-narrative-flip', 'leadership-hot-seats', 'fire-ceremony'],
    seo_title: 'The Belief Audit | Executive Leadership Retreat at Tubac Ranch, Arizona',
    seo_description: "The Belief Audit surfaces the operating assumptions quietly running your leadership. A core experience in every Dr. Mark Pirtle forum retreat at Tubac Ranch, Arizona.",
  },

  // ─────────────────────────────────────────────
  // 7. YOGA & MEDITATION — CORE
  // ─────────────────────────────────────────────
  {
    id: '7',
    status: 'published',
    title: 'Yoga & Meditation',
    slug: 'yoga-meditation',
    type: 'core',
    label_text: 'CORE RETREAT EXPERIENCE — INCLUDED IN EVERY FORUM RETREAT',
    hero_headline: 'Executive Mindfulness & Meditation — EO/YPO Leadership Retreats at Tubac Ranch',
    hero_subheadline:
      "You can't think your way to presence. You can't perform your way to clarity. This is how you arrive — and why it changes everything that comes after it.",
    hero_image: '/images/experiences/yoga-meditation-hero.jpg',
    hook_text:
      "Most high-performers arrive at a retreat still running at operating speed.\n\nThe unread messages. The open decisions. The low-grade vigilance that runs continuously and never fully turns off — even on vacation, even asleep.\n\nThat's the state you bring to the work. And the work can only go as deep as the state allows.\n\nYoga and meditation are how that changes.",
    what_is_it: `<p>This is not a fitness class and it is not a wellness add-on. In the context of a forum leadership retreat, yoga and meditation serve a specific and essential function: they settle the nervous system, bring attention back into the body, and create the internal conditions necessary for the deeper work to actually land rather than be processed intellectually and left there.</p>
<p>Dr. Mark integrates these practices into the retreat not as scheduled blocks separate from the real work, but as woven rhythm. Morning practices that open the day. Brief meditations before sessions that require full presence. Restorative practices at the end of a day of deep facilitation that help the body integrate what the mind has been processing.</p>
<p>At Tubac Ranch, these practices happen in the open air of the Sonoran Desert — in morning light, in silence, in a landscape that amplifies the effect of stillness in a way no studio can replicate. Leaders who have never had a meditation practice leave with one. Leaders who already have one report going deeper than they have before.</p>`,
    inclusion_heading: 'This Experience Is Included in Every Forum Retreat',
    inclusion_body:
      "Yoga and meditation are foundational to every retreat Dr. Mark facilitates. They are not optional and they are not for participants who already have a practice — they are for every member of your forum, at whatever level of experience they bring. The practices are accessible, non-performative, and calibrated to the group.",
    why_it_works_intro:
      "The leaders who experience this at Tubac Ranch don't talk about the research. They talk about what it felt like to be genuinely still for the first time in years, and what became visible in that stillness.",
    benefits: [
      { label: 'Nervous system regulation', description: 'The ability to move from reactive to responsive — to create a pause between trigger and action — developed through practice, not intention.' },
      { label: 'Embodied presence', description: 'The kind of attention and availability that makes other people feel genuinely seen and heard, not managed or assessed.' },
      { label: 'A sustainable personal practice', description: 'Dr. Mark teaches practices simple enough to maintain independently. Forum members consistently report continuing them months after the retreat.' },
      { label: 'Deeper access to the other work', description: 'The shadow work, hot seats, and belief audits are proportionally more powerful when the nervous system is regulated.' },
    ],
    forum_block_body: `<p>Yoga and Meditation practice is woven throughout every Dr. Mark Pirtle forum retreat at Tubac Ranch — not as a standalone session but as the thread running through the entire arc of the days.</p>
<p>The Sonoran Desert at Tubac Ranch is one of the few environments left where genuine silence is still available. That silence is not a backdrop to the practice. It is part of it.</p>`,
    photo_gallery: [
      '/images/experiences/yoga-meditation-1.jpg',
      '/images/experiences/yoga-meditation-2.jpg',
      '/images/experiences/yoga-meditation-3.jpg',
    ],
    primary_cta_heading: 'Ready to give your forum the foundation it needs?',
    primary_cta_body: "Yoga and meditation are included in every retreat. Let's design a full forum experience around your group's goals.",
    secondary_cta_heading: 'Curious about mindfulness for leaders?',
    secondary_cta_body: "Join the interest list for a short series on contemplative practice in executive leadership — why it works, what it changes, and how to bring it to your forum.",
    footer_experience_links: ['nature-walks', 'fire-ceremony', 'shadow-work', 'the-belief-audit'],
    seo_title: 'Executive Mindfulness & Meditation Retreat | EO/YPO Forum Retreats at Tubac Ranch, Arizona',
    seo_description: "Yoga & Meditation is woven into every Dr. Mark Pirtle forum retreat at Tubac Ranch. Not a wellness add-on — the foundation that makes deep leadership work possible.",
  },

  // ─────────────────────────────────────────────
  // 8. OUTDOOR EXCURSIONS — PREMIUM
  // ─────────────────────────────────────────────
  {
    id: '8',
    status: 'published',
    title: 'Outdoor Excursions',
    slug: 'outdoor-excursions',
    type: 'premium',
    label_text: 'PREMIUM RETREAT EXPERIENCE — AVAILABLE AS AN ADD-ON',
    hero_headline: 'Outdoor Leadership Excursions — Arizona Desert Retreat for EO/YPO Forums',
    hero_subheadline:
      "Adventure, challenge, and the Sonoran Desert — together. Not every leadership moment happens in a circle. Some of the most important ones happen on a trail.",
    hero_image: '/images/experiences/outdoor-excursions-hero.jpg',
    hook_text:
      "Not everything in a retreat needs to be interior work.\n\nSome of the most lasting bonds in a forum happen when the group does something physical together. When there's a little challenge, a little laughter, a little healthy competition. When the hierarchy of the boardroom completely dissolves and everyone is just navigating the same trail.\n\nThat's what the outdoor excursion block is for.",
    what_is_it: `<p>The outdoor excursion block is a half-day or full-day premium add-on that takes your forum into the landscape surrounding Tubac Ranch for a shared physical experience. Options are tailored to your group's energy and preferences — and the Sonoran Desert offers more than most people expect.</p>
<p>Available excursions include horseback riding through desert terrain, e-biking on trail systems, guided hiking through the foothills between the Santa Rita Mountains and Coronado National Forest, and a shooting range session for forums that want something high-adrenaline and focused.</p>
<p>These experiences are most effective when sequenced thoughtfully within the retreat arc — typically as a midpoint break between deeper facilitated sessions, or as a close-of-retreat celebration. Either way, these are the moments that generate the inside jokes, the unexpected conversations, and the shared stories that forums reference for years.</p>`,
    inclusion_heading: 'This Experience Is Available as a Premium Add-On',
    inclusion_body:
      "Outdoor Excursions are not included in the base retreat — they are added to your custom itinerary during the planning process based on your forum's goals, timeline, and interests. Mention your interest in the inquiry form or on your planning call.",
    why_it_works_intro:
      "The interior work of a leadership retreat is irreplaceable. But it needs to be balanced. The outdoor excursion block is the deliberate release valve — the shared physical experience that lets everything processed settle, and lets the group simply enjoy each other.",
    benefits: [
      { label: 'Informal depth', description: 'The conversations that happen on a trail or on horseback are different — more honest, more relaxed, more likely to go somewhere unexpected and valuable.' },
      { label: 'Shared challenge and laughter', description: 'The forum that navigated something physical together has a shared reference point that changes how they relate.' },
      { label: 'Physical regulation', description: 'Movement processes what stillness and conversation cannot. A physical excursion completes the stress cycle and resets the system.' },
      { label: 'Memory that travels home', description: "The morning your forum rode horses through the Sonoran Desert at sunrise does not fade the way intellectual insights can." },
    ],
    forum_block_body: `<p>Outdoor Excursions are a premium add-on to Dr. Mark Pirtle's custom forum retreats at Tubac Ranch. They are not offered as standalone day programs or team-building experiences independent of a retreat.</p>
<p>The horseback ride at the end of two days of deep inner work with the people who know you best is a different experience than a horseback ride on a regular weekend. The landscape is the same. What you bring to it is not.</p>`,
    photo_gallery: [
      '/images/experiences/outdoor-excursions-1.jpg',
      '/images/experiences/outdoor-excursions-2.jpg',
      '/images/experiences/outdoor-excursions-3.jpg',
    ],
    primary_cta_heading: 'Want to add this to your forum retreat?',
    primary_cta_body: "Outdoor Excursions are a premium add-on. Note your interest in the inquiry form and we'll scope the right options for your group on the planning call.",
    secondary_cta_heading: 'Still exploring?',
    secondary_cta_body: "Join the interest list and we'll share more about how physical experiences fit into the retreat arc — and what the desert around Tubac Ranch actually looks like.",
    footer_experience_links: ['equine-assisted-leadership', 'live-music-under-the-stars', 'nature-walks', 'wine-spirits-tastings'],
    seo_title: 'Outdoor Leadership Excursions | EO/YPO Forum Retreats at Tubac Ranch, Arizona',
    seo_description: "Horseback riding, e-biking, hiking, shooting range — outdoor excursions are a premium add-on in Dr. Mark Pirtle's forum retreats at Tubac Ranch, southern Arizona.",
  },

  // ─────────────────────────────────────────────
  // 9. THE NARRATIVE FLIP — CORE
  // ─────────────────────────────────────────────
  {
    id: '9',
    status: 'published',
    title: 'The Narrative Flip',
    slug: 'the-narrative-flip',
    type: 'core',
    label_text: 'CORE RETREAT EXPERIENCE — INCLUDED IN EVERY FORUM RETREAT',
    hero_headline: 'Reframe Your Leadership Story — The Narrative Flip at Tubac Ranch, Arizona',
    hero_subheadline:
      "You can't lead from a story that keeps you small. This is how you find the story — and what you do when you do.",
    hero_image: '/images/experiences/narrative-flip-hero.jpg',
    hook_text:
      "Every leader has a story running underneath their strategy.\n\nNot the one they tell investors or their board. The internal one. The one that determines what risks feel possible, what relationships feel safe, what success is allowed to look like.\n\nMost of the time it runs invisibly. It shapes decisions without being examined. It generates results — and limitations — that feel like external circumstances but are actually internal architecture.\n\nThe Narrative Flip is how you find it. And change it.",
    what_is_it: `<p>The Narrative Flip is a facilitated process of identifying the story you have been telling — about a situation, about yourself, about what is and isn't possible — and deliberately constructing a more accurate and more useful alternative. Not forced optimism. Not toxic positivity. A genuinely different interpretation of the same facts, one that opens up possibility instead of foreclosing it.</p>
<p>This is grounded in practical neuroscience. The story you tell about a situation is not a neutral description of reality — it is an active construction that selects certain facts, ignores others, and generates emotions and behaviors that follow from it. Change the story at the right level, with the right support, and you change what actions become available.</p>
<p>Dr. Mark Pirtle facilitates this process at Tubac Ranch as both an individual and group experience. Forum members surface and examine the narrative they have been running around their most significant current challenge — and leave with a different story, road-tested in the presence of the people who know their patterns best.</p>`,
    inclusion_heading: 'This Experience Is Included in Every Forum Retreat',
    inclusion_body:
      "The Narrative Flip is part of the SkillfullyAware® facilitation framework Dr. Mark brings to every retreat. It is typically sequenced after the Belief Audit — when the operating assumptions beneath the story have already been surfaced, the flip itself goes deeper and holds longer.",
    why_it_works_intro:
      "The leaders who get the most from this process are the ones who arrive most convinced their story is simply an accurate description of reality. The Narrative Flip doesn't argue with that conviction — it examines the evidence for it, and opens the door to a version that is equally grounded and significantly more useful.",
    benefits: [
      { label: 'Unstuck momentum', description: 'Situations that felt fixed — the difficult partner, the stalled initiative, the relationship that has not moved — often shift when the story about them shifts.' },
      { label: 'Real-time reframing ability', description: "Dr. Mark teaches the process, not just delivers it. Forum members leave able to catch and examine their own narratives in the moment — under pressure, before the reactive decision gets made." },
      { label: 'Collective perspective expansion', description: "The forum's collective intelligence surfaces alternative interpretations the individual couldn't see alone — which is precisely why this works better in a retreat context." },
      { label: 'Immediate application', description: 'Unlike some retreat insights that require weeks of integration, the Narrative Flip typically produces changes in behavior visible within days of returning home.' },
    ],
    forum_block_body: `<p>The Narrative Flip is one of the core experiences in Dr. Mark Pirtle's custom forum retreats at Tubac Ranch. It is not offered as a standalone workshop or individual coaching session outside of the retreat context.</p>
<p>The forum container is what makes it work at depth. Your forum members have watched each other operate for months or years — they know the stories. Their presence in the room when the story gets examined is the most powerful source of data available.</p>`,
    photo_gallery: [
      '/images/experiences/narrative-flip-1.jpg',
      '/images/experiences/narrative-flip-2.jpg',
      '/images/experiences/narrative-flip-3.jpg',
    ],
    primary_cta_heading: 'Ready to change the story your forum is leading from?',
    primary_cta_body: "The Narrative Flip is included in every retreat. Let's design a full forum experience built around your group's most significant current challenges.",
    secondary_cta_heading: 'Want to explore this first?',
    secondary_cta_body: "Join the interest list for a short series on how leadership narratives form, how they limit performance, and what it looks like to flip them in a group setting.",
    footer_experience_links: ['the-belief-audit', 'shadow-work', 'leadership-hot-seats', 'fire-ceremony'],
    seo_title: 'The Narrative Flip | Executive Leadership Retreat at Tubac Ranch, Arizona',
    seo_description: "The Narrative Flip helps leaders identify and reframe the stories quietly running their decisions. A core experience in every Dr. Mark Pirtle forum retreat at Tubac Ranch.",
  },

  // ─────────────────────────────────────────────
  // 10. NATURE WALKS — CORE
  // ─────────────────────────────────────────────
  {
    id: '10',
    status: 'published',
    title: 'Nature Walks',
    slug: 'nature-walks',
    type: 'core',
    label_text: 'CORE RETREAT EXPERIENCE — INCLUDED IN EVERY FORUM RETREAT',
    hero_headline: 'Desert Leadership Walks — Sonoran Desert Retreats for Executive Forums',
    hero_subheadline:
      "The Sonoran Desert has a way of putting things in perspective. Problems that felt enormous become proportionate. The noise in your head has less to compete with.",
    hero_image: '/images/experiences/nature-walks-hero.jpg',
    hook_text:
      "There is a specific kind of thinking that only happens when you are moving through open space.\n\nNot the analytical thinking. Not the strategic planning. The other kind — associative, intuitive, the kind that surfaces what you didn't know you knew.\n\nFor most executives, that kind of thinking hasn't had conditions in years.\n\nThe desert at Tubac Ranch provides them.",
    what_is_it: `<p>Nature walks at Tubac Ranch are not hikes scheduled for exercise. They are facilitated conversations in motion — sometimes with the full group, sometimes in structured pairs, sometimes in deliberate silence — using the landscape of the Sonoran Desert as both backdrop and active participant in the process.</p>
<p>Dr. Mark uses the walk as a container for processing, reflection, and the kind of honest conversation that happens more naturally when you are not sitting across a table from someone. The absence of eye contact that walking creates — side by side, moving in the same direction — is one of the most reliable conditions for genuine disclosure.</p>
<p>The terrain surrounding Tubac Ranch runs between the Santa Rita Mountains and Coronado National Forest — open, vast, and profoundly quiet. Research on attention restoration consistently shows that time in natural environments enhances cognitive flexibility, reduces stress hormones, and increases the quality of creative and reflective thinking. This isn't a break from the retreat. It is part of it.</p>`,
    inclusion_heading: 'This Experience Is Included in Every Forum Retreat',
    inclusion_body:
      "Nature walks are woven into the daily rhythm of every retreat at Tubac Ranch. They are part of how the work moves, breathes, and integrates across the days. Morning walks, processing walks, closing walks. The desert is always available. Dr. Mark uses it deliberately.",
    why_it_works_intro:
      "The executives who are most surprised by nature walks are typically the ones who arrive most skeptical — the ones who came for the facilitation, not the hiking. They leave having had some of the most significant conversations of the retreat on a trail.",
    benefits: [
      { label: 'Access to a different quality of thinking', description: 'The insights that surface on a walk in the Sonoran Desert are more associative, more honest, less defended than those produced in a room.' },
      { label: 'Pairs depth', description: 'Structured pair walks are one of the fastest ways to deepen the one-on-one relationships within a forum. Side by side, moving, people go further faster.' },
      { label: 'Processing time that actually works', description: 'Between intensive facilitated sessions, the nervous system needs movement and space to consolidate what has been processed.' },
      { label: 'A practice for home', description: 'Forum members consistently report returning to walking as a thinking and processing practice after the retreat.' },
    ],
    forum_block_body: `<p>Nature walks are embedded in the structure of every Dr. Mark Pirtle forum retreat at Tubac Ranch — not available as a standalone guided hike or half-day program.</p>
<p>A walk in the Sonoran Desert on the second day of a retreat — after your forum has moved through shadow work and a fire ceremony together — is a different walk than any other walk you have ever taken. The desert is the same. What you bring to it has changed.</p>`,
    photo_gallery: [
      '/images/experiences/nature-walks-1.jpg',
      '/images/experiences/nature-walks-2.jpg',
      '/images/experiences/nature-walks-3.jpg',
    ],
    primary_cta_heading: 'Ready to bring your forum to the desert?',
    primary_cta_body: "Nature walks are included in every retreat at Tubac Ranch. Let's build the full forum experience around what your group needs.",
    secondary_cta_heading: 'Want to know more about Tubac Ranch first?',
    secondary_cta_body: "Join the interest list for a short series on the retreat experience — the landscape, the rhythm of the days, and what makes southern Arizona the right setting for this work.",
    footer_experience_links: ['yoga-meditation', 'fire-ceremony', 'outdoor-excursions', 'shadow-work'],
    seo_title: 'Desert Nature Walks for Leaders | EO/YPO Forum Retreats at Tubac Ranch, Arizona',
    seo_description: "Nature walks at Tubac Ranch aren't hikes. They're facilitated leadership conversations in motion — in the silence of the Sonoran Desert. Included in every forum retreat.",
  },

  // ─────────────────────────────────────────────
  // 11. DRUMMING & MUSIC — CORE
  // ─────────────────────────────────────────────
  {
    id: '11',
    status: 'published',
    title: 'Drumming & Music',
    slug: 'drumming-music',
    type: 'core',
    label_text: 'CORE RETREAT EXPERIENCE — INCLUDED IN EVERY FORUM RETREAT',
    hero_headline: 'Drumming & Music for Executive Forums — Leadership Retreats at Tubac Ranch',
    hero_subheadline:
      "Rhythm connects what analysis separates. You don't need to be a musician. You just need to show up and play.",
    hero_image: '/images/experiences/drumming-music-hero.jpg',
    hook_text:
      "Most forum leaders arrive at this session with the same reaction: mild skepticism and a willingness to try.\n\nThey leave having experienced something they didn't have language for going in — a particular quality of connection with the people in the room that five hours of facilitated dialogue hadn't fully produced.\n\nRhythm does something. It bypasses the thinking mind, synchronizes nervous systems, and creates group cohesion faster than most processes available to a facilitator.",
    what_is_it: `<p>A facilitated drumming circle is a structured group experience built around rhythm — no musical experience required, no performance expected, no right or wrong way to participate. Drums and percussion instruments are provided. Dr. Mark guides the group through a progression that begins with individual rhythm and builds toward collective synchrony.</p>
<p>This is not a music lesson and it is not entertainment. It is a somatic group experience — meaning it works through the body, not through the mind. The analytical frameworks that dominate most of the retreat get bypassed entirely. What's accessed instead is something more immediate: the felt sense of being in sync with the people around you.</p>
<p>Music in a broader sense — live performance, spontaneous group song, instruments available throughout the retreat — adds texture and humanity to the overall experience. It is a continuous reminder that the leaders gathered at Tubac Ranch are whole people, and that joy is not separate from the serious work of leadership development.</p>`,
    inclusion_heading: 'This Experience Is Included in Every Forum Retreat',
    inclusion_body:
      "Drumming and music are part of the rhythm of every retreat Dr. Mark facilitates at Tubac Ranch. The formal drumming circle is typically held in the evening — often after a day of deep interior work — and serves as both release and integration.",
    why_it_works_intro:
      "The leaders who are most transformed by this experience are almost always the ones who were most skeptical going in. Twenty minutes in, the skeptics are playing. Thirty minutes in, they don't want to stop.",
    benefits: [
      { label: 'Rapid group cohesion', description: 'Synchronized rhythm creates a felt sense of collective unity that is neurologically distinct from the connection produced by conversation. Faster, deeper, more embodied.' },
      { label: 'Released self-consciousness', description: 'The fear of doing it wrong or looking foolish is one of the most persistent barriers to authentic connection in a high-performing group. The drumming circle dissolves it efficiently.' },
      { label: 'Right-brain activation', description: 'The analytical, verbal processing that dominates executive life gets genuinely rested. Creative, intuitive thinking becomes more available for the rest of the retreat.' },
      { label: 'Genuine joy', description: 'Which is itself a leadership resource — and one that is chronically underdeveloped in most EO and YPO forum members by the time they arrive at Tubac Ranch.' },
    ],
    forum_block_body: `<p>Drumming and Music is woven into the arc of every Dr. Mark Pirtle forum retreat at Tubac Ranch. It is not offered as a standalone team-building session or evening program.</p>
<p>After a day of shadow work and hot seats, the drumming circle is not a distraction from the work. It is a continuation of it through a different channel. The trust already built makes the play possible. The play deepens the trust further.</p>`,
    photo_gallery: [
      '/images/experiences/drumming-music-1.jpg',
      '/images/experiences/drumming-music-2.jpg',
      '/images/experiences/drumming-music-3.jpg',
    ],
    primary_cta_heading: 'Ready to bring your forum to Tubac Ranch?',
    primary_cta_body: "Drumming and music are included in every retreat. Let's design the full experience around what your forum needs.",
    secondary_cta_heading: 'Skeptical but curious?',
    secondary_cta_body: "Good. Join the interest list for a short series on why rhythm works for leadership development — and what your forum might actually experience in a drumming circle.",
    footer_experience_links: ['fire-ceremony', 'ecstatic-dancing', 'live-music-under-the-stars', 'nature-walks'],
    seo_title: 'Drumming & Music for Executive Forums | Leadership Retreats at Tubac Ranch, Arizona',
    seo_description: "Drumming & Music is a core experience in every Dr. Mark Pirtle forum retreat at Tubac Ranch. Rhythm does what analysis cannot — and your forum will feel the difference.",
  },

  // ─────────────────────────────────────────────
  // 12. 1:1 COACHING & BODYWORK — PREMIUM
  // ─────────────────────────────────────────────
  {
    id: '12',
    status: 'published',
    title: '1:1 Coaching & Bodywork',
    slug: '1-1-coaching-bodywork',
    type: 'premium',
    label_text: 'PREMIUM RETREAT EXPERIENCE — AVAILABLE AS AN ADD-ON',
    hero_headline: '1:1 Executive Coaching & Bodywork — Forum Retreat Add-On, Tubac Ranch',
    hero_subheadline:
      "Sometimes the work needs to go one level deeper. These sessions exist for exactly that — the personal material that surfaces in the retreat and deserves its own container.",
    hero_image: '/images/experiences/coaching-bodywork-hero.jpg',
    hook_text:
      "In the course of a multi-day retreat, things surface.\n\nPersonal material that is too specific, too raw, or too significant for the group container. A pattern that needs direct and focused attention rather than peer reflection. A moment of breakthrough that deserves careful tending before it gets carried back into the noise of a leadership life.\n\nThe 1:1 sessions are available for exactly these moments.",
    what_is_it: `<p>Individual coaching sessions with Dr. Mark Pirtle are available as a premium add-on for forum members who want or need deeper one-on-one support within the retreat context. These are not standard executive coaching sessions — they are precise, experience-informed conversations that pick up directly from where the group work left off.</p>
<p>Where appropriate, these sessions incorporate somatic bodywork — hands-on nervous system work that helps the body release what the mind has been processing. For many leaders, significant psychological insight has been accumulated over years of coaching and therapy, yet certain patterns persist because they are held in the body, not the mind. Somatic work accesses what conversation alone cannot reach.</p>
<p>This is one of the most valued premium add-ons in the forum retreat program — precisely because it gives each member of the forum access to depth that is calibrated entirely to what they are carrying at that specific moment, in the presence of a facilitator who has been with them through everything the retreat has surfaced.</p>`,
    inclusion_heading: 'This Experience Is Available as a Premium Add-On',
    inclusion_body:
      "Individual coaching and bodywork sessions are not included in the base retreat. They are added for specific forum members who request them — either during the planning process or as something that becomes relevant during the retreat itself. Mention your interest in the inquiry form and Dr. Mark will discuss how to structure individual time within your retreat.",
    why_it_works_intro:
      "The group work in a forum retreat is irreplaceable. The 1:1 sessions don't compete with that. They extend it — giving each member access to a private space where what surfaced in the group can be taken further and worked with at a level of personal specificity the group container cannot provide.",
    benefits: [
      { label: 'Personal precision', description: 'The group work surfaces patterns. The individual session names them with precision — the specific version in this specific person\'s leadership.' },
      { label: 'Somatic release', description: 'For leaders carrying significant held tension, somatic bodywork provides a quality of release that no amount of conversation reaches.' },
      { label: 'Private container for significant material', description: "Not everything that surfaces in a retreat belongs in the group. The 1:1 session provides the right container for that material — experienced, boundaried, and completely confidential." },
      { label: 'Integration support', description: 'Major insights and shifts need tending. The individual session provides space to consolidate what has emerged and carry it forward deliberately.' },
    ],
    forum_block_body: `<p>1:1 Coaching & Bodywork sessions are a premium add-on within Dr. Mark Pirtle's forum retreats at Tubac Ranch. They are not offered as standalone coaching sessions or individual appointments outside of the retreat context.</p>
<p>The individual session on day three of a forum retreat — after the shadow work, the hot seat, the fire ceremony — engages material that has been surfaced and prepared by everything that came before it. The same session, without that context, would be a significantly less powerful experience.</p>`,
    photo_gallery: [
      '/images/experiences/coaching-bodywork-1.jpg',
      '/images/experiences/coaching-bodywork-2.jpg',
      '/images/experiences/coaching-bodywork-3.jpg',
    ],
    primary_cta_heading: 'Want to include individual sessions in your retreat?',
    primary_cta_body: "Note your interest in the inquiry form. We'll discuss how to structure individual time within your forum retreat on the planning call.",
    secondary_cta_heading: 'Want to understand somatic work first?',
    secondary_cta_body: "Join the interest list for a grounded overview of what somatic coaching involves, how it differs from standard executive coaching, and why it produces results that conversation alone often can't.",
    footer_experience_links: ['equine-assisted-leadership', 'plant-medicine-journeys', 'shadow-work', 'prayer-lodge-ceremonies'],
    seo_title: '1:1 Executive Coaching & Bodywork | Forum Retreat Add-On at Tubac Ranch, Arizona',
    seo_description: "Individual coaching and somatic bodywork sessions available as a premium add-on in Dr. Mark Pirtle's EO/YPO forum retreats at Tubac Ranch.",
  },

  // ─────────────────────────────────────────────
  // 13. PRAYER LODGE CEREMONIES — PREMIUM-REQUEST
  // ─────────────────────────────────────────────
  {
    id: '13',
    status: 'published',
    title: 'Prayer Lodge Ceremonies',
    slug: 'prayer-lodge-ceremonies',
    type: 'premium-request',
    label_text: 'PREMIUM RETREAT EXPERIENCE — AVAILABLE BY REQUEST',
    hero_headline: 'Prayer Lodge Ceremonies — Transformational Leadership Retreat, Tubac Ranch Arizona',
    hero_subheadline:
      "Ancient practice. Present-moment transformation. One of the oldest forms of intentional renewal practiced on this land — offered with deep respect, careful preparation, and experienced facilitation.",
    hero_image: '/images/experiences/prayer-lodge-hero.jpg',
    hook_text:
      "High-performers are exceptionally good at accumulating.\n\nCommitments, pressure, decisions, unresolved tension, the weight of years of operating at altitude. The body carries it even when the mind has moved on.\n\nThe prayer lodge is one of the oldest practices available for releasing it — genuinely, completely, and in a way that no amount of conversation or intellectual processing can replicate.",
    what_is_it: `<p>The prayer lodge — a traditional Native purification ceremony — is among the most ancient and direct forms of intentional transformation practiced on this land. In a carefully prepared and facilitated ceremony, participants enter a dark, heated space — symbolic of the womb of the earth — and move through rounds of prayer, intention, and release. What emerges is different for each person. Clarity. Relief. A sense of being genuinely clean in a way that is difficult to describe and immediately recognizable.</p>
<p>This is not cultural tourism presented as a wellness activity. Dr. Mark Pirtle facilitates these ceremonies with deep respect for their origins, their protocol, and their power. The preparation is thorough. The container is safe and properly constructed. Participants are guided through what to expect, how to engage, and how to care for themselves before, during, and after. Nothing is imposed. Everything is offered with full context and genuine choice.</p>
<p>For leaders who enter it with sincere intention, the prayer lodge often becomes the most significant single experience of the entire retreat — a before-and-after threshold that is felt in the body and remembered for years.</p>`,
    inclusion_heading: 'This Experience Is Available by Request',
    inclusion_body:
      "Prayer Lodge Ceremonies are not part of the base retreat and are not confirmed through the standard inquiry process. They require a conversation about preparation, participant readiness, physical considerations, and the appropriate context within your retreat arc. If your forum is drawn to this experience, mention it in your inquiry form. Dr. Mark will initiate a separate conversation before it is confirmed. It is never required and always offered with complete information and genuine choice for every participant.",
    why_it_works_intro:
      "The prayer lodge works at a level that most leadership development experiences do not reach — not the cognitive level, not the emotional level, but the somatic and spiritual level where the heaviest weight is actually held.",
    benefits: [
      { label: 'Genuine release', description: 'Not intellectual reframing but physical, somatic, complete release of accumulated weight — the kind that changes how your body feels and how much energy is available.' },
      { label: 'Threshold experience', description: 'The prayer lodge creates a clear before and after. Forum members who have been through it together share a reference point unlike any other.' },
      { label: 'Embodied surrender', description: "The practice of genuinely releasing control — not as a concept but as a physical, lived experience — is one of the rarest and highest-leverage leadership capacities available." },
      { label: 'Sacred context for the retreat', description: "For forums that choose it, the prayer lodge often reframes the entire retreat experience — giving it a quality of meaning that participants carry home for years." },
    ],
    forum_block_body: `<p>Prayer Lodge Ceremonies are available only as part of Dr. Mark Pirtle's custom forum retreats at Tubac Ranch. They are not offered as standalone ceremonies, evening programs, or individual experiences.</p>
<p>The container is everything. The prayer lodge on the third night of a retreat — after your forum has moved through shadow work and fire ceremony and hot seats together, after something real has already been opened — is a different experience than a prayer lodge with strangers. The land is the same. What you bring to it has changed.</p>`,
    photo_gallery: [
      '/images/experiences/prayer-lodge-1.jpg',
      '/images/experiences/prayer-lodge-2.jpg',
      '/images/experiences/prayer-lodge-3.jpg',
    ],
    primary_cta_heading: 'Is your forum ready for this?',
    primary_cta_body: "Mention your interest in the inquiry form. Dr. Mark will reach out to have a separate conversation before this is confirmed as part of your retreat.",
    secondary_cta_heading: 'Want to understand this practice first?',
    secondary_cta_body: "Join the interest list for a grounded, respectful overview of prayer lodge ceremony — what it involves, how it is facilitated, and whether it might be right for your forum.",
    footer_experience_links: ['plant-medicine-journeys', 'fire-ceremony', '1-1-coaching-bodywork', 'shadow-work'],
    seo_title: 'Prayer Lodge Ceremonies | Transformational Leadership Retreat at Tubac Ranch, Arizona',
    seo_description: "Prayer Lodge Ceremonies are a premium, request-based experience in Dr. Mark Pirtle's EO/YPO forum retreats at Tubac Ranch. Ancient practice. Present-moment transformation.",
  },

  // ─────────────────────────────────────────────
  // 14. LIVE MUSIC UNDER THE STARS — PREMIUM
  // ─────────────────────────────────────────────
  {
    id: '14',
    status: 'published',
    title: 'Live Music Under the Stars',
    slug: 'live-music-under-the-stars',
    type: 'premium',
    label_text: 'PREMIUM RETREAT EXPERIENCE — AVAILABLE AS AN ADD-ON',
    hero_headline: 'Live Music Under the Stars — Private Desert Concert for EO/YPO Forums',
    hero_subheadline:
      "A private concert in the Sonoran Desert. No venue. No crowd. No noise but the music and the desert night. Just your forum — and something genuinely beautiful.",
    hero_image: '/images/experiences/live-music-hero.jpg',
    hook_text:
      "Most retreats end with a debrief and a handshake.\n\nThis one ends differently.\n\nOn the last evening at Tubac Ranch, your forum gathers outside as the desert cools and the sky fills with stars — and an artist performs for you alone. No stage. No ticketing. No shared venue with strangers. Just music, in the desert, for the people who have spent the last few days doing something real together.",
    what_is_it: `<p>Live Music Under the Stars is a private concert held outdoors at Tubac Ranch — an artist performing an acoustic or intimate set for your forum alone, in the open desert night, under a sky that southern Arizona provides better than almost anywhere else on the continent.</p>
<p>The artist is curated to complement the emotional arc of your retreat — the genre, the energy, the tone — so that the music arrives not as entertainment layered on top of the experience but as its natural conclusion. Something that captures in sound what the previous days have been building toward.</p>
<p>This is one of the most memorable premium add-ons in the forum retreat program — and one of the most requested by forums returning for a second retreat. It sends your group home with a feeling that outlasts every intellectual insight, every breakthrough, every practical takeaway. The body remembers the music in the desert in a way it remembers almost nothing else.</p>`,
    inclusion_heading: 'This Experience Is Available as a Premium Add-On',
    inclusion_body:
      "Live Music Under the Stars is not included in the base retreat — it is added to your custom itinerary during the planning process. Artist curation, logistics, and scheduling are handled by Dr. Mark's team as part of your custom proposal. Mention your interest in the inquiry form.",
    why_it_works_intro:
      "The most lasting memories from any significant human experience are rarely the intellectual ones. They are the sensory ones — the ones the body encoded rather than the mind catalogued.",
    benefits: [
      { label: 'A peak moment that anchors the retreat', description: 'The private concert under the desert sky provides an emotionally significant peak that the rest of the retreat anchors to in memory.' },
      { label: 'Collective close', description: "The forum needs a close that honors the weight of what they've done. Live music provides this in a way that a closing circle or debrief cannot." },
      { label: 'Unhurried beauty', description: "For executives who spend their lives optimizing for output, the experience of simply sitting in the desert listening to something beautiful — with no agenda — is itself a kind of leadership development." },
      { label: 'The story they tell when they get home', description: 'Every member of your forum will describe this retreat to someone. The private concert under the stars is what they will describe first.' },
    ],
    forum_block_body: `<p>Live Music Under the Stars is a premium close available as part of Dr. Mark Pirtle's custom forum retreats at Tubac Ranch. It is not offered as a standalone event or private concert booking.</p>
<p>A private concert in the desert at the end of a forum retreat is not the same as a private concert in the desert. The days before it — what your forum has moved through, what has shifted, how differently they see each other — is what the music arrives into. That context is everything.</p>`,
    photo_gallery: [
      '/images/experiences/live-music-1.jpg',
      '/images/experiences/live-music-2.jpg',
      '/images/experiences/live-music-3.jpg',
    ],
    primary_cta_heading: 'Want to close your retreat with something unforgettable?',
    primary_cta_body: "Live Music Under the Stars is a premium add-on. Mention your interest in the inquiry form and we'll build it into your custom proposal.",
    secondary_cta_heading: 'Still exploring?',
    secondary_cta_body: "Join the interest list and we'll share more about what a forum retreat at Tubac Ranch looks and feels like — including how the evenings unfold.",
    footer_experience_links: ['wine-spirits-tastings', 'ecstatic-dancing', 'fire-ceremony', 'outdoor-excursions'],
    seo_title: 'Live Music Under the Stars | Premium Forum Retreat Experience, Tubac Ranch Arizona',
    seo_description: "A private concert in the Sonoran Desert — for your forum alone. Live Music Under the Stars is a premium close-of-retreat experience at Tubac Ranch, Arizona.",
  },

  // ─────────────────────────────────────────────
  // 15. ECSTATIC DANCING — PREMIUM
  // ─────────────────────────────────────────────
  {
    id: '15',
    status: 'published',
    title: 'Ecstatic Dancing',
    slug: 'ecstatic-dancing',
    type: 'premium',
    label_text: 'PREMIUM RETREAT EXPERIENCE — AVAILABLE AS AN ADD-ON',
    hero_headline: 'Ecstatic Dance for Executive Leaders — Forum Retreat Experience, Arizona',
    hero_subheadline:
      "Let go of the performance. Move from the inside. This is the one experience most forum leaders think isn't for them — right up until it changes something.",
    hero_image: '/images/experiences/ecstatic-dancing-hero.jpg',
    hook_text:
      "Go ahead. Have the reaction.\n\nEcstatic dance. For executives. At a leadership retreat.\n\nThat reaction — the skepticism, the mild horror, the internal \"absolutely not\" — is precisely the thing this experience is designed to work with. Because that reaction is the same one that shows up in the boardroom, in the difficult conversation, in the moment when something authentic is available and the performance reflex shuts it down.\n\nThe question is not whether you'll like it. The question is what happens when you do it anyway.",
    what_is_it: `<p>Ecstatic dance is a free-movement practice — no choreography, no steps to follow, no right way to do it, no performance expected or evaluated. It is guided music that evolves in a deliberate arc: slow and grounding at the opening, building to something expansive, cresting and releasing, settling into stillness. Within that arc, you move however your body wants to move.</p>
<p>The facilitated arc is important. This is not a dance party and it is not improvisational chaos. It is a structured somatic journey that uses music and movement to access states of release, of joy, of genuine physical freedom that most executives have not experienced in a professional context in years. The structure creates the safety. The safety creates the permission. The permission creates the experience.</p>
<p>For most EO and YPO leaders, the first ten minutes are uncomfortable. The self-consciousness is real. The fear of looking foolish is present. These are not bugs in the experience — they are the exact content it is designed to process. What emerges on the other side is something closer to authentic freedom than most leaders access in any room they walk into. And that freedom shows up afterward — in how they speak, connect, and lead.</p>`,
    inclusion_heading: 'This Experience Is Available as a Premium Add-On',
    inclusion_body:
      "Ecstatic Dance is not included in the base retreat. It is added for forums that are ready for it — meaning forums that have already built a significant level of trust and are willing to move through discomfort together. Dr. Mark will assess readiness during the planning call and sequence it appropriately within the retreat arc if it is included.",
    why_it_works_intro:
      "The leaders who resist this the most are frequently the ones who get the most from it. The resistance is the data. The executive who has spent thirty years managing how they appear — and who spends forty-five minutes moving freely in the desert — learns something about themselves that no amount of coaching conversation reaches.",
    benefits: [
      { label: 'Dissolved performance reflex', description: 'The constant self-monitoring that limits authentic expression gets genuinely interrupted. Leaders report showing up differently in the weeks after this experience.' },
      { label: 'Physical and emotional release', description: 'Movement processes what stillness and conversation cannot. The body holds things. Ecstatic dance gives them somewhere to go — completely, physically.' },
      { label: 'Uninhibited group trust', description: 'The forum that has danced together — freely, awkwardly, joyfully — knows each other at a level of authenticity different from any facilitated dialogue.' },
      { label: 'Access to joy', description: 'Which is a leadership resource. Chronically underdeveloped in high-performers. Directly available here.' },
    ],
    forum_block_body: `<p>Ecstatic Dancing is a premium add-on within Dr. Mark Pirtle's custom forum retreats at Tubac Ranch. It is not offered as a standalone class, workshop, or evening program.</p>
<p>Trust is the prerequisite. The freedom this experience asks for is only available when the group has already built something real together. Ecstatic dance at the end of that arc is transformational. The same experience with strangers is something else entirely.</p>`,
    photo_gallery: [
      '/images/experiences/ecstatic-dancing-1.jpg',
      '/images/experiences/ecstatic-dancing-2.jpg',
      '/images/experiences/ecstatic-dancing-3.jpg',
    ],
    primary_cta_heading: "Still skeptical? Good. Tell us about your forum.",
    primary_cta_body: "Ecstatic Dance is a premium add-on for forums that are ready for it. Mention your interest and we'll talk through whether it's the right fit on your planning call.",
    secondary_cta_heading: 'Not ready to reach out yet?',
    secondary_cta_body: "Join the interest list. We'll send you a short series on why movement matters for leadership — and what actually happens in a facilitated ecstatic dance session at Tubac Ranch.",
    footer_experience_links: ['drumming-music', 'fire-ceremony', 'live-music-under-the-stars', 'shadow-work'],
    seo_title: 'Ecstatic Dancing for Executive Leaders | Forum Retreat at Tubac Ranch, Arizona',
    seo_description: "Ecstatic Dance dissolves the performative self-monitoring that limits authentic leadership. A premium experience in Dr. Mark Pirtle's EO/YPO forum retreats at Tubac Ranch.",
  },

  // ─────────────────────────────────────────────
  // 16. CURATED WINE & SPIRITS TASTINGS — PREMIUM
  // ─────────────────────────────────────────────
  {
    id: '16',
    status: 'published',
    title: 'Curated Wine & Spirits Tastings',
    slug: 'wine-spirits-tastings',
    type: 'premium',
    label_text: 'PREMIUM RETREAT EXPERIENCE — AVAILABLE AS AN ADD-ON',
    hero_headline: 'Curated Wine & Spirits Tastings — Premium Forum Retreat Experience, Arizona',
    hero_subheadline:
      "Connection that doesn't require a facilitator. Some of the best conversations at a leadership retreat happen over a glass of something exceptional.",
    hero_image: '/images/experiences/wine-spirits-hero.jpg',
    hook_text:
      "After two days of shadow work, fire ceremony, and leadership hot seats — after your forum has gone somewhere real together — there is a particular quality of conversation that becomes available in the evening.\n\nMore relaxed. More honest. More present.\n\nThe curated tasting session is designed to hold exactly that conversation — with something exceptional in the glass, an expert to guide the experience, and the desert evening as the backdrop.",
    what_is_it: `<p>The curated tasting sessions are expertly guided sensory experiences — working through a selection of premium wines, fine tequilas, or craft spirits, with attention to the story behind each, the craft involved in producing it, and the pleasure of tasting with genuine intention and the right company.</p>
<p>These sessions are led by a specialist and designed as an evening experience — a deliberate transition from the intensity of the day's facilitated work into more relaxed group time that still feels curated and special. The conversation that emerges alongside the tasting tends to go further than the formal sessions — more personal, more lateral, the kind of exchange that fills in the gaps between what the structured work surfaces.</p>
<p>This is premium hospitality in a remarkable setting. It is not a networking event and it is not a tasting flight at a resort bar. It is a private evening experience for a group that has earned something beautiful together — and is now ready to simply enjoy each other's company in a way that is both pleasurable and, somehow, still part of the work.</p>`,
    inclusion_heading: 'This Experience Is Available as a Premium Add-On',
    inclusion_body:
      "Curated Wine & Spirits Tastings are not included in the base retreat — they are added to your custom itinerary during the planning process. Selection, specialist facilitation, and logistics are handled as part of your custom proposal. Mention your interest in the inquiry form.",
    why_it_works_intro:
      "The tasting session works because it is deliberately not intensive. After days of deep inner work, the group needs an experience that is genuinely pleasurable — that asks nothing of them except to slow down, pay attention, and enjoy.",
    benefits: [
      { label: 'Relaxed depth', description: 'The conversations that happen over a curated tasting are more lateral, more personal, more likely to go somewhere unexpected and valuable — because the setting signals that the work is done for today.' },
      { label: 'Shared sensory experience', description: 'Tasting the same thing at the same moment, in the same setting, with people you trust — is a small but genuine form of intimacy that adds to the accumulated shared experience of the retreat.' },
      { label: 'Premium hospitality signal', description: 'For EO and YPO leaders who have experienced executive retreats before, the quality of the evening hospitality is part of how the overall retreat is evaluated and remembered.' },
      { label: 'Transition and integration', description: 'The evening after the most intensive day of a retreat needs to breathe. The tasting session provides that breathing room — a gentle, pleasurable container for the group to land in.' },
    ],
    forum_block_body: `<p>Curated Wine & Spirits Tastings are a premium evening add-on within Dr. Mark Pirtle's custom forum retreats at Tubac Ranch. They are not offered as standalone tasting events or private dining experiences.</p>
<p>A curated tasting at the end of a day of shadow work and fire ceremony, with the people you have just moved through something real with, in the desert at Tubac Ranch — that is a particular kind of evening. The wine and spirits are exceptional. The setting is extraordinary. The company is the variable that makes it unforgettable.</p>`,
    photo_gallery: [
      '/images/experiences/wine-spirits-1.jpg',
      '/images/experiences/wine-spirits-2.jpg',
      '/images/experiences/wine-spirits-3.jpg',
    ],
    primary_cta_heading: 'Want to include this in your retreat?',
    primary_cta_body: "Curated tastings are a premium add-on. Note your interest in the inquiry form and we'll scope the right evening experience for your forum on the planning call.",
    secondary_cta_heading: 'Still designing your retreat?',
    secondary_cta_body: "Join the interest list for a short series on the full forum retreat experience at Tubac Ranch — including how the evenings are structured and what makes the hospitality exceptional.",
    footer_experience_links: ['live-music-under-the-stars', 'outdoor-excursions', 'equine-assisted-leadership', 'fire-ceremony'],
    seo_title: 'Curated Wine & Spirits Tastings | Premium Forum Retreat Experience, Tubac Ranch Arizona',
    seo_description: "Expertly guided wine and spirits tastings — an evening premium add-on in Dr. Mark Pirtle's EO/YPO forum retreats at Tubac Ranch. Connection that doesn't require a facilitator.",
  },
];

// ─────────────────────────────────────────────
// HELPER FUNCTIONS — mirrors lib/experiences.ts API
// so the page files need zero changes when Directus lands
// ─────────────────────────────────────────────

export function getAllExperiences(): Experience[] {
  return EXPERIENCES.filter((e) => e.status === 'published');
}

export function getExperienceBySlug(slug: string): Experience | null {
  return EXPERIENCES.find((e) => e.slug === slug && e.status === 'published') ?? null;
}

export function getRelatedExperiences(
  slugs: string[]
): Pick<Experience, 'slug' | 'title' | 'type'>[] {
  return EXPERIENCES.filter((e) => slugs.includes(e.slug) && e.status === 'published').map(
    ({ slug, title, type }) => ({ slug, title, type })
  );
}