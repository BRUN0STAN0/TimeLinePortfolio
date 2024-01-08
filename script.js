window.onscroll = function (ev) {
  if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
    var ready = document.querySelectorAll(".ready");
    ready.forEach((element) => {
      element.classList.remove("ready");
      element.classList.add("ready-transition");
    });
  } else {
    var ready = document.querySelectorAll(".ready-transition");
    ready.forEach((element) => {
      element.classList.remove("ready-transition");
      element.classList.add("ready");
    });
  }
};

var please_scroll_div_lighting = document.querySelectorAll(".please-scroll");
please_scroll_div_lighting.forEach((element) => {
  // every second disappear and appear
  setInterval(function () {
    element.classList.toggle("please-scroll-lighting");
  }, 100);
});
