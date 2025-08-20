
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ServicesGrid from '@/components/ServicesGrid';

export default function HomePage() {
  return (
    <div>

      <Hero />
      <Services />

      <section className="">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Services
        </h2>
        <div className='container mx-auto'>
          <ServicesGrid />
        </div>
      </section>

    </div>
  );
}