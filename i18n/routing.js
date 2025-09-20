import { defineRouting } from 'next-intl/routing';
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'ar', 'fr'],

  // Used when no locale matches
  defaultLocale: 'en',
  pathnames: {
    "/":
    {
      "en": "/",
      "fr": "/accueil",
      "ar": "/"
    },
    "/contact":
    {
      en: "/contact",
      fr: "/contactez-moi",
      ar: "/تواصل معنا",
    }, "/products":
    {
      "en": "/products",
      "fr": "/produits",
      "ar": "/منتجات"
    }, "/global":
    {
      "en": "/global",
      "fr": "/mondial",
      "ar": "/عالمي"
    }, "/team":
    {
      "en": "/team",
      "fr": "/equipe",
      "ar": "/فريق"
    }, "/about":
    {
      "en": "/about",
      "fr": "/a-propos",
      "ar": "/من-نحن"
    }


  }
});
// export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);




