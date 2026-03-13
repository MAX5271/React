export default function GlassmorphismDemo() {
  return (
    // 1. The Canvas: A very dark, rich slate to make the colors pop
    <div className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden font-sans p-6">
      
      {/* 2. The Light Sources: Massive, heavily blurred colored orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-[100px] opacity-60"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-600 rounded-full mix-blend-screen filter blur-[100px] opacity-60"></div>

      {/* 3. THE GLASS CARD */}
      <div className="relative z-10 w-full max-w-md p-8 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] text-white transition-transform duration-500 hover:-translate-y-2">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold tracking-wide">Nectar</h3>
          <div className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]"></div>
        </div>
        
        {/* Body Text */}
        <p className="text-white/70 mb-8 leading-relaxed font-light">
          An AI-driven nutrition platform generating personalized meal plans by processing user biometrics and specific dietary constraints.
        </p>
        
        {/* Glass Button inside the Glass Card */}
        <button className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium transition-all duration-300 cursor-pointer shadow-[0_4px_16px_0_rgba(0,0,0,0.2)]">
          View Repository
        </button>

      </div>
    </div>
  );
}