
//button scroll to top
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  };

  scrollTopBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


//menu mobile
// Toggle mobile menu visibility
  function toggleMobileMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
  }

// Close mobile menu when a link is clicked
  function toggleMobileMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
  }

  function closeMobileMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.style.display = "none";
  }


// chiudi la tendina se aperta quando si clicca su altre parti dello schermo

  document.addEventListener("click", function(event) {
    const menu = document.getElementById("mobileMenu");
    const toggleButton = document.querySelector(".toggle-button");

    // Check if the clicked element is not the menu or the toggle button
    if (!menu.contains(event.target) && !toggleButton.contains(event.target)) {
      menu.style.display = "none";
    }
  });


// Toggle mobile menu visibility to close it when a link is clicked and to close it when clicking outside the menu
  function toggleMobileMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
  }

  function closeMobileMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.style.display = "none";
  }

  // Chiudi il menu cliccando fuori
  document.addEventListener("click", function (event) {
    const menu = document.getElementById("mobileMenu");
    const icon = document.querySelector(".mobile_menu_icon");

    if (menu.style.display === "flex" &&
        !menu.contains(event.target) &&
        !icon.contains(event.target)) {
      menu.style.display = "none";
    }
  });

  // Chiudi il menu al resize se si passa a desktop
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      closeMobileMenu();
    }
  });