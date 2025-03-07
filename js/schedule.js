/**
 * Scheduling functionality for TestLoop Labs
 * Redirects to contact page with Calendly scheduling
 */

document.addEventListener("DOMContentLoaded", function () {
  // Schedule button elements
  const scheduleNavBtn = document.getElementById("schedule-nav-btn");
  const scheduleHeroBtn = document.getElementById("schedule-hero-btn");
  const scheduleCTABtn = document.getElementById("schedule-cta-btn");

  // Function to handle schedule button clicks
  function handleScheduleClick(e) {
    e.preventDefault();
    window.location.href = "contact.html#schedule";
  }

  // Add event listeners to all schedule buttons (if they exist)
  if (scheduleNavBtn) {
    scheduleNavBtn.addEventListener("click", handleScheduleClick);
    console.log("Schedule nav button initialized");
  }

  if (scheduleHeroBtn) {
    scheduleHeroBtn.addEventListener("click", handleScheduleClick);
    console.log("Schedule hero button initialized");
  }

  if (scheduleCTABtn) {
    scheduleCTABtn.addEventListener("click", handleScheduleClick);
    console.log("Schedule CTA button initialized");
  }

  console.log("Schedule.js loaded");
});
