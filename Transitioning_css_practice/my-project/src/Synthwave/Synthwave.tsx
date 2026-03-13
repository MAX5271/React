export default function SynthwaveDemo() {
  return (
    // 1. The Canvas: Deep midnight void. Pure black absorbs too much light, 
    // so we use a very dark, tinted hex code (#09090b) to give the neon something to reflect off.
    <div className="relative min-h-screen flex items-center justify-center bg-[#09090b] overflow-hidden font-mono p-6">
      
      {/* 2. The Cyberspace Grid: Creates depth and a "terminal" feel */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#00ffcc 1px, transparent 1px), linear-gradient(90deg, #00ffcc 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* 3. THE CYBERPUNK CARD */}
      <div className="relative z-10 w-full max-w-md p-8 bg-[#121217] border border-[#00ffcc] text-slate-200 transition-all duration-300 hover:scale-[1.02] shadow-[0_0_15px_rgba(0,255,204,0.15),inset_0_0_20px_rgba(0,255,204,0.05)]">
        
        {/* Header with Neon Text Glow */}
        <div className="flex items-center justify-between mb-6 border-b border-[#00ffcc]/30 pb-4">
          <h3 className="text-3xl font-bold tracking-widest text-[#00ffcc] uppercase drop-shadow-[0_0_8px_rgba(0,255,204,0.8)]">
            GameVault
          </h3>
          
          {/* System Status Badge (Using aggressive Magenta as a secondary accent) */}
          <div className="px-2 py-1 text-xs bg-[#ff0055] text-white font-bold tracking-widest shadow-[0_0_10px_rgba(255,0,85,0.6)]">
            SYS.ACTIVE
          </div>
        </div>
        
        {/* Terminal Text */}
        <p className="mb-8 leading-relaxed text-sm opacity-90">
          <span className="text-[#ff0055] font-bold">&gt; LOG: </span>
          A full-stack web application designed for discovering and cataloging video games utilizing the MERN stack. Features secure authentication and RESTful APIs.
        </p>
        
        {/* Hollow Neon Button */}
        <button className="group relative w-full py-4 bg-transparent border border-[#00ffcc] text-[#00ffcc] font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#00ffcc] hover:text-black cursor-pointer shadow-[0_0_10px_rgba(0,255,204,0.3)]">
          <span className="relative z-10 flex items-center justify-center gap-2">
            Access Data 
            <span className="group-hover:translate-x-1 transition-transform">_&gt;</span>
          </span>
        </button>

      </div>
    </div>
  );
}