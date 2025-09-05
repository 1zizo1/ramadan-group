import { Blockquote, Flex } from "@radix-ui/themes";
import Link from "next/link";
export default function Vision() {
  return (
    <section className="py-16 max-w-6xl mx-auto px-2">
      <h2 className="text-2xl font-bold mb-10 text-amber-400">Vision</h2>
      <div className="mb-10">
        <p>
          Lorem ipsum2 dolor sit, amet consectetur adipisicing elit. Quisquam
          autem earum debitis hic, fuga dolores, iusto recusandae harum,
          laudantium nostrum nobis mollitia doloremque expedita accusamus nemo
          deleniti facilis omnis ipsa.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 place-items-center mx-5">
        <div className="p-6 max-w-3xl w-full bg-gray-400/20 rounded-2xl transition-transform duration-500 hover:scale-105 ">
          <Flex direction={"column"} className="">
            <h3 className="font-bold m-2 text-lg  text-amber-400">Misson</h3>
            <ul>
              <li className="my-2">
                <Blockquote>
                  Perfect typography is certainly the most elusive of all arts.
                  Sculpture in stone alone comes near it in obstinacy.
                </Blockquote>
              </li>
              <li className="my-2">
                <Blockquote >
                  Perfect typography is certainly the most elusive of all arts.
                  Sculpture in stone alone comes near it in obstinacy.
                </Blockquote>
              </li>
              <li className="my-2">
                <Blockquote>
                  Perfect typography is certainly the most elusive of all arts.
                  Sculpture in stone alone comes near it in obstinacy.
                </Blockquote>
              </li>
            </ul>

            <Link href="/about" className="mt-3 mx-2 bg-yellow-500 w-1/4 self-end text-black px-4 py-2 rounded-md font-medium hover:bg-yellow-400 transition">
              learn more
            </Link>
          </Flex>
        </div>
        <div className="p-6 max-w-3xl w-full bg-gray-400/20 rounded-2xl transition-transform duration-500 hover:scale-105 ">
          <Flex direction={"column"} className="">
            <h3 className="font-bold m-2 text-lg  text-amber-400">Vision</h3>
                       <ul>
              <li className="my-2">
                <Blockquote>
                  Perfect typography is certainly the most elusive of all arts.
                  Sculpture in stone alone comes near it in obstinacy.
                </Blockquote>
              </li>
              <li className="my-2">
                <Blockquote >
                  Perfect typography is certainly the most elusive of all arts.
                  Sculpture in stone alone comes near it in obstinacy.
                </Blockquote>
              </li>
              <li className="my-2">
                <Blockquote>
                  Perfect typography is certainly the most elusive of all arts.
                  Sculpture in stone alone comes near it in obstinacy.
                </Blockquote>
              </li>
            </ul>

            <Link href="/about" className="mt-3 mx-2 bg-yellow-500 w-1/4 self-end text-black px-4 py-2 rounded-md font-medium hover:bg-yellow-400 transition">
              learn more
            </Link>
          </Flex>
        </div>
        <div></div>
      </div>
    </section>
  );
}
