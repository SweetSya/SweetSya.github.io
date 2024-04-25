// Inisiasi data pengalaman dari data.js
const initiatePengalaman = (data) => {
  let parentElement = document.querySelector("#data-pengalaman");
  data.forEach((item) => {
    let detils = "";
    item.detil.forEach((detil) => {
      detils +=
        `<li class="text-sm bg-gradient-to-bl from-indigo-500/20 to-teal-400/20 text-cyan-50 px-3 py-1 rounded-lg text-nowrap">` +
        detil +
        `</li>`;
    });
    let link = document.createElement("div");
    link.className =
      "hover:bg-slate-100/5 p-5 rounded-md border-b-slate-50/30 transition-all duration-150 -ml-3";
    link.innerHTML =
      `
        <div class="text-sm tracking-wide mb-2 opacity-80 font-semibold">
        ` +
      item.tahun +
      `
        </div>
        <a href="` +
      item.link +
      `" target="_blank" class="text-white font-semibold underline pb-1 transition-all duration-150">
        ` +
      item.title +
      `
        <i class="iconoir-arrow-up-right before:w-4 before:h-4"></i>
        </a>
        <div>` +
      item.desc +
      `</div>
        <ul class="flex flex-wrap gap-3 mt-2">
            ` +
      detils +
      `
        </ul>`;
    parentElement.appendChild(link);
  });
};

// Inisiasi data proyek dari data.js
const initiateProyek = (data) => {
  let parentElement = document.querySelector("#data-proyek");
  data.forEach((item) => {
    let headLink = "";
    if (item.type == "both") {
      headLink =
        `
      <a href="` +
        item.link.github +
        `" target="_blank">
        <i class="hover:bg-slate-100/20 rounded-full iconoir-github-circle before:w-7 before:h-7 p-1 transition-all duration-150"></i> 
      </a>
      <a href="` +
        item.link.web +
        `" target="_blank">
        <i class="hover:bg-slate-100/20 rounded-full iconoir-internet before:w-7 before:h-7 p-1 transition-all duration-150"></i>
        </a>`;
    }
    if (item.type == "web") {
      headLink =
        `
      <a href="` +
        item.link.web +
        `" target="_blank">
        <i class="hover:bg-slate-100/20 rounded-full iconoir-internet before:w-7 before:h-7 p-1 transition-all duration-150"></i>
        </a>`;
    }
    if (item.type == "github") {
      headLink =
        `
      <a href="` +
        item.link.github +
        `" target="_blank">
        <i class="hover:bg-slate-100/20 rounded-full iconoir-github-circle before:w-7 before:h-7 p-1 transition-all duration-150"></i> 
      </a>`;
    }
    let detils = "";
    item.detil.forEach((detil) => {
      detils +=
        `<li class="text-sm bg-gradient-to-bl from-indigo-500/20 to-teal-400/20 text-cyan-50 px-3 py-1 rounded-lg text-nowrap">` +
        detil +
        `</li>`;
    });
    let images = "";
    item.image.forEach((image) => {
      images +=
        `
      <a href="` +
        image +
        `" class="swiper-slide w-fit py-5 -ml-5">
        <img class="object-contain max-h-60"
          src="` +
        image +
        `"
          alt=""
          class="shadow-sm shadow-white/80 rounded-md"
        />
      </a>`;
    });
    let div = document.createElement("div");
    div.className =
      "hover:bg-slate-100/5 p-5 rounded-md border-b-slate-50/30 transition-all duration-150 -ml-3";
    div.innerHTML =
      `
        <div class="flex justify-between">
          <span class="font-semibold text-white">` +
      item.title +
      `</span>
          <span>` +
      headLink +
      `</span>
        </div>
        <div>
          ` +
      item.desc +
      `
        </div>
        <div>
          <ul class="flex flex-wrap gap-3 mt-2">
            ` +
      detils +
      `
          </ul>
        </div>
        <div class="swiper swiper-proyek-img">
          <div class="swiper-wrapper light-image">
            ` +
      images +
      `
          </div>
        </div>
    `;
    parentElement.appendChild(div);
  });
  // Swiper foto proyek
  var swiperProyek = new Swiper(".swiper-proyek-img", {
    slidesPerView: "auto",
    spaceBetween: 30,
  });
  // LightGallery foto proyek
  document.querySelectorAll(".light-image").forEach((element) => {
    lightGallery(element, {});
  });
};

// Inisiasi data keterampilan dari data.js
const initiateKeterampilan = (data) => {
  for (var terampil in data) {
    let items = data[terampil];
    let parents = document.querySelectorAll(".swiper-" + terampil);
    items.forEach((item) => {
      parents.forEach((parent) => {
        div = document.createElement("div");
        div.className =
          "swiper-slide flex justify-center items-center w-12 h-12";
        div.innerHTML =
          `<img src="` +
          item.link +
          `" alt="` +
          item.name +
          `" class="h-full">`;
        parent.appendChild(div);
      });
    });
  }

  // Swiper Keterampilan
  var swiperKeterampilan = new Swiper(".swiper-keterampilan", {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 4000,
    autoplay: {
      delay: 0,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
    freemode: true,
    loop: true,
  });
};

// Event listener untuk nav-link
const navlink = document.querySelectorAll(".nav-link");

navlink.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const anchor = e.currentTarget.getAttribute("href");
    document.querySelector(anchor).scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  });
});

const whichElementInViewport = () => {
  var section = document.querySelectorAll(".scm-section");
  for (x = section.length - 1; x >= 0; x--) {
    var anchor =
      document.documentElement.scrollTop + Math.round(window.innerHeight / 2);
    var distanceToTop = window.scrollY + section[x].getBoundingClientRect().top;

    if (anchor > distanceToTop) {
      changeNavClass(section, section[x].id, x);
      break;
    }
  }
};
const changeNavClass = (section, id) => {
  const navBars = document.querySelectorAll(".nav-bars");
  const navLink = document.querySelectorAll(".nav-link");
  for (x = 0; x < section.length; x++) {
    if (section[x].id == id) {
      if (!navBars[x].classList.contains("max-w-24")) {
        navBars[x].classList.add("max-w-24");
        navLink[x].classList.add("opacity-100");
      }
    } else {
      if (navBars[x].classList.contains("max-w-24")) {
        navBars[x].classList.remove("max-w-24");
        navLink[x].classList.remove("opacity-100");
      }
    }
  }
};
const start = () => {
  initiatePengalaman(data.pengalaman);
  initiateKeterampilan(data.keterampilan);
  initiateProyek(data.proyek);
  document.addEventListener("scroll", () => {
    whichElementInViewport();
  });
  whichElementInViewport();
};

document.addEventListener("DOMContentLoaded", (event) => {
  start();
});
