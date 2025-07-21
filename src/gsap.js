import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

// Gsap Data
let gsapDatas = gsap.utils.toArray(".gsap-data > div");

gsap.set(gsapDatas, { opacity: 0, yPercent: 150 });
const pengalamanTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#data-pengalaman",
    start: "top center+=250",
    end: "bottom center",
    scrub: true,
  },
});
gsapDatas.forEach((el) => {
  pengalamanTimeline.to(
    el,
    { opacity: 1, yPercent: 0, duration: 0.5 },
    "+=0.2"
  );
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

document.fonts.ready.then(() => {
  gsap.set(".gsap-section-tigsapTimelineKeterampilane", { opacity: 1 });

  document.fonts.ready.then(() => {
    let containers = gsap.utils.toArray(".scm-section");

    containers.forEach((container) => {
      let text = container.querySelector(".gsap-section-title");
      let animation;

      SplitText.create(text, {
        type: "words,lines",
        mask: "lines",
        linesClass: "line",
        autoSplit: true,
        onSplit: (instance) => {
          return gsap.from(instance.lines, {
            yPercent: 120,
            stagger: 0.1,
            scrollTrigger: {
              trigger: text,
              scrub: true,
              start: "clamp(top center)",
              end: "clamp(bottom center)",
            },
          });
        },
      });
    });
  });
});
