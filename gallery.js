const images = [
    "assets/image1.png",
    "assets/image2.png",
    "assets/image3.png",
    "assets/image4.png",
    "assets/image5.png",
    "assets/image6.png",
    "assets/image7.png",
    "assets/image8.png",
    "assets/image9.png",
    "assets/image10.png",
    "assets/image11.png",
    "assets/image12.png",
    "assets/image13.png",
    "assets/image14.png",
    "assets/image15.png",
    "assets/image16.png",
    "assets/image17.png",
    "assets/image18.png",
    "assets/image19.png",
    "assets/image20.png",
    "assets/image21.png",
    "assets/image22.png",
    "assets/image23.png",
    "assets/image24.png",
    "assets/image25.png",
    "assets/image26.png",
    "assets/image27.png",
    "assets/image28.png",
    "assets/image29.png",
    "assets/image30.png",
    "assets/image31.png",
    "assets/image32.png",
    "assets/image33.png",
    "assets/image34.png",
    "assets/image35.png",
    "assets/image36.png",
    "assets/image37.png",
    "assets/image38.png",
    "assets/image39.png",
    "assets/image40.png",
    "assets/image41.png",
    "assets/image42.png",
    "assets/image43.png",
    "assets/image44.png",
    "assets/image45.png",
    "assets/image46.png",
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
  "assets/pg180.jpg",
  "assets/pg181.jpg",
  "assets/pg182.jpg",
  "assets/pg183.jpg",
  "assets/pg184.jpg",
  "assets/pg185.jpg",
  "assets/pg186.jpg",
  "assets/pg187.jpg",
  "assets/pg188.jpg",
  "assets/pg189.jpg",
  "assets/pg190.jpg",
  "assets/pg191.jpg",
  "assets/PPH12.jpg",
  "assets/PPH14.jpg",
  "assets/PPH180.jpg",
  "assets/PPH181.jpg",
  "assets/PPH182.jpg",
  "assets/PPH183.jpg",
  "assets/PPH184.jpg",
  "assets/PPH185.jpg",
  "assets/PPH186.jpg",
  "assets/PPH187.jpg",
  "assets/PPH188.jpg",
  "assets/PPH189.jpg",
  "assets/PPH190.jpg",
  "assets/PPH191.jpg",
  "assets/PPH192.jpg",
  "assets/PPH188z.jpg",
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