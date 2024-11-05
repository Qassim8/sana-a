// Thumbs Up Animation
function clicked(e) {
  if (e.target.classList.contains("thumb-up-animation")) {
    e.target.classList.remove("thumb-up-animation");
  } else {
    e.target.classList.add("thumb-up-animation");
  }
  let fill = e.target.getAttribute("fill");
  if (fill == "blue") {
    e.target.setAttribute("fill", "gray");
  } else {
    e.target.setAttribute("fill", "blue");
  }
}

// FAQ Show And Hide
function toggleHandler(e) {
  const parent = e.target.parentElement;
  console.log(parent.nextElementSibling.classList.contains("hide"));
  parent.nextElementSibling.classList.toggle("block" ? "hide" : "block");
  if (parent.nextElementSibling.classList.contains("hide")) {
    e.target.innerHTML = "+";
  } else if (parent.nextElementSibling.classList.contains("block")) {
    e.target.innerHTML = "-";
  }
}

// ***********************************************************************

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    speed: 300,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      200: { slidesPerView: 2, spaceBetween: 20 },
      768: { slidesPerView: 3, spaceBetween: 30 },
      1024: { slidesPerView: 5, spaceBetween: 40 },
    },
  });
});

/************************************************* */
const translateBtn = document.querySelector(".translator");
const paragraph = document.querySelector(".translator p");

if (localStorage.getItem("lang")) {
  paragraph.innerHTML = localStorage.getItem("lang");
}

if (localStorage.getItem("dir")) {
  document.body.style.direction = localStorage.getItem("dir");
}

if (localStorage.getItem("margin")) {
  translateBtn.style.cssText = localStorage.getItem("margin");
}

translateBtn.onclick = () => {
  if (
    paragraph.innerHTML == "English" &&
    document.body.style.direction == "rtl"
  ) {
    localStorage.setItem("lang", "العربية");
    if (localStorage.getItem("lang")) {
      paragraph.innerHTML = localStorage.getItem("lang");
    }
    localStorage.setItem("margin", "margin-left: 30px; margin-right: 0;");
    if (localStorage.getItem("margin")) {
      translateBtn.style.cssText = localStorage.getItem("margin");
    }
    localStorage.setItem("dir", "ltr");
    if (localStorage.getItem("dir")) {
      document.body.style.direction = localStorage.getItem("dir");
    }
  } else {
    localStorage.setItem("lang", "English");
    if (localStorage.getItem("lang")) {
      paragraph.innerHTML = localStorage.getItem("lang");
    }
    document.body.style.direction = "rtl";
    localStorage.setItem("margin", "margin-right: 30px; margin-left: 0;");
    if (localStorage.getItem("margin")) {
      translateBtn.style.cssText = localStorage.getItem("margin");
    }
    localStorage.setItem("dir", "rtl");
    if (localStorage.getItem("dir")) {
      document.body.style.direction = localStorage.getItem("dir");
    }
  }
};
/*************************************************************** */
