"use client";

import { assets } from "@/assets/assets";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getContactFormSchema } from "@/lib/contact-form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import Image from "next/image";

export function ContactForm() {
  const t = useTranslations("contactForm");
  const validationMessages = useTranslations("validation");

  const form = useForm({
    resolver: zodResolver(getContactFormSchema(validationMessages)),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data) {
    console.log("Form submitted:", data);
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="grid w-full max-w-5xl grid-cols-1 md:grid-cols-3 rounded-lg shadow-lg overflow-hidden">
        {/* Left side: Form */}
        <div className="bg-card p-8 md:col-span-2">
          <h2 className="text-2xl font-bold mb-6">{t("submit")}</h2>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("name")}</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("email")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="your.email@example.com"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("message")}</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type your message here..."
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                {t("submit")}
              </Button>
            </form>
          </Form>
        </div>
        {/* Right side: Image + CTA */}
        <div className=" relative hidden md:block md:col-span-1">
          <Image
            src={assets.ships}
            alt="Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-end items-start p-6 text-white">
            <h2 className="text-l font-light max-w-xs leading-snug">
            {t("desc")}
            </h2>
           
          </div>
        </div>
      </div>
    </div>
  );
}

// function ServicesContent() {
//   return (
//     <div className="grid md:grid-cols-3">
//       {/* Left side (services grid) */}
//       <div className="w-full max-w-md bg-card p-8 rounded-lg shadow-sm">
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//             <FormField
//               control={form.control}
//               name="name"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>{t("name")}</FormLabel>
//                   <FormControl>
//                     <Input placeholder="Your name" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="email"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>{t("email")}</FormLabel>
//                   <FormControl>
//                     <Input
//                       placeholder="your.email@example.com"
//                       type="email"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="message"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>{t("message")}</FormLabel>
//                   <FormControl>
//                     <Textarea
//                       placeholder="Type your message here..."
//                       className="resize-none"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <Button type="submit">{t("submit")}</Button>
//           </form>
//         </Form>

//         <div className="grid grid-cols-2 col-span-2 gap-6 p-6"></div>
//       </div>
//       {/* Right side (image + CTA) */}
//       <div className="relative hidden md:block">
//         <Image
//           src={assets.containers}
//           alt="Services"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-start p-6 text-white">
//           <h2 className="text-lg font-bold">
//             All the Services You Need in One Place.
//           </h2>
//           <button className="mt-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-lg">
//             Get Your Service
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
