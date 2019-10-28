// bouton close pour chaque éléments de la liste
//
var myNodelist = document.getElementsByTagName("li");
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// clic sur le bouton close pour cacher l'elemnt
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// creation d'un nouvel elemnt qd on clic sur +
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("vous devez écrire qqch!");
    } else {
        document.getElementById("list1").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
}


let counter=500;
let counter1=180;
let counter2=320;
let j=3;
let intervalId = null;
let minutes;
let seconds;
let minutes1;
let seconds1;
let minutes2;
let seconds2;

function bip() {
    minutes = Math.floor((counter / (60)));
    seconds = Math.floor((counter % 60));
    minutes1 = Math.floor((counter1 / (60)));
    seconds1 = Math.floor((counter1 % 60));
    minutes2 = Math.floor((counter2 / (60)));
    seconds2 = Math.floor((counter2 % 60));
    if (j !== 0) {
        if (counter === 0) {
            if (counter1 === 0) {
                counter = 500;
                j--;
                console.log(j);
            } else {
                document.getElementById("bip").innerText =  "Une petite pause s'impose ! Vous avez droit à: " + " " + minutes1 + " " + " minutes" + " " +seconds1 + " " + "secondes" ;
                counter1--;
            }
        } else {
            document.getElementById("bip").innerText =  "AU BOULOT ! Pour "  + " " + minutes + " " + " minutes" + " " +seconds + " " + "secondes";
            counter--;
            counter1 = 180;
        }
    } else {
        if(counter2===0){
            finish();
            start();
        } else {
            counter2--;
            document.getElementById("bip").innerText = "Une grande pause s'impose ! Vous avez droit à un bonus de :" + " " + minutes2 +" " +  " minutes" + " " +seconds2 +" " +  "secondes";
        }
    }
}

function start(){
        intervalId = setInterval(bip, 1000);
}

function initialize() {
    counter=1500;
    counter1=180;
    counter2=720;
    j=3;
}

function finish() {
    clearInterval(intervalId);
    initialize();
}