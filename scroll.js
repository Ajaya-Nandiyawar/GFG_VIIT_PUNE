// Get the button
  const scrollButton = document.getElementById("scrollToTop");

  // Ensure the scroll button is always above other elements
  scrollButton.style.zIndex = "1000";

  // Show/hide button based on scroll position
  window.onscroll = function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          scrollButton.style.display = "block";
      } else {
          scrollButton.style.display = "none";
      }
  };

  // Scroll to top when button is clicked
  scrollButton.addEventListener("click", function() {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
  });