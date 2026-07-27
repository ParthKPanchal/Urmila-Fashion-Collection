import HeroImage from "../../assets/hero.png";
import { FaLeaf } from "react-icons/fa";
import { SlChemistry } from "react-icons/sl";
import { GiSelfLove } from "react-icons/gi";
import { BsShieldFillCheck } from "react-icons/bs";
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
                🌿 Homemade. Healthy. Delicious.
              </h2>
            </div>
            <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold leading-tight text-green-700 mb-6 text-shadow-lg/20">
              <span className="text-black">Our Menu</span>
            </h2>
            <div className="text-gray-600 text-lg mb-8 bg-white p-5 rounded-lg shadow-xl/30">
              <p>
                Every meal is prepared fresh every morning with love, hygiene
                and the finest ingredients.
              </p>
              <ul className="grid grid-cols-2 gap-4 mt-5">
                <li className="flex items-center gap-2">
                  <FaLeaf /> 100% Pure Veg
                </li>

                <li className="flex items-center gap-2">
                  <SlChemistry /> No Preservatives
                </li>

                <li className="flex items-center gap-2">
                  <BsShieldFillCheck /> Hygienic Kitchen
                </li>

                <li className="flex items-center gap-2">
                  <GiSelfLove /> Made with love
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
