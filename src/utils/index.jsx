// import parsePhoneNumberFromString from 'libphonenumber-js'
import { z } from 'zod'

export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export const phoneValidation = z.string().min(13, 'Phone number is invalid')
// Dynamic phone number validation
// export const phoneValidation = z
//     .object({
//         phone: z.string().nonempty('Phone number is required'),
//         countryCode: z
//             .string()
//             .length(2, 'Country code must be a valid 2-letter ISO 3166 code'),
//     })
//     .refine(
//         ({ phone, countryCode }) => {
//             const phoneNumber = parsePhoneNumberFromString(phone, countryCode)
//             return phoneNumber?.isValid() ?? false
//         },
//         {
//             message: 'Phone number is invalid for the provided country code',
//         }
//     )
// .regex(/^\+\d{1,4}\s\d{6,14}$/, 'Invalid phone number') // Regex to validate international numbers

export const timeAgo = (date) => {
    const now = new Date()
    const past = new Date(date)
    const seconds = Math.floor((now - past) / 1000)

    const intervals = [
        { label: 'year', seconds: 31536000 },
        { label: 'month', seconds: 2592000 },
        { label: 'day', seconds: 86400 },
        { label: 'hour', seconds: 3600 },
        { label: 'minute', seconds: 60 },
        { label: 'second', seconds: 1 },
    ]

    for (const interval of intervals) {
        const count = Math.floor(seconds / interval.seconds)
        if (count >= 1) {
            return count === 1
                ? `1 ${interval.label} ago`
                : `${count} ${interval.label}s ago`
        }
    }

    return 'just now'
}

export const services = [
    {
        name: 'Fast Delivery all across the country',
        img: './src/assets/services/delivery.png',
    },
    {
        name: '100% Authentic Products',
        img: './src/assets/services/authentic_product.png',
    },
    {
        name: '7 Days Return Polciy',
        img: './src/assets/services/return_policy.png',
    },
    {
        name: 'Safe Payment',
        img: './src/assets/services/safe_payment.png',
    },
]

export const contacts = [
    {
        name: 'About Company',
        img: './src/assets/about-company.png',
        link: '/about-us',
    },
    {
        name: 'Contact Us',
        img: './src/assets/contact-us.png',
        link: '/contact-us',
    },
    {
        name: 'FAQ',
        img: './src/assets/faq.png',
        link: '/faqs',
    },
]

export const features = [
    {
        title: 'Easy Onboarding',
        description:
            'Start selling quickly with our user-friendly onboarding process designed to get you up and running fast.',
    },
    {
        title: '24/7 Support',
        description:
            'Get round-the-clock support from our dedicated team to resolve any issues and assist you anytime.',
    },
    {
        title: 'SEO Friendly',
        description:
            'Enjoy enhanced search visibility with our SEO-friendly platform, driving more traffic to your listings.',
    },
    {
        title: 'Free Marketing',
        description:
            'Benefit from our extensive, no-cost marketing efforts to boost your visibility and sales.',
    },
    {
        title: 'Millions of Users',
        description:
            'Access a vast audience with millions of active users ready to buy your products.',
    },
]

export const steps = [
    {
        title: 'Get Registered',
        description:
            "Sign up easily and create your seller account in just a few minutes. It's fast and simple to get started.",
        img: './src/assets/vendor/step1.png',
    },
    {
        title: 'Upload Products',
        description:
            'List your products with detailed descriptions and high-quality images to attract more buyers effortlessly.',
        img: './src/assets/vendor/step2.png',
    },
    {
        title: 'Start Selling',
        description:
            'Go live and start reaching millions of potential buyers immediately. Watch your sales grow with our vast audience.',
        img: './src/assets/vendor/step3.png',
    },
]
