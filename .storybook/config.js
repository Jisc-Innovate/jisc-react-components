import { configure } from "@kadira/storybook"

import "../ux-patterns/styles/ux.jisc-1.2.0.style.min.css"

function loadStories() {
  require("../stories")
}

configure(loadStories, module)
