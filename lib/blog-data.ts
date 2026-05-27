// lib/blog-data.ts
// Mirrors the Directus blog_posts collection schema exactly.
// When Directus is ready, replace getAllPosts / getPostBySlug in lib/blog.ts.

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
  // ─────────────────────────────────────────────────────────────
  // PAGE 1 (most recent) — full content
  // ─────────────────────────────────────────────────────────────
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
<p>That's what <em>attunement</em> does. It's our human way of calling the wolves home. What is it? Sensing into yourself, others, and situations with acceptance, care, and a wish for a higher good. When such skillful awareness leads, harmony is not far behind.</p>
<p>Here's a gentle question: Where might a single act of attunement help begin to restore a healthy flow in your life?</p>
<p>This is the kind of system-wide transformation I explore in my upcoming book, <em>The Healing Mindset.</em> I'm gathering a group of early supporters to help bring it to life.</p>
<p>If you're interested, <a href="/contact">Join my Book Launch Team</a> — you'll receive early access to the Introduction, behind-the-scenes updates, invitations to live events, and a signed copy when the book releases.</p>
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
<p><strong>They say a bestselling book only needs 200 true fans</strong>. That's it! And I believe we have that right here.</p>
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
<h3>🌿 Join My Book Launch Team</h3>
<ul>
<li>A <strong>signed hardcover copy</strong> of the book</li>
<li><strong>Early access</strong> to content, stories, and behind-the-scenes updates</li>
<li><strong>Invitations to live events</strong> and a special online class</li>
</ul>
<p>They say 200 true fans can launch a bestseller. I know we have that here.</p>
<p><a href="/contact">Join the Book Launch Team</a></p>
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
    excerpt: 'Fleeting states like calm or insight can become enduring traits through the right kinds of practice. Mark shares the five core practices in The Healing Mindset.',
    content: `<p>Hey friends,</p>
<p>Back in the 60s and 70s, the West became fascinated with altered states—psychedelics, meditation highs, peak experiences. States like awe, insight, and peace can shift our perspective in powerful ways. But here's the thing: states don't last.</p>
<p>I wrote <em>The Healing Mindset: Mastering the Art of Skillful Awareness</em> not to chase states, but to help people build traits—to actually <strong><em>become</em></strong> a person who is more peaceful, attuned, and resilient.</p>
<h3>The Shift That Matters</h3>
<p>A "state" is a temporary experience. But lasting change happens when those glimpses begin to rewire your brain, and what you occasionally feel becomes who you consistently <em>are</em>. That's a <strong><em>trait</em></strong>. And to move from state to trait, you need one thing: <strong>practice!</strong></p>
<h3>Five Core Practices</h3>
<ul>
<li><strong>Focus on the Positive</strong></li>
<li><strong>Prime Ahead of Time</strong></li>
<li><strong>Name It to Tame It</strong></li>
<li><strong>Shift–Open–Stay</strong></li>
<li><strong>Zooming</strong> (gaining perspective)</li>
</ul>
<p>These aren't "peak" experiences. They're practical tools—simple, repeatable, and grounded in science. When practiced consistently, you will literally grow a different brain. That's neuroplasticity in action.</p>
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
    excerpt: 'Becoming a full-time single dad clarified everything. Mark shares news about his book, a rebuilt online course, and the SA360 assessment tool.',
    content: `<p>Hey friends,</p>
<p>You may have noticed my newsletters have been… a bit inconsistent. I'm now a full-time single dad, and while that's brought its challenges, it's also helped clarify what matters most.</p>
<p>One unexpected outcome is that Alana and I co-created what we're calling our <strong><em>Living Constitution</em></strong>. It's a written document of our values, expectations, communication strategies, boundaries, shared goals. And it's been utterly transformational.</p>
<h3>My Book Is (Finally) Coming Out!</h3>
<p><em>The Healing Mindset: Mastering the Art of Skillful Awareness</em> will be published on November 1. This book is the heart of everything I've taught, practiced, and lived over the past 25 years.</p>
<h3>A Fully Reimagined Online Course: Project SkillfullyAware</h3>
<ul>
<li><strong>Foundations</strong>: A 6-week intro to ethically-based mindfulness, attention training, and regulating your nervous system</li>
<li><strong>Intermediate</strong>: A 6-week deep dive into emotional triggers, stories, and subtler shadow patterns</li>
<li><strong>Advanced</strong>: 6 weeks of vertical growth, leadership, and conscious living</li>
</ul>
<h3>What's Next: Unfinished Business</h3>
<p>I'm now feverishly writing my second book, <em>Unfinished Business: The Inner-Work Behind the Work of Great Leadership</em>. At the center is the <strong>SA360</strong>—a transformative new narrative assessment tool.</p>
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
<p>About three months ago, I developed a case of tennis elbow. Here's the thing—I used to be a physical therapist. So I know exactly what to do to treat it. But did I do what I should have? Nope.</p>
<p>I figured if I was just more careful, I could keep lifting weights and push through. But instead of it healing, I made it worse. Eventually, I had to stop lifting altogether.</p>
<h3>And boom—there it was. Shadow!</h3>
<p>In a totally unrelated moment, I caught myself judging someone in my life: "They know what to do, why aren't they doing it?" That's when it hit me: I was doing the same thing. My double standard, my blind spot—that's the stuff of shadow work.</p>
<p>Shadow work isn't just about understanding your psyche. It's about becoming your own best therapist. When we notice the gap between our values and our behavior, we can do something about it. That's how we grow.</p>
<p>This is exactly what my SA360 coaching system helps people do. It blends developmental psychology, mindfulness, and shadow work to help you identify where you're leaking power. <a href="/contact">Click here to participate in the pilot</a>.</p>
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
    excerpt: 'The SA360 Diagnostic reveals your developmental stage, power leaks, brain hemisphere bias, and which aptitudes need strengthening.',
    content: `<p>Hey friends,</p>
<p>The intense interest in my recent writing seems to revolve around a powerful question everyone wants to answer: <strong>How do I grow?</strong></p>
<p>Not just professionally or financially. I mean as a whole person. Emotionally. Relationally. Spiritually.</p>
<p>That's why I created the SA360 Diagnostic—a structured yet human-centered tool to help people see themselves and their developmental patterns more clearly. It's rooted in brain science, shadow work, and vertical development theory.</p>
<h3>Here's what the SA360 reveals:</h3>
<ul>
<li>The "stage" of development you are operating from</li>
<li>Where you are leaking power</li>
<li>Which of your inner Aptitudes need strengthening</li>
<li>Whether you tend to default to a left- or right-hemisphere perspective</li>
</ul>
<p>All you need to do is answer 19 open-ended questions. Most people find dictating their responses easiest—it took me just 20 minutes.</p>
<p><a href="/contact">Click here to get your own personalized report—for free</a></p>
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
    excerpt: 'Help test the SA360 Diagnostic—a new 20-minute self-assessment that maps your development stage, brain hemisphere bias, power centers, core aptitudes, and shadow indicators.',
    content: `<p>Hey friends,</p>
<p>I'm piloting a new Personal Development tool, the <strong><em>SkillfullyAware 360 Diagnostic Assessment (SA360)</em></strong> and I still need real humans to complete my test group.</p>
<p>Fill out the form, and in return, I'll send you a comprehensive SA360 Diagnostic—a personalized profile that reveals where you're thriving, where your power might be leaking, and what small adjustments could lead to significant growth.</p>
<h3>Here's what you'll get:</h3>
<ul>
<li>Your developmental "stage" estimate</li>
<li>Insight into your brain hemisphere bias</li>
<li>Identification of which Power Centers are strong or need attention</li>
<li>Your top and lowest Core Aptitudes (like Influence, Drive, or Restraint)</li>
<li>Key shadow indicators that could be silently draining your energy</li>
<li>Specific guidance for how to evolve, grow, and lead with more clarity</li>
</ul>
<p><a href="/contact">I would absolutely appreciate your help with this.</a></p>
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
<p>I'm building something I've wanted for years: a developmental assessment tool that doesn't just label your personality but actually helps you change, grow, and heal.</p>
<p>Over the past three decades, I've refined a comprehensive coaching system built around Developmental Perspectives, Power Centers, Core Aptitudes, Shadow Patterns, right- and left-brain hemisphere bias, and self-regulation.</p>
<p>Now I'm working on the next piece: a self-assessment tool that tracks it all—as unique to you as a fingerprint.</p>
<h3>The 10 Questions:</h3>
<ol>
<li>Tell us about a recent challenge. What happened, and how did you deal with it?</li>
<li>When you think about your personal growth, what has changed most about the way you see yourself?</li>
<li>Have you ever felt misunderstood? What happened, and how did you respond?</li>
<li>What gives your life meaning? Has that sense of purpose changed over the years?</li>
<li>Think of a time your values were tested. What did you learn?</li>
<li>What's your relationship with your emotions? How do feelings influence your choices?</li>
<li>How do you show up in groups? What role do you tend to play?</li>
<li>Describe a recent internal conflict. How did you resolve it, or not?</li>
<li>What do you notice about your inner voice or self-talk?</li>
<li>How do you stay open to people with very different views?</li>
</ol>
<p>Everyone who participates will receive a personalized assessment with developmental stage, shadow crash patterns, Power Center and Aptitude "leaks," and personalized recommendations.</p>
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
    excerpt: 'Your personal power depends on your perspective. The SkillfullyAware system integrates neuroscience and developmental theory to map lasting change.',
    content: `<p>Hey friends,</p>
<p>I've spent the past 20+ years integrating everything I've learned from clinical work, contemplative traditions, systems theory, and neuroscience to build a comprehensive map of how people change and grow.</p>
<p>And I've come to believe this: <strong>Your personal power depends on your perspective!</strong></p>
<p>Most people don't realize that our experience of the world is filtered through two distinct brain processing styles that neuroscientist Iain McGilchrist calls left and right hemisphere perspectives.</p>
<ul>
<li>Left is linear, problem-focused, and controlling. It's where the critical voice in your head lives.</li>
<li>Right is holistic, relational, attuned, and reflective. An additional blessing of the right hemisphere is that it's mute. Ah, peace!</li>
</ul>
<p>We need both. But when we're trapped in stress, we default to the narrower, left-sided view. And that's when our power leaks start to amplify.</p>
<p>The deeper work I do helps clients recognize and shift their perspectives not just mentally, but <em>developmentally</em>. This isn't just coaching. It's <em>real integration work.</em></p>
<p>If that kind of deep self-examination calls to you, I'm here. <a href="/contact">Coaching, retreats, or simply a conversation.</a></p>
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
    excerpt: 'Discover where you may be unconsciously leaking personal power—and how to restore it through seven Power Centers and six Core Aptitudes.',
    content: `<p>Hey friends,</p>
