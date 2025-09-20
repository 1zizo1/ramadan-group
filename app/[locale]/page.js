
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import Vision from '@/components/Vision';
import ProgressSliderPage from '@/components/ProgressSlider';
import AccordionBox from '@/components/AccordionBox';
import WhoWeAre from '@/components/WhoWeAre';
import WhatWeDo from '@/components/WhatWeDo';
import OurPromise from '@/components/OurPromise';
import { ContactForm } from '@/components/ContactForm';
import GlobalStandards from '@/components/GlobalStandards';
import LogisticsNetwork from '@/components/LogisticsNetwork';

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
      <LogisticsNetwork />
      <GlobalStandards />

      <ContactForm />
      {/* <AccordionBox /> */}
      {/* <ProgressSliderPage /> */}
    </div>
  );
}