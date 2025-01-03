import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { FaTruck, FaShieldAlt, FaUndo, FaCheckCircle } from 'react-icons/fa'
import { MdOutlineCelebration } from 'react-icons/md'
import { useEffect, useState } from 'react'
import { useCreateOrderMutation } from '../../../redux/slices/ordersApiSlice'
import toast from 'react-hot-toast'
import { clearCartItems, resetCart } from '../../../redux/slices/cartSlice'
import { formatPrice } from '../../../utils/helpers'
import useAuth from '../../../hooks/useAuth'
import useFetchShippingCharges from './../../../hooks/useFetchShippingCharges'
import Loader from '../../../components/Loader'

import TraxLogo from './../../../assets/shipping-methods/trax.svg'

// add sub total amount ---

const OrderSummaryPage = () => {
    const cart = useSelector((state) => state.cart)
    const [shippingFee, setShippingFee] = useState(0)

    const user = useAuth()

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { shippingChargesList, loading, fetchAllShippingCharges } =
        useFetchShippingCharges()

    useEffect(() => {
        fetchAllShippingCharges()
    }, [fetchAllShippingCharges])

    useEffect(() => {
        if (shippingChargesList) {
            const totalShippingFee = shippingChargesList.reduce(
                (acc, item) => (acc += item.shippingCharges),
                0
            )
            setShippingFee(totalShippingFee)
        }
    }, [shippingChargesList])

    console.log({ shippingChargesList })

    useEffect(() => {
        if (!user) {
            navigate('/customer/auth/sign-in')
        }
    }, [navigate, user])

    useEffect(() => {
        if (!cart?.paymentMethod || !cart) {
            navigate('/checkout/payment-methods')
        }
    }, [cart, navigate])

    const [createOrder, { isLoading }] = useCreateOrderMutation()

    const handleOrderSubmit = async () => {
        try {
            // // Group products by vendor
            // const groupedOrders = cart?.cartItems.reduce((acc, item) => {
            //     // Safeguard against undefined `product`
            //     if (!item.userId) {
            //         toast.error('Missing product or userId for item:', item)
            //         return acc // Skip this item
            //     }

            //     // Assuming `userId` represents the vendor
            //     const vendorId = item.userId
            //     if (!acc[vendorId]) {
            //         acc[vendorId] = {
            //             vendor: vendorId,
            //             products: [],
            //         }
            //     }

            //     acc[vendorId].products.push({
            //         product: item._id,
            //         price: item.price,
            //         discountAmount: item.discountAmount || 0, // Ensure discountAmount is present
            //         taxAmount: item.taxIncluded ? item.taxAmount * item.qty : 0, // Ensure taxAmount is present
            //         quantity: item.qty,
            //     })
            //     return acc
            // }, {})

            // const orders = Object.keys(groupedOrders).map((vendorId) => {
            //     const vendorOrder = groupedOrders[vendorId]

            //     const totals = vendorOrder.products.reduce(
            //         (acc, product) => {
            //             // Ensure all values are defined and use defaults if not
            //             const price = product.price || 0
            //             const quantity = product.quantity || 0
            //             const discount = product.discountAmount * quantity || 0
            //             const taxAmount = product.taxAmount * quantity || 0

            //             // Calculate total amount for this product
            //             const productTotal =
            //                 price * quantity - discount + taxAmount

            //             const productSubTotal = price * quantity + discount

            //             // Update accumulator with current product values
            //             acc.subTotalAmount += productSubTotal // Add this product's total to the overall amount
            //             acc.totalAmount += productTotal // Add this product's total to the overall amount
            //             acc.totalDiscount += discount // Multiply discount by quantity for total discount
            //             acc.totalShippingCost += shippingCost // Multiply shipping cost by quantity
            //             acc.totalQty += quantity // Add this product's quantity to the total quantity
            //             acc.totalTaxAmount += taxAmount // Add tax amount per quantity to total tax

            //             return acc // Return the updated accumulator
            //         },
            //         {
            //             subTotalAmount: 0, // Starting total amount
            //             totalAmount: 0, // Starting total amount
            //             totalDiscount: 0, // Starting total discount
            //             totalShippingCost: 0, // Starting total shipping cost
            //             totalQty: 0, // Starting total quantity
            //             totalTaxAmount: 0, // Starting total tax amount
            //         }
            //     )

            //     return {
            //         vendor: vendorId,
            //         products: vendorOrder.products,
            //         customerId: user?._id,
            //         paymentMethod: cart?.paymentMethod,
            //         subTotalAmount: totals.subTotalAmount,
            //         totalAmount: totals.totalAmount,
            //         totalDiscount: totals.totalDiscount,
            //         totalShippingCost: shippingFee,
            //         totalTaxAmount: totals.totalTaxAmount,
            //         totalQty: totals.totalQty,
            //         paymentStatus: cart?.paymentStatus,
            //     }
            // })

            const groupedOrders = cart?.cartItems.reduce((acc, item) => {
                if (!item.userId) {
                    toast.error('Missing product or userId for item:', item)
                    return acc // Skip this item
                }

                const vendorId = item.userId
                if (!acc[vendorId]) {
                    acc[vendorId] = {
                        vendor: vendorId,
                        products: [],
                    }
                }

                acc[vendorId].products.push({
                    product: item._id,
                    price: item.price,
                    discountAmount: item.discountAmount || 0,
                    taxAmount: item.taxIncluded ? item.taxAmount * item.qty : 0,
                    quantity: item.qty,
                })
                return acc
            }, {})

            const orders = Object.keys(groupedOrders).map((vendorId) => {
                const vendorOrder = groupedOrders[vendorId]

                const totals = vendorOrder.products.reduce(
                    (acc, product) => {
                        const price = product.price || 0
                        const quantity = product.quantity || 0
                        const discount = product.discountAmount * quantity || 0
                        const taxAmount = product.taxAmount * quantity || 0

                        const productTotal =
                            price * quantity - discount + taxAmount
                        const productSubTotal = price * quantity + discount

                        acc.subTotalAmount += productSubTotal
                        acc.totalAmount += productTotal
                        acc.totalDiscount += discount
                        acc.totalQty += quantity
                        acc.totalTaxAmount += taxAmount

                        return acc
                    },
                    {
                        subTotalAmount: 0,
                        totalAmount: 0,
                        totalDiscount: 0,
                        totalQty: 0,
                        totalTaxAmount: 0,
                    }
                )

                // Find the shipping fee for the current vendor
                const shippingChargeEntry = shippingChargesList.find(
                    (entry) => entry.vendorId === vendorId
                )

                const shippingFee = shippingChargeEntry?.shippingCharges || 0

                return {
                    vendor: vendorId,
                    products: vendorOrder.products,
                    customerId: user?._id,
                    paymentMethod: cart?.paymentMethod,
                    subTotalAmount: totals.subTotalAmount,
                    totalAmount: totals.totalAmount + shippingFee, // Add shipping fee to total amount
                    totalDiscount: totals.totalDiscount,
                    totalShippingCost: shippingFee, // Assign the matched shipping fee
                    totalTaxAmount: totals.totalTaxAmount,
                    totalQty: totals.totalQty,
                    paymentStatus: cart?.paymentStatus,
                }
            })

            console.log(orders)

            if (orders.length !== 0) {
                // Submit each order separately
                for (const order of orders) {
                    const res = await createOrder(order).unwrap()
                    toast.success(
                        `Order created successfully: ${res.doc.orderId}`
                    )
                }

                // Clear cart and navigate to confirmation
                localStorage.removeItem('cart')
                window.location.href = '/order-confirmation'
            }
        } catch (err) {
            console.error(err)
            toast.error(err?.data?.message || 'Something went wrong')
        }
    }

    return loading ? (
        <Loader />
    ) : (
        <div className=" mx-auto w-full p-4">
            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">
                        Order Summary
                    </h2>
                    <p className="text-sm text-gray-500 mt-2">
                        Review your order details and place your order for fast
                        and secure checkout.
                    </p>
                </div>
                <section className="flex flex-col justify-around  md:flex-row gap-8 ">
                    <div className="w-1/2">
                        {/* Savings Info */}
                        {cart?.totalDiscount > 0 && (
                            <div className="bg-green-50 text-green-500 p-4 rounded-lg mb-4">
                                <h2 className="text-lg font-semibold flex items-center justify-center gap-2">
                                    <MdOutlineCelebration className="w-6 h-6" />
                                    You saved
                                    <p>
                                        <span className="text-xs">Rs.</span>
                                        {formatPrice(cart?.totalDiscount)}!
                                    </p>
                                </h2>
                            </div>
                        )}

                        {/* Pricing Details */}
                        <div className="space-y-4 mb-10">
                            <div className="text-gray-800 font-semibold">
                                <div className="order__price-box">
                                    <span>Sub Total</span>
                                    <span>
                                        <span className="text-xs">Rs.</span>
                                        {formatPrice(cart?.subTotal || 0)}
                                    </span>
                                </div>
                                <div className="order__price-box">
                                    <span>Tax</span>
                                    <span>
                                        <span className="text-xs">Rs.</span>
                                        {formatPrice(cart?.taxPrice || 0)}
                                    </span>
                                </div>
                                <div className="order__price-box flex items-center space-x-2">
                                    {/* Shipping Fee */}
                                    <div className="flex gap-2">
                                        <span>Shipping Fee</span>
                                        {/* SVG Logo */}
                                        <img
                                            src={TraxLogo}
                                            alt="Trax Shipping"
                                            className="w-14 p-1 bg-primary-50"
                                        />
                                    </div>
                                    <p className="block">
                                        <span className="text-xs">Rs.</span>
                                        {formatPrice(shippingFee || 0)}
                                    </p>
                                </div>

                                <div className="order__price-box">
                                    <span>Discount</span>
                                    <span>
                                        - <span className="text-xs">Rs.</span>
                                        {formatPrice(cart?.totalDiscount || 0)}
                                    </span>
                                </div>
                                <div className="order__price-box">
                                    <span>Payment Method</span>
                                    <span className="">
                                        {cart.paymentMethod ||
                                            'cash_on_delivery'}
                                    </span>
                                </div>
                                <div className="order__price-box">
                                    <span>Payment Status</span>
                                    <span
                                        className={`${
                                            cart.paymentStatus === 'paid'
                                                ? 'text-green-500'
                                                : 'text-red-500'
                                        }`}
                                    >
                                        {cart.paymentStatus || 'unpaid'}
                                    </span>
                                </div>

                                <div className="flex justify-between py-3 border-t text-primary-500 border-gray-300">
                                    <span className="text-xl font-bold ">
                                        Total
                                    </span>
                                    <span className="text-xl font-bold">
                                        <span className="text-xs">Rs.</span>
                                        {formatPrice(
                                            cart?.totalPrice + shippingFee || 0
                                        )}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-grow flex flex-col justify-around py-4 ">
                        {/* Trust Signals */}
                        <div className="grid grid-cols-2 justify-between items-center gap-4  py-4 text-center">
                            <div className="flex flex-col items-center justify-around">
                                <FaTruck className="text-3xl text-blue-500 mb-2" />
                                <span className="text-base text-green-400">
                                    Fast Delivery Nationwide
                                </span>
                            </div>
                            <div className="flex flex-col items-center justify-around">
                                <FaShieldAlt className="text-3xl text-primary-500 mb-2" />
                                <span className="text-base text-green-400">
                                    100% Safe Payment
                                </span>
                            </div>
                            <div className="flex flex-col items-center justify-around">
                                <FaUndo className="text-3xl text-orange-500 mb-2" />
                                <span className="text-base text-green-400">
                                    7 Days Return Policy
                                </span>
                            </div>
                            <div className="flex flex-col items-center justify-around">
                                <FaCheckCircle className="text-3xl text-indigo-500 mb-2" />
                                <span className="text-base text-green-400">
                                    100% Authentic Products
                                </span>
                            </div>
                        </div>

                        {/* Action Button and Links */}
                        <div className="mt-6 flex flex-col items-center gap-3">
                            <button
                                onClick={handleOrderSubmit}
                                type="submit"
                                className={`md:w-1/2 w-full py-3 text-lg font-semibold rounded-lg transition-all duration-300
                                 bg-primary-500 hover:bg-primary-400 text-white`}
                            >
                                {isLoading ? 'Placing order...' : 'Place Order'}
                            </button>

                            <Link
                                to="/products"
                                className="text-primary-400 text-sm transition duration-300 hover:text-primary-600"
                            >
                                <span className="inline-block">&lt;</span>{' '}
                                Continue Shopping
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default OrderSummaryPage
