import { useGetOrderDetailsQuery } from '../../../redux/slices/ordersApiSlice'
import { useParams } from 'react-router-dom'
import Loader from '../../Loader'
import VendorCard from '../../Product/subcomponent/VendorCard'
import ProductTable from './ProductTable'
import toast from 'react-hot-toast'
import { IconButton, Tooltip } from '@mui/material'
import { FaRegCopy } from 'react-icons/fa'

const OrderView = () => {
    // Get the order ID from the URL parameters
    const { orderId } = useParams()
    // Use the query to fetch order details with the order ID
    const { data, error, isLoading } = useGetOrderDetailsQuery(orderId)

    // Handle error state
    if (error) {
        return (
            <div className="text-red-600">
                Error loading order details: {error.message}
            </div>
        )
    }

    const { doc: order } = data ?? []

    const handleCopy = (orderId) => {
        navigator.clipboard.writeText(orderId)
        toast.success(`Order ID ${orderId} copied to clipboard!`)
    }

    return isLoading ? (
        <Loader />
    ) : data && data?.doc && order ? (
        <div className="w-full px-4 py-8">
            <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold">Order Details</h1>
            </div>
            <br />
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-5">
                <div className="col-span-1 lg:col-span-4 bg-white rounded h-full border-gray-400 hover:shadow-md p-4">
                    <h2 className="text-[0.7rem] md:text-[0.9rem] text-wrap md:text-nowrap font-bold pb-5">
                        Order ID{' '}
                        <span className="text-orange-700">
                            #{order?.orderId}
                        </span>
                    </h2>
                    <p className="text-[0.7rem] md:text-[0.9rem] text-wrap md:text-nowrap font-bold pb-5">
                        Tracking ID:
                        {order?.trackingId !== '0' ? (
                            <>
                                <span className="text-cyan-700 ml-2">
                                    {order?.trackingId}
                                </span>
                                <Tooltip title="Copy Tracking ID">
                                    <IconButton
                                        size="small"
                                        onClick={() =>
                                            handleCopy(order.trackingId)
                                        }
                                        sx={{ ml: 1 }}
                                    >
                                        <FaRegCopy />
                                    </IconButton>
                                </Tooltip>
                            </>
                        ) : (
                            <span className="text-gray-600 ml-2">
                                Not Booked
                            </span>
                        )}
                    </p>

                    <p className="text-sm">
                        Date: {new Date(order?.createdAt).toLocaleString()}
                    </p>
                    <div className="text-end t pt-2">
                        <p className="text-sm">
                            Status:
                            <span
                                className={`bg-secondary-500 uppercase text-sm font-bold p-1 rounded border  ml-2 text-primary-500`}
                            >
                                {order?.status}
                            </span>
                        </p>
                        <p className="pt-3 text-sm">
                            Payment Method:
                            <span className="font-bold text-sm text-primary-500  ml-2">
                                {order?.paymentMethod}
                            </span>
                        </p>
                        <p className="pt-3 text-sm">
                            Total Amount:
                            <span className="font-bold text-sm text-primary-500 ml-2">
                                Rs. {order?.totalAmount?.toFixed(2)}
                            </span>
                        </p>

                        <ProductTable products={order.products} />
                    </div>
                    <div className="mt-4 flex flex-col gap-4 border-t-2 py-2">
                        <div className="flex justify-between text-sm">
                            <span>Sub Total</span>
                            <span>
                                PKR{' '}
                                {order?.totalAmount +
                                    order?.totalDiscount -
                                    order.totalTaxAmount}
                            </span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span>Discount</span>
                            <span>- PKR {order.totalDiscount}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span>Tax Amount</span>
                            <span>PKR {order.totalTaxAmount}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span>Shipping Cost</span>
                            <span>PKR {order.totalShippingCost}</span>
                        </div>

                        <div className="flex justify-between font-bold border-t pt-2">
                            <span>Total Price</span>
                            <span>PKR {order?.totalAmount}</span>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 lg:col-span-2">
                    <div className="px-4 py-3 bg-white rounded-xl shadow-md space-y-4">
                        <h2 className="text-base font-semibold text-start">
                            Customer Information
                        </h2>
                        <div className="flex gap-4">
                            <h3 className="text-sm">Name:</h3>
                            <p className="text-sm font-medium">
                                {order?.customer.firstName}
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <h3 className="text-sm">Phone:</h3>
                            <p className="text-gray-500 text-sm">
                                {order?.customer.phoneNumber}
                            </p>
                        </div>
                    </div>
                    <div className="px-4 py-3 bg-white rounded-xl shadow-md space-y-4 mt-5 ">
                        <h1 className="text-base text-start font-bold">
                            Shipping Address
                        </h1>
                        <table className="min-w-full  mb-6">
                            <tbody>
                                <tr>
                                    <td className="text-sm p-2">Address:</td>
                                    <td className="text-sm p-2">
                                        {order?.shippingAddress.address}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-sm p-2">City:</td>
                                    <td className="text-sm p-2">
                                        {order?.shippingAddress.city}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-sm p-2">State:</td>
                                    <td className="text-sm p-2">
                                        {order?.shippingAddress.state}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-sm p-2">Zip Code</td>
                                    <td className="text-sm p-2">
                                        {order?.shippingAddress.zipCode}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-sm p-2">Country</td>
                                    <td className="text-sm p-2">
                                        {order?.shippingAddress.country}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="px-4 py-3 bg-white rounded-xl shadow-md space-y-4 mt-5  mb-4">
                        <h2 className="text-base font-semibold text-start">
                            Billing Address
                        </h2>
                        <tbody>
                            <tr>
                                <td className="text-sm p-2">Name:</td>
                                <td className=" text-sm p-2">
                                    {order?.billingAddress.name}
                                </td>
                            </tr>
                            <tr>
                                <td className="text-sm p-2">Address:</td>
                                <td className="text-sm p-2">
                                    {order?.billingAddress.address}
                                </td>
                            </tr>
                            <tr>
                                <td className="text-sm p-2">City:</td>
                                <td className="text-sm p-2">
                                    {order?.billingAddress.city}
                                </td>
                            </tr>
                            <tr>
                                <td className="text-sm p-2">State:</td>
                                <td className="text-sm p-2">
                                    {order?.billingAddress.state}
                                </td>
                            </tr>
                            <tr>
                                <td className="text-sm p-2">Zip Code:</td>
                                <td className="text-sm p-2">
                                    {order?.billingAddress.zipCode}
                                </td>
                            </tr>
                            <tr>
                                <td className="text-sm p-2">Country:</td>
                                <td className="text-sm p-2">
                                    {order?.billingAddress.country}
                                </td>
                            </tr>
                        </tbody>
                    </div>
                    <VendorCard vendorId={order?.vendor._id} />
                </div>
            </div>
        </div>
    ) : (
        <p>Order Details not found!</p>
    )
}

export default OrderView
