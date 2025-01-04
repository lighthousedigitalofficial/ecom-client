// import { useEffect, useState } from "react";
// import { Navbar, IconButton } from "@material-tailwind/react";
// import { FaUser, FaSignInAlt, FaUserPlus, FaSearch } from "react-icons/fa";
// import { MdArrowDropDown } from "react-icons/md";
// import { Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react";
// import logo from "../../assets/app-logo/app-logo.png";
// import SearchBar from "./SerachBar";
// import { Link } from "react-router-dom";
// import ProfileMenu from "../Profile/ProfileMenu";
// import CartIcon from "./CartIcon";
// import MobileSidebar from "./MobileSidebar";
// import WishlistBucket from "./WishlistBucket";
// import useAuth from "./../../hooks/useAuth";
// import Loader from "../Loader";
// import CategoryDropDown from "../Categories/CategoryDropDown";
// import { FaMobileScreen } from "react-icons/fa6";
// import { useGetCustomerDetailsQuery } from "../../redux/slices/customersApiSlice";

// const NavbarSticky = () => {
//   const [openMenu, setOpenMenu] = useState(false);
//   const [isSticky, setIsSticky] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [openCategoryMenu, setOpenCategoryMenu] = useState(false);
//   const user = useAuth();

//   const { data: userData, isFetching: isUserFetching } = useGetCustomerDetailsQuery(user?._id, {
//     skip: !user?._id,
//   });

//   const handleScroll = () => {
//     const scrollPosition = window.scrollY;
//     const threshold = window.innerHeight * 0.25;
//     setIsSticky(scrollPosition > threshold);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const toggleCategoryMenu = () => {
//     setOpenCategoryMenu(!openCategoryMenu);
//   };

//   return isUserFetching ? (
//     <Loader />
//   ) : (
//     <div
//       className={`w-full z-40 transition-all bg-white duration-500 ease-in-out py-4 ${
//         isSticky ? "fixed top-0 shadow-lg " : "relative"
//       }`}
//       style={{
//         transform: isSticky ? "translateY(0)" : "translateY(-10%)",
//       }}
//     >
//       <Navbar variant="gradient" className="mx-auto w-[100%] p-0 shadow-none">
//         <div className="flex items-center justify-between lg:gap-x-6 gap-x-2 text-white">
//           {/* Logo */}
//           <Link to="/">
//             <img
//               src={logo}
//               alt="brand logo"
//               className="w-16 h-16 sm:w-36 md:w-40 object-contain"
//             />
//           </Link>

//           {/* Category Dropdown */}
//           <div
//             className="relative cursor-pointer"
//             onClick={toggleCategoryMenu}
//           >
//             <p className="flex items-center text-black text-lg">
//               All Categories <MdArrowDropDown className="ml-2 w-5 h-5" />
//             </p>
//             {openCategoryMenu && (
//               <div className="absolute bg-white shadow-md rounded-md p-4 top-full left-0 z-50">
//                 <CategoryDropDown />
//               </div>
//             )}
//           </div>

       
//           {/* Search Bar */}
//           <div className="flex-grow w-20 hidden md:block">
//             <SearchBar />
//           </div>
//           <div className="md:hidden">
//             <IconButton
//               variant="text"
//               className="bg-gray-100 rounded-full border-none"
//               onClick={() => setIsSearchOpen(!isSearchOpen)}
//             >
//               <FaSearch className="h-5 w-5 text-primary-500" />
//             </IconButton>
//           </div>

//           {/* User Options */}
//           <div className="flex items-center gap-3">
           
//             <WishlistBucket user={user} />
//             <CartIcon />
//             {user && userData?.doc ? (
//               <ProfileMenu user={userData?.doc} />
//             ) : (
//               <Menu>
//                 <MenuHandler>
//                   <IconButton
//                     variant="text"
//                     className="bg-gray-100 rounded-full border-none"
//                   >
//                     <FaUser className="h-5 w-5 text-primary-500" />
//                   </IconButton>
//                 </MenuHandler>
//                 <MenuList className="overflow-visible md:grid shadow-md">
//                   <Link to="/customer/auth/sign-in" className="outline-none">
//                     <MenuItem>
//                       <FaSignInAlt className="inline mr-2" /> Login
//                     </MenuItem>
//                   </Link>
//                   <Link to="/customer/auth/sign-up" className="outline-none">
//                     <MenuItem>
//                       <FaUserPlus className="inline mr-2" /> Sign Up
//                     </MenuItem>
//                   </Link>
//                 </MenuList>
//               </Menu>
//             )}
//           </div>
//         </div>

