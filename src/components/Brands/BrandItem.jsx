import { Link } from 'react-router-dom'
import keys from './../../config/keys'

/* eslint-disable react/prop-types */

// ${keys.BUCKET_URL}
const BrandItem = ({ brand }) => {
    const brandLogo = brand?.logo?.startsWith('brand')
        ? `${keys.BUCKET_URL}${brand.logo}`
        : brand?.logo
        ? brand?.logo
        : keys.DEFAULT_IMG

    return (
        <div className="border border-gray-300 h-24 w-24 rounded-full group cursor-pointer">
            <Link to={`/products/brand/${brand.slug}`} className="">
                <img
                    src={brandLogo}
                    alt={brand.name}
                    loading="lazy"
                    className="w-full h-full rounded-full overflow-hidden object-cover transition-transform duration-300 group-hover:scale-110"
                />
            </Link>
        </div>
    )
}

export default BrandItem
