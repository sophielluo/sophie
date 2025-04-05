import React, { useState } from 'react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  
  const sections = {
    about: {
      title: 'About Me',
      content: (
        <div className="p-6 bg-pink-50 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-purple-600">Hello there! 👋</h2>
          <p className="mb-4">I'm a creative soul who loves to express myself through various mediums.</p>
          <p className="mb-4">When I'm not designing or coding, you can find me taking photos, creating art, or making music.</p>
          <div className="flex items-center gap-3 p-4 bg-yellow-50 rounded-lg border-2 border-dashed border-yellow-300">
            <span className="text-xl">✨</span>
            <p className="italic text-gray-700">Fun fact: I once coded an entire website while camping under the stars!</p>
          </div>
        </div>
      )
    },
    experiences: {
      title: 'Experiences',
      content: (
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
      )
    },
    designs: {
      title: 'Designs',
      content: (
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
      )
    },
    artworks: {
      title: 'Artworks',
      content: (
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
      )
    },
    photography: {
      title: 'Photography',
      content: (
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
      )
    },
    music: {
      title: 'Music',
      content: (
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
      )
    }
  };

  return (
    <div className="min-h-screen bg-amber-50 font-mono">
      {/* Header */}
      <header className="p-4 bg-white border-b-4 border-dashed border-amber-300">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-amber-600">My Portfolio</h1>
          <div className="px-3 py-1 bg-amber-100 rounded-full text-sm">
            ✨ Est. 2025 ✨
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 bg-white shadow-sm z-10">
        <div className="container mx-auto px-4">
          <ul className="flex overflow-x-auto gap-1 py-2">
            {Object.keys(sections).map((section) => (
              <li key={section}>
                <button 
                  onClick={() => setActiveSection(section)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    activeSection === section 
                      ? 'bg-amber-200 text-amber-800' 
                      : 'hover:bg-amber-100 text-gray-600'
                  }`}
                >
                  {sections[section].title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto p-4 mt-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-amber-800">
          {sections[activeSection].title}
        </h2>
        {sections[activeSection].content}
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t-4 border-dashed border-amber-300 p-6 text-center">
        <p className="text-gray-600">Made with ❤️ and React</p>
        <div className="flex justify-center gap-4 mt-4">
          <button className="p-2 bg-amber-100 rounded-full hover:bg-amber-200 transition-colors">
            📧
          </button>
          <button className="p-2 bg-amber-100 rounded-full hover:bg-amber-200 transition-colors">
            💼
          </button>
          <button className="p-2 bg-amber-100 rounded-full hover:bg-amber-200 transition-colors">
            🐦
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;