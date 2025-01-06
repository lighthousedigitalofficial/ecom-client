import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css' // optional blur effect

import Banner1 from '../../assets/banner/product-banner-1.jpg'
import Banner2 from '../../assets/banner/product-banner-2.jpg'
// import Banner2 from '../../assets/banner/flash-deals.jpg'

import AwesomeSlider from 'react-awesome-slider'
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import 'react-awesome-slider/dist/styles.css'

const AutoplaySlider = withAutoplay(AwesomeSlider)

import styles from './../Home/Hero.module.css'

const images = [
    {
        src: Banner1,
        alt: 'Banner 1',
    },
    {
        src: Banner2,
        alt: 'Banner 2',
    },
]

const ProductsCarousel = () => {
    return (
        <AutoplaySlider
            play={true}
            cancelOnInteraction={false}
            interval={6000}
            className={`${styles.aws_btn} lg:h-[60vh] md:h-[60vh] h-[20vh]`}
        >
            {images.map((image, index) => (
                <div key={index}>
                    <LazyLoadImage
                        src={image.src}
                        alt={image.alt}
                        effect="blur"
                        className="object-cover w-full h-full"
                    />
                </div>
            ))}
        </AutoplaySlider>
    )
}

export default ProductsCarousel
