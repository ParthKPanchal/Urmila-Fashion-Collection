import HeroImage from "../../assets/hero.png";
import SButton from "../SButton";
import { FaStar } from "react-icons/fa";
// import { IconName } from "react-icons/lu";
export default function Hero() {
  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat py-15"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2">
            <div className="inline-block rounded-full bg-green-100 px-5 py-2 mb-6">
              <h2 className="text-lg font-medium text-green-700">
                🌿 100% Pure Vegetarian
              </h2>
            </div>
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold leading-tight text-green-700 mb-6 text-shadow-lg/20">
              <span className="text-black">Homemade Gujarati Meals</span>
              <br />
              Cooked with Love,
              <br />
              Delivered with Care.
            </h1>
            <div className="text-gray-600 text-lg mb-8 bg-white p-5 rounded-lg shadow-xl/30">
              <p>
                Healthy, hygienic and delicious homemade food prepared fresh
                everyday by our family for yours.
              </p>
              <ul className="grid grid-cols-2 gap-4 mt-5">
                <li className="flex items-center gap-2">🍛 Fresh Dal</li>

                <li className="flex items-center gap-2">🍚 Steamed Rice</li>

                <li className="flex items-center gap-2">🫓 Soft Roti</li>

                <li className="flex items-center gap-2">🥘 Seasonal Sabji</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-4">
              <SButton link="/contact" value="Order Today's Tiffin" />

              <SButton link="/products" value="View Weekly Menu" />
            </div>
            <div className="bg-white p-5 rounded-lg mt-5 shadow-xl/30">
              <div className="flex text-yellow-400 text-xl">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="text-gray-700 font-medium">
                Loved by <span className="font-bold">50+</span> Happy Families
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
