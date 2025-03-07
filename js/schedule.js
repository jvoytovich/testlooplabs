/**
 * Scheduling functionality for TestLoop Labs
 * Integrates with Calendly for calendar scheduling
 */

document.addEventListener("DOMContentLoaded", function () {
  // Schedule button elements
  const scheduleNavBtn = document.getElementById("schedule-nav-btn");
  const scheduleHeroBtn = document.getElementById("schedule-hero-btn");
  const scheduleCTABtn = document.getElementById("schedule-cta-btn");

  // Modal elements
  const calendarModal = document.getElementById("calendar-modal");
  const closeCalendar = document.getElementById("close-calendar");
  const calendlyIframe = document.getElementById("calendly-iframe");

  // Replace with your actual Calendly URL
  const calendlyURL = "https://calendly.com/jacvoyt/30min";

  // Function to open the calendar modal
  function openCalendarModal() {
    // Only set the src the first time to avoid multiple reloads
    if (!calendlyIframe.src || calendlyIframe.src === "") {
      calendlyIframe.src = calendlyURL;
    }
    calendarModal.style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  }

  // Function to close the calendar modal
  function closeCalendarModal() {
    calendarModal.style.display = "none";
    document.body.style.overflow = "auto"; // Re-enable scrolling
  }

  // Event listeners for opening the modal
  if (scheduleNavBtn) {
    scheduleNavBtn.addEventListener("click", function (e) {
      e.preventDefault();
      openCalendarModal();
    });
  }

  if (scheduleHeroBtn) {
    scheduleHeroBtn.addEventListener("click", function (e) {
      e.preventDefault();
      openCalendarModal();
    });
  }

  if (scheduleCTABtn) {
    scheduleCTABtn.addEventListener("click", function (e) {
      e.preventDefault();
      openCalendarModal();
    });
  }

  // Event listener for closing the modal
  if (closeCalendar) {
    closeCalendar.addEventListener("click", function () {
      closeCalendarModal();
    });
  }

  // Close modal when clicking outside of it
  window.addEventListener("click", function (e) {
    if (e.target === calendarModal) {
      closeCalendarModal();
    }
  });

  // Close modal when pressing ESC key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && calendarModal.style.display === "block") {
      closeCalendarModal();
    }
  });
});
