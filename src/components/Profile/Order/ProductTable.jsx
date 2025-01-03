/* eslint-disable react/prop-types */

import keys from '../../../config/keys'

const ProductTable = ({ products }) => {
    return (
        <table border="1" style={{ width: '100%', textAlign: 'left' }}>
            <thead className="bg-primary-500 py-2 px-4 text-gray-100 mb-2">
                <tr>
                    <th>SL</th>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody className="py-2">
                {products.map((product, index) => {
                    const {
                        productDetails,
                        price,
                        discountAmount,
                        quantity,
                        taxAmount,
                        shippingCost,
                    } = product
                    const totalPrice =
                        price * quantity +
                        taxAmount +
                        shippingCost -
                        discountAmount

                    return (
                        <tr key={product._id}>
                            <td>{index + 1}</td>
                            <td>
                                <div className="flex gap-2 items-center">
                                    <img
                                        src={
                                            productDetails?.thumbnail
                                                ? productDetails.thumbnail.startsWith(
                                                      'products'
                                                  )
                                                    ? `${keys.BUCKET_URL}${productDetails.thumbnail}`
                                                    : productDetails.thumbnail
                                                : keys.DEFAULT_IMG
                                        }
                                        alt="product image"
                                        className="w-8 h-8 object-cover rounded-md"
                                    />
                                    <p className="text-sm">
                                        {productDetails?.name ||
                                            'Unknown Product'}
                                    </p>
                                </div>
                            </td>
                            <td>{quantity}</td>
                            <td>Rs. {totalPrice}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default ProductTable
