'use client'
import { Box, Card, Inset, Text, Flex, Button } from "@radix-ui/themes";
import { BackpackIcon, PaperPlaneIcon } from "@radix-ui/react-icons";
import { assets } from "@/assets/assets";
import Image from "next/image";
export default function Services() {
  const services = [
    {
      title: "Import Solutions",
      desc: "Reliable sourcing and delivery worldwide 123.",
      btn: "learn more",
      image: assets.logs,
    },
    {
      title: "Export Services",
      desc: "Expand your business across global markets.",
      btn: "learn more",
      image: assets.ships,
    },
    {
      title: "Logistics",
      desc: "Smooth shipping and customs clearance.",
      btn: "learn more",
      image: assets.dock,
    },
  ];

  return (
    <section className="py-16 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-amber-400">
        Our Services
      </h2>
      <div className="grid md:grid-cols-4 gap-4">
        {services.map((s, i) => (
          <Box maxWidth="" key={i}>
            <Card size="3">
              <Inset clip="padding-box" side="top" pb="current">
                <Image
                  src={s.image}
                  alt="Bold typography"
                  style={{
                    display: "block",
                    objectFit: "cover",
                    width: "100%",
                    height: 140,
                    backgroundColor: "var(--gray-5)",
                  }}
                  className="hover:scale-115 transition"
                />
              </Inset>
              <Text as="h3" size="4" className="font-bold">
                {s.title}
              </Text>
              <Text as="p" size="3">
                {s.desc}
              </Text>
              <Flex align={"center"} justify={"center"} className="m-1">
                <Button>{s.btn}</Button>
              </Flex>
            </Card>
          </Box>
        ))}

        <div className="flex md:flex-col sm:flex-row">
          <Card
            style={{
              width: 250,
              height: 180,
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="m-2 hover:bg-yellow-600 bg-gray-500 transition hover:scale-110 hover:text-yellow-600 "
          >
            <Flex direction="column" align="center" gap="3">
              <BackpackIcon color="white" width={40} height={40} />
              <Text size="3" weight="bold" color="white">
                Explore Our Services
              </Text>
            </Flex>
          </Card>

          <Card
            style={{
              width: 250,
              height: 180,
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="m-2 hover:bg-yellow-600 bg-black transition hover:scale-110 hover:text-yellow-600"
          >
            <Flex direction="column" align="center" gap="3">
              <PaperPlaneIcon className="text-white" width={40} height={40} />

              <Text size="3" weight="bold" color="white">
                Explore Our Services
              </Text>
            </Flex>
          </Card>
        </div>
      </div>
    </section>
  );
}
