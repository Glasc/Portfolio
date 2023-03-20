import Sun from "~icons/ri/sun-fill"
import Moon from "~icons/ri/moon-fill"
import { useEffect, useState } from "react"

const themes = {
  dark: "catppuccin-mocha",
  light: "winter",
} as const

type Theme = (typeof themes)[keyof typeof themes]

const useTheme = () => {
  const [selectedTheme, setSelectedTheme] = useState<Theme>()

  const darkSelected = selectedTheme === themes.dark
  const lightSelected = selectedTheme === themes.light

  useEffect(() => {
    const cacheTheme = localStorage.getItem("theme") as Theme
    setSelectedTheme(cacheTheme || themes.dark)
  }, [])

  return { lightSelected, darkSelected, setTheme: setSelectedTheme }
}

export const Toggler = () => {
  const { lightSelected, darkSelected, setTheme } = useTheme()

  return (
    <section className="px-3 py-2 text-lg rounded-full bg-base-100 flex items-center space-x-2">
      <button data-set-theme={themes.light}>
        <Sun
          data-act-class="ACTIVECLASS"
          className={`${lightSelected && "text-orange-400/90"}`}
          onClick={() => setTheme(themes.light)}
        />
      </button>
      <button data-set-theme={themes.dark}>
        <Moon
          data-act-class="ACTIVECLASS"
          className={`${darkSelected && "text-orange-400/90"}`}
          onClick={() => setTheme(themes.dark)}
        />
      </button>
    </section>
  )
}
