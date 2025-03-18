// Testloop Labs Website - Main JavaScript

document.addEventListener("DOMContentLoaded", function () {
  // Mobile Navigation Toggle
  const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-links li");

  if (mobileNavToggle) {
    mobileNavToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");

      const isExpanded = this.getAttribute("aria-expanded") === "true";
      this.setAttribute("aria-expanded", !isExpanded);

      // Add staggered animation to nav items
      if (!isExpanded) {
        navItems.forEach((item, index) => {
          setTimeout(() => {
            item.style.transitionDelay = `${index * 0.1}s`;
          }, 10);
        });
      } else {
        navItems.forEach((item) => {
          item.style.transitionDelay = "0s";
        });
      }
    });

    // Close mobile nav when clicking outside
    document.addEventListener("click", function (e) {
      if (
        navLinks.classList.contains("active") &&
        !e.target.closest(".nav-links") &&
        !e.target.closest(".mobile-nav-toggle")
      ) {
        navLinks.classList.remove("active");
        mobileNavToggle.setAttribute("aria-expanded", "false");
      }
    });

    // Close mobile nav when clicking on a link
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        mobileNavToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Close mobile navigation if open
        if (navLinks && navLinks.classList.contains("active")) {
          navLinks.classList.remove("active");
          if (mobileNavToggle) {
            mobileNavToggle.setAttribute("aria-expanded", "false");
          }
        }

        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: "smooth",
        });
      }
    });
  });

  // Header scroll effect
  const header = document.querySelector(".header");
  let scrollPosition = window.scrollY;

  function updateHeaderOnScroll() {
    const currentScroll = window.scrollY;

    if (currentScroll > 100) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }

    // Show/hide header on scroll direction
    if (currentScroll > scrollPosition && currentScroll > 200) {
      // Scrolling down
      header.classList.add("header-hidden");
    } else {
      // Scrolling up
      header.classList.remove("header-hidden");
    }

    scrollPosition = currentScroll;
  }

  window.addEventListener("scroll", updateHeaderOnScroll);

  // Fade-in animations on scroll
  const fadeElements = document.querySelectorAll(".fade-in");

  const fadeInOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  };

  const fadeInObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, fadeInOptions);

  fadeElements.forEach((element) => {
    fadeInObserver.observe(element);
  });

  // Gallery/Exhibition items hover effects
  const galleryItems = document.querySelectorAll(
    ".gallery-item, .exhibition-item"
  );

  galleryItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px)";
      this.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.1)";
    });

    item.addEventListener("mouseleave", function () {
      this.style.transform = "";
      this.style.boxShadow = "";
    });
  });

  // Form validation and submission
  const contactForm = document.querySelector(".contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Basic validation
      const nameField = document.getElementById("name");
      const emailField = document.getElementById("email");
      const messageField = document.getElementById("message");
      let isValid = true;

      // Reset error states
      [nameField, emailField, messageField].forEach((field) => {
        if (field) {
          field.classList.remove("error");
          const errorEl = field.parentElement.querySelector(".error-message");
          if (errorEl) errorEl.remove();
        }
      });

      // Validate fields
      if (nameField && nameField.value.trim() === "") {
        addErrorTo(nameField, "Please enter your name");
        isValid = false;
      }

      if (emailField) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailField.value)) {
          addErrorTo(emailField, "Please enter a valid email address");
          isValid = false;
        }
      }

      if (messageField && messageField.value.trim() === "") {
        addErrorTo(messageField, "Please enter your message");
        isValid = false;
      }

      if (isValid) {
        // For demo purposes - replace with actual form submission
        const submitBtn = contactForm.querySelector('[type="submit"]');
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = "Sending...";
        }

        // Simulate form submission
        setTimeout(() => {
          contactForm.innerHTML =
            '<div class="success-message"><h3>Thank you!</h3><p>Your message has been sent successfully. We will get back to you soon.</p></div>';
        }, 1500);
      }
    });
  }

  function addErrorTo(field, message) {
    field.classList.add("error");
    const errorMessage = document.createElement("div");
    errorMessage.className = "error-message";
    errorMessage.textContent = message;
    field.parentElement.appendChild(errorMessage);
  }
});

// Helper function for preloading images
function preloadImages(srcs) {
  if (!preloadImages.cache) {
    preloadImages.cache = [];
  }

  const promises = [];
  srcs.forEach((src) => {
    const img = new Image();
    const promise = new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
      img.src = src;
    });
    promises.push(promise);
    preloadImages.cache.push(img);
  });

  return Promise.all(promises);
}

// Preload logo and other essential images
window.addEventListener("load", function () {
  const imagesToPreload = [
    "images/logo.png",
    // Add other essential images here
  ];

  preloadImages(imagesToPreload).then(() => {
    document.body.classList.add("images-loaded");
  });
});
