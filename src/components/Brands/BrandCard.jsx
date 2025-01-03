/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import keys from '../../config/keys'

const BrandCard = ({ brand }) => {
    const brandLogo = brand?.logo?.startsWith('brand')
        ? `${keys.BUCKET_URL}${brand.logo}`
        : brand?.logo
        ? brand?.logo
        : keys.DEFAULT_IMG

    return (
        <div className="bg-white flex flex-col items-center gap-2 p-2 w-40 shadow-sm rounded-md">
            <div className="border border-gray-100 h-20 w-20 rounded-full group cursor-pointer">
                <Link to={`/products/brand/${brand.slug}`} className="">
                    <img
                        src={brandLogo}
                        alt={brand.name}
                        loading="lazy"
                        className="w-full h-full rounded-full overflow-hidden object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                </Link>
            </div>
            <Link to={`/products/brand/${brand.slug}`} className="text-sm">
                {brand.name}
            </Link>
        </div>
    )
}

export default BrandCard
