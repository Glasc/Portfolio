import Sun from "~icons/ri/sun-fill"
import Moon from "~icons/ri/moon-fill"
import { useEffect, useState } from "react"

type Theme = "catppuccin-mocha" | "winter" | undefined

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(undefined)

  const darkSelected = theme === "catppuccin-mocha"
  const lightSelected = theme === "winter"

  useEffect(() => {
    const cacheTheme = localStorage.getItem("theme") as Theme
    setTheme(cacheTheme || "catppuccin-mocha")
  }, [])

  return { lightSelected, darkSelected, setTheme }
}

type TogglerProps = {}

export const Toggler = ({}: TogglerProps) => {
  const { lightSelected, darkSelected, setTheme } = useTheme()

  return (
    <section className="px-3 py-2 text-lg rounded-full bg-base-100 flex items-center space-x-2">
      <button data-set-theme="winter" data-act-class="ACTIVECLASS">
        <Sun
          className={`${lightSelected && "text-orange-400/90"}`}
          onClick={() => setTheme("winter")}
        />
      </button>
      <button data-set-theme="catppuccin-mocha" data-act-class="ACTIVECLASS">
        <Moon
          className={`${darkSelected && "text-orange-400/90"}`}
          onClick={() => setTheme("catppuccin-mocha")}
        />
      </button>
    </section>
  )
}
