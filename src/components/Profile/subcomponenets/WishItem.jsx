/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { formatPrice } from '../../../utils/helpers'
import keys from '../../../config/keys'
import { FaDeleteLeft } from 'react-icons/fa6'

const WishItem = ({ product, onRemove }) => {
    const productThumbnail = product?.thumbnail
        ? product.thumbnail.startsWith('products')
            ? `${keys.BUCKET_URL}${product.thumbnail}`
            : product.thumbnail
        : keys.DEFAULT_IMG

    return (
        <div>
            <div className="w-full bg-primary-50 p-2 shadow-sm rounded-lg overflow-hidden flex justify-between items-center mx-2">
                <div className="flex gap-2 rounded-lg group cursor-pointer ">
                    {product.discount > 0 && (
                        <div className="discount-badge">
                            -${product.discount?.toFixed(2)}
                        </div>
                    )}
                    <Link to={`/products/${product.slug}`}>
                        <img
                            src={productThumbnail}
                            alt={product.name}
                            className="w-20 h-20 object-cover rounded-md"
                        />
                    </Link>
                    <div className="p-4 w-44">
                        <Link to={`/products/${product.slug}`}>
                            <p className="font-medium truncate mb-2 group:hover:text-primary-400">
                                {product.name}
                            </p>
                        </Link>
                        <div className="flex items-center gap-2">
                            <p className="text-sm font-bold text-primary-400">
                                <span className="text-xs">Rs.</span>
                                {product.discountAmount > 0
                                    ? formatPrice(
                                          product?.price -
                                              product.discountAmount
                                      )
                                    : formatPrice(product?.price)}
                            </p>
                            {product.discountAmount > 0 && product.price && (
                                <p className="text-xs line-through text-gray-500">
                                    {formatPrice(product.price)}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                <button
                    onClick={() => onRemove(product._id)}
                    className="py-1 px-4 bg-red-400 text-white text-base rounded-lg hover:bg-red-500 transition duration-200"
                >
                    <FaDeleteLeft />
                </button>
            </div>
        </div>
    )
}

export default WishItem
