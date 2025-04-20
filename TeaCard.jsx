// TeaCard.js
import React from 'react';

// A functional component that accepts tea data as props
const TeaCard = ({ tea }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={tea.image}
        alt={tea.name}
        className="w-full h-[180px] object-cover"
      />
      <div className="p-4">
        <h2 className="text-center font-medium text-gray-800">{tea.name}</h2>
      </div>
    </div>
  );
};

export default TeaCard;
