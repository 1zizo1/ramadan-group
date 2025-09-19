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
import { CldImage } from "next-cloudinary";

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
    <section className="min-h-screen flex items-center justify-center px-4 py-12 bg-gray-50" id="contact-form">
      <div className="grid w-full max-w-6xl grid-cols-1 md:grid-cols-3 rounded-xl shadow-xl overflow-hidden bg-white">
        
        {/* Left side: Form */}
        <div className="p-10 md:col-span-2">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
            {t("submit")}
          </h2>
          <p className="text-gray-500 mb-8">
            {t("desc")}
          </p>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">{t("name")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your name"
                        {...field}
                        className="focus:ring-2 focus:ring-yellow-500 transition"
                      />
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
                    <FormLabel className="text-gray-700">{t("email")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="your.email@example.com"
                        type="email"
                        {...field}
                        className="focus:ring-2 focus:ring-yellow-500 transition"
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
                    <FormLabel className="text-gray-700">{t("message")}</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type your message here..."
                        className="resize-none focus:ring-2 focus:ring-yellow-500 transition"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold shadow-md"
              >
                {t("submit")}
              </Button>
            </form>
          </Form>
        </div>

        {/* Right side: Image + CTA */}
        <div className="relative hidden md:block md:col-span-1">
          <CldImage
            src={assets.ships.id}
            alt="Services"
            width={assets.ships.w}
            height={assets.ships.h}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end items-start p-8 text-white">
            <h3 className="text-2xl font-bold mb-2">
              {t("contactCTA") ?? "We’ll reply within 24–48h"}
            </h3>
            <p className="text-sm text-gray-200 max-w-xs">
              {t("ctaDesc") ?? "Our team is here to support your trade inquiries with speed and reliability."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
