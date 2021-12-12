let userInput = document.getElementById('search');
let captions = document.querySelectorAll('a');

userInput.addEventListener("keyup", searchFilter);

function searchFilter() {
    
    for (let i = 0; i < captions.length; i++){
        let cap = captions[i].getAttribute('data-caption').toLowerCase();
        if (cap.includes(userInput.value.toLowerCase())){
            captions[i].style.display = "block";
        }
        else {
            captions[i].style.display = "none";
        }
    }
}


