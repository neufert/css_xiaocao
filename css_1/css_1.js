//生成[1,9]随机整数
function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//生成3个不重复的随机整数
var randomNums = [];
function generate3randomNums(){
    var num_1 = getRandomNum(0,8);
    var num_2 = getRandomNum(0,8);
    while (num_1 == num_2) {
        num_2 = getRandomNum(0,8);
    }
    var num_3 = getRandomNum(0,8);
    while (num_1 == num_3 || num_2 == num_3)  {
        num_3 = getRandomNum(0,8);
    }
    randomNums.push(num_1, num_2, num_3)
}
generate3randomNums();

//生成随机颜色,copy from:
//https://stackoverflow.com/questions/1484506/random-color-generator
var randomColors = [];
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//重置颜色和方块，生成新的3个新色块
function changeColor(){
    randomNums = [];
    generate3randomNums();
    randomColors = [];
    for(var i = 0; i < 3; i++) {
        randomColors.push(getRandomColor());
    }
    var allBlocks = document.getElementsByClassName("colorBlock");
    allBlocks[randomNums[0]].style.backgroundColor = randomColors[0];
    allBlocks[randomNums[1]].style.backgroundColor = randomColors[1];
    allBlocks[randomNums[2]].style.backgroundColor = randomColors[2];
}

//9个方块全部回到橙色
function colorToOrange(){
    var allBlocks = document.getElementsByClassName("colorBlock");
    for(var i = 0; i < allBlocks.length; i++){
        allBlocks[i].style.backgroundColor = "orange";
    }
}

//选中不重复的3个方块，随机颜色
document.getElementById("start").addEventListener("click", function(){
    this.disabled=true;//不准再点按钮
    changeColor();
    repeat = setInterval(function(){//1秒后开始重复；repeat用于clearInterval.
        colorToOrange();
        changeColor();
    },1000);
});

document.getElementById("end").addEventListener("click", function(){
    colorToOrange();
    clearInterval(repeat);
    document.getElementById("start").disabled=false;
});