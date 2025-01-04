import { Link } from 'react-router-dom'
import img1 from '../../../assets/contact/slide-1.jpg'
import img2 from '../../../assets/contact/slide-4.jpg'
const ContactUsPage = () => {
    return (
        <div className="page max-w-5xl m-auto flex flex-col lg:flex-row">
            {/* Left Menu */}
            <div className="left-menu bg-[#EEF2F5] ps-10 pt-10 lg:w-1/4">
                <ul className="space-y-4">
                    <li className="menu-link selected">
                        <Link className="text-primary-500 text-lg font-semibold">
                            Contact Us
                        </Link>
                    </li>
                    <li className="menu-link">
                        <Link
                            to=""
                            className="text-gray-700 hover:text-primary-500 text-lg"
                        >
                            Live Chat
                        </Link>
                    </li>
                    <li className="menu-link">
                        <Link
                            to=""
                            className="text-gray-700 hover:text-primary-500 text-lg"
                        >
                            Frequently Asked Questions
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="content-wrap lg:w-3/4 p-6">
                <div className="main-content">
                    {/* Image Section */}
                    <div className="item-description-photo mb-6">
                        <img
                            alt="Welcome to contact Uraan Pakistan"
                            src={img1}
                            className="w-full h-40 rounded-md"
                        />
                    </div>

                    {/* Contact Methods */}
                    <div className="contact-ways  mb-6">
                        <ul className="space-y-6 flex flex-col md:flex-row items-center gap-4">
                            <li className="contact-way-item pt-0 md:pt-5">
                                <div className="contact-text font-semibold">
                                    Chat with us online
                                </div>
                                <div className="contact-detail-wrap w-60 p-3  bg-[#F8F8F8]">
                                    <div className="contact-detail  flex flex-col items-end gap-2">
                                        Need Help? Chat with Uraan Pakistan.
                                        <div>
                                            <Link className=" px-4 py-2 t text-white bg-primary-500 hover:bg-primary-400  rounded-md ml-2">
                                                Live Chat
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="contact-way-item">
                                <div className="contact-text font-semibold">
                                    New user quick guide
                                </div>
                                <div className="contact-detail-wrap">
                                    <Link
                                        // href="https://uraan-pakistan.com/guide"
                                        // target="_blank"
                                        // rel="noopener noreferrer"
                                        className="block"
                                    >
                                        <img
                                            src={img2}
                                            alt="urran Pakistan"
                                            className="w-52 h-24 rounded-md object-cover"
                                        />
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Popular Questions */}
                    <div className="item-popular-question mb-6">
                        <div className="item-title font-bold mb-4">
                            Popular Questions from Other Users
                        </div>
                        <div className="questions space-y-3">
                            {[
                                {
                                    question: 'How can I join Uraan Pakistan?',
                                    link: '/faq/join-uraan',
                                },
                                {
                                    question: 'What services does Uraan offer?',
                                    link: '/faq/services',
                                },
                                {
                                    question:
                                        'How can I contact a representative?',
                                    link: '/faq/contact-rep',
                                },
                                {
                                    question:
                                        'What is Uraan Pakistan’s refund policy?',
                                    link: '/faq/refund-policy',
                                },
                                {
                                    question: 'How to access premium features?',
                                    link: '/faq/premium-features',
                                },
                                {
                                    question: 'How can I provide feedback?',
                                    link: '/faq/feedback',
                                },
                            ].map(({ question, link }, index) => (
                                <p key={index} className="question">
                                    <Link
                                        // to={link}
                                        className="text-primary-500 text-sm md:text-lg hover:underline"
                                    >
                                        {question}
                                    </Link>
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* Alternate Contacts */}
                    <div className="item-alternate-contacts">
                        <div className="item-title font-bold mb-4">
                            Alternate Contacts{' '}
                            <span className="text-sm text-gray-500">
                                (You can also contact Uraan Pakistan directly
                                via email or phone.)
                            </span>
                        </div>
                        <div className="contactInfo text-gray-700">
                            <p>
                                <strong>Address:</strong> Plot 123, Business
                                Bay, Islamabad, Pakistan
                            </p>
                            <p>
                                <strong>Phone:</strong> +92 (51) 1234 5678
                                <br />
                                <strong>Email:</strong>{' '}
                                <a
                                    href="mailto:contact@uraan-pakistan.com"
                                    className="text-primary-500 hover:underline"
                                >
                                    contact@uraan-pakistan.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUsPage
