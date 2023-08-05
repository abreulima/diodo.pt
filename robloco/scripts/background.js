let xPos = 0;
let yPos = 0;
const speed = 1; // Adjust the speed of the scroll

function updateBackgroundPosition() {
    xPos += speed;
    yPos += speed;

    background.style.backgroundPosition = `-${xPos}px ${yPos}px`;

    requestAnimationFrame(updateBackgroundPosition);
}

updateBackgroundPosition();