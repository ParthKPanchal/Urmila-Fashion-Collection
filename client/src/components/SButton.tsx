import { Link } from "react-router-dom";

type SButtonProp = {
  link: string;
  value: string;
};

const SButton = ({ link, value }: SButtonProp) => {
  return (
    <Link
      to={link}
      className="bg-green-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-green-700 transition shadow-xl/20"
    >
      {value}
    </Link>
  );
};

export default SButton;
