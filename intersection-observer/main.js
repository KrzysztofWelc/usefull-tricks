const targets = document.querySelectorAll("img");

// inefficient way :(

// window.addEventListener("scroll", e => {
//   targets.forEach(img => {
//     console.log(1);
//     const rec = img.getBoundingClientRect().top; // distance to top of the view port
//     if (rec - 50 <= window.innerHeight) {
//       const src = img.getAttribute("data-lazy");
//       img.setAttribute("src", src);
//       img.classList.add("shown");
//     }
//   });
// });

const lazyload = target => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      console.log("hi");
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute("data-lazy");
        img.setAttribute("src", src);
        img.classList.add("shown");
        observer.disconnect();
      }
    });
  });
  io.observe(target);
};

targets.forEach(lazyload);
