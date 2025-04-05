import React from 'react';

const Artworks = () => {
  return (
    <div className="p-6 bg-purple-50 rounded-lg">
      <div className="grid grid-cols-3 gap-3">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="aspect-square bg-purple-200 rounded-md flex items-center justify-center hover:bg-purple-300 transition-colors">
            <span className="text-3xl">🖌️</span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-center text-gray-600 italic">Each piece tells a unique story...</p>
    </div>
  );
};

export default Artworks;