"use client"

import { useState } from "react"

interface AvailabilityIndicatorProps {
  initialStatus: boolean
}

export function AvailabilityIndicator({ initialStatus }: AvailabilityIndicatorProps) {
  const [availabilityStatus, setAvailabilityStatus] = useState(initialStatus)

  return (
    <div
      onClick={() => setAvailabilityStatus(!availabilityStatus)}
      className={`inline-flex items-center gap-2 rounded-lg px-3 py-1 text-sm cursor-pointer transition-colors ${
        availabilityStatus
          ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
          : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
      }`}
    >
      <div className={`h-2 w-2 rounded-full animate-pulse ${availabilityStatus ? "bg-green-500" : "bg-red-500"}`}></div>
      {availabilityStatus ? "Available for work" : "Currently busy"}
    </div>
  )
}
