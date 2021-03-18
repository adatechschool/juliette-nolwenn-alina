async function move(woman){
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
    targets: '.michelle',
    translateX: [1200,2400],
    delay: 5000,
    duration : 5000,
    easing: 'easeInOutQuart',
  })
});

move('.michelle')

var arrayWomen =  [
  { "name" : "Malala Yousafzai",
    "bio" : "diplômée de l'Université d'Oxford en philosophie, politique et économie , Prix Nobel de la Paix",
    "image" : 
  },
  { "name" : "Michelle Obama",
    "bio" : "diplômée de la facultée de droit de Harvard, Avocate et ancienne Première dame des États-Unis",
    "image" : 
  },
  { "name" : "Simone Veil",
  "bio" : "diplômée de Sciences-po Paris et ENM , Ancienne ministre de la santé et icône de la lutte contre la discrimination des femmes en France",
  "image" : 
  },
  { "name" : "Simone de Beauvoir",
    "bio" : "diplômée de la faculté des lettres de l'université de Paris, philosophe, romancière, mémorialiste et essayiste française",
    "image" : 
  },
  { "name" : "Alexandria Ocasio-Cortez",
    "bio" : "diplômée de l'Université de Boston en économie et relations internationales, Représentante des États-Unis",
    "image" : 
  },
  { "name" : "Emma Watson",
    "bio" : "diplômée de l'université de Brown en littérature anglaise",
    "image" : 
  },
  { "name" : "Françoise Barré-Sinoussi",
    "bio" : "diplômée en médecine de l'université de Paris, prix Nobel de médecine, elle a participé à la découverte du virus de l'immunodéficience humaine à l'origine du sida",
    "image" : 
  },
  { "name" : "Amal Alamuddin Clooney",
    "bio" : "diplômée d'Oxford et de la faculté de droit de New York, avocate en droit international",
    "image" : 
  },
  { "name" : "Claudie Haigneré",
    "bio" : "docteur en neurosciences, scientifique, spationaute et femme politique française, elle est la première femme française et européenne dans l'espace",
    "image" : 
  },
  { "name" : "Marie Curie",
    "bio" : "diplômée de la faculté des Sciences de Paris, licence en sciences physiques, 1ère au concours de l'agrégation de mathématiques, doctorat en physique, première femme professeure à La Sorbonne, 2 fois prix Nobel (physique et chimie)",
    "image" : 
  },
  { "name" : "Kamala Harris",
    "bio" : "diplômée de école de droit Hastings de l'université de Californie",
    "image" : 
  },
  { "name" : "Virginie Guyot",
    "bio" : "Diplômée de l'école de l'air, pilote de chasse de l'armée de l'air française, elle est la première femme à intégrer la Patrouille de France",
    "image" : 
  },
  { "name" : "Wangari Muta Maathai",
    "bio" : "diplomée de l'Université de Nairobi. prix Nobel de la Paix, surnommée la femme qui plantait des arbres, elle est une biologiste, professeure d'anatomie en médecine vétérinaire et militante politique et écologiste",
    "image" : 
  },

]



// // var easing = anime({
// //     targets: '.img',
// //     keyframes: [
// //         {translateY: 0},
// //         {translateX: 1200},
// //         {translateY: 0},
// //         {translateX: 2300},
// //         {translateY: 0}
// //       ],
// //       duration: 10000,
// //       easing: 'easeOutElastic(1, .8)',
// //       loop: 1
// // });

