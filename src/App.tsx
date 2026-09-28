import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { AboutAIIVA } from './components/AboutAIIVA';
import { SmartHomeExperience } from './components/SmartHomeExperience';
import { Solutions } from './components/Solutions';
import { FeaturedProducts } from './components/FeaturedProducts';
import { ProductGallery } from './components/ProductGallery';
import { ProductToHomeStory } from './components/ProductToHomeStory';
import { HowItWorks } from './components/HowItWorks';
import { SmartScenes } from './components/SmartScenes';
import { ResidentialCommercial } from './components/ResidentialCommercial';
import { NewConstructionRetrofit } from './components/NewConstructionRetrofit';
import { Projects } from './components/Projects';
import { WhyAIIVA } from './components/WhyAIIVA';
import { Testimonials } from './components/Testimonials';
import { Directors } from './components/Directors';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen w-full bg-warm">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <AboutAIIVA />
        <SmartHomeExperience />
        <Solutions />
        <FeaturedProducts />
        <ProductGallery />
        <ProductToHomeStory />
        <HowItWorks />
        <SmartScenes />
        <ResidentialCommercial />
        <NewConstructionRetrofit />
        <Projects />
        <WhyAIIVA />
        <Testimonials />
        <Directors />
        <Contact />
      </main>
      <Footer />
    </div>);

}