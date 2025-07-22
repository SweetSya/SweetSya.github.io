import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, Observer);

// Loading
window.addEventListener("load", async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate loading delay
  const loadingTimeline = gsap.timeline();
  document.querySelector("#loading-screen .loader-wrapper p").innerHTML =
    "Assets loaded!";
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate loading delay
  loadingTimeline.to("#loading-screen .loader-wrapper", {
    opacity: 0,
    onStart: () => {},
    onComplete: () => {
      document.querySelector("#loading-screen .loader-wrapper").remove();
    },
  });
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
      loadingTimeline.to("#loading-screen .wrapper h1", {
        translateX: "50%",
        left: document.querySelector("aside h1").offsetLeft + "px",
        top: document.querySelector("aside h1").offsetTop + "px",
      });
      gsap.to("#loading-screen .wrapper h2:nth-child(1)", {
        opacity: 0,
      });
      gsap.to("#loading-screen .wrapper h2:nth-child(2)", {
        opacity: 1,
      });
      loadingTimeline.to("#loading-screen .wrapper h2:nth-child(2)", {
        translateX: "50%",
        left: document.querySelector("aside h2").offsetLeft + "px",
        top: document.querySelector("aside h2").offsetTop + "px",
      });
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

  // const gsapTimelineKeterampilan = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: "#keterampilan .panel:nth-child(2)",
  //     start: "top center",
  //     end: () => "+=" + document.querySelector("#keterampilan").offsetWidth,
  //     scrub: true,
  //   },
  // });

  // gsapTimelineKeterampilan.to("#keterampilan .showcase", {
  //   duration: 2,
  //   x: "-20%",
  //   stagger: 0.2,
  // });
  // Main Timeline
  const mainTimeline = gsap.timeline();
  // Tentang
  mainTimeline.from("#tentang .pharagraphs", {
    x: 20,
    opacity: 0,
    autoAlpha: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: "power2.inOut",
  });
  // Scroll down timeline
  mainTimeline.from(".initial-scroll-down", {
    y: 20,
    opacity: 0,
    autoAlpha: 0,
    duration: 0.5,
    onStart: () => {
      document
        .querySelector(".initial-scroll-down > div")
        .classList.add("bounce-animation");
    },
    ease: "power2.inOut",
  });
  mainTimeline.to(".initial-scroll-down > .absolute", {
    opacity: 0,
    duration: 2,
    ease: "none",
    scrollTrigger: {
      trigger: ".initial-scroll-down > .absolute",
      start: "top bottom-=100",
      end: "bottom bottom-=200", // fade out as you scroll past
      scrub: 1, // smooth animation based on scroll
      onLeave: () => {
        gsap.to("#tentang", {
          opacity: 0,
        });
        gsap.to("#pengalaman", {
          marginTop: "-60%",
        });
        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 500); // remove after fade out
      },
      onEnterBack: () => {
        gsap.to("#tentang", {
          opacity: 1,
        });
        gsap.to("#pengalaman", {
          marginTop: 0,
        });
      },
    },
  });
});
