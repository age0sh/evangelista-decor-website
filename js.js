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



document.addEventListener('DOMContentLoaded', function () {
    const galleries = document.querySelectorAll('.galeria');

    galleries.forEach(galeria => {
        const images = galeria.querySelectorAll('img');
        const puntosContainer = galeria.querySelector('.puntos');
        const prevButton = galeria.querySelector('.prev');
        const nextButton = galeria.querySelector('.next');

        let currentIndex = 0;

        function getItemsPerPage() {
            return window.innerWidth >= 1160 ? 3 : 1;
        }

        function updateGallery() {
            const itemsPerPage = getItemsPerPage();
            images.forEach((img, index) => {
                img.style.display = (index >= currentIndex && index < currentIndex + itemsPerPage) ? 'block' : 'none';
            });

            puntosContainer.innerHTML = '';
            const totalPuntos = Math.ceil(images.length / itemsPerPage);
            for (let i = 0; i < totalPuntos; i++) {
                const punto = document.createElement('div');
                if (i === Math.floor(currentIndex / itemsPerPage)) {
                    punto.classList.add('active');
                }
                puntosContainer.appendChild(punto);
            }

            galeria.style.visibility = 'visible';
        }

        function showNext() {
            const itemsPerPage = getItemsPerPage();
            if (currentIndex + itemsPerPage < images.length) {
                currentIndex += itemsPerPage;
            } else {
                currentIndex = 0;
            }
            updateGallery();
        }

        function showPrev() {
            const itemsPerPage = getItemsPerPage();
            if (currentIndex - itemsPerPage >= 0) {
                currentIndex -= itemsPerPage;
            } else {
                currentIndex = Math.max(0, images.length - itemsPerPage);
            }
            updateGallery();
        }

        prevButton.addEventListener('click', showPrev);
        nextButton.addEventListener('click', showNext);

        window.addEventListener('resize', updateGallery);

        updateGallery();

                // Agrega detección de deslizar
                galeria.addEventListener('touchstart', (e) => {
                    startX = e.touches[0].clientX;
                    isSwiping = false; // Resetea el estado de deslizamiento
                });
        
                galeria.addEventListener('touchmove', (e) => {
                    endX = e.touches[0].clientX;
                    if (Math.abs(startX - endX) > 30) {
                        isSwiping = true; // Solo se considera un deslizamiento si la diferencia es mayor a 30px
                    }
                });
        
                galeria.addEventListener('touchend', () => {
                    const deltaX = startX - endX;
                    if (isSwiping) {
                        if (deltaX > 50) {
                            showNext(); // Deslizó hacia la izquierda, muestra la siguiente imagen
                        } else if (deltaX < -50) {
                            showPrev(); // Deslizó hacia la derecha, muestra la imagen anterior
                        }
                    }
                });
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


document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('MenuItems');
    menu.classList.toggle('show');
});

// Cerrar el menú si se hace clic fuera de él
document.addEventListener('click', function(event) {
    var menu = document.getElementById('MenuItems');
    var menuIcon = document.getElementById('menu-toggle');

    if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
        menu.classList.remove('show');
    }
});