// SHOW MENU
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// MENU SHOW
// Validate if constant exists
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    })
}

// MENU HIDDEN
// Validate if constant exists

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// CHANGE BACKGROUND HEADER
function scrollHeader(){
    const header = document.getElementById('header');
    // When scroll is greater than 100 viewport height, add the scroll-header class
    if(this.scrollY >= 100) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader);

// SWIPER DISCOVER
// Initialize Swiper

var swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop:true,
    spaceBetween: 32, 
    coverflowEffect: {
      rotate: 0,
    },
});

// VIDEO
const videoFile = document.getElementById('video-file'),
      videoButton = document.getElementById('video-button'),
      videoIcon = document.getElementById('video-icon');

function playPause() {
    if (videoFile.paused) {
        // play video
        videoFile.play()

        //change the play icon for pause icon
        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-line')
    }
    else{
        // pause video
        videoFile.pause()

        videoIcon.classList.remove('ri-pause-line')
        videoIcon.classList.add('ri-play-line')
    }
}

videoButton.addEventListener('click', playPause)

function finalVideo(){
    // When the video ends, the icon changes
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-restart-line')
}

videoFile.addEventListener('ended', finalVideo)

function restartVideo(){
    videoIcon.classList.remove('ri-restart-line')
    videoIcon.classList.add('ri-pause-line')
}

videoButton.addEventListener('click', restartVideo)


// SHOW SCROLL UP
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 200 viewport height, add the scrollup class to the tag 
    
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight 
        const sectionTop = current.offsetTop - 50; 
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }
        else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// SCROLL REVEAL ANIMATION  
const sr = ScrollReveal({
    distance:'60px',
    duration:2800,
    // reset: true,
})

sr.reveal('.home__data, .home__social-link, .home__info, .discover__container, .experience__data, .experience__overlay, .place__card, .sponsor__content, .footer__data, .footer__rights',{
    origin:'top',
    interval: 100,
})

sr.reveal('.about__data, .video__description, .subscribe__description',{
    origin:'left',
})


sr.reveal('.about__img-overlay, .video__content, .subscribe__form',{
    origin:'right',
    interval: 100,
})

// DARK LIGHT THEME CHECKBOX 
const chk = document.getElementById('chk');
const homeImg = document.querySelector('.home__img')

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark-theme');
    homeImg.classList.toggle('dark-theme');
});

//DARK LIGHT THEME TOGGLE FOR DESKTOP (BUTTON)
const themeButton = document.getElementById('theme-button')
const homeImage = document.querySelector('.home__img')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')
const selectedImg = localStorage.getItem('selected-img')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'
const getCurrentImg = () => homeImage.classList.contains(darkTheme) ? 'dark' : 'light'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
  homeImage.classList[selectedImg === 'dark' ? 'add' : 'remove'](darkTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    homeImage.classList.toggle(darkTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
    localStorage.setItem('selected-img', getCurrentImg())
})