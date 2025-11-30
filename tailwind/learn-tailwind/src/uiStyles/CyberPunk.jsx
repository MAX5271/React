'use client'; // <--- FIX 1: Essential for Next.js App Router

import { useState, useEffect } from 'react'; // <--- FIX 2: Fixed imports

export default function CyberpunkProfile() {
  
  // We embed the CSS directly here to prevent "document is not defined" errors
  // and keep it in one file for you.
  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

    /* Scanlines Overlay */
    .scanlines::before {
      content: " ";
      display: block;
      position: fixed;
      top: 0; left: 0; width: 100%; height: 100%;
      background: linear-gradient(
        to bottom,
        rgba(255,255,255,0) 50%,
        rgba(0,0,0,0.25) 50%
      );
      background-size: 100% 4px;
      z-index: 50;
      pointer-events: none;
      opacity: 0.6;
    }

    /* Glitch Animation Keyframes */
    @keyframes glitch-anim-1 {
      0% { clip-path: inset(20% 0 80% 0); transform: translate(-2px, 1px); }
      20% { clip-path: inset(60% 0 10% 0); transform: translate(1px, -1px); }
      40% { clip-path: inset(40% 0 50% 0); transform: translate(-2px, 2px); }
      60% { clip-path: inset(80% 0 5% 0); transform: translate(2px, -2px); }
      80% { clip-path: inset(10% 0 60% 0); transform: translate(-1px, 1px); }
      100% { clip-path: inset(30% 0 30% 0); transform: translate(0); }
    }
    
    @keyframes glitch-anim-2 {
      0% { clip-path: inset(10% 0 60% 0); transform: translate(2px, -1px); }
      20% { clip-path: inset(80% 0 5% 0); transform: translate(-1px, 2px); }
      40% { clip-path: inset(30% 0 20% 0); transform: translate(1px, -2px); }
      60% { clip-path: inset(10% 0 80% 0); transform: translate(-2px, 1px); }
      80% { clip-path: inset(50% 0 30% 0); transform: translate(2px, -1px); }
      100% { clip-path: inset(10% 0 60% 0); transform: translate(0); }
    }

    /* The Glitch Effect Classes */
    .cyber-glitch {
      position: relative;
    }
    .cyber-glitch::before,
    .cyber-glitch::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: black; /* Matches background to hide main text */
    }
    .cyber-glitch::before {
      left: 2px;
      text-shadow: -1px 0 #ff00c1;
      clip-path: inset(0);
      animation: glitch-anim-1 2s infinite linear alternate-reverse;
    }
    .cyber-glitch::after {
      left: -2px;
      text-shadow: -1px 0 #00fff9;
      clip-path: inset(0);
      animation: glitch-anim-2 3s infinite linear alternate-reverse;
    }
  `;

  return (
    <div className="min-h-screen bg-black text-white font-mono p-4 md:p-8 relative overflow-hidden scanlines selection:bg-cyan-500/30 selection:text-cyan-100">
      
      {/* Inject Styles Safely */}
      <style>{styles}</style>

      {/* Grid Background */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50"></div>
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)]"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* --- HEADER --- */}
        <header className="flex flex-col md:flex-row items-center justify-between mb-12 border-b border-cyan-900/50 pb-6">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 md:mb-0 relative z-20">
            <span 
              className="cyber-glitch" 
              data-text="NIGHT_CITY_NET"
              style={{ fontFamily: '"VT323", monospace' }}
            >
              NIGHT_CITY_NET
            </span>
          </h1>
          
          {/* Status HUD */}
          <div className="flex items-center gap-6">
             <div className="text-right hidden md:block">
                <div className="text-xs text-gray-500 uppercase">Current User</div>
                <div className="text-xl font-bold text-fuchsia-500 drop-shadow-[0_0_5px_#d946ef]">V_TECH_SAMURAI</div>
             </div>
             <div className="h-12 w-12 border-2 border-lime-400 flex items-center justify-center shadow-[0_0_10px_#a3e635] animate-pulse bg-lime-900/20">
                <div className="h-3 w-3 bg-lime-400 rounded-full"></div>
             </div>
          </div>
        </header>

        {/* --- MAIN LAYOUT --- */}
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Avatar & Stats */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Glitched Avatar Frame */}
            <div className="relative w-full aspect-square border-4 border-cyan-500 p-1 group">
               {/* Decorative corners */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-4 border-l-4 border-pink-500 z-20"></div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-4 border-r-4 border-pink-500 z-20"></div>
              
              <img 
                src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80&w=600" 
                alt="Avatar" 
                className="w-full h-full object-cover filter contrast-125 grayscale-[50%] sepia-[20%] hue-rotate-[190deg] saturate-150 transition-all group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_50%,rgba(0,0,0,0.2)_50%)] bg-[size:100%_4px] pointer-events-none mix-blend-overlay"></div>
            </div>

            {/* Stats Panel */}
            <div className="bg-gray-900/50 border border-cyan-900/50 p-6 backdrop-blur-sm">
              <h2 className="text-xl font-bold text-cyan-400 mb-6 uppercase border-l-4 border-cyan-400 pl-3">System Vitals</h2>
              <StatBar label="SYNAPSE_RESPONSE" value={92} color="cyan" />
              <StatBar label="CYBERDECK_LOAD" value={45} color="pink" />
              <StatBar label="STREET_CRED" value={88} color="lime" />
            </div>
            
            <div className="flex gap-4">
               <CyberButton color="cyan">AUGMENT</CyberButton>
               <CyberButton color="pink">LOGOUT</CyberButton>
            </div>
          </div>

          {/* Right Column: Feed */}
          <div className="lg:col-span-8">
            <div className="flex items-center justify-between mb-8">
               <h2 className="text-2xl font-bold uppercase text-white border-b-2 border-fuchsia-500 pb-2 inline-block">
                  Recent_Netruns
               </h2>
               <span className="text-xs text-fuchsia-400 animate-pulse font-bold">>> LIVE FEED CONNECTED</span>
            </div>

            <div className="space-y-4">
              <ActivityCard 
                id="#094A" 
                title="DATA_HEIST: Arasaka Tower" 
                desc="Extracted proprietary shard data. Minimal resistance detected."
                status="COMPLETE"
                rewards={["2450 EDDIES", "+150 XP"]}
                color="cyan"
              />
              <ActivityCard 
                id="#094B" 
                title="NETRUN: Pacifica Grid" 
                desc="Connection severed by BLACKWALL ICE. Emergency jack-out initiated."
                status="FAILED"
                rewards={["SYSTEM_DAMAGE"]}
                color="pink"
              />
              <ActivityCard 
                id="#094C" 
                title="GIG: Fixer Contract" 
                desc="Delivered package to Afterlife. Client satisfied."
                status="COMPLETE"
                rewards={["800 EDDIES"]}
                color="lime"
              />
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}

/* --- HELPER COMPONENTS --- */

function CyberButton({ children, color = 'cyan', onClick }) {
  const styles = {
    cyan: 'border-cyan-400 text-cyan-400 hover:bg-cyan-400/20 hover:shadow-[0_0_15px_rgba(34,211,238,0.6)]',
    pink: 'border-fuchsia-500 text-fuchsia-500 hover:bg-fuchsia-500/20 hover:shadow-[0_0_15px_rgba(217,70,239,0.6)]',
  };

  return (
    <button
      onClick={onClick}
      className={`relative w-full px-6 py-3 font-mono font-bold uppercase tracking-wider border-2 -skew-x-12 transition-all duration-300 ${styles[color]} group`}
    >
      <span className="relative z-10 skew-x-12 inline-block">{children}</span>
    </button>
  );
}

function StatBar({ label, value, color }) {
  const colors = {
    cyan: { bg: 'bg-cyan-900', fill: 'bg-cyan-400', shadow: 'shadow-[0_0_10px_#22d3ee]' },
    pink: { bg: 'bg-fuchsia-900', fill: 'bg-fuchsia-500', shadow: 'shadow-[0_0_10px_#d946ef]' },
    lime: { bg: 'bg-lime-900', fill: 'bg-lime-400', shadow: 'shadow-[0_0_10px_#a3e635]' },
  };
  const c = colors[color];

  return (
    <div className="mb-4">
      <div className="flex justify-between font-mono text-xs mb-1 uppercase">
        <span className="text-gray-400">{label}</span>
        <span className={`font-bold ${c.fill.replace('bg-', 'text-')}`}>{value}%</span>
      </div>
      <div className={`h-3 w-full ${c.bg} p-[1px] -skew-x-12`}>
        <div style={{ width: `${value}%` }} className={`h-full ${c.fill} ${c.shadow}`}></div>
      </div>
    </div>
  );
}

function ActivityCard({ id, title, desc, status, rewards, color }) {
  const colors = {
    cyan: { border: 'border-cyan-400', bg: 'hover:bg-cyan-900/20', text: 'group-hover:text-cyan-300', tag: 'text-cyan-400 bg-cyan-400/10' },
    pink: { border: 'border-fuchsia-500', bg: 'hover:bg-fuchsia-900/20', text: 'group-hover:text-fuchsia-300', tag: 'text-fuchsia-400 bg-fuchsia-400/10' },
    lime: { border: 'border-lime-400', bg: 'hover:bg-lime-900/20', text: 'group-hover:text-lime-300', tag: 'text-lime-400 bg-lime-400/10' },
  };
  const c = colors[color];

  return (
    <div className={`group relative bg-gray-900 border-l-4 ${c.border} p-5 ${c.bg} transition-all duration-300 cursor-pointer`}>
      <div className={`absolute top-0 right-0 px-2 py-1 text-xs font-bold ${c.tag}`}>{id}</div>
      <div className="flex justify-between items-center mb-2 mt-1">
        <h3 className={`text-lg font-bold transition-colors ${c.text}`}>{title}</h3>
        <span className={`text-xs font-bold ${status === 'FAILED' ? 'text-red-500 animate-pulse' : 'text-lime-500'}`}>{status}</span>
      </div>
      <p className="text-gray-400 text-sm mb-4">{desc}</p>
      <div className="flex gap-2 text-xs font-bold">
        {rewards.map((r, i) => (
          <span key={i} className="bg-gray-800 text-white px-2 py-1 border border-gray-700">{r}</span>
        ))}
      </div>
    </div>
  );
}