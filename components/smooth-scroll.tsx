"use client"

import type React from "react"
import { useEffect } from "react"

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Function to handle smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')

      if (anchor) {
        e.preventDefault()
        const targetId = anchor.getAttribute("href")

        if (targetId && targetId !== "#") {
          const targetElement = document.querySelector(targetId)

          if (targetElement) {
            window.scrollTo({
              top: targetElement.getBoundingClientRect().top + window.scrollY - 100, // Offset for header
              behavior: "smooth",
            })
          }
        }
      }
    }

    // Add event listener
    document.addEventListener("click", handleAnchorClick)

    // Prevent horizontal scrolling on touch devices
    const preventHorizontalScroll = (e: TouchEvent) => {
      // Allow vertical scrolling
      if (Math.abs(e.touches[0].clientY) > Math.abs(e.touches[0].clientX)) {
        return
      }

      // Prevent horizontal scrolling
      e.preventDefault()
    }

    document.addEventListener("touchmove", preventHorizontalScroll, { passive: false })

    // Clean up
    return () => {
      document.removeEventListener("click", handleAnchorClick)
      document.removeEventListener("touchmove", preventHorizontalScroll)
    }
  }, [])

  return <>{children}</>
}
