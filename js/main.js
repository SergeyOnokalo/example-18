const targetEl = document.querySelector('.slider__wrapper')
const circle = document.querySelector('.planet__circle')
const orbit = document.querySelector('.planet__orbit1')
const orbit2 = document.querySelector('.planet__orbit2')
const orbit3 = document.querySelector('.planet__orbit3')
const body = document.querySelector('body')
const planet = document.querySelector('.planet__circle-1')

const ss1 = document.querySelector('.ss1')
const ss2 = document.querySelector('.ss2')
const ss3 = document.querySelector('.ss3')
const ss4 = document.querySelector('.ss4')
const autumnInner1 = document.querySelector('.autumn__inner1')
const autumnInner2 = document.querySelector('.autumn__inner2')
const autumnInner3 = document.querySelector('.autumn__inner3')
const autumnInner4 = document.querySelector('.autumn__inner4')
const arrow = document.querySelector('.arrow')

function callback(mutations, observer){
  www()
}
const observer = new MutationObserver(callback)
observer.observe(targetEl, {
  childList: true,
  attributes: true,
  characterData:true
})

function www (){
  if (ss1.classList.contains('swiper-slide-active')) {
    body.classList.remove('active-color-bg2')
    body.classList.remove('active-color-bg3')
    body.classList.remove('active-color-bg4')
    body.classList.add('active-color-bg1')
    planet.classList.remove('active-color-planet2')
    planet.classList.remove('active-color-planet3')
    planet.classList.remove('active-color-planet4')
    planet.classList.add('active-color-planet1')
    circle.style.transform = 'rotate(0deg)'
    orbit.style.transform = 'rotate(0deg)'
    orbit2.style.transform = 'rotate(0deg)'
    orbit3.style.transform = 'rotate(0deg)'
    autumnInner1.classList.remove('autumn__inner-none')
    autumnInner2.classList.add('autumn__inner-none')
    autumnInner3.classList.add('autumn__inner-none')
    autumnInner4.classList.add('autumn__inner-none')
    arrow.classList.remove('arrow-off')
  } else if (ss2.classList.contains('swiper-slide-active')) {
    body.classList.remove('active-color-bg1')
    body.classList.remove('active-color-bg3')
    body.classList.remove('active-color-bg4')
    body.classList.add('active-color-bg2')
    planet.classList.remove('active-color-planet1')
    planet.classList.remove('active-color-planet3')
    planet.classList.remove('active-color-planet4')
    planet.classList.add('active-color-planet2')
    circle.style.transform = 'rotate(90deg)'
    orbit.style.transform = 'rotate(90deg)'
    orbit2.style.transform = 'rotate(90deg)'
    orbit3.style.transform = 'rotate(90deg)'
    autumnInner1.classList.add('autumn__inner-none')
    autumnInner2.classList.remove('autumn__inner-none')
    autumnInner3.classList.add('autumn__inner-none')
    autumnInner4.classList.add('autumn__inner-none')
    arrow.classList.remove('arrow-off')
  } else if (ss3.classList.contains('swiper-slide-active')) {
    body.classList.remove('active-color-bg1')
    body.classList.remove('active-color-bg2')
    body.classList.remove('active-color-bg4')
    body.classList.add('active-color-bg3')
    planet.classList.remove('active-color-planet1')
    planet.classList.remove('active-color-planet2')
    planet.classList.remove('active-color-planet4')
    planet.classList.add('active-color-planet3')
    circle.style.transform = 'rotate(180deg)'
    orbit.style.transform = 'rotate(180deg)'
    orbit2.style.transform = 'rotate(180deg)'
    orbit3.style.transform = 'rotate(180deg)'
    autumnInner1.classList.add('autumn__inner-none')
    autumnInner2.classList.add('autumn__inner-none')
    autumnInner3.classList.remove('autumn__inner-none')
    autumnInner4.classList.add('autumn__inner-none')
    arrow.classList.remove('arrow-off')
  } else if (ss4.classList.contains('swiper-slide-active')) {
    body.classList.remove('active-color-bg1')
    body.classList.remove('active-color-bg2')
    body.classList.remove('active-color-bg3')
    body.classList.add('active-color-bg4')
    planet.classList.remove('active-color-planet1')
    planet.classList.remove('active-color-planet2')
    planet.classList.remove('active-color-planet3')
    planet.classList.add('active-color-planet4')
    circle.style.transform = 'rotate(270deg)'
    orbit.style.transform = 'rotate(270deg)'
    orbit2.style.transform = 'rotate(270deg)'
    orbit3.style.transform = 'rotate(270deg)'
    autumnInner1.classList.add('autumn__inner-none')
    autumnInner2.classList.add('autumn__inner-none')
    autumnInner3.classList.add('autumn__inner-none')
    autumnInner4.classList.remove('autumn__inner-none')
    arrow.classList.add('arrow-off')
  }
}

let n = new Swiper ('.swiper-container-0',{
  wrapperClass:"swiper-wrapper-0",
  slideClass:"slider__screen-0",
  direction:"vertical",
  slidesPerView:'auto',
  keyboard:{
    enebled:true,
    onlyInViewport:true,
    pageUpDown:true,
  },
  mousewheel:{
    sensitivity:1,
  },
  speed:1500,
  observer:true,
  observeParents:true,
  observeSlideChildren:true,
})

