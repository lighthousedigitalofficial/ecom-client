import { useDispatch } from 'react-redux'
import Quantity from '../Product/subcomponent/Quantity'
import { useEffect, useState } from 'react'
import { removeFromCart } from '../../redux/slices/cartSlice'
import { Typography } from '@material-tailwind/react'
import { FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import keys from './../../config/keys'
import { formatPrice } from '../../utils/helpers'
// import { LazyLoadImage } from 'react-lazy-load-image-component'

/* eslint-disable react/prop-types */
const CartItem = ({ item }) => {
    // console.log(item)
    const [qty, setQty] = useState(0)
    const [totalPrice, setTotalPrice] = useState(item.price || 0)

    const dispatch = useDispatch()

    useEffect(() => {
        if (item?.qty) {
            setQty(item.qty)
        }
    }, [item.qty])

    useEffect(() => {
        if (item?.discountAmount > 0) {
            const total = item?.price - item?.discountAmount
            setTotalPrice(total * qty)
        } else setTotalPrice(item.price * qty)
    }, [item, qty])

    const removeFromCartHandler = (item) => {
        dispatch(removeFromCart(item))
        // console.log('ID: ', id)
    }

    const productImage = item.thumbnail
        ? item.thumbnail.startsWith('products')
            ? `${keys.BUCKET_URL}${item.thumbnail}`
            : item.thumbnail
        : keys.DEFAULT_IMG

    return item && qty > 0 ? (
        <div className="bg-gray-50 p-3 flex gap-3 justify-between items-center rounded-lg shadow-sm">
            <div className="flex gap-2">
                <Link to={`/products/${item.slug}`} className="cursor-pointer">
                    <img
                        src={productImage}
                        alt={item.name}
                        loading="lazy"
                        className="w-16 h-16 object-contain mr-4"
                    />
                </Link>
                <div className="flex flex-col justify-between items-start">
                    <Link
                        to={`/products/${item.slug}`}
                        className="cursor-pointer hover:text-gray-600"
                    >
                        <Typography
                            variant="h3"
                            className="font-medium text-lg w-48 md:60 lg:96 truncate"
                        >
                            {item.name}
                        </Typography>
                    </Link>
                    <span className="text-gray-500 text-sm">
                        Stock: {item.stock}
                    </span>
                    <Typography
                        variant="paragraph"
                        className="text-sm text-gray-600"
                    >
                        <span className="text-xs">Price: Rs.</span>
                        {item.discountAmount > 0
                            ? formatPrice(item?.price - item.discountAmount)
                            : formatPrice(item?.price)}
                    </Typography>
                </div>
            </div>

            <div className="flex flex-col gap-4 items-end">
                <button
                    onClick={() => removeFromCartHandler(item)}
                    className="text-inherit cursor-pointer"
                >
                    <FaTrash className="text-sm text-red-300 hover:text-red-400" />
                </button>
                <Quantity qty={qty} setQty={setQty} product={item} />

                <Typography
                    variant="paragraph"
                    className="font-bold align-middle text-base"
                >
                    <span className="text-xs">Total: Rs.</span>
                    {formatPrice(totalPrice)}
                </Typography>
            </div>
        </div>
    ) : null
}

export default CartItem
