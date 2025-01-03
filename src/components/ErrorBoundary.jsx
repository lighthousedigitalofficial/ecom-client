import React from 'react'
import { PropTypes } from 'prop-types'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError() {
        // Update state so the next render shows the fallback UI.
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        // Log error details to an external logging service if needed
        console.error('Error caught by ErrorBoundary:', error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="flex items-center justify-center h-screen">
                    <div className="p-6 max-w-md text-center bg-white shadow-lg rounded-lg">
                        <h2 className="text-2xl font-bold text-red-600">
                            Something went wrong
                        </h2>
                        <p className="text-gray-700 mt-4">
                            Please try reloading the page or contact support if
                            the problem persists.
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
                        >
                            Reload
                        </button>
                    </div>
                </div>
            )
        }
        return this.props.children
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired,
}

export default ErrorBoundary
