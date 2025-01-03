import PartnerSection from './PartnerSection'

const BusinessPartners = () => {
    const chamberPartners = [
        {
            logo: '../../assets/partners/global-chamber-f7ec83c3.png',
            name: 'Global Chamber',
        },
        {
            logo: '../../assets/partners/chinacham-hungary-f2cbae5e.png',
            name: 'ACEH',
        },
        { logo: '../../assets/partners/chbo-421301d6.png', name: 'NCHK' },
        { logo: '../../assets/partners/chkd-206324bf.png', name: 'CHKD' },
        // { logo: '../../assets/partners/', name: 'CIGPL' },
    ]

    const brandSuppliers = [
        { logo: '../../assets/brands/aima.png', name: 'Liri Architecture' },
        { logo: '../../assets/brands/cnc.png', name: 'Ningbo MH' },
        { logo: '../../assets/brands/m&g.png', name: 'Quanchai Engine' },
        { logo: '../../assets/brands/xcmg-1ef82499.png', name: 'XCMG' },
        { logo: '../../assets/brands/mh.png', name: 'China Faw Group' },
    ]

    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-gray-900 text-center mb-10">
                Business Partners
            </h1>
            <PartnerSection
                title="Chamber of Commerce Partners"
                partners={chamberPartners}
            />
            <PartnerSection title="Brand Suppliers" partners={brandSuppliers} />
        </div>
    )
}

export default BusinessPartners
