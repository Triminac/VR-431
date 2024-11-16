const images = [
    "assets/image1.png",
    "assets/image2.png",
    "assets/image3.png",
    "assets/image4.png",
    "assets/image5.png",
    // "/images/image6.png",
    // "/images/image7.png",
    // "/images/image8.png",
    // "/images/image9.png",
    // "/images/image10.png",
    // "/images/image11.png",
    // "/images/image12.png",
    // "/images/image13.png",
    // "/images/image14.png",
    // "/images/image15.png",
    // "/images/image16.png",
    // "/images/image17.png",
    // "/images/image18.png",
    // "/images/image19.png",
    // "/images/image20.png",
    // "/images/image21.png",
    // "/images/image22.png",
    // "/images/image23.png",
    // "/images/image24.png",
    // "/images/image25.png",
    // "/images/image26.png",
    // "/images/image27.png",
    // "/images/image28.png",
    // "/images/image29.png",
    // "/images/image30.png",
    // "/images/image31.png",
    // "/images/image32.png",
    // "/images/image33.png",
    // "/images/image34.png",
    // "/images/image35.png",
    // "/images/image36.png",
    // "/images/image37.png",
    // "/images/image38.png",
    // "/images/image39.png",
    // "/images/image40.png",
    // "/images/image41.png",
    // "/images/image42.png",
    // "/images/image43.png",
    // "/images/image44.png",
    // "/images/image45.png",
    // "/images/image46.png",
  ];
  
  let currentIndex = 0;
  
  const galleryImage = document.getElementById("gallery-image");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const galleryCaption = document.getElementById("gallery-caption");

  // Function to update the displayed image for the first gallery
  function updateImage(index) {
    galleryImage.src = images[index];
    galleryImage.alt = `Storyboard Frame ${index + 1}`;
    galleryCaption.textContent = `Step ${index + 1} of ${images.length}`;
  }
  
  // Event listeners for navigation buttons
  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage(currentIndex);
  });
  
  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage(currentIndex);
  });
  
  // Initialize the first gallery
updateImage(currentIndex);

// --- New Code for the Medical Reference Gallery ---

// Medical reference gallery images
const medicalImages = [
  "assets/pg177.jpg",
  "assets/pg178.jpg",
  "assets/pg179.jpg",
  // "/medical reference/pg180.jpg",
  // "/medical reference/pg181.jpg",
  // "/medical reference/pg182.jpg",
  // "/medical reference/pg183.jpg",
  // "/medical reference/pg184.jpg",
  // "/medical reference/pg185.jpg",
  // "/medical reference/pg186.jpg",
  // "/medical reference/pg187.jpg",
  // "/medical reference/pg188.jpg",
  // "/medical reference/pg189.jpg",
  // "/medical reference/pg190.jpg",
  // "/medical reference/pg191.jpg",
  // "/medical reference/PPH12.jpg",
  // "/medical reference/PPH14.jpg",
  // "/medical reference/PPH180.jpg",
  // "/medical reference/PPH181.jpg",
  // "/medical reference/PPH182.jpg",
  // "/medical reference/PPH183.jpg",
  // "/medical reference/PPH184.jpg",
  // "/medical reference/PPH185.jpg",
  // "/medical reference/PPH186.jpg",
  // "/medical reference/PPH187.jpg",
  // "/medical reference/PPH188.jpg",
  // "/medical reference/PPH189.jpg",
  // "/medical reference/PPH190.jpg",
  // "/medical reference/PPH191.jpg",
  // "/medical reference/PPH192.jpg",
  // "/medical reference/PPH188z.jpg",
];

let medicalCurrentIndex = 0;

const medicalGalleryImage = document.getElementById("gallery-image-medical");
const medicalPrevButton = document.getElementById("prev-medical");
const medicalNextButton = document.getElementById("next-medical");
const medicalGalleryCaption = document.getElementById("gallery-caption-medical");

// Function to update the displayed image for the medical gallery
function updateMedicalImage(index) {
  medicalGalleryImage.src = medicalImages[index];
  medicalGalleryImage.alt = `Medical Reference Frame ${index + 1}`;
  medicalGalleryCaption.textContent = `${index + 1} of ${medicalImages.length}`;
}

// Event listeners for medical gallery navigation buttons
medicalPrevButton.addEventListener("click", () => {
  medicalCurrentIndex = (medicalCurrentIndex - 1 + medicalImages.length) % medicalImages.length;
  updateMedicalImage(medicalCurrentIndex);
});

medicalNextButton.addEventListener("click", () => {
  medicalCurrentIndex = (medicalCurrentIndex + 1) % medicalImages.length;
  updateMedicalImage(medicalCurrentIndex);
});

// Initialize the medical gallery
updateMedicalImage(medicalCurrentIndex);