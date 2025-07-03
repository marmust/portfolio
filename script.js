function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Enable horizontal scrolling on vertical wheel scroll over skill area
document.addEventListener("DOMContentLoaded", () => {
  const skillWrapper = document.querySelector(".skills-scroll-wrapper");
  if (skillWrapper) {
    skillWrapper.addEventListener("wheel", (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        skillWrapper.scrollLeft += e.deltaY;
      }
    }, { passive: false });
  }

  // 3D hover tilt effect
  document.querySelectorAll(".hover-tilt").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = -(y - centerY) / 10;
      const rotateY = (x - centerX) / 10;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.2)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
      card.style.zIndex = 1;
    });

    card.addEventListener("mouseenter", () => {
      card.style.zIndex = 999;
    });
  });
});
