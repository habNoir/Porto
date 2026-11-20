"use client";

import React from "react";

export function GreekColumnIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#0c0d12] flex items-center justify-center ${className}`}>
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />
      <svg
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain p-4 opacity-90 transition-transform duration-500 hover:scale-105"
      >
        <line x1="40" y1="20" x2="40" y2="280" stroke="#ffffff" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.4" />
        <line x1="360" y1="20" x2="360" y2="280" stroke="#ffffff" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.4" />
        <line x1="30" y1="40" x2="370" y2="40" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.3" />
        <line x1="30" y1="260" x2="370" y2="260" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.3" />
        
        <text x="45" y="32" fill="#ffffff" fontSize="8" fontFamily="monospace" opacity="0.6">H: 9.618M [IONIC SPECIFICATION]</text>
        <text x="260" y="275" fill="#ffffff" fontSize="8" fontFamily="monospace" opacity="0.6">BASE // 1.618</text>

        <path d="M90 60 C80 50, 60 50, 60 70 C60 90, 80 85, 95 80" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M150 60 C160 50, 180 50, 180 70 C180 90, 160 85, 145 80" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="75" y="50" width="90" height="12" rx="2" stroke="#ffffff" strokeWidth="1.2" fill="#181a1f" fillOpacity="0.8" />
        <line x1="85" y1="62" x2="155" y2="62" stroke="#ffffff" strokeWidth="0.75" opacity="0.6" />
        
        <rect x="85" y="75" width="70" height="175" stroke="#ffffff" strokeWidth="1.2" fill="#0c0d12" />
        <line x1="95" y1="75" x2="95" y2="250" stroke="#ffffff" strokeWidth="0.75" strokeDasharray="1 2" opacity="0.7" />
        <line x1="105" y1="75" x2="105" y2="250" stroke="#ffffff" strokeWidth="1" opacity="0.8" />
        <line x1="115" y1="75" x2="115" y2="250" stroke="#ffffff" strokeWidth="0.75" strokeDasharray="1 2" opacity="0.7" />
        <line x1="125" y1="75" x2="125" y2="250" stroke="#ffffff" strokeWidth="1" opacity="0.8" />
        <line x1="135" y1="75" x2="135" y2="250" stroke="#ffffff" strokeWidth="0.75" strokeDasharray="1 2" opacity="0.7" />
        <line x1="145" y1="75" x2="145" y2="250" stroke="#ffffff" strokeWidth="1" opacity="0.8" />
        
        <rect x="80" y="250" width="80" height="8" stroke="#ffffff" strokeWidth="1.2" fill="#181a1f" />
        <rect x="70" y="258" width="100" height="12" stroke="#ffffff" strokeWidth="1.2" fill="#14161a" />

        <path d="M250 60 C240 50, 220 50, 220 70 C220 90, 240 85, 255 80" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M310 60 C320 50, 340 50, 340 70 C340 90, 320 85, 305 80" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="235" y="50" width="90" height="12" rx="2" stroke="#ffffff" strokeWidth="1.2" fill="#181a1f" fillOpacity="0.8" />
        <line x1="245" y1="62" x2="315" y2="62" stroke="#ffffff" strokeWidth="0.75" opacity="0.6" />
        
        <rect x="245" y="75" width="70" height="175" stroke="#ffffff" strokeWidth="1.2" fill="#0c0d12" />
        <line x1="255" y1="75" x2="255" y2="250" stroke="#ffffff" strokeWidth="0.75" strokeDasharray="1 2" opacity="0.7" />
        <line x1="265" y1="75" x2="265" y2="250" stroke="#ffffff" strokeWidth="1" opacity="0.8" />
        <line x1="275" y1="75" x2="275" y2="250" stroke="#ffffff" strokeWidth="0.75" strokeDasharray="1 2" opacity="0.7" />
        <line x1="285" y1="75" x2="285" y2="250" stroke="#ffffff" strokeWidth="1" opacity="0.8" />
        <line x1="295" y1="75" x2="295" y2="250" stroke="#ffffff" strokeWidth="0.75" strokeDasharray="1 2" opacity="0.7" />
        <line x1="305" y1="75" x2="305" y2="250" stroke="#ffffff" strokeWidth="1" opacity="0.8" />
        
        <rect x="240" y="250" width="80" height="8" stroke="#ffffff" strokeWidth="1.2" fill="#181a1f" />
        <rect x="230" y="258" width="100" height="12" stroke="#ffffff" strokeWidth="1.2" fill="#14161a" />

        <rect x="50" y="32" width="300" height="14" stroke="#ffffff" strokeWidth="1.2" fill="#1c1f26" />
        <line x1="50" y1="36" x2="350" y2="36" stroke="#ffffff" strokeWidth="0.5" opacity="0.5" />
      </svg>
      <div className="absolute inset-0 dither-scanline pointer-events-none opacity-40" />
    </div>
  );
}

