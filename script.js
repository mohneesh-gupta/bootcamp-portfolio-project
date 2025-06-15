document.addEventListener("click", function () {

  // Select all anchor links that start with #
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default anchor behavior

      const targetId = this.getAttribute("href").substring(1); // remove the #
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });
});
