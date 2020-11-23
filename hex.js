const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// Define a variable to store all the characters we want to choose from;
const characters = 'ABCDEF0123456789'
const characterLength = characters.length;

function generateHexCode(){
    // this empty string will store the hexcode we are going to generate
    let hexcode = '#';
    const hexcodeLength = 6;

    /**
     * This is where the hexcode is going to be generated 
     * for each iteration of the loop we are going to add a character to the hexcode string 
     */
    for(let i = 0; i < hexcodeLength; i++){
        hexcode += characters.charAt(Math.floor(Math.random() * characterLength));
    }
    return  hexcode;
}

btn.addEventListener('click', function(){
    const hexcode = generateHexCode();
    // this is how we are targeting the background color of the site
    document.body.style.backgroundColor = hexcode;

    // this is how we change the text in for the background color
    color.textContent = hexcode;
});