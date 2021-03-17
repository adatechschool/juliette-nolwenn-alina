// let animation = anime({
//     targets: 'h1',
//     easing: 'linear',
//     translateX: '30%',
// })

// let tl = anime.timeline({
//     duration: 750
// })

// tl.add({
//     targets: 'h1',
//     translateX: '30%'
// })
// tl.add({
//     targets: 'h1',
//     translateY: '30%'
// })

// tl.add({
//     targets: 'h1',
//     translateX: '0%'
// })

// tl.add({
//     targets: 'p',
//     translateY: '-30%'
// })


var easing = anime({
    targets: '.img',
    keyframes: [
        {translateY: 0},
        {translateX: 650},
        {translateY: 0},
        {translateX: 1250},
        {translateY: 0}
      ],
      duration: 4000,
      easing: 'easeOutElastic(1, .8)',
      loop: true
});



