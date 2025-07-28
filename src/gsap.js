import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { Observer } from "gsap/Observer";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { isMobile } from "./script";
import { data } from "./data.js";

gsap.registerPlugin(
  ScrollTrigger,
  ScrollSmoother,
  SplitText,
  Observer,
  MotionPathPlugin
);

// Loading
window.addEventListener("load", async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate loading delay
  const loadingTimeline = gsap.timeline();
  document.querySelector("#loading-screen .loader-wrapper p").innerHTML =
    "Assets loaded!";
  loadingTimeline.to("#loading-screen .loader-wrapper", {
    opacity: 0,
    onStart: () => {},
    onComplete: () => {
      document.querySelector("#loading-screen .loader-wrapper").remove();
    },
  });
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate loading delay
  document.querySelector("#loading-screen .wrapper").classList.remove("hidden");
  let loadingSplit = {};
  document.fonts.ready.then(() => {
    loadingSplit.greetings = SplitText.create(
      "#loading-screen p:nth-child(1)",
      {
        type: "words, lines",
      }
    );
    loadingSplit.username = SplitText.create("#loading-screen h1", {
      type: "words, lines",
    });
    loadingSplit.job = SplitText.create("#loading-screen h2", {
      type: "words, lines",
    });
    loadingTimeline.from(loadingSplit.greetings.words, {
      y: 20,
      opacity: 0.9,
      autoAlpha: 0,
      stagger: 0.05,
    });
    loadingTimeline.from(loadingSplit.username.words, {
      x: -20,
      autoAlpha: 0,
      stagger: 0.05,
    });
    loadingTimeline.from(loadingSplit.job.words, {
      x: -20,
      autoAlpha: 0,
      stagger: 0.05,
    });

    loadingTimeline.from("#loading-screen button", {
      y: 20,
      opacity: 1,
      autoAlpha: 0,
      duration: 0.5,
    });
  });

  document
    .querySelector("#loading-screen button")
    .addEventListener("click", () => {
      loadingTimeline.to("#loading-screen button", {
        y: 20,
        autoAlpha: 0,
        duration: 0.2,
      });
      let transitions = {};
      if (window._scrollTop() < 5) {
        transitions.timeline = mainTimeline;
        transitions.h1 = {
          translateX: "50%",
          left: document.querySelector("aside h1").offsetLeft + "px",
          top: document.querySelector("aside h1").offsetTop + "px",
        };
        transitions.h2 = {
          translateX: "50%",
          left: document.querySelector("aside h2").offsetLeft + "px",
          top: document.querySelector("aside h2").offsetTop + "px",
        };
      } else {
        transitions.timeline = gsap;
        transitions.h1 = {};
        transitions.h2 = {};
      }
      // loadingTimeline.to(loadingSplit.job.lines, {
      //   y: 20,
      //   autoAlpha: 0,
      //   stagger: 0.2,
      // });
      // loadingTimeline.to(loadingSplit.username.lines, {
      //   y: 20,
      //   autoAlpha: 0,
      //   stagger: 0.2,
      // });
      loadingTimeline.to(loadingSplit.greetings.lines, {
        y: 20,
        autoAlpha: 0,
        stagger: 0.2,
      });
      transitions.timeline.to("#loading-screen .wrapper h1", transitions.h1);
      gsap.to("#loading-screen .wrapper h2:nth-child(1)", {
        opacity: 0,
      });
      gsap.to("#loading-screen .wrapper h2:nth-child(2)", {
        opacity: 1,
      });
      transitions.timeline.to(
        "#loading-screen .wrapper h2:nth-child(2)",
        transitions.h2
      );

      loadingTimeline.to("#loading-screen", {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          document.querySelector("#loading-screen").remove();
        },
      });
      loadingTimeline.to("body", {
        overflowY: "auto",
      });
    });
  // Keterampilan GSAP
  let gsapKeterampilans = gsap.utils.toArray("#keterampilan .panel");

  const gsapKeterampilan = gsap.to(gsapKeterampilans, {
    xPercent: -100 * (gsapKeterampilans.length - 1),
    ease: "none",
    scrollTrigger: {
      start: "top center-=250",
      trigger: "#keterampilan",
      pin: true,
      scrub: 1,
      end: () => "+=" + document.querySelector("#keterampilan").offsetWidth,
    },
  });
  // Main Timeline
  const mainTimeline = gsap.timeline();
  gsap.to("#scroll-down-arrow > div", {
    opacity: 0,
    duration: 1,
    yPercent: -100,
    ease: "power2.inOut",
    scrollTrigger: {
      start: "center center-=250",
      trigger: "#tentang",
      scrub: 1,
      end: () =>
        "+=" + document.querySelector("#scroll-down-arrow > div").offsetHeight,
    },
  });
  gsap.to("#paper-plane", {
    opacity: 1,
    duration: 1,
    ease: "power2.inOut",
    scrollTrigger: {
      start: "center center-=250",
      trigger: "#tentang",
      scrub: 1,
      end: () =>
        "+=" + document.querySelector("#scroll-down-arrow > div").offsetHeight,
    },
  });
  // Paper plane
  // Use viewport or container percentage
  const pengalamanPath = {
    height: document.querySelector("#pengalaman").offsetHeight - 50,
    heightEach:
      document.querySelector("#pengalaman").offsetHeight /
        data.pengalaman.length -
      50,
  };
  const paperPlane = {
    path: [
      {
        x: -1200,
        y: pengalamanPath.heightEach * 1 - 50,
      },
      {
        x: 100,
        y: pengalamanPath.heightEach * 1 - 50,
      },
      {
        x: 100,
        y: pengalamanPath.heightEach * 1 - 50,
      },
      {
        x: 100,
        y: pengalamanPath.heightEach * 1 - 50,
      },
      {
        x: 150,
        y: pengalamanPath.heightEach * 3 - 50,
      },
      {
        x: 1200,
        y: pengalamanPath.heightEach * 5 - 50,
      },
    ],
    autoRotate: true,
    type: "cubic",
  };
  console.log(paperPlane.path);

  const scaledPath = paperPlane.path.map(({ x, y }) => {
    return {
      x: x * rx,
      y: y * ry,
    };
  });
  let rotateTo = gsap.quickTo("#paper-plane", "rotation"),
    prevDirection = 0;
  gsap.to("#paper-plane", {
    scrollTrigger: {
      trigger: "#content-wrapper",
      start: "top center+=400",
      end: () =>
        "+=" +
        document.querySelector("#pengalaman").getBoundingClientRect().height,
      scrub: 1.5,
      marker: true,
      // onUpdate: (self) => {
      //   if (prevDirection !== self.direction) {
      //     // only run this when we're changing direction
      //     rotateTo(self.direction === 0 ? 1 : -180);
      //     prevDirection = self.direction;
      //   }
      // },
    },
    ease: "none",
    immediateRender: true,
    motionPath: {
      path: scaledPath, // Add this property
      align: "self",
      alignOrigin: [0.5, 0.5],
      autoRotate: true,
      curviness: 2,
    },
    duration: 5,
  });

  window.addEventListener("resize", function () {
    ScrollTrigger.refresh();
  });
  document.querySelector("#gsap-status").classList.remove("hidden");
});

const rx = window.innerWidth < 1000 ? window.innerWidth / 1200 : 1;
const ry = window.innerHeight < 700 ? window.innerHeight / 1200 : 1;
