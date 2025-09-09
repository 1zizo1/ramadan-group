"use client";

import { Card, Text, Flex } from "@radix-ui/themes";

// Reusable component
export default function Cards({ t ,icons =[] }) {
  // icons mapped by index
const icons_prop = icons  || [];
  // members come from translations
  const members = Object.values(t.raw("members"));

  return (
    <section className="max-w-5xl mx-auto">
      <p className="text-yellow-500 my-2">{t("Title")}</p>
      <h1 className="capitalize mb-6">{t("Subtitle")}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {members.map((member, index) => {
          const Icon = icons_prop[index] || null;
          return (
            <Card
              key={index}
              className="hover:scale-105 hover:bg-yellow-500 transition-transform duration-300 p-5"
            >
              <Flex align="center" direction="column" gap="3" className="p-6 py-8">
                <div className="rounded-full p-4 bg-yellow-500 flex justify-center items-center">
                 {Icon ? <Icon className="w-6 h-6 text-white" /> : null}
                </div>
                <Flex direction={"column"} className="p-2 min-h-52">
                  <Text className="text-center pb-2" as="div" size="2" weight="bold">
                    {member.title}
                  </Text>
                  <Text className="text-center pb-2" as="div" size="2" color="gray">
                    {member.data}
                  </Text>
                  <Text className="text-center" as="div" size="2" color="gray">
                    {member?.subData}
                  </Text>
                </Flex>
              </Flex>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
