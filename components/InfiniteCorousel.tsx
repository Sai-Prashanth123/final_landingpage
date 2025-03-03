// InfiniteCarousel.tsx
import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

 // Your custom hook

// Wrap function to loop a value into the range [min, max)
function wrap(min: number, max: number, v: number) {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
  }
  
  interface InfiniteCarouselProps {
    children: React.ReactNode;
    baseVelocity?: number;
  }
  
  export default function InfiniteCarousel({
    children,
    baseVelocity = -20,
  }: InfiniteCarouselProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const baseX = useMotionValue(0);
    const [copyWidth, setCopyWidth] = useState(0);
  
    // Convert children into an array to repeat them
    const content = React.Children.toArray(children);
  
    // Measure the width of one copy of the content after render.
    useEffect(() => {
      if (containerRef.current) {
        // Since we will render 3 copies, divide total scrollWidth by 3
        const totalWidth = containerRef.current.scrollWidth;
        setCopyWidth(totalWidth / 3);
      }
    }, [content]);
  
    // Create a transform that wraps the x-value between -copyWidth and 0
    const x = useTransform(baseX, (v: number) => {
      if (!copyWidth) return "0px";
      return `${wrap(-copyWidth, 0, v)}px`;
    });
  
    // Update baseX every animation frame to create a smooth horizontal scroll
    useAnimationFrame((time, delta) => {
      baseX.set(baseX.get() + baseVelocity * (delta / 1000));
    });
  
    return (
      <div className="overflow-hidden">
        <div ref={containerRef} className="w-full">
          <motion.div
            className="flex"
            style={{ x, willChange: "transform" }}
          >
            {/* Render three copies of the content for seamless looping */}
            {[...content, ...content, ...content].map((child, index) => (
              <div key={index} className="flex-shrink-0">
                {child}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    );
  }
// useAnimationFrame.ts


export  function useAnimationFrame(callback: (time: number, delta: number) => void) {
  const requestRef = useRef<number>(0);
  const previousTimeRef = useRef<number>(0);

  function animate(time: number) {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = time - previousTimeRef.current;
      callback(time, deltaTime);
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  },);
}
