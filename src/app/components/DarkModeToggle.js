'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import { motion } from 'framer-motion'

export default function DarkModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null // Prevent SSR issues

  const isDark = resolvedTheme === 'dark'

  return (
    <motion.div
      animate={{
        scale: [1.2, 1, 1.2],
      }}
      transition={{
        duration: 1.6,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatDelay: 2,
        
      }}
      className="absolute pt-1  right-[-20px] sm:right-[-20px]  md:right-[20px]"
    >
      <DarkModeSwitch
        checked={isDark}
        onChange={() => setTheme(isDark ? 'light' : 'dark')}
        size={25}
        sunColor="#383838"
        moonColor="#e5e7eb"
      />
    </motion.div>
  )
}
