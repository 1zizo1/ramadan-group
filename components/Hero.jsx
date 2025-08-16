import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
export default function Hero() {
  const  t  = useTranslations('hero')

    return (
    <section className="h-[90vh] flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-900 to-blue-600 text-white">
      {/* <h1 className="text-5xl font-bold mb-4">{t?.hero?.title}</h1> */}
      <p className="text-lg max-w-2xl text-amber-400 mb-6">
        {t('title')}
      </p>
      {/* <a href="/contact" className="px-6 py-3 bg-white text-blue-900 font-semibold rounded shadow hover:bg-gray-200">
         {t?.hero?.cta}
      </a> */}
    </section>
  )
}
