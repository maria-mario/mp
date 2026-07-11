'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Search } from 'lucide-react';
import { blogPosts } from '@/lib/blog-data';

function getTopCategories(n: number) {
  const counts: Record<string, number> = {};
  blogPosts.forEach((p) => p.categories.forEach((c) => { counts[c] = (counts[c] ?? 0) + 1; }));
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, n)
    .map(([name, count]) => ({ name, count }));
}

const topCategories = getTopCategories(3);

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
  { name: 'Forum Retreats', href: '/forum-retreats' },
  { name: 'SAAQ Coaching',  href: '/consultation'   },
  { name: 'Power Tools',    href: '/power-tools/book' },
  {
    name: 'Blog',
    href: '/blog',
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

export function Header() {
  const [pastHero, setPastHero]         = useState(false);
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen]     = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById('hero-sentinel');
    if (!sentinel) {
      const onScroll = () => setPastHero(window.scrollY > window.innerHeight - 100);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
    }
    const obs = new IntersectionObserver(
      ([e]) => setPastHero(!e.isIntersecting),
      { threshold: 0, rootMargin: '-100px 0px 0px 0px' }
    );
    obs.observe(sentinel);
    return () => obs.disconnect();
  }, []);

  const dark = !pastHero;
  const linkColor = dark ? '#ffffff' : 'rgba(0,0,0,0.72)';
  const linkHover = dark ? 'rgba(255,255,255,0.7)' : '#000000';

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        height: '6.25rem',
        backgroundColor: pastHero ? '#ffffff' : '#000000',
        borderBottom: pastHero ? '1px solid rgba(0,0,0,0.07)' : 'none',
        transition: 'background-color 0.35s ease',
      }}>
        <div style={{
          maxWidth: '96rem', margin: '0 auto',
          padding: '0 clamp(1.5rem, 7.5vw, 6.75rem)',
          height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>

          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', flexShrink: 0, height: '100%' }}>
            <div style={{ position: 'relative', height: '2.25rem', width: '2.25rem', flexShrink: 0, alignSelf: 'center' }}>
              <Image
                src="/logos/logo.webp"
                alt="Dr. Mark Pirtle"
                fill
                className="object-contain"
                priority
                style={{ filter: dark ? 'brightness(0) invert(1)' : 'none', transition: 'filter 0.35s ease' }}
              />
            </div>
            <span style={{
              color: dark ? '#ffffff' : '#000000',
              fontWeight: 600,
              fontSize: '0.875rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              transition: 'color 0.35s',
              lineHeight: 1,
            }}>
              Dr. Mark Pirtle
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center" style={{ gap: '2rem' }}>
            {navigation.map(item => (
              <div
                key={item.name}
                style={{ position: 'relative' }}
                onMouseEnter={() => setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {!item.dropdown ? (
                  <Link href={item.href} style={{
                    padding: '0.25rem 0', textDecoration: 'none',
                    color: linkColor, fontSize: 'var(--text-small)', fontWeight: 600,
                    fontFamily: 'var(--font-sans)', letterSpacing: '0.05em',
                    transition: 'color 0.15s',
                  }}
                    onMouseEnter={e => (e.currentTarget.style.color = linkHover)}
                    onMouseLeave={e => (e.currentTarget.style.color = linkColor)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button style={{
                    display: 'flex', alignItems: 'center',
                    background: 'none', border: 'none', cursor: 'pointer', padding: '0.25rem 0',
                    color: linkColor, fontSize: 'var(--text-small)', fontWeight: 600,
                    fontFamily: 'var(--font-sans)', letterSpacing: '0.05em',
                    transition: 'color 0.15s',
                  }}
                    onMouseEnter={e => (e.currentTarget.style.color = linkHover)}
                    onMouseLeave={e => (e.currentTarget.style.color = linkColor)}
                  >
                    {item.name}
                  </button>
                )}

                {/* Dropdown panel */}
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
              </div>
            ))}
          </nav>

          {/* Right: Search + Start Here */}
          <div className="hidden lg:flex items-center" style={{ gap: '1.25rem' }}>
            <button onClick={() => setSearchOpen(o => !o)} aria-label="Search"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.4rem', color: linkColor, transition: 'color 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.color = linkHover)}
              onMouseLeave={e => (e.currentTarget.style.color = linkColor)}
            >
              <Search className="w-5 h-5" />
            </button>

            <Link href="/start" style={{
              border: '1.5px solid #c34d27',
              backgroundColor: 'transparent',
              color: dark ? '#ffffff' : '#c34d27',
              padding: '0.6875rem 1.625rem',
              borderRadius: '9999px',
              fontWeight: 600,
              fontSize: 'var(--text-small)',
              letterSpacing: '0.03em',
              textDecoration: 'none',
              transition: 'color 0.3s, background-color 0.3s',
              whiteSpace: 'nowrap',
            }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#c34d27'; e.currentTarget.style.color = '#ffffff'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = dark ? '#ffffff' : '#c34d27'; }}
            >
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
            position: 'fixed', top: '6.25rem', left: 0, right: 0, bottom: 0,
            backgroundColor: '#ffffff', overflowY: 'auto', borderTop: '1px solid rgba(0,0,0,0.07)',
          }}>
            <nav style={{ padding: '1rem 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.125rem' }}>
              {navigation.map(item => (
                <div key={item.name}>
                  {!item.dropdown ? (
                    <Link href={item.href} onClick={() => setMobileOpen(false)}
                      style={{ display: 'block', padding: '0.75rem', borderRadius: '0.5rem', textDecoration: 'none', fontWeight: 600, fontSize: 'var(--text-small)', color: '#000', transition: 'background 0.15s' }}
                      onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f9f7f4')}
                      onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <>
                      <div style={{ color: 'var(--color-brand-text-light)', fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '1rem 0.75rem 0.4rem' }}>
                        {item.name}
                      </div>
                      {item.dropdown.map(d => (
                        <Link key={d.name} href={d.href} onClick={() => setMobileOpen(false)}
                          style={{ display: 'block', padding: '0.65rem 0.75rem', borderRadius: '0.5rem', textDecoration: 'none', transition: 'background 0.15s' }}
                          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f9f7f4')}
                          onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                        >
                          <div style={{ color: '#000', fontWeight: 600, fontSize: 'var(--text-small)' }}>{d.name}</div>
                          <div style={{ color: 'var(--color-brand-text-muted)', fontSize: 'var(--text-xs)', marginTop: '0.1rem' }}>{d.description}</div>
                        </Link>
                      ))}
                    </>
                  )}
                </div>
              ))}
              <div style={{ paddingTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <Link href="/start" onClick={() => setMobileOpen(false)}
                  style={{ display: 'block', textAlign: 'center', border: '1.5px solid #c34d27', color: '#c34d27', backgroundColor: 'transparent', padding: '0.875rem', borderRadius: '9999px', fontWeight: 600, fontSize: 'var(--text-small)', textDecoration: 'none' }}>
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
