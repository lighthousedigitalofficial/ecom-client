import { Link } from 'react-router-dom'
import img1 from '../../../assets/contact/slide-1.jpg'
const ContactUsPage = () => {
    return (
        <div className="page flex flex-col lg:flex-row">
            {/* Left Menu */}
            <div className="left-menu bg-gray-100 ps-10 pt-10 lg:w-1/4">
                <ul className="space-y-4">
                    <li className="menu-link selected">
                        <Link
                            // to="/aboutus/contact"
                            className="text-primary-500 text-lg font-semibold"
                        >
                            Contact Us
                        </Link>
                    </li>
                    <li className="menu-link">
                        <Link
                            to={''}
                            // href="//membercenter.made-in-china.com/tm.do?xcase=foropentmwin"
                            className="text-gray-700 hover:text-primary-500 text-lg"
                        >
                            Live Chat
                        </Link>
                    </li>
                    <li className="menu-link">
                        <Link
                            to={''}
                            // href="//www.made-in-china.com/help/faq/"
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
                            alt="Welcome to contact Made-in-China.com"
                            src={img1}
                            className="w-full h-40 rounded-md"
                        />
                    </div>

                    {/* Contact Methods */}
                    <div className="contact-ways mb-6">
                        <ul className="space-y-6">
                            <li className="contact-way-item">
                                <div className="contact-text font-semibold">
                                    Chat with us online
                                </div>
                                <div className="contact-detail-wrap">
                                    <div className="contact-detail">
                                        Need Help? Chat with Made-in-China.com.
                                        <Link
                                            // href="//membercenter.made-in-china.com/tm.do?xcase=foropentmwin"
                                            className="btn-main btn-large btn-contact text-white bg-primary-500 hover:bg-primary-400 px-4 py-2 rounded-md ml-2"
                                        >
                                            Live Chat
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            <li className="contact-way-item">
                                <div className="contact-text font-semibold">
                                    New user quick guide
                                </div>
                                <div className="contact-detail-wrap">
                                    <a
                                        href="//www.made-in-china.com/video/How-to-use-MIC-Website-service-QJxnqnYXdmlE.html"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block"
                                    >
                                        <img
                                            src="https://www.micstatic.com/micen/img/contactUs/videoPlay.jpg"
                                            alt="video"
                                            className="w-40 h-40 rounded-md"
                                        />
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Popular Questions */}
                    <div className="item-popular-question mb-6">
                        <div className="item-title font-bold mb-4">
                            Popular Questions from Other Buyers
                        </div>
                        <div className="questions space-y-3">
                            {[
                                {
                                    question:
                                        'Can Made-in-China.com recommend specific products to me?',
                                    link: '/faq/detail1u606227454',
                                },
                                {
                                    question:
                                        "What should I do if I can't find suitable products?",
                                    link: '/faq/detail1u606227464',
                                },
                                {
                                    question: 'How can I contact suppliers?',
                                    link: '/faq/detail1u606227474',
                                },
                                {
                                    question:
                                        "What's the difference between Gold Member, Diamond Member, Audited Supplier and License Verified?",
                                    link: '/faq/detail1u606227484',
                                },
                                {
                                    question:
                                        'How can I obtain more information about suppliers?',
                                    link: '/faq/detail1u606227494',
                                },
                                {
                                    question:
                                        'How can I reduce trade risks during business?',
                                    link: '/faq/detail1u606227504',
                                },
                            ].map(({ question, link }, index) => (
                                <p key={index} className="question">
                                    <Link
                                        // href={link}
                                        // target="_blank"
                                        // rel="noopener noreferrer"
                                        className="text-primary-500 text-lg hover:underline"
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
                                (You can also contact Made-in-China.com directly
                                via mail or fax.)
                            </span>
                        </div>
                        <div className="contactInfo text-gray-700">
                            <p>
                                <strong>Address:</strong> No. 7, Lijing Road,
                                Jiangbei New Area, Nanjing, Jiangsu, China
                            </p>
                            <p>
                                <strong>Post Code:</strong> 210032
                                <br />
                                <strong>Fax Number:</strong> +86(25)6667 0000{' '}
                                <span className="text-red-500">*</span> Please
                                leave your email on the fax. We will contact you
                                via email.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUsPage
