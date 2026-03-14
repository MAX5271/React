import { useState } from "react";

function P1() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>Toggle</button>
      {visible && (
        <>
          <h1 className="bg-gray-800 text-white p-4 w-32 h-32">CSS Basics</h1>
          <div className="bg-blue-500 text-white px-6 py-2 rounded-full mt-8 w-32">
            {" "}
            PILL
          </div>
          <header className="flex justify-between items-center bg-gray-200 h-8">
            <div>LOGO</div>
            <div className="bg-white rounded-md z-10 h-6 w-14 flex items-center justify-center">
              Header
            </div>
            <div>BUTTON</div>
          </header>
        </>
      )}
      {/* <div className="flex justify-between items-center mt-20" >
        <div className="shadow-[0_0_25px_#00ffcc] rounded-md" >Synthwave</div>
        <div className="shadow-[0_10px_15px_#ff0000] rounded-md" >Warning</div>
        <div className="shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff] rounded-md" >Neumorphism</div>
    </div>
        */}

        <div className="bg-red-500 h-screen w-full flex justify-center items-center">
    {/* The Optimal Glass Card, black background with 40% opacity */}
    {/* tracking-wildest/tight/normal dictates the spacing between the individual charaters in the text. */}
    <div className="bg-black/40 backdrop-blur-xl rounded-xl border border-white/10 p-8 text-white font-bold tracking-widest shadow-lg">
        Glassmorphism
    </div>
</div>
    </div>
  );
}

export default P1;

/*
    BOX-SHADOW SYNTAX:
    X-Offset: Moves the shadow left or right. (Positive = right, Negative = left).

    Y-Offset: Moves the shadow up or down. (Positive = down, Negative = up).

    Blur Radius: How soft and fuzzy the edge of the shadow gets.

    Spread Radius: (Optional) How much the shadow physically grows or shrinks before it starts blurring.

    Color: The actual color of the shadow (often using rgba for transparency).

    In Tailwind, it looks like this: shadow-[x_y_blur_spread_color].
 */
