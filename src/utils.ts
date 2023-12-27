import { annotate } from "rough-notation"

const eventListenersMap = new Map()

export const updateNotationColor = () => {
  const cards = document.querySelectorAll(
    ".project-ccard"
  ) as NodeListOf<HTMLLIElement>

  let color = ""
  const theme = document.documentElement.dataset.theme
  switch (theme) {
    case "sunset":
      color = "rgba(203,166,247,0.5)"
      break
    case "winter":
      color = "rgba(193,72,172,0.6)"
      break
    default:
      color = "rgba(203,166,247,0.5)"
  }

  cards.forEach((element) => {
    const title = element.querySelector(".project-title") as HTMLHeadingElement

    const annotation = annotate(title, {
      type: "underline",
      color,
      padding: 3,
    })

    const showAnnotation = () => {
      annotation.show()
    }

    const hideAnnotation = () => {
      annotation.hide()
    }

    // If there are old event listeners for this element, remove them
    const oldEventListeners = eventListenersMap.get(element)
    if (oldEventListeners) {
      element.removeEventListener(
        "mouseenter",
        oldEventListeners.showAnnotation
      )
      element.removeEventListener(
        "mouseleave",
        oldEventListeners.hideAnnotation
      )
    }

    // Add the new event listeners
    element.addEventListener("mouseenter", showAnnotation)
    element.addEventListener("mouseleave", hideAnnotation)

    // Store the new event listeners in the map
    eventListenersMap.set(element, { showAnnotation, hideAnnotation })
  })
}
