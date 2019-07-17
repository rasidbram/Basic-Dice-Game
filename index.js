//for first dice
var randomNumber1=Math.floor(Math.random()*6+1);

console.log(randomNumber1);

var randomDiceImage='dice'+randomNumber1+'.png';

var randomImageSource='images/'+ randomDiceImage;

var image1= document.querySelectorAll('img')[0];

image1.setAttribute('src',randomImageSource);
// for second dice
var randomNumber2=Math.floor(Math.random()*6+1);
console.log(randomNumber2);

var randomImageSource2='images/dice'+ randomNumber2+'.png';

document.querySelectorAll('img')[1].setAttribute('src',randomImageSource2);

// conditions
if(randomNumber1>randomNumber2){
    document.querySelector('h1').innerHTML='Winner is player1'

}if(randomNumber1===randomNumber2){
    document.querySelector('h1').innerHTML='No winner'

}else{
    document.querySelector('h1').innerHTML='Winner is player2'
}
