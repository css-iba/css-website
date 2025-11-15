import React from 'react';
import Image from 'next/image';

const partnersData = [
  {
    name: 'DataCamp Donates',
    alt: 'DataCamp Donates Logo',
    src: '/Home/DC_Donates_logo.png'
  },
  {
    name: 'Notion IBA',
    alt: 'Notion IBA Logo',
    src: '/Home/notion-logo.png'
  },
];

const Partners: React.FC = () => {
  return (
    <div className="colour-box-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold font-heading">Our Trusted Partners</h2>

        <div className="mx-auto mt-10 max-w-lg sm:max-w-xl md:max-w-3xl lg:max-w-5xl flex flex-col md:flex-row flex-wrap items-center justify-center gap-10">
            {partnersData.map((partner) => (
              <div
                key={partner.name}
                className="w-[200px] h-[150px] flex items-center justify-center"
              >
                <div className="relative w-full h-full">
                  <Image src={partner.src} alt={partner.alt} fill style={{ objectFit: 'contain' }} />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
};

export default Partners;
