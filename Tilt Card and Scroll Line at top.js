const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});

// import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";
// const scrollTracker = document.querySelector(".scroll-tracker");
// const scrollTrackingTimeline = new ScrollTimeline ({
//   source: document.scrollingElement,
//   orientation: "block",
//   scrollOffsets: [CSS.percent(0), CSS.percent(100)]
// });

// scrollTracker.animate(
//   {
//     transform: ["scaleX(0)", "scaleX(1)"]
//   },
//   {
//     duration: 1,
//     timeline: scrollTrackingTimeline,
//   }
// )


// const animatedImages = document.querySelectorAll(".image-rotate-in");

// animatedImages.forEach((image) => {
//   const imageOffsetTop = image.offsetTop;
//   const imageHeight = image.offsetHeight;

//   image.animate(
//     {
//       transform: [
//         "perspective(500px) rotateX(90deg)", 
//         "perspective(500px) rotate(0deg)",
//       ],
//       opacity: [ "0", "1"],
//     },
//     {
//       duration: 1,
//       easing: "linear",
//       timeline: new ScrollTimeline({
//         scrollOffsets: [
//           CSS.px(imageOffsetTop + imageHeight - window.innerHeight + 500),
//           CSS.px(imageOffsetTop + 0),
//         ],
//       }),
//     }
//   );
// });

