import { Bokeh1Background } from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.2/build/backgrounds/bokeh1.cdn.min.js'

let background = document.querySelector('.background');

let tl = gsap.timeline();
tl.fromTo(background, { opacity: 0 }, { opacity: 1, duration: 1, ease: 'power2.inOut' })
.to('.intro', { opacity: 0, duration: 1, ease: 'power2.inOut' }, '+=10')
.set('.intro', { display: 'none' })
.to('.background', { opacity: 0, duration: 1, ease: 'power2.inOut' }, '-=1')
.set('.background', { display: 'none', onComplete: getModule})

function clampBuilder( minWidthPx, maxWidthPx, minFontSize, maxFontSize ) {
        const root = document.querySelector( "html" );
        const pixelsPerRem = Number( getComputedStyle( root ).fontSize.slice( 0,-2 ) );
      
        const minWidth = minWidthPx / pixelsPerRem;
        const maxWidth = maxWidthPx / pixelsPerRem;
      
        const slope = ( maxFontSize - minFontSize ) / ( maxWidth - minWidth );
        const yAxisIntersection = -minWidth * slope + minFontSize
      
        return `clamp( ${ minFontSize }rem, ${ yAxisIntersection }rem + ${ slope * 100 }vw, ${ maxFontSize }rem )`;
      }

    console.log( clampBuilder( 520, 1280, 1, 2 ) );

    function typewriterEffect(targetElement, speed) {
        const element = document.querySelector(targetElement);
        const text = element.textContent.trim();
        element.textContent = '';
      
        let charIndex = 0;
        const type = setInterval(() => {
          if (charIndex < text.length) {
            element.textContent += text.charAt(charIndex);
            charIndex++;
          } else {
            clearInterval(type);
          }
        }, speed);
      }
      
      typewriterEffect('.name > h3', 200);
        typewriterEffect('.name > h5', 100);


function getModule() {
const bokeh1Background = Bokeh1Background(document.getElementById('webgl-canvas'))
bokeh1Background.loadMap('https://cdn.jsdelivr.net/npm/threejs-components@0.0.2/build/assets/bokeh-particles2.png')
bokeh1Background.setColors([0x6d4862, 0xfd826c, 0x22ccc1])

document.body.addEventListener('click', () => {
  // bokeh1Background.setBackgroundColor(0xffffff * Math.random())
  bokeh1Background.setColors([0xffffff * Math.random(), 0xffffff * Math.random(), 0xffffff * Math.random()])
})
}

let nav = document.querySelector('#hero');
let navElements = document.querySelectorAll('#hero h1');

// Nav Height
let navHeight = nav.offsetHeight;
// Count nav elements
let navCount = navElements.length;
// Nav Height
let navElementHeight = navHeight / navCount;

// Set nav elements height

navElements.forEach((element) => {
    element.style.height = navElementHeight + 'px';
    }
);

let sections = document.querySelectorAll('div[class^="section"]');
sections = Array.from(sections);

let firstNavElement = navElements[0];
let secondNavElement = navElements[1];
let thirdNavElement = navElements[2];
let fourthNavElement = navElements[3];
let back = document.querySelector('.back');
let firstTwo = [firstNavElement, secondNavElement];
let content = document.querySelector('.content');
const odd = [0,2,4];

const even = [1,3,5];

firstTwo.forEach((element, ind) => {
    element.addEventListener('click', () => {
        navElements.forEach((section, index) => {
            if (odd.includes(index)) {
                gsap.fromTo(section, {x: 0}, {x: -2000, opacity: 0, duration: 1});
            } else {
                gsap.fromTo(section, {x: 0}, {x: 2000, opacity: 0, duration: 1});
            }
            setTimeout(() => {
                nav.style.display = 'none';
                back.style.display = 'block';
                sections[0].style.display = 'none';
                sections[1].style.display = 'none';
                sections[ind].style.display = 'block';
                let tl2 = gsap.timeline();
                tl2.set(content, {display: 'block'})
                .fromTo(content, {opacity: 0}, {opacity: 1, duration: 1, ease: 'power2.inOut'})

                }, 1500);
        });
    });
}
);

back.addEventListener('click', () => {
    nav.style.display = 'block';
    back.style.display = 'none';
    content.style.display = 'none';
    navElements.forEach((section, index) => {
        if (odd.includes(index)) {
            gsap.fromTo(section, {x: -2000}, {x: 0, opacity: 1, duration: 1});
        } else {
            gsap.fromTo(section, {x: 2000}, {x: 0, opacity: 1, duration: 1});
        }
    });
}
);

thirdNavElement.addEventListener('click', () => {
    window.open('cv.pdf', '_blank');
}
);

fourthNavElement.addEventListener('click', () => {
    // Send email
    window.location.href = 'mailto:madeleine.oman@mail.utoronto.ca';
}
);