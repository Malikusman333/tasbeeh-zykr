import React from 'react';

const ParallaxBackground = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-green-950 to-emerald-900 overflow-hidden">
      
      {/* Simple Zig Zag Pattern */}
      <div className="absolute inset-0 opacity-40">
        {/* Single repeating zig zag pattern */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              rgba(6, 95, 70, 0.3) 0px,
              rgba(6, 95, 70, 0.3) 30px,
              rgba(16, 185, 129, 0.2) 30px,
              rgba(16, 185, 129, 0.2) 60px
            )`
          }}
        />
      </div>
      
      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-950/60 via-emerald-900/30 to-green-900/20"></div>
      
    </div>
  );
};

export default ParallaxBackground;