import { Link } from 'react-router-dom'
import AppStore from '../../assets/socials-icons/apple_app.png'
import GoogleApp from '../../assets/socials-icons/google_app.png'
import FooterItems from './FooterItems'
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import logo from './../../assets/app-logo/app-logo.png'
import { useCustomerSubscribeMutation } from '../../redux/slices/customersApiSlice'
import { useState } from 'react'
import toast from 'react-hot-toast'

const footerInfo = [
    {
        title: 'ACCOUNT & SHIPPING INFO',
        links: [
            { name: 'Profile Info', url: '/profile/profile-info' },
            { name: 'Wish List', url: '/profile/wish-list' },
            { name: 'Track Order', url: '/profile/track-order' },
            { name: 'Refund Policy', url: '/refund-policy' },
            { name: 'Return Policy', url: '/return-policy' },
            { name: 'Cancellation Policy', url: '/cancellation-policy' },
        ],
    },
]

const footerNews = [
    {
        title: 'NEWSLETTER',
        content: (handleSubmit, email, setEmail) => (
            <div className="flex flex-col items-center w-full gap-4">
                <p className="text-left">
                    Subscribe to our new channel to get the latest updates
                </p>
                <form
                    onSubmit={handleSubmit}
                    className="flex justify-center w-full"
                >
                    <div className="relative ">
                        <input
                            type="email"
                            placeholder="Your Email Address"
                            className="pl-2 py-2 rounded text-black min-w-72 focus:outline-none focus:ring-2 focus:ring-primary-700 placeholder:text-xs placeholder:text-gray-400"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Capture email input
                            required
                        />
                        <button
                            type="submit" // Change button type to submit
                            className="absolute right-0 top-0 bottom-0   bg-primary-600 p-2 m-1 rounded-r text-white font-bold hover:bg-primary-700 text-xs"
                        >
                            Subscribe
                        </button>
                    </div>
                </form>
            </div>
        ),
    },
]

const FooterMainSection = () => {
    const [email, setEmail] = useState('')
    const [customerSubscribe] = useCustomerSubscribeMutation()

    const handleSubmit = async (e) => {
        e.preventDefault() // Prevent default form submission
        try {
            await customerSubscribe({ email }).unwrap()
            setEmail('')
            toast.success('Subscription successful! Thank you for subscribing.')
        } catch (error) {
            console.error('Subscription failed:', error)
            toast.error(
                error.data.message || 'Subscription failed. Please try again.'
            )
        }
    }

    return (
        <div className="bg-primary-900">
            <div className="lg:w-[80%] w-full bg-primary-10 mx-auto flex lg:flex-row flex-col items-center min-h-[50vh] gap-4 text-white">
                <div className="lg:w-[25%] flex flex-col gap-4 px-4 items-center">
                    <img
                        src={logo}
                        alt="Company Logo"
                        className="w-28 h-28 object-contain"
                    />
                    <h4 className="text-lg mb-2">DOWNLOAD OUR APP</h4>
                    <div className="flex justify-center gap-2">
                        <Link to="/">
                            <img
                                src={GoogleApp}
                                alt="Google Play"
                                className="w-36"
                            />
                        </Link>
                        <Link to="/">
                            <img
                                src={AppStore}
                                alt="App Store"
                                className="w-36"
                            />
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col lg:w-[75%] w-[90%] justify-around">
                    <div className="flex lg:flex-row flex-col-reverse w-full gap-4">
                        {/* <div className="lg:w-[30%]">
                            {footerSpecial.map((section, index) => (
                                <FooterItems
                                    key={index}
                                    title={section.title}
                                    links={section.links}
                                />
                            ))}
                        </div> */}
                        <div className="lg:w-[40%]">
                            {footerInfo.map((section, index) => (
                                <FooterItems
                                    key={index}
                                    title={section.title}
                                    links={section.links}
                                />
                            ))}
                        </div>
                        <div className="lg:w-[30%]">
                            {footerNews.map((section, index) => (
                                <FooterItems
                                    key={index}
                                    title={section.title}
                                    content={section.content(
                                        handleSubmit,
                                        email,
                                        setEmail
                                    )}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="flex lg:flex-row flex-col w-full">
                        <div className="lg:w-[70%]">
                            <div className="flex lg:flex-row flex-col w-full mt-4">
                                <h1 className="lg:w-[40%] w-full text-lg font-bold">
                                    Start a Conversation
                                </h1>
                                <hr className="border-white lg:w-[55%] lg:my-4" />
                            </div>
                            <div className="flex flex-wrap justify-around">
                                <div className="flex items-center">
                                    <FaEnvelope className="mr-2" />
                                    <span>info@ebazzar.pk</span>
                                </div>
                                <div className="flex items-center">
                                    <FaPhone className="mr-2" />
                                    <span>info@ebazzar.biz</span>
                                </div>
                                {/* <div className="flex items-center">
                                    <FaTicketAlt className="mr-2" />
                                    <span>Support Ticket</span>
                                </div> */}
                            </div>
                        </div>
                        <div className="lg:w-[30%] mt-4">
                            <div className="flex lg:flex-row flex-col w-full">
                                <div className="lg:w-[40%] text-lg font-bold">
                                    Address
                                </div>
                                <hr className="border-white lg:w-[60%] lg:my-4" />
                            </div>
                            <div className="flex text-nowrap items-center">
                                <FaMapMarkerAlt className="mr-2" />
                                <span> HSA Islamabad</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterMainSection
