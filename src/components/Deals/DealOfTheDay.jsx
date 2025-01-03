/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import { useGetDealOfTheDayQuery } from '../../redux/slices/productsApiSlice'
import keys from '../../config/keys'
import { formatPrice } from '../../utils/helpers'
import Loader from '../Loader'
import { Rating } from '@mui/material'
import toast from 'react-hot-toast'
import { addToCart } from '../../redux/slices/cartSlice'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { FaFire } from 'react-icons/fa'

export function DealOfTheDay() {
    const { data: deal, isLoading } = useGetDealOfTheDayQuery({})

    const [totalPrice, setTotalPrice] = useState(0)
    const [oldPrice, setOldPrice] = useState(0)
    const product = deal?.doc?.product

    useEffect(() => {
        if (product && !product?.taxIncluded) {
            setTotalPrice(product?.price + product.taxAmount)
        } else setTotalPrice(product?.price)

        setOldPrice(product?.price + product?.discountAmount)
    }, [product])

    const productThumbnail = product?.thumbnail
        ? product?.thumbnail.startsWith('products')
            ? `${keys.BUCKET_URL}${product.thumbnail}`
            : product.thumbnail
        : keys.DEFAULT_IMG

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const buyNowHandler = () => {
        dispatch(addToCart({ ...product, qty: 1 }))
        navigate('/cart')
        toast.success('Item added successfully')
    }

    return isLoading ? (
        <Loader />
    ) : deal && product ? (
        <div className="py-8 px-4 my-2 bg-primary-500 flex items-center flex-col min-w-64 min-h-[85vh] shadow-md rounded-lg">
            <div className="flex items-center gap-2 mb-4">
                <FaFire className="text-orange-600 text-3xl" />
                <h2 className="uppercase text-lg font-bold text-center text-white py-4">
                    {deal?.doc?.title}
                </h2>
            </div>
            <div className="w-56 bg-white flex-grow flex justify-between items-center flex-col rounded-lg overflow-hidden shadow-sm text-center">
                <div className="relative rounded-lg overflow-hidden group cursor-pointer flex justify-between items-center flex-col gap-2">
                    {product?.discountAmount > 0 && (
                        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                            - Rs.{formatPrice(product?.discountAmount)}
                        </div>
                    )}
                    <img
                        src={productThumbnail}
                        alt={product?.name}
                        loading="lazy"
                        className="w-full h-72 object-cover mb-4"
                    />
                    <Link
                        to={`/products/${product.slug}`}
                        className="font-medium w-full px-2 mb-2 hover:text-primary-500 transition-all duration-75 ease-in"
                    >
                        {product.name}
                    </Link>
                    {product?.rating > 0 && (
                        <div className="flex items-center gap-2">
                            <Rating
                                name="half-rating-read"
                                defaultValue={0}
                                value={product?.rating}
                                precision={0.5}
                                readOnly
                                size="small"
                            />
                            <p className="text-xs">({product?.numOfReviews})</p>
                        </div>
                    )}
                </div>
                <div className="p-4">
                    <div className="flex items-center gap-2">
                        {oldPrice > product?.price && (
                            <p className="text-sm line-through text-gray-500">
                                Rs.{formatPrice(oldPrice)}
                            </p>
                        )}
                        <p className="text-lg font-bold text-primary-500">
                            Rs.{formatPrice(totalPrice)}
                        </p>
                    </div>
                </div>
                <button
                    onClick={buyNowHandler}
                    disabled={product.stock < 1}
                    className={`btn px-10 mb-4 text-white ${
                        product.stock < 1
                            ? 'bg-orange-500 opacity-50 cursor-not-allowed'
                            : 'bg-orange-500 hover:bg-orange-600'
                    }`}
                >
                    Buy now
                </button>
            </div>
        </div>
    ) : null
}

export default DealOfTheDay
