/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { addToCart } from '../../redux/slices/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import Quantity from './subcomponent/Quantity'
import WishListIcon from './subcomponent/WishListIcon'
import toast from 'react-hot-toast'
import Rating from '@mui/material/Rating'
import { formatPrice } from '../../utils/helpers'
import ProductSlider from './ProductSlider'

const ProductQuickView = ({ product, onClose }) => {
    const [totalPrice, setTotalPrice] = useState(0)
    const [images, setImages] = useState([])

    const [qty, setQty] = useState(1)
    const [minimumOrderError, setMinimumOrderError] = useState(false)

    useEffect(() => {
        if (product) {
            const productImages = product
                ? [product?.thumbnail, ...product.images]
                : []
            setImages(productImages)
        }

        if (product.discountAmount > 0) {
            const total = product.price - product.discountAmount
            setTotalPrice(total * qty)
        } else setTotalPrice(product.price * qty)
    }, [product, qty])

    const discountAmount = product?.discountAmount || 0

    // Avoid division by zero by ensuring oldPrice is greater than 0
    const percentageDiscount =
        product?.price > 0
            ? Math.round((discountAmount / product?.price) * 100)
            : 0

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { cartItems } = useSelector((state) => state.cart)

    const isProductAddToCart = cartItems?.find(
        (item) => item._id === product?._id
    )

    const addToCartHandler = () => {
        if (qty >= product.minimumOrderQty) {
            dispatch(addToCart({ ...product, qty }))
            onClose()
            toast.success('Item added successfully')
        } else setMinimumOrderError(true)
    }

    if (minimumOrderError) {
        setTimeout(() => {
            setMinimumOrderError(false)
        }, 3000)
    }

    const buyNowHandler = () => {
        if (qty >= product.minimumOrderQty) {
            dispatch(addToCart({ ...product, qty }))
            onClose()
            navigate('/checkout/shipping-address')
        } else setMinimumOrderError(true)
    }

    return (
        <div className="flex flex-col bg-white rounded w-full p-4 overflow-y-auto">
            {/* Product Image and Details */}
            <div className="flex flex-col lg:flex-row items-start gap-4 p-4">
                {/* Product Image Section */}
                <div className="lg:w-1/2 w-full">
                    <ProductSlider images={images} />
                </div>

                {/* Product Details Section */}
                <div className="w-full lg:w-1/2 flex flex-col gap-8">
                    <Link
                        to={`/products/${product?.slug}` || ''}
                        className="text-lg md:text-xl w-2/3 font-semibold hover:text-primary-500 text-primary-600"
                    >
                        {product.name || 'Product details'}
                    </Link>
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
                                {product?.totalOrders || 0} Orders
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="text-xl font-bold text-primary-400">
                            <span className="text-xs">Rs.</span>
                            {product.discountAmount > 0
                                ? formatPrice(
                                      product.price - product.discountAmount
                                  )
                                : formatPrice(product.price)}
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
                    {product.stock > 0 ? (
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <h3 className="font-bold">Quantity:</h3>
                                <Quantity
                                    qty={qty}
                                    setQty={setQty}
                                    product={product}
                                />
                                <span className="text-sm">
                                    {product.stock} left
                                </span>
                            </div>
                            <p className="text-sm">
                                (Minimum Order Qty: {product.minimumOrderQty})
                            </p>
                            {minimumOrderError && (
                                <p className="bg-red-100 text-red-400 w-full rounded-lg p-2">
                                    {`Minimum order for this item is ${product.minimumOrderQty} piece.`}
                                </p>
                            )}
                        </div>
                    ) : (
                        <h2 className="md:text-2xl text-lg font-bold text-red-600 mb-2">
                            Out of Stock
                        </h2>
                    )}
                    <div className="flex items-center gap-2 font-bold">
                        <h3 className="">Total Price:</h3>
                        <p className="text-primary-400 ">
                            Rs.{formatPrice(totalPrice)}
                        </p>
                        <span className="text-xs">
                            {' '}
                            {product.taxIncluded
                                ? '(Tax: incl.)'
                                : `(Tax: Rs. ${product.taxAmount || 0})`}
                        </span>
                    </div>
                    <div className="flex lg:flex-row flex-col gap-6 w-full">
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

export default ProductQuickView
