/* eslint-disable react/prop-types */
import { useState } from 'react'
import { Card, Drawer, IconButton, List } from '@material-tailwind/react'
import {
    FaShoppingBag,
    FaUserCircle,
    FaInbox,
    FaHeart,
    FaHome,
    FaTicketAlt,
    FaTag,
    FaShippingFast,
    FaTimes,
} from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import { BiCategory } from 'react-icons/bi'

const menuItems = [
    { icon: FaUserCircle, label: 'Profile Info', to: '/profile/profile-info' },
    { icon: FaHeart, label: 'Wish List', to: '/profile/wish-list' },
    { icon: FaShoppingBag, label: 'My Order', to: '/profile/my-orders' },
    { icon: FaShippingFast, label: 'Track Order', to: '/profile/track-order' },
    // { icon: FaWallet, label: "My Wallet", to: "/profile/my-wallet" },
    // { icon: FaStar, label: "My Loyalty Point", to: "/profile/my-loyalty-point" },
    // { icon: FaInbox, label: 'Inbox', to: '/profile/inbox', chip: 14 },
    // { icon: FaHome, label: 'My Address', to: '/profile/my-address' },
    // {
    //     icon: FaTicketAlt,
    //     label: 'Support Ticket',
    //     to: '/profile/support-ticket',
    // },
    // { icon: FaGift, label: "Refer & Earn", to: "/profile/refer-earn" },
    // { icon: FaTag, label: 'Coupons', to: '/profile/coupons' },
]

const ProfileLeftBar = () => {
    // const [open, setOpen] = useState(0);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const location = useLocation()

    // const handleOpen = (value) => {
    //   setOpen(open === value ? 0 : value);
    // };

    const openDrawer = () => setIsDrawerOpen(true)
    const closeDrawer = () => setIsDrawerOpen(false)

    return (
        <>
            <IconButton
                variant="text"
                size="lg"
                onClick={openDrawer}
                className="absolute rigth-0 top-0 md:hidden"
            >
                {isDrawerOpen ? (
                    <FaTimes className="h-4 w-4" />
                ) : (
                    <BiCategory className="h-4 w-4" />
                )}
            </IconButton>
            <Drawer
                open={isDrawerOpen}
                onClose={closeDrawer}
                className="w-[60%] px-3"
            >
                <Card shadow={false} className="h-[100vh] w-full p-2 relative">
                    <List>
                        <button className="" onClick={closeDrawer}>
                            <FaTimes className="h-4 w-4" />
                        </button>
                        {menuItems.map((item, index) => (
                            <Link
                                to={item.to}
                                key={index}
                                onClick={closeDrawer}
                            >
                                <div className="flex gap-2 items-center py-1">
                                    <div className="p-1">
                                        <item.icon className="h-5 w-5" />
                                    </div>
                                    <div className="text-sm">{item.label}</div>
                                </div>
                            </Link>
                        ))}
                    </List>
                </Card>
            </Drawer>
            <div className="hidden md:block w-1/4 min-h-[80vh] p-2">
                <Card shadow={false} className="h-full w-full p-2 relative">
                    <List className="flex flex-col gap-4">
                        {menuItems.map((item, index) => {
                            const isActive = location.pathname === item.to // Check if the current path matches
                            return (
                                <Link to={item.to} key={index}>
                                    <div
                                        className={`flex gap-2 items-center py-1 px-2 rounded-md ${
                                            isActive
                                                ? 'bg-primary-100 text-primary-600'
                                                : 'hover:bg-gray-100 text-gray-700'
                                        }`}
                                    >
                                        <div className="p-1">
                                            <item.icon
                                                className={`h-5 w-5 ${
                                                    isActive
                                                        ? 'text-primary-600'
                                                        : 'text-gray-500'
                                                }`}
                                            />
                                        </div>
                                        <div className="text-sm">
                                            {item.label}
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </List>
                </Card>
            </div>
        </>
    )
}

export default ProfileLeftBar
