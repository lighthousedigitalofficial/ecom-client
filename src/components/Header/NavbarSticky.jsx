// import { useEffect, useRef, useState } from "react";
// import { Navbar, IconButton } from "@material-tailwind/react";
// import { FaSearch, FaSignInAlt, FaUser, FaUserPlus } from "react-icons/fa";
// import { MdArrowDropDown } from "react-icons/md";
// import logo from "../../assets/app-logo/app-logo.png";
// import { Link } from "react-router-dom";
// import ProfileMenu from "../Profile/ProfileMenu";
// import CartIcon from "./CartIcon";
// import WishlistBucket from "./WishlistBucket";
// import useAuth from "./../../hooks/useAuth";
// import Loader from "../Loader";
// import CategoryDropDown from "../Categories/CategoryDropDown";
// import "./NavbarSticky.css";
// import MainSearch from "../Home/MainSearch";
// import { useGetCustomerDetailsQuery } from "../../redux/slices/customersApiSlice";
// import { Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react";
// import SearchBar from "./SerachBar";
// import CategoryDropdownWrapper from "../Categories/CategoryDropdownWrapper";


// const NavbarSticky = () => {
//   const [isSticky, setIsSticky] = useState(false);
//   const user = useAuth();

//   const { data: userData, isFetching: isUserFetching } = useGetCustomerDetailsQuery(user?._id, {
//     skip: !user?._id,
//   });

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsSticky(window.scrollY > window.innerHeight * 0.25);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return isUserFetching ? (
//     <Loader />
//   ) : (
//     <div
//       className={`w-full z-40 bg-primary-500 transition-all duration-500 ${
//         isSticky ? "fixed top-0 shadow-md" : "relative"
//       }`}
//     >
//       <Navbar variant="gradient" className="mx-auto border-none bg-primary-500 w-full px-4 py-2 lg:px-6">
//         <div className="flex items-center gap-2 md:gap-28 justify-between">
    
//            {/* Logo */}
//            <Link to="/">
//             <img
//               src={logo}
//               alt="brand logo"
//               className="w-12 h-12 sm:w-15 sm:h-15 object-contain"
//             />
//           </Link>

//           {/* Category Dropdown */}
//           <div className="hidden md:block relative group">
//  <div className="hidden md:block relative group">
//     <p className="flex items-center text-white text-sm sm:text-base font-semibold cursor-pointer group relative">
//       <span className="font-medium">All Categories</span>

//       <MdArrowDropDown
//         className="text-white  w-12  transition-transform duration-300 group-hover:rotate-180 group-hover:translate-y-2 absolute top-full left-1/2  w-50 transform -translate-x-1/2"
//       />
//     </p>
//   </div>
//   <div 
//     className="absolute rounded-md  py-5 z-50 w-48 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300 animate-slide-down"
//   >
//     <div className="relative before:content-[''] before:absolute  before:left-6 before:border-[10px] before:border-transparent before:border-b-white">
//       <CategoryDropDown />
//     </div>
//   </div>
// </div>
//           {/* Search Bar */}
//           <div className="hidden lg:flex flex-grow  group">
//             <div
//               className="w-full transition-all duration-300 ease-in-out group-hover:w-[150%]"
//             >
//               <SearchBar    />
//             </div>
//           </div>
      

//           <div className="lg:hidden">
//             <IconButton
//               variant="text"
//               className="p-2 bg-gray-100 rounded-full"
//             >
//               <FaSearch className="h-5 w-5 text-gray-600" />
//             </IconButton>
//           </div>

//           {/* User Options */}
//           <div className="flex items-center gap-2 sm:gap-3">
//             <WishlistBucket user={user} />
//             <CartIcon />
//             {user && userData?.doc ? (
//               <ProfileMenu user={userData?.doc}  />
//             ) : (
                
//                                   <Menu>
//                                     <MenuHandler>
//                                       <IconButton
//                                         variant="text"
//                                         className="p-2 bg-gray-100 rounded-full"
//                                       >
//                                         <FaUser className="h-5 w-5 text-primary-500 hover:text-white" />
//                                       </IconButton>
//                                     </MenuHandler>
//                                     <MenuList className="shadow-md">
//                                       <Link to="/customer/auth/sign-in">
//                                         <MenuItem>
//                                           <FaSignInAlt className="inline mr-2" /> Login
//                                         </MenuItem>
//                                       </Link>
//                                       <Link to="/customer/auth/sign-up">
//                                         <MenuItem>
//                                           <FaUserPlus className="inline mr-2" /> Sign Up
//                                         </MenuItem>
//                                       </Link>
//                                     </MenuList>
//                                   </Menu>
//             )}
//           </div>
//         </div>
//       </Navbar>
//     </div>
//   );
// };

// export default NavbarSticky;



import React, { useEffect, useRef, useState } from "react";
import { Navbar, IconButton } from "@material-tailwind/react";
import { FaSearch, FaSignInAlt, FaUser, FaUserPlus } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import logo from "../../assets/app-logo/app-logo.png";
import { Link } from "react-router-dom";
import ProfileMenu from "../Profile/ProfileMenu";
import CartIcon from "./CartIcon";
import WishlistBucket from "./WishlistBucket";
import useAuth from "./../../hooks/useAuth";
import Loader from "../Loader";
import CategoryDropDown from "../Categories/CategoryDropDown";
import SearchBar from "./SerachBar";
import "./NavbarSticky.css";
import { useGetCustomerDetailsQuery } from "../../redux/slices/customersApiSlice";
import { Menu, MenuHandler, MenuList, MenuItem, Typography } from "@material-tailwind/react";
import BrandDropDownItem from '../Brands/BrandDropDownItem'
import keys from '../../config/keys'

const NavbarSticky = () => {
    const [openMenu, setOpenMenu] = React.useState(false)
        const [openMenu2, setOpenMenu2] = React.useState(false)
    
  const [isSticky, setIsSticky] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // Toggle search on small screens
  const user = useAuth();
  const { data: userData, isFetching: isUserFetching } = useGetCustomerDetailsQuery(user?._id, {
    skip: !user?._id,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > window.innerHeight * 0.25);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isUserFetching ? (
    <Loader />
  ) : (
    <div
      className={`w-full z-40 bg-white  text-primary-500  transition-all duration-500 ${
        isSticky ? "fixed top-0 shadow-md" : "relative"
      }`}
    >
      <Navbar variant="gradient" className="mx-auto border-none bg-white text-primary-500 w-full px-4 py-2 lg:px-6">
        <div className="flex items-center justify-between md:gap-14">
          {/* Logo */}
          <Link to="/">
            <img
              src={logo}
              alt="brand logo"
              className="w-16 h-16 sm:w-15 sm:h-15 object-contain"
            />
          </Link>

          {/* Category Dropdown */}
          <div className="hidden md:block relative group">
            <p className="flex items-center  text-sm sm:text-base font-semibold cursor-pointer group relative">
              <span className="font-medium">All Categories</span>
              <MdArrowDropDown className=" w-12 transition-transform duration-300 group-hover:rotate-180 group-hover:translate-y-2 absolute top-full left-1/2 w-50 transform -translate-x-1/2" />
            </p>
            <div className="absolute rounded-md py-5 z-50 w-48 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300 animate-slide-down">
              <CategoryDropDown />
            </div>
          </div>

          <Menu open={openMenu} handler={setOpenMenu} allowHover>
                <MenuHandler>
                    <Typography
                        as="li"
                        variant="paragraph"
                        color="blue-gray"
                        className="p-1 font-medium text-base"
                    >
                        <span className="navbar-item hover:text-primary-500 text-primary-500 ">Brands</span>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden w-[250px] overflow-visible md:block shadow-md">
                    <BrandDropDownItem />
                </MenuList>
            </Menu>
            <Typography
                as="li"
                variant="paragraph"
                color="blue-gray"
                className="p-1 font-medium text-base"
            >
                <Link to="/products" className="navbar-item hover:text-primary-500 text-primary-500">
                    Products
                </Link>
            </Typography>
           
          {/* Search Bar */}
          <div className="hidden lg:flex flex-grow justify-center mx-4 group">
            <div className="w-full transition-all duration-300 ease-in-out group-hover:w-[150%]">
              <SearchBar />
            </div>
          </div>

          {/* Search Icon for Mobile */}
          <div className="lg:hidden">
            <IconButton
              variant="text"
              className="p-2 bg-gray-100 rounded-full"
              onClick={() => setIsSearchOpen(!isSearchOpen)} // Toggle search
            >
              <FaSearch className="h-5 w-5 text-gray-600" />
            </IconButton>
          </div>

          {/* Mobile Search */}
          {isSearchOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-gray-100 p-2 shadow-md">
              <div className="w-full">
                <SearchBar />
              </div>
              <button
                className="p-2 bg-primary-500 text-white rounded-md w-full  inline-block mt-2" 
                onClick={() => setIsSearchOpen(false)}
              >
                Close
              </button>
            </div>
          )}

          {/* User Options */}
          <div className="flex items-center gap-2 sm:gap-3">
            <WishlistBucket user={user} />
            <CartIcon />
            {user && userData?.doc ? (
              <ProfileMenu user={userData?.doc} />
            ) : (
              <Menu>
                <MenuHandler>
                  <IconButton variant="text" className="p-2 bg-gray-100 rounded-full">
                    <FaUser className="h-5 w-5 text-primary-500 hover:text-white" />
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
      </Navbar>
    </div>
  );
};

export default NavbarSticky;

