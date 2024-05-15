import gsap from "gsap";

export const animatePageIn = () => {
  const introTop = document.getElementById("intro-top");
  const introBottom = document.getElementById("intro-bottom");

  if (introTop && introBottom) {
    const tl = gsap.timeline();

    tl.set([introTop], {
      xPercent: 0,
    }).to([introTop], {
      xPercent: 100,
    });
    tl.set([introBottom], {
      xPercent: 0,
    }).to([introBottom], {
      xPercent: -100,
    });
  }
};
