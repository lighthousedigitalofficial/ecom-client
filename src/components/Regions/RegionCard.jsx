import { Link } from "react-router-dom";

const RegionCard = ({ name, bgColor, icon: Icon, slug }) => {
  return (
    <Link
      to={`/region-products?region=${slug}`}
      className={`relative w-full h-32 flex flex-col items-center justify-center cursor-pointer max-w-sm ${bgColor} rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-opacity-90`}
      aria-label={`Explore ${name}`}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/20 to-white/10 opacity-0 transition-opacity duration-300 hover:opacity-100"></div>

      {/* Dynamic Icon */}
      {Icon && (
        <div className="mb-3 text-white text-4xl">
          <Icon />
        </div>
      )}

      {/* Animated Text */}
      <h2 className="text-xl font-bold text-white text-center relative">
        {name}
      </h2>
    </Link>
  );
};

export default RegionCard;
