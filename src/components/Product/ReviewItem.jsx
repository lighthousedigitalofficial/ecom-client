import PropTypes from 'prop-types';

const ReviewItem = ({ review }) => {
  return (
    <div className="border-b pb-4">
      <div className="flex items-center mb-4">
        <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center text-gray-500 font-bold">
          {review.name[0]}
        </div>
        <div className="ml-4">
          <p className="font-medium text-lg text-gray-700">{review.name}</p>
          <p className="text-sm text-gray-400">{review.date}</p>
        </div>
      </div>
      <div className="mt-2">
        <div className="flex items-center mb-2">
          {Array.from({ length: review.rating }).map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.669 5.147h5.398c.969 0 1.371 1.24.588 1.81l-4.361 3.169 1.669 5.147c.3.921-.755 1.688-1.54 1.165l-4.361-3.169-4.361 3.169c-.784.523-1.84-.244-1.54-1.165l1.669-5.147-4.361-3.169c-.784-.57-.38-1.81.588-1.81h5.398L9.049 2.927z" />
            </svg>
          ))}
        </div>
        <p className="text-sm text-gray-500">
          Color: {review.color}{" "}
          {review.verified && (
            <span className="text-orange-500 font-semibold">
              Verified Purchase
            </span>
          )}
        </p>
      </div>
      <h3 className="font-semibold mt-2 text-lg text-gray-700">{review.title}</h3>
      <p className="text-gray-600 mt-1">{review.description}</p>
      <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
        <button className="flex items-center space-x-1 text-blue-500 hover:text-blue-700">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 9l-3 3m0 0l-3-3m3 3V4m0 13l-3-3m0 0l3 3m0-3l3-3m0 0l-3 3"
            />
          </svg>
          <span>Helpful</span>
        </button>
        <p>{review.helpfulCount} people found this helpful</p>
        <button className="text-red-500 hover:text-red-700">Report</button>
      </div>
    </div>
  );
};

ReviewItem.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    verified: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    helpfulCount: PropTypes.number.isRequired,
  }).isRequired,
};

export default ReviewItem;