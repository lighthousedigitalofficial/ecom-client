/* eslint-disable react/prop-types */
const CustomerInfo = ({ customer }) => (
    <div className="bg-white rounded border-gray-400 p-4">
        <h2 className="text-lg font-bold">Customer Info</h2>
        <p>{customer.name}</p>
        <p>{customer.email}</p>
        <p>{customer.phone}</p>
    </div>
)

export default CustomerInfo
