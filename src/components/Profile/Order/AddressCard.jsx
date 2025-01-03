/* eslint-disable react/prop-types */
const AddressCard = ({ title, address }) => (
    <div className="bg-white rounded border-gray-400 p-4">
        <h3 className="font-bold">{title}</h3>
        <p>{address.line1}</p>
        <p>
            {address.city}, {address.state}, {address.zipCode}
        </p>
    </div>
)

export default AddressCard
