customNose.addEventListener('input', (event) => {
    let color = event.target.value;
    background.style.backgroundColor = color;

    const bigint = parseInt(color.substring(1), 16);
    const red = (bigint >> 16) & 255;
    const blue = bigint & 255;
    const green = (bigint >> 8) & 255;
    data = [0x01, red, green, blue]

    sendBytesArray(data);

});