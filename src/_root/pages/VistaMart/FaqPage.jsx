import { useState } from 'react'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from '@material-tailwind/react'
import { useGetFaqsQuery } from '../../../redux/slices/systemApiSlice'
import Loader from '../../../components/Loader'

const FaqPage = () => {
    const [open, setOpen] = useState(0)

    const { data: faqs, isLoading } = useGetFaqsQuery()

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value)
    }

    return (
        <div className="container  mx-auto p-4 items-center ">
            <h2 className="text-2xl font-bold mb-4 flex justify-center text-center border-b">
                Frequently Asked Question
            </h2>
            {isLoading ? (
                <Loader />
            ) : faqs && faqs?.doc ? (
                <div className="flex justify-center items-center w-full h-96">
                    <div className="grid grid-cols-2 gap-8 w-[60%] items-center">
                        {faqs?.doc?.map((faq, index) => (
                            <Accordion key={index} open={open === index + 1}>
                                <AccordionHeader
                                    onClick={() => handleOpen(index + 1)}
                                    className="text-sm"
                                >
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: faq.question,
                                        }}
                                    />
                                </AccordionHeader>
                                <AccordionBody>{faq.answer}</AccordionBody>
                            </Accordion>
                        ))}
                    </div>
                </div>
            ) : (
                <p>No faqs are found!</p>
            )}
        </div>
    )
}

export default FaqPage
