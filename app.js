var favColor = "blue";
var favNumber = 10;
var Happy = true;
var Months = ["January", "Febuary", "March", "April"]
var Planets ={
    favPlanet:"Saturn"
}
console.log(favColor, favNumber, Happy, Months, Planets)
for(var i=0; i<Months.length; i++){
    console.log(Months[i])
}
console.log(Planets.favPlanet)
if(Planets.favPlanet = "Saturn"){
    console.log("My favorite Planet is Saturn")
}else{
    console.log("My foavorite planet is not Saturn")
}