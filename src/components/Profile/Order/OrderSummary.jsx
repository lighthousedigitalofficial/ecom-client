/* eslint-disable react/prop-types */
const OrderSummary = ({
    orderId,
    createdAt,
    status,
    paymentMethod,
    totalAmount,
}) => (
    <div className="mb-4">
        <h2 className="text-lg font-bold">Order Summary</h2>
        <p>Order ID: {orderId}</p>
        <p>Date: {new Date(createdAt).toLocaleDateString()}</p>
        <p>Status: {status}</p>
        <p>Payment Method: {paymentMethod}</p>
        <p>Total Amount: ${totalAmount}</p>
    </div>
)

export default OrderSummary
