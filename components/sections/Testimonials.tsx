// components/sections/Testimonials.tsx
'use client';

import { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Play } from 'lucide-react';

// Mock testimonials data
const testimonials = [
  {
    id: 1,
    name: 'Bob Lambert',
    title: 'General Manager',
    company: 'Carte Hotel',
    location: 'San Diego, California',
    quote: 'We had the pleasure of hosting Mark Pirtle to train our leaders, and I can\'t recommend him enough. His approach to shadow work and emotional intelligence transformed our team dynamics. If your team needs alignment, bring Mark in—you won\'t regret it.',
    image: null, // We'll use initials
    videoUrl: 'https://vimeo.com/179221240',
  },
  {
    id: 2,
    name: 'John Lund',
    title: 'CEO, Business Strategy Coach',
    company: 'Serial Entrepreneur',
    location: 'Nebraska / Arizona',
    quote: 'Dr. Pirtle\'s shadow work coaching has been transformative for both my personal and professional life. Through his guidance, I\'ve developed a heightened ability to attune to myself, others, and situations. His insights are practical and profound, transferring seamlessly to any domain. I\'m a better version of myself because of his coaching.',
    image: null,
  },
  {
    id: 3,
    name: 'Cristina Burgess',
    title: 'Founder',
    company: 'Augustina Luxury Boutique',
    location: 'Toronto, Canada',
    quote: 'Entrepreneurship demands constant shifts from macro to micro thinking, requiring presence in the past, present, and future all at once. Working with Dr. Pirtle has transformed my understanding of my mind, myself, and what it is to live with skillful awareness.',
    image: null,
  },
  {
    id: 4,
    name: 'Alex Hsu',
    title: 'Investor, Father, Seeker',
    company: '',
    location: 'California',
    quote: 'I attended Mark Pirtle\'s men\'s retreat, and it was truly transformative. The shadow work and group sessions helped me confront parts of myself I had been avoiding for years. I gained valuable insights into my own struggles and left with new friendships I know will last. The retreat setting was serene, and the hospitality was outstanding.',
    image: null,
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const previous = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[current];

  return (
    <section className="py-24 bg-gradient-to-b from-dark-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark-900 mb-6">
            What People Are Saying
          </h2>
          <p className="text-xl text-dark-600 max-w-2xl mx-auto">
            Hear from leaders who have experienced transformation through the SkillfullyAware® methodology
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-premium p-8 md:p-12 relative">
            {/* Quote Icon */}
            <Quote className="absolute top-8 right-8 w-16 h-16 text-primary-100" />

            {/* Content */}
            <div className="relative">
              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-dark-700 leading-relaxed mb-8 italic">
                "{currentTestimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                {/* Avatar */}
                <div className="w-16 h-16 bg-gradient-premium rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                </div>

                {/* Details */}
                <div className="flex-1">
                  <div className="font-bold text-lg text-dark-900">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-dark-600">
                    {currentTestimonial.title}
                    {currentTestimonial.company && `, ${currentTestimonial.company}`}
                  </div>
                  <div className="text-sm text-dark-500">
                    {currentTestimonial.location}
                  </div>
                </div>

                {/* Video Button */}
                {currentTestimonial.videoUrl && (
                  <a
                    href={currentTestimonial.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 w-12 h-12 bg-primary-600 hover:bg-primary-700 rounded-full flex items-center justify-center text-white transition-colors shadow-lg"
                  >
                    <Play className="w-5 h-5 ml-0.5" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            {/* Previous */}
            <button
              onClick={previous}
              className="w-12 h-12 bg-white hover:bg-dark-50 border border-dark-200 rounded-full flex items-center justify-center transition-colors shadow-md"
            >
              <ChevronLeft className="w-5 h-5 text-dark-700" />
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrent(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === current
                      ? 'bg-primary-600 w-8'
                      : 'bg-dark-300 hover:bg-dark-400'
                  }`}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={next}
              className="w-12 h-12 bg-white hover:bg-dark-50 border border-dark-200 rounded-full flex items-center justify-center transition-colors shadow-md"
            >
              <ChevronRight className="w-5 h-5 text-dark-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}