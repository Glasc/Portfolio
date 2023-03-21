<script lang="ts">
  import Sun from "svelte-remixicon/lib/icons/SunFill.svelte"
  import Moon from "svelte-remixicon/lib/icons/MoonFill.svelte"
  import { onMount } from "svelte"

  const themes = {
    dark: "catppuccin-mocha",
    light: "winter",
  } as const

  type Theme = (typeof themes)[keyof typeof themes]

  let selectedTheme = localStorage.getItem("theme") || themes.dark
  let darkSelected = selectedTheme === themes.dark
  let lightSelected = selectedTheme === themes.light

  const setTheme = (theme: Theme) => {
    selectedTheme = theme
    darkSelected = selectedTheme === themes.dark
    lightSelected = selectedTheme === themes.light
    localStorage.setItem("theme", theme)
  }

  onMount(() => {
    selectedTheme = localStorage.getItem("theme") || themes.dark
    darkSelected = selectedTheme === themes.dark
    lightSelected = selectedTheme === themes.light
  })
</script>

<button
  class="shadow-lg text-lg flex items-center space-x-2 px-3 py-2 border border-base-300 rounded-full bg-base-100 transition-all ease-out hover:scale-105"
  data-set-theme={selectedTheme === themes.dark ? themes.light : themes.dark}
  on:click={() =>
    setTheme(selectedTheme === themes.dark ? themes.light : themes.dark)}
  data-act-class="ACTIVECLASS"
>
  <Sun
    size="23"
    data-act-class="ACTIVECLASS"
    class={`${lightSelected ? "text-orange-400/90" : ""}`}
  />
  <Moon
    size="23"
    data-act-class="ACTIVECLASS"
    class={`${darkSelected ? "text-orange-400/90" : ""}`}
  />
</button>