export function AstrolabeCompassIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#0c0d12] flex items-center justify-center ${className}`}>
      <div className="absolute inset-0 blueprint-grid opacity-25 pointer-events-none" />
      <svg
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain p-4 opacity-90 transition-transform duration-500 hover:rotate-3"
      >
        <line x1="20" y1="150" x2="380" y2="150" stroke="#ffffff" strokeWidth="0.6" strokeDasharray="4 4" opacity="0.4" />
        <line x1="200" y1="10" x2="200" y2="290" stroke="#ffffff" strokeWidth="0.6" strokeDasharray="4 4" opacity="0.4" />

        <circle cx="200" cy="150" r="120" stroke="#ffffff" strokeWidth="1.2" opacity="0.8" />
        <circle cx="200" cy="150" r="114" stroke="#ffffff" strokeWidth="0.6" opacity="0.5" />
        <circle cx="200" cy="150" r="95" stroke="#ffffff" strokeWidth="0.8" strokeDasharray="2 4" opacity="0.6" />
        <circle cx="200" cy="150" r="60" stroke="#ffffff" strokeWidth="0.75" opacity="0.5" />

        <polygon points="200,30 207,145 200,150" fill="#ffffff" opacity="0.9" />
        <polygon points="200,30 193,145 200,150" fill="#52525b" opacity="0.7" />
        <polygon points="200,270 207,155 200,150" fill="#52525b" opacity="0.7" />
        <polygon points="200,270 193,155 200,150" fill="#ffffff" opacity="0.9" />
        <polygon points="320,150 205,143 200,150" fill="#ffffff" opacity="0.9" />
        <polygon points="320,150 205,157 200,150" fill="#52525b" opacity="0.7" />
        <polygon points="80,150 195,143 200,150" fill="#52525b" opacity="0.7" />
        <polygon points="80,150 195,157 200,150" fill="#ffffff" opacity="0.9" />

        <polygon points="285,65 204,146 200,150" fill="#ffffff" opacity="0.5" />
        <polygon points="115,65 196,146 200,150" fill="#ffffff" opacity="0.5" />
        <polygon points="285,235 204,154 200,150" fill="#ffffff" opacity="0.5" />
        <polygon points="115,235 196,154 200,150" fill="#ffffff" opacity="0.5" />

        <text x="195" y="24" fill="#ffffff" fontSize="12" fontFamily="serif" fontWeight="bold">N</text>
        <text x="195" y="288" fill="#ffffff" fontSize="11" fontFamily="serif">S</text>
        <text x="328" y="154" fill="#ffffff" fontSize="11" fontFamily="serif">E</text>
        <text x="64" y="154" fill="#ffffff" fontSize="11" fontFamily="serif">W</text>

        <text x="215" y="80" fill="#ffffff" fontSize="7" fontFamily="monospace" opacity="0.6">N.W. 315°</text>
        <text x="215" y="225" fill="#ffffff" fontSize="7" fontFamily="monospace" opacity="0.6">S.E. 135°</text>
        <text x="30" y="30" fill="#ffffff" fontSize="8" fontFamily="monospace" opacity="0.5">ASTROLABE</text>
        <text x="300" y="280" fill="#ffffff" fontSize="8" fontFamily="monospace" opacity="0.5">AXIS 0.0</text>
      </svg>
      <div className="absolute inset-0 dither-scanline pointer-events-none opacity-40" />
    </div>
  );
}