<p>Whenever I feel stuck, reactive, or off-center, it's rarely about what's happening on the surface. It's usually something deeper. And when that stress overwhelms me, I don't always show up as my best self. Can you relate?</p>
<h3>The Seven Power Centers</h3>
<ul>
<li><strong>Physical</strong> – strength, stamina, and presence</li>
<li><strong>Creative</strong> – expressive flow and innovation</li>
<li><strong>Emotional</strong> – depth, resilience, and stability</li>
<li><strong>Financial</strong> – sovereignty, responsibility, and integrity</li>
<li><strong>Social</strong> – relational influence and authenticity</li>
<li><strong>Intellectual</strong> – mental clarity and perspective</li>
<li><strong>Spiritual</strong> – connection, meaning, purpose, and alignment</li>
</ul>
<h3>Six Core Aptitudes</h3>
<ul>
<li><strong>Influence</strong> — grounded presence and communication</li>
<li><strong>Drive</strong> — intrinsic motivation</li>
<li><strong>Perseverance</strong> — grit to stay with challenges</li>
<li><strong>Achievement</strong> — focused execution, concluding things</li>
<li><strong>Alignment</strong> — values-based decision-making</li>
<li><strong>Restraint</strong> — the wisdom to pause, wait, or release</li>
</ul>
<p>Through my SkillfullyAware method—Meditation & Mindfulness, Perspective-Taking, and Shadow Work—we uncover shadow patterns, close the leaks, and restore power where it's needed.</p>
<p>If this resonates, <a href="/contact">let's talk</a>.</p>
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
    excerpt: 'Announcing the soft launch of the updated website and the expanded SkillfullyAware system—from new retreats and coaching frameworks to the upcoming release of The Healing Mindset.',
    content: `<p>Hey friends,</p>
<p>I've got an exciting milestone to share: My website, <a href="/">drmarkpirtle.com</a>, just got a facelift! It's a "soft launch"—still changes to be made, but mostly finished.</p>
<p>That's why I created <strong><em>SkillfullyAware</em></strong>—a development system that integrates three powerful disciplines: <strong>meditation and mindfulness, perspective-taking, and shadow work</strong>.</p>
<h3>What's New</h3>
<ul>
<li><strong><em>The Healing Mindset: Mastering the Art of Skillful Awareness</em></strong> — coming this summer!</li>
<li>Three <strong>Companion Workbooks</strong></li>
<li>An all-new <strong><em>Project SkillfullyAware</em></strong> online course (Foundations, Intermediate, Advanced)</li>
<li>A more refined approach to <strong>coaching</strong></li>
<li>Purpose-driven <strong>retreats</strong></li>
</ul>
<h3>The Seven Domains of Power</h3>
<p>I'm now helping clients identify where they may be unintentionally leaking personal power across seven key domains: Physical, Intellectual, Creative, Emotional, Social, Financial, and Spiritual.</p>
<p>Let's keep evolving together!</p>
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
<p>AI seems to be changing everything. I'm a content creator. I create online classes. I write books and newsletters. But now everyone has a superintelligent assistant that can replicate all of that!</p>
<p>Then I took a sauna. Here are my thoughts:</p>
<p>Yes, AI helps me organize my thoughts, speed up workflows, and even help me write better. But it won't ever wake up in my skin. It won't sit with a client and hold space for them while they cry. It won't raise my daughter or practice patience when I'm frustrated. It won't ever do the work of becoming a better human. That will always be our job.</p>
<h3>Being Human Is Still Our Work</h3>
<ul>
<li>Learning to manage our emotions when we're triggered</li>
<li>Showing up with compassion when we feel like lashing out</li>
<li>Reaching for higher perspectives</li>
<li>Letting go of old stories that keep us stuck</li>
<li>Growing up emotionally and spiritually</li>
</ul>
<p>Technology can assist us, but it won't replace the responsibility of growing into better versions of ourselves. That's our work.</p>
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
    excerpt: 'Seth Godin says "big problems only require small changes." Mark\'s story of healing from rock bottom through simple monastery practices proves it.',
    content: `<p>Hey friends,</p>
<p>I listened to a podcast this week, and something Seth Godin said struck a chord: <strong>"Big problems only require small changes."</strong></p>
<p>He was referencing the <em>Butterfly Effect</em>—how complex systems change in response to small inputs. My story is proof of it.</p>
<h3>From Rock Bottom to Monastery</h3>
<p>About 25 years ago, I hit bottom. The stress of losing my business triggered a cascade of stress-related conditions. To heal, I spent months in retreat at a Tibetan Buddhist monastery. It was there I learned a few simple practices—small, consistent things I still do today. Those tiny changes rewired my brain. And that rewiring not only healed my stress illnesses, they changed how I related to myself and the world.</p>
<h3>The Invitation: Start Small, Shift Big</h3>
<ul>
<li>You don't have to fix everything.</li>
<li>You just need to start.</li>
<li>A small change—made today—can shift the whole system!</li>
</ul>
<p>Wishing you peace, clarity, and the courage to start,<br/>Mark</p>`,
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
    excerpt: 'A coaching client who\'s spent her life giving to others has never learned how to prioritize herself. Shadow work is helping her uncover why saying no feels like abandonment.',
    content: `<p>Hey friends,</p>
<p>A client of mine—let's call her "J"—is one of the most giving people I know. The problem is that J doesn't know how to count on herself.</p>
<p>In a recent session, she said: "I don't know how to say no without feeling like I'm abandoning someone." Underneath her outward generosity was a persona you might call a "rescuer," an identity built around being needed.</p>
<h3>Breaking the Chains of Past Programming</h3>
<p>This is where shadow work comes in. What might lie underneath the constant giving? Where did the belief start that love must be earned? What part of her feels unsafe when she stops helping? Shadow work can free oneself to embody a more authentic way of being, unshackled by past programming.</p>
<h3>The Gift of Me Time</h3>
<p>One of the best places to start exploring such deep questions is on retreat, away from the noise, in a place designed to help you tune inward. A retreat isn't an escape; it's a gift of "me time." It's a way to remember that giving to yourself is not a betrayal of others.</p>
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
    excerpt: 'A successful CEO in her sixties continues to struggle with prioritizing her inner life over work. When is enough enough? When does doing give way to being?',
    content: `<p>Hey friends,</p>
<p>A client of mine—an accomplished CEO—has run her company for over 30 years. Through the years, I've come to know her as a seeker at heart. But the external world keeps getting her attention. And here she is, in her mid-sixties, vexed by the same tension.</p>
<h3>The Questions That Won't Go Away</h3>
<ul>
<li><strong>When is enough enough?</strong></li>
<li><strong>When does doing give way to being?</strong></li>
<li><strong>When does the quest for more get replaced by the peace of enough?</strong></li>
<li><strong>When does tending to one's interior become the priority?</strong></li>
</ul>
<p>I see this pattern everywhere: people sensing a deeper calling but staying too busy to answer.</p>
<h3>The Call to Reorder</h3>
<p>For many of us, the urge to keep doing and achieving is driven by unconscious patterns we've never fully examined. That's where shadow work comes in—helping illuminate the inner conflict between who we are and who we think we need to be to feel worthy or secure.</p>
<p>What slight shift could you make this week that honors your inner life?</p>
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
    excerpt: 'When an entire culture refuses to face its past, the collective shadow festers. Shadow work is a communal and national responsibility, not just a personal one.',
    content: `<p>Fifty years ago, the U.S. military pulled out of Vietnam. It reminds me what happens when we fail to face our collective shadow.</p>
<h3>Shadow Work Isn't Just Personal</h3>
<p>We often talk about shadow work as a solo journey. That work matters. But shadow work scales. Families, communities, and entire nations carry shadow, too. When those bigger shadows remain unseen, they fester and cause harm—sometimes on a massive scale.</p>
<h3>When We Avoid, We Repeat</h3>
<p>Take Vietnam. Nearly 60,000 American lives were lost. Yet there's been no national day of reckoning, no formal apology, no collective moment of reflection. Just silence. That silence is the shadow. When we avoid it, we keep making the same mistakes.</p>
<h3>Choosing Dialogue Over Division</h3>
<p>Doing shadow work at scale means choosing curiosity over certainty. It means noticing when we're triggered and pausing to ask, "Why?" It means talking to each other—not past each other. That's not weakness. That's leadership.</p>`,
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
    excerpt: 'After the collapse of his business and a divorce, Dr. Mark Pirtle found healing through extended retreats—first at a Tibetan Buddhist monastery, then through plant medicine.',
    content: `<p>Hey friends,</p>
<p>I was listening to an episode of <em>Hidden Brain</em> recently called <em>Moments That Change Us.</em> It got me thinking about a couple of big moments in my own life.</p>
<h3>First: The Business Collapse</h3>
<p>The collapse of my business was humbling. I'd poured everything into it, and when it unraveled, I was left disoriented and ashamed. I spent months in retreat at a Tibetan Buddhist monastery in Australia. That time in silence helped me recalibrate.</p>
<h3>Then Came the Divorce</h3>
<p>The divorce wasn't just the loss of a partner—it was the unraveling of a whole way of life. After the split, I signed up for two plant medicine retreats in one year. Both helped me move through the grief and the questions—Who am I now? What do I want? What really matters?</p>
<h3>You Don't Have to Go It Alone</h3>
<p>If you're going through something life-altering—or if you're still carrying the weight of something from the past—retreats can help. <a href="/contact">Reach out</a>. I'd love to hear what you're navigating.</p>
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
    excerpt: 'Talking to yourself in the third person creates instant distance from swirling emotions. Mark shares how "Name It to Tame It" carried him through a rough divorce.',
    content: `<p>Hey friends,</p>
