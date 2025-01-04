// import { useEffect, useState } from 'react'
// import { Navbar, IconButton } from '@material-tailwind/react'
// import { FaUser, FaSignInAlt, FaUserPlus, FaSearch } from 'react-icons/fa'
// import { Menu, MenuHandler, MenuList, MenuItem } from '@material-tailwind/react'
// import logo from '../../assets/app-logo/app-logo.png'
// import SearchBar from './SerachBar'
// import { Link } from 'react-router-dom'
// import ProfileMenu from '../Profile/ProfileMenu'
// import CartIcon from './CartIcon'
// import MobileSidebar from './MobileSidebar'
// import useAuth from './../../hooks/useAuth'
// import Loader from '../Loader'

// import { FaMobileScreen } from 'react-icons/fa6'

// import { useGetCustomerDetailsQuery } from '../../redux/slices/customersApiSlice'
// import WishlistBucket from './WishlistBucket'

// const NavbarSticky = () => {
//     const [openMenu, setOpenMenu] = useState(false)
//     const [isSticky, setIsSticky] = useState(false)
//     const [isSearchOpen, setIsSearchOpen] = useState(false)

//     const user = useAuth()

//     const { data: userData, isFetching: isUserFetching } =
//         useGetCustomerDetailsQuery(user?._id, {
//             skip: !user?._id,
//         })

//     const handleScroll = () => {
//         const scrollPosition = window.scrollY
//         const threshold = window.innerHeight * 0.25
//         setIsSticky(scrollPosition > threshold)
//     }

//     useEffect(() => {
//         window.addEventListener('scroll', handleScroll)
//         return () => {
//             window.removeEventListener('scroll', handleScroll)
//         }
//     }, [])

//     const toggleSearch = () => {
//         setIsSearchOpen(!isSearchOpen)
//     }

//     const toggleMenu = () => {
//         setOpenMenu(!openMenu)
//     }

//     // Open menu on hover and click
//     const handleMouseEnter = () => {
//         setOpenMenu(true)
//     }

//     const handleMouseLeave = () => {
//         setOpenMenu(false)
//     }

//     return isUserFetching ? (
//         <Loader />
//     ) : (
//         <div
//             className={`w-full z-40 transition-all bg-white duration-500 ease-in-out py-4 ${
//                 isSticky ? 'fixed top-0 shadow-lg ' : 'relative'
//             }`}
//             style={{
//                 transform: isSticky ? 'translateY(0)' : 'translateY(-10%)',
//             }}
//         >
//             <Navbar
//                 variant="gradient"
//                 className="mx-auto w-[100%] p-0 shadow-none"
//             >
//                 <div className="flex items-center justify-between lg:gap-x-6 gap-x-2 text-white">
//                     <Link to="/">
//                         <img
//                             src={logo}
//                             alt="brand logo"
//                             className="w-16 h-16 sm:w-36 md:w-40 object-contain"
//                         />
//                     </Link>
//                     <div className="text-black text-lg">
//                         <select name="category" id="">
//                             <option value="category"> All Category</option>
//                         </select>
//                     </div>
//                     <div className="text-black text-sm">
//                         <select name="category" id="">
//                             <option value="category"> Buyer Center</option>
//                         </select>
//                     </div>
//                     <div className="text-black text-sm">
//                         <select name="category" id="">
//                             <option value="category"> Events</option>
//                         </select>
//                     </div>
//                     <div className="text-black text-sm">
//                         <select name="category" id="">
//                             <option value="category"> Resources</option>
//                         </select>
//                     </div>
//                     <div className="flex-grow hidden md:block">
//                         <SearchBar />
//                     </div>
//                     <div className="md:hidden">
//                         <IconButton
//                             variant="text"
//                             className="bg-gray-100 rounded-full border-none"
//                             onClick={toggleSearch}
//                         >
//                             <FaSearch className="h-5 w-5 text-primary-500" />
//                         </IconButton>
//                     </div>

//                     <div className="flex items-center gap-3">
//                         <div className="text-primary-500">
//                             <FaMobileScreen />
//                         </div>

//                         <WishlistBucket user={user} />
//                         <CartIcon />

