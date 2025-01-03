/* eslint-disable react/prop-types */
// const ProductDialog = ({ productId, open, onClose }) => {
// 	return (
// 		<Dialog className="z-40" open={open} handler={onClose} size="xl">
// 			<ProductQuickView productId={productId} onClose={onClose} />
// 		</Dialog>
// 	);
// };

/* eslint-disable react/prop-types */
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import ProductQuickView from './ProductQuickView'
import { useGetProductDetailsQuery } from '../../redux/slices/productsApiSlice'
import Loader from '../Loader'
import { FaXmark } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const ProductDialog = ({ productId, open, onClose }) => {
    const { data: product, isLoading } = useGetProductDetailsQuery(productId, {
        skip: !productId,
    })

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="lg"
            fullWidth
            aria-labelledby="product-dialog-title"
        >
            {/* Header */}
            <DialogTitle
                id="product-dialog-title"
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontWeight: 'bold',
                    p: 2,
                }}
            >
                {/* Close button and Product title */}
                <Link
                    to={`/products/${product?.doc?.slug}` || ''}
                    className="text-lg md:text-xl flex gap-4 items-center  truncate w-2/3 font-semibold hover:text-primary-500 text-primary-600"
                >
                    <span>{product?.doc?.name || ''}</span>
                </Link>
                <IconButton
                    edge="end"
                    color="inherit"
                    onClick={onClose}
                    aria-label="close"
                >
                    <FaXmark />
                </IconButton>
            </DialogTitle>

            {/* Content */}

            <DialogContent dividers sx={{ padding: 2 }}>
                {isLoading ? (
                    <Loader />
                ) : product && product?.doc ? (
                    <ProductQuickView
                        product={product?.doc}
                        onClose={onClose}
                    />
                ) : (
                    <p>Product details not found!</p>
                )}
            </DialogContent>
        </Dialog>
    )
}

export default ProductDialog
