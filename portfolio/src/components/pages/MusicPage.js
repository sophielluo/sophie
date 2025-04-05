import React from 'react';

const Music = () => {
  return (
    <div className="p-6 bg-red-50 rounded-lg">
      <div className="space-y-4">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-3">
              <div className="bg-red-200 w-12 h-12 rounded-full flex items-center justify-center text-xl">
                🎵
              </div>
              <div>
                <h3 className="font-medium">Track #{item}</h3>
                <p className="text-sm text-gray-600">A melodic journey through sound</p>
              </div>
            </div>
            <div className="mt-3 bg-gray-200 h-2 rounded-full overflow-hidden">
              <div className="bg-red-400 h-full rounded-full" style={{ width: `${30 * item}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Music;