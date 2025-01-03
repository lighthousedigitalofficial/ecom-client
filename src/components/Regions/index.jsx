import RegionCard from './RegionCard'
import { regions } from './regionsData'

const Regions = () => {
    return (
        <div className="p-8 bg-white">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
                Explore Regions
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {regions.map((region) => (
                    <RegionCard
                        key={region.id}
                        name={region.name}
                        bgColor={region.bgColor}
                        slug={region.slug}
                    />
                ))}
            </div>
        </div>
    )
}

export default Regions
