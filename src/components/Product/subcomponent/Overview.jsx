/* eslint-disable react/prop-types */
const Overview = ({ product }) => {
    return (
        <div className="flex flex-col w-full my-8 p-4 bg-white border rounded-sm">
            <div className="flex-1 p-4">
                <div className="mb-4">
                    <h3 className="text-xl font-semibold text-center">
                        Overview
                    </h3>
                </div>
                <div className="text-gray-800 ">
                    {product.description ? (
                        <div
                            dangerouslySetInnerHTML={{
                                __html: product.description,
                            }}
                        />
                    ) : (
                        <p>Product has no description </p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Overview
