// lib/blog-data.ts
// Mirrors the Directus blog_posts collection schema exactly.
// When Directus is ready, replace this file with SDK calls in lib/blog.ts.

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featured_image: string;
  categories: string[];
  author: string;
  published_date: string;
  status: 'published' | 'draft';
};

const SQ = 'https://images.squarespace-cdn.com/content/v1/69122ddaa1c6bd269d614d27';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'of-wolves-rivers-and-us',
    title: 'Of Wolves, Rivers, and Us',
    excerpt: 'In Yellowstone, the return of a handful of wolves reshaped an entire ecosystem—even changing the rivers. Our inner lives work the same way: restore one key relationship, and everything reorganizes.',
    content: `<p>Hey friends,</p>
<p>There's a story I wrote about in the introduction of my upcoming book, <em>The Healing Mindset</em>, that tells what happened when wolves were reintroduced into Yellowstone National Park.</p>
<p>In the 1990s, scientists reintroduced a small number of wolves after nearly seventy years of absence. No one could predict what happened next.</p>
<p>The wolves began to hunt deer again, which gave plants and trees a chance to regrow. The vegetation stabilized the soil. Birds returned. Beavers came back and built dams. Fish flourished. Even the rivers shifted course, carving new, deeper, and healthier pathways through the valley.</p>
<p>One right action and the whole ecosystem responded. That's how living systems rebalance themselves. The same principle applies to <em>us.</em></p>
<p>When we start doing just <em>one right thing</em>, our entire inner landscape begins to reorganize. Stress lessens. Vitality returns, and creativity starts to flow again.</p>
<p>That's what <em>attunement</em> does. It's our human way of calling the wolves home. I write about attunement a lot. You could say I'm an evangelist for it. What is it? Sensing into yourself, others, and situations with acceptance, care, and a wish for a higher good. When such skillful awareness leads, harmony is not far behind.</p>
<p>Here's a gentle question: Where might a single act of attunement help begin to restore a healthy flow in your life?</p>
<p>This is the kind of system-wide transformation I explore in my upcoming book, <em>The Healing Mindset.</em> I'm gathering a group of early supporters to help bring it to life.</p>
<p>If you're interested, <a href="/contact">Join my Book Launch Team</a> — you'll receive early access to the Introduction, behind-the-scenes updates, invitations to live events, and a signed copy when the book releases.</p>
<p>Together, we can help others rediscover healthy balance—one upstream shift, one wolf, one river at a time.</p>
<p>Wishing you abundant health, happiness, and prosperity,<br/>Mark</p>`,
    featured_image: `${SQ}/1765996505732-P1I2C5Y2F6DZH53M71CG/Of+Wolves%2C+Rivers%2C+and+Us.png`,
    categories: [],
    author: 'Mark Pirtle',
    published_date: '2025-12-17',
    status: 'published',
  },
  {
    id: '2',
    slug: 'the-detour-that-made-the-book-better',
    title: 'The detour that made the book better',
    excerpt: 'Sometimes the long way around is the way that gets you there. After a challenging detour with my original publisher, I found the right team at Manuscripts.com—and now The Healing Mindset is officially back on track for Summer 2026.',
    content: `<p>Hey friends,</p>
<p>If you've been wondering, <em>"What ever happened to that book Mark was writing?"</em> — you're not alone. A few of you even emailed me to ask. First, thank you. I've felt your encouragement. The reality is that I took a detour.</p>
<p>Publishing a book, especially one as personal as <em>The Healing Mindset</em>, is a long journey. And like any long journey, sometimes you discover the vehicle you're in isn't getting you where you need to go. That's what happened with my previous publisher. While I'm grateful for the effort and collaboration we had early on, the communication tanked when it was needed most.</p>
<p>It wasn't an easy decision, but I changed publishers. Now the good news—and it's very good. I've partnered with Eric Koester and the incredible team at <a href="https://manuscripts.com" target="_blank" rel="noopener">Manuscripts.com</a>.</p>
<p>Eric's a visionary in the publishing world; he's helped thousands of authors bring meaningful books to market and onto bestseller lists. His platform is author-centered, efficient, and mission-aligned. From our very first conversation, I knew this was the team I'd been waiting for.</p>
<p>So now, we're moving fast. Layout, design, launch sequence — all the pieces are in motion. <em>The Healing Mindset</em> is officially back on track and will be released in Summer 2026. The detour was real, but it brought me to the right team, with the right tools, at exactly the right time.</p>
<p>So what does this mean for you? It means the book is coming—finally! <strong>They say a bestselling book only needs 200 true fans</strong>. That's it! And I believe we have that right here.</p>
<p>If you'd like to be one of the book's true fans—getting early access, signed copies, and joining a live Healing Mindset class—I'd love to include you. <a href="/contact">Join the Book Launch Team</a></p>
<p>Thanks for sticking with me through this. It means the world that we're on this long road together.</p>
<p>Wishing you abundant health, happiness, and prosperity,<br/>Mark</p>`,
    featured_image: `${SQ}/1765993056916-ZQ5CBAPTUYT0ZB7AJFPD/the-detour-that-made-the-book-better.png`,
    categories: ['Self Improvement', 'Mental Health'],
    author: 'Mark Pirtle',
    published_date: '2025-12-17',
    status: 'published',
  },
  {
    id: '3',
    slug: 'a-big-change-doing-something-meaningful-together',
    title: 'A Big Change: Doing Something Meaningful, Together',
    excerpt: 'My book, The Healing Mindset, is officially back on track with a new publisher. In a world full of reactivity and anger, this book aims to offer a path toward attunement, healing, and positive change.',
    content: `<p>Last week, I shared something important: <em>The Healing Mindset</em> is finally back on track with a new publisher.</p>
<p>This shift feels meaningful — not just for me personally, but for the message the book carries.</p>
<p>Lately, I've noticed the emotional temperature online rising. Anger is everywhere. Shadow leaking out in every direction. People are hurting. We're reacting instead of relating.</p>
<p>And yet… wouldn't it feel better to cool down?</p>
<p>Not just because peace feels better than agitation, but because anger has never solved the personal or collective problems we're facing. In moments like these, we need tools that help us regulate, reflect, connect, and heal.</p>
<p>That's the whole purpose of <em>The Healing Mindset.</em></p>
<p>At its heart, it's a book about attunement — how we can learn to relate to ourselves, to others, and to our circumstances with more presence, compassion, and awareness. When we do that, everything begins to change downstream: our stress patterns, our relationships, even our health and sense of meaning.</p>
<p>It's a deeply personal book too. I share stories from my own life and from decades of work with clients, showing how awareness transforms real people in real situations.</p>
<p>And right now, I believe we need that message more than ever.</p>
<h3>🌿 Join My Book Launch Team</h3>
<p>As a member, you'll receive:</p>
<ul>
<li>A <strong>signed hardcover copy</strong> of the book</li>
<li><strong>Early access</strong> to content, stories, and behind-the-scenes updates</li>
<li><strong>Invitations to live events</strong> and a special online class</li>
<li>And my genuine appreciation</li>
</ul>
<p>They say 200 true fans can launch a bestseller. I know we have that here.</p>
<p><a href="/contact">Join the Book Launch Team</a></p>
<p>Thank you for being part of this journey. It means more than you know.</p>
<p>— <strong>Dr. Mark Pirtle</strong></p>`,
    featured_image: `${SQ}/1765992567460-N3QHATLQXBVKJNWCEW7F/a-big-change-doing-something-meaningful-together.png`,
    categories: ['Mindfulness', 'Meditation', 'Spirituality'],
    author: 'Mark Pirtle',
    published_date: '2025-12-17',
    status: 'published',
  },
  {
    id: '4',
    slug: 'from-state-to-trait',
    title: 'From State to Trait',
    excerpt: 'Mark reflects on the difference between momentary breakthroughs and lasting transformation—and how fleeting states like calm or insight can become enduring traits through the right kinds of practice.',
    content: `<p>Hey friends,</p>
<p>Back in the 60s and 70s, the West became fascinated with altered states—psychedelics, meditation highs, peak experiences. And I get it. I've had my fair share. States like awe, insight, and peace can shift our perspective in powerful ways. But here's the thing: states don't last.</p>
<p>I wrote <em>The Healing Mindset: Mastering the Art of Skillful Awareness</em> not to chase states, but to help people build traits—to actually <strong><em>become</em></strong> a person who is more peaceful, attuned, and resilient.</p>
<h3>The Shift That Matters</h3>
<p>A "state" is a temporary experience. Maybe you felt totally present in nature, or had a moment of clarity during meditation or retreat. Great! That's your nervous system showing you what's possible.</p>
<p>But lasting change happens when those glimpses begin to rewire your brain, and what you occasionally feel becomes who you consistently <em>are</em>. That's a <strong><em>trait</em></strong>. And to move from state to trait, you need one thing: <strong>practice!</strong></p>
<h3>Skills Make the Difference</h3>
<p>In <em>The Healing Mindset</em>, I share five core practices that help people move from momentary awareness to deep, embodied change:</p>
<ul>
<li><strong>Focus on the Positive</strong></li>
<li><strong>Prime Ahead of Time</strong></li>
<li><strong>Name It to Tame It</strong></li>
<li><strong>Shift–Open–Stay</strong></li>
<li><strong>Zooming</strong> (gaining perspective)</li>
</ul>
<p>These aren't "peak" experiences. They're practical tools—simple, repeatable, and grounded in science. When practiced consistently, you will literally grow a different brain. That's neuroplasticity in action.</p>
<h3>You Don't Need a Monastery or a Plant Medicine Journey</h3>
<p>The months I spent in a monastery and the plant medicine journeys I've taken helped—no question. But without consistent daily practice, the transformation wouldn't have stuck. It's practice that shaped my nervous system. And because of practice, I changed.</p>
<p>That's real growth. <strong>Trait-level healing. Trait-level resilience.</strong></p>
<p><em>The Healing Mindset</em> was written to help you get there. It's a distillation of what's worked for me and my clients over the past 25 years—and the invitation I wish someone had offered me long ago.</p>
<p>Wishing you abundant health, happiness, and prosperity,<br/>Mark</p>`,
    featured_image: `${SQ}/1765991931493-47VZMDAN9LQ7YJV72BRG/from-state-to-trait.png`,
    categories: ['Business', 'Leadership Development'],
    author: 'Mark Pirtle',
    published_date: '2025-12-17',
    status: 'published',
  },
  {
    id: '5',
    slug: 'the-year-that-challenge-built',
    title: 'The Year That Challenge Built',
    excerpt: 'Mark shares how becoming a full-time single dad clarified his priorities—and sparked the creation of a powerful "Living Constitution" with his daughter.',
    content: `<p>Hey friends,</p>
<p>You may have noticed my newsletters have been… a bit inconsistent. I'm now a full-time single dad, and while that's brought its challenges, it's also helped clarify what matters most. Life has a way of focusing you, doesn't it?</p>
<p>One unexpected outcome is that Alana and I co-created what we're calling our <strong><em>Living Constitution</em></strong>. It's a written document of our values, expectations, communication strategies, boundaries, shared goals—all designed to help us show up for each other with honesty, kindness, and respect. And it's been utterly transformational. If you'd like help creating something like this with your teenager(s), just reach out.</p>
<h3>My Book Is (Finally) Coming Out!</h3>
<p><em>The Healing Mindset: Mastering the Art of Skillful Awareness</em> will be published on November 1. This book is the heart of everything I've taught, practiced, and lived over the past 25 years. It's a practical, deeply personal guide for transforming stress, healing old wounds, and showing up in life with clarity and compassion.</p>
<p>The book will be accompanied by three powerful workbooks for readers who want to delve deeper into meditation, raise their awareness, and engage in shadow work.</p>
<h3>A Fully Reimagined Online Course: Project SkillfullyAware</h3>
<p>I've also rebuilt my flagship course from the ground up:</p>
<ul>
<li><strong>Foundations</strong>: A 6-week intro to ethically-based mindfulness, attention training, and regulating your nervous system</li>
<li><strong>Intermediate</strong>: A 6-week deep dive into emotional triggers, stories, and subtler shadow patterns</li>
<li><strong>Advanced</strong>: 6 weeks of vertical growth, leadership, and conscious living across all domains of life</li>
</ul>
<h3>What's Next: Unfinished Business</h3>
<p>I'm now feverishly writing my second book, <em>Unfinished Business: The Inner-Work Behind the Work of Great Leadership</em>. At the center is the <strong>SA360</strong>—a transformative new narrative assessment tool that helps individuals see where they're leaking personal power, understand their stage of development, and grow in the precise ways life is challenging them to.</p>
<h3>2026: Sharing with the world</h3>
<p>If 2025 was a year of prolific challenge and creation, 2026 will be about sharing the fruits of the journey far and wide. I'm so grateful you're here and part of this unfolding mystery. Let's make the coming years our best ever!</p>
<p>Wishing you abundant health, happiness, and prosperity,<br/>Mark</p>`,
    featured_image: `${SQ}/1765990729789-IX0OPWT0YXDAQFGM5WAJ/The+Year+That+Challenge+Built.png`,
    categories: ['Parenting', 'Family', 'Relationships'],
    author: 'Mark Pirtle',
    published_date: '2025-12-17',
    status: 'published',
  },
  {
    id: '6',
    slug: 'the-pain-that-woke-me-up',
    title: 'The Pain That Woke Me Up',
    excerpt: 'When Dr. Mark Pirtle ignored his own healing advice, a moment of self-awareness sparked deep insight into shadow work and the gap between knowing and doing.',
    content: `<p>Hey friends,</p>
<p>About three months ago, I developed a case of tennis elbow. No big deal, right? Well, here's the thing—I used to be a physical therapist. So I know exactly what to do to treat it. But did I do what I should have to care for it? Nope.</p>
<h3>No time to slow down... until there is</h3>
<p>I figured if I was just more careful, I could keep lifting weights and push through. I didn't want to stop doing what I enjoyed. But instead of it healing, I made it worse. Eventually, I had to stop lifting altogether. That got my attention. But even then, I didn't treat the pain the way I would have prescribed to anyone else.</p>
<h3>Then came a moment of awakening</h3>
<p>In a totally unrelated moment, I caught myself judging someone in my life. I observed their suffering and thought, "They know what to do, why aren't they doing it?"</p>
<h3>And boom—there it was. Shadow!</h3>
<p>That's when it hit me: I was doing the same thing. I wasn't following through on what I knew to do. My double standard, my blind spot—that's the stuff of shadow work.</p>
<p>And here's why this matters: shadow work isn't just about understanding your psyche. It's about becoming your own best therapist. When we notice the gap between our values and our behavior, we can do something about it. That's how we grow.</p>
<p><strong>This is exactly what my new coaching system helps people do.</strong> It's called the SA360. It blends developmental psychology, mindfulness, and shadow work to help you identify where you're leaking power—and what aptitude you need to strengthen to get unstuck.</p>
<p>I'm still accepting new submissions for the pilot phase. If you'd like to get your own SA360 diagnostic, <a href="/contact">click here to participate</a>. It only takes about 20 minutes to complete.</p>
<p>As always, I wish you abundant health, happiness, and prosperity,<br/>Mark</p>`,
    featured_image: `${SQ}/1765988461906-IM70I61IE608MSSRALNL/The+Pain+That+Woke+Me+Up.png`,
    categories: ['Business', 'Leadership Development'],
    author: 'Mark Pirtle',
    published_date: '2025-12-17',
    status: 'published',
  },
  {
    id: '7',
    slug: 'how-we-grow',
    title: 'How We Grow',
    excerpt: 'The SA360 Diagnostic offers clear insight into your developmental path by analyzing responses to 19 reflective questions. Get your free personalized report and discover your growth stage.',
    content: `<p>Hey friends,</p>
<p>Thanks so much for the amazing response to last week's email! Something struck a chord with you.</p>
<p>The intense interest seems to revolve around a powerful question everyone wants to answer:</p>
<h3>How do I grow?</h3>
<p>Not just professionally or financially. I mean as a whole person. Emotionally. Relationally. Spiritually. Most don't take the next step to find out. Why? Because it's hard! We all want to grow, but few of us have a clear map to show us how.</p>
<p>That's why I created the SA360 Diagnostic—a structured yet human-centered tool to help people see themselves and their developmental patterns more clearly.</p>
<p>It's part of the SkillfullyAware system, and it's rooted in brain science, shadow work, and vertical development theory.</p>
<h3>Here's what the SA360 reveals:</h3>
<ul>
<li>The "stage" of development you are operating from, and what growth might look like from there</li>
<li>Where you are leaking power from</li>
<li>Which of your inner Aptitudes need strengthening</li>
<li>Whether you tend to default to a left- or right-hemisphere perspective (it makes a difference)</li>
</ul>
<p>I'm currently offering a limited pilot of the SA360, and I'd love for you to be part of it.</p>
<p>All you need to do is answer 19 open-ended questions. Most people find the easiest and most natural way is to dictate their responses. It took me just 20 minutes.</p>
<p><strong>Here's a tip</strong>: The way you speak—the nuance of how you reflect—actually makes the report more accurate and insightful.</p>
<p><a href="/contact">Click here to get your own personalized report—for free</a></p>
<p>Let's keep growing with clarity and intention, and enjoy the process along the way.</p>
<p>Wishing you abundant health, happiness, and prosperity,<br/>Mark</p>`,
    featured_image: `${SQ}/1765987718721-1F5JL75KEMNPMFK67FMN/How+We+Grow.png`,
    categories: ['Business', 'Leadership Development'],
    author: 'Mark Pirtle',
    published_date: '2025-12-17',
    status: 'published',
  },
  {
    id: '8',
    slug: 'see-yourself-more-clearly',
    title: 'See Yourself More Clearly',
    excerpt: 'Dr. Mark Pirtle is inviting community members to help test the SA360—a new self-assessment that maps deeper layers of development, from worldview and self-regulation to shadow patterns and power center imbalances.',
    content: `<p>Hey friends,</p>
<p>I'm piloting a new Personal Development tool, the <strong><em>SkillfullyAware 360 Diagnostic Assessment (SA360)</em></strong>. However, I still need real humans to complete my test group.</p>
<p>If you're interested, simply answer and complete a Google Form questionnaire. I did it this morning, and it only took me 20 minutes (I dictated my responses). The personalized assessment I received was impressive!</p>
<p>Fill out the form, and in return, I'll send you a comprehensive SA360 Diagnostic—a personalized profile that reveals where you're thriving, where your power might be leaking, and what small adjustments could lead to significant growth.</p>
<h3>Here's what you'll get:</h3>
<ul>
<li>A full explanation of the assessment and what it's measuring</li>
<li>Your developmental "stage" estimate (based on your answers)</li>
<li>Insight into your brain hemisphere bias (how your brain prefers to process the world)</li>
<li>Identification of which Power Centers are strong or need attention</li>
<li>Your top and lowest Core Aptitudes (like Influence, Drive, or Restraint)</li>
<li>A few key shadow indicators that could be silently draining your energy</li>
<li>And specific guidance for how to evolve, grow, and lead with more clarity and presence</li>
</ul>
<p><a href="/contact">I would absolutely appreciate your help with this.</a> And I know you'll get something meaningful in return. Thanks in advance!</p>
<p>Wishing you abundant health, happiness, and prosperity,<br/>Mark</p>`,
    featured_image: `${SQ}/7fd75f96-29b7-4a35-b433-243dbb842233/See+Yourself+More+Clearly.png`,
    categories: ['Business', 'Leadership Development'],
    author: 'Mark Pirtle',
    published_date: '2025-12-17',
    status: 'published',
  },
  {
    id: '9',
    slug: 'from-patterns-to-progress',
    title: 'From Patterns to Progress',
    excerpt: 'Be part of the SA360 pilot and receive a personalized developmental assessment that maps your shadow patterns, power leaks, and growth potential.',
    content: `<p>Hey friends,</p>
<p>I'm building something I've wanted for years: a developmental assessment tool that doesn't just label your personality or spit out surface-level insights, but actually helps you change, grow, and heal.</p>
<p>Over the past three decades, I've refined a comprehensive coaching system built around Developmental Perspectives, Power Centers, Core Aptitudes, Shadow Patterns, right- and left-brain hemisphere bias, and self-regulation.</p>
<h3>As Unique as Your Fingerprint!</h3>
<p>Now, I'm working on the next piece: a self-assessment tool that tracks it all! In plain English? It's a tool to help people understand how they perceive themselves and relate to the world, as well as what they need to help them evolve into better versions of themselves.</p>
<p>I'm now testing a draft version of the assessment tool. It consists of 10 open-ended questions designed to elicit natural patterns in language, self-awareness, and worldview.</p>
<h3>Here are the 10 questions:</h3>
<ol>
<li>Tell us about a recent challenge. What happened, and how did you deal with it?</li>
<li>When you think about your personal growth over the years, what has changed most about the way you see yourself and the world?</li>
<li>Have you ever felt misunderstood? What happened, and how did you respond?</li>
<li>What gives your life meaning? Has that sense of purpose changed over the years?</li>
<li>Think of a time your values were tested. What did you learn from the experience?</li>
<li>What's your relationship with your emotions? How do feelings influence your choices?</li>
<li>How do you show up in groups? What role do you tend to play?</li>
<li>Describe a recent internal conflict—where two parts of you wanted different things. How did you resolve it, or not?</li>
<li>What do you notice about your inner voice or self-talk? How do you view it, relate to it?</li>
<li>How do you stay open to people with very different views? What helps you stay connected?</li>
</ol>
<h3>What You Get For Participating</h3>
<p>Everyone who participates will receive a personalized assessment that identifies their developmental stage perspective, potential shadow crash patterns, Power Center, and Aptitude "leaks," along with personalized recommendations for growth and change.</p>
<p><a href="/contact">Click here to get started</a>.</p>
<p>Wishing you abundant health, happiness, and prosperity,<br/>Mark</p>`,
    featured_image: `${SQ}/75a0c797-dc2f-4560-8250-2510dd955048/From+Patterns+to+Progress.png`,
    categories: ['Business', 'Leadership Development'],
    author: 'Mark Pirtle',
    published_date: '2025-12-17',
    status: 'published',
  },
  {
    id: '10',
    slug: 'do-you-know-where-your-are-leaking-personal-power',
    title: 'Do You Know Where You Are Leaking Personal Power?',
    excerpt: 'Your personal power depends on your perspective. The SkillfullyAware system integrates neuroscience and developmental theory to map lasting, transformative change across life\'s core domains.',
    content: `<p>Hey friends,</p>
<p>Last week, I shared a new way I'm working with clients—tracking where shadow habits leak power across key areas of life and building the core aptitudes to restore it.</p>
<p>But here's something I didn't say: That work exists inside an even larger system—one that's backed by developmental theory <em>and</em> brain science.</p>
<p>I've spent the past 20+ years integrating everything I've learned from clinical work, contemplative traditions, systems theory, and neuroscience to build a comprehensive map of how people change and grow.</p>
<p>And I've come to believe this: <strong>Your personal power depends on your perspective!</strong></p>
<p>When you're reactive, shut down, or stuck in old habits, it's not just your mood—it's your <em>brain's orientation</em>. Most people don't realize that our experience of the world is filtered through two distinct brain processing styles that neuroscientist Iain McGilchrist calls left and right hemisphere perspectives.</p>
<ul>
<li>Left is linear, problem-focused, and controlling. It's where the critical voice in your head lives</li>
<li>Right is holistic, relational, attuned, and reflective. An additional blessing of the right hemisphere is that it's mute. Ah, peace!</li>
</ul>
<p>We need both. But when we're trapped in stress, we default to the narrower, left-sided view. And that's when our power leaks start to amplify and reverberate.</p>
<p>The deeper work I do helps clients recognize and then shift their perspectives, not just mentally, but <em>developmentally</em>. Using a framework adapted from human development theory, I help individuals identify their current position "vertically" on the map, horizontally across the Power Centers, and specifically which Aptitude is weak.</p>
<p>This isn't just coaching. It's <em>real integration work</em>. And when you layer it on top of the power/aptitude framework, it becomes a system for deep and sustained change.</p>
<p>If that kind of deep self-examination calls to you, I'm here. <a href="/contact">Coaching, retreats, or simply a conversation</a>. We can start wherever you're ready.</p>
<p>Warmly,<br/>Mark</p>`,
    featured_image: `${SQ}/b226fef5-ca10-43f1-9ba7-a94e897db74f/do-you-know-where-your-are-leaking-personal-power.png`,
    categories: ['Business', 'Leadership Development'],
    author: 'Mark Pirtle',
    published_date: '2025-12-17',
    status: 'published',
  },
  {
    id: '11',
    slug: 'plug-your-power-leaks',
    title: 'Plug Your Power Leaks',
    excerpt: 'Discover where you may be unconsciously leaking personal power—and how to restore it through SkillfullyAware\'s seven Power Centers and six Core Aptitudes.',
    content: `<p>Hey friends,</p>
<p>Lately, I've been noticing a pattern—not just in my clients, but in myself. Whenever I feel stuck, reactive, or off-center, it's rarely about what's happening on the surface.</p>
<p>It's usually something deeper that I'm stressed about. And when that stress overwhelms me, I don't always show up as my best self. Can you relate?</p>
<p>We all show up in different ways depending on the context. Some versions of us are more powerful than others. Lately, I've been reflecting on when and how I leak power. That thinking led me to create a system for identifying where it happens.</p>
<p>Let me explain by first defining the seven <strong><em>Power Centers</em></strong>—the core domains where we express (or lose) power:</p>
<ul>
<li><strong>Physical</strong> – strength, stamina, and presence</li>
<li><strong>Creative</strong> – expressive flow and innovation</li>
<li><strong>Emotional</strong> – depth, resilience, and stability</li>
<li><strong>Financial</strong> – sovereignty, responsibility, and integrity</li>
<li><strong>Social</strong> – relational influence and authenticity</li>
<li><strong>Intellectual</strong> – mental clarity and perspective</li>
<li><strong>Spiritual</strong> – connection, meaning, purpose, and alignment</li>
</ul>
<p>When even one of these centers is off, we begin leaking power across the board.</p>
<p>To restore ourselves, we build capacity in six <strong><em>Core Aptitudes</em></strong>:</p>
<ul>
<li><strong>Influence</strong> — grounded presence and communication</li>
<li><strong>Drive</strong> — intrinsic motivation</li>
<li><strong>Perseverance</strong> — grit to stay with challenges</li>
<li><strong>Achievement</strong> — focused execution, concluding things</li>
<li><strong>Alignment</strong> — values-based decision-making</li>
<li><strong>Restraint</strong> — the wisdom to pause, wait, or release</li>
</ul>
<p>Each aptitude has a repeating shadow pattern. When those shadows go unexamined, they can silently drain our capacity to lead, relate, and live well.</p>
<p>Through my SkillfullyAware method—Meditation & Mindfulness, Perspective-Taking, and Shadow Work—we uncover those shadow patterns, close the leaks, and restore power where it's needed.</p>
<p>If this resonates and you're interested in support to identify your leaks and rebuild your leadership from the inside out, <a href="/contact">let's talk</a>.</p>
<p>Wishing you abundant health, happiness, and prosperity,<br/>Mark</p>`,
    featured_image: `${SQ}/1765978466513-ZY847PMMZS49QPW35ZAF/plug-your-power-leaks.png`,
    categories: ['Business', 'Leadership Development'],
    author: 'Mark Pirtle',
    published_date: '2025-12-17',
    status: 'published',
  },
  {
    id: '12',
    slug: 'skillfullyaware-is-evolving-so-am-i',
    title: 'SkillfullyAware Is Evolving—So Am I',
    excerpt: 'Announcing the soft launch of the updated website and the expanded offerings within the SkillfullyAware system—from new retreats and coaching frameworks to the upcoming release of The Healing Mindset.',
    content: `<p>Hey friends,</p>
<p>I've got an exciting milestone to share: My website, <a href="/">drmarkpirtle.com</a>, just got a facelift!</p>
<p>It's a "soft launch," which means there are still changes to be made, but it's mostly finished. You'll see a simplified, yet beautiful design, better flow, refined offerings, and a clearer way to access coaching and retreats.</p>
<p>That's why I created <strong><em>SkillfullyAware</em></strong>—a development system that integrates three powerful disciplines: <strong>meditation and mindfulness, perspective-taking, and shadow work</strong>.</p>
<p>When practiced consistently, skillful awareness helps people feel more present, grounded, intentional, and capable.</p>
<h3>What's New</h3>
<p>Here's what's been evolving over the past year:</p>
<ul>
<li>A new book, <strong><em>The Healing Mindset: Mastering the Art of Skillful Awareness</em></strong>, is coming this summer!</li>
<li>Three <strong>Companion Workbooks</strong></li>
<li>An all-new <strong><em>Project SkillfullyAware</em></strong> online course, split into Foundations, Intermediate, and Advanced levels</li>
<li><strong>Power Tools</strong> offerings</li>
<li>A more refined and systematic approach to <strong>coaching</strong></li>
<li>Purpose-driven <strong>retreats</strong></li>
</ul>
<h3>What's Also New: The Seven Domains of Power</h3>
<p>I'm now helping clients and retreat participants identify where they may be unintentionally leaking personal power across seven key domains: Physical, Intellectual, Creative, Emotional, Social, Financial, and Spiritual.</p>
<h3>The Five Key Aptitudes</h3>
<p>Where we identify power leaks, together, we build capacity in five key aptitudes: Influence, Drive, Perseverance, Achievement, and Alignment.</p>
<p>Let's keep evolving together! Thanks for being part of this community.</p>
<p>Wishing you abundant health, happiness, and prosperity,<br/>Mark</p>`,
    featured_image: `${SQ}/1765974709845-Q3Y93WY88EPQVG5TRKTD/skillfullyaware-is-evolving--so-am-i.png`,
    categories: ['Business', 'Leadership Development'],
    author: 'Mark Pirtle',
    published_date: '2025-12-17',
    status: 'published',
  },
  {
    id: '13',
    slug: 'what-ai-cant-touch',
    title: "What AI Can't Touch",
    excerpt: 'As AI transforms how we work and create, one truth remains: it can\'t do the human work for us. Personal growth, emotional intelligence, and spiritual maturity still matter most.',
    content: `<p>Hey friends,</p>
<p>AI seems to be changing everything. When I think of the implications, it makes my chest tighten a little. I'm a content creator. I create online classes. I write books and newsletters. But now everyone has a superintelligent assistant that can replicate all of that!</p>
<h3>AI and the Anxiety of Irrelevance</h3>
<p>Because the threat is real, I'm stuck with the question: If everyone has these same powerful tools, what makes me, or any other single human, relevant?</p>
<p>Then I took a sauna. Here are my thoughts:</p>
<p>Yes, AI helps me organize my thoughts, speed up workflows, and even help me write better. (It helped me edit this newsletter.)</p>
<h3>The One Job AI Can't Do</h3>
<p>But it won't ever wake up in my skin. It won't ever sit with a client and hold space for them while they cry. It won't ever lead a retreat. It won't raise my daughter or practice patience when I'm frustrated. It won't ever feel the discomfort of my growth and development, or choose right over easy.</p>
<p>AI won't ever know (or feel) what it's like to be human. And it certainly won't ever do the work of becoming a better one! That will always be our job.</p>
<h3>Being Human Is Still Our Work</h3>
<p>No matter how smart AI gets, the real work of being human remains with us:</p>
<ul>
<li>Learning to manage our emotions when we're triggered</li>
<li>Showing up with compassion when we feel like lashing out</li>
<li>Reaching for higher perspectives</li>
<li>Letting go of old stories that keep us stuck</li>
<li>Growing up emotionally and spiritually</li>
<li>Practicing wisdom when there's an impulse to react</li>
</ul>
<p>Technology can assist us, but it won't replace the responsibility of growing into better versions of ourselves. That's our work. It's the work that binds us together as a community, and work that I believe is more relevant than ever.</p>
<p>Wishing you abundant health, happiness, and prosperity,<br/>Mark</p>`,
    featured_image: `${SQ}/1765974230437-3MVUEHH59G9F1TQE16HD/what-ai-cant-touch.png`,
    categories: ['Business', 'Leadership Development'],
    author: 'Mark Pirtle',
    published_date: '2025-12-17',
    status: 'published',
  },
  {
    id: '14',
    slug: 'big-problems-small-changes',
    title: 'Big Problems, Small Changes',
    excerpt: 'Inspired by Seth Godin, Mark reflects on how major personal healing began with a few simple practices—and how small changes, done consistently, can solve big problems.',
    content: `<p>Hey friends,</p>
<p>I listened to a podcast this week, and something marketing guru Seth Godin said struck a chord: <strong>"Big problems only require small changes."</strong></p>
<p>He was referencing the <em>Butterfly Effect</em>—a poetic way of describing how complex systems change in response to small inputs. As a systems thinker myself, I deeply grokked what he meant. It's not just a platitude; it's science. And my story is proof of it.</p>
<h3>From Rock Bottom to Monastery</h3>
<p>Readers of this newsletter know that about 25 years ago, I hit bottom. The stress of losing my business triggered a cascade of stress-related conditions. To heal and get my head straight, I spent months in retreat at a Tibetan Buddhist monastery. It was there I learned a few simple practices—small, consistent things I still do today.</p>
<h3>Changing the System with Simple Practices</h3>
<p>Those tiny changes rewired my brain. And that rewiring not only healed my stress illnesses, they changed how I related to myself and the world. It's not hyperbole to say that those small inputs shifted the entire system of my life in a beautiful direction.</p>
<h3>The Invitation: Start Small, Shift Big</h3>
<p>So if you're feeling overwhelmed by your health, your work, or the world, let me gently remind you:</p>
<ul>
<li>You don't have to fix everything.</li>
<li>You just need to start.</li>
<li>And the start can be something small.</li>
<li>A small change—made today—can shift the whole system!</li>
</ul>
<p>Wishing you peace, clarity, and the courage to start and the momentum to keep going,<br/>Mark</p>`,
    featured_image: `${SQ}/1765973441339-0DAFEROFWGI8BFJPHRNU/big-problems-small-changes.png`,
    categories: ['Self Improvement', 'Mental Health'],
    author: 'Mark Pirtle',
    published_date: '2025-12-17',
    status: 'published',
  },
  {
    id: '15',
    slug: 'the-rescuers-reckoning',
    title: "The Rescuer's Reckoning",
    excerpt: 'A coaching client who\'s spent her life doing for others has never learned how to prioritize herself. Shadow work is helping her uncover why saying no feels so difficult.',
    content: `<p>Hey friends,</p>
<p>A client of mine—let's call her "J"—is one of the most giving people I know. For decades, she's shown up for friends, family, and strangers alike. In her family, she's the one you call in a crisis and helps put the pieces back together. She remembers your birthday and brings food to share at work. If you're in her circle, you have someone to count on. The problem is that J doesn't know how to count on herself.</p>
<h3>The Trap of Identity</h3>
<p>In one of our recent sessions, she said something that stuck with me: "I don't know how to say no without feeling like I'm abandoning someone." Underneath her outward generosity was a persona you might call a "rescuer," an identity built around being needed.</p>
<h3>New Beginnings Come with Challenges</h3>
<p>But now J is in a new chapter of her life. Her kids are grown, and she just jumped off the treadmill of a busy career. For the first time in decades, her soul is calling out for some "me time." But here's the issue—she's never really practiced focusing on herself. Saying no to others and prioritizing herself not only feels weird, but it also feels selfish.</p>
<h3>Breaking the Chains of Past Programming</h3>
<p>This is where shadow work comes in. What might lie underneath the constant giving? Where did the belief start that love must be earned? What part of her feels unsafe when she stops helping? These aren't easy questions, and there are no quick fixes. But shadow work can free oneself to embody a more authentic way of being, unshackled by past programming.</p>
<h3>The Gift of Me Time</h3>
<p>One of the best places to start exploring such deep questions is on retreat, away from the noise, in a place designed to help you tune inward. If you see yourself in J and are ready to shift from over-giving to inner balance, I invite you to consider joining us. A retreat isn't an escape; it's a gift of "me time."</p>
<p>Wishing you clarity, courage, and the strength to find yourself,<br/>Mark</p>`,
    featured_image: `${SQ}/1765972446948-F9551Z3MV0F5NW0SFUCQ/the-rescuers-reckoning.png`,
    categories: ['Stress', 'Resilience', 'Emotional Well-Being'],
    author: 'Mark Pirtle',
    published_date: '2025-12-17',
    status: 'published',
  },
  {
    id: '16',
    slug: 'the-shadow-that-drives-us',
    title: 'The Shadow That Drives Us',
    excerpt: 'A successful CEO in her sixties continues to struggle with prioritizing her inner life. When is enough enough? When does doing give way to being?',
    content: `<p>Hey friends,</p>
<p>A client of mine—an accomplished CEO—has run her company for over 30 years. We met a decade ago at a retreat, and she soon began coaching with me. Her earliest goal was to rebalance her "time pie chart"—a visual of how her days were divided. At that time, her work dominated and soul-nourishing pursuits like reading, meditation, movement, and retreat time barely registered.</p>
<p>Through the years, I've come to know her as a seeker at heart. But the external world keeps getting her attention. And here she is, in her mid-sixties, vexed by the same tension.</p>
<h3>The Questions That Won't Go Away</h3>
<p>In a recent session, I asked her these questions:</p>
<ul>
<li><strong>When is enough enough?</strong></li>
<li><strong>When does doing give way to being?</strong></li>
<li><strong>When does the quest for more get replaced by the peace of enough?</strong></li>
<li><strong>When does tending to one's interior become the priority?</strong></li>
</ul>
<p>I ask these questions not to criticize but to invite reflection. I see this pattern everywhere: people sensing a deeper calling but staying too busy to answer.</p>
<h3>The Call to Reorder</h3>
<p>For many of us, the urge to keep doing, achieving, and producing is driven by unconscious patterns we've never fully examined. That's where shadow work comes in, helping illuminate the inner conflict between who we are and who we think we need to be to feel worthy or secure.</p>
<p>So I'll ask again, for all of us:</p>
<ul>
<li><strong>When is enough enough?</strong></li>
<li><strong>What would it mean to reorder your days to reflect what you value most?</strong></li>
<li><strong>What have you postponed that's quietly asking for your attention?</strong></li>
</ul>
<p>These aren't questions to rush through. Let them linger.</p>
<p>Wishing you abundant health, happiness, and prosperity,<br/>Mark</p>`,
    featured_image: `${SQ}/58eac739-7293-4118-99f7-96030463b27b/the-shadow-that-drives-us.png`,
    categories: ['Business', 'Leadership Development'],
    author: 'Mark Pirtle',
    published_date: '2025-12-17',
    status: 'published',
  },
  {
    id: '17',
    slug: 'shadow-work-at-scale',
    title: 'Shadow Work at Scale',
    excerpt: 'When an entire culture or country refuses to face its past, the collective shadow festers. Mark explores shadow work as a communal and national responsibility, not just a personal one.',
    content: `<p>Fifty years ago this week, the U.S. military pulled out of Vietnam. For many Americans, that date—April 30, 1975—is just a historical footnote. But for me, it hits deeper. I was only a few years away from being drafted. And more importantly, it reminds me what happens when we fail to face our collective shadow.</p>
<h3>Shadow Work Isn't Just Personal</h3>
<p>We often talk about shadow work as a solo journey—healing trauma, addressing blind spots, and reclaiming parts of ourselves we've pushed away. That work matters. But shadow work scales. Families, communities, and entire nations carry shadow, too. When those bigger shadows remain unseen, they fester and cause harm—sometimes on a massive scale.</p>
<h3>When We Avoid, We Repeat</h3>
<p>Take Vietnam. Nearly 60,000 American lives were lost. Millions more Vietnamese, Cambodians, and Laotians died. Yet there's been no national day of reckoning, no formal apology, no collective moment of reflection. Just silence. That silence is the shadow. When we avoid it, we keep making the same mistakes.</p>
<p>This isn't about blame—it's about growth. So here are the real questions:</p>
<ul>
<li>What would it look like to do shadow work together?</li>
<li>Can we admit that our history includes darkness?</li>
<li>Are we willing to name it so we can finally start to heal?</li>
</ul>
<h3>Choosing Dialogue Over Division</h3>
<p>Doing shadow work at scale means choosing curiosity over certainty. It means noticing when we're triggered and pausing to ask, "Why?" It means talking to each other—not past each other. Dialogue over division. That's not weakness. That's leadership.</p>
<p>Whether you're carrying personal pain, family baggage, or collective grief, there's a way through. And you don't have to go it alone.</p>`,
    featured_image: `${SQ}/1765970979631-C3G0OIM4R3IX9P6S1QBR/shadow-work-at-scale.png`,
    categories: ['Society'],
    author: 'Mark Pirtle',
    published_date: '2025-12-17',
    status: 'published',
  },
  {
    id: '18',
    slug: 'events-that-change-us',
    title: 'Events That Change Us',
    excerpt: 'After the collapse of his business and a divorce, Dr. Mark Pirtle found healing through extended retreats—first at a Tibetan Buddhist monastery and later through plant medicine.',
    content: `<p>Hey friends,</p>
<p>I was listening to an episode of <em>Hidden Brain</em> recently called <em>Moments That Change Us.</em> It got me thinking about a couple of big moments in my own life—events that didn't just shake things up, but changed who I was and how I saw the world.</p>
<h3>First: The Business Collapse</h3>
<p>The first was the collapse of my business. It was humbling. I'd poured everything into it, and when it unraveled, I was left disoriented and ashamed. I didn't know what to do, so I left the country. I spent months in retreat at a Tibetan Buddhist monastery in Australia. It was quiet, disciplined, and gave me space to reflect. I started to see that the failure wasn't just about the business—it was about how I was relating to pressure, control, identity. That time in silence helped me recalibrate.</p>
<h3>Then Came the Divorce</h3>
<p>The second was my divorce. Anyone who's been through one knows the pain. It's not just the loss of a partner—it's the unraveling of a whole way of life. After the split, I signed up for two plant medicine retreats in one year. Both helped me move through the grief and the questions—Who am I now? What do I want? What really matters?</p>
<h3>What These Retreats Gave Me</h3>
<p>I'm not the same person I was before those experiences. And truthfully, I'm better for them. Not because they weren't painful—they were—but because of the wisdom I gained through them.</p>
<h3>You Don't Have to Go It Alone</h3>
<p>If you're going through something life-altering—or if you're still carrying the weight of something from the past—retreats can help. Whether it's through meditation, shadow work, plant medicine, or just the space to breathe, reflect, and be real… there's something powerful about stepping away to tune back in.</p>
<p><a href="/contact">Reach out</a>. I'd love to hear what you're navigating and talk about whether one of our retreats might support you.</p>
<p>Wishing you clarity, healing, and whatever next step feels right for you,<br/>Mark</p>`,
    featured_image: `${SQ}/1765970586731-1OCANR1BJ19RY01AANJR/events-that-change-us.png`,
    categories: ['Stress', 'Resilience', 'Emotional Well-Being'],
    author: 'Mark Pirtle',
    published_date: '2025-12-17',
    status: 'published',
  },
  {
    id: '19',
    slug: 'name-it-to-tame-it-using-third-person-self-talk-to-build-self-compassion',
    title: 'Name It to Tame It: Using Third‑Person Self‑Talk to Build Self‑Compassion',
    excerpt: 'Talking to yourself in the third person (Illeism) creates instant distance from swirling emotions. Mark shares how "Name It to Tame It" carried him through a rough divorce and why it works neurologically.',
    content: `<p>Hey friends,</p>
<p>I need to admit something. I talk to myself—a lot. Not in a muttering‑under‑my‑breath way, but in a deliberate, third‑person way. Psychologists call it <em>Illeism.</em> I've called it <strong><em>Name It to Tame It</em></strong> (NITTI) for years, and I leaned on it hard right after my divorce.</p>
<p>Back then, the inner dialogue was brutal. Day and night, heart racing, mind replaying arguments. The only way to unhook myself from these narratives was to talk to myself. I'd say aloud, "<em>Mark, you're angry and scared. Let's breathe.</em>" Hearing my voice gave me a little space. I could choose something kinder in that space: get a glass of water, journal, or sit and feel without adding more heat.</p>
<h3>Why Third‑Person Self‑Talk Works</h3>
<ol>
<li><strong>Distance without denial</strong> — Saying my name lets me acknowledge the feeling instead of fixating on it.</li>
<li><strong>Shadow work is made simple.</strong> The moment I name the feeling—anger, shame, or envy—it surfaces. Now it can be met, not buried.</li>
<li><strong>Built‑in compassion</strong> — I speak to myself like I would talk to clients: clear, direct, and kind.</li>
</ol>
<h3>How to Try It</h3>
<ol>
<li>Catch a strong emotion.</li>
<li>Say your name, state the feeling, and add one caring suggestion.</li>
</ol>
<p><em>"Jen, you're anxious about the presentation. Let's review the first slide and breathe."</em></p>
<ol start="3">
<li>Notice the shift. Repeat as needed.</li>
</ol>
<p>Do it when you're calm, too. Repetition trains your brain to switch on the supportive voice automatically when stress hits.</p>
<h3>Want Deeper Practice?</h3>
<p>If you'd like help weaving NITTI into a larger plan of meditation, perspective‑taking, and shadow work, <a href="/contact">reach out for one‑on‑one coaching</a> or join me for an upcoming retreat.</p>
<p>I wish you all skillful and compassionate conversations with yourselves,<br/>Mark</p>`,
    featured_image: `${SQ}/1765969660863-4QR96JZV9YBMCRLQQ770/name-it-to-tame-it-using-third-person-self-talk-to-build-self-compassion.png`,
    categories: ['Stress', 'Resilience', 'Emotional Well-Being'],
    author: 'Mark Pirtle',
    published_date: '2025-12-17',
    status: 'published',
  },
  {
    id: '20',
    slug: 'no-grind-no-goodness',
    title: 'No Grind, No Goodness',
    excerpt: 'Committing to your calling—despite resistance—can be transformative. The grind of doing something hard, over and over, especially something that reflects our true nature, is where shadow work begins.',
    content: `<p>Hello friends,</p>
<p>I've been thinking lately about what it takes to stay on track with something meaningful—especially when it's hard.</p>
<h3>The grind within the grind</h3>
<p>This topic came up again yesterday while lifting weights with my workout buddy. He's an artist with exceptional talent. But like many of us, he's had difficulty being consistent and working on his craft. As an aside, he's also struggled with depression. Despite doing tons of inner work, the low moods continued to haunt him.</p>
<h3>An unexpected surprise</h3>
<p>Two months ago, spurred on by a persistent inner kick, he made a commitment to himself. Nothing too drastic—draw every day for an hour or two. Sixty days in, the shift is dramatic. Not just in his technique (which is getting sharper by the day) but in his mood. The depression? He reports that it's pretty much gone. Why? Because, as he puts it, art is his calling. And when he shows up for it, something in him settles and aligns.</p>
<h3>The voice that says, 'not today'</h3>
<p>There's a lesson in that for all of us. The grind of doing something hard, over and over, especially something that reflects our true nature, can be transformative. But first, we must face the part of us that wants to bail. That's where shadow work comes in. It helps us turn toward those parts—procrastination, resistance, doubt—and get curious. Where is that voice coming from? What's it protecting?</p>
<h3>Your chance to say YES!</h3>
<p>So here's the question: What's calling you? What would happen if you said yes to the thing that's calling you—and kept saying yes for the rest of your life?</p>
<p>If you're ready to explore that calling—<em>and what's in the way</em>—I invite you to <a href="/contact">reach out</a> or join me for a retreat this year.</p>
<p>Wishing you strength for the grind and the enjoyment of the gift it brings,<br/>Mark</p>`,
    featured_image: `${SQ}/1765969129425-9ZDZU4OAPCV8HRB7A737/no-grind-no-goodness.png`,
    categories: ['Stress', 'Resilience', 'Emotional Well-Being'],
    author: 'Mark Pirtle',
    published_date: '2025-12-17',
    status: 'published',
  },
  // ── Page 2 posts (excerpts only — content can be fetched/added later) ──
  {
    id: '21',
    slug: 'what-is-love-what-i-learned-on-retreat',
    title: 'What is love? What I learned on retreat',
    excerpt: 'A powerful teaching received at a Tibetan Buddhist monastery: "Love is wanting someone to be happy." Mark explores how true happiness often comes through attunement—offering genuine, present attention to others and ourselves.',
    content: `<p>In this heartfelt reflection, Mark shares a teaching from his time at a Tibetan Buddhist monastery: <em>"Love is wanting someone to be happy."</em> This simple definition has shaped the way he understands love, connection, and fulfillment. By weaving in the tools of shadow work, he shares how we can move closer to authentic self-love and invites readers to consider retreating as a way to return to what matters most.</p><p><a href="/contact">Reach out to learn more about upcoming retreats.</a></p>`,
    featured_image: `${SQ}/1765968507668-YZZ10KYZX2EWA7MYGOQ1/what-is-love-what-i-learned-on-retreat.png`,
    categories: ['Stress', 'Resilience', 'Emotional Well-Being'],
    author: 'Mark Pirtle',
    published_date: '2025-12-17',
    status: 'published',
  },
  {
    id: '22',
    slug: 'which-path-feels-right',
    title: 'Which Path Feels Right?',
    excerpt: 'We all face big decisions—whether to stay the course or make a bold change. Shadow work can open up the inner space to sit with life\'s biggest questions.',
    content: `<p>We all face big decisions—whether to stay the course or make a bold change. In this post, Mark explores how shadow work can open up the inner space to sit with life's biggest questions. You'll learn why logic alone won't get you there, how unconscious patterns and external pressures shape our choices, and why stepping away—on retreat or into reflection—might be exactly what's needed to rediscover your next "right" step.</p><p><a href="/contact">Let's talk about your path.</a></p>`,
    featured_image: `${SQ}/1765966704224-FF0SHG63GBSQDG31S3MH/transforming-lives-through-shadow-work-and-recovery.png`,
    categories: ['Business', 'Leadership Development'],
    author: 'Mark Pirtle',
    published_date: '2025-12-17',
    status: 'published',
  },
  {
    id: '23',
    slug: 'airplane-thoughts-on-relationships-and-agreements',
    title: 'Airplane Thoughts on Relationships and Agreements',
    excerpt: 'Mark explores the crucial role of making and keeping agreements in personal and professional relationships, introducing the "Six Stages of Oversight" model.',
    content: `<p>In this insightful post, Mark Pirtle explores the crucial role of making and keeping agreements in both personal and professional relationships. Drawing from the experiences of a client, he introduces the "Six Stages of Oversight," a model illustrating the progression of employee empowerment and responsibility. This model not only applies to business but also reflects the foundations of trust and accountability necessary for thriving relationships. Mark discusses how shadow work can help individuals understand and overcome the subconscious barriers that prevent them from keeping their commitments.</p><p><a href="/contact">Reach out to explore coaching or retreats.</a></p>`,
    featured_image: `${SQ}/1765966333921-SXIEBBJOOB26R3JQMTAK/airplane-thoughts-on-relationships-and-agreements.png`,
    categories: ['Business', 'Leadership Development'],
    author: 'Mark Pirtle',
    published_date: '2025-12-17',
    status: 'published',
  },
  {
    id: '24',
    slug: 'saying-goodbye-to-my-little-man',
    title: 'Saying Goodbye to My Little Man',
    excerpt: 'Mark shares the emotional experience of saying goodbye to his beloved cat Ramses, exploring themes of love, loss, and the preciousness of moments shared with our loved ones.',
    content: `<p>In this heartfelt blog post, Mark shares the emotional experience of saying goodbye to his beloved cat Ramses, who succumbed to cancer. Through his story, Mark explores the themes of love, loss, and the preciousness of moments shared with our loved ones. He reflects on the lessons learned from Ramses about caring deeply and the significance of cherishing every moment. This narrative serves as a reminder of the fleeting nature of life and the importance of holding onto the love and memories we create with those who touch our lives.</p>`,
    featured_image: `${SQ}/1765965013675-CWFKCWKTWDT0GQSBGQ5B/saying-goodbye-to-my-little-man.png`,
    categories: ['Stress', 'Resilience', 'Emotional Well-Being'],
    author: 'Mark Pirtle',
    published_date: '2025-12-17',
    status: 'published',
  },
  {
    id: '25',
    slug: 'skillful-awareness-in-times-of-loss',
    title: 'Skillful Awareness in Times of Loss',
    excerpt: 'Loss has a way of resurfacing old wounds. Polyvagal Theory explains how our nervous system processes grief, and Shadow Work reveals the deeper layers beneath our emotions.',
    content: `<p>Loss has a way of resurfacing old wounds, blending past and present grief into a heavy emotional weight. In this reflection on losing his beloved cat Ramses, Mark explores how the Polyvagal Theory explains the way our nervous system processes grief and how Shadow Work reveals the deeper layers beneath our emotions. Through Skillful Awareness, he's learned to feel pain without amplifying it—to let grief come, be, and go. If loss is weighing on you, this post invites you to explore your emotions with self-awareness and mindfulness.</p>`,
    featured_image: `${SQ}/1765965789665-QGW78KHHWBZ4MDH6B51Y/skillful-awareness-in-times-of-loss.png`,
    categories: ['Stress', 'Resilience', 'Emotional Well-Being'],
    author: 'Mark Pirtle',
    published_date: '2025-12-16',
    status: 'published',
  },
  {
    id: '26',
    slug: 'where-are-all-the-grownup',
    title: 'Where Are All the Grownups?',
    excerpt: 'Mark reflects on a dark night of the soul triggered by the state of the world and the absence of mature leadership, connecting global chaos to collective underdevelopment.',
    content: `<p>In this post, Mark reflects on a recent dark night of the soul—triggered by the state of the world and the absence of mature leadership. He connects the dots between global chaos and collective underdevelopment and offers shadow work as a path to emotional maturity. The post ends with an invitation to join him on retreat or through coaching.</p><p><a href="/contact">Join me for a retreat or coaching session.</a></p>`,
    featured_image: `${SQ}/1765972861921-S8PMMQASKA21PGYXXWV0/where-are-all-the-grownup.png`,
    categories: ['Society'],
    author: 'Mark Pirtle',
    published_date: '2025-12-16',
    status: 'published',
  },
  {
    id: '27',
    slug: 'skillful-awareness-for-anger-and-other-emotions',
    title: 'Skillful Awareness for Anger (and other emotions)',
    excerpt: 'Mark shares his personal challenges with anger stemming from childhood trauma and outlines how he transformed his approach to emotional regulation through Skillful Awareness.',
    content: `<p>Mark shares his personal challenges with anger stemming from childhood trauma and outlines how he has transformed his approach to emotional regulation. The post delves into the integration of Buddhist mindfulness, Integral perspective-taking, and Shadow Work to form what Mark calls Skillful Awareness. This method helps observe reactions without attachment, allowing for wiser responses to life's triggers.</p><p><a href="/contact">Explore retreats and coaching to build your own practice.</a></p>`,
    featured_image: `${SQ}/1765913951307-95Y0832NSI5PP9T7OL3K/skillful-awareness-for-anger-and-other-emotions.png`,
    categories: ['Stress', 'Resilience', 'Emotional Well-Being'],
    author: 'Mark Pirtle',
    published_date: '2025-12-16',
    status: 'published',
  },
  {
    id: '28',
    slug: 'happy-holidays-2024',
    title: 'Happy Holidays 2024',
    excerpt: 'As 2024 ends, Mark expresses gratitude for this community\'s shared journey of mindfulness and growth, and sets intentions for the New Year.',
    content: `<p>As we end 2024, Mark expresses gratitude for this community's shared journey of mindfulness and growth. The holidays offer moments to cherish and opportunities for reflection. Take time to pause, breathe, and set intentions for the New Year. If you want to deepen your growth, join the 2025 "Change Your Story, Change Your Life" retreat series.</p>`,
    featured_image: `${SQ}/1765908259277-Z5HLX0C4BWF85XT3KD7L/happy-holidays-2024.png`,
    categories: ['Parenting', 'Family', 'Relationships'],
    author: 'Mark Pirtle',
    published_date: '2025-12-16',
    status: 'published',
  },
  {
    id: '29',
    slug: 'a-call-for-evolution',
    title: 'A Call for Evolution',
    excerpt: 'Shadow work uncovers the unconscious values and biases driving our actions. To change broken systems, we must first evolve within ourselves.',
    content: `<p>The tragic story of Brian Thompson and the disturbing reactions it sparked highlight the need for shadow work. Shadow work uncovers the unconscious values and biases driving our actions and helps us align with a vision of equity and sustainability. To change broken systems, we must first evolve within ourselves, choosing mindfulness, compassion, and personal transformation over violence and blame.</p>`,
    featured_image: `${SQ}/1765906568160-MPPJ8O899320X9GQZBGJ/a-call-for-evolution.png`,
    categories: ['Society'],
    author: 'Mark Pirtle',
    published_date: '2025-12-16',
    status: 'published',
  },
  {
    id: '30',
    slug: 'family-politics-and-the-holidays',
    title: 'Family, Politics, and the Holidays',
    excerpt: 'Holiday gatherings can be emotionally charged, especially when differing political perspectives clash. Shadow work helps us recognize the unconscious fears driving our reactions.',
    content: `<p>Holiday gatherings can be emotionally charged, especially when differing political perspectives clash. Shadow work helps us recognize the unconscious fears, judgments, and needs driving our reactions, empowering us to respond skillfully instead of defensively. This holiday season, take a breath, pause, and discover what your emotions are teaching you about yourself.</p>`,
    featured_image: `${SQ}/1765905895219-5C42Q4EFUNLTOF04S89P/family-politics-and-the-holidays.png`,
    categories: ['Parenting', 'Family', 'Relationships'],
    author: 'Mark Pirtle',
    published_date: '2025-12-16',
    status: 'published',
  },
  {
    id: '31',
    slug: 'thanksgiving-family-and-shadow-work',
    title: 'Thanksgiving, Family, and Shadow Work',
    excerpt: 'Thanksgiving can bring up old stories and emotional triggers, but it\'s also a chance to practice mindfulness and patience through attunement.',
    content: `<p>Thanksgiving can bring up old stories and emotional triggers, but it's also a chance to practice mindfulness and patience. Shadow work encourages attunement to yourself and others, especially in uncomfortable moments. Use family dynamics as opportunities for self-reflection, wakefulness, and gratitude for your personal growth and the family that shaped you.</p>`,
    featured_image: `${SQ}/1765904973531-TXADYHRGJ9OGELZNUGK6/thanksgiving-family-and-shadow-work.png`,
    categories: ['Parenting', 'Family', 'Relationships'],
    author: 'Mark Pirtle',
    published_date: '2025-12-16',
    status: 'published',
  },
  {
    id: '32',
    slug: 'shadow-work-and-meditation',
    title: 'Shadow Work and Meditation',
    excerpt: 'Most suffering stems from the unchecked stories our minds create. Shadow work and meditation reveal these subconscious narratives, allowing us to question their validity.',
    content: `<p>Most suffering stems from the unchecked stories our minds create. Shadow work and meditation reveal these subconscious narratives, allowing us to question their validity and release their hold on us. By shifting our perspective and embracing self-awareness, we can transform fear, anger, and impatience into clarity and contentment.</p>`,
    featured_image: `${SQ}/1765900391726-RKRDTSWFVXF07NOL4GFF/shadow-work-and-meditation.png`,
    categories: ['Meditation', 'Mindfulness', 'Spirituality'],
    author: 'Mark Pirtle',
    published_date: '2025-12-16',
    status: 'published',
  },
  {
    id: '33',
    slug: 'restless-nights-mindful-insights',
    title: 'Restless Nights, Mindful Insights',
    excerpt: 'A restless night became a powerful lesson in mindfulness and shadow work. By observing emotions without attaching to their stories, Mark found peace despite the lack of sleep.',
    content: `<p>A restless night became a powerful lesson in mindfulness and shadow work. By observing emotions and thoughts without attaching to their stories, Mark found peace and clarity despite the lack of sleep. Discover how skillful awareness can help you navigate discomfort, integrate your shadow, and cultivate inner contentment.</p>`,
    featured_image: `${SQ}/1765899710075-FFQHYMJZWTE2C02PWR23/restless-nights-mindful-insights.png`,
    categories: ['Meditation', 'Mindfulness', 'Spirituality'],
    author: 'Mark Pirtle',
    published_date: '2025-12-16',
    status: 'published',
  },
  {
    id: '34',
    slug: 'embracing-shadow',
    title: 'Embracing Shadow: Push, Pull, Stop, Neutral',
    excerpt: 'Shadow work shines a light on our unconscious patterns. Explore your own shadow using a simple mindfulness practice to notice your habitual energies.',
    content: `<p>Shadow work shines a light on our unconscious patterns, helping us grow through self-awareness and reflection. This week, explore your own shadow using a simple mindfulness practice to notice your habitual energies—Push, Pull, Stop, or Neutral. Learn how understanding your Shadow Self can lead to profound transformation.</p>`,
    featured_image: `${SQ}/1765892550213-2UHNXFDQWRIEM6OF1O3Y/embracing-shadow.png`,
    categories: ['Self Improvement', 'Mental Health'],
    author: 'Mark Pirtle',
    published_date: '2025-12-16',
    status: 'published',
  },
  {
    id: '35',
    slug: 'catch-it-early',
    title: 'Catch it Early',
    excerpt: 'A personal story about his cat Ramses highlights the importance of addressing small problems—whether in health, relationships, or personal growth—before they spiral out of control.',
    content: `<p>Mark shares a personal and poignant story about his cat Ramses, whose untreated minor injury escalated into a severe issue requiring amputation. This cautionary tale highlights the importance of addressing small problems—whether in health, relationships, or personal growth—before they spiral out of control. Mark invites readers to reflect on their own lives and take proactive steps toward resolution.</p>`,
    featured_image: `${SQ}/1765892159761-LM90RDBYK5C8LRB3W1ZH/catch-it-early.png`,
    categories: [],
    author: 'Mark Pirtle',
    published_date: '2025-12-16',
    status: 'published',
  },
  {
    id: '36',
    slug: 'different-paths-same-destination',
    title: 'Different Paths, Same Destination',
    excerpt: 'A fable comparing the journeys of a monk, a golfer, and an entrepreneur highlights shared principles of mastery: motivation, intention, awareness, and focus.',
    content: `<p>In this reflective essay, Mark shares insights from a coaching session with a client who excels in golf, business, and mentorship. A fable comparing the journeys of a monk, a golfer, and an entrepreneur highlights shared principles of mastery: motivation, intention, awareness, and focus. Mark extends an invitation to his upcoming plant medicine retreat for those ready to align personal and professional growth with mindfulness and self-discovery.</p>`,
    featured_image: `${SQ}/1765889250445-J307ZLOESISJH3D6U60N/different-paths-same-destination.png`,
    categories: ['Business', 'Leadership Development'],
    author: 'Mark Pirtle',
    published_date: '2025-12-16',
    status: 'published',
  },
  {
    id: '37',
    slug: 'the-key-to-happiness',
    title: 'The Key to Happiness',
    excerpt: 'Mark explores the universal resistance to hard tasks and shares the secret to overcoming it: embracing challenges willingly and saying "yes" to responsibilities.',
    content: `<p>In this heartfelt essay, Mark explores the universal resistance to hard tasks and shares the secret to overcoming it: embracing challenges willingly. Reflecting on experiences with clients and his daughter, Mark explains how dropping resistance and saying "yes" to responsibilities can lead to immediate happiness and long-term growth.</p>`,
    featured_image: `${SQ}/1765888742975-KVYYGVZ38RIFV4OMDERI/The+Key+to+Happiness.png`,
    categories: ['Stress', 'Resilience', 'Emotional Well-Being'],
    author: 'Mark Pirtle',
    published_date: '2025-12-16',
    status: 'published',
  },
  {
    id: '38',
    slug: 'my-path-back-to-wellness',
    title: 'My Path Back to Wellness',
    excerpt: 'Mark shares his personal journey from material-driven success and devastating collapse to inner healing through shadow work and mindfulness at a Tibetan Buddhist Monastery.',
    content: `<p>Mark shares his personal journey from material-driven success and devastating collapse to inner healing and growth through shadow work and mindfulness. After losing his business and health due to unresolved traumas, Mark found transformation at a Tibetan Buddhist Monastery. Today, he offers guidance to those seeking meaning and healing in the face of life's challenges, inviting readers to explore shadow work and mindfulness as pathways to resilience.</p>`,
    featured_image: `${SQ}/1765887998052-B45EL59RMRLJXUAVXFX1/my-path-back-to-wellness.png`,
    categories: ['Stress', 'Resilience', 'Emotional Well-Being'],
    author: 'Mark Pirtle',
    published_date: '2025-12-16',
    status: 'published',
  },
  {
    id: '39',
    slug: 'the-path-less-traveled',
    title: 'The Path Less Traveled',
    excerpt: 'Mark reflects on the universal longing for deeper meaning and spiritual connection, transcending material success through shadow work and inner transformation.',
    content: `<p>In The Spiritual Life: Choosing the Path Less Traveled, Mark reflects on the universal longing for deeper meaning and spiritual connection, transcending material success. By exploring shadow work and inner transformation, Mark invites readers to embark on a spiritual journey, offering guidance through coaching and his plant medicine retreat as a catalyst for profound personal growth.</p>`,
    featured_image: `${SQ}/1765887286980-1RP5V80QZ6U9S5QD8VJZ/the-path-less-traveled.png`,
    categories: ['Mindfulness', 'Meditation', 'Spirituality'],
    author: 'Mark Pirtle',
    published_date: '2025-12-16',
    status: 'published',
  },
  {
    id: '40',
    slug: 'scientific-evidence-for-psychedelics-and-health-behavior-change',
    title: 'Scientific Evidence for Psychedelics and Health Behavior Change',
    excerpt: 'Exploring emerging scientific evidence supporting the role of psychedelics in promoting health behavior change and transformative plant medicine journeys.',
    content: `<p>This post explores emerging scientific evidence supporting the role of psychedelics in promoting health behavior change. Mark shares resources for those interested in transformative plant medicine journeys and invites readers to explore the connection between psychedelics, healing, and self-growth.</p>`,
    featured_image: `${SQ}/1765966601475-1FTHS0JT0KFFPIVDO6WU/scientific-evidence-for-psychedelics-and-health-behavior-change.png`,
    categories: ['Self Improvement', 'Mental Health'],
    author: 'Mark Pirtle',
    published_date: '2025-12-16',
    status: 'published',
  },
];