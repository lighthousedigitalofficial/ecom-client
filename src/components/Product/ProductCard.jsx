import { useState } from 'react'
import ProductDialog from './ProductDialog'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import keys from './../../config/keys'
import { formatPrice } from '../../utils/helpers'
import { Rating } from '@mui/material'
import { FaEye, FaTruck, FaTag } from 'react-icons/fa'
import WishListSmallIcon from './subcomponent/WishlistSmallIcon'

// const ProductCard = ({ data: product }) => {
//     const [selectedProduct, setSelectedProduct] = useState(null)
//     const [isDialogOpen, setIsDialogOpen] = useState(false)

//     const handleProductClick = (product) => {
//         setSelectedProduct(product)
//         setIsDialogOpen(true)
//     }

//     const handleCloseDialog = () => {
//         setIsDialogOpen(false)
//         setSelectedProduct(null)
//     }

//     const productThumbnail = product?.thumbnail
//         ? product.thumbnail.startsWith('products')
//             ? `${keys.BUCKET_URL}${product.thumbnail}`
//             : product.thumbnail
//         : keys.DEFAULT_IMG

//     return (
//         product && (
//             <div className="bg-white overflow-hidden shadow-sm  w-full">
//                 <div className="relative overflow-hidden group cursor-pointer z-10">
//                     {product?.discountAmount > 0 && (
//                         <div className="discount-badge">
//                             - Rs.{formatPrice(product?.discountAmount)}
//                         </div>
//                     )}
//                     <Link to={`/products/${product}`}>
//                         <img
//                             src={productThumbnail}
//                             alt={product.name}
//                             loading="lazy"
//                             className="product__img object-cover object-top"
//                         />
//                     </Link>
//                     <div className="product__quick-view z-20">
//                         <button
//                             onClick={() => handleProductClick(product)}
//                             className="bg-white p-2 rounded-full shadow-sm cursor-pointer hover:text-primary-400"
//                         >
//                             <FaEye className="text-xl" />
//                         </button>
//                     </div>
//                 </div>
//                 <div className="flex flex-col p-4 group gap-4">
//                     <Link to={`/products/${product.slug}`}>
//                         <p className="font-medium truncate mb-2 group-hover:text-primary-400 transition-all ease-in">
//                             {product.name}
//                         </p>
//                         {product?.rating > 0 && (
//                             <div className="flex items-center gap-2">
//                                 <Rating
//                                     name="half-rating-read"
//                                     defaultValue={0}
//                                     value={product?.rating}
//                                     precision={0.5}
//                                     readOnly
//                                     size="small"
//                                 />
//                                 <p className="text-xs">
//                                     ({product?.numOfReviews})
//                                 </p>
//                             </div>
//                         )}

//                         <div className="flex items-center gap-2">
//                             <p className="text-sm font-bold text-primary-400">
//                                 <span className="text-xs">Rs.</span>
//                                 {product.discountAmount > 0
//                                     ? formatPrice(
//                                           product?.price -
//                                               product.discountAmount
//                                       )
//                                     : formatPrice(product?.price)}
//                             </p>
//                             {product.discountAmount > 0 && product.price && (
//                                 <p className="text-xs line-through text-gray-500">
//                                     {formatPrice(product.price)}
//                                 </p>
//                             )}
//                         </div>
//                     </Link>
//                 </div>

//                 {selectedProduct && (
//                     <ProductDialog
//                         productId={product._id}
//                         open={isDialogOpen}
//                         onClose={handleCloseDialog}
//                     />
//                 )}
//             </div>
//         )
//     )
// }

// export default ProductCard

const ProductCard = ({ data: product }) => {
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const handleProductClick = (product) => {
        setSelectedProduct(product)
        setIsDialogOpen(true)
    }

    const handleCloseDialog = () => {
        setIsDialogOpen(false)
        setSelectedProduct(null)
    }

    const productThumbnail = product?.thumbnail
        ? product.thumbnail.startsWith('products')
            ? `${keys.BUCKET_URL}${product.thumbnail}`
            : product.thumbnail
        : keys.DEFAULT_IMG

    return (
        product && (
            <div className="relative max-w-sm rounded-lg border border-gray-200 bg-white ease-in transition-transform hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
                {/* Product Image Section */}
                <div className="relative h-56 w-full overflow-hidden">
                    <Link to={`/products/${product.slug}`}>
                        <img
                            src={productThumbnail}
                            alt={product.name}
                            className="h-full w-full object-cover hover:scale-105 transition-transform delay-100"
                            loading="lazy"
                        />
                    </Link>
                    {/* Discount Badge */}
                    {product?.discountAmount > 0 && (
                        <span className="absolute top-2 left-2 rounded bg-primary-500 px-2 py-1 text-xs font-semibold text-white">
                            -Rs.{formatPrice(product?.discountAmount)}
                        </span>
                    )}
                    {/* Quick View and Favorite */}
                    <div className="absolute top-2 right-2 flex space-x-2">
                        <button
                            onClick={() => handleProductClick(product)}
                            className="p-2 bg-white rounded-full shadow hover:text-primary-500"
                        >
                            <FaEye size={18} />
                        </button>
                        <WishListSmallIcon productId={product._id} />
                        {/* <button className="p-2 bg-white rounded-full shadow hover:text-red-500">
                            <FaRegHeart size={18} />
                        </button> */}
                    </div>
                </div>

                {/* Product Info */}
                <div className="mt-4 flex flex-col gap-2 p-2">
                    <Link to={`/products/${product.slug}`}>
                        <h3 className="text-base truncate text-gray-800 hover:text-primary-500 dark:text-white">
                            {product.name}
                        </h3>
                    </Link>
                    {/* Rating */}
                    {product?.rating > 0 && (
                        <div className="flex items-center gap-1">
                            <Rating
                                name="half-rating-read"
                                value={product.rating}
                                precision={0.5}
                                readOnly
                                size="small"
                            />
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                                ({product.numOfReviews})
                            </span>
                        </div>
                    )}

                    {/* Price */}
                    <div className="flex items-center gap-2">
                        <p className="text-base font-bold text-primary-600">
                            Rs.
                            {product.discountAmount > 0
                                ? formatPrice(
                                      product.price - product.discountAmount
                                  )
                                : formatPrice(product.price)}
                        </p>
                        {product.discountAmount > 0 && product.price && (
                            <p className="text-sm line-through text-gray-500">
                                Rs.{formatPrice(product.price)}
                            </p>
                        )}
                    </div>

                    {/* Additional Info */}
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                            <FaTruck /> Fast Delivery
                        </span>
                        <span className="flex items-center gap-1">
                            <FaTag /> Best Price
                        </span>
                    </div>
                </div>

                {/* Quick View Dialog */}
                {selectedProduct && (
                    <ProductDialog
                        productId={product._id}
                        open={isDialogOpen}
                        onClose={handleCloseDialog}
                    />
                )}
            </div>
        )
    )
}

ProductCard.propTypes = {
    data: PropTypes.object.isRequired,
}

export default ProductCard
