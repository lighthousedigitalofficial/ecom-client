const links = [
    'Hot Products',
    'China Products',
    'China Manufacturers/Suppliers',
    'Wholesale Products',
    'Wholesale Price',
    'Continent Channel',
    'Industry Sites',
    'Regional Channels',
]

const FooterLinks = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6 text-center lg:text-left">
            {links.map((link, index) => (
                <a key={index} href="#" className="hover:text-gray-900">
                    {link}
                </a>
            ))}
        </div>
    )
}

export default FooterLinks
