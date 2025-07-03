
document.addEventListener('DOMContentLoaded', () => {
  // Update footer year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Simple fade-in on scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.project-card, .section-title').forEach(el => {
    observer.observe(el);
  });
});
