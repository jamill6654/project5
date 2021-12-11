

//selecting elements and declaring variables
let userInput = document.querySelector('#search').value;
let captions = document.querySelectorAll('a [data-caption]');
const photos = document.querySelectorAll('img');

//changing variables to uppercase for consistency
userInput = userInput.toUpperCase();

for (let i = 0; i < captions.length; i++){
captions = captions[i].toUpperCase();
};

//loop to display images with only matching data-captions
for (let i = 0; i < photos.length; i++){
    if (captions.value === 'Null'){
        for (let i = 0; i < photos.length; i++){
            photos[i].style.display = grid;
        }
    }
    else if (captions[i].includes(userInput)){
        photos[i].style.display = grid;
    }
    else {
        photos[i].style.display = none;
    }
}