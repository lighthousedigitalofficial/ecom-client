/* eslint-disable react/prop-types */
import FlatCard from '../../shared/FlatCard'

const MoreStoreProducts = ({ products }) => {
    return (
        <div className="p-2 w-full bg-white rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">More From The Store</h2>
            <div className="flex flex-col gap-2 w-full p-2 overflow-hidden md:w-fit justify-center items-center">
                {products?.map((product, index) => (
                    <FlatCard key={index} {...product} />
                ))}
            </div>
        </div>
    )
}

export default MoreStoreProducts
