let images = document.querySelectorAll(".gallery-item");
let lightbox = document.getElementById("lightbox");
let lightboxImage = document.getElementById("lightboxImage");

let currentIndex = 0;
let visibleImages = Array.from(images);

// Open image when clicked
images.forEach(function(item) {
item.addEventListener("click", function() {
visibleImages = Array.from(images).filter(function(image) {
return image.style.display !== "none";
});

```
    currentIndex = visibleImages.indexOf(item);
    showImage();
    lightbox.classList.add("show");
});
```

});

// Display selected image
function showImage() {
if (visibleImages.length === 0) return;

```
lightboxImage.src = visibleImages[currentIndex].querySelector("img").src;
lightboxImage.alt = visibleImages[currentIndex].querySelector("img").alt;
```

}

// Next and previous buttons
function changeImage(direction) {
currentIndex += direction;

```
if (currentIndex >= visibleImages.length) {
    currentIndex = 0;
}

if (currentIndex < 0) {
    currentIndex = visibleImages.length - 1;
}

showImage();
```

}

// Close lightbox
function closeLightbox() {
lightbox.classList.remove("show");
}

// Filter categories
function filterImages(category, button) {
images.forEach(function(item) {
if (category === "all" || item.dataset.category === category) {
item.style.display = "";
} else {
item.style.display = "none";
}
});

```
document.querySelectorAll(".filters button").forEach(function(btn) {
    btn.classList.remove("active");
});

button.classList.add("active");
```

}

// Close using Escape and navigate using keyboard
document.addEventListener("keydown", function(event) {
if (event.key === "Escape") {
closeLightbox();
}

```
if (lightbox.classList.contains("show")) {
    if (event.key === "ArrowRight") {
        changeImage(1);
    }

    if (event.key === "ArrowLeft") {
        changeImage(-1);
    }
}
```

});
