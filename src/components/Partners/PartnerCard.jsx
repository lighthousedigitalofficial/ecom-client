/* eslint-disable react/prop-types */
const PartnerCard = ({ logo, name }) => {
    return (
        <div className="flex flex-col items-center text-center space-y-2">
            <img src={logo} alt={name} className="h-20 w-20 object-contain" />
            <p className="text-sm font-medium text-gray-700">{name}</p>
        </div>
    )
}

export default PartnerCard
