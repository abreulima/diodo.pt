const numRows = 8;
const numCols = 8;

let matrixLed = [
    //   0, 2, 3, 4, 5, 6, 7, 8
    [0, 0, 0, 0, 0, 0, 0, 0], // 0,
    [0, 0, 0, 0, 0, 0, 0, 0], // 1,
    [0, 0, 0, 0, 0, 0, 0, 0], // 2,
    [0, 0, 0, 0, 0, 0, 0, 0], // 3,
    [0, 0, 0, 0, 0, 0, 0, 0], // 4,
    [0, 0, 0, 0, 0, 0, 0, 0], // 5,
    [0, 0, 0, 0, 0, 0, 0, 0], // 6,
    [0, 0, 0, 0, 0, 0, 0, 0], // 7,
];

const classLed = [
    "bg-gray-300", "h-20", "w-20", "rounded-lg", "p-4", "hover:cursor-pointer"
];

function mapLedPosition(row, col) {
    //console.log(row, col);
    let decimalValue = 0;

    matrixLed[row][col] = 1 - matrixLed[row][col];

    //console.log(matrixLed[row]);

    for (let i = 0; i < numRows; i++) {
        decimalValue = (decimalValue << 1) | matrixLed[row][i];
        //console.log(matrixLed[row][i])
    }

    data = [0x03, row, decimalValue];
    //console.log(decimalValue);
    sendBytesArray(data);
}


function toggleLed(element) {

    if (element.classList.contains("bg-gray-300")) {
        element.classList.remove("bg-gray-300");
        element.classList.add("bg-red-500");
    }
    else {
        element.classList.remove("bg-red-500");
        element.classList.add("bg-gray-300");
    }

}


for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
        const gridCell = document.createElement('div');

        gridCell.classList.add(...classLed);

        //gridCell.textContent = `${row},${col}`;

        gridCell.addEventListener('click', () => {
            //playClickSound();
            //console.log(row);
            toggleLed(gridCell);
            mapLedPosition(row, col);

        });

        ledGrid.appendChild(gridCell);
    }
}