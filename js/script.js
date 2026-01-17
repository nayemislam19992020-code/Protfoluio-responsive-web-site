// ===== NAV MENU =====
const menu = document.querySelector('.nav-menu');
const openBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

openBtn.addEventListener('click', () => {
  menu.style.display = 'flex';
  openBtn.style.display = 'none';
  closeBtn.style.display = 'inline-block';
});

closeBtn.addEventListener('click', () => {
  menu.style.display = 'none';
  closeBtn.style.display = 'none';
  openBtn.style.display = 'inline-block';
});

//nave color change on scrol

window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.
  toggle('window-scroll', window.scrollY>100);
});

// ===== TYPING SCRIPT =====
new Typed(".typing", {
  strings: ["Web Designer", "Web Developer", "Youtuber", "Content Creator", "Blogger"],
  typeSpeed: 80,
  backSpeed: 80,
  loop: true
});

new Typed(".typing-2", {
  strings: ["Web Developer", "Web Designer", "Youtuber", "Content Creator", "Blogger", "Funny Man"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

// ===== FAQ TOGGLE =====
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('open');

    const icon = faq.querySelector('.faq-icon i');
    if (icon.classList.contains('fa-plus')) {
      icon.classList.replace('fa-plus', 'fa-minus');
    } else {
      icon.classList.replace('fa-minus', 'fa-plus');
    }
  });
});
