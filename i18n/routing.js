import {defineRouting} from 'next-intl/routing';
 import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'ar','fr'],
 
  // Used when no locale matches
  defaultLocale: 'en',
  pathnames:{
    "/contact":
    {
      en:"/contact",
      fr:"/contactez-moi",
      ar:"/toasel m3na",
    }
  }
});
// export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);