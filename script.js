
// Fonction pour ajuster la variable CSS --header-height
function ajusterVariableCSS() {
    const a = document.getElementById('header');
    const ha = a.offsetHeight;

    // Modifie la variable CSS --header-height
    document.documentElement.style.setProperty('--header-height', ha + 'px');

    const b = document.getElementById('tips');
    const hb = b.offsetHeight / 2;

    // Modifie la variable CSS --header-height
    document.documentElement.style.setProperty('--tips-height', hb + 'px');
}

// Appeler la fonction pour ajuster après le chargement de la page
window.onload = ajusterVariableCSS;
window.onresize = ajusterVariableCSS;  // Recalcule lors du redimensionnement de la fenêtre


const images = [
  document.getElementById("i1"),
  document.getElementById("i2"),
  document.getElementById("i3"),
];

// Taille de l'image et écart
const imageWidth = window.innerWidth * 0.6; 
const spaceBetween = 40; 
const totalWidth = imageWidth + spaceBetween;

// Positions initiales des images
let positions = [0, -totalWidth, -totalWidth * 2];

// Fonction pour animer les images
function animate() {
  for (let i = 0; i < images.length; i++) {
    
    positions[i] += 5; // Déplacement vers la droite
    if (positions[i] > totalWidth * 1.4) {
      // Si une image sort complètement de l'écran à droite,
      positions[i] = positions[(i + 2) % images.length] - totalWidth;
    }
    else{
        images[i].style.display = 'none';  
        images[i].style.transform = `translateX(${positions[i]}px)`;
        images[i].style.display = 'block';  
    }
    
  }

  requestAnimationFrame(animate); // Boucle d'animation
}

// Initialiser les positions des images
images.forEach((img, index) => {
  img.style.transform = `translateX(${positions[index]}px)`;
});

// Lancer l'animation
animate();

$(document).ready(function () {
    $('#autoWidth').lightSlider({
        autoWidth: true,
        loop: true,
        onSliderLoad: function () {
            $('#autoWidth').removeClass('cS-hidden');
        }
    });
});