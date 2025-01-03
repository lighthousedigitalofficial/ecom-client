// import { Carousel } from '@material-tailwind/react'

// import { LazyLoadImage } from 'react-lazy-load-image-component'
// import 'react-lazy-load-image-component/src/effects/blur.css' // optional blur effect

// import Banner1 from '../../assets/slideshow-img/slide-1.jpg'
// import Banner2 from '../../assets/slideshow-img/slide-2.jpg'
// import Banner3 from '../../assets/slideshow-img/slide-3.jpg'
// import Banner4 from '../../assets/slideshow-img/slide-4.jpg'
// import Banner5 from '../../assets/slideshow-img/slide-5.jpg'

// import AwesomeSlider from 'react-awesome-slider'
// import withAutoplay from 'react-awesome-slider/dist/autoplay'
// import 'react-awesome-slider/dist/styles.css'

// import styles from './Hero.module.css'
// // import { useGetBannersQuery } from '../../redux/slices/bannersSlice'
// // import keys from '../../config/keys'
// // import Loader from '../Loader'

// const AutoplaySlider = withAutoplay(AwesomeSlider)

// const HeroSection = () => {
//     // const { data: banners, isLoading } = useGetBannersQuery({
//     //     // bannerType: 'main',
//     // })

//     return (
//         <AutoplaySlider
//             play={true}
//             cancelOnInteraction={false}
//             interval={6000}
//             className={`${styles.aws_btn} lg:h-[90vh] md:h-[60vh] h-[20vh]`}
//         >
//             <div>
//                 <LazyLoadImage
//                     src={Banner1} // Path to your image
//                     alt="Banner 3"
//                     effect="blur" // You can use "blur" or "opacity" as lazy load effect
//                     className="object-cover object-top w-full h-full"
//                 />
//             </div>
//             <div>
//                 <LazyLoadImage
//                     src={Banner2}
//                     alt="Banner 2"
//                     effect="blur"
//                     className="object-cover object-top w-full h-full"
//                 />
//             </div>
//             <div>
//                 <LazyLoadImage
//                     src={Banner3}
//                     alt="Banner 1"
//                     effect="blur"
//                     className="object-cover object-top w-full h-full"
//                 />
//             </div>
//             <div>
//                 <LazyLoadImage
//                     src={Banner4}
//                     alt="Banner 1"
//                     effect="blur"
//                     className="object-cover object-top w-full h-full"
//                 />
//             </div>
//             <div>
//                 <LazyLoadImage
//                     src={Banner5}
//                     alt="Banner 1"
//                     effect="blur"
//                     className="object-cover object-top w-full h-full"
//                 />
//             </div>
//         </AutoplaySlider>
//     )
// }

// export default HeroSection

// ------------------------
// import { LazyLoadImage } from 'react-lazy-load-image-component'
// import 'react-lazy-load-image-component/src/effects/blur.css' // optional blur effect

// import Banner1 from '../../assets/slideshow-img/slide-1.jpg'
// import Banner2 from '../../assets/slideshow-img/slide-2.jpg'
// import Banner3 from '../../assets/slideshow-img/slide-3.jpg'
// import Banner4 from '../../assets/slideshow-img/slide-4.jpg'
// import Banner5 from '../../assets/slideshow-img/slide-5.jpg'

// import AwesomeSlider from 'react-awesome-slider'
// import withAutoplay from 'react-awesome-slider/dist/autoplay'
// import 'react-awesome-slider/dist/styles.css'
// import './heroslider.css'
// import styles from './Hero.module.css'
// import { Link } from 'react-router-dom'
// const AutoplaySlider = withAutoplay(AwesomeSlider)

