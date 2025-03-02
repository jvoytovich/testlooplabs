/**
 * Contact Form Validation and Handling
 *
 * This script validates and processes the contact form submission.
 * In a real implementation, this would send data to a server.
 */

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", handleFormSubmit);

    // Add input validation listeners
    const emailInput = document.getElementById("email");
    if (emailInput) {
      emailInput.addEventListener("blur", validateEmail);
    }
  }
});

/**
 * Validates email format
 */
function validateEmail() {
  const emailInput = document.getElementById("email");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailInput.value)) {
    emailInput.classList.add("invalid");
    emailInput.setCustomValidity("Please enter a valid email address");
  } else {
    emailInput.classList.remove("invalid");
    emailInput.setCustomValidity("");
  }
}

/**
 * Handles form submission
 */
function handleFormSubmit(event) {
  event.preventDefault();

  // Gather form data
  const formData = new FormData(event.target);
  const formValues = Object.fromEntries(formData.entries());

  // In a real implementation, you would send this data to your server
  // For demo purposes, we'll just show a success message

  // Validate all fields
  if (validateForm(formValues)) {
    // Simulate sending data to server with a timeout
    displaySubmitting();

    setTimeout(() => {
      // Simulate successful submission
      displaySuccess();
      contactForm.reset();
    }, 1500);
  }
}

/**
 * Validates all form fields
 */
function validateForm(formValues) {
  let isValid = true;

  // Check required fields
  if (!formValues.name || formValues.name.trim() === "") {
    isValid = false;
    highlightInvalidField("name");
  }

  if (!formValues.email || formValues.email.trim() === "") {
    isValid = false;
    highlightInvalidField("email");
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formValues.email)) {
      isValid = false;
      highlightInvalidField("email");
    }
  }

  if (!formValues.message || formValues.message.trim() === "") {
    isValid = false;
    highlightInvalidField("message");
  }

  return isValid;
}

/**
 * Highlights invalid form fields
 */
function highlightInvalidField(fieldId) {
  const field = document.getElementById(fieldId);
  if (field) {
    field.classList.add("invalid");

    field.addEventListener("input", function removeInvalidOnInput() {
      field.classList.remove("invalid");
      field.removeEventListener("input", removeInvalidOnInput);
    });
  }
}

/**
 * Shows submitting state
 */
function displaySubmitting() {
  const submitButton = document.querySelector(
    '#contact-form button[type="submit"]'
  );
  if (submitButton) {
    submitButton.disabled = true;
    submitButton.innerHTML = "Sending...";
  }
}

/**
 * Shows success message after form submission
 */
function displaySuccess() {
  const contactForm = document.getElementById("contact-form");
  const formContainer = contactForm.parentElement;

  // Create success message
  const successMessage = document.createElement("div");
  successMessage.className = "success-message fade-in";
  successMessage.innerHTML = `
    <h3>Thank you for your message!</h3>
    <p>We've received your inquiry and will get back to you shortly.</p>
    <button class="btn btn-accent mt-4" id="reset-form">Send Another Message</button>
  `;

  // Replace form with success message
  formContainer.innerHTML = "";
  formContainer.appendChild(successMessage);

  // Add listener to reset form button
  document.getElementById("reset-form").addEventListener("click", () => {
    location.reload();
  });
}
