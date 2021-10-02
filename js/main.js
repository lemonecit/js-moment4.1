/*
I denna fil lägger du din JavaScript-kod för att lösa uppgiften.
*/

// Liberal notation vibraler
const movie1 = {title: "star wars", category: "Science Fiction", playtime:190 };
const movie2 = {title: "Introduction to Javascript", category: "Utbildning", playtime:15 };
const movie3 = {title: "The last fotsteps of a viking in Birka", category: "Documentary", playtime:190 };
const movie4 = {title: "Farlig kärlekförbindelse", category: "Action", playtime:190 };

// function accessing from liberal notation vibraler
let movies = {
      getInformation:function() {
          return     movie1.title + " " +  movie1.category + " " + movie1.playtime + "\n" +
          movie2.title + " " +  movie2.category + " " + movie2.playtime + "\n" +
          movie3.title + " " +  movie3.category + " " + movie3.playtime + "\n" + 
          movie4.title + " " +  movie4.category + " " + movie4.playtime + "\n";

        }
      }

      // utskrift
let utskrift = document.getElementById("output").innerHTML += movies.getInformation();