export function NautilusSpiralIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#0c0d12] flex items-center justify-center ${className}`}>
      <div className="absolute inset-0 blueprint-grid opacity-25 pointer-events-none" />
      <svg
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain p-4 opacity-90 transition-transform duration-500 hover:scale-105"
      >
        <rect x="50" y="30" width="300" height="185.4" stroke="#ffffff" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4" />
        <line x1="235.4" y1="30" x2="235.4" y2="215.4" stroke="#ffffff" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4" />
        <line x1="50" y1="144.6" x2="235.4" y2="144.6" stroke="#ffffff" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4" />
        <line x1="164.6" y1="30" x2="164.6" y2="144.6" stroke="#ffffff" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4" />

        <path
          d="M 50 215.4 
             A 185.4 185.4 0 0 1 235.4 30 
             A 114.6 114.6 0 0 1 350 144.6 
             A 70.8 70.8 0 0 1 279.2 215.4 
             A 43.8 43.8 0 0 1 235.4 171.6 
             A 27 27 0 0 1 262.4 144.6 
             A 16.7 16.7 0 0 1 279.2 161.3"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path d="M 235.4 171.6 L 50 215.4" stroke="#ffffff" strokeWidth="0.6" opacity="0.4" />
        <path d="M 235.4 171.6 L 100 100" stroke="#ffffff" strokeWidth="0.6" opacity="0.4" />
        <path d="M 235.4 171.6 L 200 40" stroke="#ffffff" strokeWidth="0.6" opacity="0.4" />
        <path d="M 262.4 144.6 L 310 70" stroke="#ffffff" strokeWidth="0.6" opacity="0.4" />
        <path d="M 262.4 144.6 L 340 160" stroke="#ffffff" strokeWidth="0.6" opacity="0.4" />
        <path d="M 262.4 144.6 L 280 210" stroke="#ffffff" strokeWidth="0.6" opacity="0.4" />

        <circle cx="235" cy="171" r="8" stroke="#ffffff" strokeWidth="0.75" opacity="0.7" />
        <circle cx="235" cy="171" r="18" stroke="#ffffff" strokeWidth="0.75" opacity="0.5" />
        <circle cx="235" cy="171" r="35" stroke="#ffffff" strokeWidth="0.75" strokeDasharray="2 3" opacity="0.4" />

        <text x="50" y="245" fill="#ffffff" fontSize="9" fontFamily="serif" letterSpacing="0.1em">Φ = 1.618033</text>
        <text x="50" y="260" fill="#ffffff" fontSize="7" fontFamily="monospace" opacity="0.5">SPIRALIS LOGARITHMICA</text>
      </svg>
      <div className="absolute inset-0 dither-scanline pointer-events-none opacity-40" />
    </div>
  );
}

