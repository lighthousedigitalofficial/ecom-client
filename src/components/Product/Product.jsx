/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { addToCart } from '../../redux/slices/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import Quantity from './subcomponent/Quantity'
import { useNavigate } from 'react-router-dom'
import WishListIcon from './subcomponent/WishListIcon'
import toast from 'react-hot-toast'
import Rating from '@mui/material/Rating'
import { formatPrice } from '../../utils/helpers'

import ProductSlider from './ProductSlider'

const Product = ({ product }) => {
    const [qty, setQty] = useState(1)
    const [totalPrice, setTotalPrice] = useState(product.price || 0)
    const [images, setImages] = useState([])

    useEffect(() => {
        if (product?.discountAmount > 0) {
            const total = product?.price - product?.discountAmount
            setTotalPrice(total * qty)
        } else setTotalPrice(product.price * qty)

        setImages([...product.images, product?.thumbnail])
    }, [product, qty])

    const discountAmount = product?.discountAmount || 0

    // Avoid division by zero by ensuring oldPrice is greater than 0
    const percentageDiscount =
        product.price > 0
            ? Math.round((discountAmount / product.price) * 100)
            : 0

    const { cartItems } = useSelector((state) => state.cart)

    const isProductAddToCart = cartItems?.find(
        (item) => item._id === product?._id
    )

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const addToCartHandler = () => {
        if (qty >= product.minimumOrderQty) {
            dispatch(addToCart({ ...product, qty }))
            toast.success('Item added successfully')
        } else
            toast.error(
                `The min. order for this item is ${product.minimumOrderQty} piece. Adjust quantity to continue.`
            )
    }

    const buyNowHandler = () => {
        if (qty >= product.minimumOrderQty) {
            dispatch(addToCart({ ...product, qty }))
            navigate('/checkout/shipping-address')
            toast.success('Item added successfully')
        } else
            toast.error(
                `The min. order for this item is ${product.minimumOrderQty} piece. Adjust quantity to continue.`
            )
    }

    return (
        <div className="flex flex-col w-full p-4 rounded-lg">
            <div className="flex flex-col md:flex-row h-[50%] gap-10">
                <div className="lg:w-1/2 w-full">
                    <ProductSlider images={images} />
                </div>
                <div className="w-full lg:w-1/2 flex-grow justify-around flex flex-col gap-8">
                    <h2 className="text-lg font-bold text-gray-900 md:text-xl">
                        {product.name}
                    </h2>
                    <div className="flex items-center mb-2">
                        <span className="mx-2 text-gray-600 ">
                            {product?.rating || 0}
                        </span>

                        <Rating
                            name="half-rating-read"
                            defaultValue={0}
                            value={product?.rating}
                            precision={0.5}
                            readOnly
                        />

                        <div className="flex justify-between gap-2 border-l-2 px-2 items-center mx-2 text-xs md:text-sm">
                            <p className="border-r-2 pr-2">
                                {product?.numOfReviews || 0} Reviews
                            </p>
                            <p className="px-2">
                                {product.totalOrders || 0} Orders
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="text-xl font-bold text-primary-400">
                            <span className="text-xs">Rs.</span>
                            {product.discountAmount > 0
                                ? formatPrice(
                                      product?.price - product.discountAmount
                                  )
                                : formatPrice(product?.price)}
                        </p>
                        {product.discountAmount > 0 && product.price && (
                            <p className="text-sm line-through text-gray-500">
                                {formatPrice(product.price)}
                            </p>
                        )}
                        {percentageDiscount > 0 && (
                            <div className=" text-primary-500 border border-primary-500 py-1 px-2">
                                <p className="font-semibold text-xs">
                                    - {percentageDiscount}% of Discount
                                </p>
                            </div>
                        )}
                    </div>
                    <div className="flex items-center">
                        {product.stock > 0 ? (
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <h3 className="text-gray-800 font-bold">
                                        Quantity:
                                    </h3>
                                    <Quantity
                                        qty={qty}
                                        setQty={setQty}
                                        product={product}
                                    />
                                    <span className="mx-2 px-1 text-sm">
                                        {product.stock} pieces left
                                    </span>
                                </div>
                                <p className="text-gray-700 text-sm">
                                    (Minimum Order Qrty:{' '}
                                    {product.minimumOrderQty})
                                </p>
                            </div>
                        ) : (
                            <h2 className="md:text-2xl text-lg  font-bold text-red-600 mb-2">
                                Out of Stock
                            </h2>
                        )}
                    </div>
                    <div className="flex items-center gap-2">
                        <h3 className="text-gray-800 font-bold">
                            Total Price:
                        </h3>
                        <p className="text-xl font-bold text-primary-400 transition-all duration-100 ease-in">
                            <span className="text-xs">Rs.</span>
                            {formatPrice(totalPrice)}
                        </p>
                        <span className="mx-2 px-1 text-xs">
                            {product.taxIncluded
                                ? `(Tax: Rs. ${product.taxAmount || 0})`
                                : '(Tax: incl.)'}
                        </span>
                    </div>
                    <div className="flex gap-6 w-full">
                        <button
                            onClick={buyNowHandler}
                            disabled={product.stock < 1}
                            className={`btn px-10 text-white ${
                                product.stock < 1
                                    ? 'bg-orange-500 opacity-50 cursor-not-allowed'
                                    : 'bg-orange-500 hover:bg-orange-600'
                            }`}
                        >
                            Buy now
                        </button>
                        <button
                            onClick={addToCartHandler}
                            disabled={product.stock < 1}
                            className={`btn px-10 ${
                                product.stock < 1
                                    ? 'primary-btn opacity-50 cursor-not-allowed'
                                    : 'primary-btn'
                            }`}
                        >
                            {isProductAddToCart ? 'Update Cart' : 'Add to cart'}
                        </button>
                        <WishListIcon productId={product._id} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
