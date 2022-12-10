const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
 "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
 "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const passBtn = document.getElementById('pswbtn');
let firstPassword = document.getElementById('password1');
let secondPassword = document.getElementById('password2');
let passwordLength = 15;

passBtn.addEventListener('click', () => {
    firstPassword.textContent = '';
    secondPassword.textContent = '';
    for (let i = 0; i < passwordLength; i++) {
        firstPassword.textContent += randomElement(characters);
    }
    for (let i = 0; i < passwordLength; i++) {
        secondPassword.textContent += randomElement(characters);
    }
});

function randomElement (array) {
    return array[Math.floor( Math.random() * array.length )]
}

