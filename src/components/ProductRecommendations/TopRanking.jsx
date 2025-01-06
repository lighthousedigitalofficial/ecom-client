import { AiOutlineRight } from 'react-icons/ai'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { IoMdTrophy } from 'react-icons/io'

// Custom arrow components
const CustomLeftArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-400 text-white rounded-full p-2 z-10"
    >
        <FaAngleLeft className="text-lg" />
    </button>
)

const CustomRightArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-400 text-white rounded-full p-2 z-10"
    >
        <FaAngleRight className="text-lg" />
    </button>
)
const topRankingData = [
    {
        tag: 'Bench Drilling ',
        bigImages: [
            {
                src: 'https://image.made-in-china.com/201f0j00FSRiBoClpKbA/-WDL5559-Fashion-Bag-Ladies-Wholesale-Replica-Designer-Tote-Handbag-for-Women.webp',
                alt: 'Bench Drilling Machine Image 1',
            },
        ],
        smallImages: [
            {
                src: 'https://image.made-in-china.com/201f0j00FSRiBoClpKbA/-WDL5559-Fashion-Bag-Ladies-Wholesale-Replica-Designer-Tote-Handbag-for-Women.webp',
                alt: 'Bench Drilling Machine Small Image 1',
            },
            {
                src: 'https://image.made-in-china.com/201f0j00FSRiBoClpKbA/-WDL5559-Fashion-Bag-Ladies-Wholesale-Replica-Designer-Tote-Handbag-for-Women.webp',
                alt: 'Bench Drilling Machine Small Image 1',
            },
        ],
    },
    {
        tag: 'Bench Drilling ',
        bigImages: [
            {
                src: 'https://image.made-in-china.com/201f0j00FSRiBoClpKbA/-WDL5559-Fashion-Bag-Ladies-Wholesale-Replica-Designer-Tote-Handbag-for-Women.webp',
                alt: 'Bench Drilling Machine Image 1',
            },
        ],
        smallImages: [
            // {
            //     src: 'https://image.made-in-china.com/201f0j00FSRiBoClpKbA/-WDL5559-Fashion-Bag-Ladies-Wholesale-Replica-Designer-Tote-Handbag-for-Women.webp',
            //     alt: 'Bench Drilling Machine Small Image 1',
            // },
            {
                src: 'https://image.made-in-china.com/43f34j00sFciyAwziMkf/Bmg-Five-Axis-Servo-Motor-Molybdenum-Wire-CNC-Wire-Cut-EDM-Wire-Cutting-Machine.webp',
                alt: 'Machine Factory Small Image 2',
            },
            {
                src: 'https://image.made-in-china.com/43f34j00VWkbDiJCCHzf/Factory-Price-CNC-Machine-Tools-Vmc1160-High-Precision-Vmc-3-Axis-Vertical-Machining-Center-Price-4-Axis-5-Axis-CNC-Milling-Machine.webp',
                alt: 'Machine Factory Small Image 3',
            },
        ],
    },
    {
        tag: 'Bench Drilling ',
        bigImages: [
            {
                src: 'https://image.made-in-china.com/201f0j00FSRiBoClpKbA/-WDL5559-Fashion-Bag-Ladies-Wholesale-Replica-Designer-Tote-Handbag-for-Women.webp',
                alt: 'Bench Drilling Machine Image 1',
            },
        ],
        smallImages: [
            {
                src: 'https://image.made-in-china.com/201f0j00FSRiBoClpKbA/-WDL5559-Fashion-Bag-Ladies-Wholesale-Replica-Designer-Tote-Handbag-for-Women.webp',
                alt: 'Bench Drilling Machine Small Image 1',
            },
            {
                src: 'https://image.made-in-china.com/43f34j00sFciyAwziMkf/Bmg-Five-Axis-Servo-Motor-Molybdenum-Wire-CNC-Wire-Cut-EDM-Wire-Cutting-Machine.webp',
                alt: 'Machine Factory Small Image 2',
            },

            // {
            //     src: 'https://image.made-in-china.com/43f34j00VWkbDiJCCHzf/Factory-Price-CNC-Machine-Tools-Vmc1160-High-Precision-Vmc-3-Axis-Vertical-Machining-Center-Price-4-Axis-5-Axis-CNC-Milling-Machine.webp',
            //     alt: 'Machine Factory Small Image 3',
            // },
        ],
    },

    // Add more items as needed
]

const responsive = {
    superLarge: { breakpoint: { max: 4000, min: 1024 }, items: 2 },
    large: { breakpoint: { max: 1024, min: 768 }, items: 1 },
    medium: { breakpoint: { max: 768, min: 464 }, items: 1 },
    small: { breakpoint: { max: 464, min: 0 }, items: 1 },
}

const TopRanking = () => {
    return (
        <div
            className="top-ranking bg-cover bg-center p-4 rounded-lg"
            style={{
                backgroundImage:
                    "url('https://path-to-your-background-image.jpg')",
            }}
        >
            <div className="top-ranking-header flex justify-between items-center mb-4">
                <h2 className="text-sm md:text-xl font-semibold gap-2 text-primary-500 flex items-center">
                    <IoMdTrophy />
                    <span>Top Rankings</span>
                </h2>
                <Link
                    className="text-green-500 flex items-center space-x-1"
                    to="#"
                >
                    <span>View more</span>
                    <AiOutlineRight />
                </Link>
            </div>

            <Carousel
                responsive={responsive}
                infinite
                autoPlay
                autoPlaySpeed={3000}
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
                containerClass="carousel-container"
            >
                {topRankingData.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white mx-2 p-4 rounded-lg shadow-lg"
                    >
                        <div className="tag font-semibold mb-3">
                            <span className="text-sm md:text-lg px-2 py-1 text-primary-500 border rounded-md border-primary-500">
                                {item.tag}
                            </span>
                        </div>
                        <div className="flex flex-col md:flex-row items-center gap-4 mb-3">
                            {item.bigImages.map((image, i) => (
                                <div
                                    key={i}
                                    className="w-full rounded-lg overflow-hidden shadow"
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="grid grid-cols-2  md:grid-cols-2 gap-4">
                            {item.smallImages.map((image, i) => (
                                <div
                                    key={i}
                                    className="rounded-lg  overflow-hidden shadow"
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-24 md:h-40 object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default TopRanking
