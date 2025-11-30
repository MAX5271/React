import React from 'react';

export default function SwissStyleArticle() {
  return (
    // The entire page uses a strict sans-serif font and high-contrast colors.
    // We use 'bg-stone-50' for an almost-white, paper-like background.
    <div className="min-h-screen bg-stone-50 font-sans text-black selection:bg-red-600 selection:text-white">
      
      {/* --- HEADER & HERO SECTION --- */}
      {/* A strict grid is defined at the top level. */}
      <header className="grid grid-cols-12 border-b-4 border-black">
        
        {/* Brand / Logo Area (Spans 3 columns) */}
        <div className="col-span-12 md:col-span-3 bg-red-600 p-6 md:p-12 flex items-end">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-white leading-none">
            Neue<br/>Grafik
          </h1>
        </div>
        
        {/* Main Title Area (Spans 9 columns) */}
        <div className="col-span-12 md:col-span-9 p-6 md:p-12 flex flex-col justify-between">
          {/* Navigation is simple, placed top-right */}
          <nav className="self-end mb-12 md:mb-0">
            <ul className="flex gap-8 text-lg font-bold uppercase tracking-widest">
              <li><a href="#" className="hover:text-red-600 hover:underline decoration-4 underline-offset-4">Index</a></li>
              <li><a href="#" className="hover:text-red-600 hover:underline decoration-4 underline-offset-4">Archive</a></li>
              <li><a href="#" className="text-red-600 underline decoration-4 underline-offset-4">About</a></li>
            </ul>
          </nav>
          
          {/* The main headline. Huge, bold, and asymmetrical. */}
          <div>
            <span className="block text-xl font-bold uppercase tracking-widest mb-4 text-red-600">
              Design Principle № 1
            </span>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tight leading-none max-w-4xl">
              The Grid as an Organizing Principle.
            </h2>
          </div>
        </div>
      </header>

      
      {/* --- MAIN CONTENT --- */}
      <main className="grid grid-cols-12">
        
        {/* SECTION 1: Introduction (Asymmetrical Layout) */}
        {/* The left column is empty/decorative, content is pushed right. */}
        <div className="col-span-12 md:col-span-3 border-r-0 md:border-r-4 border-black p-6 md:p-12 hidden md:block">
          <span className="text-8xl font-black text-stone-200 select-none">01</span>
        </div>
        
        <div className="col-span-12 md:col-span-9 p-6 md:p-12 py-16">
          <h3 className="text-3xl font-bold uppercase mb-8 max-w-2xl leading-tight">
            "Grid systems are the foundation of all good design."
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-4xl text-lg font-medium leading-relaxed">
            <p>
              The International Typographic Style, also known as the Swiss Style, is not just an aesthetic. It is a philosophy. It is based on the idea that design should be objective, readable, and functional.
            </p>
            <p>
              By using a strict mathematical grid, designers can organize information in a way that is both logical and visually compelling. The grid is not a constraint; it is a liberating tool that allows for infinite, structured variations.
            </p>
          </div>
        </div>

        {/* SECTION 2: Full-Width Image Break */}
        <div className="col-span-12 border-y-4 border-black relative h-96 overflow-hidden group">
            <img 
                src="https://images.unsplash.com/photo-1569230516306-5a8cb6692bed?auto=format&fit=crop&q=80&w=2000" 
                alt="Brutalist Architecture" 
                className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
            />
            {/* Image Caption placed precisely on the grid */}
            <div className="absolute bottom-0 left-0 bg-red-600 text-white p-6 md:w-3/12 border-t-4 border-r-4 border-black">
                <p className="text-sm font-bold uppercase tracking-wider">
                    Fig. A — Structure & Form
                </p>
            </div>
        </div>

        {/* SECTION 3: Key Principles (Three-Column Grid) */}
        <div className="col-span-12 p-6 md:p-12 py-24 bg-black text-white">
            <h4 className="text-white text-4xl font-black uppercase mb-16 border-b-4 border-red-600 pb-4 inline-block">
                Core Tenets
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Principle 1 */}
                <div className="border-t-4 border-red-600 pt-4">
                    <h5 className="text-2xl font-bold uppercase mb-4">Typography</h5>
                    <p className="text-stone-300 text-lg leading-relaxed">
                        Sans-serif typefaces (like Helvetica) are used for their neutrality and readability. Type is set flush-left, ragged-right.
                    </p>
                </div>
                {/* Principle 2 */}
                <div className="border-t-4 border-red-600 pt-4">
                    <h5 className="text-2xl font-bold uppercase mb-4">The Grid</h5>
                    <p className="text-stone-300 text-lg leading-relaxed">
                        A rigid underlying structure that governs the placement of all elements, creating a sense of order and unity.
                    </p>
                </div>
                {/* Principle 3 */}
                <div className="border-t-4 border-red-600 pt-4">
                    <h5 className="text-2xl font-bold uppercase mb-4">Asymmetry</h5>
                    <p className="text-stone-300 text-lg leading-relaxed">
                        Dynamic balance is achieved through asymmetrical layouts, rather than static, centered compositions.
                    </p>
                </div>
            </div>
        </div>

      </main>

      {/* --- FOOTER --- */}
      <footer className="grid grid-cols-12 border-t-4 border-black">
        <div className="col-span-12 md:col-span-3 bg-red-600 p-12 flex items-center">
            <span className="text-xl font-black uppercase text-white">© 2023 Josef Müller-Brockmann</span>
        </div>
        <div className="col-span-12 md:col-span-9 p-12 flex items-center justify-between font-bold uppercase tracking-wider">
            <div className="flex gap-8">
                <a href="#" className="hover:underline">Twitter</a>
                <a href="#" className="hover:underline">Instagram</a>
            </div>
            <a href="#" className="text-red-600 hover:underline">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}