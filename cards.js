//BLOG PRINCIPAL
const blogPrin = document.querySelector('.blogPrin');

const dataBlogs = [
  {
    title: "Cómo la tecnología está permitiendo el trabajo remoto",
    description: "Este artículo explora cómo la tecnología está permitiendo el trabajo remoto y cómo ha afectado al mundo laboral en términos de productividad y flexibilidad. También se discuten las mejores prácticas para trabajar de forma remota y las herramientas que se necesitan para hacerlo con éxito.",
    description2: "",
    image: "https://www.anahuac.mx/mexico/sites/default/files/styles/webp/public/noticias/Home-Office.jpg.webp?itok=1ZlPOjHS",
    link: "https://main--astonishing-blini-3ae91c.netlify.app/blog/tho",
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












//CARDS DE BLOG
const blogsContainer = document.querySelector('.blogs-container');

// Aquí se pueden definir los datos de las tarjetas, por ejemplo, un arreglo de objetos
const datablogs = [
  {
    title: "Los riesgos de la seguridad en la nube: cómo proteger su información en línea",
    description: "Este artículo explicará los peligros de almacenar información en línea y cómo los usuarios pueden protegerse contra ataques cibernéticos. Se discutirán temas como la autenticación de dos factores, el cifrado y la gestión de contraseñas seguras.",
    image: "https://images.unsplash.com/photo-1573164713712-03790a178651?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
    link: "/#",
  },
  {
    title: "Lo que podemos esperar de la tecnología en el futuro",
    description: "Este artículo analizará algunas de las tendencias tecnológicas más importantes que están surgiendo en el mercado actual y cómo pueden afectar nuestras vidas en el futuro. Se discutirán temas como la inteligencia artificial, la robótica, el internet de las cosas y la realidad virtual.",
    image: "https://media.admagazine.com/photos/618a62dfaf428eae6e0b597a/16:9/w_3600,h_2025,c_limit/76351.jpg",
    link: "/#"
  },
  {
    title: "Cómo la IA está transformando el mundo empresarial",
    description: "Este artículo analizará cómo la inteligencia artificial está siendo utilizada en el mundo empresarial para mejorar la eficiencia, la productividad y la toma de decisiones. Se discutirán temas como el aprendizaje automático, la automatización y el procesamiento del lenguaje natural.",
    image: "https://images.unsplash.com/photo-1655720840699-67e72c0909d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80",
    link: "/#"
  },
  {
    title: "Empresas disruptivas que están cambiando el juego",
    description: "Este artículo presentará algunas de las empresas más innovadoras y disruptivas que están cambiando el panorama empresarial en la actualidad. Se discutirán empresas como Tesla, Uber y Airbnb, y se explicará cómo están cambiando la forma en que hacemos negocios.",
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












//CONTACTO
// Código JavaScript para darle estilo a la sección de contacto
const contactForm = document.getElementById("contactForm");
const nameLabel = contactForm.querySelector("label[for='name']");
const nameInput = contactForm.querySelector("#name");
const emailLabel = contactForm.querySelector("label[for='email']");
const emailInput = contactForm.querySelector("#email");
const messageLabel = contactForm.querySelector("label[for='message']");
const messageTextarea = contactForm.querySelector("#message");
const submitButton = contactForm.querySelector("input[type='submit']");

// Estilos CSS para los campos del formulario de contacto
nameLabel.style.fontWeight = "bold";
emailLabel.style.fontWeight = "bold";
messageLabel.style.fontWeight = "bold";

nameInput.style.borderRadius = "6px";
emailInput.style.borderRadius = "6px";
messageTextarea.style.borderRadius = "6px";

submitButton.style.marginTop = "21px";
submitButton.style.fontSize = "21";

// Manejador de eventos para enviar el formulario de contacto
contactForm.addEventListener("submit", (event) => {
	event.preventDefault();

	const formData = new FormData(contactForm);

	fetch("procesar-formulario.php", {
		method: "POST",
		body: formData
	}).then(response => {
		alert("¡Gracias por contactarnos! Te responderemos lo antes posible.");
		contactForm.reset();
	}).catch(error => {
		alert("Ha ocurrido un error al enviar el formulario. Por favor inténtalo de nuevo más tarde.");
	});
});












//SALES INDEX 
// Obtener la sección existente con el ID salesIndex
const salesSection = document.getElementById("salesIndex");

// Crear el título de la sección
const title = document.createElement("h1");
title.classList.add("blackTittle");
title.innerHTML = 'Comienza <span class="grayTittle">de inmediato</span>';


const plansContainer = document.createElement("div");
plansContainer.classList.add("plans-container");

const planBasic2 = document.createElement("div");
planBasic2.classList.add("plan");
planBasic2.innerHTML = `
  <h3>Plan Inicial</h3>
  <p>Acceso a mini-apps básicas para tu día a día.</p>
  <p><p>Precio: $59/ mes</p> </p>
  <button>Comenzar</button>
`;

const planBasic = document.createElement("div");
planBasic.classList.add("plan");
planBasic.innerHTML = `
  <h3>Plan Básico</h3>
  <p>Acceso a contenido exclusivo + mini-apps</p>
  <p><p>Precio: $149/ mes</p> </p>
  <button>Comenzar</button>
`;

const planPremium = document.createElement("div");
planPremium.classList.add("plan");
planPremium.innerHTML = `
  <h3>Plan Premium</h3>
  <p>Acceso ilimitado a contenido exclusivo + apps a tu medida.</p>
  <p><p>Precio: $249/ mes</p> </p>
  <button>Comenzar</button>
`;

// Agregar los planes de suscripción al contenedor
plansContainer.appendChild(planBasic2);
plansContainer.appendChild(planBasic);
plansContainer.appendChild(planPremium);

// Agregar los elementos a la sección existente
salesSection.appendChild(title);
salesSection.appendChild(plansContainer);












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
