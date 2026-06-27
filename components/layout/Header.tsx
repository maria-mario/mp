'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Search, LogIn } from 'lucide-react';
import { blogPosts } from '@/lib/blog-data';

// ── Compute top 3 blog categories at module load time ──────────────────────
// (runs once on the server during SSG / on client at import — not in render)
function getTopCategories(n: number) {
  const counts: Record<string, number> = {};
  blogPosts.forEach((p) => p.categories.forEach((c) => { counts[c] = (counts[c] ?? 0) + 1; }));
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, n)
    .map(([name, count]) => ({ name, count }));
}

const topCategories = getTopCategories(3);

// ── Navigation data ─────────────────────────────────────────────────────────
const navigation = [
  {
    name: 'About',
    href: '/about',
    dropdown: [
      { name: 'The Story',   href: '/about#story',   description: "Mark's journey and mission" },
      { name: 'The System',  href: '/about#system',  description: 'SkillfullyAware® methodology' },
      { name: 'The Science', href: '/about#science', description: 'Neuroscience behind the work' },
    ],
  },
  {
    name: 'Forum Retreats',
    href: '/forum-retreats',
  },
  {
    name: 'SAAQ Coaching',
    href: '/consultation',
  },
  {
    name: 'Power Tools',
    href: '/members',
    megaMenu: true,
    columns: [
      {
        heading: 'Online Classes',
        items: [
          { name: 'Project SkillfullyAware',        href: '/power-tools/project-sa', description: 'Online class' },
          { name: 'Overcoming Addictive Behaviors',  href: '/power-tools/addictive',  description: 'Online class' },
        ],
      },
      {
        heading: 'Workbooks',
        items: [
          { name: 'Becoming SkillfullyAware', href: '/power-tools/workbook-sa',  description: 'PDF workbook' },
          { name: 'Raising Awareness',        href: '/power-tools/workbook-ra',  description: 'PDF workbook' },
          { name: 'Chasing Shadow Work',      href: '/power-tools/workbook-csw', description: 'PDF workbook' },
        ],
      },
      {
        heading: 'Meditation Programs',
        items: [
          { name: 'Feel Better Series',    href: '/power-tools/feel-better',   description: 'Audio + PDFs — Series 1' },
          { name: 'Learn To Meditate',     href: '/power-tools/meditate',      description: 'Series 2' },
          { name: 'Comprehensive Program', href: '/power-tools/comprehensive', description: '1+2+ Extras bundle' },
        ],
      },
      {
        heading: 'Media',
        items: [
          {
            name: 'Built This Way',
            href: '/power-tools/book',
            description: 'Book — join the launch team',
          },
          {
            name: 'Is Your Story Making You Sick?',
            href: 'https://tubitv.com/movies/701292/is-your-story-making-you-sick',
            description: 'Watch for free on Tubi TV',
          },
        ],
      },
    ],
  },
  {
    name: 'Blog',
    href: '/blog',
    // "All Articles" + top 3 most-tagged categories, computed above
    dropdown: [
      { name: 'All Articles', href: '/blog', description: 'Thought leadership & insights' },
      ...topCategories.map(({ name, count }) => ({
        name,
        href: `/blog?category=${encodeURIComponent(name)}`,
        description: `${count} article${count !== 1 ? 's' : ''}`,
      })),
    ],
  },
];

