
import Hero from '@/components/Hero';
import Services from '@/components/Services';
 
export default function HomePage() {
  return (
    <div>
      <Hero/>
      <Services/>
      {/* <h1>{t('title')}</h1> */}
      {/* <Link href="/about">{t('about')}</Link> */}
    </div>
  );
}