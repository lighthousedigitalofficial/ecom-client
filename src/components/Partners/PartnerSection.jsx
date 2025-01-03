/* eslint-disable react/prop-types */
import PartnerCard from './PartnerCard'

const PartnerSection = ({ title, partners }) => {
    return (
        <section className="my-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
                {title}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                {partners.map((partner) => (
                    <PartnerCard
                        key={partner.name}
                        logo={partner.logo}
                        name={partner.name}
                    />
                ))}
            </div>
        </section>
    )
}

export default PartnerSection