// const HeroSection = () => {
//     return (
//         // <AutoplaySlider
//         <div
//             play={false}
//             cancelOnInteraction={false}
//             interval={6000}
//             // ${styles.aws_btn}
//             className={`lg:h-[90vh] md:h-[60vh] h-[20vh]`}
//         >
//             {/* --------------------------------------------------------------- */}
//             <div className="biz-banner en-layout snipcss-eOaR3">
//                 <img
//                     src="/Uraan Pakistan Web Banner Design.jpg"
//                     alt="Business Banner"
//                     className="biz-banner-img"
//                     loading="eager"
//                 />
//                 <div className="biz-body">
//                     <div
//                         className="biz-banner-content"
//                         data-faw-module="search_reg"
//                         data-faw-exposure="true"
//                         data-faw-id="1igld29noddc"
//                     >
//                         <div className="biz-banner-entrance J-show-search">
//                             <div className="biz-banner-search">
//                                 <div className="ft-input-group biz-banner-search-group">
//                                     <span className="ft-input-prefix">
//                                         <i className="ft-icon icon-search"></i>
//                                     </span>
//                                     <div className="ft-input-wrap">
//                                         <input
//                                             className="ft-input outline-none has-icon-prefix has-icon-suffix"
//                                             type="text"
//                                             maxLength="150"
//                                             placeholder="What are you looking for?"
//                                             autoComplete="off"
//                                             spellCheck="false"
//                                         />
//                                     </div>
//                                     <span className="ft-input-suffix">
//                                         <i
//                                             className="ft-icon icon-camera icon-image-search"
//                                             aria-expanded="false"
//                                         ></i>
//                                     </span>
//                                 </div>
//                                 <button
//                                     className="ft-btn ft-btn-primary bg-primary-500 text-white biz-banner-search-btn"
//                                     data-ads="st:22"
//                                 >
//                                     Search
//                                 </button>
//                                 <Link
//                                     // rel="nofollow"
//                                     // href="https://login.made-in-china.com/join/"
//                                     title="Join free"
//                                     className=" px-6 py-3 rounded-full hover:bg-primary-400 flex items-center gap-2 text-lg text-white popular-tag  bg-primary-500"
//                                     style={{ color: 'white' }}
//                                 >
//                                     Join free
//                                     <i className="ft-icon icon-right"></i>
//                                 </Link>
//                             </div>
//                         </div>
//                         <div className="biz-banner-popular">
//                             <span className="biz-banner-popular-label">
//                                 Popular now :
//                             </span>
//                             <div className="popular-tags">
//                                 <a
//                                     className="popular-tag outline-none"
//                                     href="//www.made-in-china.com/quality-china-product/productSearch?word=handbags&galleryShow=0"
//                                     rel="nofollow"
//                                     data-ads="st:107"
//                                 >
//                                     handbags
//                                 </a>
//                                 <a
//                                     className="popular-tag"
//                                     href="//www.made-in-china.com/quality-china-product/productSearch?word=replica%20handbags&galleryShow=0"
//                                     rel="nofollow"
//                                     data-ads="st:107"
//                                 >
//                                     replica handbags
//                                 </a>
//                                 <a
//                                     className="popular-tag"
//                                     href="//www.made-in-china.com/quality-china-product/productSearch?word=shoulder-bag&galleryShow=0"
//                                     rel="nofollow"
//                                     data-ads="st:107"
//                                 >
//                                     shoulder-bag
//                                 </a>
//                                 <a
//                                     className="popular-tag"
//                                     href="//www.made-in-china.com/quality-china-product/productSearch?word=luxury%20handbag&galleryShow=0"
//                                     rel="nofollow"
//                                     data-ads="st:107"
//                                 >
//                                     luxury handbag
//                                 </a>
//                                 <a
//                                     className="popular-tag"
//                                     href="//www.made-in-china.com/quality-china-product/productSearch?word=designer%20handbags&galleryShow=0"
//                                     rel="nofollow"
//                                     data-ads="st:107"
//                                 >
//                                     designer handbags
//                                 </a>
//                                 <a
//                                     className="popular-tag"
//                                     href="//www.made-in-china.com/quality-china-product/productSearch?word=wholesale%20replicas%20bags&galleryShow=0"
//                                     rel="nofollow"
//                                     data-ads="st:107"
//                                 >
//                                     wholesale replicas bags
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* --------------------------------------------------------- */}
//             <div>
//                 <LazyLoadImage
//                     src={Banner1} // Path to your image
//                     alt="Banner 3"
//                     effect="blur" // You can use "blur" or "opacity" as lazy load effect
//                     className="object-cover object-top w-full h-full"
//                 />
//             </div>

//             {/* </AutoplaySlider> */}
//         </div>
//     )
// }

// export default HeroSection
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css' // optional blur effect
import Banner1 from '../../assets/slideshow-img/slide-1.jpg'
// import Banner1 from ''
import { Link } from 'react-router-dom'
import MainSearch from './MainSearch'

const HeroSection = () => {
    return (
        <div className="relative h-[100vh] w-full">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <LazyLoadImage
                    src={Banner1}
                    alt="Hero Banner"
                    effect="blur"
                    className="object-cover object-center h-[100vh] w-[100vw]"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            </div>

            {/* Content Section */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
                {/* Search Bar */}
                <div className="w-full max-w-2xl mb-6 px-4 sm:px-0">
                    <MainSearch />
                </div>

                {/* Join Free Button */}
                <Link
                    className="inline-block px-6 py-3 mb-4 rounded-full bg-primary-500 text-white text-lg hover:bg-primary-400"
                    to="/join"
                >
                    Join Free
                    <i className="ml-2 ft-icon icon-right"></i>
                </Link>

                {/* Popular Tags */}
                <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
                    <span className="text-lg font-medium mb-3 md:mb-0">
                        Popular Now:
                    </span>
                    <div className="flex flex-wrap justify-center gap-2">
                        {[
                            'handbags',
                            'replica handbags',
                            'shoulder-bag',
                            'luxury handbag',
                            'designer handbags',
                            'wholesale replicas bags',
                        ].map((tag, index) => (
                            <Link
                                key={index}
                                to={`/search/${tag}`}
                                className="px-4 py-2 bg-gray-500 bg-opacity-80 rounded-full text-sm hover:bg-opacity-100"
                            >
                                {tag}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
