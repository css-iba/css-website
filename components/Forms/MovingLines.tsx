"use client";

import React, { useEffect, useRef } from "react";
// New particle flow component implementation (Perlin-noise-driven)
const MovingLines: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const c = canvas as HTMLCanvasElement;
    const ctx2 = ctx as CanvasRenderingContext2D;

    // utility functions
    const rand = (v1: number, v2: number) =>
      Math.floor(v1 + Math.random() * (v2 - v1));
    const deg = (a: number) => (Math.PI / 180) * a;

    // Perlin noise implementation (improved Perlin)
    const perm = new Uint8Array(512);
    const p = new Uint8Array(256);
    for (let i = 0; i < 256; i++) p[i] = i;
    for (let i = 255; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = p[i];
      p[i] = p[j];
      p[j] = t;
    }
    for (let i = 0; i < 512; i++) perm[i] = p[i & 255];

    function fade(t: number) {
      return t * t * t * (t * (t * 6 - 15) + 10);
    }

    function lerp(a: number, b: number, t: number) {
      return a + t * (b - a);
    }

    function grad(hash: number, x: number, y: number, z: number) {
      const h = hash & 15;
      const u = h < 8 ? x : y;
      const v = h < 4 ? y : h === 12 || h === 14 ? x : z;
      return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
    }

    function noise(x: number, y: number, z: number) {
      const X = Math.floor(x) & 255;
      const Y = Math.floor(y) & 255;
      const Z = Math.floor(z) & 255;
      x -= Math.floor(x);
      y -= Math.floor(y);
      z -= Math.floor(z);
      const u = fade(x);
      const v = fade(y);
      const w = fade(z);
      const A = perm[X] + Y;
      const AA = perm[A] + Z;
      const AB = perm[A + 1] + Z;
      const B = perm[X + 1] + Y;
      const BA = perm[B] + Z;
      const BB = perm[B + 1] + Z;
      return lerp(
        lerp(
          lerp(grad(perm[AA], x, y, z), grad(perm[BA], x - 1, y, z), u),
          lerp(grad(perm[AB], x, y - 1, z), grad(perm[BB], x - 1, y - 1, z), u),
          v
        ),
        lerp(
          lerp(
            grad(perm[AA + 1], x, y, z - 1),
            grad(perm[BA + 1], x - 1, y, z - 1),
            u
          ),
          lerp(
            grad(perm[AB + 1], x, y - 1, z - 1),
            grad(perm[BB + 1], x - 1, y - 1, z - 1),
            u
          ),
          v
        ),
        w
      );
    }

    // helper: parse CSS color (hex or rgb[a]) -> {r,g,b,a}
    function parseCssColor(input: string) {
      if (!input) return null;
      input = input.trim();
      // hex #rrggbb or #rgb
      if (input[0] === "#") {
        const hex = input.substring(1);
        if (hex.length === 3) {
          const r = parseInt(hex[0] + hex[0], 16);
          const g = parseInt(hex[1] + hex[1], 16);
          const b = parseInt(hex[2] + hex[2], 16);
          return { r, g, b, a: 1 };
        } else if (hex.length === 6) {
          const r = parseInt(hex.substring(0, 2), 16);
          const g = parseInt(hex.substring(2, 4), 16);
          const b = parseInt(hex.substring(4, 6), 16);
          return { r, g, b, a: 1 };
        }
      }
      // rgb(a)
      const rgbMatch = input.match(/rgba?\(([^)]+)\)/);
      if (rgbMatch) {
        const parts = rgbMatch[1].split(",").map((s) => s.trim());
        const r = parseInt(parts[0], 10);
        const g = parseInt(parts[1], 10);
        const b = parseInt(parts[2], 10);
        const a = parts[3] !== undefined ? parseFloat(parts[3]) : 1;
        return { r, g, b, a };
      }
      return null;
    }

    function rgbToHsl(r: number, g: number, b: number) {
      r /= 255;
      g /= 255;
      b /= 255;
      const max = Math.max(r, g, b),
        min = Math.min(r, g, b);
      let h = 0,
        s = 0;
      const l = (max + min) / 2;
      if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r) / d + 2;
            break;
          case b:
            h = (r - g) / d + 4;
            break;
        }
        h /= 6;
      }
      return { h: h * 360, s: s * 100, l: l * 100 };
    }

    function hslToRgb(h: number, s: number, l: number) {
      h /= 360;
      s /= 100;
      l /= 100;
      if (s === 0) {
        const v = Math.round(l * 255);
        return { r: v, g: v, b: v };
      }
      const hue2rgb = (p: number, q: number, t: number) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      const r = Math.round(hue2rgb(p, q, h + 1 / 3) * 255);
      const g = Math.round(hue2rgb(p, q, h) * 255);
      const b = Math.round(hue2rgb(p, q, h - 1 / 3) * 255);
      return { r, g, b };
    }

    function rgbaStringFromRgb(
      rgb: { r: number; g: number; b: number; a?: number },
      a: number
    ) {
      return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${a})`;
    }

    // get page background variable and compute complementary hues
    const rootColour =
      getComputedStyle(document.documentElement)
        .getPropertyValue("--colour-bg")
        .trim() || "#000000";
    const parsed = parseCssColor(rootColour) || { r: 0, g: 0, b: 0, a: 1 };
    const hsl = rgbToHsl(parsed.r, parsed.g, parsed.b);
    const complementHue = (hsl.h + 180) % 360;
    // pick two hues near the complement for variety
    const hueA = Math.round(complementHue);
    const hueB = Math.round((complementHue + 30) % 360);
    // choose saturations / lights depending on bg lightness to ensure contrast
    const darkBg = hsl.l < 50;
    const satA = darkBg ? 60 : 40;
    const satB = darkBg ? 80 : 55;
    const lightA = darkBg ? 60 : 30;
    const lightB = darkBg ? 75 : 45;

    // options (mapped from user snippet) — hues derived from complement of --colour-bg
    const opt: any = {
      particles: window.innerWidth > 500 ? 1000 : 500,
      noiseScale: 0.009,
      angle: deg(-90),
      h1: hueA,
      h2: hueB,
      s1: satA,
      s2: satB,
      l1: lightA,
      l2: lightB,
      strokeWeight: 1.2,
      tail: 82,
    };

    const Particles: any[] = [];
    let time = 0;

    // particle class
    class Particle {
      x: number;
      y: number;
      lx: number;
      ly: number;
      vx: number;
      vy: number;
      ax: number;
      ay: number;
      hueSemen: number;
      hue: number;
      sat: number;
      light: number;
      maxSpeed: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.lx = x;
        this.ly = y;
        this.vx = 0;
        this.vy = 0;
        this.ax = 0;
        this.ay = 0;
        this.hueSemen = Math.random();
        this.hue = this.hueSemen > 0.5 ? 20 + opt.h1 : 20 + opt.h2;
        this.sat = this.hueSemen > 0.5 ? opt.s1 : opt.s2;
        this.light = this.hueSemen > 0.5 ? opt.l1 : opt.l2;
        this.maxSpeed = this.hueSemen > 0.5 ? 3 : 2;
      }
      randomize() {
        this.hueSemen = Math.random();
        this.hue = this.hueSemen > 0.5 ? 20 + opt.h1 : 20 + opt.h2;
        this.sat = this.hueSemen > 0.5 ? opt.s1 : opt.s2;
        this.light = this.hueSemen > 0.5 ? opt.l1 : opt.l2;
        this.maxSpeed = this.hueSemen > 0.5 ? 3 : 2;
      }
      follow() {
        const angle =
          noise(
            this.x * opt.noiseScale,
            this.y * opt.noiseScale,
            time * opt.noiseScale
          ) *
            Math.PI *
            0.5 +
          opt.angle;
        this.ax += Math.cos(angle);
        this.ay += Math.sin(angle);
      }
      update() {
        this.follow();
        this.vx += this.ax;
        this.vy += this.ay;
        const p = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        const a = Math.atan2(this.vy, this.vx);
        const m = Math.min(this.maxSpeed, p);
        this.vx = Math.cos(a) * m;
        this.vy = Math.sin(a) * m;
        this.x += this.vx;
        this.y += this.vy;
        this.ax = 0;
        this.ay = 0;
        this.edges();
      }
      updatePrev() {
        this.lx = this.x;
        this.ly = this.y;
      }
      edges() {
        const width = c.clientWidth;
        const height = c.clientHeight;
        if (this.x < 0) {
          this.x = width;
          this.updatePrev();
        }
        if (this.x > width) {
          this.x = 0;
          this.updatePrev();
        }
        if (this.y < 0) {
          this.y = height;
          this.updatePrev();
        }
        if (this.y > height) {
          this.y = 0;
          this.updatePrev();
        }
      }
      render() {
        ctx2.strokeStyle = `hsla(${this.hue}, ${this.sat}%, ${this.light}%, 0.5)`;
        ctx2.beginPath();
        ctx2.moveTo(this.x, this.y);
        ctx2.lineTo(this.lx, this.ly);
        ctx2.stroke();
        this.updatePrev();
      }
    }

    function generate() {
      Particles.length = 0;
      const count = opt.particles;
      const w = c.clientWidth;
      const h = c.clientHeight;
      for (let i = 0; i < count; i++) {
        Particles.push(new Particle(Math.random() * w, Math.random() * h));
      }
    }

    function resize() {
      const parent = c.parentElement;
      const w = parent ? parent.clientWidth : window.innerWidth;
      const h = parent ? parent.clientHeight : window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      c.style.width = `${w}px`;
      c.style.height = `${h}px`;
      c.width = Math.max(1, Math.floor(w * dpr));
      c.height = Math.max(1, Math.floor(h * dpr));
      ctx2.setTransform(dpr, 0, 0, dpr, 0, 0);
      opt.particles = window.innerWidth > 500 ? 1000 : 500;
      generate();
    }

    // click to randomize
    function onClick() {
      opt.h1 = rand(0, 360);
      opt.h2 = rand(0, 360);
      opt.s1 = rand(20, 90);
      opt.s2 = rand(20, 90);
      opt.l1 = rand(30, 80);
      opt.l2 = rand(30, 80);
      opt.angle += deg(rand(60, 60)) * (Math.random() > 0.5 ? 1 : -1);
      for (const p of Particles) p.randomize();
    }

    // animation loop
    function step() {
      time++;
      // translucent overlay to create trails
      const alpha = Math.max(0, Math.min(1, (100 - opt.tail) / 100));
      // use page background colour for overlay so trails blend with site bg
      const overlayRgb = parsed; // parsed from --colour-bg earlier
      ctx2.fillStyle = rgbaStringFromRgb(overlayRgb, alpha);
      const cssW = c.clientWidth;
      const cssH = c.clientHeight;
      ctx2.fillRect(0, 0, cssW, cssH);

      for (const p of Particles) {
        p.update();
        p.render();
      }
      rafRef.current = requestAnimationFrame(step);
    }

    // init
    resize();
    generate();
    ctx.lineWidth = opt.strokeWeight;
    window.addEventListener("resize", resize);
    document.body.addEventListener("click", onClick);
    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      document.body.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default MovingLines;
