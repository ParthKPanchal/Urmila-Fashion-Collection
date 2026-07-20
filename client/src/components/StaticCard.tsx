import React from "react";

type CardProp = {
  icon: React.ReactNode;
  title: string;
  description: string;
};
const StaticCard = ({ icon, title, description }: CardProp) => {
  return (
    <div className="rounded-xl border p-6 shadow-xl/20 hover:shadow-xl/30 transition duration-300 bg-[#fdf5ee] w-2xs ">
      <div className="text-4xl text-green-600">{icon}</div>

      <h4 className="mt-4 text-xl font-semibold">{title}</h4>

      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
};

export default StaticCard;
