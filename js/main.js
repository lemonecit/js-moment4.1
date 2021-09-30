/*
I denna fil lägger du din JavaScript-kod för att lösa uppgiften.
*/

const movies = {
    getinformation: function(title,category,playtime) {
      return this.title + this.category + this.playtime;
    }
  }

  const movie1 = {
    title: "Star war",
    category: "Science Fiction",
    playtime: "104"
  }

  const movie2 = {
    title: "Star war1",
    category: "Science Fiction",
    playtime: "104"
  }

  const movie3 = {
    title: "Star war2",
    category: "Science Fiction",
    playtime: "104"
  }

  const movie4 = {
    title: "Star war3",
    category: "Science Fiction",
    playtime: "104"
  }


let info = document.getElementById("output").innerHTML = movie4.category;



