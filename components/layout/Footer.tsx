// components/layout/Footer.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ExternalLink, PlayCircle, Camera, Mail } from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleNewsletterSignup(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  }

  return (
    <footer className="bg-dark-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-serif text-3xl font-bold mb-4">
              Stay <span className="text-primary-400 italic">SkillfullyAware®</span>
            </h3>
            <p className="text-dark-300 text-lg mb-8">
              Get the latest insights, practices, and transformative wisdom delivered to your inbox.
            </p>

            {status === 'success' ? (
              <div className="bg-green-500/10 border border-green-500/50 text-green-400 px-6 py-4 rounded-lg">
                ✓ Thank you! Please check your email for confirmation.
              </div>
            ) : (
              <form onSubmit={handleNewsletterSignup} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="flex-1 px-6 py-4 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder:text-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
            )}

            {status === 'error' && (
              <p className="text-red-400 text-sm mt-4">
                Something went wrong. Please try again.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="font-serif text-2xl font-bold mb-4">
              Dr. Mark Pirtle
            </div>
            <p className="text-dark-400 mb-6 max-w-md">
              Transforming leaders through the SkillfullyAware® methodology. 
              Custom retreats, executive coaching, and experiences for conscious leadership.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <PlayCircle className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Camera className="w-5 h-5" />
              </a>
              <a
                href="mailto:mark@drmarkpirtle.com"
                className="w-10 h-10 bg-dark-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/forum-retreats" className="text-dark-400 hover:text-primary-400 transition-colors">
                  Forum Retreats
                </Link>
              </li>
              <li>
                <Link href="/consultation" className="text-dark-400 hover:text-primary-400 transition-colors">
                  Executive Coaching
                </Link>
              </li>
              <li>
                <Link href="/experiences" className="text-dark-400 hover:text-primary-400 transition-colors">
                  Experiences
                </Link>
              </li>
              <li>
                <Link href="/members" className="text-dark-400 hover:text-primary-400 transition-colors">
                  Membership
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="text-dark-400 hover:text-primary-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-dark-400 hover:text-primary-400 transition-colors">
                  About Mark
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-dark-400 hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-dark-400 hover:text-primary-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-dark-500 text-sm">
            <p>© {new Date().getFullYear()} Dr. Mark Pirtle. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              SkillfullyAware® is a registered trademark.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}