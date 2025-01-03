import { useEffect, useState } from 'react'
import { Navbar, IconButton } from '@material-tailwind/react'
import { FaUser, FaSignInAlt, FaUserPlus, FaSearch } from 'react-icons/fa'
import { Menu, MenuHandler, MenuList, MenuItem } from '@material-tailwind/react'
import logo from '../../assets/app-logo/app-logo.png'
import SearchBar from './SerachBar'
import { Link } from 'react-router-dom'
import ProfileMenu from '../Profile/ProfileMenu'
import CartIcon from './CartIcon'
import MobileSidebar from './MobileSidebar'
import useAuth from './../../hooks/useAuth'
import Loader from '../Loader'

import { useGetCustomerDetailsQuery } from '../../redux/slices/customersApiSlice'
import WishlistBucket from './WishlistBucket'

const NavbarSticky = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const [isSticky, setIsSticky] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)

    const user = useAuth()

    const { data: userData, isFetching: isUserFetching } =
        useGetCustomerDetailsQuery(user?._id, {
            skip: !user?._id,
        })

    const handleScroll = () => {
        const scrollPosition = window.scrollY
        const threshold = window.innerHeight * 0.25
        setIsSticky(scrollPosition > threshold)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen)
    }

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }

    // Open menu on hover and click
    const handleMouseEnter = () => {
        setOpenMenu(true)
    }

    const handleMouseLeave = () => {
        setOpenMenu(false)
    }

    return isUserFetching ? (
        <Loader />
    ) : (
        <div
            className={`w-full z-40 transition-all bg-white duration-500 ease-in-out py-4 ${
                isSticky ? 'fixed top-0 shadow-lg ' : 'relative'
            }`}
            style={{
                transform: isSticky ? 'translateY(0)' : 'translateY(-10%)',
            }}
        >
            <Navbar
                variant="gradient"
                className="mx-auto w-[80%] p-0 shadow-none"
            >
                <div className="flex items-center justify-between lg:gap-x-6 gap-x-2 text-white">
                    <Link to="/">
                        <img
                            src={logo}
                            alt="brand logo"
                            className="w-16 h-16 sm:w-36 md:w-40 object-contain"
                        />
                    </Link>
                    <div className="flex-grow hidden md:block">
                        <SearchBar />
                    </div>
                    <div className="md:hidden">
                        <IconButton
                            variant="text"
                            className="bg-gray-100 rounded-full border-none"
                            onClick={toggleSearch}
                        >
                            <FaSearch className="h-5 w-5 text-primary-500" />
                        </IconButton>
                    </div>

                    <div className="flex items-center gap-3">
                        <WishlistBucket user={user} />
                        <CartIcon />

                        <div
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            {user && userData?.doc ? (
                                <ProfileMenu user={userData?.doc} />
                            ) : (
                                <Menu open={openMenu} handler={setOpenMenu}>
                                    <MenuHandler>
                                        <IconButton
                                            variant="text"
                                            className="bg-gray-100 rounded-full border-none outline-none"
                                            onClick={toggleMenu} // Allow click to toggle menu
                                        >
                                            <FaUser className="h-5 w-5 text-primary-500" />
                                        </IconButton>
                                    </MenuHandler>
                                    <MenuList className="overflow-visible md:grid shadow-md">
                                        <Link
                                            to="/customer/auth/sign-in"
                                            className="outline-none"
                                        >
                                            <MenuItem>
                                                <FaSignInAlt className="inline mr-2" />
                                                Login
                                            </MenuItem>
                                        </Link>
                                        <Link
                                            to="/customer/auth/sign-up"
                                            className="outline-none"
                                        >
                                            <MenuItem>
                                                <FaUserPlus className="inline mr-2" />
                                                SignUp
                                            </MenuItem>
                                        </Link>
                                    </MenuList>
                                </Menu>
                            )}
                        </div>
                    </div>
                </div>
                {isSearchOpen && (
                    <div className="w-full flex items-center justify-between bg-primary-100 absolute top-full left-0 right-0 shadow-md p-2 transition-transform duration-300 ease-in-out rounded-lg">
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

            {/* Mobile Sidebar Toggle Button */}
            <div className="fixed z-50 top-[calc(2rem)] left-2 block md:hidden">
                <MobileSidebar />
            </div>
        </div>
    )
}

export default NavbarSticky
