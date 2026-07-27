import ClickableButton from "../ClickableButton";
import { MdMenuBook } from "react-icons/md";
import { FaPlateWheat, FaBowlFood } from "react-icons/fa6";
import { GiRiceCooker } from "react-icons/gi";
import { BiSolidBowlRice } from "react-icons/bi";
import MenuCard from "../MenuCard";
import { menu } from "../../data/menu";
import { useState } from "react";
export default function FilterMenu() {
  const [items, setItems] = useState(menu);

  return (
    <section
      id="filterMenu"
      className="w-full bg-[#fdf5ee] py-15 px-5 inset-shadow-sm inset-shadow-gray-500"
    >
      <div className="max-w-7xl mx-auto px-5 border-2 bg-green-900 rounded-lg mb-12 mx-5 flex flex-wrap p-5 gap-5 text-white justify-evenly items-center text-center">
        <ClickableButton
          icon={<MdMenuBook />}
          value="All Items"
          onClick={() => {
            setItems([menu]);
          }}
        />
        <ClickableButton
          icon={<FaPlateWheat />}
          value="Thali Meals"
          onClick={() => {
            const filtered = items.filter((item) => {
              return item.category === "Thali";
            });
          }}
        />
        <ClickableButton
          icon={<GiRiceCooker />}
          value="Dal"
          onClick={() => {
            const filtered = items.filter((item) => {
              return item.category === "Dal";
            });

            setItems(filtered);
          }}
        />
        <ClickableButton
          icon={<FaBowlFood />}
          value="Sabji"
          onClick={() => {
            const filtered = items.filter((item) => {
              return item.category === "Sabji";
            });
            setItems(filtered);
          }}
        />
        <ClickableButton
          icon={<BiSolidBowlRice />}
          value="Rice"
          onclick={() => {
            const filtered = items.filter((item) => {
              return item.category === "Rice";
            });
            setItems(filtered);
          }}
        />
        <ClickableButton
          icon={<MdMenuBook />}
          value="Roti"
          onClick={() => {
            const filtered = items.filter((item) => {
              return item.category === "Roti";
            });
            setItems(filtered);
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-lg font-medium text-green-700">🌿Today's Menu</h2>
        <h2 className="text-4xl font-bold mt-2 mb-10">Our Delicious Menu</h2>
      </div>
      <div
        id="product-card"
        className="max-w-7xl mx-auto px-5 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {items.map((item, index) => (
          <MenuCard
            key={index}
            src={item.src}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
}
