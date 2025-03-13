import { FaEarthAmericas } from "react-icons/fa6";

function Logo() {
  return (
    <div>
      <div className="flex items-center gap-2">
        <FaEarthAmericas color="#414836" size="28" />
        <h1 className="text-4xl text-forest-green font-semibold tracking-wide">
          terrasphere
        </h1>
      </div>
      <p className="text-lg text-fern-green">connect the world</p>
    </div>
  );
}

export default Logo;
