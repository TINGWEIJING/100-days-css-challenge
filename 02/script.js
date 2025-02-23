window.addEventListener("DOMContentLoaded", () => {
  const iconFrameElements = document.getElementsByClassName("icon-frame");
  if (iconFrameElements.length > 0) {
    const iconFrameEl = iconFrameElements[0];
    iconFrameEl.addEventListener("click", () => {
      iconFrameEl.classList.remove("no-animation");
      iconFrameEl.classList.toggle("play");
    });
  }
});
