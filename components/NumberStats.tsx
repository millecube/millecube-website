"use client";

import { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";

const ease = [0.32, 0.72, 0, 1] as const;

type StatConfig = {
  prefix: string;
  realDisplay: string;
  spinMin: number;
  spinMax: number;
  decimals: number;
  suffix: string;
  label: string;
};

const STATS: StatConfig[] = [
  { prefix: "RM ", realDisplay: "2", spinMin: 1, spinMax: 9, decimals: 0, suffix: "M+", label: "Ad Spend Managed" },
  { prefix: "", realDisplay: "35", spinMin: 10, spinMax: 99, decimals: 0, suffix: "+", label: "Brands Served" },
  { prefix: "", realDisplay: "3.8", spinMin: 1.0, spinMax: 9.9, decimals: 1, suffix: "×", label: "Average ROAS" },
  { prefix: "", realDisplay: "2024", spinMin: 2017, spinMax: 2030, decimals: 0, suffix: "", label: "Founded in Penang" },
];

function FlipTile({ char }: { char: string }) {
  return (
    <motion.span
      key={char}
      initial={{ rotateX: -80, opacity: 0, y: "-28%" }}
      animate={{ rotateX: 0, opacity: 1, y: "0%" }}
      transition={{ duration: 0.1, ease }}
      style={{ display: "block", transformOrigin: "center bottom", transformPerspective: "220px" }}
    >
      {char}
    </motion.span>
  );
}

function FlipStat({ stat, index }: { stat: StatConfig; index: number }) {
  const [displayVal, setDisplayVal] = useState(stat.realDisplay);
  const [flipKey, setFlipKey] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const spinningRef = useRef(false);
  const iterRef = useRef(0);

  const startSpin = useCallback(() => {
    if (spinningRef.current) return;
    spinningRef.current = true;
    setIsSpinning(true);
    iterRef.current = 0;
    const TOTAL = 16;

    const tick = () => {
      if (!spinningRef.current) return;
      iterRef.current += 1;
      const i = iterRef.current;
      const isLast = i >= TOTAL;

      if (isLast) {
        setDisplayVal(stat.realDisplay);
      } else {
        const range = stat.spinMax - stat.spinMin;
        const r = stat.spinMin + Math.random() * range;
        setDisplayVal(stat.decimals > 0 ? r.toFixed(stat.decimals) : String(Math.round(r)));
      }
      setFlipKey((k) => k + 1);

      if (!isLast) {
        const delay = 55 + Math.pow(i, 1.85) * 2.2;
        timeoutRef.current = setTimeout(tick, Math.min(delay, 320));
      } else {
        spinningRef.current = false;
        setIsSpinning(false);
        timeoutRef.current = null;
      }
    };
    tick();
  }, [stat]);

  const stopAndReset = useCallback(() => {
    if (!spinningRef.current) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    spinningRef.current = false;
    setIsSpinning(false);
    setDisplayVal(stat.realDisplay);
    setFlipKey((k) => k + 1);
  }, [stat.realDisplay]);

  // Hover: auto-start the flip
  const handleMouseEnter = useCallback(() => {
    startSpin();
  }, [startSpin]);

  // Click: stop immediately if spinning, otherwise start another round
  const handleClick = useCallback(() => {
    if (spinningRef.current) {
      stopAndReset();
    } else {
      startSpin();
    }
  }, [startSpin, stopAndReset]);

  return (
    <motion.div
      className="flip-stat-cell"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.09, ease }}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      style={{ cursor: "pointer", userSelect: "none", WebkitUserSelect: "none" }}
    >
      {/* Departure-board tile */}
      <div className="flip-tile-outer">
        <div className="flip-tile-top-shade" aria-hidden="true" />
        <div className="flip-tile-split" aria-hidden="true" />
        <div className="flip-tile-bottom-shine" aria-hidden="true" />
        <div className="flip-tile-inner">
          <FlipTile key={flipKey} char={`${stat.prefix}${displayVal}${stat.suffix}`} />
        </div>
      </div>

      {/* Label */}
      <p className="flip-stat-label">{stat.label}</p>
    </motion.div>
  );
}

