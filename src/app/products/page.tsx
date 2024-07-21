import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";

export default function Products() {
  return (
    <Container>
      <SectionTitle preTitle="Our Offerings" title="Yuktahaar Products">
        Discover our range of organic and natural products
      </SectionTitle>

      <div className="mb-20">
        <h3 className="text-2xl font-bold mb-4">Yuktahaar Dry Grocery</h3>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
          <li>Main grains: Wheat, rice, sorghum, ragi etc.</li>
          <li>Pulses: Tur, Peanut, Udid etc.</li>
          <li>Khada anaaj: Groundnut, gram, cinnamon, barbati, mont etc.</li>
          <li>
            Spices: Chili, turmeric, coriander, Kasuri fenugreek, spices etc.
          </li>
          <li>
            Wood cold pressed oil: Peanuts, Mustard, Sesame, Coconut, Almond
            etc.
          </li>
          <li>Pure Desi Cow Bilona Ghee</li>
          <li>Natural sweeteners: Brown sugar, 4 types of organic jaggery</li>
          <li>Pink salt</li>
        </ul>
      </div>

      <div className="mb-20">
        <h3 className="text-2xl font-bold mb-4">
          Yuktahaar Fresh Fruits and Vegetables
        </h3>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
          <li>
            Seasonal fruits: Natural, non-toxic fruits like pomegranate, grapes,
            oranges, mosambi, watermelon, cantaloupe, amla etc.
          </li>
          <li>
            Seasonal Vegetables: All kinds of vegetables as per availability
          </li>
          <li>Milk products: Pedha, Khava, Paneer etc. (As available)</li>
        </ul>
      </div>

      <div className="mb-20">
        <h3 className="text-2xl font-bold mb-4">Other Products</h3>
        <p className="text-gray-600 dark:text-gray-400">
          Gulkand, 10 types of laddoos, seasonal syrup, banana chips, banana
          chivda, banana flour etc. (More products are awaited)
        </p>
      </div>
    </Container>
  );
}
