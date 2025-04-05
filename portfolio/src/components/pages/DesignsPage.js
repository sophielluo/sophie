import React from 'react';

const Designs = () => {
  return (
    <div className="p-6 bg-green-50 rounded-lg">
      <div className="grid grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-green-200 w-full h-32 rounded-md mb-2 flex items-center justify-center">
              <span className="text-3xl">🎨</span>
            </div>
            <h3 className="font-medium">Design Project {item}</h3>
            <p className="text-sm text-gray-600">A delightful design with personality</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Designs;