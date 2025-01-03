import AuthLayout from '../_auth/AuthLayout'
import CustomerEmailVerification from '../_auth/Forms/customer/CustomerEmailVerification'
import ForgotPassword from '../_auth/Forms/ForgotPassword'
import ResetPassword from '../_auth/Forms/ResetPassword'
import VendorLoginForm from '../_auth/Forms/VendorLoginForm'
import VendorEmailVerification from './../_auth/Forms/vendor/VendorEmailVerification'
// import OtpVerification from '../_auth/Forms/OtpVerification'

const authRoutes = [
    {
        path: 'auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'vendor/login',
                element: <VendorLoginForm />,
            },
            // {
            //     path: 'otp',
            //     element: <OtpVerification />,
            // },
            {
                path: 'customer/email/verification',
                element: <CustomerEmailVerification />,
            },
            {
                path: 'vendor/email/verification',
                element: <VendorEmailVerification />,
            },
            {
                path: 'forgot-password',
                element: <ForgotPassword />,
            },
            {
                path: 'reset-password/:hash',
                element: <ResetPassword />,
            },
        ],
    },
]

export default authRoutes
