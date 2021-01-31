function getpin() {

    const randomNumber = Math.random() * 10000;

    const pin = randomNumber.toFixed(0);
    if (pin.length == 4) {

        return pin;

    }

    else {

        return getpin();

    }
}

function generate() {

    const generatBox = document.getElementById("randomInput");
    generatBox.value = getpin();

}

const getDigit = document.getElementById("digit-container").addEventListener('click', function (event) {

    const Number = event.target.innerText;
    const typedPin = document.getElementById("typed-pin");


    if (isNaN(Number)) {

        if (Number == 'C') {
            typedPin.value = "";
        }
    }
    else {

        typedPin.value = typedPin.value + Number;
    }


});

function genetatePin() {

    const generatBox = document.getElementById("randomInput");
    const inputgenerate = generatBox.value ;

    const typedPin = document.getElementById("typed-pin");
    const veryinput = typedPin.value;

    if (inputgenerate === veryinput) {

        display('block','none')
        document.getElementById("typed-pin").value="";     

        
    }
    else {
        display( 'none','block')
      
    }
   
}

function display( currect,incurrect){

    const corectPin = document.getElementById("correct-pin");
    corectPin.style.display =currect;

    const incurrectPin = document.getElementById("incorrectt-pin");
    incurrectPin.style.display = incurrect;


}