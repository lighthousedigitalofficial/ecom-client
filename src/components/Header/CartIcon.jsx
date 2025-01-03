import { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import CartView from '../Cart/CartView'
import { Badge, IconButton, Box, Popover } from '@mui/material'
import { Link } from 'react-router-dom'

// const CartIcon = () => {
//     const [openMenu, setOpenMenu] = useState(false)

//     const cart = useSelector((state) => state.cart)
//     const totalItems = cart?.totalQty?.toString() || '0'

//     // Open menu on hover
//     const handleMouseEnter = () => {
//         setOpenMenu(true)
//     }

//     // Close menu when mouse leaves
//     const handleMouseLeave = () => {
//         setOpenMenu(false)
//     }

//     return (
//         <div
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//             className="outline-none border-none"
//         >
//             <Menu
//                 open={openMenu}
//                 handler={setOpenMenu}
//                 className="outline-none"
//             >
//                 <MenuHandler>
//                     <Link
//                         to="/cart"
//                         className="flex flex-row items-center bg-transparent"
//                     >
//                         <Badge content={totalItems} color="deep-orange">
//                             <IconButton className="bg-gray-100 rounded-full border-none">
//                                 <FaShoppingCart className="h-5 w-5 text-pink-500" />
//                             </IconButton>
//                         </Badge>
//                         {/* <Badge badgeContent={totalItems} color="warning">
//                             <IconButton
//                                 variant="text"
//                                 aria-label="Shopping Cart"
//                                 className="rounded-full border-none outline-none"
//                             >
//                                 <FaShoppingCart className="h-5 w-5 text-primary-500" />
//                             </IconButton>
//                         </Badge> */}
//                         {/* <button className="hidden md:block text-center w-24 border-none lg:flex flex-col text-sm items-center justify-center">
//                             <span className="text-gray-600">My cart</span>
//                             <div className="text-gray-900 flex-center gap-2 font-bold">
//                                 <span>Rs. {totalPrice.toLocaleString()}</span>
//                                 <MdArrowDropDown />
//                             </div>
//                         </button> */}
//                     </Link>
//                 </MenuHandler>
//                 <MenuList className="overflow-visible transition-all ease-in  md:grid shadow-md">
//                     <CartView />
//                 </MenuList>
//             </Menu>
//         </div>
//     )
// }

const CartIcon = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    const cart = useSelector((state) => state.cart)
    const totalItems = cart?.totalQty?.toString() || '0'

    // Open menu
    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget)
    }

    // Close menu
    const handleMenuClose = () => {
        setAnchorEl(null)
    }

    return (
        <Box
            onMouseEnter={handleMenuOpen}
            onMouseLeave={handleMenuClose}
            className="relative inline-block cursor-pointer"
        >
            {/* Wrap the IconButton with Link */}
            <IconButton className="rounded-full shadow-md  bg-white hover:bg-gray-100 transition-all duration-300">
                <Link to="/cart">
                    {totalItems > 0 ? (
                        <Badge badgeContent={totalItems} color="success">
                            <FaShoppingCart className="h-6 w-6 text-primary-500" />
                        </Badge>
                    ) : (
                        <FaShoppingCart className="h-6 w-6 text-primary-500" />
                    )}
                </Link>
            </IconButton>

            {/* Popover for Cart View */}
            <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleMenuClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                className="mt-2 rounded-lg shadow-lg"
            >
                <CartView />
            </Popover>
        </Box>
    )
}

export default CartIcon
