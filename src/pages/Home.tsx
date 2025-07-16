import React from 'react';
import { Hero } from '../components/Hero';
import { AboutSection } from '../components/AboutSection';
import { ExpertiseAreas } from '../components/ExpertiseAreas';
import { FeaturedWork } from '../components/FeaturedWork';
import { PublicationHighlights } from '../components/PublicationHighlights';
import { Testimonials } from '../components/Testimonials';
import { CallToAction } from '../components/CallToAction';
export function Home() {
  return <div className="w-full">
      <Hero />
      <AboutSection />
      <ExpertiseAreas />
      <FeaturedWork />
      <PublicationHighlights />
      <Testimonials />
      <CallToAction />
    </div>;
}