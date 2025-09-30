import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import "@radix-ui/themes/styles.css";
import './globals.css'
import { getMessages } from "next-intl/server";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Theme } from '@radix-ui/themes';
import { Analytics } from "@vercel/analytics/next"


export const metadata = {
  title: "Ramadan Group - Import & Export Solutions from Egypt",
  description:
    "Ramadan Group provides trusted import and export services from Egypt, delivering fresh produce and quality goods to Europe, the Gulf, and beyond.",
  keywords: [
    "Ramadan Group",
    "Egypt import export",
    "fresh vegetables export",
    "trade Egypt Europe",
    "Egyptian products Gulf",
    "international trade",
    "export company Egypt",
    "agricultural exports Egypt",
    "decoration "
  ],
  openGraph: {
    title: "Ramadan Group - Import & Export",
    description:
      "Discover Ramadan Group – your reliable partner in import and export from Egypt. Supplying fresh produce and quality goods with global reach and care.",
    url: "https://ramadan-group.com",
    siteName: "Ramadan Group",
    images: [
      {
        url: "https://res.cloudinary.com/db4f5zwsc/image/upload/c_limit,w_3840/f_auto/q_auto/v1/Picture2_jbvhwg?_a=BAVAZGGf0", // replace with your image
        width: 1200,
        height: 630,
        alt: "Ramadan Group - Import & Export",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramadan Group - Import & Export",
    description:
      "Trusted Egyptian import & export company connecting Europe, the Gulf, and beyond with fresh produce and quality goods.",
    images: ["https://res.cloudinary.com/db4f5zwsc/image/upload/c_limit,w_3840/f_auto/q_auto/v1/Picture2_jbvhwg?_a=BAVAZGGf0"],
  },
};

export default async function LocaleLayout({
  children,
  params
}) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  //   // Providing all messages to the client
//   // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Theme accentColor='gold'>
          <Navbar/>
          {children}
          <Analytics />
          <Footer/>
          </Theme>
          </NextIntlClientProvider>
      </body>
    </html>
  );
}

