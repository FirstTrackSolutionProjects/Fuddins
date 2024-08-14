import React, { useState } from 'react';
import Addtionalinfo from './Additionalinfo';
import ReviewSection from './ReviewSection';

const TabComp = () => {
  const [activeTab, setActiveTab] = useState('additional information');

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
      default :
        return <div>
        <Addtionalinfo/>
    </div>;
    }
  };

  return (
    <div>
      <div className="md:flex md:space-x-4 font-poppins">
        {['additional information', 'reviews', 'location', 'offers','store policies','inquiries'].map((tab) => (
          <div
            key={tab}
            className={`relative cursor-pointer md:pb-2 pb-1 pt-2 ${
              activeTab === tab ? 'text-lime-600 text-base font-semibold' : 'text-gray-600 '
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
