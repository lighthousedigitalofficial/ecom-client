/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'

import jazzCashLogo from './../../assets/payment-gateway/jazzcash.png'
import { useJazzCashCardPageRedirectionMutation } from '../../redux/slices/transactionSlice'

const JazzCashCard = ({ totalPrice }) => {
    const [params, setParams] = useState(null)

    const [jazzCashCardPageRedirection, { isLoading }] =
        useJazzCashCardPageRedirectionMutation()

    const handleSubmit = async () => {
        const data = await jazzCashCardPageRedirection({
            amount: totalPrice,
        }).unwrap()
        // const { data } = await axios.post(
        //     `${keys.BASE_URL}/api/v1/transaction/payment/initiate/card`,
        //     { amount: totalPrice }
        // )

        // Set the params to trigger form submission in useEffect
        if (data.params) {
            setParams(data.params)
        }
    }

    // Handle the form submission automatically once params are set
    useEffect(() => {
        if (params) {
            document.jsform.submit()
        }
    }, [params])

    return (
        <>
            {params && (
                <form
                    className="hidden"
                    name="jsform"
                    method="post"
                    action="https://sandbox.jazzcash.com.pk/CustomerPortal/transactionmanagement/merchantform"
                >
                    <input
                        type="hidden"
                        name="pp_MerchantID"
                        value={params.pp_MerchantID}
                    />
                    <input
                        type="hidden"
                        name="pp_Password"
                        value={params.pp_Password}
                    />
                    <input
                        type="hidden"
                        name="pp_TxnRefNo"
                        value={params.pp_TxnRefNo}
                    />
                    <input
                        type="hidden"
                        name="pp_Amount"
                        value={params.pp_Amount}
                    />
                    <input
                        type="hidden"
                        name="pp_TxnDateTime"
                        value={params.pp_TxnDateTime}
                    />
                    <input
                        type="hidden"
                        name="pp_TxnExpiryDateTime"
                        value={params.pp_TxnExpiryDateTime}
                    />
                    <input
                        type="hidden"
                        name="pp_ReturnURL"
                        value={params.pp_ReturnURL}
                    />
                    <input
                        type="hidden"
                        name="pp_Language"
                        value={params.pp_Language}
                    />
                    <input
                        type="hidden"
                        name="pp_TxnCurrency"
                        value={params.pp_TxnCurrency}
                    />
                    <input
                        type="hidden"
                        name="pp_Version"
                        value={params.pp_Version}
                    />
                    <input
                        type="hidden"
                        name="pp_SecureHash"
                        value={params.pp_SecureHash}
                    />
                    <input
                        type="hidden"
                        name="pp_BillReference"
                        value={params.pp_BillReference}
                    />
                    <input
                        type="hidden"
                        name="pp_Description"
                        value={params.pp_Description}
                    />
                    <input
                        type="hidden"
                        name="pp_TxnType"
                        value={params.pp_TxnType}
                    />
                </form>
            )}

            <button
                type="button"
                onClick={handleSubmit}
                className="flex items-center gap-2 bg-primary-50 py-3 px-6"
            >
                <img src={jazzCashLogo} alt="Jazz Cash" className="h-4" />
                {isLoading ? 'Loading...' : 'Debit or Credit Card'}
            </button>
        </>
    )
}

export default JazzCashCard
