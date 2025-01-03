/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import FlatCard from '../shared/FlatCard'
import { FaAngleRight } from 'react-icons/fa'

const StarProducts = ({ icon, title, products, link }) => {
    return products ? (
        <div className="bg-white w-full py-4 px-2 shadow-md rounded-lg shadow-primary-50">
            <div className="flex justify-between items-center mx-2 mb-4">
                <div className="flex justify-between  items-center w-fit gap-2">
                    <img
                        src={icon}
                        alt="icon"
                        className="w-10 h-10 object-contain"
                    />
                    <h3 className="text-xl font-bold">{title}</h3>
                </div>
                <Link to={link} className="view-box">
                    View All
                    <span>
                        <FaAngleRight className="text-lg" />
                    </span>
                </Link>
            </div>

            <div className="flex justify-between  flex-col gap-4">
                {products?.map((product, index) => (
                    <FlatCard key={index} {...product} />
                ))}
            </div>
        </div>
    ) : null
}

export default StarProducts
