
// --------------------


const slider = document.getElementById("slider");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

function getScrollAmount() {
  const card = slider.querySelector(".card");
  const cardStyles = window.getComputedStyle(card);
  const gap = 16;
  return card.offsetWidth + gap;
}

nextBtn.addEventListener("click", () => {
  slider.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  slider.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
});


let autoSlideInterval = setInterval(() => {
  const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

  if (slider.scrollLeft + getScrollAmount() >= maxScrollLeft - 1) {

    slider.scrollTo({ left: 0, behavior: "smooth" });
  } else {
    slider.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
  }
}, 5000);
