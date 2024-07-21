"use client";
import React from "react";
import { Container } from "@/components/Container";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-lime-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-lime-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqdata = [
  {
    question: "What is Yuktahaar?",
    answer:
      "Yuktahaar is a community of health, lifestyle, and food-conscious families who want to understand good health and purposeful living. It's also a facilitator that helps locate genuine sources of production and makes them conveniently available to conscious consumers. We aim to develop a seamless community of producers, facilitators, and consumers, ultimately trying to eliminate traditional market forms.",
  },
  {
    question: "Is Yuktahaar an organic grocery store?",
    answer:
      "No, Yuktahaar is not an organic grocery store. It's a service that connects different organic/natural producers with conscious consumers. You can subscribe and avail our services through phone.",
  },
  {
    question: "Is Yuktahaar a social work organization?",
    answer:
      "No, Yuktahaar is a commercial organization with service at its core. It employs salaried employees and aims to be a sustainable commercial organization generating reasonable income.",
  },
  {
    question: "Does Yuktahaar have any of their own products?",
    answer:
      "No, all of Yuktahaar's products are made by different farmers and producers. Yuktahaar mentions this in all its communications. The main objective is to connect consumers with producers.",
  },
  {
    question: "Are the products from Yuktahaar certified organic?",
    answer:
      "Yuktahaar doesn't feel the need for organic certification. We have direct or indirect relationships with all farmers and only incorporate producers into our family after meeting or talking to them and establishing trust. Yuktahaar is a transparent service through which you can get to know the manufacturer yourself, check and taste the product, and then decide whether to buy it or not.",
  },
  {
    question: "What is the product range of Yuktahaar?",
    answer:
      "Yuktahaar offers over 300 different items, including dry groceries (grains, pulses, spices, oils), fresh fruits and vegetables, milk products, and other specialty products. Some examples include wheat, rice, pulses, cold-pressed oils, desi cow ghee, natural sweeteners, seasonal fruits and vegetables, and various traditional food items.",
  },
  {
    question: "How does Yuktahaar work?",
    answer:
      "The entire model of Yuktahaar works on WhatsApp as per your demand. For dry groceries, you can order anytime. For seasonal fruits and vegetables, farmers send availability information, you register your demand, and we deliver on the same day.",
  },
  {
    question: "Is there a membership fee for Yuktahaar?",
    answer:
      "Currently, there is no membership fee, and the work is being done on a voluntary basis. However, due to increasing demand, we may soon charge a fee or deposit for new members.",
  },
];
