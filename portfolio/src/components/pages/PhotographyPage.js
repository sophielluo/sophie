import React from 'react';

const Photography = () => {
  return (
    <div className="p-6 bg-indigo-50 rounded-lg">
      <div className="columns-2 gap-3 space-y-3">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="break-inside-avoid">
            <div className="bg-indigo-200 rounded-md aspect-video flex items-center justify-center">
              <span className="text-3xl">📷</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">Captured in the wild, {2023 - item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photography;