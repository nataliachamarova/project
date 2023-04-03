new Accordion('.accordion-list', {
    elementClass: 'accordion',
    triggerClass: 'accordion__control',
    panelClass: 'accordion__content',
    activeClass: 'accordion--active'
});

new Accordion('.questions__accordion', {
    elementClass: 'accordion__quest',
    triggerClass: 'questions__control',
    panelClass: 'questions__content',
    activeClass: 'questions--active'
});

new Accordion('.questions__accordion2', {
    elementClass: 'accordion__quest2',
    triggerClass: 'questions__control2',
    panelClass: 'questions__content2',
    activeClass: 'questions--active2'
});


document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".header__burger-btn").addEventListener("click", function () {
        document.querySelector(".header").classList.toggle("open")
    })
})


const player = document.querySelector('.cases-item__player'),
    playBtn = document.querySelector('.cases-player__btn'),
    audio = document.querySelector('.audio'),
    progress = document.querySelector('.cases-soundtrack__img'),
    pause = document.querySelector('.cases-soundtrack__img'),
    //   activePause = document.querySelector('.cases-pause__active'),
    activeSvg = document.querySelector('.cases-pause__active'),
    imgSrc = document.querySelector('.cases-btn__img'),
    soundrackSvg = document.querySelector('.cases-player__soundtrack-svg'),
    soundrackSvgRects = soundrackSvg.querySelectorAll('rect');


let animationInterval;
audio.src = 'audio/Funky-Chase.mp3';


function playSong() {
    player.classList.add('play')
    imgSrc.src = 'img/pause.svg'
    audio.play()
    animationInterval = setInterval(() => {
        // console.log(audio.currentTime)
        const duration = audio.duration;
        const currentTime = audio.currentTime;
        const percentOfCurrentTime = 100 * currentTime / duration;
        const rectsLen = soundrackSvgRects.length;
        const deltaRectsLeng = rectsLen / 100;

        soundrackSvgRects.forEach((rect, i) => {
            if ((i * deltaRectsLeng) < (percentOfCurrentTime * deltaRectsLeng)) {
                rect.setAttribute('fill', '#FFFFFF')
            }
        })
    }, 1000)
}

function pauseSong() {
    player.classList.remove('play'),
        imgSrc.src = 'img/play.svg'
    audio.pause()
    clearInterval(animationInterval);
}


playBtn.addEventListener('click', () => {
    const isPlaying = player.classList.contains('play')

    if (isPlaying) {
        pauseSong()
    } else {
        playSong()
    }

})

const playerSecond = document.querySelector('.cases-item__player2'),
    playBtnSecond = document.querySelector('.cases-player__btn2'),
    audioSecond = document.querySelector('.audio2'),
    progressSecond = document.querySelector('.cases-soundtrack__img2'),
    pauseSecond = document.querySelector('.cases-soundtrack__img2'),
    //   activePause = document.querySelector('.cases-pause__active'),
    activeSvgSecond = document.querySelector('.cases-pause__active2'),
    imgSrcSecond = document.querySelector('.cases-btn__img2'),
    soundrackSvgSecond = document.querySelector('.cases-player__soundtrack-svg2'),
    soundrackSvgRectsSecond = soundrackSvgSecond.querySelectorAll('rect');

let animationIntervalAuduio;
audioSecond.src = 'audio/Funky-Chase.mp3'

function playSongSecond() {
    playerSecond.classList.add('play')

    imgSrcSecond.src = 'img/pause.svg'
    audioSecond.play()
    animationIntervalAuduio = setInterval(() => {
        // console.log(audio.currentTime)
        const durationSecond = audioSecond.duration;
        const currentTimeSecond = audioSecond.currentTime;
        const percentOfCurrentTimeSecond = 100 * currentTimeSecond / durationSecond;
        const rectsLenSecond = soundrackSvgRectsSecond.length;
        const deltaRectsLengSecond = rectsLenSecond / 100;

        soundrackSvgRectsSecond.forEach((rect, i) => {
            if ((i * deltaRectsLengSecond) < (percentOfCurrentTimeSecond * deltaRectsLengSecond)) {
                rect.setAttribute('fill', '#FFFFFF')
            }
        })
    }, 1000)
}

