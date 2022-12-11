const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
 "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
 "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const passBtn = document.getElementById('pswbtn');
let firstPassword = document.getElementById('password1');
let secondPassword = document.getElementById('password2');
const pswrange = document.getElementById('pswlength');
const charCount = document.getElementById('pswadjustment');
let passwordLength = 15;
const message = document.querySelector('.message');
let pswMessage = document.getElementById('pswcopied')

// places (loops through) a random character from the array based on the passwordLength and into both text input fields
passBtn.addEventListener('click', () => {
    firstPassword.value = '';
    secondPassword.value = '';
    for (let i = 0; i < passwordLength; i++) {
        firstPassword.value += randomElement(characters);
        secondPassword.value += randomElement(characters);
    }
});

// returns a random character/string from the provided array
function randomElement (array) {
    return array[Math.floor( Math.random() * array.length )]
}

// Updates the variable passwordLength value based on the range selected and updates the html
pswrange.addEventListener('click', (event) => {
    passwordLength = event.target.value;
    charCount.textContent = `
    Adjust password length: ${passwordLength}
    `;
});
// Same as above but in case a keyboard is used instead
pswrange.addEventListener('keyup', (event) => {
    passwordLength = event.target.value;
    charCount.textContent = `
    Adjust password length: ${passwordLength}
    `;
})

// Copies password to clipboard when clicking on the text field for 1st field
firstPassword.addEventListener('click', (event) => {
    event.target.select();
    event.target.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(event.target.value);
    message.classList.remove('hidden')
    setTimeout( () => {
        message.classList.add('hidden')
    }, "800")
});
// Copies password to clipboard when clicking on the text field for 2nd field
secondPassword.addEventListener('click', (event) => {
    event.target.select();
    event.target.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(event.target.value);
    message.classList.remove('hidden');
    setTimeout( () => {
        message.classList.add('hidden')
    }, "1000")
})