// import { FaDownload } from 'react-icons/fa'
import { useGetOrderDetailsQuery } from '../../../redux/slices/ordersApiSlice'
import { useParams } from 'react-router-dom'
import Loader from '../../Loader'

const OrderDetail = () => {
    const { orderId } = useParams()
    const { data: order, isLoading } = useGetOrderDetailsQuery(orderId, {
        skip: !orderId,
    })

    return isLoading ? (
        <Loader />
    ) : order && order?.doc ? (
        <div className="">
            <div className=" mx-auto bg-white rounded-lg p-6">
                <div className="flex justify-between items-center mb-5">
                    <h1 className="text-2xl font-semibold">
                        Order #{order?.doc?._id}
                    </h1>
                    <span className="bg-blue-100 text-blue-500 px-3 py-1 rounded-full">
                        {order?.doc?.status}
                    </span>
                </div>

                <div className="text-sm text-gray-500 mb-5">
                    16 Oct, 2024 01:10 AM
                </div>

                {/* <div className="border p-4 rounded-lg shadow-sm mb-5">
                    <div className="flex justify-between items-center mb-3">
                        <span>
                            Order Verification Code:{' '}
                            <span className="text-blue-500">421870</span>
                        </span>
                        <button className="text-blue-500 text-sx hover:text-blue-700 flex items-center">
                            <FaDownload className="inline w-4 h-4 mr-1" />
                            Download Invoice
                        </button>
                    </div>
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b-2 border-gray-200 text-left">
                                    Payment Info
                                </th>
                                <th className="py-2 px-4 border-b-2 border-gray-200 text-left">
                                    Shipping Address
                                </th>
                                <th className="py-2 px-4 border-b-2 border-gray-200 text-left">
                                    Billing Address
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b border-gray-200">
                                    <p>
                                        Payment Status:{' '}
                                        <span className="text-red-500">
                                            Unpaid
                                        </span>
                                    </p>
                                    <p>Payment Method: Cash On Delivery</p>
                                </td>
                                <td className="py-2 px-4 border-b border-gray-200">
                                    <p>Name: Aqib Ahmed</p>
                                    <p>Phone: +1**********</p>
                                    <p>City/Zip: Islamabad, 45710</p>
                                    <p>Address: Soan Garden</p>
                                </td>
                                <td className="py-2 px-4 border-b border-gray-200">
                                    <p>Name: Aqib Ahmed</p>
                                    <p>Phone: +1**********</p>
                                    <p>City/Zip: Islamabad, 45710</p>
                                    <p>Address: Soan Garden Heights 2</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="border rounded-lg shadow-sm p-5">
                    <div className="grid grid-cols-6 text-center font-semibold mb-4">
                        <div className="col-span-4 text-left">
                            Order Details
                        </div>
                        <div>Qty</div>
                        <div>Price</div>
                    </div>

                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center">
                            <img
                                src="https://via.placeholder.com/50"
                                alt="Product"
                                className="w-12 h-12 rounded-md mr-4"
                            />
                            <div>
                                <p>
                                    Table Tennis Bat - Double Fish - 3A-C - 2
                                    Pcs
                                </p>
                            </div>
                        </div>
                        <div className="text-center">1</div>
                        <div className="text-right">$987.00</div>
                    </div>

                    <div className="flex justify-end">
                        <div className="w-full md:w-1/3">
                            <div className="flex justify-between mb-2">
                                <span>Subtotal</span>
                                <span>$957.39</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span>Tax fee</span>
                                <span>$88.83</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span>Discount</span>
                                <span>-$29.61</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span>Coupon discount</span>
                                <span>-$0.00</span>
                            </div>
                            <div className="flex justify-between font-bold mt-3">
                                <span>Total</span>
                                <span>$1,046.22</span>
                            </div>
                            <button className="mt-5 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 w-full">
                                Cancel Order
                            </button>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    ) : (
        <p className="text-center text-gray-700">Order details not found.</p>
    )
}

export default OrderDetail
