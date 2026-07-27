type ClickableButtonProp = {
  icon: any;
  value: string;
};

const ClickableButton = ({ icon, value }: ClickableButtonProp) => {
  return (
    <button className="text-base lg:text-xl w-full md:w-1/4 lg:w-1/7 bg-white text-green-700 font-bold px-4 py-2 rounded-lg hover:text-white hover:bg-green-700 border transition shadow-xl/20 flex justify-center items-center gap-2">
      {icon}
      {value}
    </button>
  );
};

export default ClickableButton;
