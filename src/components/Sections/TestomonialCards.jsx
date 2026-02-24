import { useState, useRef } from "react";

const testimonials = [
  {
    id: 1,
    stars: 5,
    quote:
      "We were struggling to find quality React developers for months. Developer Door matched us with DevSquad in 48 hours. The project was delivered ahead of schedule.",
    name: "Sarah Jenkins",
    title: "CTO, FinTech Global",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    id: 2,
    stars: 4,
    quote:
      "The quality of developers we found through Developer Door was exceptional. Our startup went from zero to product in 6 weeks. Couldn't have done it without them.",
    name: "Marcus Reeve",
    title: "Founder, NovaTech",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 3,
    stars: 4,
    quote:
      "We scaled our engineering team by 3x in a single quarter. Developer Door's vetting process saved us months of recruiting headaches and the talent quality speaks for itself.",
    name: "Priya Mehta",
    title: "VP Engineering, ScaleAI",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
];

function StarIcon({ filled }) {
  return (
    <svg
      className={`w-5 h-5 ${filled ? "text-[#00BD5F]" : "text-white/20"}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function ChevronIcon({ direction }) {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d={direction === "left" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
    </svg>
  );
}

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const [slideState, setSlideState] = useState("idle"); // idle | exit | enter
  const [direction, setDirection] = useState(null);
  const [displayed, setDisplayed] = useState(0);
  const timeoutRef = useRef(null);

  const navigate = (nextIndex, dir) => {
    if (slideState !== "idle") return;
    setDirection(dir);
    setSlideState("exit");

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setDisplayed(nextIndex);
      setCurrent(nextIndex);
      setSlideState("enter");
      timeoutRef.current = setTimeout(() => {
        setSlideState("idle");
        setDirection(null);
      }, 400);
    }, 300);
  };

  const prev = () => navigate((current - 1 + testimonials.length) % testimonials.length, "right");
  const next = () => navigate((current + 1) % testimonials.length, "left");

  const t = testimonials[displayed];

  const contentStyle = (() => {
    if (slideState === "exit") {
      return {
        opacity: 0,
        transform: direction === "left" ? "translateX(-40px)" : "translateX(40px)",
        transition: "opacity 0.3s ease, transform 0.3s ease",
      };
    }
    if (slideState === "enter") {
      return {
        opacity: 1,
        transform: "translateX(0)",
        transition: "opacity 0.4s cubic-bezier(0.22,1,0.36,1), transform 0.4s cubic-bezier(0.22,1,0.36,1)",
      };
    }
    return { opacity: 1, transform: "translateX(0)", transition: "none" };
  })();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&display=swap');
        body { font-family: 'DM Sans', sans-serif; }
      `}</style>

      <div
        className="flex items-center justify-start px-4"
        style={{
          background: "",
        }}
      >
        {/* Ambient glow */}
        <div
          className="pointer-events-none fixed inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 45% at 65% 40%, rgba(34,197,94,0.07) 0%, transparent 60%), radial-gradient(ellipse 40% 55% at 25% 70%, rgba(16,185,129,0.05) 0%, transparent 55%)",
          }}
        />

        <div className="relative w-full max-w-2xl">
          {/* Card */}
          <div
            className="relative bg-[#00000033] backdrop-blur-[44px] overflow-hidden"
            // style={{
            //   background: "rgba(255,255,255,0.04)",
            //   border: "1px solid rgba(255,255,255,0.09)",
            //   boxShadow:
            //     "0 0 0 1px rgba(52,211,153,0.06), 0 40px 80px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.07)",
            //   backdropFilter: "blur(24px)",
            // }}
          >
            {/* Top shimmer */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
            //   style={{
            //     background: "linear-gradient(90deg, transparent, rgba(52,211,153,0.45), transparent)",
            //   }}
            />

            {/* Animated content */}
            <div className="px-10 pt-10 pb-8" style={contentStyle}>
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} filled={i < t.stars} />
                ))}
              </div>

              {/* Quote */}
              <p
                className="text-white/80 text-lg leading-relaxed mb-8"
                style={{ fontWeight: 300, minHeight: "96px" }}
              >
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0"
                  style={{
                    border: "2px solid rgba(52,211,153,0.35)",
                    boxShadow: "0 0 12px rgba(52,211,153,0.2)",
                  }}
                >
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm" style={{ letterSpacing: "0.01em" }}>
                    — {t.name}
                  </p>
                  <p className="text-white text-xs mt-0.5" style={{ letterSpacing: "0.04em" }}>
                    {t.title}
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div
              className="flex items-center justify-between px-10 py-5"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => navigate(i, i > current ? "left" : "right")}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === current ? "28px" : "8px",
                      height: "8px",
                      background:
                        i === current
                          ? "#00BD5F"
                          : "rgba(255,255,255,0.2)",
                      boxShadow: i === current ? "0 0 10px rgba(52,211,153,0.4)" : "none",
                    }}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex items-center gap-3">
                {[
                  { label: "prev", fn: prev, dir: "left" },
                  { label: "next", fn: next, dir: "right" },
                ].map(({ label, fn, dir }) => (
                  <button
                    key={label}
                    onClick={fn}
                    disabled={slideState !== "idle"}
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-40 group"
                    style={{
                      background: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.12)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(52,211,153,0.15)";
                      e.currentTarget.style.borderColor = "#00BD5F";
                      e.currentTarget.style.boxShadow = "0 0 16px rgba(52,211,153,0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <span className="text-white transition-colors duration-200">
                      <ChevronIcon direction={dir} />
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}