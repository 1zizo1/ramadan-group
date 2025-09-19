
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ServicesGrid from '@/components/ServicesGrid';
import WhyUs from '@/components/WhyUs';
import Vision from '@/components/Vision';
import ProgressSliderPage from '@/components/ProgressSlider';
import AccordionBox from '@/components/AccordionBox';
import WhoWeAre from '@/components/WhoWeAre';
import WhatWeDo from '@/components/WhatWeDo';
import OurPromise from '@/components/OurPromise';

export default function HomePage() {
  return (
    <div>

      <Hero />
      <WhoWeAre />
      <WhatWeDo />
      <OurPromise />
      <Vision />
      <WhyUs />

      <Services />

      <AccordionBox />

      {/* delete */}

      <section className="max-w-6xl mx-auto">
        <div className='container mx-auto'>
          <ServicesGrid />
        </div>
      </section>
      <ProgressSliderPage />
    </div>
  );
}