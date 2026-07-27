import { BiSolidFoodMenu } from "react-icons/bi";
import Dal from "../../assets/Dal.png";
import Rice from "../../assets/Rice.png";
import Roti from "../../assets/Roti.png";
import Sabji from "../../assets/Sabji.png";
import StaticCard from "../StaticCard";
// import SButton from "../SButton";
import { FaRupeeSign } from "react-icons/fa";
import { PiCookingPotFill } from "react-icons/pi";
import { MdDeliveryDining } from "react-icons/md";

export default function WhyChooseUs() {
  return (
    <section
      className="w-full bg-white py-15 px-5 inset-shadow-sm inset-shadow-gray-500"
      id="why-chosose-us"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-lg font-medium text-green-700">🌿Why Choose Us</h2>
        <div className="mt-5 flex flex-wrap justify-between gap-5">
          <StaticCard
            icon={<BiSolidFoodMenu />}
            title="Made with love"
            description="Every Meal is prepared by our family with the same love and care as at home."
          />
          <StaticCard
            icon={<PiCookingPotFill />}
            title="Healthy Ingredients"
            description="We use fresh vegetables, quality spices and healthy ingredients every day."
          />
          <StaticCard
            icon={<MdDeliveryDining />}
            title="Timely Delivery"
            description="We understand your time is valuable. Expect on-time delivery. Every time."
          />
          <StaticCard
            icon={<FaRupeeSign />}
            title="Affordable Pricing"
            description="Good food should be healthy and affordable for everyone."
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-2 flex flex-wrap bg-[#fdf5ee] rounded-lg mt-12 shadow-xl/30">
        <div className="w-full lg:w-1/4 bg-green-900 text-white p-5 flex flex-col items-center justify-center gap-2">
          <h3 className="text-2xl font-bold">Today's special</h3>
          <p>Simple. Balanced. Homemade.</p>
        </div>
        <div className="w-full lg:w-3/4 flex p-5 flex-wrap gap-5 justify-evenly">
          <div className="flex flex-col items-center">
            <img src={Dal} width="200em" alt="Dal" className="p-5" />
            <p className="text-lg font-medium text-green-700">Dal</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Rice} width="200em" alt="Rice" className="p-5" />
            <p className="text-lg font-medium text-green-700">Rice</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Sabji} width="200em" alt="Sabji" className="p-5" />
            <p className="text-lg font-medium text-green-700">Sabji</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Roti} width="200em" alt="Roti" className="p-5" />
            <p className="text-lg font-medium text-green-700">Roti</p>
          </div>
        </div>
      </div>
    </section>
  );
}
