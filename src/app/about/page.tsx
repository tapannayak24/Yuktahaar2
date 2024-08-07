import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import Image from "next/image";
import { Users, Heart, Sparkles, Globe } from "lucide-react";

export default function About() {
  return (
    <Container>
      <SectionTitle preTitle="Our Story" title="About Yuktahaar">
        Discover the journey and philosophy behind Yuktahaar  
      </SectionTitle>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-20 px-4 md:px-16">
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

      <div className="mb-20 px-4 md:px-16">
        <h3 className="text-2xl font-bold mb-4">Our Founders</h3>
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="md:w-1/2">
            <h4 className="text-xl font-semibold mb-2">
              Mr. Hemant & Mrs. Swathi
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Hemant, an engineering professional with a PG in management and
              over two decades of corporate experience, and his nutritionist
              wife Swathi, founded Yuktahaar with a vision to promote
              sustainable and healthy living.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Their journey began when they experienced a sense of wholesomeness
              living among people of different age groups, cultures, and creeds.
              This experience ignited their passion for building meaningful
              human connections.
            </p>
          </div>
          <div className="md:w-1/2">
            <h4 className="text-xl font-semibold mb-2">Our Philosophy</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Users className="w-6 h-6 text-lime-500 mr-2 flex-shrink-0 mt-1" />
                <p className="text-gray-600 dark:text-gray-400">
                  Expanding the concept of 'family' to include our community of
                  producers and consumers
                </p>
              </li>
              <li className="flex items-start">
                <Heart className="w-6 h-6 text-lime-500 mr-2 flex-shrink-0 mt-1" />
                <p className="text-gray-600 dark:text-gray-400">
                  Fostering transparency and trust in all our relationships
                </p>
              </li>
              <li className="flex items-start">
                <Sparkles className="w-6 h-6 text-lime-500 mr-2 flex-shrink-0 mt-1" />
                <p className="text-gray-600 dark:text-gray-400">
                  Ensuring the purity and natural growth of all products
                </p>
              </li>
              <li className="flex items-start">
                <Globe className="w-6 h-6 text-lime-500 mr-2 flex-shrink-0 mt-1" />
                <p className="text-gray-600 dark:text-gray-400">
                  Creating a sustainable ecosystem that benefits all
                  stakeholders
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-20 px-4 md:px-16">
        <h3 className="text-2xl font-bold mb-4">Our Journey</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          After years in the corporate world, Hemant realized the need for a
          more fulfilling path. After going through Madhyasth Darshan, Hemant
          and Swathi embarked on a mission to connect producers with consumers,
          ensuring transparency and trust in every interaction.
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Working together as a family with other producers, free from peer
          pressure and driven by a sense of happiness, Yuktahaar has become more
          than just a business. It's a process where relationships and healthy
          living are ensured, creating a positive impact on everyone involved.
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          Today, Yuktahaar stands as a testament to the power of community,
          healthy living, and purposeful connections. We invite you to join us
          on this journey towards a more sustainable and fulfilling lifestyle.
        </p>
      </div>
    </Container>
  );
}