function pauseSongSecond() {
    playerSecond.classList.remove('play'),
        imgSrcSecond.src = 'img/play.svg'
    audioSecond.pause()
    clearInterval(animationIntervalAuduio);
}


playBtnSecond.addEventListener('click', () => {
    const isPlayingSecond = playerSecond.classList.contains('play')

    if (isPlayingSecond) {
        pauseSongSecond()
    } else {
        playSongSecond()
    }

})



const playerThird = document.querySelector('.cases-item__player3'),
    playBtnThird = document.querySelector('.cases-player__btn3'),
    audioThird = document.querySelector('.audio3'),
    progressThird = document.querySelector('.cases-soundtrack__img3'),
    pauseThird = document.querySelector('.cases-soundtrack__img3'),
    activeSvgThird = document.querySelector('.cases-pause__active3'),
    imgSrcThird = document.querySelector('.cases-btn__img3'),
    soundrackSvgThird = document.querySelector('.cases-player__soundtrack-svg3'),
    soundrackSvgRectsThird = soundrackSvgThird.querySelectorAll('rect')

let animationIntervalThird;
audioThird.src = 'audio/Funky-Chase.mp3'

function playSongThird() {
    playerThird.classList.add('play')
    imgSrcThird.src = 'img/pause.svg'
    audioThird.play()
    animationIntervalThird = setInterval(() => {
        // console.log(audio.currentTime)
        const durationThird = audioThird.duration;
        const currentTimeThird = audioThird.currentTime;
        const percentOfCurrentTimeThird = 100 * currentTimeThird/ durationThird;
        const rectsLenThird= soundrackSvgRectsThird.length;
        const deltaRectsLengThird = rectsLenThird / 100;

        soundrackSvgRectsThird.forEach((rect, i) => {
            if ((i * deltaRectsLengThird) < (percentOfCurrentTimeThird * deltaRectsLengThird)) {
                rect.setAttribute('fill', '#FFFFFF')
            }
        })
    }, 1000)
}

function pauseSongThird() {
    playerThird.classList.remove('play'),
        imgSrcThird.src = 'img/play.svg'
    audioThird.pause()
    clearInterval(animationIntervalThird);
}


playBtnThird.addEventListener('click', () => {
    const isPlayingThird = playerThird.classList.contains('play')

    if (isPlayingThird) {
        pauseSongThird()
    } else {
        playSongThird()
    }

})


const dots = document.querySelector(".cases-descr__further");
const moreText = document.querySelector(".cases-descr__more");
const clickBtn = document.querySelector('.cases-item__btn');

function myFunction() {


    if (dots.style.display === "none") {
        dots.style.display = "inline";
        clickBtn.innerHTML = "Читать далее...";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        clickBtn.innerHTML = "Назад";
        moreText.style.display = "inline";
    }
}

clickBtn.addEventListener('click', myFunction)

const dotsSecond = document.querySelector(".cases-descr__further2");
const moreTextSecond = document.querySelector(".cases-descr__more2");
const clickBtnSecond = document.querySelector('.cases-item__btn2');

function clickFunction() {


    if (dotsSecond.style.display === "none") {
        dotsSecond.style.display = "inline";
        clickBtnSecond.innerHTML = "Читать далее...";
        moreTextSecond.style.display = "none";
    } else {
        dotsSecond.style.display = "none";
        clickBtnSecond.innerHTML = "Назад";
        moreTextSecond.style.display = "inline";
    }

}

clickBtnSecond.addEventListener('click', clickFunction)


const dotsThird = document.querySelector(".cases-descr__further3");
const moreTextThird = document.querySelector(".cases-descr__more3");
const clickBtnThird = document.querySelector('.cases-item__btn3');

function clicksFunction() {


    if (dotsThird.style.display === "none") {
        dotsThird.style.display = "inline";
        clickBtnThird.innerHTML = "Читать далее...";
        moreTextThird.style.display = "none";
    } else {
        dotsThird.style.display = "none";
        clickBtnThird.innerHTML = "Назад";
        moreTextThird.style.display = "inline";
    }

}

clickBtnThird.addEventListener('click', clicksFunction)








