const colors = ['green', 'red', 'rgba(133,122,220)',
'#f15025'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// wait for the click then execute the function
btn.addEventListener('click', function(){
    // get random number between 0-3
    const randomNumber = Math.floor(Math.random() * colors.length);

    // this is how we are targeting the background color of the site
    document.body.style.backgroundColor = colors[randomNumber];

    // this is how we change the text in for the background color
    color.textContent = colors[randomNumber];
});