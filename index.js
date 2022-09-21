// SOUND ON/OFF 


const forestELEMENT = document.getElementById('forest');
const forestAUDIO = document.getElementById('forestAUDIO');
let count = 0;


const ELEMENT = document.querySelectorAll('.e-container');
ELEMENT.forEach((element) => {
    element.addEventListener('click', () => {

        ELEMENT.forEach(element => {
            element.classList.remove('selected')
        });
        // write code that pauses eveery playing audio here 

        element.classList.add('selected')
        const elementAUDIO = document.querySelector('.selected > .audio');

    if(count == 0){
        count = 1;
        elementAUDIO.play();
    }else{
        count = 0;
        // elementAUDIO.classList.remove('selected');
        ELEMENT.forEach(element => element.classList.remove('selected'));
        elementAUDIO.pause(); 
    } 
    })
});





