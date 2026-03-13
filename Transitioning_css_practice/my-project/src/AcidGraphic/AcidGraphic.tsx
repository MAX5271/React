import React from 'react';

export default function AcidGraphicDemo() {
  return (
    // 1. The Canvas: Pitch black, but notice the 'selection' utility. 
    // We override the default blue text highlight to a harsh magenta!
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden p-6 selection:bg-[#ff003c] selection:text-white font-sans">

      {/* 2. The Halftone Background: Rotated for chaos */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 2px, transparent 2.5px)',
          backgroundSize: '16px 16px',
          transform: 'rotate(-10deg) scale(1.5)' 
        }}
      />

      {/* Massive Background Typography for depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-black text-white/5 whitespace-nowrap -rotate-6 pointer-events-none uppercase tracking-tighter">
        Take Your Heart
      </div>

      {/* 3. The Shadow Wrapper */}
      {/* We use drop-shadow instead of box-shadow so it conforms to our jagged clip-path */}
      <div className="relative z-10 w-full max-w-md drop-shadow-[16px_16px_0_#ff003c] group">

        {/* 4. THE ACID CARD */}
        {/* We use clipPath to literally cut the corners off the div, making it look like torn paper or a jagged graphic */}
        <div className="bg-white p-8 transition-transform duration-200 group-hover:-translate-y-2 group-hover:-translate-x-2"
             style={{ clipPath: 'polygon(3% 0, 100% 4%, 96% 100%, 0 95%)' }}>

          {/* Jagged Header */}
          <div className="mb-8 transform -rotate-3">
            <h3 className="text-6xl font-black tracking-tighter uppercase leading-none">
              <span className="bg-black text-white px-3 pb-1 inline-block mb-1">Game</span><br/>
              <span className="bg-[#ff003c] text-white px-3 pb-1 inline-block transform rotate-2">Vault</span>
            </h3>
          </div>

          {/* Heavy, rotated body text */}
          <p className="text-black font-bold text-xl leading-tight mb-8 uppercase tracking-wide transform rotate-1">
            A full-stack web application designed for discovering and cataloging video games.
          </p>

          {/* Acid Button */}
          <button className="w-full bg-black text-white text-2xl font-black uppercase tracking-widest py-5 transition-colors duration-150 hover:bg-[#ff003c] hover:text-white cursor-pointer"
                  style={{ clipPath: 'polygon(0 15%, 100% 0, 98% 85%, 2% 100%)' }}>
            Initialize
          </button>

        </div>
      </div>
    </div>
  );
}