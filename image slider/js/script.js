// #################################################################################

const next = document.getElementById("next");
const pre = document.getElementById("pre");
const dots = document.querySelectorAll(".dot-container button");
const imgs = document.querySelectorAll(".image-container img");

let i = 1;

// فانكشن هتهندل الصوره و البوليتس الاكتف وتشيل منهم كلهم الاول كلاس الاكتف وبعدين هضيفه ع الصوره اللي بختهرها
function updateActiveImage(index) {
  //هنا شيلت كل الكلاس الاكتف
  imgs.forEach((img) => img.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("on"));
  // هنا ضفت  الكلاس الاكتف
  //هنا انديكس ناقص 1 عشان اجيب الصور من الاول لان في ال في اتش تي ام ال بادء من 1 اما هنا الاندكس بادء من 0
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
        //هنا بهندل الفانكشن
        //i طبعا عشان انا معرف رقم الصوره فووق بيها i === imgs.length
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
        //هنا بهندل الفانكشن
        //i طبعا عشان انا معرف رقم الصوره فووق بيها i === imgs.length
  }
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", function () {
    updateActiveImage(index + 1);
  });
});
