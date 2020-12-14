"use strict";

$(document).ready(function () {
  $(window).scroll(function () {
    // check if scroll event happened
    if ($(document).scrollTop() >= 10) {
      $(".navbar").css({
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        borderBottom: "1px solid black",
      });
      $(".navbar-collapse").css({
        backgroundColor: "transparent",
      });
    } else {
      $(".navbar").css({
        backgroundColor: "transparent",
        borderBottom: "0px solid black",
      });
    }
  });

  gsap.from(".btnContact", {
    duration: 1,
    y: "200%",
    rotation: 30,
    ease: "bounce.out",
  });
});
