import { Link } from "react-router-dom";

interface logoProps {
  logo?: string;
}

const Logo: React.FC<logoProps> = ({ logo }) => {
  return (
    <Link to="/" className="shrink-0">
      <img alt="logo" src={logo} className="h-[44px] w-auto object-contain" />
    </Link>
  );
};

export default Logo;