//                         <div
//                             onMouseEnter={handleMouseEnter}
//                             onMouseLeave={handleMouseLeave}
//                         >
//                             {user && userData?.doc ? (
//                                 <ProfileMenu user={userData?.doc} />
//                             ) : (
//                                 <Menu open={openMenu} handler={setOpenMenu}>
//                                     <MenuHandler>
//                                         <IconButton
//                                             variant="text"
//                                             className="bg-gray-100 rounded-full border-none outline-none"
//                                             onClick={toggleMenu} // Allow click to toggle menu
//                                         >
//                                             <FaUser className="h-5 w-5 text-primary-500" />
//                                         </IconButton>
//                                     </MenuHandler>
//                                     <MenuList className="overflow-visible md:grid shadow-md">
//                                         <Link
//                                             to="/customer/auth/sign-in"
//                                             className="outline-none"
//                                         >
//                                             <MenuItem>
//                                                 <FaSignInAlt className="inline mr-2" />
//                                                 Login
//                                             </MenuItem>
//                                         </Link>
//                                         <Link
//                                             to="/customer/auth/sign-up"
//                                             className="outline-none"
//                                         >
//                                             <MenuItem>
//                                                 <FaUserPlus className="inline mr-2" />
//                                                 SignUp
//                                             </MenuItem>
//                                         </Link>
//                                     </MenuList>
//                                 </Menu>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//                 {isSearchOpen && (
//                     <div className="w-full flex items-center justify-between bg-primary-100 absolute top-full left-0 right-0 shadow-md p-2 transition-transform duration-300 ease-in-out rounded-lg">
//                         <div className="flex-grow">
//                             <SearchBar />
//                         </div>
//                         <button
//                             className="p-2 bg-primary-500 text-white rounded-md"
//                             onClick={() => setIsSearchOpen(false)}
//                         >
//                             Search
//                         </button>
//                     </div>
//                 )}
//             </Navbar>

//             {/* Mobile Sidebar Toggle Button */}
//             <div className="fixed z-50 top-[calc(2rem)] left-2 block md:hidden">
//                 <MobileSidebar />
//             </div>
//         </div>
//     )
// }

// export default NavbarSticky


import { useEffect, useState } from 'react'
import { Navbar } from '@material-tailwind/react'
import { FaUser, FaSignInAlt, FaUserPlus } from 'react-icons/fa'
import { Menu, MenuHandler, MenuList, MenuItem } from '@material-tailwind/react'
import logo from '../../assets/app-logo/app-logo.png'
import SearchBar from './SerachBar'
import { Link } from 'react-router-dom'
import ProfileMenu from '../Profile/ProfileMenu'
import CartIcon from './CartIcon'
// import MobileSidebar from './MobileSidebar'
import useAuth from './../../hooks/useAuth'
import { Typography } from '@material-tailwind/react'
import Loader from '../Loader'

import { MdArrowDropDown } from 'react-icons/md'
import { useGetCustomerDetailsQuery } from '../../redux/slices/customersApiSlice'
import WishlistBucket from './WishlistBucket'

import CategoryDropDown from '../Categories/CategoryDropDown'

