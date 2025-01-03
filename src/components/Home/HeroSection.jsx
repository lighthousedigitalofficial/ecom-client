// import { Carousel } from '@material-tailwind/react'

import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css' // optional blur effect

import Banner1 from '../../assets/slideshow-img/slide-1.jpg'
import Banner2 from '../../assets/slideshow-img/slide-2.jpg'
import Banner3 from '../../assets/slideshow-img/slide-3.jpg'
import Banner4 from '../../assets/slideshow-img/slide-4.jpg'
import Banner5 from '../../assets/slideshow-img/slide-5.jpg'

import AwesomeSlider from 'react-awesome-slider'
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import 'react-awesome-slider/dist/styles.css'

import styles from './Hero.module.css'
// import { useGetBannersQuery } from '../../redux/slices/bannersSlice'
// import keys from '../../config/keys'
// import Loader from '../Loader'

const AutoplaySlider = withAutoplay(AwesomeSlider)

const HeroSection = () => {
    // const { data: banners, isLoading } = useGetBannersQuery({
    //     // bannerType: 'main',
    // })

    return (
        <AutoplaySlider
            play={true}
            cancelOnInteraction={false}
            interval={6000}
            className={`${styles.aws_btn} lg:h-[90vh] md:h-[60vh] h-[20vh]`}
        >
            <div>
                <LazyLoadImage
                    src={Banner1} // Path to your image
                    alt="Banner 3"
                    effect="blur" // You can use "blur" or "opacity" as lazy load effect
                    className="object-cover object-top w-full h-full"
                />
            </div>
            <div>
                <LazyLoadImage
                    src={Banner2}
                    alt="Banner 2"
                    effect="blur"
                    className="object-cover object-top w-full h-full"
                />
            </div>
            <div>
                <LazyLoadImage
                    src={Banner3}
                    alt="Banner 1"
                    effect="blur"
                    className="object-cover object-top w-full h-full"
                />
            </div>
            <div>
                <LazyLoadImage
                    src={Banner4}
                    alt="Banner 1"
                    effect="blur"
                    className="object-cover object-top w-full h-full"
                />
            </div>
            <div>
                <LazyLoadImage
                    src={Banner5}
                    alt="Banner 1"
                    effect="blur"
                    className="object-cover object-top w-full h-full"
                />
            </div>
        </AutoplaySlider>
    )
}

export default HeroSection

// {banners && banners?.doc?.length ? (
//                 banners.doc.map((banner, index) => (
//                     <div key={index}>
//                         <LazyLoadImage
//                             src={`${keys.BUCKET_URL}${banner.bannerImage}`} // Path to your image
//                             alt={`Banner ${++index}`}
//                             effect="blur" // You can use "blur" or "opacity" as lazy load effect
//                             className="object-cover object-top w-full h-full"
//                         />
//                     </div>
//                 ))

// const HeroSection = () => {
//     return (
//         <div className="w-full flex justify-between gap-2">
//             {/* <CategorySidebar className="hidden" /> */}
//             {/* <Carousel
//                 className=" w-full z-10 lg:h-[70vh] md:h-[50vh] h-[30vh] rounded-lg "
//                 navigation={({ setActiveIndex, activeIndex, length }) => (
//                     <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
//                         {new Array(length).fill('').map((_, i) => (
//                             <span
//                                 key={i}
//                                 className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
//                                     activeIndex === i
//                                         ? 'w-8 bg-white'
//                                         : 'w-4 bg-white/50'
//                                 }`}
//                                 onClick={() => setActiveIndex(i)}
//                             />
//                         ))}
//                     </div>
//                 )}
//                 autoplay
//                 loop
//             >
//                 <img
//                     src={Banner1}
//                     alt="image 1"
//                     className="h-full w-full object-cover"
//                 />
//                 <img
//                     src={Banner2}
//                     alt="image 1"
//                     className="h-full w-full object-cover"
//                 />
//                 <img
//                     src={Banner3}
//                     alt="image 1"
//                     className="h-full w-full object-cover"
//                 />
//             </Carousel> */}
//         </div>
//     )
// }
