// -Función para agrandar la foto al hacer click
const images = document.querySelectorAll('.fotos img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('lightbox-close');
images.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || "Imagen ampliada";
    });
});
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
    lightboxImg.src = "";
});
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
        lightboxImg.src = "";
    }
});
// -Función de botón 'ver más'
const verMasBtn = document.getElementById('verMasBtn');
const fotosExtra = document.querySelector('.fotos-extra');

verMasBtn.addEventListener('click', function(e) {
    e.preventDefault(); // -Evita el salto al principio

    if (fotosExtra.style.display === "none") {
        fotosExtra.style.display = "flex";  // -Muestra las fotos extras en una nueva fila y columna
        verMasBtn.textContent = "Ver menos"; // -Cambio de texto
    } else {
        fotosExtra.style.display = "none"; // -Oculta las fotos extras
        verMasBtn.textContent = "Ver más";
    }
});