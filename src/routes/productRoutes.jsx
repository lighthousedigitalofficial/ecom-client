import BrandsProductsPage from '../_root/pages/Brand/BrandsProductsPage'
import CategoryProductsPage from '../_root/pages/Category/CategoryProductsPage'
import DiscountedProductsPage from '../_root/pages/Products/DiscountedProducts'
import FlashDealsPage from '../_root/pages/Deals/FlashDealsPage'
import ProductDetailsPage from '../_root/pages/Products/ProductDetailsPage'
import BestSellingProductsPage from '../_root/pages/Products/BestSellingProductsPage'
import FeaturedProductsPage from '../_root/pages/Products/FeaturedProductsPage'
import TopRatedProdcutsPage from '../_root/pages/Products/TopRatedProdcutsPage'
import ProductsPage from '../_root/pages/Products/ProductsPage'

const productRoutes = [
    {
        path: 'products',
        element: <ProductsPage />,
    },
    // {
    //     path: 'region/:slug',
    //     element: <RegionProductsPage />,
    // },
    {
        path: 'products/discount',
        element: <DiscountedProductsPage />,
    },
    {
        path: '/products/featured',
        element: <FeaturedProductsPage />,
    },
    {
        path: '/products/best-sellings',
        element: <BestSellingProductsPage />,
    },
    {
        path: '/products/top-rated',
        element: <TopRatedProdcutsPage />,
    },
    {
        path: 'products/:slug',
        element: <ProductDetailsPage />,
    },
    {
        path: 'products/category/:slug',
        element: <CategoryProductsPage />,
    },
    {
        path: 'products/brand/:slug',
        element: <BrandsProductsPage />,
    },
    {
        path: 'flash-deals',
        element: <FlashDealsPage />,
    },
]

export default productRoutes
