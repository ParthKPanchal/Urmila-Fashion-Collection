import { Link } from "react-router-dom";

type SButtonProp = {
  link: string;
  value: string;
};

const SButton = ({ link, value }: SButtonProp) => {
  return (
    <Link
      to={link}
      className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
    >
      {value}
    </Link>
  );
};

export default SButton;
