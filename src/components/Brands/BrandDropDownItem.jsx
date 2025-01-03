import { Link } from 'react-router-dom'
import { useGetBrandsQuery } from '../../redux/slices/brandsApiSlice'
import Loader from '../Loader'
import { capitalizeFirstLetter } from '../../utils'

const BrandDropDownItem = () => {
    const { data: brands, isLoading } = useGetBrandsQuery({})

    return isLoading ? (
        <Loader />
    ) : brands && brands.doc ? (
        <>
            <ul>
                {brands.doc.map((brand, index) => {
                    if (index <= 6 && brand.totalProducts > 0)
                        return (
                            <li
                                key={brand._id}
                                className=" py-2 border-b outline-none hover:text-primary-400 cursor-pointer"
                            >
                                <Link
                                    to={`/products/brand/${brand.slug}`}
                                    className="flex justify-between items-center"
                                >
                                    <span>
                                        {capitalizeFirstLetter(brand.name)}
                                    </span>
                                    <span className="text-gray-500">
                                        ({brand.totalProducts || 0})
                                    </span>
                                </Link>
                            </li>
                        )
                })}
            </ul>
            <div className="text-center mt-4">
                <Link
                    to="/brands"
                    className="text-primary-500 hover:text-primary-400 outline-none"
                >
                    View more
                </Link>
            </div>
        </>
    ) : (
        <p>No brands found!</p>
    )
}

export default BrandDropDownItem
