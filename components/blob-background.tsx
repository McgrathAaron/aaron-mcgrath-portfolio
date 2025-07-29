"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function BlobBackground() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Different colors based on theme
  const colors =
    theme === "dark" ? ["#4338ca", "#3b82f6", "#0ea5e9", "#06b6d4"] : ["#f59e0b", "#f97316", "#ef4444", "#ec4899"]

  return (
    <div className="absolute inset-0 -z-10 flex items-center justify-center">
      <div className="absolute w-[110%] h-[110%] animate-spin-slow">
        <svg
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          className="filter blur-md"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              {colors.map((color, index) => (
                <stop key={index} offset={`${(index / (colors.length - 1)) * 100}%`} stopColor={color} />
              ))}
            </linearGradient>
          </defs>
          <path
            d="M413.5,208.5Q388,167,408.5,125Q429,83,386,62.5Q343,42,300,42Q257,42,213.5,62.5Q170,83,147,125Q124,167,147,208.5Q170,250,147,291.5Q124,333,147,375Q170,417,213.5,437.5Q257,458,300,458Q343,458,386,437.5Q429,417,429,375Q429,333,421.5,291.5Q414,250,413.5,208.5Z"
            fill="url(#gradient)"
          >
            <animate
              attributeName="d"
              dur="20s"
              repeatCount="indefinite"
              values="M413.5,208.5Q388,167,408.5,125Q429,83,386,62.5Q343,42,300,42Q257,42,213.5,62.5Q170,83,147,125Q124,167,147,208.5Q170,250,147,291.5Q124,333,147,375Q170,417,213.5,437.5Q257,458,300,458Q343,458,386,437.5Q429,417,429,375Q429,333,421.5,291.5Q414,250,413.5,208.5Z;
                     M404,208.5Q379,167,404,125Q429,83,386,58Q343,33,300,33Q257,33,214,58Q171,83,146,125Q121,167,146,208.5Q171,250,146,291.5Q121,333,146,375Q171,417,214,442Q257,467,300,467Q343,467,386,442Q429,417,429,375Q429,333,429,291.5Q429,250,404,208.5Z;
                     M395.5,208.5Q388,167,395.5,125Q403,83,360,62.5Q317,42,300,42Q283,42,240,62.5Q197,83,155.5,125Q114,167,155.5,208.5Q197,250,155.5,291.5Q114,333,155.5,375Q197,417,240,437.5Q283,458,300,458Q317,458,360,437.5Q403,417,399.5,375Q396,333,396,291.5Q396,250,395.5,208.5Z;
                     M413.5,208.5Q388,167,408.5,125Q429,83,386,62.5Q343,42,300,42Q257,42,213.5,62.5Q170,83,147,125Q124,167,147,208.5Q170,250,147,291.5Q124,333,147,375Q170,417,213.5,437.5Q257,458,300,458Q343,458,386,437.5Q429,417,429,375Q429,333,421.5,291.5Q414,250,413.5,208.5Z"
            />
          </path>
        </svg>
      </div>
    </div>
  )
}