export function RenaissanceMosaicIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#0c0d12] flex items-center justify-center ${className}`}>
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />
      <svg
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain p-4 opacity-90 transition-transform duration-500 hover:scale-105"
      >
        <rect x="40" y="40" width="70" height="70" fill="#ffffff" fillOpacity="0.08" stroke="#ffffff" strokeWidth="0.75" />
        <rect x="110" y="40" width="90" height="70" fill="#ffffff" fillOpacity="0.15" stroke="#ffffff" strokeWidth="0.75" />
        <rect x="200" y="40" width="80" height="70" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeWidth="0.75" />
        <rect x="280" y="40" width="80" height="70" fill="#ffffff" fillOpacity="0.12" stroke="#ffffff" strokeWidth="0.75" />

        <rect x="40" y="110" width="70" height="80" fill="#ffffff" fillOpacity="0.18" stroke="#ffffff" strokeWidth="0.75" />
        <rect x="110" y="110" width="90" height="80" fill="#ffffff" fillOpacity="0.05" stroke="#ffffff" strokeWidth="0.75" />
        <rect x="200" y="110" width="80" height="80" fill="#ffffff" fillOpacity="0.22" stroke="#ffffff" strokeWidth="0.75" />
        <rect x="280" y="110" width="80" height="80" fill="#ffffff" fillOpacity="0.09" stroke="#ffffff" strokeWidth="0.75" />

        <rect x="40" y="190" width="70" height="60" fill="#ffffff" fillOpacity="0.06" stroke="#ffffff" strokeWidth="0.75" />
        <rect x="110" y="190" width="90" height="60" fill="#ffffff" fillOpacity="0.14" stroke="#ffffff" strokeWidth="0.75" />
        <rect x="200" y="190" width="80" height="60" fill="#ffffff" fillOpacity="0.08" stroke="#ffffff" strokeWidth="0.75" />
        <rect x="280" y="190" width="80" height="60" fill="#ffffff" fillOpacity="0.16" stroke="#ffffff" strokeWidth="0.75" />

        <circle cx="200" cy="150" r="75" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.8" />
        <polygon points="200,90 245,175 155,175" stroke="#ffffff" strokeWidth="1.2" fill="none" opacity="0.7" />
        <polygon points="200,210 245,125 155,125" stroke="#ffffff" strokeWidth="1.2" fill="none" opacity="0.7" />

        <circle cx="200" cy="145" r="14" stroke="#ffffff" strokeWidth="1.5" fill="#14161b" />
        <polygon points="194,148 206,148 209,170 191,170" fill="#ffffff" opacity="0.85" />

        <text x="45" y="270" fill="#ffffff" fontSize="8" fontFamily="monospace" opacity="0.6">MOSAIC // ARCHIVE</text>
      </svg>
      <div className="absolute inset-0 dither-scanline pointer-events-none opacity-40" />
    </div>
  );
}

export function AthenaBustIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#090b10] flex items-center justify-center ${className}`}>
      <div className="absolute inset-0 blueprint-grid opacity-25 pointer-events-none" />
      <svg
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain p-4 opacity-90 transition-transform duration-500 hover:scale-105"
      >
        <circle cx="200" cy="140" r="110" stroke="#ffffff" strokeWidth="0.8" strokeDasharray="4 6" opacity="0.3" />
        <line x1="20" y1="140" x2="380" y2="140" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.3" />
        <line x1="200" y1="20" x2="200" y2="280" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.3" />

        <path d="M 120 70 L 100 70 L 100 90" stroke="#ffffff" strokeWidth="1.2" opacity="0.7" />
        <path d="M 280 70 L 300 70 L 300 90" stroke="#ffffff" strokeWidth="1.2" opacity="0.7" />
        <path d="M 120 230 L 100 230 L 100 210" stroke="#ffffff" strokeWidth="1.2" opacity="0.7" />
        <path d="M 280 230 L 300 230 L 300 210" stroke="#ffffff" strokeWidth="1.2" opacity="0.7" />

        <path
          d="M 160 55 C 190 35, 230 40, 245 70 C 255 90, 250 110, 248 120"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M 175 60 C 200 48, 230 52, 238 78"
          stroke="#ffffff"
          strokeWidth="1"
          opacity="0.6"
        />
        <path
          d="M 235 110 L 250 145 L 235 152 L 244 165 L 230 178 C 215 195, 180 205, 160 190"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 230 178 C 210 200, 190 210, 160 215 L 140 250 L 260 250"
          stroke="#ffffff"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M 195 120 C 190 145, 185 165, 175 175 C 160 190, 140 180, 145 150 C 150 125, 165 95, 185 90"
          stroke="#ffffff"
          strokeWidth="1.5"
          opacity="0.8"
        />

        {Array.from({ length: 12 }).map((_, r) => (
          <g key={r} opacity="0.45">
            {Array.from({ length: 18 }).map((_, c) => (
              <circle
                key={c}
                cx={130 + c * 8}
                cy={80 + r * 10}
                r={(r + c) % 3 === 0 ? 1.2 : 0.6}
                fill="#ffffff"
              />
            ))}
          </g>
        ))}

        <text x="35" y="35" fill="#ffffff" fontSize="9" fontFamily="serif" letterSpacing="0.15em">ATHENA BUST</text>
      </svg>
      <div className="absolute inset-0 dither-scanline pointer-events-none opacity-40" />
    </div>
  );
}
