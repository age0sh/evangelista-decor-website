document.addEventListener('DOMContentLoaded', function() {
   const images = document.querySelectorAll('.collage img');
   
   // Efecto hover para imágenes
   images.forEach(image => {
       image.addEventListener('mouseenter', function() {
           this.classList.add('hovered');
       });
       
       image.addEventListener('mouseleave', function() {
           this.classList.remove('hovered');
       });
   });



});
document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
    duration: 1200, // Duración de la animación en milisegundos
    once: true, // Si la animación se debería ejecutar solo una vez
  });
});
function enviarMensajeWhatsApp() {
   var numero = "523751115739"; // Reemplaza con el número de teléfono
   var mensaje = "Me gustaría obtener más información sobre un servicio de Koos"; // Reemplaza con tu mensaje
   var url = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensaje)}`;
   window.open(url, '_blank');
}



document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.galeria').forEach(galeria => {
      const fila = galeria.querySelector('.fila');
      const images = Array.from(fila.children);
      const prevButton = galeria.querySelector('.anterior');
      const nextButton = galeria.querySelector('.siguiente');

      let currentIndex = 0;
      let visibleImages = window.innerWidth <= 1470 ? 1 : 3;
      const totalImages = images.length;

      function updateGallery() {
          visibleImages = window.innerWidth <= 1470 ? 1 : 3; // Ajusta según el tamaño de la pantalla
          images.forEach((img, index) => {
              if (index >= currentIndex && index < currentIndex + visibleImages) {
                  img.style.display = 'inline-block';
              } else {
                  img.style.display = 'none';
              }
          });

          prevButton.disabled = currentIndex === 0;
          nextButton.disabled = currentIndex + visibleImages >= totalImages;
      }

      prevButton.addEventListener('click', () => {
          if (currentIndex > 0) {
              currentIndex -= visibleImages;
              if (currentIndex < 0) currentIndex = 0;
              updateGallery();
          }
      });

      nextButton.addEventListener('click', () => {
          if (currentIndex + visibleImages < totalImages) {
              currentIndex += visibleImages;
              updateGallery();
          }
      });

      window.addEventListener('resize', updateGallery); // Actualiza la galería al redimensionar la ventana

      updateGallery();
  });
});