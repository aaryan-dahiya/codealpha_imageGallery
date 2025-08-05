const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

galleryItems.forEach((img, index) => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
    currentIndex = index;
  });
});


closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});


nextBtn.addEventListener('click', () => {
  if(currentIndex <galleryItems.length-1){
    currentIndex = (currentIndex + 1);
   lightboxImg.src = galleryItems[currentIndex].src;
  }
  
});


prevBtn.addEventListener('click', () => {
  if(currentIndex >=1){
     currentIndex = currentIndex - 1  ;
     lightboxImg.src = galleryItems[currentIndex].src;
  }
 
});


lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});
