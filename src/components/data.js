import {
  Leaf,
  ShoppingBag,
  Users,
  Heart,
  Sparkles,
  Globe,
} from "lucide-react";

import benefitOneImg from "../../public/screen2.png";
import benefitTwoImg from "../../public/screen3.png";

const benefitOne = {
  title: "Connecting Conscious Consumers with Organic Producers",
  desc: "Yuktahaar is a community of health, lifestyle, and food-conscious families who want to understand good health and purposeful living, and find ways to improve it.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Educate about Diet and Health",
      desc: "We provide information on healthy eating and sustainable living.",
      icon: <Leaf />,
    },
    {
      title: "Source Genuine Products",
      desc: "We locate and verify natural, chemical-free producers for you.",
      icon: <ShoppingBag />,
    },
    {
      title: "Build Lasting Relationships",
      desc: "We create bonds between producers, consumers, and facilitators.",
      icon: <Users />,
    },
  ],
};

const benefitTwo = {
  title: "Our Commitment to Sustainable Living",
  desc: "Yuktahaar aims to develop a seamless community of producers, facilitators, and consumers, ultimately trying to eliminate the market in all its forms.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Transparent Service",
      desc: "Get to know the manufacturers and check products yourself.",
      icon: <Heart />,
    },
    {
      title: "Wide Product Range",
      desc: "Over 300 different organic and natural products available.",
      icon: <Sparkles />,
    },
    {
      title: "Local Focus",
      desc: "Priority given to farmers from Nagpur and Vidarbha region.",
      icon: <Globe />,
    },
  ],
};

export {benefitOne, benefitTwo};