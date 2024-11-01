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

document.getElementById("submit").addEventListener("submit", function (event) {
  event.preventDefault(); // منع إرسال النموذج تلقائيًا

  // إعداد بيانات النموذج
  const templateParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    location: document.getElementById("location").value,
    feedback: document.getElementById("feedback").value,
  };

  // إرسال البريد باستخدام EmailJS
  emailjs.send("service_d29d1gm", "template_j7onfw8", templateParams).then(
    function (response) {
      alert("Email sent successfully!");
    },
    function (error) {
      alert("Failed to send email, please try again later.");
    }
  );
});
