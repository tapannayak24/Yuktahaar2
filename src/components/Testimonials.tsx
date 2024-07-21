import React from "react";
import { Container } from "@/components/Container";

export const Testimonials = () => {
  return (
    <Container>
      <h2 className="text-3xl font-bold text-center mb-10">
        What They Say About Us
      </h2>
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Satisfied Consumers</h3>
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
          <p className="mt-4 text-green-600">
            more than 100 families trust Yuktahaar.....
          </p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Trusted Producers</h3>
          <TestimonialCard
            content="Proud to be part of yuktahaar community as it has got strong basis of thought and gives importance to relationships ultimately leading to a feeling of extended family..."
            name="Mandar Deshpande: Organic Farmer, Wardha"
          />
          <p className="mt-4 text-green-600">
            more than 50 producers trust Yuktahaar...
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
      <p className="text-gray-700 mb-2">{content}</p>
      <p className="text-right font-medium">- {name}</p>
    </div>
  );
}
