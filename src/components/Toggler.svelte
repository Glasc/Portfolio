<script lang="ts">
  import Sun from 'svelte-remixicon/lib/icons/SunFill.svelte';
  import Moon from 'svelte-remixicon/lib/icons/MoonFill.svelte';

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

<section
  class="px-3 py-2 text-lg rounded-full bg-base-100 flex items-center space-x-2"
>
  <button data-set-theme={themes.light}>
    <Sun
      data-act-class="ACTIVECLASS"
      class={`${lightSelected ? "text-orange-400/90" : ""}`}
      on:click={() => setTheme(themes.light)}
    />
  </button>
  <button data-set-theme={themes.dark}>
    <Moon
      data-act-class="ACTIVECLASS"
      class={`${darkSelected ? "text-orange-400/90" : ""}`}
      on:click={() => setTheme(themes.dark)}
    />
  </button>
</section>
