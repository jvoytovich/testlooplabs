/**
 * Google Analytics Integration
 *
 * This file contains the Google Analytics 4 (GA4) setup.
 * To use this script, replace 'G-XXXXXXXXXX' with your actual Google Analytics 4 Measurement ID.
 * Assumes cookies/tracking is accepted by default. In production, should be connected to a cookie consent system.
 */

// Google Analytics 4 (GA4) Implementation
(function () {
  // Replace with your actual Google Analytics 4 Measurement ID
  const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

  // Only load analytics if not in development mode
  if (
    window.location.hostname !== "localhost" &&
    window.location.hostname !== "127.0.0.1"
  ) {
    // Load Google Analytics script
    const gaScript = document.createElement("script");
    gaScript.async = true;
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(gaScript);

    // Initialize dataLayer and set configuration
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", GA_MEASUREMENT_ID);

    // Custom event tracking helpers
    window.trackEvent = function (eventName, parameters = {}) {
      gtag("event", eventName, parameters);
    };

    // Track page views on SPA navigation (if needed)
    window.trackPageView = function (pageTitle, pagePath) {
      gtag("event", "page_view", {
        page_title: pageTitle || document.title,
        page_path: pagePath || window.location.pathname,
      });
    };

    // Add event listeners for outbound links
    document.addEventListener("DOMContentLoaded", function () {
      // Track outbound links
      const externalLinks = document.querySelectorAll(
        'a[href^="http"]:not([href*="' + window.location.hostname + '"])'
      );
      externalLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
          const href = this.getAttribute("href");
          trackEvent("outbound_link_click", {
            link_url: href,
            link_text: this.innerText || "Image Link",
          });
        });
      });

      // Track form submissions
      const contactForm = document.getElementById("contact-form");
      if (contactForm) {
        contactForm.addEventListener("submit", function () {
          trackEvent("form_submission", {
            form_id: "contact-form",
            page: window.location.pathname,
          });
        });
      }
    });
  }
})();
