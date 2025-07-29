"use client"

import { motion } from "framer-motion"

interface AnimatedHeroTextProps {
  firstName: string
  lastName: string
  className?: string
}

export default function AnimatedHeroText({ firstName, lastName, className = "" }: AnimatedHeroTextProps) {
  // Animation variants for the text
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const firstNameVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const lastNameVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  }

  return (
    <motion.div className={`relative ${className}`} initial="hidden" animate="visible" variants={containerVariants}>
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight flex flex-wrap items-baseline">
        <motion.span variants={firstNameVariants} className="mr-3">
          By
        </motion.span>
        <motion.span variants={lastNameVariants} className="text-5xl md:text-7xl font-extrabold inline-block">
          {lastName}
        </motion.span>
      </h1>
    </motion.div>
  )
}
