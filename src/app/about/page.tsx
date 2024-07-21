import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import Image from "next/image";

export default function About() {
  return (
    <Container>
      <SectionTitle preTitle="Our Story" title="About Yuktahaar">
        Discover the journey and philosophy behind Yuktahaar
      </SectionTitle>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-20">
        <div className="md:w-1/2">
          <Image
            src="/founders.jpg"
            alt="Yuktahaar Founders"
            width={500}
            height={375}
            className="rounded-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Yuktahaar is a community of health, lifestyle, and food-conscious
            families who seek to understand good health and purposeful living,
            while connecting directly with organic and natural food producers.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Our mission is to create a seamless community of producers,
            facilitators, and consumers, ultimately trying to eliminate the
            market in all its forms.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            We strive to develop a bond of sustained relationship between
            producers, facilitators, and consumers, while understanding each
            other's expectations and trying to mutually fulfill them.
          </p>
        </div>
      </div>

      <div className="mb-20">
        <h3 className="text-2xl font-bold mb-4">Our Founders</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Meet Hemant, an engineering professional with a PG in management and
          over two decades of corporate experience. About 12 years ago, Hemant
          made a life-altering decision to seek a more meaningful, balanced, and
          sustainable existence.
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Supported wholeheartedly by his nutritionist wife, Swati, their
          venture embodies their shared vision of a limeer and healthier world.
          Together, they are here to inspire you to live in harmony with nature.
        </p>
      </div>
    </Container>
  );
}
