//typedjs
var typed = new Typed('#typed', {
    strings: [
        "Hello there.^2000",
        "Welcome to <b class='shake-crazy'>Karim Sayeh</b>'s personal website",
    ],
    typeSpeed: 40,
    showCursor: false,
});

//mojs
const burst = new mojs.Burst({
    left: 0, top: 0,
    radius: { 4: 19 },
    angle: 45,
    children: {
        shape: 'line',
        radius: 3,
        scale: 1,
        stroke: '#FD7932',
        strokeDasharray: '100%',
        strokeDashoffset: { '-100%': '100%' },
        duration: 700,
        easing: 'quad.out',
    }
});
document.addEventListener('click', function (e) {
    burst
        .tune({ x: e.pageX, y: e.pageY })
        .replay();
});

//particlesjs
particlesJS.load('particles-js', 'assets/particles.json', function () {
    console.log('callback - particles.js config loaded');
});

//howler
var sound = new Howl({
    src: ['assets/sound/nyancat.mp3'],
    preload: true,
    loop: true
});

setTimeout(function () {
    if (sound.state() === "loaded") {
        nyanIt();
    } else {
        sound.once('load', function () {
            nyanIt();
        });
    }
}, 6000);


function nyanIt() {
    sound.play();
    setTimeout(function () {
        document.getElementById("nyancat").style.visibility = "visible";
        //dynamicjs
        dynamics.animate(document.querySelector('#nyancat'), {
            translateX: 1200
        }, {
                type: dynamics.spring,
                duration: 60000,
                frequency: 1,
                friction: 70
            })

        setTimeout(function () {
            sound.stop();
            document.getElementById("nyancat").style.visibility = "hidden";
        }, 60000);
    }, 500);
}
