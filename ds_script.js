const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const closeBtn = document.querySelector('.lightbox .close');

galleryImages.forEach(image => {
  image.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
  if (e.target !== lightboxImage) {
    lightbox.style.display = 'none';
  }
});
