'use strict'
const images = document.querySelectorAll('.slider__img');
const dots = document.querySelectorAll('.slider__dot');
const captions = document.querySelectorAll('.slider__caption');
let activeIdx = 0;
let prevSlide = images[0];

const initSlider = () => {
    images.forEach((img, i) => {
        img.style.right = `${i * 100}%`
    })
}
initSlider()

const showImgSlide = (idx) => {
    images[activeIdx].classList.remove('slider__img_active')
    prevSlide.classList.add('slider__img_prev')
    images.forEach((img, i) => {
        if (i === idx) {
            activeIdx = i;
            img.style.right = `${img.style.right.slice(0, -1) - 100}%`
            setTimeout(() => {
                img.style.right = `${i * 100}%`
                img.classList.add('slider__img_active')
            }, 0)
        }
    })
}

const showSlideTitle = (idx) => {
    captions.forEach(caption => {
        if (caption.classList.contains('slider__caption_active')) {
            caption.classList.remove('slider__caption_active')
            caption.classList.add('slider__caption_hide')
        }
        captions[idx].classList.remove('slider__caption_hide')
        captions[idx].classList.add('slider__caption_active')
    })
}

dots.forEach((dot, i) => {
    dot.addEventListener('click', (e) => {
        if (i != activeIdx) {
            dots[activeIdx].classList.remove('slider__dot_active');
            dot.classList.add('slider__dot_active')
            prevSlide.classList.remove('slider__img_prev')
            prevSlide = images[activeIdx]
            showImgSlide(i);
            showSlideTitle(i);
        }
    })
})


