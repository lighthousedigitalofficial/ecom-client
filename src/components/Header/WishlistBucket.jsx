/* eslint-disable react/prop-types */
import { IconButton, Tooltip } from '@mui/material'
import { FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const WishlistBucket = () => {
    return (
        <Link to="/profile/wish-list" className="bg-transparent">
            <Tooltip title="Wishlist">
                <IconButton
                    className="bg-white  rounded-full border-none hover:shadow-lg shadow-md "
                    style={{ backgroundColor: 'white' }}
                >
                    <FaHeart
                        className="h-5 w-5 text-pink-500"
                        style={{ backgroundColor: 'white' }}
                    />
                </IconButton>
            </Tooltip>
        </Link>
    )
}

export default WishlistBucket
