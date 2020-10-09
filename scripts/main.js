// var myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hallo Welt!';

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'src/coding.png') {
      myImage.setAttribute ('src','src/coding-blue.png');
    } else {
      myImage.setAttribute ('src','src/coding.png');
    }
}


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
    var myName = prompt('Bitte geben Sie Ihren Namen ein.');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Mozilla ist cool, + myName';
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla ist cool, ' + storedName;
  }
 
  myButton.onclick = function() {
    setUserName();
  }

// function multiply(num1,num2) {
//     var result = num1 * num2;
//     return result;
//   }


// document.querySelector('html').onclick = function() {
//     alert('Hey! Nicht so viel klicken!');
//     }


console.log('hello');