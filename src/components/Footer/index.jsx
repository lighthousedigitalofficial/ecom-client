import FooterTop from './FooterTop'
import FooterLinks from './FooterLinks'
import FooterLanguages from './FooterLanguages'
import FooterBottom from './FooterBottom'

const Footer = () => {
    return (
        <footer className="bg-gray-100 border-t text-gray-600 text-sm">
            <div className="container mx-auto px-4 py-6">
                <FooterTop />
                <FooterLinks />
                <FooterLanguages />
                <FooterBottom />
            </div>
        </footer>
    )
}

export default Footer
