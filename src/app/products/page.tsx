import React from 'react';
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { ShoppingBag, Apple, Coffee, Wheat, Bean, Drumstick, Leaf, Droplet, Cheese, Cookie, CloudRain, Grape, Carrot, Cherry, Candy, Banana, Flour } from 'lucide-react';

const iconMap = {
  'main grains': Wheat,
  'pulses': Bean,
  'khada anaaj': Drumstick,
  'spices': Leaf,  // Replaced Pepper with Leaf
  'wood cold pressed oil': Droplet,  // Replaced Oil with Droplet
  'pure desi cow bilona ghee': Cheese,  // Replaced Milk with Cheese
  'natural sweeteners': Cookie,
  'pink salt': CloudRain,  // Replaced Salt with CloudRain
  'seasonal fruits': Grape,  // Replaced Fruit with Grape
  'seasonal vegetables': Carrot,
  'milk products': Cheese,  // Replaced Milk with Cheese
  'gulkand': Cherry,
  '10 types of laddoos': Candy,
  'seasonal syrup': Coffee,
  'banana chips': Banana,
  'banana chivda': Banana,
  'banana flour': Flour,
};

const BoxUIElement = ({ item }) => {
  const Icon = iconMap[item.toLowerCase()] || Coffee;
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex flex-col items-center justify-center">
      <Icon className="w-6 h-6 md:w-8 md:h-8 text-[#65A30D] mb-2" />
      <span className="text-center text-gray-600 dark:text-gray-400">{item}</span>
    </div>
  );
};

const ProductSection = ({ title, items, icon: Icon }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 md:p-6 mb-8 flex-1 stick-btnn">
      <div className="flex items-center mb-4">
        <Icon className="w-6 h-6 md:w-8 md:h-8  mr-2 md:mr-3" />
        <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((item, index) => (
          <BoxUIElement key={index} item={item} />
        ))}
      </div>
      <div className="mt-4 bottom-0">
        <button className="w-full bg-lime-600 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default function Products() {
  const dryGrocery = [
    "Main grains",
    "Pulses",
    "Khada anaaj",
    "Spices",
    "Wood cold pressed oil",
    "Pure Desi Cow Bilona Ghee",
    "Natural sweeteners",
    "Pink salt"
  ];

  const freshProduce = [
    "Seasonal fruits",
    "Seasonal Vegetables",
    "Milk products"
  ];

  const otherProducts = [
    "Gulkand",
    "10 types of laddoos",
    "Seasonal syrup",
    "Banana chips",
    "Banana chivda",
    "Banana flour",
    "More products are awaited"
  ];

  return (
    <Container className="px-4 md:px-8 lg:px-16">
      <SectionTitle preTitle="Our Offerings" title="Yuktahaar Products">
        Discover our range of organic and natural products
      </SectionTitle>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-8 mx-4 md:mx-8 lg:mx-16">
        <ProductSection title="Yuktahaar Dry Grocery" items={dryGrocery} icon={ShoppingBag} />
        <ProductSection title="Fresh Fruits and Vegetables" items={freshProduce} icon={Apple} />
        <ProductSection title="Other Products" items={otherProducts} icon={Coffee} />
      </div>
    </Container>
  );
}
