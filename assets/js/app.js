//typedjs
var typed = new Typed('#typed', {
    strings: [
        "Hello there.^2000",
        "Welcome to <b class='shake'>Karim Sayeh</b>'s personal website",
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