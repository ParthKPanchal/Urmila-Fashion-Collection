import React from "react";

type HowCardProp = {
  icon: React.ReactNode;
  title: string;
  description: string;
};
const HowStaticCard = ({ icon, title, description }: HowCardProp) => {
  return (
    <div className="rounded-xl border border-black p-6 shadow-xl/20 hover:shadow-xl/30 transition duration-300 bg-[#fdf5ee] w-2xs text-center">
      <div className="text-4xl text-green-600 flex items-center justify-center p-5 rounded-full bg-green-100 w-20 h-20 mx-auto">
        {icon}
      </div>

      <h4 className="mt-4 text-xl font-semibold">{title}</h4>

      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
};

export default HowStaticCard;
