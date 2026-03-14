import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Clip from './cssBasics/Clip'
import Grid from './cssBasics/Grid'
// import P1 from './cssBasics/p1'
// import App from './App.tsx'
// import GlassmorphismDemo from './Glassmorphism/GlassmorphismDemo.tsx'
// import SynthwaveDemo from './Synthwave/Synthwave.tsx'
// import AcidGraphicDemo from './AcidGraphic/AcidGraphic.tsx'
// import NeumorphismDemo from './Neumorphism/Neumorphism.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App />
    <GlassmorphismDemo />
    <SynthwaveDemo />
    <AcidGraphicDemo />
    <NeumorphismDemo/> */}
    {/* <P1 /> */}
    {/* <Clip/> */}
    <Grid/>
  </StrictMode>,
)
