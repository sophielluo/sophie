import React from 'react';

const Experiences = () => {
  return (
    <div className="p-6 bg-blue-50 rounded-lg">
      <div className="space-y-6">
        <div className="border-l-4 border-blue-300 pl-4">
          <h3 className="text-xl font-bold text-blue-600">Creative Developer</h3>
          <p className="text-sm text-gray-500">2022 - Present</p>
          <p className="mt-2">Building beautiful, functional websites that delight users and solve real problems.</p>
        </div>
        <div className="border-l-4 border-blue-300 pl-4">
          <h3 className="text-xl font-bold text-blue-600">UI/UX Designer</h3>
          <p className="text-sm text-gray-500">2020 - 2022</p>
          <p className="mt-2">Crafted user interfaces that tell stories and create meaningful experiences.</p>
        </div>
        <div className="border-l-4 border-blue-300 pl-4">
          <h3 className="text-xl font-bold text-blue-600">Freelance Artist</h3>
          <p className="text-sm text-gray-500">2018 - 2020</p>
          <p className="mt-2">Created custom artwork for clients across various industries.</p>
        </div>
      </div>
    </div>
  );
};

export default Experiences;