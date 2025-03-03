"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion"
import Image from "next/image"


const features = [
  {
    icon: <Image src="/coro2.svg" width={100}  height={300} alt="coro" className="scale-125"/>,
    title: "ATS Optimization",
    description: "Optimize your resume with keywords & formatting to pass systems.",
  },
  {
    icon: <Image src="/coro4.svg" width={100}  height={300} alt="coro" />,
    title: "Real-Time Feedback",
    description: "Get real-time feedback on answers, tone, and body language.",
  },
  {
    icon: <Image src="/coro3.svg" width={100}  height={300} alt="coro" />,
    title: "Mock interviews",
    description: "Practice tailored mock interviews for your target job role.",
  },
  {
    icon: <Image src="/coro1.svg" width={100}  height={300} alt="coro"/>,
    title: "Instant customization",
    description: "Create a tailored resume in seconds, aligned with your target job.",
  },
]

const FeatureCard = ({ feature }: { feature: (typeof features)[0] }) => (
  <div className="flex-shrink-0 w-[354px] text-center p-4 mx-4 font-inter">
    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
      {feature.icon}
    </div>
    <h3 className="text-[24px] font-semibold text-gray-900 mb-2 truncate">{feature.title}</h3>
    <p className="text-sm text-gray-600 line-clamp-3">{feature.description}</p>
  </div>
)

export default function InfiniteFeatures() {
  // The base velocity (you can adjust as needed)
  const baseVelocity = -50;

  const containerRef = useRef<HTMLDivElement>(null);
  const baseX = useMotionValue(0);
  const [copyWidth, setCopyWidth] = useState(0);

  // Once the component mounts, measure the width of one copy of your repeated content.
  useEffect(() => {
    if (containerRef.current) {
      // The container holds all copies (we are repeating the content 3 times).
      // We assume each copy has the same width.
      const totalWidth = containerRef.current.scrollWidth;
      const singleWidth = totalWidth / 3;
      setCopyWidth(singleWidth);
    }
  }, []);

  // Use the measured width in our transform.
  // If copyWidth isn’t set yet, default to "0px".
  const x = useTransform(baseX, (v: number) => {
    if (!copyWidth) return "0px";
    // We want the animation to wrap from -copyWidth to 0.
    return `${wrap(-copyWidth, 0, v)}px`;
  });

  const directionFactor = useRef<number>(1);

  useAnimationFrame((time, delta) => {
    const moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    baseX.set(baseX.get() + moveBy);
  });

  // (Optional) Pause animation on mouse enter.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseEnter = () => (directionFactor.current = 0);
    const handleMouseLeave = () => (directionFactor.current = 1);

    container.addEventListener("mouseenter", handleMouseEnter, { passive: true });
    container.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-[1182px] mx-auto overflow-hidden">
        {/* This container holds the repeated content. */}
        <div ref={containerRef} className="relative w-full overflow-hidden">
          <motion.div
            className="flex font-inter"
            style={{
              x,
              willChange: "transform", // Helps optimize animations
            }}
          >
            {/* Repeat the features array three times for smooth looping */}
            {[...features, ...features, ...features].map((feature, idx) => (
              <FeatureCard key={idx} feature={feature} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}


function wrap(min: number, max: number, v: number) {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}
