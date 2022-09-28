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


// MAPS


var detailsBox = document.getElementById('details-box');

document.addEventListener('mouseover', function (e) {
  if (e.target.tagName == 'path') {
    var content = e.target.dataset.name;
    detailsBox.innerHTML = content;
    detailsBox.style.opacity = "100%";
  }
  else {
    detailsBox.style.opacity = "0%";
  }
});

window.onmousemove = function (e) {
  var x = e.clientX,
      y = e.clientY;
  detailsBox.style.top = (y + 20) + 'px';
  detailsBox.style.left = (x) + 'px';
};