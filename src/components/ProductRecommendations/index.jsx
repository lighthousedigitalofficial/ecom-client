import React from 'react';
import ExploreOpportunities from './ExploreOpportunities';
import TopRanking from './TopRanking';
import TopSeller from './TopSeller';

const ProductRecommendations = () => {
  return (
    <div className="prod-recommend-bg bg-gray-100 py-6">
      <div className="prod-recommend container mx-auto px-4">
        {/* Explore Opportunities Section */}
        <ExploreOpportunities />

        <div className="prod-recommend-main flex flex-col md:flex-row gap-4 mt-6">
          {/* TopRanking Section - 40% on larger screens, full width on small screens */}
          <div className="w-full md:w-2/5 bg-white shadow-lg rounded-lg p-4 mb-4 md:mb-0">
            <TopRanking />
          </div>

          {/* TopSeller Section - 60% on larger screens, full width on small screens */}
          <div className="w-full md:w-3/5 bg-white shadow-lg rounded-lg p-4">
            <TopSeller />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductRecommendations;
