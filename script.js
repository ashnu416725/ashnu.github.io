
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('show-nav');
});


const scrollLinks = document.querySelectorAll('a.scroll-link');

scrollLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const id = link.getAttribute('href');
    const target = document.querySelector(id);
    const offset = 80;
    const position = target.offsetTop - offset;

    window.scrollTo({
      top: position,
      behavior: 'smooth'
    });

    if (nav.classList.contains('show-nav')) {
      nav.classList.remove('show-nav');
    }
  });
});

const filterLinks = document.querySelectorAll('.filter-link');
const projects = document.querySelectorAll('.project');

filterLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    filterLinks.forEach(filterLink => {
      filterLink.classList.remove('active');
    });

    link.classList.add('active');

    const category = link.getAttribute('data-category');

    projects.forEach(project => {
      project.classList.remove('hide');

      if (category !== 'all' && !project.classList.contains(category)) {
        project.classList.add('hide');
      }
    });
  });
});

const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const alertBox = document.querySelector('.alert');

form.addEventListener('submit', e => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (name === '' || email === '' || message === '') {
    alertBox.classList.add('show');
    alertBox.textContent = 'Please fill in all fields.';
    setTimeout(() => {
      alertBox.classList.remove('show');
    }, 3000);
  } else {
    alertBox.classList.add('success');
    alertBox.classList.add('show');
    alertBox.textContent = 'Your message has been sent.';
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
    setTimeout(() => {
      alertBox.classList.remove('show');
      alertBox.classList.remove('success');
    }, 5000);
  }
});
