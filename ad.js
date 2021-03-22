function moveWoman(woman){
async function move(){
  var easing1 = anime({
    targets: woman,
    translateX: [0,1200],
    duration : 4000,
    easing: 'easeInOutQuart',
  }).finished;
  await Promise.all([easing1]);
}
move().then(() => {
  anime({
    targets: woman,
    translateX: [1200,2400],
    delay: 2000,
    duration : 5000,
    easing: 'easeInOutQuart',
  })
});
}

function displayAllWomen(){
  var arrayWomen = ['.michelle','.malala','.simone','.alexandria','.emma','.françoise','.amal','.claudie','.marie','.kamala','.virginie','.wangari']
  for (let index = 0; index < arrayWomen.length; index++) {
    moveWoman(arrayWomen[index]);  
  }
}


displayAllWomen()

