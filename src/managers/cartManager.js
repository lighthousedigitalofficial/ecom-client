class CartManager {
    static instance

    constructor() {
        if (CartManager.instance) {
            return CartManager.instance
        }
        this.cartData = null
        CartManager.instance = this
    }

    setCartData(cartData) {
        this.cartData = cartData
    }

    getCartData() {
        return this.cartData
    }

    calculateTotals() {
        if (!this.cartData) return null

        const totals = {
            totalQty: 0,
            subTotalAmount: 0,
            totalDiscountAmount: 0,
            totalTax: 0,
            totalShippingCost: 0,
            grandTotal: 0,
        }

        this.cartData.orders.forEach((order) => {
            totals.totalQty += order.totalQty
            totals.subTotalAmount += order.subTotalAmount
            totals.totalDiscountAmount += order.totalDiscountAmount
            totals.totalTax += order.cartItems.reduce(
                (sum, item) => sum + (item.tax || 0),
                0
            )
            totals.totalShippingCost += order.totalShippingCost || 0
        })

        totals.grandTotal =
            totals.subTotalAmount -
            totals.totalDiscountAmount +
            totals.totalTax +
            totals.totalShippingCost

        return totals
    }
}

export const cartManager = new CartManager()
