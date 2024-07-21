import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import Image from "next/image";

import { benefitOne, benefitTwo } from "@/components/data";

export default function Home() {
  return (
    <Container>
      <Hero />

      <SectionTitle
        preTitle="About Yuktahaar"
        title="Connecting Conscious Consumers with Organic Producers"
      >
        Yuktahaar is a community of health, lifestyle, and food-conscious
        families who seek to understand good health and purposeful living, while
        connecting directly with organic and natural food producers.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle preTitle="Our Founders" title="Meet Hemant and Swati">
        Learn about the passionate individuals behind Yuktahaar and their
        journey towards creating a sustainable and healthy food ecosystem.
      </SectionTitle>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-20">
        <Image
          src="/founders.jpg"
          alt="Yuktahaar Founders"
          width={400}
          height={300}
          className="rounded-lg"
        />
        <div className="max-w-md">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Hemant, an engineering professional with over two decades of
            corporate experience, and his nutritionist wife Swati, founded
            Yuktahaar with a vision to promote sustainable and healthy living.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Their commitment to organic farming and natural products aligns
            perfectly with their belief in preserving our environment and
            promoting holistic well-being.
          </p>
        </div>
      </div>

      <SectionTitle preTitle="Testimonials" title="What Our Community Says">
        Hear from our satisfied customers and producers who are part of the
        Yuktahaar family.
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Find answers to common questions about Yuktahaar, our products, and our
        services.
      </SectionTitle>

      <Faq />

      <Cta />
    </Container>
  );
}
