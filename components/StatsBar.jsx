"use client";

import { useEffect, useRef, useState } from "react";

export const STATS = [
  { number: "100", label: "Patients Treated" },
  { number: "15+", label: "Therapies Offered" },
  { number: "2026", label: "Established" },
  { number: "98%", label: "Patient Satisfaction" },
];

function AnimatedNumber({ number, start }) {
  const [count, setCount] = useState(0);

  const numericValue = parseInt(number.replace(/\D/g, ""), 10);
  const suffix = number.replace(/[0-9]/g, "");

  useEffect(() => {
    if (!start) return;

    let startTime;
    const duration = 2000;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;

      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      // Smooth ease-out
      const easedProgress = 1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(numericValue * easedProgress));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(numericValue);
      }
    };

    requestAnimationFrame(animate);
  }, [numericValue, start]);

  return (
    <>
      {count.toLocaleString()}
      {suffix}
    </>
  );
}

export default function StatsBar() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-green-800 via-green-700 to-emerald-800 py-8 sm:py-10"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-lime-300/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-emerald-300/10 blur-3xl" />

        {/* Decorative dots */}
        <span className="absolute left-[12%] top-8 h-1.5 w-1.5 animate-pulse rounded-full bg-green-200/60" />
        <span className="absolute left-[30%] bottom-8 h-1 w-1 animate-pulse rounded-full bg-white/40 [animation-delay:500ms]" />
        <span className="absolute right-[20%] top-10 h-1.5 w-1.5 animate-pulse rounded-full bg-green-200/50 [animation-delay:1000ms]" />
        <span className="absolute right-[8%] bottom-7 h-1 w-1 animate-pulse rounded-full bg-white/30 [animation-delay:700ms]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">

        {/* Small heading */}
        <div
          className={`mb-6 text-center transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-3 opacity-0"
          }`}
        >
          <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-green-100/80 sm:text-xs">
            <span className="h-px w-6 bg-green-200/50" />
            Our Impact
            <span className="h-px w-6 bg-green-200/50" />
          </span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.08] px-3 py-5 text-center shadow-lg backdrop-blur-md transition-all duration-700 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.13] hover:shadow-xl sm:px-4 sm:py-6 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 130}ms`,
              }}
            >
              {/* Card shine */}
              <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-white/10 blur-2xl transition-all duration-700 group-hover:scale-150 group-hover:bg-green-200/20" />

              {/* Number */}
              <div className="relative">
                <p className="font-display text-3xl font-extrabold tracking-tight text-white transition-transform duration-500 group-hover:scale-105 sm:text-4xl">
                  <AnimatedNumber
                    number={stat.number}
                    start={isVisible}
                  />
                </p>

                {/* Label */}
                <p className="mt-1.5 text-[9px] font-bold uppercase tracking-[0.13em] text-green-100 sm:text-[10px]">
                  {stat.label}
                </p>

                {/* Animated line */}
                <div className="mx-auto mt-3 h-[2px] w-10 overflow-hidden rounded-full bg-white/10">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r from-green-200 to-lime-100 transition-all duration-1000 ${
                      isVisible ? "w-full" : "w-0"
                    }`}
                    style={{
                      transitionDelay: `${index * 150 + 600}ms`,
                    }}
                  />
                </div>
              </div>

              {/* Bottom glow on hover */}
              <div className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-green-200 opacity-0 shadow-[0_0_12px_rgba(187,247,208,0.8)] transition-all duration-500 group-hover:w-1/2 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}