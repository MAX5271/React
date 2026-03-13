import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import GlassmorphismDemo from './Glassmorphism/GlassmorphismDemo.tsx'
import SynthwaveDemo from './Synthwave/Synthwave.tsx'
import AcidGraphicDemo from './AcidGraphic/AcidGraphic.tsx'
import NeumorphismDemo from './Neumorphism/Neumorphism.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <GlassmorphismDemo />
    <SynthwaveDemo />
    <AcidGraphicDemo />
    <NeumorphismDemo/>
  </StrictMode>,
)
