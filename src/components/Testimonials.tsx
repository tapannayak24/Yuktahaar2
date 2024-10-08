import React from "react";
import { Container } from "@/components/Container";

export const Testimonials = () => {
  return (
    <Container className="  bg-[#FAFAFA]" >
      <h2 className="text-3xl font-bold text-center mb-10 dark:text-white">
        What They Say About Us
      </h2>
      <div className="grid gap-10 lg:grid-cols-2 pr-0 pl-0 md:pl-16 md:pr-16">
        <div className="bg-white dark:bg-lime-950 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 dark:text-white">
            Satisfied Consumers
          </h3>
          <TestimonialCard
            content="Thanks to Yuktahaar for introducing us with people who care for people and environment instead of minting money......"
            name="Mrs. Vrushali Bhalerao"
          />  
          <TestimonialCard
            content=".. and the most important part is to locate such genuine producers, source and make available good and nutritive products to our home... Thanks yuktahaar team..."
            name="Prof Rajnish Deshpande"
          />
          <TestimonialCard
            content="...Our families consider ourselves blessed to have access to such a platform, where we can procure authentic organic produce and savor the true richness of nature...."
            name="Mrs. Preeti Iyer"
          />
          <p className="mt-4 text-lg text-green-600 dark:text-green-400">
            <span className="font-bold">200+ families</span> trust Yuktahaar.
          </p>
        </div>
        <div className="bg-green-50 dark:bg-green-950 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 dark:text-white">
            Trusted Producers
          </h3>
          <TestimonialCard
            content="Proud to be part of yuktahaar community as it has got strong basis of thought and gives importance to relationships ultimately leading to a feeling of extended family..."
            name="Mandar Deshpande: Organic Farmer, Wardha"
          />
          <p className="mt-4 text-lg text-green-600 dark:text-green-400">
            <span className="font-bold">50+ producers</span> trust Yuktahaar.
          </p>
        </div>
      </div>
    </Container>
  );
};

interface TestimonialCardProps {
  content: string;
  name: string;
}

function TestimonialCard({ content, name }: TestimonialCardProps) {
  return (
    <div className="mb-6">
      <p className="text-gray-700 dark:text-gray-300 mb-2">{content}</p>
      <p className="text-right font-medium dark:text-gray-400">- {name}</p>
    </div>
  );
}
