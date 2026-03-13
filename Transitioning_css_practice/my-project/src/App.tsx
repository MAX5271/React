import React, { useState } from 'react';

// Strict typing for allowed themes
type Theme = 'minimalism' | 'brutalism';

// Strict typing for the spatial ripple engine
interface RippleState {
  active: boolean;
  x: number;
  y: number;
  color: string;
}

export default function App() {
  const [theme, setTheme] = useState<Theme>('minimalism');
  
  const [ripple, setRipple] = useState<RippleState>({
    active: false,
    x: 0,
    y: 0,
    color: 'var(--theme-base)'
  });

  const handleThemeToggle = (e: React.MouseEvent<HTMLButtonElement>, targetTheme: Theme) => {
    if (theme === targetTheme || ripple.active) return;

    // 1. Grab click coordinates
    const { clientX, clientY } = e;
    const incomingColor = targetTheme === 'brutalism' ? '#e5e5e5' : '#fcfcfc';

    // 2. Lock scroll and fire the expanding circle
    document.body.classList.add('no-scroll');
    setRipple({
      active: true,
      x: clientX,
      y: clientY,
      color: incomingColor
    });

    // 3. Wait exactly 300ms for the CSS circle to engulf the screen, then swap the theme
    setTimeout(() => {
      document.documentElement.setAttribute('data-theme', targetTheme);
      setTheme(targetTheme);

      // 4. Drop the overlay 50ms later to reveal the new UI instantly
      setTimeout(() => {
        setRipple((prev) => ({ ...prev, active: false }));
        document.body.classList.remove('no-scroll');
      }, 50); 
    }, 300); 
  };

  return (
    <div className="min-h-screen bg-base text-primary font-theme transition-none flex flex-col items-center relative overflow-hidden">
      
      {/* --- THE SPATIAL RIPPLE OVERLAY --- */}
      {/* Notice the duration-300 and ease-in to make it explode outwards aggressively */}
      <div 
        className="fixed rounded-full pointer-events-none z-50 transition-transform duration-500 ease-in"
        style={{
          left: ripple.x,
          top: ripple.y,
          width: '2px',
          height: '2px',
          backgroundColor: ripple.color,
          transform: ripple.active ? 'translate(-50%, -50%) scale(2500)' : 'translate(-50%, -50%) scale(0)',
          opacity: ripple.active ? 1 : 0,
        }}
      />

      {/* --- HEADER / NAV BAR --- */}
      <header className="w-full border-b border-border-line bg-surface/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          
          <div className="text-2xl font-bold tracking-tighter">
            NC<span className="text-accent">.</span>
          </div>

          <nav className="flex items-center gap-2 bg-base p-1 rounded-theme border border-border-line">
            <button 
              onClick={(e) => handleThemeToggle(e, 'minimalism')}
              className={`px-4 py-2 text-sm font-medium rounded-theme cursor-pointer transition-all ${
                theme === 'minimalism' ? 'bg-surface shadow-theme text-primary' : 'text-muted hover:text-primary'
              }`}
            >
              Minimalism
            </button>
            <button 
              onClick={(e) => handleThemeToggle(e, 'brutalism')}
              className={`px-4 py-2 text-sm font-medium rounded-theme cursor-pointer transition-all ${
                theme === 'brutalism' ? 'bg-surface shadow-theme text-primary' : 'text-muted hover:text-primary'
              }`}
            >
              Brutalism
            </button>
          </nav>

        </div>
      </header>

      {/* --- PORTFOLIO CONTENT --- */}
      <main className="max-w-5xl w-full px-6 mt-20 flex flex-col gap-16 pb-20 z-10">
        
        <section>
          <h1 className="text-6xl font-bold mb-6 tracking-tight max-w-2xl leading-tight">
            Engineering digital experiences with precision.
          </h1>
          <p className="text-xl text-muted max-w-xl leading-relaxed">
            I am a full-stack developer specializing in modern web architecture, scalable backends, and high-fidelity user interfaces.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-surface border border-border-line shadow-theme rounded-theme p-8 font-theme flex flex-col transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-primary mb-3">GameVault</h3>
            <p className="text-muted mb-8 line-clamp-3 flex-grow">
              A full-stack web application designed for discovering and cataloging video games utilizing the MERN stack. Features secure authentication and RESTful APIs.
            </p>
            <button className="bg-accent text-accent-text px-6 py-3 rounded-theme font-medium cursor-pointer hover:opacity-90 transition-opacity self-start">
              View Repository
            </button>
          </div>

          <div className="bg-surface border border-border-line shadow-theme rounded-theme p-8 font-theme flex flex-col transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-primary mb-3">Nectar</h3>
            <p className="text-muted mb-8 line-clamp-3 flex-grow">
              An AI-driven nutrition platform generating personalized meal plans by processing user biometrics and specific dietary constraints.
            </p>
            <button className="bg-accent text-accent-text px-6 py-3 rounded-theme font-medium cursor-pointer hover:opacity-90 transition-opacity self-start">
              View Repository
            </button>
          </div>

        </section>
      </main>
    </div>
  );
}