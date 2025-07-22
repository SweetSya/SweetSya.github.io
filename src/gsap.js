import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

// Loading
window.addEventListener("load", () => {
  document.querySelector("#loading-screen .wrapper").classList.remove("hidden");
  const loadingTimeline = gsap.timeline();

  let loadingSplit = Object;

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
      loadingTimeline.to("#loading-screen h1", {
        translateX: "50%",
        left: document.querySelector("aside h1").offsetLeft + "px",
        top: document.querySelector("aside h1").offsetTop + "px",
      });
      loadingTimeline.to("#loading-screen h2", {
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
    });
});
// Pengalaman
document.fonts.ready.then(() => {
  gsap.set("#pengalaman .gsap-section-title", { opacity: 1 });

  let pengalamanTitle = document.querySelector(
    "#pengalaman .gsap-section-title"
  );

  SplitText.create(pengalamanTitle, {
    type: "words,lines",
    mask: "lines",
    linesClass: "line",
    autoSplit: true,
    onSplit: (instance) => {
      return gsap.from(instance.lines, {
        yPercent: 120,
        stagger: 0.1,
        scrollTrigger: {
          trigger: pengalamanTitle,
          scrub: true,
          start: "top center+=50",
          end: "clamp(bottom center)",
        },
      });
    },
  });
});
let gsapDatas = gsap.utils.toArray(".gsap-data > div");

gsap.set(gsapDatas, { opacity: 0, yPercent: 50 });
const pengalamanTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#data-pengalaman",
    start: "top center+=150",
    end: "bottom center",
    // scrub: true,
  },
});
gsapDatas.forEach((el) => {
  pengalamanTimeline.to(el, { opacity: 1, yPercent: 0, duration: 1 }, "+=0.2");
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

const gsapTimelineKeterampilan = gsap.timeline({
  scrollTrigger: {
    trigger: "#keterampilan .panel:nth-child(2)",
    start: "top center",
    end: () => "+=" + document.querySelector("#keterampilan").offsetWidth,
    scrub: true,
  },
});

gsapTimelineKeterampilan.to("#keterampilan .showcase", {
  duration: 2,
  x: "-20%",
  stagger: 0.2,
});
