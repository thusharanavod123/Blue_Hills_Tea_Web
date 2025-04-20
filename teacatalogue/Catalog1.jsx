// Catalog.js
import React from 'react';
import TeaCard from './TeaCard'; // Import the TeaCard component
import { teas } from './teaData1'; // Import the tea data

export default function Catalog1() {
  return (
    <div className="w-full min-h-screen bg-white text-black font-sans ">
      {/* Title + Description */}
      <section className="px-10 pt-16">
        <h1 className="text-4xl font-bold text-left text-black">Tea Catalogue</h1>
        <p className="mt-2 max-w-xl text-sm text-gray-600">
          A collection of expertly crafted teas, each with its own unique taste and aroma. From bold black teas to
          delicate white blends, discover the perfect cup for every moment.
        </p>
      </section>

      {/* Card Grid */}
      <section className="px-10 pt-12 pb-16">
        <div className="grid grid-cols-4 gap-8">
          {/* Map through tea data and display TeaCard for each tea */}
          {teas.map((tea) => (
            <TeaCard key={tea.id} tea={tea} />
          ))}
        </div>
      </section>

      {/* Blue Paragraph */}
      <section className="text-center bg-[#ffffff] text-[#2563EBED] py-8 px-6">
        <p className="text-lg font-medium">
          Every sip tells a story of tradition, quality, and craftsmanship.
          Experience the true essence of Ceylon tea with Blue Hill Tea Factor.
        </p>
      </section>
    </div>
  );
}

