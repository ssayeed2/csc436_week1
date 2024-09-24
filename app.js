'use strict';
const switcher = document.getElementsByClassName('mybtn');


switcher[0].addEventListener('click', function() {
    document.body.classList.toggle('lightTheme');
    document.body.classList.toggle('darkTheme');

    const className = document.body.className; 
    if (className == "lightTheme") {
        this.textContent = "Dark"; 
    } else {
        this.textContent = "Light";
    }
});

const myModal = document.getElementById('exampleModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
