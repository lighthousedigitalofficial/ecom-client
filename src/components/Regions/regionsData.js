import { FaTree, FaWater, FaMountain, FaMapMarkerAlt, FaLandmark } from "react-icons/fa";

export const regions = [
  {
    id: 1,
    name: "Punjab",
    bgColor: "bg-gradient-to-r from-red-500 to-pink-500",
    slug: "punjab",
    icon: FaTree,
  },
  {
    id: 2,
    name: "Sindh",
    bgColor: "bg-gradient-to-r from-orange-500 to-yellow-700",
    slug: "sindh",
    icon: FaWater,
  },
  {
    id: 3,
    name: "Khyber Pakhtunkhwa",
    bgColor: "bg-gradient-to-r from-green-500 to-green-700",
    slug: "khyberPakhtunkhwa",
    icon: FaMountain,
  },
  {
    id: 4,
    name: "Balochistan",
    bgColor: "bg-gradient-to-r from-blue-500 to-cyan-500",
    slug: "balochistan",
    icon: FaMapMarkerAlt,
  },
  {
    id: 5,
    name: "Azad Jammu & Kashmir",
    bgColor: "bg-gradient-to-r from-purple-500 to-indigo-500",
    slug: "azadJammoKashmir",
    icon: FaLandmark,
  },
  {
    id: 6,
    name: "Gilgit Baltistan",
    bgColor: "bg-gradient-to-r from-pink-500 to-pink-700",
    slug: "gilgitbaltistan",
    icon: FaTree,
  },
];
