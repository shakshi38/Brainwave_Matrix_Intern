document.addEventListener("DOMContentLoaded", () => {
    const foodsImages = document.querySelectorAll(".foods img");
    const toggleImage = document.querySelector(".foods-toggle img");
    
    foodsImages.forEach(img => {
        img.addEventListener("click", () => {
            toggleImage.src = img.src;
        });
    });

    function createStars() {
        const starsContainer = document.getElementById("stars");
        for (let i = 0; i < 100; i++) {
            const star = document.createElement("div");
            star.className = "star";
            star.style.left = `${Math.random() * window.innerWidth}px`;
            star.style.top = `${Math.random() * window.innerHeight}px`;
            starsContainer.appendChild(star);
        }
    }
    createStars();
      });