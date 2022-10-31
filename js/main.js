// Hide/Show Navigation Menu
const showButton = document.querySelector('.show-button');
const navLinks = document.querySelectorAll('.nav-link');
const nav = document.querySelector('nav');

showButton.addEventListener('click', () => {
  if (nav.classList.contains('close')) {
    nav.classList.remove('close');
    nav.classList.add('open');
    showButton.innerHTML = 'Hide';
  } else {
    nav.classList.remove('open');
    nav.classList.add('close');
    showButton.innerHTML = 'Show';
  }
});

navLinks.forEach((anchor) => {
  anchor.addEventListener('click', () => {
    nav.classList.remove('open');
    nav.classList.add('close');
    showButton.innerHTML = 'Show';
  });
})


// Smooth Progress Bar
window.onscroll = function () {
  let scrolled = (window.pageYOffset / sectionJumplink.offsetTop) * 100;
  document.getElementById('progressBar').style.width = scrolled + '%';
}

// Intersections
const allSections = document.querySelectorAll('section');
const cardSection = document.querySelector('.section-card');
const selectedSection = document.querySelector('.selected-section');
const sectionJumplink = document.querySelector('.section-after-jumplink');
const specialSections = ['section-card', 'section-after-jumplink', 'section-after-jumplink-two']

const aside = document.querySelector('aside');

const config = {
  rootMargin: `${document.querySelector('aside').offsetHeight}px`,
  threshold: 1
};

const jumpLinkSectionsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(!entry.isIntersecting) return 
    
    if(!specialSections.includes(entry.target.className)) {
      selectedSection.innerHTML = entry.target.innerText
      aside.classList.remove('bottom-aside');
      aside.classList.add('top-aside');
      showButton.classList.remove('hidden');
      showButton.classList.add('block');     
    } else if(entry.target.className === 'section-after-jumplink') {
      nav.classList.remove('open');
      nav.classList.add('close');
      showButton.innerHTML = 'Show';
    }
  });
}, config);

const cardSectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(!entry.isIntersecting) return
     
      aside.classList.add('bottom-aside');
      aside.classList.remove('top-aside');
      showButton.classList.remove('block');
      showButton.classList.add('hidden');
      nav.classList.remove('open');
      nav.classList.add('close');
      selectedSection.innerHTML = 'Card Component';
      showButton.innerHTML = 'Show';
  })
}, {threshold: 0});

allSections.forEach((section) => {
  jumpLinkSectionsObserver.observe(section);
});

cardSectionObserver.observe(cardSection)
