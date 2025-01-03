import encryptionManager from './encryptionManager'

export const addDecimals = (num) => {
    if (isNaN(num)) return 0 // Handle invalid numbers

    // Check if the number is an integer, if so return as integer without decimals
    if (num % 1 === 0) {
        return num // No decimals needed for whole numbers
    }

    // Otherwise, return with two decimal places
    return num.toFixed(2)
}

export const updateCart = (state) => {
    // Handle the discount calculation with a fallback to 0
    state.totalDiscount = addDecimals(
        state.cartItems.reduce(
            (acc, item) => acc + (item.discountAmount || 0) * (item.qty || 0),
            0
        )
    )

    // Calculate total quantity
    state.totalQty = state.cartItems.reduce(
        (acc, item) => acc + (item.qty || 0),
        0
    )

    // Calcaute total weight
    state.totalWeight = state.cartItems.reduce(
        (acc, item) => acc + (item.weight || 0),
        0
    )

    // Calculate the tax price
    state.taxPrice = addDecimals(
        state.cartItems.reduce(
            (acc, item) =>
                acc +
                (item.taxIncluded
                    ? (item.taxAmount || 0) * (item.qty || 0)
                    : 0),
            0
        )
    )

    // Calculate the items price
    state.subTotal = addDecimals(
        state.cartItems.reduce(
            (acc, item) => acc + (item.price || 0) * (item.qty || 0),
            0
        )
    )
    // Calculate the total price (subTotal + shipping + tax - discount)
    state.totalPrice = addDecimals(
        Number(state.subTotal) +
            Number(state.taxPrice) -
            Number(state.totalDiscount)
    )

    // Save the updated cart to localStorage
    // localStorage.setItem('cart', JSON.stringify(state))

    // Save the updated cart to localStorage securely
    try {
        const encryptedCart = encryptionManager.encrypt(state)
        localStorage.setItem('cart', encryptedCart)
    } catch (error) {
        console.error('Failed to encrypt cart data:', error)
    }

    return state
}
