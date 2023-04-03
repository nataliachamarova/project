// (function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return;js = d.createElement(s);js.id = id;js.src = 'https://madte.st/sdk.js';fjs.parentNode.insertBefore(js, fjs);})(document, 'script', 'madtest-sdk');




document.addEventListener("DOMContentLoaded", function(){
    document.querySelector(".header__burger-btn").addEventListener("click", function(){
        document.querySelector(".header").classList.toggle("open")
    })
})


// 
const 	video = document.getElementById('video'),
		playBtn = document.getElementById('video_btn')

const vieoPlay = () => {
	video.play();
	playBtn.classList.add('hidden_btn');
}
const videoPause = () => {
	video.pause();
	playBtn.classList.remove('hidden_btn');
}


playBtn.addEventListener('click', vieoPlay);
video.addEventListener('click', videoPause);

// 

