import BrandsProductsPage from '../_root/pages/Brand/BrandsProductsPage'
import CategoryProductsPage from '../_root/pages/Category/CategoryProductsPage'
import DiscountedProductsPage from '../_root/pages/Products/DiscountedProducts'
import FlashDealsPage from '../_root/pages/Deals/FlashDealsPage'
import ProductDetailsPage from '../_root/pages/Products/ProductDetailsPage'
import BestSellingProductsPage from '../_root/pages/Products/BestSellingProductsPage'
import FeaturedProductsPage from '../_root/pages/Products/FeaturedProductsPage'
import TopRatedProdcutsPage from '../_root/pages/Products/TopRatedProdcutsPage'
import ProductsPage from '../_root/pages/Products/ProductsPage'
import RegionProducts from '../_root/pages/Products/RegionProducts'
import SubCategoryProductsPage from '../_root/pages/Category/SubCategoryProductsPage'

const productRoutes = [
    {
        path: 'products',
        element: <ProductsPage />,
    },
    {
        path: 'region-products',
        element: <RegionProducts />,
    },
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
        path: 'products/sub-category/:slug',
        element: <SubCategoryProductsPage />,
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
