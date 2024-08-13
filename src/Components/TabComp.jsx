import React, { useState } from 'react';
import Addtionalinfo from './Additionalinfo';
import ReviewSection from './ReviewSection';

const TabComp = () => {
  const [activeTab, setActiveTab] = useState('info');

  const renderContent = () => {
    switch (activeTab) {
      case 'additional information':
        return <div>
            <Addtionalinfo/>
        </div>;
      case 'reviews':
        return <div><ReviewSection/></div>;
      case 'location':
        return <div>Location details go here.</div>;
      case 'offers':
        return <div>Offer details go here.</div>;
        case 'store policies':
            return <div>Offer details go here.</div>;
            case 'inquiries':
                return <div>Offer details go here.</div>;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex space-x-4 font-poppins">
        {['additional information', 'reviews', 'location', 'offers','store policies','inquiries'].map((tab) => (
          <div
            key={tab}
            className={`relative cursor-pointer pb-2 ${
              activeTab === tab ? 'text-lime-600 font-semibold' : 'text-gray-600'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-lime-600 -mb-1"></div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 p-4 ">
        {renderContent()}
      </div>
    </div>
  );
};

export default TabComp;
