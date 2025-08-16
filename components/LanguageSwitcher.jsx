"use client"; // 👈 important, makes it a Client Component

import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (lang) => {
    // Example: replace first segment of pathname (/en, /ar, /fr)
    const segments = pathname.split("/");
    segments[1] = lang;
    const newPath = segments.join("/") || "/";
    router.push(newPath);
  };

  return (
    <div className="flex gap-2">
      <button onClick={() => switchLanguage("en")}>EN</button>
      <button onClick={() => switchLanguage("ar")}>AR</button>
      <button onClick={() => switchLanguage("fr")}>FR</button>
    </div>
  );
}