export default function NumberStats() {
  return (
    <section
      aria-label="Performance highlights"
      style={{ backgroundColor: "#FFD600", position: "relative", overflow: "hidden" }}
    >
      <style>{`
        .flip-stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          border-top: 1px solid rgba(7,80,60,0.10);
        }
        .flip-stat-cell {
          padding: 36px 24px 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          transition: background-color 240ms ease;
        }
        .flip-stat-cell:hover { background-color: rgba(255,255,255,0.14); }
        .flip-stat-cell:active { background-color: rgba(255,255,255,0.22); }
        .flip-stat-cell:nth-child(-n+2) { border-bottom: 1px solid rgba(7,80,60,0.10); }
        .flip-stat-cell:nth-child(odd)  { border-right: 1px solid rgba(7,80,60,0.10); }
        @media (min-width: 1024px) {
          .flip-stats-grid { grid-template-columns: repeat(4, 1fr); }
          .flip-stat-cell  { padding: 40px 32px 36px; }
          .flip-stat-cell:nth-child(-n+2) { border-bottom: none; }
          .flip-stat-cell:nth-child(odd)  { border-right: 1px solid rgba(7,80,60,0.10); }
          .flip-stat-cell:nth-child(even):not(:last-child) { border-right: 1px solid rgba(7,80,60,0.10); }
          .flip-stat-cell:last-child { border-right: none !important; }
        }
        /* Departure-board tile */
        .flip-tile-outer {
          position: relative;
          background: #032b22;
          border-radius: 10px;
          padding: 14px 22px 16px;
          min-width: 140px;
          overflow: hidden;
          box-shadow:
            0 1px 0 rgba(255,255,255,0.06) inset,
            0 -1px 0 rgba(0,0,0,0.35) inset,
            0 8px 28px rgba(3,43,34,0.45),
            0 2px 6px rgba(0,0,0,0.3);
          transition: box-shadow 220ms ease;
        }
        .flip-stat-cell:hover .flip-tile-outer {
          box-shadow:
            0 1px 0 rgba(255,255,255,0.08) inset,
            0 -1px 0 rgba(0,0,0,0.35) inset,
            0 12px 36px rgba(3,43,34,0.55),
            0 0 0 1.5px rgba(50,205,50,0.22),
            0 2px 6px rgba(0,0,0,0.3);
        }
        .flip-tile-top-shade {
          position: absolute; top: 0; left: 0; right: 0; height: 50%;
          background: rgba(0,0,0,0.18); pointer-events: none;
          border-radius: 10px 10px 0 0;
        }
        .flip-tile-split {
          position: absolute; top: 50%; left: 0; right: 0;
          height: 1.5px; background: rgba(0,0,0,0.5);
          pointer-events: none; z-index: 2;
        }
        .flip-tile-bottom-shine {
          position: absolute; bottom: 0; left: 0; right: 0; height: 50%;
          background: linear-gradient(to bottom, rgba(255,255,255,0.03), transparent);
          pointer-events: none; border-radius: 0 0 10px 10px;
        }
        .flip-tile-inner {
          position: relative; z-index: 3; overflow: hidden;
          font-family: var(--font-bebas); font-weight: 800;
          font-size: clamp(34px, 3.6vw, 54px); line-height: 1;
          letter-spacing: -0.02em; color: #FFD600;
          font-variant-numeric: tabular-nums; white-space: nowrap;
        }
        .flip-stat-label {
          margin-top: 14px; font-size: 10px; font-weight: 700;
          color: #07503c; font-family: var(--font-montserrat);
          letter-spacing: 0.10em; text-transform: uppercase; line-height: 1.3;
        }
      `}</style>

      <div
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, background: "linear-gradient(108deg, transparent 20%, rgba(255,255,255,0.13) 50%, transparent 80%)", pointerEvents: "none" }}
      />

      <div className="max-w-7xl mx-auto" style={{ position: "relative", zIndex: 1 }}>
        <div className="flip-stats-grid">
          {STATS.map((stat, i) => (
            <FlipStat key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
