"use client";
import React from 'react';

interface SoundScoutLogoProps {
  size?: number;
  className?: string;
}

export function SoundScoutLogo({ size = 32, className = "" }: SoundScoutLogoProps) {
  const uniqueId = `logo_${Date.now()}_${Math.random()}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      className={className}
    >
      <defs>
        <radialGradient id={`${uniqueId}_gradMain`} cx="20%" cy="50%" r="95%" fx="18%" fy="50%">
          <stop offset="0%" stopColor="#00D4AA" />
          <stop offset="30%" stopColor="#26B7B7" />
          <stop offset="45%" stopColor="#3B82F6" />
          <stop offset="70%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#6366F1" />
        </radialGradient>

        <clipPath id={`${uniqueId}_clipCircle`}>
          <circle cx="256" cy="256" r="208" />
        </clipPath>
      </defs>

      {/* Background filled circle with radial gradient */}
      <circle
        cx={256}
        cy={256}
        r={208}
        fill={`url(#${uniqueId}_gradMain)`}
        opacity={0.95}
      />

      {/* Bat Wing Left */}
      <path
        d="M120 200 C140 180, 180 160, 200 180 C220 200, 200 240, 180 260 C160 240, 140 220, 120 200 Z"
        fill="rgba(255,255,255,0.9)"
        opacity={0.8}
      />

      {/* Bat Wing Right */}
      <path
        d="M392 200 C372 180, 332 160, 312 180 C292 200, 312 240, 332 260 C352 240, 372 220, 392 200 Z"
        fill="rgba(255,255,255,0.9)"
        opacity={0.8}
      />

      {/* Bat Body */}
      <path
        d="M256 140 C240 140, 230 160, 230 180 L230 300 C230 320, 240 340, 256 340 C272 340, 282 320, 282 300 L282 180 C282 160, 272 140, 256 140 Z"
        fill="rgba(255,255,255,0.95)"
      />

      {/* Bat Head */}
      <circle cx={256} cy={160} r={25} fill="rgba(255,255,255,0.95)" />

      {/* Bat Ears */}
      <path
        d="M240 145 C235 135, 240 130, 245 135 C250 140, 245 150, 240 145 Z"
        fill="rgba(255,255,255,0.9)"
      />
      <path
        d="M272 145 C277 135, 272 130, 267 135 C262 140, 267 150, 272 145 Z"
        fill="rgba(255,255,255,0.9)"
      />

      {/* Sound Waves */}
      <path
        d="M100 280 C140 260, 180 260, 220 280 C260 300, 300 300, 340 280 C380 260, 420 260, 460 280"
        fill="none"
        stroke="rgba(255,255,255,0.7)"
        strokeWidth={8}
        strokeLinecap="round"
      />

      <path
        d="M80 320 C130 300, 180 300, 230 320 C280 340, 330 340, 380 320 C430 300, 480 300, 530 320"
        fill="none"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth={6}
        strokeLinecap="round"
      />

      {/* Center highlight */}
      <circle cx={256} cy={160} r={8} fill="rgba(255,255,255,0.3)" />
    </svg>
  );
}