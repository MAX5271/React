import React from 'react';

export default function NeumorphismDemo() {
  return (
    // 1. The Canvas: A highly specific, cool, dusty grayish-blue. 
    // It cannot be pure white, or the white highlight shadows won't show up.
    <div className="relative min-h-screen flex items-center justify-center bg-[#e0e5ec] p-6 font-sans text-[#4a5568]">

      {/* 2. THE EXTRUDED CARD */}
      {/* Notice there are NO borders. The shape is defined by a dual drop-shadow. */}
      <div className="w-full max-w-md p-8 rounded-[2rem] bg-[#e0e5ec] shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff]">
        
        {/* Header section */}
        <div className="flex items-center justify-between mb-8">
          <div className="w-12 h-12 rounded-full bg-[#e0e5ec] flex items-center justify-center shadow-[6px_6px_12px_#a3b1c6,-6px_-6px_12px_#ffffff]">
             {/* A subtle inset inner circle to make it look like a physical dial */}
            <div className="w-6 h-6 rounded-full shadow-[inset_2px_2px_5px_#a3b1c6,inset_-2px_-2px_5px_#ffffff]"></div>
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-[#2d3748]">Nectar AI</h3>
        </div>

        {/* Body Text */}
        <p className="mb-8 leading-relaxed font-medium opacity-80">
          Personalized 5-meal daily plans processed through user biometrics and strict dietary constraints.
        </p>

        {/* 3. THE INSET TRACK (Looks like a progress bar carved into the surface) */}
        <div className="w-full h-4 rounded-full bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#a3b1c6,inset_-4px_-4px_8px_#ffffff] mb-8 p-1 flex items-center">
          {/* The glowing fill */}
          <div className="w-3/4 h-full rounded-full bg-[#3b82f6] shadow-[0_0_8px_#3b82f6]"></div>
        </div>

        {/* 4. THE TACTILE BUTTON */}
        {/* It starts extruded, but on 'active' (when clicked), the shadows flip to 'inset' so it physically presses down into the screen. */}
        <button className="w-full py-4 rounded-2xl bg-[#e0e5ec] font-bold text-[#4a5568] uppercase tracking-widest shadow-[6px_6px_12px_#a3b1c6,-6px_-6px_12px_#ffffff] transition-all duration-200 active:shadow-[inset_6px_6px_12px_#a3b1c6,inset_-6px_-6px_12px_#ffffff] focus:outline-none cursor-pointer">
          View Repository
        </button>

      </div>
    </div>
  );
}