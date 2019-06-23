//生成[1,9]随机整数
function getRandomnum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//生成3个不重复的随机整数
var randomnums = [];
function generate3Randomnums(){
    var num_1 = getRandomnum(1,9);
    var num_2 = getRandomnum(1,9);
    while (num_1 == num_2) {
        num_2 = getRandomnum(1,9);
    }
    var num_3 = getRandomnum(1,9);
    while (num_1 == num_3 || num_2 == num_3)  {
        num_3 = getRandomnum(1,9);
    }
    randomnums.push(num_1, num_2, num_3)
}
generate3Randomnums();

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
    randomnums = [];
    generate3Randomnums();
    randomColors = [];
    for(var i = 0; i < 3; i++) {
        randomColors.push(getRandomColor());
    }
    document.querySelector("#no" + randomnums[0]).style.backgroundColor = randomColors[0];
    document.querySelector("#no" + randomnums[1]).style.backgroundColor = randomColors[1];
    document.querySelector("#no" + randomnums[2]).style.backgroundColor = randomColors[2];
}

//9个方块全部回到橙色
function colorToOrange(){
    document.querySelector("#no1").style.backgroundColor = "orange";
    document.querySelector("#no2").style.backgroundColor = "orange";
    document.querySelector("#no3").style.backgroundColor = "orange";
    document.querySelector("#no4").style.backgroundColor = "orange";
    document.querySelector("#no5").style.backgroundColor = "orange";
    document.querySelector("#no6").style.backgroundColor = "orange";
    document.querySelector("#no7").style.backgroundColor = "orange";
    document.querySelector("#no8").style.backgroundColor = "orange";
    document.querySelector("#no9").style.backgroundColor = "orange";
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