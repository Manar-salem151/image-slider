// #################################################################################

const next = document.getElementById("next");
const pre = document.getElementById("pre");
const dots = document.querySelectorAll(".dot-container button");
const imgs = document.querySelectorAll(".image-container img");

let i = 1;
function updateActiveImage(index) {ف
  imgs.forEach((img) => img.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("on"));
  imgs[index - 1].classList.add("active");
  dots[index - 1].classList.add("on");
}

next.addEventListener("click", function (e) {
  if (i === imgs.length) {
    e.preventDefault();
  } else {
    document.getElementById("content-" + i).classList.remove("active");
    i++;
    document.getElementById("content-" + i).classList.add("active");
    updateActiveImage(i);
  }
});

pre.addEventListener("click", function (e) {
  if (i === 1) {
    e.preventDefault();
  } else {
    document.getElementById("content-" + i).classList.remove("active");
    i--;
    document.getElementById("content-" + i).classList.add("active");
    updateActiveImage(i);
  }
});

dots.forEach((dot,index) => {
  dot.addEventListener("click", function () {
    updateActiveImage(index+1);
  });
});
