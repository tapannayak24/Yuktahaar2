import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

export function Footer() {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms and Conditions", href: "/terms" },
  ];

  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div>
              <Link
                href="/"
                className="flex items-center space-x-2 text-2xl font-medium text-lime-800 dark:text-gray-100"
              >
                <Image
                  src="/logo.png"
                  alt="Yuktahaar"
                  width="32"
                  height="32"
                  className="w-8"
                />
                <span>Yuktahaar</span>
              </Link>
            </div>

            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
              Yuktahaar is a community of health-conscious families connecting
              with organic producers. We facilitate a sustainable and purposeful
              lifestyle through clean, natural food.
            </div>
          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-lime-500 focus:text-lime-500 focus:bg-lime-100 focus:outline-none dark:focus:bg-trueGray-700"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="">
            <div>Contact Us</div>
            <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
              <a href="https://wa.me/7987624802" target="_blank" rel="noopener">
                <span className="sr-only">WhatsApp</span>
                <svg
                  role="img"
                  width="24"
                  height="24"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>WhatsApp</title>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
              <a href="tel:+917987624802" target="_blank" rel="noopener">
                <span className="sr-only">Phone</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </a>
            </div>
            <div className="mt-5">
              <a
                href="mailto:yuktahaarorganics@gmail.com"
                target="_blank"
                rel="noopener"
                className="relative block w-44"
              >
                yuktahaarorganics@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()}. Yuktahaar Organics. All rights
          reserved.
        </div>
      </Container>
    </div>
  );
}