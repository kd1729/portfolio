// animation for hero section
let tl = gsap.timeline({defaults: {duration: 2}});

// animation for about me
let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".intro"
    }
});

// animation for skills section
let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".skills"
    }
});

// animation for projects section
let tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".projects",
        start: "top center"
    }
});

// animation for contact me section
let tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".contact"
    }
});

// animation for strengths section
let tl6 = gsap.timeline({
    scrollTrigger: {
        trigger: ".strengths"
    }
});

tl.from(".fade", {opacity: 0, delay: .7, stagger: .3});
tl2.from(".stagger", {opacity: 0, stagger: .3, duration: 2, y: 40, delay: .5});
tl3.from(".skill-card", {opacity: 0, stagger: .3, duration: 2, y: 40, delay: .5});
tl4.from(".grid-item", {opacity: 0, stagger: .3, duration: 2, y: 40, delay: .5});
tl5.from(".scroll", {opacity: 0, stagger: .3, duration: 2, y: 40, delay: .5});
tl6.from(".strength-card", {opacity: 0, stagger: .3, duration: 2, y: 40, delay: .5});

const handlesubmit = () => {
    if (confirm("Message Send Successfully")) {
      window.location.href = "https://onlykingkd.github.io/portfolio/";
      return false;
  }
  }
