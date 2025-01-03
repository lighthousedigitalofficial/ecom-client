// import WhySellWithUs from '../../components/Seller/WhyWithUs'
// import SellingSteps from '../../components/Seller/SellingSteps'
// import VandorApp from '../../components/Seller/VandorApp'
import MultiStepForm from '../../../_auth/Forms/MultiStepForm'
import { z } from 'zod'
// import FAQSection from './../../components/Seller/FAQSection'

// Combined schema for both steps
const vendorSchema = z
    .object({
        email: z.string().email('Invalid email address'),
        password: z
            .string()
            .min(8, 'Password must be at least 8 characters')
            .regex(
                /[a-z]/,
                'Password must contain at least one lowercase letter'
            )
            .regex(
                /[A-Z]/,
                'Password must contain at least one uppercase letter'
            )
            .regex(/[0-9]/, 'Password must contain at least one number')
            .regex(
                /[^a-zA-Z0-9]/,
                'Password must contain at least one special character'
            ),
        confirmPassword: z
            .string()
            .min(8, 'Password must be at least 8 characters'),
        phoneNumber: z.string().min(10, 'Phone number is required'),
        firstName: z
            .string()
            .min(1, 'First name is required')
            .regex(/^[a-zA-Z]+$/, 'First name can only contain letters'),
        lastName: z
            .string()
            .min(1, 'Last name is required')
            .regex(/^[a-zA-Z]+$/, 'Last name can only contain letters'),
        shopName: z.string().min(1, 'Shop name is required'),
        address: z.string().min(3, 'Shop address is required'),
        logo: z.any(),
        banner: z.any(),
        vendorImage: z.any(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'Passwords do not match',
        path: ['confirmPassword'],
    })

const VendorRegisterPage = () => {
    return (
        <>
            <div className="p-4">
                <div className="flex-grow ">
                    <MultiStepForm vendorSchema={vendorSchema} />
                </div>
            </div>
            <div>
                {/* <WhySellWithUs /> */}
                {/* <SellingSteps /> */}
                {/* <VandorApp /> */}
                {/* <FAQSection /> */}
            </div>
        </>
    )
}

export default VendorRegisterPage
