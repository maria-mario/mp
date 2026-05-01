// components/layout/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = {
    main: [
      { name: 'Home', href: '/' },
      { 
        name: 'Services', 
        href: '#',
        dropdown: [
          { name: 'Forum Retreats', href: '/forum-retreats', description: 'Custom experiences for EO/YPO groups' },
          { name: 'Executive Coaching', href: '/consultation', description: 'One-on-one leadership development' },
          { name: 'Experiences', href: '/experiences', description: 'Transformational retreat offerings' },
        ]
      },
      { 
        name: 'Resources', 
        href: '#',
        dropdown: [
          { name: 'Blog', href: '/blog', description: 'Leadership insights and articles' },
          { name: 'Membership', href: '/members', description: 'Exclusive content & powertools' },
        ]
      },
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
    ],
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-12 h-12">
                {/* Placeholder logo - replace with actual logo */}
                <div className="w-12 h-12 bg-gradient-premium rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">MP</span>
                </div>
              </div>
              <div className="hidden sm:block">
                <div className={`font-serif font-bold text-xl transition-colors ${
                  isScrolled ? 'text-dark-900' : 'text-white'
                }`}>
                  Dr. Mark Pirtle
                </div>
                <div className={`text-xs transition-colors ${
                  isScrolled ? 'text-dark-600' : 'text-white/80'
                }`}>
                  SkillfullyAware®
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.main.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.dropdown ? (
                    <>
                      <button
                        className={`flex items-center space-x-1 font-medium transition-colors ${
                          isScrolled
                            ? 'text-dark-700 hover:text-primary-600'
                            : 'text-white hover:text-primary-300'
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>

                      {/* Dropdown Menu */}
                      {openDropdown === item.name && (
                        <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-premium overflow-hidden">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-6 py-4 hover:bg-primary-50 transition-colors group"
                            >
                              <div className="font-semibold text-dark-900 group-hover:text-primary-600 transition-colors">
                                {dropdownItem.name}
                              </div>
                              <div className="text-sm text-dark-600 mt-1">
                                {dropdownItem.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`font-medium transition-colors ${
                        isScrolled
                          ? 'text-dark-700 hover:text-primary-600'
                          : 'text-white hover:text-primary-300'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              {/* CTA Button */}
              <Link
                href="/contact"
                className="px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
              >
                Get in Touch
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled
                  ? 'text-dark-900 hover:bg-dark-100'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-dark-900/95 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          
          <div className="fixed top-[88px] inset-x-0 bottom-0 bg-white overflow-y-auto">
            <nav className="px-4 py-6 space-y-1">
              {navigation.main.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <>
                      <div className="font-semibold text-dark-900 px-4 py-3 text-sm uppercase tracking-wider">
                        {item.name}
                      </div>
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-8 py-3 text-dark-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors"
                        >
                          <div className="font-medium">{dropdownItem.name}</div>
                          <div className="text-sm text-dark-500 mt-1">
                            {dropdownItem.description}
                          </div>
                        </Link>
                      ))}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 text-dark-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg font-medium transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              <div className="pt-6">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white text-center rounded-lg font-semibold transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}