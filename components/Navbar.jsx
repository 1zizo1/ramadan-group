"use client";
import Link from "next/link";
import Image from "next/image";
import { assets } from "@/assets/assets";
// import LanguageSwitcher from './LanguageSwitcher';
import LocaleSwitcher from "./LocaleSwitcher";
import {
  HoverCard,
  Box,
  Text,
  Card,
  Inset,
  Strong,
  Flex,
} from "@radix-ui/themes";
import ServicesMenu from "./ServicesMenu";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700 bg-white">
      <div className="">
        <Image
          className="cursor-pointer w-28 md:w-32"
          onClick={() => router.push("/")}
          src={assets.logo}
          alt="logo"
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <div className="space-x-6 hidden md:flex">
          <Link href="/" className="hover:text-yellow-500">
            Home
          </Link>
          <ServicesMenu/>
          <HoverCard.Root>
            <HoverCard.Trigger>
              <Link href="/about" className="hover:text-yellow-500">
                About US
              </Link>
            </HoverCard.Trigger>
            <HoverCard.Content>
              <Box>
                <Card size={"2"}>
                  <Flex gap={3}
                  align={"center"}>
                    <div className="flex-1">
                      <Text as="p" size="3">
                        <Strong>Typography</Strong> is the art and technique of
                        arranging type to make written language legible,
                        readable and appealing when displayed.
                      </Text>
                    </div>
                    <Inset clip="padding-box" side="top" pb="current">
                      <img
                        src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                        alt="Bold typography"
                        style={{
                          display: "block",
                          objectFit: "cover",
                          width: "100%",
                          height: 140,
                          backgroundColor: "var(--gray-5)",
                        }}
                      />
                    </Inset>
                  </Flex>
                </Card>
              </Box>
            </HoverCard.Content>
          </HoverCard.Root>
          <Link href="/contact" className="hover:text-yellow-500">
            Contact
          </Link>
        </div>
      </div>

      <LocaleSwitcher />
    </nav>
  );
}
