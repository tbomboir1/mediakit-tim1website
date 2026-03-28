// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    const isActive = item.classList.contains('active');

    // Close all
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

    // Toggle clicked
    if (!isActive) {
      item.classList.add('active');
    }
  });
});

// Mobile menu toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', () => {
  document.querySelector('.nav').classList.toggle('active');
});

// Close mobile menu on link click
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav').classList.remove('active');
  });
});
