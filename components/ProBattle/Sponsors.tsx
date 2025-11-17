import React from 'react'
import Image from 'next/image';
import { sponsors } from '@/app/ProBattle/constants';

const Sponsors: React.FC = () => {
  return (
    <div className="colour-box-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold text-gray-900 font-heading">
          Our Previous Sponsors
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {sponsors.map((sponsor, index) => {
            const isSmall = sponsor?.size === 'small';
            const imgWidth = isSmall ? 300 : 200;
            const imgHeight = isSmall ? 90 : 60;
            const containerClass = isSmall ? 'col-span-2 max-h-28 w-full lg:col-span-1 flex items-center' : 'col-span-2 max-h-12 w-full lg:col-span-1 flex items-center';
            const imageClass = isSmall ? 'max-h-28 w-full object-contain' : 'max-h-20 w-full object-contain';

            return (
              <div key={index} className={containerClass}>
                <Image
                  src={sponsor.logoUrl}
                  alt={`Sponsor ${index + 1}`}
                  width={imgWidth}
                  height={imgHeight}
                  className={imageClass}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
};

export default Sponsors;
