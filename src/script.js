// This file is part of SweetSya.github.io
import { data } from "./data.js";

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
      "hover:bg-slate-100/15 p-5 rounded-md border-b-slate-50/30 transition-all duration-150 -ml-3";
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
        `" class="swiper-slide !w-fit py-5">
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
      "hover:bg-slate-100/15 p-5 rounded-md border-b-slate-50/30 transition-all duration-150 -ml-3";
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
  // Inisiasi data keterampilan
  let cycle = 2;
  for (let i = 0; i < cycle; i++) {
    for (var terampil in data) {
      let items = data[terampil];
      let parents = document.querySelectorAll(
        "#keterampilan .panel .showcase." + terampil
      );
      items.forEach((item) => {
        parents.forEach((parent) => {
          let img = document.createElement("img");
          if (isMobile()) {
            img.className = "h-16 w-16 object-contain p-3 border bg-white m-1";
          } else {
            img.className = "h-20 w-20 object-contain p-3 border bg-white m-1";
          }
          img.src = item.link;
          img.alt = item.name;
          parent.appendChild(img);
        });
      });
    }
  }
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
  for (let x = section.length - 1; x >= 0; x--) {
    // anchor are position of the top of the page (0 at the start)
    var anchor = document.documentElement.scrollTop + 300;
    // distanceToTop is the position of the top of the section
    // If section are the first element (x == 0), distanceToTop is -1
    // ensure that the first section nav is always active when the page is at the top
    if (x == 0) {
      var distanceToTop = -1;
    } else {
      var distanceToTop =
        window.scrollY + section[x].getBoundingClientRect().top;
    }
    // if the anchor is greater than the distance to the top of the section
    if (anchor > distanceToTop) {
      // change the active side bar link
      changeNavClass(section, section[x].id, x);
      break;
    }
  }
};
const changeNavClass = (section, id) => {
  const navBars = document.querySelectorAll(".nav-bars");
  const navLink = document.querySelectorAll(".nav-link");
  // swhitch the class of the active and inactive nav link
  for (let x = 0; x < section.length; x++) {
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
// Check if the user are on mobile or desktop
const isMobile = () => {
  let check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};
const initiateBackground = () => {
  const bgWrapper = document.querySelector("#bg-wrapper");
  // if mobile, use video background
  // else use image background
  if (isMobile()) {
    bgWrapper.querySelector("video")?.remove();
  } else {
    bgWrapper.querySelector("video")?.classList.remove("hidden");
    bgWrapper.querySelector("img")?.remove();
  }
};
const start = async () => {
  initiateBackground();
  initiatePengalaman(data.pengalaman);
  initiateKeterampilan(data.keterampilan);
  initiateProyek(data.proyek);
  document.addEventListener("scroll", () => {
    whichElementInViewport();
  });
  whichElementInViewport();

  // Dynamically import gsap.js after start logic
  await import("./gsap.js");
};
document.addEventListener("DOMContentLoaded", (event) => {
  start();
});
