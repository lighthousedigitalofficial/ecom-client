// OrderCard.jsx
import { FaEye, FaDownload } from 'react-icons/fa'; // Importing icons from React Icons
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const OrderCard = ({data, onView, onDownload }) => {

  const {  orderId, items, date, status, total } = data;
  return (
    <div className="flex items-center justify-between border bg-white my-2 rounded-md p-4  transition">
      {/* Order Details */}
      <div className="flex items-center">
        
        <div>
          <p className="font-semibold">Order #{orderId}</p>
          <p className="text-sm text-gray-500">{items} Items</p>
          <p className="text-sm text-gray-400">{date}</p>
        </div>
      </div>

      {/* Status */}
      
<div className="text-blue-500">
  <span className={`text-xs px-2 py-1 rounded-full ${
    status === 'Shipped' ? 'bg-blue-50 text-blue-500' :
    status === 'Processing' ? 'bg-pink-50 text-pink-500' :
    status === 'Delivered' ? 'bg-green-50 text-green-500' :
    'bg-gray-100 text-gray-500'
  }`}>
    {status}
  </span>
</div>

      {/* Total Amount */}
      <div className="font-semibold text-gray-800">{total}</div>

      {/* Action Buttons */}
      <div className="flex space-x-3">
        {/* View Button */}
        <Link to={`/profile/order/${orderId}`} className="text-blue-500 hover:text-blue-700" onClick={onView}>
          <FaEye className="w-4 h-4" />
        </Link>

        {/* Download Button */}
        <button className="text-green-500 hover:text-green-700" onClick={onDownload}>
          <FaDownload className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

OrderCard.propTypes = {
  data: PropTypes.object.isRequired,
  onView: PropTypes.func.isRequired,
  onDownload: PropTypes.func.isRequired,
};

export default OrderCard;
