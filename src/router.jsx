import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './_root/RootLayout'

import HomePage from './_root/pages/HomePage'
import BrandsPage from './_root/pages/Brand/BrandsPage'
import CategoriesPage from './_root/pages/Category/CategoriesPage'

import SearchResultPage from './_root/pages/SearchResulstPage'

// Sperate routes
import productRoutes from './routes/productRoutes'
import vendorRoutes from './routes/vendorRoutes'
import customerRoutes from './routes/customerRoutes'
import profileRoutes from './routes/profileRoutes'
import authRoutes from './routes/authRoutes'

import ScrollToTop from './components/ScrollToTop'
import ServerErrorPage from './_root/pages/ServerErrorPage'
import NotFoundPage from './_root/pages/NotFoundPage'

import ContactUsPage from './_root/pages/VistaMart/ContactUsPage'
import PrivacyPolicyPage from './_root/pages/VistaMart/PrivacyPolicyPage'
import FaqPage from './_root/pages/VistaMart/FaqPage'
import AboutUsPage from './_root/pages/VistaMart/AboutUsPagae'
import RefundPolicy from './_root/pages/VistaMart/RefundPolicyPage'
import ReturnPolicy from './_root/pages/VistaMart/ReturnPolicyPage'
import CancellationPolicy from './_root/pages/VistaMart/CancellationPolicyPage'
import TermsPage from './_root/pages/VistaMart/TermsPage'

// import ErrorBoundary from './components/ErrorBoundary'

const router = createBrowserRouter([
    ...authRoutes,
    {
        path: '',
        element: (
            <>
                {/* <ErrorBoundary> */}
                <RootLayout />,
                <ScrollToTop />
                {/* </ErrorBoundary> */}
            </>
        ),
        children: [
            ...productRoutes,
            ...vendorRoutes,
            ...customerRoutes,
            ...profileRoutes,
            {
                path: '',
                element: <HomePage />,
            },
            {
                path: 'privacy-policy',
                element: <PrivacyPolicyPage />,
            },
            {
                path: 'terms',
                element: <TermsPage />,
            },

            {
                path: 'brands',
                element: <BrandsPage />,
            },
            {
                path: 'categories',
                element: <CategoriesPage />,
            },
            {
                path: 'about-us',
                element: <AboutUsPage />,
            },
            {
                path: 'contact-us',
                element: <ContactUsPage />,
            },
            {
                path: 'faqs',
                element: <FaqPage />,
            },
            {
                path: 'refund-policy',
                element: <RefundPolicy />,
            },
            {
                path: 'return-policy',
                element: <ReturnPolicy />,
            },
            {
                path: 'cancellation-policy',
                element: <CancellationPolicy />,
            },
            {
                path: 'search',
                element: <SearchResultPage />,
            },
        ],
    },
    {
        path: '/server-error',
        element: <ServerErrorPage />,
    },
    {
        path: '*',
        element: <NotFoundPage />,
    },
])

export default router
