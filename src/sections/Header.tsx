"use client"

import { useEffect, useState } from "react"

const sections = ["inicial", "projetos", "sobre", "contato"]

export const Header = () => {
  const [activeSection, setActiveSection] = useState("inicial")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-50% 0px -50% 0px" } // melhora a detecção da seção centralizada
    )

    sections.forEach((id) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {sections.map((sec) => (
          <a
            key={sec}
            href={`#${sec}`}
            className={`nav-item ${
              activeSection === sec
                ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
                : ""
            }`}
          >
            {sec.charAt(0).toUpperCase() + sec.slice(1)}
          </a>
        ))}
      </nav>
    </div>
  )
}