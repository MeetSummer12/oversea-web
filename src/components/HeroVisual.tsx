"use client";
import React from "react";

export default function HeroVisual() {
  return (
    <div className="hero-visual rounded-xl border border-slate-200 overflow-hidden relative">
      {/* 背景网格与光晕 */}
      <div className="bg-tech-grid absolute inset-0" aria-hidden="true" />
      <div className="hero-halo" aria-hidden="true" />

      {/* 中心插画 */}
      <img src="/globe.svg" alt="Hero globe" className="hero-illustration relative z-10" />

      {/* 氛围粒子 */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <span className="hero-dot" style={{ top: "14%", left: "22%" }} />
        <span className="hero-dot" style={{ top: "28%", left: "76%" }} />
        <span className="hero-dot" style={{ top: "68%", left: "18%" }} />
        <span className="hero-dot" style={{ top: "72%", left: "70%" }} />
      </div>
    </div>
  );
}