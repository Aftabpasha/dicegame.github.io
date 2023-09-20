var randomnumber1 = Math.floor(Math.random()*6)+1;

var randomdice = "dice"+randomnumber1+".png";

var randomimage = "images/"+randomdice;

var done1 = document.querySelectorAll("img")[0];

done1.setAttribute("src", randomimage);


var randomnumber2 = Math.floor(Math.random()*6)+1;

var randomdice2 = "dice"+randomnumber2+".png";

var randomimage2 = "images/"+randomdice2;

var done2 = document.querySelectorAll("img")[1];

done2.setAttribute("src", randomimage2);


if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML ="🎌 Player 1 wins!";
}
else if(randomnumber1===randomnumber2){
    document.querySelector("h1").innerHTML="😎😎 Draw!!";
}
else{
    document.querySelector("h1").innerHTML ="🎌 Player 2 wins!";
}
