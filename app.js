const arrows = document.querySelectorAll(".arrow");
const movielists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, id) => {
  const itemNumber = movielists[id].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio=Math.floor(window.innerWidth/270)
    clickCounter += 1;
    if (itemNumber - (3 + clickCounter) + (4-ratio)>= 0) {
      movielists[id].style.transform = `translateX(${
        movielists[id].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movielists[id].style.transform = `translateX(0)`;
      clickCounter = 0;
    }
  });
  console.log(itemNumber);
  console.log(clickCounter);
});

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click",()=>{
  items.forEach((item)=>{
    item.classList.toggle("active")
  })
  ball.classList.toggle("active")
})