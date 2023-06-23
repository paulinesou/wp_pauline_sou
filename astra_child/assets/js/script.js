// ACCUEIL PRINCIPALE
// ANIMATION BACKGROUND DE TEXTE

// const background = document.getElementById('autotext');
// const text = "ecrire mon texte";

// let index = 0;
// const randomSpeed = (min, max) => {
//     return Math.floor(Math.random() * (max - min) + min);
// }

// const play = () => {
//     background.innerHTML = text.slice(0, index)
//     index++;

//     clearInterval(timer);
//     timer = setInterval(play, randomSpeed(50, 300))
// };

// let timer = setInterval(play, 300)

// ACCUEIL GEEK
// EVENEMENT AU CLIC : BOUTON DETAIL PERSONNAGE

const buttonPerso = document.querySelector('#select-perso');
const avatar = document.querySelector('#avatar');
const identite = document.querySelector('#identite-perso');
const equipement = document.querySelector('#equipements');
const competence = document.querySelector('#competences');
const legende = document.querySelector('#legend-avatar');

buttonPerso.addEventListener('click', () => {
	avatar.classList.add('active')
	identite.classList.add('active')
	equipement.classList.add('active')
	competence.classList.add('active')
	legende.classList.add('active')
});


// ANIMATION : APPARITION SECTION HISTOIRE AU SCROLL

const targets = document.querySelectorAll('#histoire');

function handleIntersection(entries) {
    entries.map((entry) => {
      entry.target.classList.remove('active')
        if (entry.isIntersecting) {
            entry.target.classList.add('active')
        } else {
            entry.target.classList.remove('active')
        }
    });
}

const observer = new IntersectionObserver(handleIntersection);
targets.forEach(target => observer.observe(target));




