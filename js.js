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
   var mensaje = "Me gustaría obtener más información sobre un servicio de Evangelista Decor"; // Reemplaza con tu mensaje
   var url = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensaje)}`;
   window.open(url, '_blank');
}



document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.galeria').forEach(galeria => {
        const fila = galeria.querySelector('.fila');
        const images = Array.from(fila.children);
        const puntosContainer = galeria.querySelector('.puntos');
        let currentIndex = 0;
        const visibleImages = 3; // Ajusta el número de imágenes visibles si es necesario
        const totalImages = images.length;
        let intervalId; // Variable para almacenar el ID del intervalo

        // Crear los puntos de navegación
        for (let i = 0; i < Math.ceil(totalImages / visibleImages); i++) {
            const punto = document.createElement('div');
            punto.addEventListener('click', () => {
                currentIndex = i * visibleImages;
                updateGallery();
                restartAutoSlide(); // Reiniciar la rotación automática
            });
            puntosContainer.appendChild(punto);
        }

        function updateGallery() {
            images.forEach((img, index) => {
                if (index >= currentIndex && index < currentIndex + visibleImages) {
                    img.style.display = 'inline-block';
                } else {
                    img.style.display = 'none';
                }
            });

            // Actualizar puntos activos
            const puntos = Array.from(puntosContainer.children);
            puntos.forEach((punto, index) => {
                punto.classList.toggle('active', index === Math.floor(currentIndex / visibleImages));
            });
        }

        function startAutoSlide() {
            intervalId = setInterval(() => {
                currentIndex = (currentIndex + visibleImages) % totalImages;
                updateGallery();
            }, 3000); // Cambia cada 5 segundos
        }

        function stopAutoSlide() {
            clearInterval(intervalId);
        }

        function restartAutoSlide() {
            stopAutoSlide();
            startAutoSlide();
        }

        // Inicializar galería y rotación automática
        updateGallery();
        startAutoSlide();

        // Detener la rotación automática cuando el cursor está sobre una imagen
        images.forEach(img => {
            img.addEventListener('mouseover', () => {
                stopAutoSlide();
            });

            img.addEventListener('mouseout', () => {
                restartAutoSlide();
            });
        });

        window.addEventListener('resize', updateGallery); // Actualiza la galería al redimensionar la ventana
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const close = document.querySelector('.close');

    document.querySelectorAll('.galeria img').forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = img.src;
        });
    });

    close.addEventListener('click', () => {
        modal.style.display = 'none';
    });
});

