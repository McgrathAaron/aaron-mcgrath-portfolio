"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface TextMorphProps {
  words: string[]
  interval?: number
  className?: string
  prefix?: string
  suffix?: string
}

export default function TextMorph({
  words,
  interval = 3000,
  className = "",
  prefix = "",
  suffix = "",
}: TextMorphProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Find the longest word to set a minimum width
  const longestWord = words.reduce((longest, word) => (word.length > longest.length ? word : longest), "")

  useEffect(() => {
    if (words.length <= 1) return

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, interval)

    return () => clearInterval(timer)
  }, [words, interval])

  return (
    <div className={`relative ${className}`}>
      {prefix && <span>{prefix}</span>}
      <div className="inline-block relative" style={{ minWidth: `${longestWord.length * 0.55}em` }}>
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute left-0"
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
        {/* Invisible text to maintain space */}
        <span className="invisible">{longestWord}</span>
      </div>
      {suffix && <span>{suffix}</span>}
    </div>
  )
}
