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
  // Check for initial-scroll-down bottom placement
  let propertyInitialScrollFrom;
  if (
    document.querySelector("#tentang .wrapper").getBoundingClientRect().bottom >
    window.innerHeight - 100
  ) {
    console.log("Mobile or Tablet");
    mainTimeline.to(".initial-scroll-down", {
      y: 40,
    });
  } else {
    mainTimeline.to(".initial-scroll-down", {
      y: -90,
    });
  }
  mainTimeline.from(".initial-scroll-down", {
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
      trigger: ".initial-scroll-down",
      start: "top bottom-=100",
      end: "bottom bottom-=200", // fade out as you scroll past
      scrub: 1, // smooth animation based on scroll
      // markers: true,
      onLeave: () => {
        mainTimeline.to("#tentang", {
          opacity: 0,
          yPercent: -100,
          duration: 0.5,
          onStart: () => {
            document.body.classList.add("overflow-y-hidden");
          },
          onComplete: () => {
            document.querySelector("#tentang").classList.add("hidden");
            document
              .querySelector("#content-wrapper")
              .classList.remove("hidden");
            window._scrollTop(0);
            setTimeout(() => {
              ScrollTrigger.refresh();
            }, 50); // remove after fade out
            gsap.to("#content-wrapper", {
              opacity: 1,
              marginTop:
                -1 * document.querySelector("#tentang").offsetHeight - 100,
              duration: 0.5,
              onComplete: () => {
                setTimeout(() => {
                  document.body.classList.remove("overflow-y-hidden");
                }, 500);
              },
            });
          },
        });
      },
    },
  });
  let observerHitTop = false;
  Observer.create({
    onChangeY: (self) => {
      // Only reveal the initial-scroll-up when scrolled to the top
      if (window.scrollY == 0 && !observerHitTop) {
        console.log("Scroll hit the top");
        gsap.to(".initial-scroll-up > div", {
          opacity: 1,
          autoAlpha: 1,
          duration: 0.5,
          onStart: () => {
            document
              .querySelector(".initial-scroll-up > div")
              .classList.add("bounce-animation");
          },
          oncComplete: () => {
            document
              .querySelector(".initial-scroll-up")
              .classList.add("continue-scroll-up");
          },
          ease: "power2.inOut",
        });
        observerHitTop = true;
      }
      // Scroll up to the first page
      if (
        window.scrollY == 0 &&
        document.querySelector(".initial-scroll-up.continue-scroll-up")
      ) {
        document
          .querySelector(".initial-scroll-up.continue-scroll-up")
          .classList.remove("continue-scroll-up");
        gsap.to(".initial-scroll-up > div", {
          opacity: 0,
          autoAlpha: 0,
          duration: 0.5,
          onComplete: () => {
            document.querySelector("#content-wrapper").classList.add("hidden");
            document
              .querySelector(".initial-scroll-up")
              .classList.remove("continue-scroll-up");
            document.querySelector("#tentang").classList.remove("hidden");
            window._scrollTop(0);
            gsap.to("#tentang", {
              opacity: 1,
              yPercent: 0,
              duration: 0.5,
              onComplete: () => {
                setTimeout(() => {
                  document.body.classList.remove("overflow-y-hidden");
                }, 500);
              },
            });
            gsap.to("initial-scroll-down > div", {
              opacity: 1,
              autoAlpha: 1,
              duration: 0.5,
            });
            setTimeout(() => {
              ScrollTrigger.refresh();
            }, 50); // remove after fade out
          },
          ease: "power2.inOut",
        });
        gsap.to("#content-wrapper", {
          opacity: 0,
          marginTop: 0,
          duration: 0.5,
          onComplete: () => {
            setTimeout(() => {
              document.body.classList.add("overflow-y-hidden");
            }, 500);
          },
        });
      }
      if (window.scrollY != 0 && observerHitTop) {
        console.log("Scroll move from top");
        gsap.to(".initial-scroll-up", {
          opacity: 0,
          autoAlpha: 0,
          duration: 0.5,
          onComplete: () => {
            document
              .querySelector(".initial-scroll-up > div")
              .classList.remove("bounce-animation");
          },
        });
        observerHitTop = false;
      }
    },
  });
  window.addEventListener("resize", function () {
    ScrollTrigger.refresh();
  });
});
