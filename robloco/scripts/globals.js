let serialPort;
let port;
let connected = false;

const background = document.querySelector("body");
const colorGrid = document.getElementById("colorGrid");
const ledGrid = document.getElementById("ledGrid");
const clickSound = document.getElementById('clickSound');
const customNose = document.getElementById("customNose");

const connectButton = document.getElementById("connectButton");
const noseButton = document.getElementById("noseButton");
const customNoseButton = document.getElementById("customNoseButton");
const mouthButton = document.getElementById("mouthButton");
const bodyButton = document.getElementById("bodyButton");

const LEFT_FOOT = 0x00;
const RIGHT_FOOT = 0x01;
const LEFT_LEG = 0x02;
const RIGHT_LEG = 0x03;
const LEFT_HAND = 0x04;
const RIGHT_HAND = 0x05;

const buttonsArray = [
    connectButton, noseButton, customNoseButton, mouthButton, bodyButton
];

const buttonsColor = [
    "green", "red", "orange", "cyan", "violet"
];

var colorTab = {
    "connectTab": "green",
    "noseSimpleTab": "red",
    "noseCustomTab": "orange",
    "mouthTab":"cyan",
    "bodyTab":"violet"
};

