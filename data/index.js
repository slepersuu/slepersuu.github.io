
function getMinutes(seconds){
    var rest = seconds % 60;
    var minutes = (seconds - rest) /60;
    return minutes + ":" + rest;
}
const dataPoczatku = new Date(2020,10,21);
const dataKonca = new Date(2020,11,31);

const poczDesk = 30;
const poczTrzymanie = 10;
const poczBurpee = 5;

const dzisiaj = new Date();

const challDay = parseInt((dzisiaj.getTime() - dataPoczatku.getTime())/(24*3600*1000)) +1;
console.log(dataPoczatku);
// const challDay = dateDiff.getUTCDate()-1;

const totalDays = parseInt((dataKonca.getTime() - dataPoczatku.getTime())/(24*3600*1000))+1;
// console.log(totalDiff);
// const totalDays = totalDiff.getUTCDate()-1;
// console.log(totalDays);
var podDeska = document.getElementById("pod-deska");
var podTrzymanie = document.getElementById("pod-trzymanie");
var podBurpee = document.getElementById("pod-burpee");

var dzisDeska = document.getElementById("dzis-deska");
var dzisTrzymanie = document.getElementById("dzis-trzymanie");
var dzisBurpee = document.getElementById("dzis-burpee");

var ostatniDeska = document.getElementById("ostatni-deska");
var ostatniTrzymanie = document.getElementById("ostatni-trzymanie");
var ostatniBurpee = document.getElementById("ostatni-burpee");

var progress = document.getElementById("progress-bar");

var day = document.getElementById("day");


day.textContent = challDay;


dzisDeska.textContent = getMinutes(poczDesk + 5*(challDay));
dzisTrzymanie.textContent = getMinutes(poczTrzymanie+2*(challDay));
dzisBurpee.textContent = poczBurpee + challDay ;

ostatniDeska.textContent = getMinutes(poczDesk + 5*(totalDays));
ostatniTrzymanie.textContent = getMinutes(poczTrzymanie + 2*(totalDays));
ostatniBurpee.textContent = poczBurpee + totalDays ;

progress.style.width = (challDay/totalDays)*100 + "%";
progress.textContent = parseInt((challDay/totalDays)*100) + "%";
