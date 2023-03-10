
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





//CARDS DE BLOG

const blogsContainer = document.querySelector('.blogs-container');

// Aquí se pueden definir los datos de las tarjetas, por ejemplo, un arreglo de objetos
const datablogs = [
  {
    title: "Blog 1",
    description: "Descripción del blog 1",
    image: "https://img.remediosdigitales.com/81dc6f/audi-a4-2020-mexico_/840_560.jpg",
    link: "/#",
  },
  {
    title: "Blog 2",
    description: "Descripción del blog 2",
    image: "https://www.anahuac.mx/mexico/sites/default/files/styles/webp/public/noticias/Home-Office.jpg.webp?itok=1ZlPOjHS",
    link: "/#"
  },
  {
    title: "Blog 3",
    description: "Descripción del blog 3",
    image: "https://media.gq.com.mx/photos/6233725c1982a4c011ad4b8c/master/pass/home%20office-1214685357.jpg",
    link: "/#"
  },
  {
    title: "Blog 4",
    description: "Descripción del blog 4",
    image: "https://i.pinimg.com/originals/fe/d8/4d/fed84d15c7eb7949f3ab79b1b78f61e4.jpg",
    link: "/#"
  },
  
  // Agregar más objetos de eventos si se desean
];

// Crear cada tarjeta a partir de los datos
datablogs.forEach((blogData) => {
  const blogCard = document.createElement("div");
  blogCard.className = "blog-card";
  
  const blogText = document.createElement("div");
  blogText.className = "blog-text";
  
  const titleBlog = document.createElement("h2");
  titleBlog.className = "blog-title";
  titleBlog.textContent = blogData.title;
  
  const descriptionBlog = document.createElement("p");
  descriptionBlog.className = "blog-description";
  descriptionBlog.textContent = blogData.description;

  const linkBlog = document.createElement("a");
  linkBlog.className = "blog-link";
  linkBlog.setAttribute('href', blogData.link); // Agregar la referencia del enlace
  linkBlog.textContent = "Leer más";
  
  const imageBlog = document.createElement("img");
  imageBlog.className = "blog-image";
  imageBlog.src = blogData.image;
  
  blogText.appendChild(titleBlog);
  blogText.appendChild(descriptionBlog);
  blogText.appendChild(linkBlog); // Agregar el enlace al contenedor de texto
  
  blogCard.appendChild(blogText);
  blogCard.appendChild(imageBlog);
  
  blogsContainer.appendChild(blogCard);
});





//BLOG PRINCIPAL

const blogPrin = document.querySelector('.blogPrin');

const dataBlogs = [
  {
    title: "Blog 0",
    description: "Descripción más extensa del contenido del blog, se sugiere incluir palabras clave para el posicionamiento del website.",
    description2: "El texto recomendado debe abarcar un resumen y primer parrafo del contenido más interesante y llamativo.",
    image: "https://media.admagazine.com/photos/618a62dfaf428eae6e0b597a/16:9/w_3600,h_2025,c_limit/76351.jpg",
    link: "/#",
  },
];

dataBlogs.forEach((blogData) => {
  const blogCard = document.createElement("div");
  blogCard.className = "blogP-card";
  
  const blogText = document.createElement("div");
  blogText.className = "blogP-text";

  const linkBlog = document.createElement("a");
  linkBlog.className = "blogP-link";
  linkBlog.setAttribute('href', blogData.link); // Agregar la referencia del enlace
  linkBlog.textContent = "Leer más";
  
  const titleBlog = document.createElement("h2");
  titleBlog.className = "blogP-title";
  titleBlog.textContent = blogData.title;
  
  const descriptionBlog = document.createElement("p");
  descriptionBlog.className = "blogP-description";
  descriptionBlog.textContent = blogData.description;

  const description2Blog = document.createElement("p");
  description2Blog.className = "blogP-description";
  description2Blog.textContent = blogData.description2;
  
  const imageBlog = document.createElement("img");
  imageBlog.className = "blogP-image";
  imageBlog.src = blogData.image;
  
  
  blogCard.appendChild(imageBlog);

  blogText.appendChild(titleBlog);
  blogText.appendChild(descriptionBlog);
  blogText.appendChild(description2Blog);
  blogText.appendChild(linkBlog); // Agregar el enlace al contenedor de texto
  
  blogCard.appendChild(blogText);
  
  blogPrin.appendChild(blogCard);
});