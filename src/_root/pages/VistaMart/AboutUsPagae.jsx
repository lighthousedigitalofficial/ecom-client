import Loader from '../../../components/Loader'
import { useGetPageBySlugQuery } from '../../../redux/slices/systemApiSlice'

const AboutUsPage = () => {
    const { data, isLoading } = useGetPageBySlugQuery('about-us')

    return (
        <div className="my-6">
            <h2 className="text-center text-gray-900 font-bold md:text-3xl text-lg  mb-6">
                About Us
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
                <p>No cancellation policy found!</p>
            )}
        </div>
    )
}
export default AboutUsPage
