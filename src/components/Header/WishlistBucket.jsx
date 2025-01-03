/* eslint-disable react/prop-types */
import { IconButton, Tooltip } from '@mui/material'
import { FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const WishlistBucket = () => {
    return (
        <Link to="/profile/wish-list" className="bg-transparent">
            <Tooltip title="Wishlist">
                <IconButton className="bg-gray-100 rounded-full border-none hover:shadow-lg shadow-md ">
                    <FaHeart className="h-5 w-5 text-pink-500" />
                </IconButton>
            </Tooltip>
        </Link>
    )
}

export default WishlistBucket
