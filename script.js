val = document.querySelector('input').value;

new Vue ({

    el: '#app',

    data :  {

        

     randomNumber: '',
     inp: ''



    },


methods : {
    
    guessNumber(event) {
this.randomNumber = Math.floor(Math.random()*10);


    }

},









});

