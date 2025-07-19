import { gsap } from "gsap";
import { Timeline } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Keterampilan GSAP
let keterampilans = gsap.utils.toArray("#keterampilan .panel");

gsap.to(keterampilans, {
  xPercent: -100 * (keterampilans.length - 1),
  ease: "none",
  scrollTrigger: {
    start: "top center-=250",
    trigger: "#keterampilan",
    pin: true,
    scrub: 1,
    end: () => "+=" + document.querySelector("#keterampilan").offsetWidth,
  },
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#keterampilan .panel:nth-child(2)",
    start: "top center",
    end: () => "+=" + document.querySelector("#keterampilan").offsetWidth,
    scrub: true,
  },
});

tl.to("#keterampilan .showcase", {
  duration: 2,
  x: "-30%",
  stagger: 0.2,
});

gsap.to("#keterampilan .panel:nth-child(1)", {
  duration: 2,
  x: "125%",
  // y: "-65%",
  scale: 0.9,
  stagger: 0.4, // each starts 0.4s after the previous
  scrollTrigger: {
    trigger: "#keterampilan .panel:nth-child(2)",
    start: "top center",
    end: () => "+=" + document.querySelector("#keterampilan").offsetWidth,
    scrub: true,
  },
});