// ── Component ───────────────────────────────────────────────────────────────
export function Header() {
  const [pastHero, setPastHero]         = useState(false);
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen]     = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById('hero-sentinel');
    if (!sentinel) {
      const onScroll = () => setPastHero(window.scrollY > window.innerHeight - 80);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
    }
    const obs = new IntersectionObserver(
      ([e]) => setPastHero(!e.isIntersecting),
      { threshold: 0, rootMargin: '-80px 0px 0px 0px' }
    );
    obs.observe(sentinel);
    return () => obs.disconnect();
  }, []);

  const dark = !pastHero;
  const linkColor = dark ? 'rgba(255,255,255,0.85)' : 'rgba(0,0,0,0.72)';
  const linkHover = dark ? '#ffffff' : '#000000';

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        height: '4.5rem',
        backgroundColor: pastHero ? '#ffffff' : '#000000',
        borderBottom: pastHero ? '1px solid rgba(0,0,0,0.07)' : 'none',
        transition: 'background-color 0.35s ease',
      }}>
        <div style={{
          maxWidth: '96rem', margin: '0 auto', padding: '0 2rem',
          height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>

          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0, gap: '0.625rem', height: '100%' }}>
            <div style={{ position: 'relative', height: '2.25rem', width: '2.25rem', flexShrink: 0, alignSelf: 'center' }}>
              <Image src="/logos/logo.webp" alt="Dr. Mark Pirtle" fill className="object-contain" priority />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', lineHeight: 1.2 }}>
              <span style={{ color: dark ? '#ffffff' : '#000000', fontWeight: 800, fontSize: '0.95rem', letterSpacing: '-0.02em', transition: 'color 0.3s' }}>
                Dr. Mark Pirtle
              </span>
              <span style={{ color: dark ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.4)', fontSize: '0.65rem', letterSpacing: '0.06em', transition: 'color 0.3s' }}>
                SkillfullyAware®
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center" style={{ gap: '1.75rem' }}>
            {navigation.map(item => (
              <div
                key={item.name}
                style={{ position: 'relative' }}
                onMouseEnter={() => setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {!item.dropdown && !item.megaMenu ? (
                  <Link href={item.href} style={{
                    display: 'flex', alignItems: 'center',
                    padding: '0.25rem 0', textDecoration: 'none',
                    color: linkColor, fontSize: 'var(--text-small)', fontWeight: 600,
                    fontFamily: 'var(--font-sans)', transition: 'color 0.15s',
                  }}
                    onMouseEnter={e => (e.currentTarget.style.color = linkHover)}
                    onMouseLeave={e => (e.currentTarget.style.color = linkColor)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button style={{
                    display: 'flex', alignItems: 'center', gap: '0.2rem',
                    background: 'none', border: 'none', cursor: 'pointer', padding: '0.25rem 0',
                    color: linkColor, fontSize: 'var(--text-small)', fontWeight: 600,
                    fontFamily: 'var(--font-sans)', transition: 'color 0.15s',
                  }}
                    onMouseEnter={e => (e.currentTarget.style.color = linkHover)}
                    onMouseLeave={e => (e.currentTarget.style.color = linkColor)}
                  >
                    {item.name}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                )}

                {/* Standard dropdown */}
                {item.dropdown && openDropdown === item.name && (
                  <div style={{
                    position: 'absolute', top: '100%',
                    left: '50%', transform: 'translateX(-50%)',
                    paddingTop: '0.75rem',
                    zIndex: 60, minWidth: '16rem',
                  }}>
                    <div style={{
                      backgroundColor: '#ffffff',
                      border: '1px solid rgba(0,0,0,0.07)', borderRadius: '0.875rem',
                      overflow: 'hidden', boxShadow: '0 16px 48px rgba(0,0,0,0.12)',
                    }}>
                      {item.dropdown.map((d, i) => (
                        <Link key={d.name} href={d.href} style={{
                          display: 'block', padding: '0.8rem 1.25rem', textDecoration: 'none',
                          borderTop: i > 0 ? '1px solid rgba(0,0,0,0.05)' : 'none',
                          transition: 'background 0.15s',
                        }}
                          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f9f7f4')}
                          onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                        >
                          <div style={{ color: '#000', fontWeight: 600, fontSize: 'var(--text-small)' }}>{d.name}</div>
                          <div style={{ color: 'var(--color-brand-text-muted)', fontSize: 'var(--text-xs)', marginTop: '0.1rem' }}>{d.description}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Mega menu — Power Tools */}
                {item.megaMenu && openDropdown === item.name && (
                  <div style={{
                    position: 'absolute', top: '100%',
                    left: '50%', transform: 'translateX(-50%)',
                    paddingTop: '0.75rem',
                    zIndex: 60, width: '52rem',
                  }}>
                    <div style={{
                      backgroundColor: '#ffffff',
                      border: '1px solid rgba(0,0,0,0.07)', borderRadius: '0.875rem',
                      overflow: 'hidden', boxShadow: '0 16px 48px rgba(0,0,0,0.12)',
                      display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr',
                    }}>
                      {item.columns!.map((col, ci) => (
                        <div key={col.heading} style={{
                          padding: '1.25rem',
                          borderLeft: ci > 0 ? '1px solid rgba(0,0,0,0.06)' : 'none',
                        }}>
                          <div style={{
                            fontSize: 'var(--text-xs)', fontWeight: 700,
                            letterSpacing: '0.1em', textTransform: 'uppercase',
                            color: 'var(--color-brand-sienna)', marginBottom: '0.75rem',
                          }}>
                            {col.heading}
                          </div>
                          {col.items.map(d => (
                            <Link key={d.name} href={d.href} style={{
                              display: 'block', padding: '0.6rem 0.5rem',
                              borderRadius: '0.375rem', textDecoration: 'none', transition: 'background 0.15s',
                            }}
                              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f9f7f4')}
                              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                            >
                              <div style={{ color: '#000', fontWeight: 600, fontSize: 'var(--text-small)' }}>{d.name}</div>
                              <div style={{ color: 'var(--color-brand-text-muted)', fontSize: 'var(--text-xs)', marginTop: '0.1rem' }}>{d.description}</div>
                            </Link>
                          ))}
                        </div>
                      ))}
                      <div style={{
                        gridColumn: '1 / -1', padding: '0.875rem 1.25rem',
                        backgroundColor: 'var(--color-brand-off-white)',
                        borderTop: '1px solid rgba(0,0,0,0.06)',
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      }}>
                        <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-brand-text-muted)', fontWeight: 500 }}>
                          Members get unlimited access to all tools
                        </span>
                        <Link href="/members" style={{
                          fontSize: 'var(--text-xs)', fontWeight: 700,
                          color: 'var(--color-brand-sienna)', textDecoration: 'none',
                          letterSpacing: '0.04em', textTransform: 'uppercase',
                        }}>Join →</Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right: Search + Log In + Start Here */}
          <div className="hidden lg:flex items-center" style={{ gap: '1rem' }}>
            <button onClick={() => setSearchOpen(o => !o)} aria-label="Search"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.4rem', color: linkColor, transition: 'color 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.color = linkHover)}
              onMouseLeave={e => (e.currentTarget.style.color = linkColor)}
            >
              <Search className="w-5 h-5" />
            </button>

            <Link href="/members/login" style={{
              display: 'flex', alignItems: 'center', gap: '0.35rem',
              color: linkColor, fontSize: 'var(--text-small)', fontWeight: 500,
              textDecoration: 'none', transition: 'color 0.15s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = linkHover)}
              onMouseLeave={e => (e.currentTarget.style.color = linkColor)}
            >
              <LogIn className="w-4 h-4" /> Log In
            </Link>

            <Link href="/start" style={{
              backgroundColor: dark ? '#ffffff' : '#000000',
              color: dark ? '#c34d27' : '#ffffff',
              padding: '0.6rem 1.4rem', borderRadius: '9999px',
              fontWeight: 600, fontSize: 'var(--text-small)',
              textDecoration: 'none', letterSpacing: '0.01em',
              transition: 'background-color 0.3s, color 0.3s', whiteSpace: 'nowrap',
            }}>
              Start Here
            </Link>
          </div>

          {/* Mobile burger */}
          <button onClick={() => setMobileOpen(o => !o)} className="lg:hidden"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: dark ? '#fff' : '#000', padding: '0.5rem', transition: 'color 0.3s' }}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div style={{ backgroundColor: '#ffffff', borderTop: '1px solid rgba(0,0,0,0.07)', padding: '0.875rem 2rem' }}>
            <div style={{ maxWidth: '96rem', margin: '0 auto' }}>
              <input autoFocus type="search" placeholder="Search articles, tools, retreats..."
                className="form-input" style={{ maxWidth: '32rem' }}
                onKeyDown={e => e.key === 'Escape' && setSearchOpen(false)} />
            </div>
          </div>
        )}
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 40 }} className="lg:hidden">
          <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)' }} onClick={() => setMobileOpen(false)} />
          <div style={{
            position: 'fixed', top: '4.5rem', left: 0, right: 0, bottom: 0,
            backgroundColor: '#ffffff', overflowY: 'auto', borderTop: '1px solid rgba(0,0,0,0.07)',
          }}>
            <nav style={{ padding: '1rem 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.125rem' }}>
              {navigation.map(item => (
                <div key={item.name}>
                  <div style={{ color: 'var(--color-brand-text-light)', fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '1rem 0.75rem 0.4rem' }}>
                    {item.name}
                  </div>
                  {(item.dropdown ?? item.columns?.flatMap(c => c.items))?.map(d => (
                    <Link key={d.name} href={d.href} onClick={() => setMobileOpen(false)}
                      style={{ display: 'block', padding: '0.65rem 0.75rem', borderRadius: '0.5rem', textDecoration: 'none', transition: 'background 0.15s' }}
                      onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f9f7f4')}
                      onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      <div style={{ color: '#000', fontWeight: 600, fontSize: 'var(--text-small)' }}>{d.name}</div>
                      <div style={{ color: 'var(--color-brand-text-muted)', fontSize: 'var(--text-xs)', marginTop: '0.1rem' }}>{d.description}</div>
                    </Link>
                  ))}
                </div>
              ))}
              <div style={{ paddingTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <Link href="/members/login" onClick={() => setMobileOpen(false)}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.875rem', borderRadius: '9999px', border: '1.5px solid rgba(0,0,0,0.15)', color: '#000', fontWeight: 600, fontSize: 'var(--text-small)', textDecoration: 'none' }}>
                  <LogIn className="w-4 h-4" /> Log In
                </Link>
                <Link href="/start" onClick={() => setMobileOpen(false)}
                  style={{ display: 'block', textAlign: 'center', backgroundColor: '#000', color: '#fff', padding: '0.875rem', borderRadius: '9999px', fontWeight: 700, fontSize: 'var(--text-small)', textDecoration: 'none' }}>
                  Start Here
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}