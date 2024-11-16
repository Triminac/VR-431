const images = [
    "../images/image1.png",
    "../images/image2.png",
    "../images/image3.png",
    "../images/image4.png",
    "../images/image5.png",
    "../images/image6.png",
    "../images/image7.png",
    "../images/image8.png",
    "../images/image9.png",
    "../images/image10.png",
    "../images/image11.png",
    "../images/image12.png",
    "../images/image13.png",
    "../images/image14.png",
    "../images/image15.png",
    "../images/image16.png",
    "../images/image17.png",
    "../images/image18.png",
    "../images/image19.png",
    "../images/image20.png",
    "../images/image21.png",
    "../images/image22.png",
    "../images/image23.png",
    "../images/image24.png",
    "../images/image25.png",
    "../images/image26.png",
    "../images/image27.png",
    "../images/image28.png",
    "../images/image29.png",
    "../images/image30.png",
    "../images/image31.png",
    "../images/image32.png",
    "../images/image33.png",
    "../images/image34.png",
    "../images/image35.png",
    "../images/image36.png",
    "../images/image37.png",
    "../images/image38.png",
    "../images/image39.png",
    "../images/image40.png",
    "../images/image41.png",
    "../images/image42.png",
    "../images/image43.png",
    "../images/image44.png",
    "../images/image45.png",
    "../images/image46.png",
  ];
  
  let currentIndex = 0;
  
  const galleryImage = document.getElementById("gallery-image");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const galleryCaption = document.getElementById("gallery-caption");

  // Function to update the displayed image
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
  
  // Initialize the gallery
updateImage(currentIndex);