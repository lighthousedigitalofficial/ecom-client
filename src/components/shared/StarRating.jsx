import { useState } from 'react'
import PropTypes from 'prop-types'
import Rating from '@mui/material/Rating'

const StarRating = ({ rating, onRatingChange }) => {
    // const [hover, setHover] = useState(0)

    return (
        // <div className="flex space-x-1">
        //     {[1, 2, 3, 4, 5].map((star) => (
        //         <button
        //             key={star}
        //             type="button"
        //             className={`text-2xl ${
        //                 star <= (hover || rating)
        //                     ? 'text-yellow-800'
        //                     : 'text-gray-300'
        //             }`}
        //             onClick={() => onRatingChange(star)}
        //             onMouseEnter={() => setHover(star)}
        //             onMouseLeave={() => setHover(0)}
        //         >
        //             ★
        //         </button>
        //     ))}
        // </div>
        <div>
            <Rating
                name="half-rating"
                defaultValue={0}
                precision={0.5}
                onChange={onRatingChange}
            />
        </div>
    )
}

StarRating.propTypes = {
    rating: PropTypes.number.isRequired,
    onRatingChange: PropTypes.func.isRequired,
}

export default StarRating
