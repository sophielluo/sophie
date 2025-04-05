import React from 'react';

const About = () => {
  return (
    <div className="p-6 bg-pink-50 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-purple-600">Hello there! 👋</h2>
      <p className="mb-4">I'm a creative soul who loves to express myself through various mediums.</p>
      <p className="mb-4">When I'm not designing or coding, you can find me taking photos, creating art, or making music.</p>
      <div className="flex items-center gap-3 p-4 bg-yellow-50 rounded-lg border-2 border-dashed border-yellow-300">
        <span className="text-xl">✨</span>
        <p className="italic text-gray-700">Fun fact: I once coded an entire website while camping under the stars!</p>
      </div>
    </div>
  );
};

export default About;