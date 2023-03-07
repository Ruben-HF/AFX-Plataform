// Esta función devuelve una promesa que resuelve el texto de la respuesta a una solicitud GET a una URL determinada
function fetchTemplate(url) {
  return new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(this.responseText);
        } else {
          reject(new Error(`Request failed: ${this.status}`));
        }
      }
    };
    xhr.open('GET', url);
    xhr.send();
  });
}

// Esta función carga el contenido del archivo "template.html" en la etiqueta header del documento HTML
async function loadHeader() {
  const header = document.getElementsByTagName('header')[0];
  try {
    const responseText = await fetchTemplate('template.html');
    header.innerHTML = responseText;
  } catch (error) {
    console.error(error);
  }
}

// Esta función carga el contenido del archivo "template.html" en la etiqueta footer del documento HTML y muestra el año actual 
async function loadFooter() {
  const footer = document.getElementsByTagName('footer')[0];
  try {
    const responseText = await fetchTemplate('template.html');
    footer.innerHTML = responseText;
    showCurrentYear();
  } catch (error) {
  console.error(error);
 }
}
  
// Esta función crea una etiqueta <span> con el año actual y los derechos reservados, y la agrega a todas las etiquetas con clase "current-year"
function showCurrentYear() {
  const currentYear = new Date().getFullYear();
  const currentYearElements = document.querySelectorAll('.current-year');
  for (let i = 0; i < currentYearElements.length; i++) {
    const span = document.createElement('span');
    span.innerHTML = `${currentYear} - Derechos Reservados.`;
    currentYearElements[i].appendChild(span);
  }
}
  


  


  