<p>I need to admit something. I talk to myself—a lot. Not in a muttering‑under‑my‑breath way, but in a deliberate, third‑person way. Psychologists call it <em>Illeism.</em> I've called it <strong><em>Name It to Tame It</em></strong> (NITTI) for years, and I leaned on it hard right after my divorce.</p>
<p>Back then, the inner dialogue was brutal. The only way to unhook myself was to say aloud, "<em>Mark, you're angry and scared. Let's breathe.</em>" Hearing my voice gave me a little space.</p>
<h3>Why Third‑Person Self‑Talk Works</h3>
<ol>
<li><strong>Distance without denial</strong> — Saying my name lets me acknowledge the feeling instead of fixating on it.</li>
<li><strong>Shadow work is made simple.</strong> The moment I name the feeling—anger, shame, or envy—it surfaces. Now it can be met, not buried.</li>
<li><strong>Built‑in compassion</strong> — I speak to myself like I would talk to clients: clear, direct, and kind.</li>
</ol>
<h3>How to Try It</h3>
<p>Catch a strong emotion. Say your name, state the feeling, and add one caring suggestion: <em>"Jen, you're anxious about the presentation. Let's review the first slide and breathe."</em> Notice the shift. Repeat as needed.</p>
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
    excerpt: 'Committing to your calling—despite resistance—can be transformative. An artist friend\'s 60-day drawing practice eliminated his depression. What\'s calling you?',
    content: `<p>Hello friends,</p>
<p>I've been thinking about what it takes to stay on track with something meaningful—especially when it's hard.</p>
<h3>An unexpected surprise</h3>
<p>Two months ago, my workout buddy—an artist with exceptional talent—made a commitment: draw every day for an hour or two. Sixty days in, the shift is dramatic. Not just in his technique but in his mood. The depression? He reports that it's pretty much gone. Why? Because art is his calling. And when he shows up for it, something in him settles and aligns.</p>
<h3>The voice that says, 'not today'</h3>
<p>We must face the part of us that wants to bail. That's where shadow work comes in. It helps us turn toward procrastination, resistance, and doubt—and get curious. Where is that voice coming from? What's it protecting?</p>
<h3>Your chance to say YES!</h3>
<p>What's calling you? What would happen if you said yes to it—and kept saying yes for the rest of your life?</p>
<p>If you're ready to explore that calling—<em>and what's in the way</em>—I invite you to <a href="/contact">reach out</a> or join me for a retreat this year.</p>
<p>Wishing you strength for the grind and the enjoyment of the gift it brings,<br/>Mark</p>`,
    featured_image: `${SQ}/1765969129425-9ZDZU4OAPCV8HRB7A737/no-grind-no-goodness.png`,
    categories: ['Stress', 'Resilience', 'Emotional Well-Being'],
    author: 'Mark Pirtle',
    published_date: '2025-12-17',
    status: 'published',
  },

  // ─────────────────────────────────────────────────────────────
  // PAGE 2 — excerpt-only content
  // ─────────────────────────────────────────────────────────────
  { id: '21', slug: 'what-is-love-what-i-learned-on-retreat', title: 'What is love? What I learned on retreat', excerpt: 'A powerful teaching from a Tibetan Buddhist monastery: "Love is wanting someone to be happy." Mark explores how true happiness comes through attunement.', content: `<p>In this heartfelt reflection, Mark shares a teaching from his time at a Tibetan Buddhist monastery: <em>"Love is wanting someone to be happy."</em> This simple definition has shaped the way he understands love, connection, and fulfillment. By weaving in the tools of shadow work, he shares how we can move closer to authentic self-love.</p><p><a href="/contact">Reach out to learn more about upcoming retreats.</a></p>`, featured_image: `${SQ}/1765968507668-YZZ10KYZX2EWA7MYGOQ1/what-is-love-what-i-learned-on-retreat.png`, categories: ['Stress', 'Resilience', 'Emotional Well-Being'], author: 'Mark Pirtle', published_date: '2025-12-17', status: 'published' },
  { id: '22', slug: 'which-path-feels-right', title: 'Which Path Feels Right?', excerpt: 'We all face big decisions—whether to stay the course or make a bold change. Shadow work opens up the inner space to sit with life\'s biggest questions.', content: `<p>We all face big decisions—whether to stay the course or make a bold change. Mark explores how shadow work can open up the inner space to sit with life's biggest questions. You'll learn why logic alone won't get you there and why stepping away—on retreat or into reflection—might be exactly what's needed.</p><p><a href="/contact">Let's talk about your path.</a></p>`, featured_image: `${SQ}/1765966704224-FF0SHG63GBSQDG31S3MH/transforming-lives-through-shadow-work-and-recovery.png`, categories: ['Business', 'Leadership Development'], author: 'Mark Pirtle', published_date: '2025-12-17', status: 'published' },
  { id: '23', slug: 'airplane-thoughts-on-relationships-and-agreements', title: 'Airplane Thoughts on Relationships and Agreements', excerpt: 'Mark explores the crucial role of making and keeping agreements in personal and professional relationships, introducing the "Six Stages of Oversight" model.', content: `<p>Mark Pirtle explores the crucial role of making and keeping agreements in both personal and professional relationships. Drawing from the experiences of a client, he introduces the "Six Stages of Oversight," a model illustrating the progression of employee empowerment and responsibility. Shadow work can help individuals understand and overcome the subconscious barriers that prevent them from keeping their commitments.</p><p><a href="/contact">Reach out to explore coaching or retreats.</a></p>`, featured_image: `${SQ}/1765966333921-SXIEBBJOOB26R3JQMTAK/airplane-thoughts-on-relationships-and-agreements.png`, categories: ['Business', 'Leadership Development'], author: 'Mark Pirtle', published_date: '2025-12-17', status: 'published' },
  { id: '24', slug: 'saying-goodbye-to-my-little-man', title: 'Saying Goodbye to My Little Man', excerpt: 'Mark shares the emotional experience of saying goodbye to his beloved cat Ramses—exploring love, loss, and the preciousness of moments shared with those we care for.', content: `<p>Mark shares the emotional experience of saying goodbye to his beloved cat Ramses, who succumbed to cancer. He reflects on the lessons learned from Ramses about caring deeply and the significance of cherishing every moment. This narrative serves as a reminder of the fleeting nature of life and the importance of holding onto the love and memories we create with those who touch our lives.</p>`, featured_image: `${SQ}/1765965013675-CWFKCWKTWDT0GQSBGQ5B/saying-goodbye-to-my-little-man.png`, categories: ['Stress', 'Resilience', 'Emotional Well-Being'], author: 'Mark Pirtle', published_date: '2025-12-17', status: 'published' },
  { id: '25', slug: 'skillful-awareness-in-times-of-loss', title: 'Skillful Awareness in Times of Loss', excerpt: 'Loss has a way of resurfacing old wounds. Polyvagal Theory explains how our nervous system processes grief, and Shadow Work reveals the deeper layers beneath our emotions.', content: `<p>Loss has a way of resurfacing old wounds, blending past and present grief into a heavy emotional weight. In this reflection on losing his cat Ramses, Mark explores how the Polyvagal Theory explains how our nervous system processes grief and how Shadow Work reveals the deeper layers beneath our emotions. Through Skillful Awareness, he's learned to feel pain without amplifying it—to let grief come, be, and go.</p>`, featured_image: `${SQ}/1765965789665-QGW78KHHWBZ4MDH6B51Y/skillful-awareness-in-times-of-loss.png`, categories: ['Stress', 'Resilience', 'Emotional Well-Being'], author: 'Mark Pirtle', published_date: '2025-12-16', status: 'published' },
  { id: '26', slug: 'where-are-all-the-grownup', title: 'Where Are All the Grownups?', excerpt: 'Mark reflects on a dark night of the soul triggered by the state of the world and the absence of mature leadership, connecting global chaos to collective underdevelopment.', content: `<p>In this post, Mark reflects on a recent dark night of the soul—triggered by the state of the world and the absence of mature leadership. He connects the dots between global chaos and collective underdevelopment and offers shadow work as a path to emotional maturity.</p><p><a href="/contact">Join me for a retreat or coaching session.</a></p>`, featured_image: `${SQ}/1765972861921-S8PMMQASKA21PGYXXWV0/where-are-all-the-grownup.png`, categories: ['Society'], author: 'Mark Pirtle', published_date: '2025-12-16', status: 'published' },
  { id: '27', slug: 'skillful-awareness-for-anger-and-other-emotions', title: 'Skillful Awareness for Anger (and other emotions)', excerpt: 'Mark shares his personal challenges with anger stemming from childhood trauma and outlines how he transformed his approach to emotional regulation through Skillful Awareness.', content: `<p>Mark shares his personal challenges with anger stemming from childhood trauma and outlines how he has transformed his approach to emotional regulation. The post delves into the integration of Buddhist mindfulness, Integral perspective-taking, and Shadow Work to form what Mark calls Skillful Awareness—a method that helps observe reactions without attachment.</p><p><a href="/contact">Explore retreats and coaching to build your own practice.</a></p>`, featured_image: `${SQ}/1765913951307-95Y0832NSI5PP9T7OL3K/skillful-awareness-for-anger-and-other-emotions.png`, categories: ['Stress', 'Resilience', 'Emotional Well-Being'], author: 'Mark Pirtle', published_date: '2025-12-16', status: 'published' },
  { id: '28', slug: 'happy-holidays-2024', title: 'Happy Holidays 2024', excerpt: 'As 2024 ends, Mark expresses gratitude for this community\'s shared journey of mindfulness and growth, and sets intentions for the New Year.', content: `<p>As we end 2024, Mark expresses gratitude for this community's shared journey of mindfulness and growth. The holidays offer moments to cherish and opportunities for reflection. Take time to pause, breathe, and set intentions for the New Year.</p>`, featured_image: `${SQ}/1765908259277-Z5HLX0C4BWF85XT3KD7L/happy-holidays-2024.png`, categories: ['Parenting', 'Family', 'Relationships'], author: 'Mark Pirtle', published_date: '2025-12-16', status: 'published' },
  { id: '29', slug: 'a-call-for-evolution', title: 'A Call for Evolution', excerpt: 'Shadow work uncovers the unconscious values and biases driving our actions. To change broken systems, we must first evolve within ourselves.', content: `<p>The tragic story of Brian Thompson and the disturbing reactions it sparked highlight the need for shadow work. Shadow work uncovers the unconscious values and biases driving our actions and helps us align with a vision of equity and sustainability. To change broken systems, we must first evolve within ourselves, choosing mindfulness, compassion, and personal transformation over violence and blame.</p>`, featured_image: `${SQ}/1765906568160-MPPJ8O899320X9GQZBGJ/a-call-for-evolution.png`, categories: ['Society'], author: 'Mark Pirtle', published_date: '2025-12-16', status: 'published' },
  { id: '30', slug: 'family-politics-and-the-holidays', title: 'Family, Politics, and the Holidays', excerpt: 'Holiday gatherings can be emotionally charged when differing political perspectives clash. Shadow work helps us recognize the unconscious fears driving our reactions.', content: `<p>Holiday gatherings can be emotionally charged, especially when differing political perspectives clash. Shadow work helps us recognize the unconscious fears, judgments, and needs driving our reactions, empowering us to respond skillfully instead of defensively. This holiday season, take a breath, pause, and discover what your emotions are teaching you about yourself.</p>`, featured_image: `${SQ}/1765905895219-5C42Q4EFUNLTOF04S89P/family-politics-and-the-holidays.png`, categories: ['Parenting', 'Family', 'Relationships'], author: 'Mark Pirtle', published_date: '2025-12-16', status: 'published' },
  { id: '31', slug: 'thanksgiving-family-and-shadow-work', title: 'Thanksgiving, Family, and Shadow Work', excerpt: 'Thanksgiving can bring up old stories and emotional triggers, but it\'s also a chance to practice mindfulness and patience through attunement.', content: `<p>Thanksgiving can bring up old stories and emotional triggers, but it's also a chance to practice mindfulness and patience. Shadow work encourages attunement to yourself and others, especially in uncomfortable moments. Use family dynamics as opportunities for self-reflection, wakefulness, and gratitude for your personal growth and the family that shaped you.</p>`, featured_image: `${SQ}/1765904973531-TXADYHRGJ9OGELZNUGK6/thanksgiving-family-and-shadow-work.png`, categories: ['Parenting', 'Family', 'Relationships'], author: 'Mark Pirtle', published_date: '2025-12-16', status: 'published' },
  { id: '32', slug: 'shadow-work-and-meditation', title: 'Shadow Work and Meditation', excerpt: 'Most suffering stems from the unchecked stories our minds create. Shadow work and meditation reveal these subconscious narratives, allowing us to question their validity.', content: `<p>Most suffering stems from the unchecked stories our minds create. Shadow work and meditation reveal these subconscious narratives, allowing us to question their validity and release their hold on us. By shifting our perspective and embracing self-awareness, we can transform fear, anger, and impatience into clarity and contentment.</p>`, featured_image: `${SQ}/1765900391726-RKRDTSWFVXF07NOL4GFF/shadow-work-and-meditation.png`, categories: ['Meditation', 'Mindfulness', 'Spirituality'], author: 'Mark Pirtle', published_date: '2025-12-16', status: 'published' },
  { id: '33', slug: 'restless-nights-mindful-insights', title: 'Restless Nights, Mindful Insights', excerpt: 'A restless night became a powerful lesson in mindfulness and shadow work. By observing emotions without attaching to their stories, Mark found peace despite the lack of sleep.', content: `<p>A restless night became a powerful lesson in mindfulness and shadow work. By observing emotions and thoughts without attaching to their stories, Mark found peace and clarity despite the lack of sleep. Discover how skillful awareness can help you navigate discomfort, integrate your shadow, and cultivate inner contentment.</p>`, featured_image: `${SQ}/1765899710075-FFQHYMJZWTE2C02PWR23/restless-nights-mindful-insights.png`, categories: ['Meditation', 'Mindfulness', 'Spirituality'], author: 'Mark Pirtle', published_date: '2025-12-16', status: 'published' },
  { id: '34', slug: 'embracing-shadow', title: 'Embracing Shadow: Push, Pull, Stop, Neutral', excerpt: 'Shadow work shines a light on unconscious patterns. Explore your own shadow using a simple mindfulness practice to notice your habitual energies.', content: `<p>Shadow work shines a light on our unconscious patterns, helping us grow through self-awareness and reflection. This week, explore your own shadow using a simple mindfulness practice to notice your habitual energies—Push, Pull, Stop, or Neutral. Learn how understanding your Shadow Self can lead to profound transformation.</p>`, featured_image: `${SQ}/1765892550213-2UHNXFDQWRIEM6OF1O3Y/embracing-shadow.png`, categories: ['Self Improvement', 'Mental Health'], author: 'Mark Pirtle', published_date: '2025-12-16', status: 'published' },
  { id: '35', slug: 'catch-it-early', title: 'Catch it Early', excerpt: 'Mark\'s cat Ramses suffered a small injury that became a major crisis. The lesson: address small problems—in health, relationships, or personal growth—before they spiral.', content: `<p>Mark shares a personal and poignant story about his cat Ramses, whose untreated minor injury escalated into a severe issue requiring amputation. This cautionary tale highlights the importance of addressing small problems—whether in health, relationships, or personal growth—before they spiral out of control.</p>`, featured_image: `${SQ}/1765892159761-LM90RDBYK5C8LRB3W1ZH/catch-it-early.png`, categories: [], author: 'Mark Pirtle', published_date: '2025-12-16', status: 'published' },
  { id: '36', slug: 'different-paths-same-destination', title: 'Different Paths, Same Destination', excerpt: 'A fable comparing the journeys of a monk, a golfer, and an entrepreneur highlights shared principles of mastery: motivation, intention, awareness, and focus.', content: `<p>Mark shares insights from a coaching session with a client who excels in golf, business, and mentorship. A fable comparing the journeys of a monk, a golfer, and an entrepreneur highlights shared principles of mastery: motivation, intention, awareness, and focus.</p>`, featured_image: `${SQ}/1765889250445-J307ZLOESISJH3D6U60N/different-paths-same-destination.png`, categories: ['Business', 'Leadership Development'], author: 'Mark Pirtle', published_date: '2025-12-16', status: 'published' },
  { id: '37', slug: 'the-key-to-happiness', title: 'The Key to Happiness', excerpt: 'Mark explores the universal resistance to hard tasks and shares the secret to overcoming it: embracing challenges willingly and saying "yes" to responsibilities.', content: `<p>Mark explores the universal resistance to hard tasks and shares the secret to overcoming it: embracing challenges willingly. Reflecting on experiences with clients and his daughter, Mark explains how dropping resistance and saying "yes" to responsibilities can lead to immediate happiness and long-term growth.</p>`, featured_image: `${SQ}/1765888742975-KVYYGVZ38RIFV4OMDERI/The+Key+to+Happiness.png`, categories: ['Stress', 'Resilience', 'Emotional Well-Being'], author: 'Mark Pirtle', published_date: '2025-12-16', status: 'published' },
  { id: '38', slug: 'my-path-back-to-wellness', title: 'My Path Back to Wellness', excerpt: 'Mark shares his personal journey from material-driven success and devastating collapse to inner healing through shadow work and mindfulness at a Tibetan Buddhist Monastery.', content: `<p>Mark shares his personal journey from material-driven success and devastating collapse to inner healing and growth through shadow work and mindfulness. After losing his business and health due to unresolved traumas, Mark found transformation at a Tibetan Buddhist Monastery. Today, he offers guidance to those seeking meaning and healing in the face of life's challenges.</p>`, featured_image: `${SQ}/1765887998052-B45EL59RMRLJXUAVXFX1/my-path-back-to-wellness.png`, categories: ['Stress', 'Resilience', 'Emotional Well-Being'], author: 'Mark Pirtle', published_date: '2025-12-16', status: 'published' },
  { id: '39', slug: 'the-path-less-traveled', title: 'The Path Less Traveled', excerpt: 'Mark reflects on the universal longing for deeper meaning and spiritual connection, transcending material success through shadow work and inner transformation.', content: `<p>Mark reflects on the universal longing for deeper meaning and spiritual connection, transcending material success. By exploring shadow work and inner transformation, Mark invites readers to embark on a spiritual journey, offering guidance through coaching and retreats as a catalyst for profound personal growth.</p>`, featured_image: `${SQ}/1765887286980-1RP5V80QZ6U9S5QD8VJZ/the-path-less-traveled.png`, categories: ['Mindfulness', 'Meditation', 'Spirituality'], author: 'Mark Pirtle', published_date: '2025-12-16', status: 'published' },
  { id: '40', slug: 'scientific-evidence-for-psychedelics-and-health-behavior-change', title: 'Scientific Evidence for Psychedelics and Health Behavior Change', excerpt: 'Exploring emerging scientific evidence supporting the role of psychedelics in promoting health behavior change and transformative plant medicine journeys.', content: `<p>This post explores emerging scientific evidence supporting the role of psychedelics in promoting health behavior change. Mark shares resources for those interested in transformative plant medicine journeys and invites readers to explore the connection between psychedelics, healing, and self-growth.</p>`, featured_image: `${SQ}/1765966601475-1FTHS0JT0KFFPIVDO6WU/scientific-evidence-for-psychedelics-and-health-behavior-change.png`, categories: ['Self Improvement', 'Mental Health'], author: 'Mark Pirtle', published_date: '2025-12-16', status: 'published' },

  // ─────────────────────────────────────────────────────────────
  // offset=1765887044605 — 20 posts
  // ─────────────────────────────────────────────────────────────
  { id: '41', slug: 'lucid-dreams-and-plant-medicine', title: 'Lucid Dreams and Plant Medicine', excerpt: 'Mark shares how both lucid dreaming and plant medicine allow access to the subconscious mind, unlocking insights and healing potential through shadow work.', content: `<p>Discover the profound connection between lucid dreaming and plant medicine journeys. Through a vivid personal story, Mark shares how both practices allow access to the subconscious mind, unlocking insights and healing potential. Learn how facing shadow conflicts in dreams mirrors the transformational power of plant medicine retreats, helping participants release emotional burdens and reclaim their sense of strength and clarity.</p>`, featured_image: `${SQ}/1765883097011-SPR3KTUCMD97YWOZHH4R/lucid-dreams-and-plant-medicine.png`, categories: [], author: 'Mark Pirtle', published_date: '2025-12-16', status: 'published' },
  { id: '42', slug: 'integrating-internal-family-systems-therapy-and-shadow-work', title: 'Integrating Internal Family Systems Therapy and Shadow Work', excerpt: 'A recap of the "Trauma School" retreat—the second in the year-long Change Your Story, Change Your Life series—focused on resolving trauma in the present moment.', content: `<p>Mark guided five courageous participants through "Trauma School," the second retreat in the transformative year-long series, Change Your Story, Change Your Life. This retreat focused on resolving trauma in the present moment, a cornerstone of lasting emotional healing. Modeled after his PBS documentary, <em>Is Your Story Making You Sick?</em>, the series continues with shadow work and perspectives retreats. <a href="/contact">Applications are open—reach out to learn more.</a></p>`, featured_image: `${SQ}/1765882643589-C0YAEFINCYMX5VFX6DL4/integrating-internal-family-systems-therapy-and-shadow-work.png`, categories: ['Self Improvement', 'Mental Health'], author: 'Mark Pirtle', published_date: '2025-12-16', status: 'published' },
  { id: '43', slug: 'bad-for-business-defense-mechanisms-spotting-them-in-daily-life', title: 'Transform Your Life with the Change Your Story Retreat Series Update', excerpt: 'Three common defense mechanisms—denial, rationalization, and projection—are explored, with red flags that indicate overreliance and how shadow work can transform them.', content: `<p>This newsletter explores three common defense mechanisms—denial, rationalization, and projection—and how they manifest in everyday life. It explains how these mechanisms can hinder personal growth if overused and provides red flags that indicate overreliance. The newsletter also highlights the importance of shadow work in recognizing and transforming these unconscious behaviors.</p>`, featured_image: `${SQ}/1765882131654-6WUS9IK5FHHDH9R097TU/bad-for-business-defense-mechanisms-spotting-them-in-daily-life.png`, categories: ['Business', 'Leadership Development'], author: 'Mark Pirtle', published_date: '2025-12-16', status: 'published' },
  { id: '44', slug: 'empowering-your-child-the-role-of-parental-guidance-and-shadow-work', title: 'Empowering Your Child: The Role of Parental Guidance and Shadow Work', excerpt: 'Discover how shadow work and parental guidance can help your child navigate challenges, cultivate independence, and build resilience.', content: `<p>Discover how shadow work and parental guidance can help your child navigate challenges, cultivate independence, and build resilience. Mark explores how parents' own inner work directly shapes their ability to guide children with clarity and compassion.</p>`, featured_image: `${SQ}/d0126434-befa-4c5f-9955-49e390311e8f/empowering-your-child-the-role-of-parental-guidance-and-shadow-work.png`, categories: ['Parenting', 'Family', 'Relationships'], author: 'Mark Pirtle', published_date: '2025-12-16', status: 'published' },
  { id: '45', slug: 'the-critical-role-of-shadow-work-in-leadership', title: 'The Critical Role of Shadow Work in Leadership', excerpt: 'Engaging in shadow work is crucial for business leaders—it helps them understand and manage their unconscious motivations, impacting decision-making and leadership style.', content: `<p>Engaging in shadow work is crucial for business leaders. It helps them understand and manage their unconscious motivations, directly impacting their decision-making, relationships, and leadership style. When leaders do their inner work, teams and organizations transform alongside them.</p>`, featured_image: `${SQ}/1765882882482-8N2NJH817X89PQ94OOSG/the-critical-role-of-shadow-work-in-leadership.png`, categories: ['Business', 'Leadership Development'], author: 'Mark Pirtle', published_date: '2025-12-16', status: 'published' },
  { id: '46', slug: 'understanding-the-drama-triangle-in-personality-disorders', title: 'Understanding the Drama Triangle in Personality Disorders', excerpt: 'Dr. Keith Witt\'s drama triangle sheds light on personality disorders and distinguishes between everyday neuroses and more severe, destructive behaviors.', content: `<p>Dive into Dr. Keith Witt's drama triangle and learn how understanding these dynamics can shed light on personality disorders, distinguishing between everyday neuroses and more severe, destructive behaviors. Shadow work provides a path toward stepping out of the triangle entirely.</p>`, featured_image: `${SQ}/1765876689755-T2PT9V6UP47H2M91HR61/understanding-the-drama-triangle-in-personality-disorders.png`, categories: ['Self Improvement', 'Mental Health'], author: 'Mark Pirtle', published_date: '2025-12-16', status: 'published' },
  { id: '47', slug: 'the-role-of-growth-mindset-in-raising-anti-fragile-kids', title: 'The Role of Growth Mindset in Raising Anti-Fragile Kids', excerpt: 'Cultivating a growth mindset in children not only enhances resilience but also prepares them for life\'s challenges through a focus on effort over results.', content: `<p>Explore how cultivating a growth mindset in children not only enhances resilience but also prepares them for life's challenges through a focus on effort over results. Mark weaves in shadow work principles to show how parents can model the growth mindset they wish to instill.</p>`, featured_image: `${SQ}/1765876000163-0HTOXK3UK6MQU21BNM4A/the-role-of-growth-mindset-in-raising-anti-fragile-kids.png`, categories: ['Parenting', 'Family', 'Relationships'], author: 'Mark Pirtle', published_date: '2025-12-16', status: 'published' },
  { id: '48', slug: 'transforming-lives-through-shadow-work-and-recovery', title: 'Transforming Lives Through Shadow Work and Recovery', excerpt: 'A client battled addiction, found success in journalism, and later faced shame and isolation. A shadow work retreat helped him begin to heal and lead more authentically.', content: `<p>This post explores the journey of a client who battled addiction, found success in investigative journalism, and eventually faced the challenges of shame and isolation. Through a retreat focused on shadow work, the client began to confront and integrate the hidden aspects of himself, leading to deeper healing and personal growth.</p>`, featured_image: `${SQ}/1765879505838-V805JYCS1XH0CUEJ96UT/transforming-lives-through-shadow-work-and-recovery.png`, categories: ['Stress', 'Resilience', 'Emotional Well-Being'], author: 'Mark Pirtle', published_date: '2025-12-15', status: 'published' },
  { id: '49', slug: 'aligning-intentions-with-shadow-work-for-personal-growth-and-transformation', title: 'Aligning Intentions with Shadow Work for Personal Growth and Transformation', excerpt: 'Explore how integrating shadow work with setting intentions can dramatically enhance personal growth and help overcome entrenched behaviors.', content: `<p>Explore how integrating shadow work with setting intentions can dramatically enhance personal growth and help overcome entrenched behaviors. When we shine a light on the unconscious drivers that resist our stated goals, real and lasting change becomes possible.</p>`, featured_image: `${SQ}/1765818807408-NYWDAAR0QDPX3DZ6RLF7/aligning-intentions-with-shadow-work-for-personal-growth-and-transformation.png`, categories: ['Business', 'Leadership Development'], author: 'Mark Pirtle', published_date: '2025-12-15', status: 'published' },
  { id: '50', slug: 'bibliotherapy-as-a-tool-for-deepening-shadow-work', title: 'Bibliotherapy as a Tool for Deepening Shadow Work', excerpt: 'Explore how bibliotherapy can enhance shadow work by providing deep insights into personal challenges and facilitating emotional healing through the power of reading.', content: `<p>Explore how bibliotherapy can enhance shadow work by providing deep insights into personal challenges and facilitating emotional healing through the power of reading. The right book at the right moment can catalyze profound inner shifts.</p>`, featured_image: `${SQ}/1765817407884-LDBYYHMZGRHME4G5E9XK/bibliotherapy-as-a-tool-for-deepening-shadow-work.png`, categories: ['Self Improvement', 'Mental Health'], author: 'Mark Pirtle', published_date: '2025-12-15', status: 'published' },
  { id: '51', slug: 'navigating-political-divides-the-role-of-shadow-work-in-healing-democracy', title: 'Navigating Political Divides: The Role of Shadow Work in Healing Democracy', excerpt: 'Shadow work can help us navigate political divides in America by addressing the assumptions and biases that fuel conflict, promoting a healthier dialogue for democracy.', content: `<p>Discover how shadow work can help us navigate the political divides in America by addressing the assumptions and biases that fuel conflict, promoting a healthier dialogue for democracy. When we examine the shadows driving our political identities, we find more room for genuine conversation.</p>`, featured_image: `${SQ}/1765740231540-SBEANWXDSWEWCPS824WF/navigating-political-divides-the-role-of-shadow-work-in-healing-democracy.png`, categories: ['Society'], author: 'Mark Pirtle', published_date: '2025-12-14', status: 'published' },
  { id: '52', slug: 'embracing-emotional-healing-through-shadow-work', title: 'Embracing Emotional Healing Through Shadow Work', excerpt: 'Shadow work deepens emotional healing by allowing us to face and integrate suppressed emotions, leading to a more fulfilling and emotionally aware life.', content: `<p>Explore how shadow work can deepen emotional healing by allowing us to face and integrate suppressed emotions, leading to a more fulfilling and emotionally aware life. Emotions that have been pushed aside carry energy that, when welcomed, becomes fuel for growth.</p>`, featured_image: `${SQ}/1765739817877-HA3RCFR76TC4VOI79ZLD/embracing-emotional-healing-through-shadow-work.png`, categories: ['Stress', 'Resilience', 'Emotional Well-Being'], author: 'Mark Pirtle', published_date: '2025-12-14', status: 'published' },
  { id: '53', slug: 'the-shadow-of-politics-projection-identification-and-the-political-landscape', title: 'The Shadow of Politics: Projection, Identification, and the Political Landscape', excerpt: 'Shadow work illuminates our political beliefs and behaviors, revealing the psychological dynamics that fuel political division and allegiance.', content: `<p>Discover how shadow work can illuminate our political beliefs and behaviors, revealing the psychological dynamics that fuel political division and allegiance. When we understand projection and identification, we become more capable of engaging across political differences with curiosity rather than contempt.</p>`, featured_image: `${SQ}/1764890922305-5WGU0YVXBZHJ91X2GVBS/the-shadow-of-politics-projection-identification-and-the-political-landscape.png`, categories: ['Society'], author: 'Mark Pirtle', published_date: '2025-12-04', status: 'published' },
  { id: '54', slug: 'integrating-shadow-work-in-internal-family-systems-therapy', title: 'Integrating Shadow Work in Internal Family Systems Therapy', excerpt: 'Learn how Internal Family Systems (IFS) Therapy incorporates shadow work to promote inner harmony and holistic healing.', content: `<p>Learn how Internal Family Systems (IFS) Therapy incorporates shadow work to promote inner harmony and holistic healing. Both approaches share a deep respect for the multiplicity of the psyche and offer compassionate pathways toward integration.</p>`, featured_image: `${SQ}/1764890299892-RU62YLRYJLQZGQNQQMTU/integrating-shadow-work-in-internal-family-systems-therapy.png`, categories: ['Self Improvement', 'Mental Health'], author: 'Mark Pirtle', published_date: '2025-12-04', status: 'published' },
  { id: '55', slug: 'integrating-shadow-work-into-personal-spirituality-a-path-to-wholeness', title: 'Integrating Shadow Work into Personal Spirituality: A Path to Wholeness', excerpt: 'Discover how confronting your shadow self can lead to a life of joy, authenticity, and ethical integrity.', content: `<p>Discover how confronting your shadow self can lead to a life of joy, authenticity, and ethical integrity. When spiritual practice is paired with honest shadow work, the path to wholeness becomes far more direct—and far less bypassed.</p>`, featured_image: `${SQ}/1764890075227-BUL4W57H92RWW1VWWWX8/integrating-shadow-work-into-personal-spirituality-a-path-to-wholeness.png`, categories: ['Mindfulness', 'Meditation', 'Spirituality'], author: 'Mark Pirtle', published_date: '2025-12-04', status: 'published' },
  { id: '56', slug: 'harnessing-shadow-work-for-intentional-living-aligning-actions-with-values', title: 'Harnessing Shadow Work for Intentional Living: Aligning Actions with Values', excerpt: 'Explore the profound impact of shadow work on identifying and transforming underlying impulses for a more connected and ethical life.', content: `<p>Explore the profound impact of shadow work on identifying and transforming underlying impulses for a more connected and ethical life. When our actions finally align with our stated values, the energy that was previously spent on internal conflict becomes available for genuine living.</p>`, featured_image: `${SQ}/1764889841758-5CQ4TH8M974U65QMP3XS/harnessing-shadow-work-for-intentional-living-aligning-actions-with-values.png`, categories: ['Business', 'Leadership Development'], author: 'Mark Pirtle', published_date: '2025-12-04', status: 'published' },
  { id: '57', slug: 'embracing-wholeness-the-transformative-power-of-shadow-work', title: 'Embracing Wholeness: The Transformative Power of Shadow Work', excerpt: 'Embrace wholeness by acknowledging all parts of yourself, including the shadow. Use shadow work to discover, heal, and transform toward a more authentic life.', content: `<p>Embrace wholeness by acknowledging all parts of yourself, including the shadow. Use shadow work to discover, heal, and transform towards a more authentic life. True wholeness isn't the absence of shadow—it's the integration of all that we are.</p>`, featured_image: `${SQ}/1764889609774-P8CC4XN1T59Y2RFGDB23/embracing-wholeness-the-transformative-power-of-shadow-work.png`, categories: ['Business', 'Leadership Development'], author: 'Mark Pirtle', published_date: '2025-12-04', status: 'published' },
  { id: '58', slug: 'shining-light-on-shadows-embracing-defenses-for-personal-growth', title: 'Shining Light on Shadows: Embracing Defenses for Personal Growth', excerpt: 'Learn how shadow work can reveal subconscious patterns and lead to profound personal transformation.', content: `<p>Learn how shadow work can reveal subconscious patterns and lead to profound personal transformation. When we stop fighting our defenses and start getting curious about them, they reveal the deeper needs and wounds they were designed to protect.</p>`, featured_image: `${SQ}/1764889221105-UL9K6MJIISYA31YO2LJ2/shining-light-on-shadows-embracing-defenses-for-personal-growth.png`, categories: ['Stress', 'Resilience', 'Emotional Well-Being'], author: 'Mark Pirtle', published_date: '2025-12-04', status: 'published' },
  { id: '59', slug: 'illuminating-the-shadow-self-and-breaking-free', title: 'Illuminating the Shadow Self and Breaking Free from Stuck Patterns with Plant Medicine', excerpt: 'Experience the liberating effects of shadow work and personal growth through the use of psychedelic plant medicines.', content: `<p>Experience the liberating effects of shadow work and personal growth through the use of psychedelic plant medicines. When combined with proper preparation and integration, plant medicine can illuminate the shadow self in ways that accelerate years of conventional inner work.</p>`, featured_image: `${SQ}/1764888990813-TJOB6G1JJJ4H1NMOEMSP/illuminating-the-shadow-self-and-breaking-free.png`, categories: ['Self Improvement', 'Mental Health'], author: 'Mark Pirtle', published_date: '2025-12-04', status: 'published' },
  { id: '60', slug: 'the-role-of-shadow-work-in-self-regulation', title: 'The Role of Shadow Work in Self-Regulation', excerpt: 'Discover strategies for emotional mastery through shadow work, turning challenges into opportunities for growth.', content: `<p>Discover strategies for emotional mastery through shadow work, turning challenges into opportunities for growth. Self-regulation isn't about suppressing emotions—it's about understanding their roots well enough to respond rather than react.</p>`, featured_image: `${SQ}/1764888680491-D518WBL57NGE40PX4A6H/the-role-of-shadow-work-in-self-regulation.png`, categories: ['Stress', 'Resilience', 'Emotional Well-Being'], author: 'Mark Pirtle', published_date: '2025-12-04', status: 'published' },

  // ─────────────────────────────────────────────────────────────
  // offset=1764888829808 — 20 posts
  // ─────────────────────────────────────────────────────────────
  { id: '61', slug: 'embracing-challenges-the-interplay-of-shadow-work-rhksm', title: 'The Power of Cognitive Reappraisal in Shadow Work', excerpt: 'Discover the transformative power of combining cognitive reappraisal and shadow work to enhance emotional self-regulation and foster genuine personal growth.', content: `<p>Discover the transformative power of combining cognitive reappraisal and shadow work to enhance emotional self-regulation and foster genuine personal growth. When we learn to reframe our experience without bypassing its emotional truth, we unlock a new level of resilience.</p>`, featured_image: `${SQ}/1764888269167-B4WH9YFFN4NB3PXM4K9D/the-power-of-cognitive-reappraisal-in-shadow-work.png`, categories: ['Self Improvement', 'Mental Health'], author: 'Mark Pirtle', published_date: '2025-12-04', status: 'published' },
  { id: '62', slug: 'embracing-challenges-the-interplay-of-shadow-work', title: 'Embracing Challenges: The Interplay of Shadow Work and Distress Tolerance', excerpt: 'Boost your emotional resilience as you delve into shadow work and distress tolerance techniques.', content: `<p>Boost your emotional resilience as you delve into shadow work and distress tolerance techniques with Dr. Mark Pirtle. Learning to tolerate distress without acting it out or shutting down is itself a profound form of shadow work.</p>`, featured_image: `${SQ}/1764887653972-CXPWIRK6NHECX1K8LGZF/embracing-challenges-the-interplay-of-shadow-work.png`, categories: ['Stress', 'Resilience', 'Emotional Well-Being'], author: 'Mark Pirtle', published_date: '2025-12-04', status: 'published' },
  { id: '63', slug: 'self-awareness-mindfulness-and-the-role-of-shadow-work', title: 'Self-Awareness, Mindfulness, and the Role of Shadow Work', excerpt: 'Uncover the transformative power of integrating self-awareness, mindfulness, and shadow work to master emotional regulation and inner growth.', content: `<p>Uncover the transformative power of integrating self-awareness, mindfulness, and shadow work to master emotional regulation and inner growth. These three disciplines reinforce each other: mindfulness reveals, self-awareness interprets, and shadow work integrates.</p>`, featured_image: `${SQ}/1764887405327-LLH31TO3ETN3C5GM9LOC/self-awareness-mindfulness-and-the-role-of-shadow-work.png`, categories: ['Parenting', 'Family', 'Relationships'], author: 'Mark Pirtle', published_date: '2025-12-04', status: 'published' },
  { id: '64', slug: 'building-emotional-resilience', title: 'Building Emotional Resilience: The Role of Shadow Work in Enhancing Distress Tolerance', excerpt: 'Discover effective strategies for managing challenging situations by embracing shadow work techniques.', content: `<p>Discover effective strategies for managing challenging situations by embracing shadow work techniques. Emotional resilience isn't about being unaffected—it's about being able to move through difficulty without losing your center.</p>`, featured_image: `${SQ}/1764887071184-B2PEXVIO7RA5HBFFHEC6/building-emotional-resilience.png`, categories: ['Stress', 'Resilience', 'Emotional Well-Being'], author: 'Mark Pirtle', published_date: '2025-12-04', status: 'published' },
  { id: '65', slug: 'healing-stress-illness-with-shadow-work-hr2kc', title: 'Bibliotherapy: Reading Your Way Back to Wellness', excerpt: 'Explore how bibliotherapy—therapeutic reading—can improve mental health, enhance self-awareness, and promote personal growth.', content: `<p>Explore how bibliotherapy, or therapeutic reading, can improve mental health, enhance self-awareness, and promote personal growth. Also, learn how to play the 'What's Next?' game for guided reading that deepens your shadow work practice.</p>`, featured_image: `${SQ}/1764886511491-WJL1KNU12MZ0I5MZ43RG/bibliotherapy-reading-your-way-back-to-wellness.png`, categories: ['Self Improvement', 'Mental Health'], author: 'Mark Pirtle', published_date: '2025-12-04', status: 'published' },
  { id: '66', slug: 'healing-stress-illness-with-shadow-work', title: 'Healing Stress Illness with Shadow Work', excerpt: 'Shadow work provides profound insights into stress-related illnesses, offering pathways to healing and resilience by addressing the psychological shadows that influence our health.', content: `<p>Discover how shadow work can provide profound insights into stress-related illnesses, offering pathways to healing and resilience by addressing the psychological shadows that influence our health. The body often speaks what the mind refuses to acknowledge.</p>`, featured_image: `${SQ}/1764885957814-21HKQ1KLXNO7B8UU2MPM/healing-stress-illness-with-shadow-work.png`, categories: ['Stress', 'Resilience', 'Emotional Well-Being'], author: 'Mark Pirtle', published_date: '2025-12-04', status: 'published' },
  { id: '67', slug: 'becoming-the-one-how-shadow-work-fosters-deep-responsibility', title: "Becoming 'The One': How Shadow Work Fosters Deep Responsibility", excerpt: 'Explore the transformative power of shadow work, embrace your inner warrior, take responsibility for everything in your life, and set yourself free.', content: `<p>Explore the transformative power of shadow work, embrace your inner warrior, take responsibility for everything in your life, and set yourself free. True freedom begins when we stop waiting for circumstances to change and start changing ourselves.</p>`, featured_image: `${SQ}/1764885425691-LFH6Y5FQCVQZ5IWOR8J4/becoming-the-one-how-shadow-work-fosters-deep-responsibility.png`, categories: ['Stress', 'Resilience', 'Emotional Well-Being'], author: 'Mark Pirtle', published_date: '2025-12-04', status: 'published' },
  { id: '68', slug: 'navigating-lifes-crossroads-the-role-of-shadow-work-in-making-authentic-choices', title: "Navigating Life's Crossroads: The Role of Shadow Work in Making Authentic Choices", excerpt: 'Uncover the power of shadow work and how it sheds light on your deepest desires and motivations to help you make decisions more aligned with your authentic self.', content: `<p>Uncover the power of shadow work and how it sheds light on your deepest desires and motivations to help you make decisions more aligned with your authentic self. When we understand what's really driving our choices, we can finally choose consciously.</p>`, featured_image: `${SQ}/1764884677897-UBY9F3OYJ2J0QFJN00R9/navigating-lifes-crossroads-the-role-of-shadow-work-in-making-authentic-choices.png`, categories: ['Business', 'Leadership Development'], author: 'Mark Pirtle', published_date: '2025-12-04', status: 'published' },
  { id: '69', slug: 'spirituality-and-shadow-work-a-path-to-inner-harmony', title: 'Spirituality and Shadow Work: A Path to Inner Harmony', excerpt: 'Discover how shadow work complements spirituality to deepen personal growth and foster a profound connection with the higher self.', content: `<p>Discover how shadow work complements spirituality to deepen personal growth. Learn how integrating both can enhance your resilience against life's stresses and foster a profound connection with the higher self. Spirituality without shadow work can easily become bypass; shadow work without spirituality can lose its sense of meaning.</p>`, featured_image: `${SQ}/1764884183003-S1W96SP7LM09B3OYQ5EK/spirituality-and-shadow-work-a-path-to-inner-harmony.png`, categories: ['Mindfulness', 'Meditation', 'Spirituality'], author: 'Mark Pirtle', published_date: '2025-12-04', status: 'published' },
  { id: '70', slug: 'enhancing-connection-through-shadow-work-the-power-of-attunement', title: 'Enhancing Connection Through Shadow Work: The Power of Attunement', excerpt: 'Explore the transformative power of shadow work to enrich emotional connections and foster genuine relationships through the practice of attunement.', content: `<p>Explore the transformative power of shadow work to enrich emotional connections and foster genuine relationships. Attunement—the practice of sensing into another person's inner world with genuine care—becomes far more accessible once we've done the work of knowing our own.</p>`, featured_image: `${SQ}/1764883684514-2DUDEOL5NL7AA2OP8IN5/enhancing-connection-through-shadow-work-the-power-of-attunement.png`, categories: ['Parenting', 'Family', 'Relationships'], author: 'Mark Pirtle', published_date: '2025-12-04', status: 'published' },
  { id: '71', slug: 'balancing-intelligence-with-wisdom-the-role-of-shadow-work-in-responsible-livingexploring-friendships-through-the-lens-of-shadow-work-semex', title: 'Balancing Intelligence with Wisdom: The Role of Shadow Work in Responsible Living', excerpt: 'Discover the transformative power of shadow work in harmonizing intellect with wisdom and compassion.', content: `<p>Discover the transformative power of shadow work in harmonizing intellect with wisdom and compassion. Intelligence without self-awareness can become a tool of rationalization; shadow work ensures that our intellectual gifts serve our deepest values.</p>`, featured_image: `${SQ}/1764883229706-5RPRC8DR551IZWSA8NOM/balancing-intelligence-with-wisdom-the-role-of-shadow-work-in-responsible-living.png`, categories: ['Mindfulness', 'Meditation', 'Spirituality'], author: 'Mark Pirtle', published_date: '2025-12-04', status: 'published' },
  { id: '72', slug: 'exploring-friendships-through-the-lens-of-shadow-work', title: 'Exploring Friendships Through the Lens of Shadow Work', excerpt: 'Discover how shadow work can revolutionize your approach to friendships, leading to deeper connections and greater fulfillment.', content: `<p>Discover how shadow work can revolutionize your approach to friendships, leading to deeper connections and greater fulfillment. Our friends often mirror our own unexamined qualities—both the ones we admire and the ones we'd rather not claim.</p>`, featured_image: `${SQ}/1764882942618-KBD5BEBK9HI7OLX7VE0F/exploring-friendships-through-the-lens-of-shadow-work.png`, categories: ['Parenting', 'Family', 'Relationships'], author: 'Mark Pirtle', published_date: '2025-12-04', status: 'published' },
  { id: '73', slug: 'working-skillfully-with-pain-how-shadow-work-facilitates-deep-healing', title: 'Working Skillfully with Pain: How Shadow Work Facilitates Deep Healing', excerpt: 'Shadow work can transform your understanding and experience of pain, turning it into a powerful catalyst for emotional and physical healing.', content: `<p>Explore how shadow work can transform your understanding and experience of pain, turning it into a powerful catalyst for emotional and physical healing. Pain that is met with awareness rather than avoidance has an extraordinary capacity to reveal what needs to change.</p>`, featured_image: `${SQ}/1764801958645-Z6Z2K2ZT71I668XD6DRY/working-skillfully-with-pain-how-shadow-work-facilitates-deep-healing.png`, categories: ['Stress', 'Resilience', 'Emotional Well-Being'], author: 'Mark Pirtle', published_date: '2025-12-03', status: 'published' },
  { id: '74', slug: 'shadow-work-and-implicit-memories-healing-from-childhood-trauma', title: 'Shadow Work and Implicit Memories: Healing from Childhood Trauma', excerpt: 'Discover the power of shadow work in healing childhood trauma and integrating implicit memories that shape our unconscious reactions.', content: `<p>Discover the power of shadow work in healing childhood trauma and integrating implicit memories. These early body-level memories operate below conscious awareness, shaping our reactions and relationships until we bring them into the light.</p>`, featured_image: `${SQ}/1764801691236-6XJP00Z8UJDRNQPZV61H/shadow-work-and-implicit-memories-healing-from-childhood-trauma.png`, categories: ['Stress', 'Resilience', 'Emotional Well-Being'], author: 'Mark Pirtle', published_date: '2025-12-03', status: 'published' },
  { id: '75', slug: 'integrating-polyvagal-theory-with-shadow-work-for-deeper-trauma-healing', title: 'Integrating Polyvagal Theory with Shadow Work for Deeper Trauma Healing', excerpt: 'Discover the symbiotic relationship between Polyvagal Theory and shadow work, offering a roadmap for navigating trauma with compassion and understanding.', content: `<p>Discover the symbiotic relationship between Polyvagal Theory and shadow work, offering a roadmap for navigating trauma with compassion and understanding. Polyvagal Theory explains the body's response; shadow work illuminates the story carried within that response.</p>`, featured_image: `${SQ}/1764801231612-31BRY4I9BN85ITV40B21/integrating-polyvagal-theory-with-shadow-work-for-deeper-trauma-healing.png`, categories: ['Stress', 'Resilience', 'Emotional Well-Being'], author: 'Mark Pirtle', published_date: '2025-12-03', status: 'published' },
  { id: '76', slug: 'calming-the-waters-enhancing-relationships-through-emotional-regulation-and-shadow-work', title: 'Calming the Waters: Enhancing Relationships Through Emotional Regulation and Shadow Work', excerpt: 'Use the power of shadow work and emotional regulation to improve your relationships and navigate conflict with greater presence.', content: `<p>Use the power of shadow work and emotional regulation to improve your relationships. When we can remain regulated in the face of another person's reactivity—and our own—we create the conditions for genuine connection and repair.</p>`, featured_image: `${SQ}/1764800916085-9052EKO3TDP75R88OG9M/calming-the-waters-enhancing-relationships-through-emotional-regulation-and-shadow-work.png`, categories: ['Parenting', 'Family', 'Relationships'], author: 'Mark Pirtle', published_date: '2025-12-03', status: 'published' },
  { id: '77', slug: 'attachment-styles-understanding-early-bonds-and-their-shadow-effects', title: 'Attachment Styles: Understanding Early Bonds and Their Shadow Effects', excerpt: 'Explore the foundational concepts of Attachment Theory and how early interactions with caregivers shape our future relationships and shadow patterns.', content: `<p>Explore the foundational concepts of Attachment Theory and how early interactions with caregivers shape our future relationships. Discover your attachment style and learn strategies for healing attachment wounds through shadow work and conscious relationship.</p>`, featured_image: `${SQ}/1764800437837-CW2N9CCE43Q93GTVF23K/attachment-styles-understanding-early-bonds-and-their-shadow-effects.png`, categories: ['Stress', 'Resilience', 'Emotional Well-Being'], author: 'Mark Pirtle', published_date: '2025-12-03', status: 'published' },
  { id: '78', slug: 'healing-the-wounds-of-attachment-integrating-shadow-work-for-deeper-connections', title: 'Healing the Wounds of Attachment: Integrating Shadow Work for Deeper Connections', excerpt: 'Discover the transformative role of shadow work in healing attachment wounds and leading to healthier, more secure relationships.', content: `<p>Discover the transformative role of shadow work in healing attachment wounds. Learn how integrating shadow work can help you overcome past emotional injuries and lead to healthier, more secure relationships where both parties can truly be seen.</p>`, featured_image: `${SQ}/1764799653957-E4YVWALXILTDHFDR1JTO/healing-the-wounds-of-attachment-integrating-shadow-work-for-deeper-connections.png`, categories: ['Stress', 'Resilience', 'Emotional Well-Being'], author: 'Mark Pirtle', published_date: '2025-12-03', status: 'published' },
  { id: '79', slug: 'navigating-spiritual-bypassing-with-shadow-work', title: 'Navigating Spiritual Bypassing with Shadow Work', excerpt: 'Uncover the pitfalls of spiritual bypassing and learn how integrating shadow work can lead to genuine emotional healing and spiritual growth.', content: `<p>Uncover the pitfalls of spiritual bypassing and learn how integrating shadow work can lead to genuine emotional healing and spiritual growth. Spiritual bypassing uses spiritual ideas and practices to sidestep difficult psychological work—shadow work is the antidote.</p>`, featured_image: `${SQ}/1764799235130-F7D1WXLBFV3S1K2WK43G/navigating-spiritual-bypassing-with-shadow-work.png`, categories: ['Mindfulness', 'Meditation', 'Spirituality'], author: 'Mark Pirtle', published_date: '2025-12-03', status: 'published' },
  { id: '80', slug: 'challenging-confirmation-bias-embracing-shadow-work-for-open-mindedness', title: 'Challenging Confirmation Bias: Embracing Shadow Work for Open-mindedness', excerpt: 'Discover how shadow work can help you overcome confirmation bias, open your mind to new perspectives, and catalyze your personal growth.', content: `<p>Discover how shadow work can help you overcome confirmation bias, open your mind to new perspectives, and catalyze your personal growth. Confirmation bias is one of the shadow's most effective camouflage strategies—we see what we expect, and miss everything else.</p>`, featured_image: `${SQ}/1764779852586-ZYPPUL859SSCQ8FOIIW3/challenging-confirmation-bias-embracing-shadow-work-for-open-mindedness.png`, categories: ['Self Improvement', 'Mental Health'], author: 'Mark Pirtle', published_date: '2025-12-03', status: 'published' },

  // ─────────────────────────────────────────────────────────────
  // offset=1764780042070 — 16 posts
  // ─────────────────────────────────────────────────────────────
  { id: '81', slug: 'being-your-own-best-friend-through-shadow-work', title: 'Being Your Own Best Friend Through Shadow Work', excerpt: 'Explore the transformative impact of shadow work on your journey to becoming your own best friend—embracing your true self with kindness and understanding.', content: `<p>Explore the transformative impact of shadow work on your journey to becoming your own best friend. Learn how to embrace your true self with kindness and understanding, and how the same compassion you might offer a close friend can be turned inward to catalyze real healing.</p>`, featured_image: `${SQ}/1764779439458-5P43ZESQH1IUTKQNSLO4/being-your-own-best-friend-through-shadow-work.png`, categories: ['Self Improvement', 'Mental Health'], author: 'Mark Pirtle', published_date: '2025-12-03', status: 'published' },
  { id: '82', slug: 'illuminating-truth-how-shadow-work-enhances-clarity-and-decision-making', title: 'Illuminating Truth: How Shadow Work Enhances Clarity and Decision-Making', excerpt: 'Integrating shadow work into our pursuit of truth offers profound insights and guides better decision-making across parenting, politics, and professional life.', content: `<p>Discover how integrating shadow work into our pursuit of truth can offer profound insights and guide better decision-making across various aspects of life, from parenting to politics. When we stop projecting our unexamined fears and desires onto situations, we see them far more clearly.</p>`, featured_image: `${SQ}/1764779184025-69E23KXQR8964CMCTK0P/illuminating-truth-how-shadow-work-enhances-clarity-and-decision-making.png`, categories: ['Business', 'Leadership Development'], author: 'Mark Pirtle', published_date: '2025-12-03', status: 'published' },
  { id: '83', slug: 'reflecting-truth-how-shadow-work-fosters-awareness-and-authenticity', title: 'Reflecting Truth: How Shadow Work Fosters Awareness and Authenticity', excerpt: 'Shadow work and truth interact to deepen self-awareness and foster a more authentic understanding of ourselves, guiding personal and ethical development.', content: `<p>Explore how shadow work and truth interact to deepen self-awareness and foster a more authentic understanding of ourselves, guiding personal and ethical development. Truth-telling begins with ourselves—shadow work makes that honesty possible.</p>`, featured_image: `${SQ}/1764692727838-GN5P6YNC6E3F6CKXBBZX/reflecting-truth-how-shadow-work-fosters-awareness-and-authenticity.png`, categories: ['Self Improvement', 'Mental Health'], author: 'Mark Pirtle', published_date: '2025-12-02', status: 'published' },
  { id: '84', slug: 'upholding-truth-shadow-works-role-in-fostering-responsible-citizenship', title: "Upholding Truth: Shadow Work's Role in Fostering Responsible Citizenship", excerpt: 'Integrating shadow work with our commitment to truth enhances societal decision-making and fosters a more responsible and unified community.', content: `<p>Explore how integrating shadow work with our commitment to truth enhances societal decision-making and fosters a more responsible and unified community. A citizenry willing to examine its own shadow is one capable of genuine self-governance.</p>`, featured_image: `${SQ}/1764692313230-CTZHTUTYZO7CAWVWADK1/upholding-truth-shadow-works-role-in-fostering-responsible-citizenship.png`, categories: ['Society'], author: 'Mark Pirtle', published_date: '2025-12-02', status: 'published' },
  { id: '85', slug: 'cultivating-authentic-connections-the-role-of-truth-and-shadow-work-in-relationships', title: 'Cultivating Authentic Connections: The Role of Truth and Shadow Work in Relationships', excerpt: 'Truth and shadow work are pivotal in building stronger, more authentic relationships—deepening trust and emotional intimacy.', content: `<p>Explore how truth and shadow work are pivotal in building stronger, more authentic relationships. Learn how embracing honesty and confronting personal shadows can deepen trust and emotional intimacy in all your relationships.</p>`, featured_image: `${SQ}/1764690935135-LNC4Q2J7QA1OBK1T0JIZ/cultivating-authentic-connections-the-role-of-truth-and-shadow-work-in-relationships.png`, categories: ['Parenting', 'Family', 'Relationships'], author: 'Mark Pirtle', published_date: '2025-12-02', status: 'published' },
  { id: '86', slug: 'navigating-change-integrating-shadow-work-for-deeper-transformation-dr-mark-pirtle', title: 'Navigating Change: Integrating Shadow Work for Deeper Transformation', excerpt: 'Discover how mindfulness and meditation can foster Skillful Awareness—a deeper form of mindfulness that promotes significant personal change and growth.', content: `<p>Discover how mindfulness and meditation can foster 'Skillful Awareness,' a deeper form of mindfulness that promotes significant personal change and growth. Shadow work, integrated into this practice, transforms superficial change into lasting transformation.</p>`, featured_image: `${SQ}/1764690487252-EYKF4SPO7NPDIWC7MDDR/navigating-change-integrating-shadow-work-for-deeper-transformation.png`, categories: ['Self Improvement', 'Mental Health'], author: 'Mark Pirtle', published_date: '2025-12-02', status: 'published' },
  { id: '87', slug: 'cultivating-skillful-awareness-harnessing-mindfulness-and-meditation-for-personal-change', title: 'Cultivating Skillful Awareness: Harnessing Mindfulness and Meditation for Personal Change', excerpt: 'Discover how mindfulness and meditation can foster Skillful Awareness—a deeper form of mindfulness that promotes significant personal change.', content: `<p>Discover how mindfulness and meditation can foster 'Skillful Awareness,' a deeper form of mindfulness that promotes significant personal change and growth. Mark explains the three pillars of his SkillfullyAware system and how they work together to rewire habitual patterns.</p>`, featured_image: `${SQ}/1764689103361-LON6TOFA4ELW57DMBZRJ/cultivating-skillful-awareness-harnessing-mindfulness-and-meditation-for-personal-change.png`, categories: ['Mindfulness', 'Meditation', 'Spirituality'], author: 'Mark Pirtle', published_date: '2025-12-02', status: 'published' },
  { id: '88', slug: 'harnessing-neuroscience-and-shadow-work-for-change', title: 'Harnessing Neuroscience and Shadow Work for Change', excerpt: 'Explore how neuroscience and shadow work interplay in setting realistic goals and recognizing small victories, crucial for enduring personal change.', content: `<p>Explore how neuroscience and shadow work interplay in setting realistic goals and recognizing small victories, crucial for enduring personal change. Understanding how the brain resists change—and how shadow work circumvents that resistance—makes transformation far more efficient.</p>`, featured_image: `${SQ}/1764688399027-J2BCVTLTQ4X25LS2Z0JD/harnessing-neuroscience-and-shadow-work-for-change.png`, categories: ['Self Improvement', 'Mental Health'], author: 'Mark Pirtle', published_date: '2025-12-02', status: 'published' },
  { id: '89', slug: 'cultivating-change-shadow-work-and-the-impact-of-environment-and-social-support', title: 'Cultivating Change: Shadow Work and the Impact of Environment and Social Support', excerpt: 'Explore how environmental settings and social support, combined with shadow work, can facilitate profound personal changes.', content: `<p>Explore how environmental settings and social support, combined with shadow work, can facilitate profound personal changes. Discover strategies to leverage these external influences effectively while addressing internal shadows for holistic growth.</p>`, featured_image: `${SQ}/1764684181518-1E1EW07HM14VAMFV87FR/cultivating-change-shadow-work-and-the-impact-of-environment-and-social-support.png`, categories: ['Parenting', 'Family', 'Relationships'], author: 'Mark Pirtle', published_date: '2025-12-02', status: 'published' },
  { id: '90', slug: 'beyond-quick-fixes-embracing-shadow-work-for-lasting-change', title: 'Beyond Quick Fixes: Embracing Shadow Work for Lasting Change', excerpt: 'Move beyond the temporary allure of quick fixes by integrating shadow work into your approach to life\'s challenges, fostering deeper self-awareness and lasting solutions.', content: `<p>Explore how to move beyond the temporary allure of quick fixes by integrating shadow work into your approach to life's challenges, fostering deeper self-awareness and lasting solutions. Quick fixes address symptoms; shadow work addresses causes.</p>`, featured_image: `${SQ}/1764682176395-398B6L9DI5FMTQPG2K5H/beyond-quick-fixes-embracing-shadow-work-for-lasting-change.png`, categories: ['Self Improvement', 'Mental Health'], author: 'Mark Pirtle', published_date: '2025-12-02', status: 'published' },
  { id: '91', slug: 'breaking-the-cycle-from-habituation-to-healing-through-shadow-work-and-mindfulness', title: 'Breaking the Cycle: From Habituation to Healing Through Shadow Work and Mindfulness', excerpt: 'Escape the downward spiral of habituation by embracing a SkillfullyAware mindset, cultivating healthier habits, and choosing genuine self-improvement.', content: `<p>Escape the downward spiral of habituation. Embrace a SkillfullyAware mindset. Cultivate healthier habits. Practice mindfulness and meditation. Break the cycle of quick fixes. Seek support and accountability. Choose genuine self-improvement. Overcome habituation for a resilient, fulfilled life.</p>`, featured_image: `${SQ}/1764681605962-ZO57ZA9TJ44AWT7CE7YD/breaking-the-cycle-from-habituation-to-healing-through-shadow-work-and-mindfulness.png`, categories: ['Self Improvement', 'Mental Health'], author: 'Mark Pirtle', published_date: '2025-12-02', status: 'published' },
  { id: '92', slug: 'overcoming-dependency-the-role-of-shadow-work-in-escaping-the-quick-fix-trap', title: 'Overcoming Dependency: The Role of Shadow Work in Escaping the Quick Fix Trap', excerpt: 'Shadow work can help us overcome dependency on quick fixes, enabling us to develop resilience and emotional intelligence for lasting personal growth.', content: `<p>Explore how shadow work can help us overcome dependency on quick fixes, enabling us to develop resilience and emotional intelligence for lasting personal growth. The quick fix trap is itself a shadow pattern—understanding why we reach for it is the first step out.</p>`, featured_image: `${SQ}/1764681002276-UD3RKHPHJFLDP9KDY2YS/overcoming-dependency-the-role-of-shadow-work-in-escaping-the-quick-fix-trap.png`, categories: ['Self Improvement', 'Mental Health'], author: 'Mark Pirtle', published_date: '2025-12-02', status: 'published' },
  { id: '93', slug: 'embracing-real-solutions-the-power-of-shadow-work-in-authentic-living-dr-mark-pirtle', title: 'Embracing Real Solutions: The Power of Shadow Work in Authentic Living', excerpt: 'Explore the transformative journey from quick fixes to real solutions through shadow work, offering a deeper, more engaged approach to personal growth.', content: `<p>Explore the transformative journey from quick fixes to real solutions through shadow work, offering a deeper, more engaged approach to personal growth and authentic living. Authentic living requires the courage to see ourselves clearly—shadow work makes that possible.</p>`, featured_image: `${SQ}/1764631167843-VWMAEJ60ZY5UE2EMPC1H/embracing-real-solutions-the-power-of-shadow-work-in-authentic-living.png`, categories: ['Mindfulness', 'Meditation', 'Spirituality'], author: 'Mark Pirtle', published_date: '2025-12-01', status: 'published' },
  { id: '94', slug: 'revealing-our-shields-the-role-of-defense-mechanisms-and-shadow-work-in-emotional-health', title: 'Revealing Our Shields: The Role of Defense Mechanisms and Shadow Work in Emotional Health', excerpt: 'Shadow work can illuminate and transform defense mechanisms, enhancing emotional resilience and promoting personal growth.', content: `<p>Explore how shadow work can illuminate and transform defense mechanisms, enhancing emotional resilience and promoting personal growth. Our defenses were built for good reason—shadow work helps us appreciate their purpose while outgrowing their limitations.</p>`, featured_image: `${SQ}/1764630829682-956T2HPZ5UXD2W69SOGO/revealing-our-shields-the-role-of-defense-mechanisms-and-shadow-work-in-emotional-health.png`, categories: ['Stress', 'Resilience', 'Emotional Well-Being'], author: 'Mark Pirtle', published_date: '2025-12-01', status: 'published' },
  { id: '95', slug: 'using-shadow-work-to-mature-our-defenses', title: 'Using Shadow Work to Mature Our Defenses', excerpt: 'Discover the evolving nature of defense mechanisms and how transitioning to healthier defenses fosters emotional maturity and fulfilling relationships.', content: `<p>Discover the evolving nature of defense mechanisms and their impact on personal growth. Explore the developmental changes in lying and regression as coping strategies, and learn how transitioning to healthier defenses fosters emotional maturity and fulfilling relationships.</p>`, featured_image: `${SQ}/1764629602497-5BQ3Y95XYSSM463J146T/using-shadow-work-to-mature-our-defenses.png`, categories: ['Stress', 'Resilience', 'Emotional Well-Being'], author: 'Mark Pirtle', published_date: '2025-12-01', status: 'published' },
  { id: '96', slug: 'the-role-of-shadow-work-in-managing-defense-mechanisms', title: 'The Role of Shadow Work in Managing Defense Mechanisms', excerpt: 'Explore the significant impact of stress on defense mechanisms and discover how integrating shadow work can help manage these responses more healthily.', content: `<p>Explore the significant impact of stress on defense mechanisms and discover how integrating shadow work can help manage these responses more healthily. Under stress, our most primitive defenses take over—shadow work gives us more options.</p>`, featured_image: `${SQ}/1764629086853-I2BPVIFW4C78TRAHCRBN/the-role-of-shadow-work-in-managing-defense-mechanisms.png`, categories: ['Stress', 'Resilience', 'Emotional Well-Being'], author: 'Mark Pirtle', published_date: '2025-12-01', status: 'published' },

  // ─────────────────────────────────────────────────────────────
  // offset=1764780042070 continued + offset=1764626427512
  // ─────────────────────────────────────────────────────────────
  { id: '97', slug: 'the-positive-role-of-mature-defense-mechanisms-in-personal-growth', title: 'The Positive Role of Mature Defense Mechanisms in Personal Growth', excerpt: 'Explore how mature defense mechanisms like humor, sublimation, and altruism can be harnessed to enhance personal growth and improve relationships.', content: `<p>Explore how mature defense mechanisms like humor, sublimation, and altruism can be harnessed to enhance personal growth, improve relationships, and navigate life's challenges more effectively. Not all defenses are problems—some are achievements worth cultivating.</p>`, featured_image: `${SQ}/1764628362035-OPR97CSOJ2JGKG8TCSK3/the-positive-role-of-mature-defense-mechanisms-in-personal-growth.png`, categories: ['Stress', 'Resilience', 'Emotional Well-Being'], author: 'Mark Pirtle', published_date: '2025-12-01', status: 'published' },
  { id: '98', slug: 'personality-disorders-living-with-drama-a-four-part-series', title: 'Personality Disorders: Living with Drama, A Four-Part Series', excerpt: 'Uncover the intricate differences between normal personality traits and personality disorders and explore how shadow work can offer profound insights into managing these complex conditions.', content: `<p>Uncover the intricate differences between normal personality traits and personality disorders and explore how shadow work can offer profound insights into managing these complex conditions. This four-part series provides a compassionate framework for understanding high-drama relational patterns.</p>`, featured_image: `${SQ}/1764627971790-PM41LUGCA6VIG0FVM0FU/personality-disorders-living-with-drama-a-four-part-series.png`, categories: ['Self Improvement', 'Mental Health'], author: 'Mark Pirtle', published_date: '2025-12-01', status: 'published' },
  { id: '99', slug: 'spotlight-on-personality-disorders-what-to-look-for', title: 'Spotlight on Personality Disorders: What to Look For', excerpt: 'Explore how therapy and personal dedication can facilitate transformative changes in individuals with personality disorders.', content: `<p>Explore how therapy and personal dedication can facilitate transformative changes in individuals with personality disorders, highlighting the effectiveness of specific therapeutic approaches. Recognizing the signs early makes compassionate response—rather than reactive engagement—far more possible.</p>`, featured_image: `${SQ}/1764627307370-EDFAY6JH2IW5LMPEO69Q/Spotlight+on+Personality+Disorders+What+to+Look+For.png`, categories: ['Self Improvement', 'Mental Health'], author: 'Mark Pirtle', published_date: '2025-12-01', status: 'published' },
  { id: '100', slug: 'transforming-personality-disorders-the-role-of-therapy-and-personal-effort', title: 'Transforming Personality Disorders: The Role of Therapy and Personal Effort', excerpt: 'Unlock change in individuals with personality disorders through therapy. Explore cognitive-behavioral and dialectical behavior therapy and how to foster healthier relationships.', content: `<p>Unlock change in individuals with personality disorders through therapy. Explore cognitive-behavioral and dialectical behavior therapy. Transform maladaptive patterns over time with dedication and support. Foster healthier relationships by interacting effectively with compassion and clear boundaries.</p>`, featured_image: `${SQ}/1764626446700-8UELD9EKK1NFGJNWUOO2/Transforming+Personality+Disorders-+The+Role+of+Therapy+and+Personal+Effort.png`, categories: ['Self Improvement', 'Mental Health'], author: 'Mark Pirtle', published_date: '2025-12-01', status: 'published' },
  { id: '101', slug: 'mastering-the-dance-integrating-shadow-work-in-relationships-with-personality-disorders', title: 'Mastering the Dance: Integrating Shadow Work in Relationships with Personality Disorders', excerpt: 'Learn how to navigate complex interactions with personality disorders by integrating shadow work, setting boundaries, and seeking professional guidance.', content: `<p>Learn how to navigate complex interactions with personality disorders by integrating shadow work, setting boundaries, and seeking professional guidance for a healthier relational dance. When we understand our own reactive patterns, we become less entangled in the patterns of others.</p>`, featured_image: `${SQ}/1764625906985-ZMSL9HT6PB654VGTWJ6P/dance-header.png`, categories: ['Self Improvement', 'Mental Health'], author: 'Mark Pirtle', published_date: '2025-12-01', status: 'published' },
  { id: '102', slug: 'empowering-resilience-raising-anti-fragile-kids-through-parental-shadow-work', title: 'Empowering Resilience: Raising Anti-Fragile Kids through Parental Shadow Work', excerpt: 'Learn how embracing shadow work as parents can foster resilience and anti-fragility in children, equipping them to thrive amidst life\'s challenges.', content: `<p>Learn how embracing shadow work as parents can foster resilience and anti-fragility in children, equipping them to thrive amidst life's challenges and uncertainties. The most powerful parenting tool is a parent who knows themselves well.</p>`, featured_image: `${SQ}/1764425297654-GS9V6Y5XELH2SV6IRGC7/empowering-resilence.png`, categories: ['Parenting', 'Family', 'Relationships'], author: 'Mark Pirtle', published_date: '2025-11-28', status: 'published' },
];