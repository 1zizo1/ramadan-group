
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ServicesGrid from '@/components/ServicesGrid';
import WhyUs from '@/components/WhyUs';
import Vision from '@/components/Vision';
import ProgressSliderPage from '@/components/ProgressSlider';

export default function HomePage() {
  return (
    <div>

      <Hero />
      <Services />

      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 ">
          Our Services
        </h2>
        <div className='container mx-auto'>
          <ServicesGrid />
        </div>
      </section>
      <Vision />
<ProgressSliderPage/>
      <WhyUs />
    </div>
  );
}