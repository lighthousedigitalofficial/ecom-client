import ShopViewPage from '../_root/pages/Vendor/ShopViewPage'
import VendorRegisterPage from '../_root/pages/Vendor/VendorRegisterPage'
import VendorsPage from '../_root/pages/Vendor/VendorsPage'

const vendorRoutes = [
    {
        path: 'auth/vendor/registration',
        element: <VendorRegisterPage />,
    },
    {
        path: 'vendors',
        element: <VendorsPage />,
    },
    {
        path: 'shop-view/:slug',
        element: <ShopViewPage />,
    },
]

export default vendorRoutes
