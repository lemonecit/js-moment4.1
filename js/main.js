/*
I denna fil lägger du din JavaScript-kod för att lösa uppgiften.
*/

const movie1 = '{"Title":"Star Wars", "category":"Science Fiction"}';

const obj = JSON.parse(movie1);

document.getElementById("output").innerHTML = obj.Title + ", " + obj.category;