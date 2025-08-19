"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { routing, usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";
import React from "react";

export default function LocaleSwitcherSelect({ defaultValue, label }) {
  const router = useRouter();

  const pathname = usePathname();
  // const params = useParams();

  function onSelectChange(nextLocale: string) {
    router.replace(
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname },
      { locale: nextLocale  }
    );
  }

  return (
    <Select defaultValue={defaultValue} onValueChange={onSelectChange}>
      <SelectTrigger
        className='w-[80px] h-8 border-none bg-transparent focus:ring-0 focus:ring-offset-0'
        aria-label={label}
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {routing.locales.map((locale) => (
          <SelectItem key={locale} value={locale}>
            {locale.toUpperCase()}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
