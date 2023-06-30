// ACCUEIL PRINCIPALE


// ACCUEIL GEEK
// EVENEMENT AU CLIC : BOUTON DETAIL PERSONNAGE

const buttonPerso = document.querySelector('#select-perso');
const avatar = document.querySelector('#avatar');
const equipement = document.querySelector('#equipements');
const competence = document.querySelector('#competences');
const legende = document.querySelector('#legend-avatar');

buttonPerso.addEventListener('click', () => {
	avatar.classList.add('active')
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




