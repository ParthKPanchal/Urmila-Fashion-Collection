import { BiSolidFoodMenu } from "react-icons/bi";
import HowStaticCard from "../HowStaticCard";
import { PiCookingPotFill } from "react-icons/pi";
import { MdDeliveryDining } from "react-icons/md";
import { FaBowlFood, FaPeopleGroup } from "react-icons/fa6";
import JagrutiImage from "../../assets/jagruti.png";
import { ImHappy2 } from "react-icons/im";
import { GiThreeLeaves } from "react-icons/gi";
import { FaCalendarAlt } from "react-icons/fa";

export default function HowItWorks() {
  return (
    <section
      className="w-full px-5 bg-[#fdf5ee] py-15 inset-shadow-sm inset-shadow-gray-500"
      id="how-its-works"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-lg font-medium text-green-700">🌿How its work</h2>
        <div className="mt-5 flex flex-wrap justify-between gap-5">
          <HowStaticCard
            icon={<BiSolidFoodMenu />}
            title="Choose Your Plan"
            description="Select the tiffin plan that suits you."
          />
          <HowStaticCard
            icon={<PiCookingPotFill />}
            title="We Cook Fresh"
            description="We prepare your meal fresh every morning."
          />
          <HowStaticCard
            icon={<MdDeliveryDining />}
            title="Delivered to You"
            description="We deliver it to your doorstep on time."
          />
          <HowStaticCard
            icon={<FaBowlFood />}
            title="Enjoy Homemade Food"
            description="Enjoy healthy, tasty and homemade meals."
          />
        </div>
      </div>
      <div className="max-w-7xl px-5 mx-auto border-2 bg-green-900 rounded-lg my-12 flex flex-wrap p-5 gap-5 text-white justify-evenly text-center">
        <div className="w-full lg:w-1/5 border text-white rounded-xl overflow-hidden flex items-center justify-evenly">
          <FaPeopleGroup className="p-5 w-20 h-20" />
          <div className="text-white p-2 flex flex-col items-center justify-center gap-2">
            <h3 className="text-3xl font-bold">30+</h3>
            <p>Daily Tiffins</p>
          </div>
        </div>
        <div className="w-full lg:w-1/5 border text-white rounded-xl overflow-hidden flex items-center justify-evenly">
          <ImHappy2 className="p-5 w-20 h-20" />
          <div className="text-white p-2 flex flex-col items-center justify-center gap-2">
            <h3 className="text-3xl font-bold">50+</h3>
            <p>Daily Tiffins</p>
          </div>
        </div>
        <div className="w-full lg:w-1/5 border text-white rounded-xl overflow-hidden flex items-center justify-evenly">
          <GiThreeLeaves className="p-5 w-20 h-20" />
          <div className="text-white p-2 flex flex-col items-center justify-center gap-2">
            <h3 className="text-3xl font-bold">100+</h3>
            <p>Daily Tiffins</p>
          </div>
        </div>
        <div className="w-full lg:w-1/5 border text-white rounded-xl overflow-hidden flex items-center justify-evenly">
          <FaCalendarAlt className="p-5 w-20 h-20" />
          <div className="text-white p-2 flex flex-col items-center justify-center gap-2">
            <h3 className="text-3xl font-bold">100+</h3>
            <p>Daily Tiffins</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-2 flex flex-wrap rounded-lg mt-5 p-5 bg-white">
        <div className="w-full lg:w-1/4">
          <img
            src={JagrutiImage}
            alt="Jagruti Kanaiya Panchal"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full lg:w-3/4 flex flex-col gap-4 p-5 justify-center items-center">
          <h4 className="text-lg font-medium text-green-700">🌿How its work</h4>
          <h2 className="text-3xl font-bold text-green-900">
            <span>Mrs. Jagruti Kanaiya Panchal</span>
          </h2>
          <p>
            Every Meal is personallly prepared using traditional Gujarati
            recipes and fresh ingredients.
          </p>
          <p>
            For us, this is not just a business - it's a way of serving homemade
            food to our extended family.
          </p>
          <h6 className="text-green-700 font-bold">
            <i>Food made with care, served like family.</i>
          </h6>
        </div>
      </div>
    </section>
  );
}
