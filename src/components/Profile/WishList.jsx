import {
    useGetWishListByIdQuery,
    useRemoveWishListMutation,
} from '../../redux/slices/wishlistApiSlice'
import useAuth from '../../hooks/useAuth'
import Loader from '../Loader'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import WishItem from './subcomponenets/WishItem'

const WishList = () => {
    const user = useAuth()
    const [products, setProducts] = useState([])

    const {
        data: wishlist,
        isFetching: wishListLoading,
        refetch,
    } = useGetWishListByIdQuery(user?._id, {
        skip: !user?._id,
    })

    const [removeWishList, { isLoading: removingWishList }] =
        useRemoveWishListMutation()

    useEffect(() => {
        if (wishlist?.doc && wishlist?.doc?.products) {
            setProducts(wishlist?.doc?.products)
        }
    }, [wishlist?.doc])

    const onRemove = async (productId) => {
        try {
            await removeWishList(productId)
            refetch()
            toast.success('Product remove from wishlist')
        } catch (error) {
            toast.success(
                error.data.message || 'Remove product from wishlist error'
            )
        }
    }

    return (
        <div className="rounded-lg bg-white p-6">
            <h1 className="text-2xl font-semibold mb-5">My Wishlist</h1>
            {wishListLoading || removingWishList ? (
                <Loader />
            ) : wishlist && products?.length ? (
                <div className="flex flex-col gap-2">
                    {products?.map((product) => (
                        <WishItem
                            key={product._id}
                            product={product}
                            onRemove={onRemove}
                        />
                    ))}
                </div>
            ) : (
                <p className="text-gray-700 text-center">
                    No Product found in wishlist
                </p>
            )}
        </div>
    )
}

export default WishList
