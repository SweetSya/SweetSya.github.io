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
  MotionPathPlugin,
);

// Loading
window.addEventListener("load", async () => {
  if (sessionStorage.getItem("welcoming") === null) {
    await new Promise((resolve) => setTimeout(resolve, 0)); // Simulate loading delay
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
    await new Promise((resolve) => setTimeout(resolve, 0)); // Simulate loading delay
    document
      .querySelector("#loading-screen .wrapper")
      .classList.remove("hidden");
    let loadingSplit = {};
    document.fonts.ready.then(() => {
      loadingSplit.greetings = SplitText.create(
        "#loading-screen p:nth-child(1)",
        {
          type: "words, lines",
        },
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
          transitions.h2,
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

        sessionStorage.setItem("welcoming", "false");
      });
  }
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

  window.addEventListener("resize", function () {
    ScrollTrigger.refresh();
  });
  // document.querySelector("#gsap-status").classList.remove("hidden");
});

const rx = window.innerWidth < 1000 ? window.innerWidth / 1200 : 1;
const ry = window.innerHeight < 700 ? window.innerHeight / 1200 : 1;
