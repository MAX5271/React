import React, { useState } from 'react';

// Simple Icons (SVG)
const Icons = {
  lamp: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
  wifi: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" /></svg>,
  tv: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  lock: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
  user: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
};

// Reusable Neuomorphic Button Card
const DeviceCard = ({ icon, label, isActive, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`
        cursor-pointer rounded-3xl p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300
        ${isActive 
          ? 'bg-[#EFEEEE] shadow-[inset_6px_6px_12px_#c5c5c5,inset_-6px_-6px_12px_#ffffff] text-cyan-500' // PRESSED STATE (Inset Shadow)
          : 'bg-[#EFEEEE] shadow-[8px_8px_16px_#c5c5c5,-8px_-8px_16px_#ffffff] text-slate-500 hover:translate-y-[-2px]' // UNPRESSED STATE (Outset Shadow)
        }
      `}
    >
      <div className={`transition-transform duration-300 ${isActive ? 'scale-90' : 'scale-100'}`}>
        {icon}
      </div>
      <span className="font-bold text-sm tracking-wide">{label}</span>
      <div className={`h-2 w-2 rounded-full transition-colors duration-300 ${isActive ? 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]' : 'bg-slate-300'}`}></div>
    </div>
  );
};

export default function SmartHomeDashboard() {
  const [temp, setTemp] = useState(24);
  const [devices, setDevices] = useState({
    lamp: true,
    wifi: true,
    tv: false,
    lock: false,
  });

  const toggleDevice = (key) => {
    setDevices(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-[#EFEEEE] text-slate-600 p-8 font-sans selection:bg-cyan-200">
      
      {/* Main Container */}
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <header className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-700 tracking-tight">My Home</h1>
            <p className="text-sm font-bold text-slate-400 mt-1">Living Room • Active</p>
          </div>
          
          {/* Profile Button (Outset Shadow) */}
          <button className="h-12 w-12 rounded-full bg-[#EFEEEE] flex items-center justify-center shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] active:shadow-[inset_4px_4px_8px_#c5c5c5,inset_-4px_-4px_8px_#ffffff] transition-all text-slate-500 hover:text-cyan-500">
            {Icons.user}
          </button>
        </header>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

          {/* Left Column: Thermostat */}
          <div className="md:col-span-5 flex flex-col">
            <div className="relative w-full rounded-[40px] bg-[#EFEEEE] p-8 shadow-[12px_12px_24px_#c5c5c5,-12px_-12px_24px_#ffffff]">
              
              {/* Card Header */}
              <div className="flex justify-between items-center mb-10">
                <span className="font-bold text-lg text-slate-700">Thermostat</span>
                <div className="h-10 w-10 rounded-full bg-[#EFEEEE] shadow-[inset_3px_3px_6px_#c5c5c5,inset_-3px_-3px_6px_#ffffff] flex items-center justify-center">
                  <div className="h-2 w-2 bg-green-400 rounded-full shadow-[0_0_5px_rgba(74,222,128,0.6)]"></div>
                </div>
              </div>

              {/* The Dial */}
              <div className="flex justify-center py-4 mb-4">
                {/* Outer Track (Inset) */}
                <div className="relative h-64 w-64 rounded-full bg-[#EFEEEE] shadow-[inset_8px_8px_16px_#c5c5c5,inset_-8px_-8px_16px_#ffffff] flex items-center justify-center">
                  
                  {/* Inner Knob (Outset) */}
                  <div className="h-40 w-40 rounded-full bg-[#EFEEEE] shadow-[8px_8px_16px_#c5c5c5,-8px_-8px_16px_#ffffff] flex flex-col items-center justify-center border-4 border-[#EFEEEE]">
                    <span className="text-5xl font-black text-slate-700">{temp}°</span>
                    <span className="text-xs font-bold text-slate-400 mt-2 tracking-widest">COOLING</span>
                  </div>
                  
                  {/* Indicator Dot (Calculated rotation could go here) */}
                  <div className="absolute top-8 right-12 h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
                </div>
              </div>

              {/* Controls */}
              <div className="mt-6 flex justify-between px-6">
                <button 
                  onClick={() => setTemp(temp - 1)}
                  className="h-12 w-12 rounded-full bg-[#EFEEEE] text-xl font-bold text-slate-500 shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] active:shadow-[inset_3px_3px_6px_#c5c5c5,inset_-3px_-3px_6px_#ffffff] transition-all hover:text-cyan-500"
                >
                  -
                </button>
                <button 
                  onClick={() => setTemp(temp + 1)}
                  className="h-12 w-12 rounded-full bg-[#EFEEEE] text-xl font-bold text-slate-500 shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] active:shadow-[inset_3px_3px_6px_#c5c5c5,inset_-3px_-3px_6px_#ffffff] transition-all hover:text-cyan-500"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Device Grid */}
          <div className="md:col-span-7 grid grid-cols-2 gap-6 content-start">
            <DeviceCard 
              icon={Icons.lamp} 
              label="Smart Lamp" 
              isActive={devices.lamp} 
              onClick={() => toggleDevice('lamp')} 
            />
            <DeviceCard 
              icon={Icons.wifi} 
              label="Wi-Fi Mesh" 
              isActive={devices.wifi} 
              onClick={() => toggleDevice('wifi')} 
            />
            <DeviceCard 
              icon={Icons.tv} 
              label="Smart TV" 
              isActive={devices.tv} 
              onClick={() => toggleDevice('tv')} 
            />
            <DeviceCard 
              icon={Icons.lock} 
              label="Front Lock" 
              isActive={devices.lock} 
              onClick={() => toggleDevice('lock')} 
            />
            
            {/* Wide 'Add Device' Button */}
            <div className="col-span-2 mt-4">
              <button className="w-full rounded-2xl bg-[#EFEEEE] p-4 font-bold text-slate-400 uppercase tracking-wider text-sm shadow-[8px_8px_16px_#c5c5c5,-8px_-8px_16px_#ffffff] active:shadow-[inset_4px_4px_8px_#c5c5c5,inset_-4px_-4px_8px_#ffffff] transition-all hover:text-cyan-500">
                + Add New Device
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}