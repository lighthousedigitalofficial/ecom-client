/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../../redux/slices/cartSlice'
import { FaTrash } from 'react-icons/fa'
import keys from './../../../config/keys'
import { formatPrice } from '../../../utils/helpers'
// import { LazyLoadImage } from 'react-lazy-load-image-component'

const CartViewItem = ({ item }) => {
    const dispatch = useDispatch()

    const removeFromCartHandler = (item) => {
        dispatch(removeFromCart(item))
    }

    const productImage = item.thumbnail
        ? item.thumbnail.startsWith('products')
            ? `${keys.BUCKET_URL}${item.thumbnail}`
            : item.thumbnail
        : keys.DEFAULT_IMG

    return (
        <div
            key={item._id}
            className="flex items-center bg-gray-50 justify-around border-b p-2"
        >
            <img
                src={productImage}
                alt={item.name}
                loading="lazy"
                className="w-16 h-16 object-contain mr-4"
            />
            <div className="flex-grow">
                <div className="font-semibold truncate w-24">{item.name}</div>
                <div className="text-gray-700">
                    <span className="text-xs">Rs.</span>
                    {formatPrice(item?.price)}
                </div>
            </div>
            <div className="flex flex-col justify-between gap-4 py-2">
                <p>
                    qty: <span>{item.qty}</span>
                </p>
                <button
                    onClick={() => removeFromCartHandler(item)}
                    className="text-inherit cursor-pointer py-2"
                >
                    <FaTrash className="text-sm text-red-300 ml-2 hover:text-red-400" />
                </button>
            </div>
        </div>
    )
}

export default CartViewItem
