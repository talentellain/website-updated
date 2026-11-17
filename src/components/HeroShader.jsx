'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const DynamicShaderView = dynamic(
  () =>
    import('shaders/react').then((mod) => {
      const { Shader, Swirl, ChromaFlow, FlutedGlass, FilmGrain } = mod;
      return function ShaderView() {
        return (
          <Shader style={{ width: '100%', height: '100%' }} className="w-full h-full">
            <Swirl colorA="#ffffff" colorB="#f0f0f0" detail={1.7} />
            <ChromaFlow
              baseColor="#ffffff"
              downColor="#7c3aed"
              leftColor="#7c3aed"
              rightColor="#7c3aed"
              upColor="#7c3aed"
              momentum={13}
              radius={3.5}
            />
            <FlutedGlass
              aberration={0.61}
              angle={31}
              frequency={8}
              highlight={0.12}
              highlightSoftness={0}
              lightAngle={-90}
              refraction={4}
              shape="rounded"
              softness={1}
              speed={0.15}
            />
            <FilmGrain strength={0.05} />
          </Shader>
        );
      };
    }),
  { ssr: false }
);

export default function HeroShader() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 10,
          pointerEvents: 'none',
          width: '100%',
          height: '100%',
          backgroundColor: '#EFEFEF',
        }}
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 10,
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      <DynamicShaderView />
    </div>
  );
}
