//生成[1,9]随机数
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var randomInt_1 = getRandomInt(1, 9);
var randomInt_2 = getRandomInt(1, 9);
var randomInt_3 = getRandomInt(1, 9);

document.getElementById("start").addEventListener("click", changeColor);
function changeColor(){
    var idSelect_1 = "#no" + randomInt_1;
    var idSelect_2 = "#no" + randomInt_2;
    var idSelect_3 = "#no" + randomInt_3;
    document.querySelector(idSelect_1).style.backgroundColor = 'red';
    document.querySelector(idSelect_2).style.backgroundColor = 'red';
    document.querySelector(idSelect_3).style.backgroundColor = 'red';
}
