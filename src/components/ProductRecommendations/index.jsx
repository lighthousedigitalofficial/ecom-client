import React from 'react';
import ExploreOpportunities from './ExploreOpportunities';
import TopRanking from './TopRanking';
import TopSeller from './TopSeller';

const ProductRecommendations = () => {
  return (
    <div className="prod-recommend-bg bg-gray-100 py-6">
      <div className="prod-recommend container mx-auto">
        {/* Explore Opportunities Section */}
        <ExploreOpportunities />

        <div className="prod-recommend-main flex gap-4 mt-6">
          <div className="w-2/5 bg-white shadow-lg rounded-lg p-4">
            <TopRanking />
          </div>

          {/* TopSeller Section - 60% */}
          <div className="w-3/5 bg-white shadow-lg rounded-lg p-4">
            <TopSeller />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductRecommendations;
