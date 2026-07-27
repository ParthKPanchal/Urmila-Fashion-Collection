type MenuCardProp = {
  src: any;
  title: string;
  description: string;
  price: number;
};
export default function MenuCard({
  src,
  title,
  description,
  price,
}: MenuCardProp) {
  return (
    <div className="bg-white rounded-xl shadow flex flex-col overflow-hidden">
      <img src={src} alt={title} className="w-full h-50 object-cover" />

      <div className="p-5 flex flex-col flex-1">
        <h4 className="text-xl font-bold text-green-700">{title}</h4>

        <p className="text-gray-500 mt-2 flex-1">{description}</p>

        <div className="flex flex-wrap justify-between items-center mt-5">
          <p className="text-xl text-red-400 font-bold line-through">
            ₹{price + 20}/-
          </p>
          <p className="text-xl font-bold">₹{price}/-</p>

          <button className=" bg-green-700 text-white px-5 py-2 rounded-full hover:bg-green-800 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
