const checkbox = document.getElementById('vanishing-checkbox');
const favoriteAnimal = document.getElementById('favorite-animal');
const unhideAnimal = document.getElementById('unhide-animal');

const imageSelector = document.getElementById('image-selector');
const selectedImage = document.getElementById('selected-image');
const animalNamer = document.getElementById('animal-name');
const namedAnimal = document.getElementById('named-animal');
const theme = document.getElementById('theme-selector');

checkbox.addEventListener('change', () => {
    unhideAnimal.disabled = checkbox.checked;
    checkbox.classList.add('hidden');
    console.log('checkbox is checked');
});

unhideAnimal.addEventListener('click', () => {
    favoriteAnimal.classList.remove('hidden');
    unhideAnimal.classList.add('hidden');
});

imageSelector.addEventListener('change', () => {
    const src = 'assets/animalPics/' + imageSelector.value;
    selectedImage.src = src;
});

animalNamer.addEventListener('input', () => {
    namedAnimal.textContent = animalNamer.value;
});

theme.addEventListener('change', () => {
    selectedImage.style.border = `15px solid ${theme.value}`; 
    
});
