/* eslint-disable react/prop-types */

const SessionExpiredModal = ({ onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
                className="fixed inset-0 bg-black opacity-50 transition-opacity duration-300"
                onClick={onClose}
            ></div>
            <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/3 z-10 transform transition-all duration-300 scale-95 opacity-100">
                <div className="p-6 text-center">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                        Session Expired
                    </h2>
                    <p className="mb-6 text-gray-700 text-lg">
                        Your session has expired. Please log in again to
                        continue.
                    </p>
                    <button
                        className="bg-primary-500 text-white px-5 py-3 rounded-lg hover:bg-primary-600 transition-colors duration-200 transform active:scale-95"
                        onClick={onClose}
                    >
                        Go to Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SessionExpiredModal
