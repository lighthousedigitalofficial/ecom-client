/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    useAddWishListMutation,
    useGetWishListByIdQuery,
} from '../../../redux/slices/wishlistApiSlice'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import toast from 'react-hot-toast'
import useAuth from '../../../hooks/useAuth'
import LoginModal from '../../shared/LoginModal'

const WishListIcon = ({ productId }) => {
    const user = useAuth()
    const { refetch } = useGetWishListByIdQuery(user?._id, {
        skip: !user?._id,
    })

    const navigate = useNavigate()

    const [addWishList, { isLoading, error, isSuccess }] =
        useAddWishListMutation()

    const [openModal, setOpenModal] = useState(false)

    useEffect(() => {
        if (!isLoading && isSuccess) {
            toast.success('Product added to wishlist')
        }
    }, [isLoading, isSuccess])

    const addToWishListHandler = async () => {
        if (!user) {
            setOpenModal(true)
            return
        }

        try {
            await addWishList({ productId })
            refetch()
        } catch (err) {
            console.error(err)
            toast.error(error?.data?.message || 'An error occurred')
        }
    }

    const handleLogin = () => {
        setOpenModal(false)
        navigate('/customer/auth/sign-in')
    }

    return (
        <div>
            <button
                onClick={addToWishListHandler}
                className="btn border border-pink-300 bg-white text-pink-500 py-3 rounded flex items-center justify-center"
            >
                {isSuccess ? <FaHeart /> : <FaRegHeart />}
            </button>

            {/* Login Modal */}
            <LoginModal
                open={openModal}
                onClose={() => setOpenModal(false)}
                onLogin={handleLogin}
            />
        </div>
    )
}

export default WishListIcon
