
const images = [
    {
        src: "gallery/gallery1.png",
        description: "Un lindo conejito viendo a la ventana"
    },
    {
        src: "gallery/gallery2.png",
        description: "Conejo gris mirándote fijamente"
    },
    {
        src: "gallery/gallery3.png",
        description: "Peluche de conejo marrón"
    },
    {
        src: "gallery/gallery4.png",
        description: "Conejo atento esperando que le den comida"
    },
    {
        src: "gallery/gallery5.png",
        description: "Bebé conejo durmiendo"
    },
    {
        src: "gallery/gallery6.png",
        description: "Mi coneja bebé Milanesa"
    },
    {
        src: "gallery/gallery7.png",
        description: "Conejito atento"
    },
    {
        src: "gallery/gallery8.png",
        description: "Conejito bostezando"
    },
    {
        src: "gallery/gallery9.png",
        description: "Sacando la lengua :p"
    },
    {
        src: "gallery/gallery10.png",
        description: "Tipo random disfrazado de conejo"
    }
];

let currentImageIndex = 0;

// Function to update the gallery image and description
function updateGalleryImage() {
    const galleryImage = document.getElementById('gallery-image');
    const galleryDescription = document.getElementById('gallery-description');
    galleryImage.src = images[currentImageIndex].src;
    galleryDescription.textContent = images[currentImageIndex].description;
}

// Function to go to the previous image
function goToPreviousImage() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    updateGalleryImage();
}

// Function to go to the next image
function goToNextImage() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    updateGalleryImage();
}

// Add click event listeners to the previous and next buttons
const prevBtn = document.querySelector('.prev-btn');
prevBtn.addEventListener('click', goToPreviousImage);

const nextBtn = document.querySelector('.next-btn');
nextBtn.addEventListener('click', goToNextImage);

// Update the gallery image and description
updateGalleryImage();
