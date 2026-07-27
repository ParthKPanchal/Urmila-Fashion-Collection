import { useState } from "react";
import { menu } from "../data/menu";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { IoLogoWhatsapp, IoMdTimer } from "react-icons/io";
import { SlChemistry } from "react-icons/sl";
import { PiBowlFood } from "react-icons/pi";
export default function ProductDetail() {
  const [quantity, setQuantity] = useState(0);
  const IncreaseQuantity = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  const DecreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <section className="bg-[#fdf5ee]">
      <section className="w-full bg-cover bg-center bg-no-repeat py-15 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <div className="w-full lg:w-1/2 bg-white rounded-2xl shadow-lg p-8">
              <img
                src={menu[0].src}
                alt={menu[0].title}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="text-gray-600 text-lg mb-8 bg-white p-5 rounded-lg shadow-xl/30">
                <div className="inline-block rounded-full bg-green-100 px-5 py-2 mb-5">
                  <h2 className="text-lg font-medium text-green-700">
                    🌿 100% Pure Vegetarian
                  </h2>
                </div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-5">
                  {menu[0].title}
                </h2>
                <p className="leading-8 text-gray-600">{menu[0].description}</p>
                <div className="flex justify-start items-center mt-2 text-yellow-400 text-xl">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <p className="text-gray-500 text-base ml-2">(120+ Reviews)</p>
                </div>
                <div className="flex justify-start items-center mt-2 text-yellow-400 text-xl">
                  <p className="text-gray-500">50+ Happy Customer</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 mt-8 flex flex-col lg:flex-row justify-between items-center gap-6">
                  <div>
                    <div className="flex  gap-5">
                      <p className="text-3xl text-red-400 font-bold line-through">
                        ₹{menu[0].price + 20}/-
                      </p>
                      <p className="text-3xl font-bold">₹{menu[0].price}/-</p>
                      <p className="text-2xl">/ Meal</p>
                    </div>
                  </div>
                  <div>
                    <p
                      className="border flex gap-2 font-bold p-2 border rounded bg-white text-green-700
 border rounded bg-white text-green-700"
                    >
                      Quantity{" "}
                      <button
                        onClick={DecreaseQuantity}
                        disabled={quantity < 0}
                        className="px-2"
                      >
                        -
                      </button>
                      {quantity}
                      <button
                        onClick={IncreaseQuantity}
                        disabled={quantity > 10}
                        className="px-2"
                      >
                        +
                      </button>
                    </p>
                  </div>
                </div>
                <p className="mt-5">Delivery Type:</p>
                <div className="flex justify-between mt-5">
                  <p className="py-2 px-6 border rounded bg-green-100 text-green-700">
                    Lunch (11:00 AM - 2:00 PM)
                  </p>
                  <p className="py-2 px-6 border rounded bg-green-100 text-green-700">
                    Dinner (8:00 AM - 10:00 PM)
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 mt-5">
                  <button className="bg-green-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-green-700 transition shadow-xl/20 flex items-center gap-3">
                    <FaShoppingCart /> Add to Cart
                  </button>
                  <button className="bg-green-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-green-700 transition shadow-xl/20 flex items-center gap-3">
                    <IoLogoWhatsapp /> Order on WhatsApp
                  </button>
                </div>
                <div className="mt-5 flex flex-wrap justify-between text-green-700">
                  <p className="flex items-center gap-3">
                    <IoMdTimer /> On Time Delivery
                  </p>
                  <p className="flex items-center gap-3">
                    <SlChemistry />
                    Hygienic Kitchen
                  </p>
                  <p className="flex items-center gap-3">
                    <PiBowlFood /> Freshly Cooked
                  </p>
                  <p className="flex items-center gap-3">
                    <SlChemistry /> No Preservatives
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
