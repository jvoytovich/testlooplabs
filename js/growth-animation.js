/**
 * Growth Animation
 * A dynamic cursor-responsive growth visualization for the hero section
 */

document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("growth-animation");
  if (!canvas) return; // Safety check

  const ctx = canvas.getContext("2d");
  const heroSection = document.querySelector(".hero");

  // Set canvas dimensions
  function setCanvasDimensions() {
    if (heroSection) {
      canvas.width = heroSection.offsetWidth;
      canvas.height = heroSection.offsetHeight;
    } else {
      canvas.width = window.innerWidth;
      canvas.height = Math.min(window.innerHeight, 800); // Limit height if hero not found
    }
  }

  setCanvasDimensions();
  window.addEventListener("resize", setCanvasDimensions);

  // Particle configuration
  const particleCount = 80; // Reduced for better performance
  const baseRadius = 1;
  const maxRadius = 3;
  const connectionDistance = 120;

  // Mouse position (default center)
  let mouseX = canvas.width / 2;
  let mouseY = canvas.height / 2;

  // Track mouse movement within hero section
  window.addEventListener("mousemove", function (e) {
    // Get hero section position
    if (heroSection) {
      const heroRect = heroSection.getBoundingClientRect();

      // Only update mouse position if within hero bounds
      if (e.clientY >= heroRect.top && e.clientY <= heroRect.bottom) {
        mouseX = e.clientX - heroRect.left;
        mouseY = e.clientY - heroRect.top;
      }
    }
  });

  // For touch devices
  window.addEventListener("touchmove", function (e) {
    if (e.touches.length > 0 && heroSection) {
      const heroRect = heroSection.getBoundingClientRect();

      // Only update mouse position if within hero bounds
      if (
        e.touches[0].clientY >= heroRect.top &&
        e.touches[0].clientY <= heroRect.bottom
      ) {
        mouseX = e.touches[0].clientX - heroRect.left;
        mouseY = e.touches[0].clientY - heroRect.top;
      }
    }
  });

  // Particle class
  class Particle {
    constructor() {
      this.reset();
      // Start at random positions
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
    }

    reset() {
      // Properties for movement
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 1;
      this.vy = (Math.random() - 0.5) * 1;

      // Visual properties
      this.radius = baseRadius + Math.random() * 2;
      this.originalRadius = this.radius;
      this.opacity = 0.1 + Math.random() * 0.4;

      // Growth properties
      this.growing = false;
      this.growthRate = 0.02 + Math.random() * 0.1;
    }

    update() {
      // Move particles
      this.x += this.vx;
      this.y += this.vy;

      // Boundary check
      if (this.x < 0 || this.x > canvas.width) {
        this.vx = -this.vx;
      }
      if (this.y < 0 || this.y > canvas.height) {
        this.vy = -this.vy;
      }

      // Distance from mouse
      const dx = this.x - mouseX;
      const dy = this.y - mouseY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Growth effect near mouse
      if (distance < connectionDistance) {
        this.growing = true;
        // Slight attraction to cursor
        this.vx += dx > 0 ? -0.02 : 0.02;
        this.vy += dy > 0 ? -0.02 : 0.02;
      } else {
        this.growing = false;
      }

      // Handle growth/shrink
      if (this.growing && this.radius < maxRadius) {
        this.radius += this.growthRate;
      } else if (!this.growing && this.radius > this.originalRadius) {
        this.radius -= this.growthRate;
      }

      // Limit velocity
      this.vx = Math.max(Math.min(this.vx, 2), -2);
      this.vy = Math.max(Math.min(this.vy, 2), -2);
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(61, 168, 163, ${this.opacity})`;
      ctx.fill();
    }
  }

  // Create particles
  const particles = [];
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  // Draw connections between particles
  function drawConnections() {
    ctx.strokeStyle = "rgba(61, 168, 163, 0.15)";
    ctx.lineWidth = 0.5;

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < connectionDistance) {
          // Opacity based on distance
          const opacity = 1 - distance / connectionDistance;
          ctx.strokeStyle = `rgba(61, 168, 163, ${opacity * 0.2})`;

          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  // Check if animation should run (if hero section is visible)
  function isHeroVisible() {
    if (!heroSection) return false;

    const rect = heroSection.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

  // Animation loop
  function animate() {
    // Only animate if hero section is visible
    if (isHeroVisible()) {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      drawConnections();
    }

    // Continue animation
    requestAnimationFrame(animate);
  }

  // Start animation
  animate();
});