const NavbarSticky = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const [isSticky, setIsSticky] = useState(false)
    const [isSearchVisible, setIsSearchVisible] = useState(false)

    const user = useAuth()

    const { data: userData, isFetching: isUserFetching } =
        useGetCustomerDetailsQuery(user?._id, {
            skip: !user?._id,
        })

    const handleScroll = () => {
        const scrollPosition = window.scrollY
        const threshold = window.innerHeight * 0.15
        setIsSticky(scrollPosition > threshold)
        setIsSearchVisible(scrollPosition > threshold)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    // --------------------------------

    const [openMenu3, setOpenMenu3] = useState(false)
    const [openNav, setOpenNav] = useState(false)
    const [navControl, setNavControl] = useState(false)

    // Handle window resize to automatically close the nav on large screens
    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false)

    // Run when the window resizes
    useEffect(() => {
        window.addEventListener('resize', handleWindowResize)
        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [])

    // Handle opening dropdown on hover or click only when not on the homepage
    const handleCategoryMouseOver = () => {
        setOpenMenu3(true)
    }

    const handleCategoryClick = () => {
        setOpenMenu3(!openMenu3)
    }

    const handleCategoryMouseLeave = () => {
        if (navControl === false) {
            setOpenMenu3(!openMenu3)
        }
    }

    const handleCategory2MouseLeave = () => {
        setNavControl(!navControl)
        setOpenMenu3(!openMenu3)
    }

    // const [openMenu, setOpenMenu] = useState(false)

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }
    return isUserFetching ? (
        <Loader />
    ) : (
        <div
            className={`w-full z-40 transition-all border-none bg-primary-500 duration-500 ease-in-out ${
                isSticky ? 'fixed top-0' : 'relative'
            }`}
            style={{
                transform: isSticky ? 'translateY(0)' : 'translateY(-10%)',
            }}
        >
            <Navbar
                variant="gradient"
                className="mx-auto w-full bg-primary-500 border-none shadow-none p-0"
            >
                <div className="flex flex-wrap md:flex-nowrap md:items-center items-end justify-between px-4 lg:gap-6 gap-2 text-white">
                    {/* Logo and Categories */}
                    <div className="flex items-center gap-6">
                        <Link to="/">
                            <img
                                src={logo}
                                alt="brand logo"
                                className="w-12 sm:w-16 md:w-20 object-contain"
                            />
                        </Link>
                        <div
                            className="relative cursor-pointer"
                            onMouseOver={handleCategoryMouseOver}
                            onMouseLeave={handleCategoryMouseLeave}
                            onClick={handleCategoryClick}
                        >
                            <Typography
                                as="li"
                                variant="small"
                                className="text-lg font-medium text-white flex items-center  transition-all"
                            >
                                <span>All Categories</span>
                                <MdArrowDropDown className="w-5 h-5 ml-1" />
                            </Typography>
                            {openMenu3 && (
                                <div
                                    className="absolute top-full  z-10 bg-white shadow-lg p-4"
                                    onMouseLeave={handleCategory2MouseLeave}
                                >
                                    <CategoryDropDown />
                                </div>
                            )}
                        </div>
                        <div
                            className="relative cursor-pointer"
                            // onMouseOver={handleCategoryMouseOver}
                            // onMouseLeave={handleCategoryMouseLeave}
                            // onClick={handleCategoryClick}
                        >
                            <Typography
                                as="li"
                                variant="small"
                                className="text-lg font-medium text-white hidden md:flex items-center  transition-all"
                            >
                                <span>Buyer Center</span>
                                <MdArrowDropDown className="w-5 h-5 ml-1" />
                            </Typography>
                            {/* {openMenu3 && (
                                <div
                                    className="absolute top-full  z-10 bg-white shadow-lg p-4"
                                    onMouseLeave={handleCategory2MouseLeave}
                                >
                                    <CategoryDropDown />
                                </div>
                            )} */}
                        </div>

                        {/* <div className="text-white text-lg ">
                            <select name="category" id="">
                                <option value="category"> Events</option>
                            </select>
                        </div> */}
                        <div
                            className="relative cursor-pointer"
                            // onMouseOver={handleCategoryMouseOver}
                            // onMouseLeave={handleCategoryMouseLeave}
                            // onClick={handleCategoryClick}
                        >
                            <Typography
                                as="li"
                                variant="small"
                                className="text-lg font-medium text-white hidden md:flex items-center  transition-all"
                            >
                                <span>Events</span>
                                <MdArrowDropDown className="w-5 h-5 ml-1" />
                            </Typography>
                            {/* {openMenu3 && (
                                <div
                                    className="absolute top-full  z-10 bg-white shadow-lg p-4"
                                    onMouseLeave={handleCategory2MouseLeave}
                                >
                                    <CategoryDropDown />
                                </div>
                            )} */}
                        </div>
                    </div>

                    {/* Search Bar - Responsive */}
                    {isSearchVisible && (
                        <div className="flex-grow text-center w-full md:w-auto">
                            <SearchBar className="w-full md:w-96 px-2 py-1 rounded bg-white text-black outline-none" />
                        </div>
                    )}

                    {/* User Options */}
                    <div className="flex items-center gap-3">
                        <WishlistBucket user={user} />
                        <CartIcon />
                        <div
                            onMouseEnter={() => setOpenMenu(true)}
                            onMouseLeave={() => setOpenMenu(false)}
                        >
                            {user && userData?.doc ? (
                                <ProfileMenu user={userData?.doc} />
                            ) : (
                                <Menu open={openMenu} handler={setOpenMenu}>
                                    <MenuHandler>
                                        <button className="flex items-center gap-2 px-3 py-2 rounded-full text-lg font-semibold bg-gray-100 text-primary-500">
                                            <FaUser className="w-4 h-4" />
                                            <span>Sign in / Join</span>
                                        </button>
                                    </MenuHandler>
                                    <MenuList className="shadow-lg">
                                        <Link to="/customer/auth/sign-in">
                                            <MenuItem className="flex items-center gap-2 text-lg text-primary-500">
                                                <FaSignInAlt className="" />
                                                Login
                                            </MenuItem>
                                        </Link>
                                        <Link to="/customer/auth/sign-up">
                                            <MenuItem className="flex items-center gap-2 text-lg text-primary-500">
                                                <FaUserPlus className="" />
                                                Sign Up
                                            </MenuItem>
                                        </Link>
                                    </MenuList>
                                </Menu>
                            )}
                        </div>
                    </div>
                </div>
            </Navbar>
        </div>
    )
}

export default NavbarSticky
