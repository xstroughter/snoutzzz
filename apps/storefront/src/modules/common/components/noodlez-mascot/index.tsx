"use client"

import { useEffect, useRef, useState } from "react"

import Image from "next/image"

import { clx } from "@modules/common/components/ui"

const MESSAGES = [
  "Personal goal: full blanket-burrito status before the first cold snap.",
  "Cozy level currently at 73%. Accepting donations of soft blankets.",
  "I heard tuna is in season. I have decided every season is tuna season.",
  "Someone left a pumpkin on the porch. I have claimed it as my throne.",
  "Working on my Halloween costume: 'Cat Who Is Already A Cat.' Very convincing.",
  "Spooky season means extra naps, to conserve energy for trick-or-treaters. Mostly naps though.",
  "Dear humans, please add more pumpkin treats to the shop. Sincerely, Noodlez.",
  "Napping is not a hobby, it's a lifestyle I have fully committed to.",
  "Current mood: one whisker away from perfectly cozy.",
  "I would like to formally announce my love for warm laundry piles.",
  "Practicing my scary hiss for Halloween. It sounds like a tiny kettle.",
  "If I had thumbs, I would order myself a tiny pumpkin toy immediately.",
]

const CYCLE_INTERVAL_MS = 60_000
const VISIBLE_DURATION_MS = 9_000
const INITIAL_DELAY_MS = 4_000

const NoodlezMascot = () => {
  const [visible, setVisible] = useState(false)
  const [messageIndex, setMessageIndex] = useState(0)
  const lastIndexRef = useRef<number | null>(null)

  useEffect(() => {
    let hideTimeout: ReturnType<typeof setTimeout>

    const pickMessage = () => {
      let next = Math.floor(Math.random() * MESSAGES.length)
      while (MESSAGES.length > 1 && next === lastIndexRef.current) {
        next = Math.floor(Math.random() * MESSAGES.length)
      }
      lastIndexRef.current = next
      return next
    }

    const appear = () => {
      setMessageIndex(pickMessage())
      setVisible(true)
      hideTimeout = setTimeout(() => setVisible(false), VISIBLE_DURATION_MS)
    }

    const initialTimeout = setTimeout(appear, INITIAL_DELAY_MS)
    const interval = setInterval(appear, CYCLE_INTERVAL_MS)

    return () => {
      clearTimeout(initialTimeout)
      clearTimeout(hideTimeout)
      clearInterval(interval)
    }
  }, [])

  return (
    <div
      className="fixed bottom-4 right-4 small:bottom-6 small:right-6 z-40 flex items-end gap-2 pointer-events-none"
      aria-live="polite"
    >
      <div
        className={clx(
          "relative max-w-[180px] small:max-w-[220px] rounded-2xl rounded-br-sm bg-white text-brand-charcoal text-xs small:text-sm leading-snug px-3.5 py-2.5 shadow-lg border border-brand-charcoal/10 transition-all duration-500 ease-out pointer-events-auto",
          visible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-3 scale-95 pointer-events-none"
        )}
      >
        <button
          type="button"
          onClick={() => setVisible(false)}
          aria-label="Dismiss Noodlez's message"
          className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-brand-charcoal/80 text-white text-[11px] leading-none flex items-center justify-center hover:bg-brand-charcoal"
        >
          &times;
        </button>
        {MESSAGES[messageIndex]}
      </div>
      <div
        className={clx(
          "relative w-[72px] h-[72px] small:w-[92px] small:h-[92px] shrink-0 transition-transform duration-500 ease-out",
          visible ? "translate-y-0" : "translate-y-[140%]"
        )}
      >
        <Image
          src="/mascot/noodlez-wave.png"
          alt="Noodlez the cat waving hello"
          fill
          sizes="92px"
          className="object-contain drop-shadow-md"
        />
      </div>
    </div>
  )
}

export default NoodlezMascot
