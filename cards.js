
//EVENTOS DE INTERÉS

const cardContainer = document.querySelector('.card-container');

// Aquí se pueden definir los datos de las tarjetas, por ejemplo, un arreglo de objetos
const data = [
  {
    title: "Evento 1",
    description: "Descripción del evento 1",
    image: "https://img.remediosdigitales.com/81dc6f/audi-a4-2020-mexico_/840_560.jpg",
  },
  {
    title: "Evento 2",
    description: "Descripción del evento 2",
    image: "https://www.anahuac.mx/mexico/sites/default/files/styles/webp/public/noticias/Home-Office.jpg.webp?itok=1ZlPOjHS",
  },
  {
    title: "Evento 3",
    description: "Descripción del evento 3",
    image: "https://media.gq.com.mx/photos/6233725c1982a4c011ad4b8c/master/pass/home%20office-1214685357.jpg",
  },
  {
    title: "Evento 4",
    description: "Descripción del evento 4",
    image: "https://i.pinimg.com/originals/fe/d8/4d/fed84d15c7eb7949f3ab79b1b78f61e4.jpg",
  },
  
  // Agregar más objetos de eventos si se desean
];

// Crear cada tarjeta a partir de los datos
data.forEach((event) => {
    const card = document.createElement("div");
    card.className = "card";
    
    const cardText = document.createElement("div");
    cardText.className = "card-text";
    
    const title = document.createElement("h2");
    title.className = "card-title";
    title.textContent = event.title;
    
    const description = document.createElement("p");
    description.className = "card-description";
    description.textContent = event.description;
    
    const image = document.createElement("img");
    image.className = "card-image";
    image.src = event.image;
    
    cardText.appendChild(title);
    cardText.appendChild(description);
    
    card.appendChild(cardText);
    card.appendChild(image);
    
    cardContainer.appendChild(card);
});
