const colors = [
    "#000000", "#0000FF", "#00FF00", "#00FFFF",
    "#FF0000", "#FF00FF", "#FFFF00", "#FFFFFF",
    "#8B0000", "#8B008B", "#B8860B", "#D2691E",
    "#DC143C", "#FF8C00", "#FFD700", "#ADFF2F",
    "#32CD32", "#00FA9A", "#00CED1", "#1E90FF",
    "#4B0082", "#9400D3", "#FF1493", "#C71585",
    "#A0522D", "#F4A460", "#DAA520", "#808080",
    "#A9A9A9", "#D3D3D3", "#696969", "#2F4F4F",
    "#F5DEB3", "#FFE4E1", "#FFEBCD", "#F5F5DC",
    "#FAFAD2", "#FFF0F5", "#FA8072", "#FFE4B5",
    "#FFEFD5", "#FFFACD", "#FF5733", "#33FF5E", 
    "#00CFFF", "#FFC300", "#C733FF", "#FF33B5", 
    "#FF7F50", "#32CD32", "#87CEEB", "#9370DB", 
    "#FF69B4", "#FFA07A", "#00FFFF", "#7FFFD4", 
    "#66CDAA", "#6A5ACD", "#FFD700", "#FFDAB9",
    "#FF6347", "#40E0D0", "#FF4500", "#DA70D6", 
    "#32CD32", "#FF1493",
  ];

const classColor = [
    "w-12", "h-12", "cursor-pointer", "hover:scale-110", "rounded-full",
    "transition", "duration-300", "ease-in-out"
];

colors.forEach(color => {
    const colorOption = document.createElement("div");

    const newArray = [...classColor, `bg-[${color}]`];
    colorOption.classList.add(...newArray);

    colorOption.addEventListener('click', () => {
        background.style.backgroundColor = color;

        const bigint = parseInt(color.substring(1), 16);
        const red = (bigint >> 16) & 255;
        const blue = bigint & 255;
        const green = (bigint >> 8) & 255;
        data = [0x01, red, green, blue]

        sendBytesArray(data);

    });

    colorGrid.appendChild(colorOption);

});