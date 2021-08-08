console.log('Message from Javascript');

var clickCount = 54654;

var maxInput = document.getElementById('clickCountInput'); // input
var maxH3 = document.getElementsByClassName('headerCount'); // [h3, h4]
// document.getElementsByClassName('')

function handleBtnClick() {
    clickCount++;
    console.log(' index button clicked ' + clickCount + " times");
    maxInput.value = clickCount;
    maxH3[0].innerText = clickCount;
}


function calculateSum() {
    var input1 = document.getElementById('clickCountInput');
    var input2 = document.getElementById('clickCountInput2');
    var sum = input1.valueAsNumber + input2.valueAsNumber;
    var h3 = document.getElementsByClassName("inputSum");
    h3[0].innerText = "Sum : " + sum;
    h3[0].style.color = 'red';
    h3[0].style.backgroundColor = 'green';
    h3[0].style.backgroundColor = 'green';
}

// EVENT
