import Loader from '../../../components/Loader'
import { useGetPageBySlugQuery } from '../../../redux/slices/systemApiSlice'

const TermsPage = () => {
    const { data, isLoading } = useGetPageBySlugQuery('terms-and-conditions')

    return (
        <div className="my-6">
            <h2 className="text-center text-gray-900 font-bold md:text-3xl text-lg  mb-6">
                Terms and Conditions
            </h2>
            {isLoading ? (
                <Loader />
            ) : data && data?.doc ? (
                <div className="bg-gray-100 p-4 rounded-md shadow-sm mb-6">
                    <div
                        dangerouslySetInnerHTML={{
                            __html: data?.doc?.description,
                        }}
                    />
                </div>
            ) : (
                <p>No Terms and Conditions found!</p>
            )}
        </div>
    )
}
export default TermsPage
