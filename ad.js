var easing = anime({
    targets: '.img',
    keyframes: [
        {translateY: 0},
        {translateX: 1200},
        {translateY: 0},
        {translateX: 2300},
        {translateY: 0}
      ],
      duration: 10000,
      easing: 'easeOutElastic(1, .8)',
      loop: 1
});



