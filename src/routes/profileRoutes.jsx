import ProfilePage from '../_root/pages/ProfilePage'
import OrderView from '../components/Profile/Order/OrderView'
import Coupons from '../components/Profile/Coupons'
import Inbox from '../components/Profile/Inbox'
import MyAddress from '../components/Profile/MyAddress'
import MyloyaltyPoint from '../components/Profile/MyLoyaltyPoint'
import MyOrders from '../components/Profile/MyOrders'
import MyWallet from '../components/Profile/MyWallet'
import OrderDetail from '../components/Profile/Order/OrderDetail'
import TrackOrder from '../components/Profile/Order/TrackOrder'
import ProfileInfo from '../components/Profile/ProfileInfo'
import ReferEarn from '../components/Profile/ReferEarn'
import SupportTicket from '../components/Profile/SupportTicket'
import WishList from '../components/Profile/WishList'

const profileRoutes = [
    {
        path: 'profile',
        element: <ProfilePage />,
        children: [
            {
                path: 'profile-info',
                element: <ProfileInfo />,
            },
            {
                path: 'my-orders',
                element: <MyOrders />,
            },
            {
                path: 'order/:orderId',
                element: <OrderDetail />,
            },
            {
                path: 'orders/details/:orderId',
                element: <OrderView />,
            },
            {
                path: 'inbox',
                element: <Inbox />,
            },
            {
                path: 'coupons',
                element: <Coupons />,
            },
            {
                path: 'wish-list',
                element: <WishList />,
            },
            {
                path: 'my-loyalty-point',
                element: <MyloyaltyPoint />,
            },
            {
                path: 'support-ticket',
                element: <SupportTicket />,
            },
            {
                path: 'my-address',
                element: <MyAddress />,
            },

            {
                path: 'refer-earn',
                element: <ReferEarn />,
            },
            {
                path: 'my-wallet',
                element: <MyWallet />,
            },
            {
                path: 'track-order',
                element: <TrackOrder />,
            },
        ],
    },
]

export default profileRoutes