//         {isSearchOpen && (
//           <div className="w-full flex items-center justify-between bg-primary-100 absolute top-full left-0 right-0 shadow-md p-2 transition-transform duration-300 ease-in-out rounded-lg">
//             <div className="flex-grow">
//               <SearchBar />
//             </div>
//             <button
//               className="p-2 bg-primary-500 text-white rounded-md"
//               onClick={() => setIsSearchOpen(false)}
//             >
//               Search
//             </button>
//           </div>
//         )}
//       </Navbar>
//     </div>
//   );
// };

// export default NavbarSticky;




import { useEffect, useRef, useState } from "react";
import { Navbar, IconButton } from "@material-tailwind/react";
import { FaUser, FaSignInAlt, FaUserPlus, FaSearch } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react";
import logo from "../../assets/app-logo/app-logo.png";
import SearchBar from "./SerachBar";
import { Link } from "react-router-dom";
import ProfileMenu from "../Profile/ProfileMenu";
import CartIcon from "./CartIcon";
import WishlistBucket from "./WishlistBucket";
import useAuth from "./../../hooks/useAuth";
import Loader from "../Loader";
import CategoryDropDown from "../Categories/CategoryDropDown";
import { useGetCustomerDetailsQuery } from "../../redux/slices/customersApiSlice";
import './NavbarSticky.css'
import MainSearch from "../Home/MainSearch";
const NavbarSticky = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const user = useAuth();

  const { data: userData, isFetching: isUserFetching } = useGetCustomerDetailsQuery(user?._id, {
    skip: !user?._id,
  });

  const handleScroll = () => {
    setIsSticky(window.scrollY > window.innerHeight * 0.25);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [openCategoryMenu, setOpenCategoryMenu] = useState(false);
  const dropdownRef = useRef(null);

  const toggleCategoryMenu = () => {
    setOpenCategoryMenu((prev) => !prev);
  };

  const closeMenu = () => {
    setOpenCategoryMenu(false);
  };

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  };

  return isUserFetching ? (
    <Loader />
  ) : (
    <div
      className={`w-full z-40 bg-primary-500 transition-all duration-500 ${
        isSticky ? "fixed top-0 shadow-md" : "relative"
      }`}
    >
      <Navbar variant="gradient" className="mx-auto border-none bg-primary-500 w-full px-4 py-2 lg:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <img
              src={logo}
              alt="brand logo"
              className="w-12 h-12 sm:w-15 sm:h-15 object-contain"
            />
          </Link>
        <div       
         className="flex items-center gap-6 sm:gap-6"
 >
     <div
  className="hidden md:block relative group"
  ref={dropdownRef}
>
  {/* Trigger */}
  <p
    className="flex items-center text-white  text-sm sm:text-base cursor-pointer"
    tabIndex={0} // Make it focusable
  >
    <span className="font-medium">All Categories</span>
    <MdArrowDropDown
      className="ml-2  text-white transition-transform bg-none duration-300 group-hover:rotate-180"
    />
  </p>

  {/* Dropdown Menu */}
  <div
    className="absolute  shadow-lg rounded-md mt-2 p-4 z-50 w-48 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-2 transition-all duration-300"
  >
    <CategoryDropDown />
  </div>
</div>


          {/* Search Bar */}
          <div className="hidden lg:flex flex-grow mx-4">
            <MainSearch />
          </div>
            
            </div>

        

          <div className="lg:hidden">
            <IconButton
              variant="text"
              className="p-2 bg-gray-100 rounded-full"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <FaSearch className="h-5 w-5 text-gray-600" />
            </IconButton>
          </div>

          {/* User Options */}
          <div className="flex items-center gap-2 sm:gap-3">
            <WishlistBucket user={user} />
            <CartIcon />
            {user && userData?.doc ? (
              <ProfileMenu user={userData?.doc} />
            ) : (
              <Menu>
                <MenuHandler>
                  <IconButton
                    variant="text"
                    className="p-2 bg-gray-100 rounded-full"
                  >
                    <FaUser className="h-5 w-5 text-gray-600" />
                  </IconButton>
                </MenuHandler>
                <MenuList className="shadow-md">
                  <Link to="/customer/auth/sign-in">
                    <MenuItem>
                      <FaSignInAlt className="inline mr-2" /> Login
                    </MenuItem>
                  </Link>
                  <Link to="/customer/auth/sign-up">
                    <MenuItem>
                      <FaUserPlus className="inline mr-2" /> Sign Up
                    </MenuItem>
                  </Link>
                </MenuList>
              </Menu>
            )}
          </div>
        </div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="flex items-center justify-between bg-gray-100 p-2 absolute top-full left-0 right-0 shadow-md">
            <div className="flex-grow">
              <SearchBar />
            </div>
            <button
              className="p-2 bg-primary-500 text-white rounded-md"
              onClick={() => setIsSearchOpen(false)}
            >
              Search
            </button>
          </div>
        )}
      </Navbar>
    </div>
  );
};

export default NavbarSticky;
