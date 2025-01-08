import { useState } from 'react'
import { useForm, FormProvider, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { toast } from 'react-hot-toast'
import PropTypes from 'prop-types' // Import PropTypes
import { useCreateReviewMutation } from '../../redux/slices/productsApiSlice'
import Rating from '@mui/material/Rating'

// Define the schema using Zod
const reviewSchema = z.object({
    rating: z
        .number()
        .min(1, 'Please give a rating')
        .max(5, 'Rating must be between 1 and 5'),
    comment: z.string(),
})

const AddReview = ({ productId, refetch }) => {
    const methods = useForm({
        resolver: zodResolver(reviewSchema),
    })
    const [rating, setRating] = useState(0)
    const [createReview, { isLoading }] = useCreateReviewMutation() // Use the mutation hook with loading state

    const onSubmit = async (data) => {
        try {
            const finalData = {
                review: data.comment,
                rating,
                productId,
            }

            // console.log(finalData)

            await createReview(finalData).unwrap()
            refetch()
            toast.success('Review submitted successfully!')
            methods.reset()
            setRating(0)
        } catch (error) {
            toast.error(error.data.message || 'Failed to submit review')
        }
    }

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className="space-y-4 border bg-white rounded-lg p-4"
            >
                <div>
                    <label className="input-label">Rate this Product</label>
                    <Controller
                        name="rating"
                        control={methods.control}
                        rules={{ required: 'Rating is required' }} // Validation rule
                        render={({ field }) => (
                            <Rating
                                name="half-rating"
                                value={rating}
                                precision={0.5}
                                onChange={(event, newValue) => {
                                    setRating(newValue)
                                    field.onChange(newValue) // Update react-hook-form value
                                }}
                                onBlur={field.onBlur} // Call onBlur to trigger validation
                                className="mt-1 " // Margin for spacing
                            />
                        )}
                    />
                    {methods.formState.errors.rating && (
                        <p className="text-red-500 text-xs mt-1">
                            {methods.formState.errors.rating.message}
                        </p>
                    )}
                </div>
                <div>
                    <label className="input-label">Reviews</label>
                    <textarea
                        {...methods.register('comment', {
                            required: 'Comment is required',
                        })} // Add validation
                        className="input bg-gray-50"
                        rows="4"
                    />
                    {methods.formState.errors.comment && (
                        <p className="text-red-500 text-xs mt-1">
                            {methods.formState.errors.comment.message}
                        </p>
                    )}
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="btn primary-btn"
                        disabled={isLoading} // Disable the button while loading
                    >
                        {isLoading ? 'Submitting...' : 'Submit Review'}
                    </button>
                </div>
            </form>
        </FormProvider>
    )
}

// Add prop types validation
AddReview.propTypes = {
    productId: PropTypes.string.isRequired,
    refetch: PropTypes.func.isRequired,
}

export default AddReview
