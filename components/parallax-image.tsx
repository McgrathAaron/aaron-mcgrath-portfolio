"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxImageProps {
  src: string
  alt: string
  className?: string
}

export default function ParallaxImage({ src, alt, className = "" }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Subtle scale effect that keeps the image centered
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 0.95])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div className="relative w-full h-full" style={{ scale }}>
        <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-cover" priority />
      </motion.div>
    </div>
  )
}
