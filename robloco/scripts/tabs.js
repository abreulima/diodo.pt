function playClickSound() {
    clickSound.currentTime = 0;
    clickSound.play();
}

function openTab(evt, tabName) {
    var i, tabContent, tabButtons;

    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    tabButtons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabButtons.length; i++) {     
        tabButtons[i].classList.remove("active");
        tabButtons[i].classList.remove(`outline-${buttonsColor[i]}-500`);
    }

    document.getElementById(tabName).style.display = "block";
    
    evt.currentTarget.classList.add("active");

    console.log(colorTab["bodyTab"], tabName, colorTab[tabName]);

    evt.currentTarget.classList.add(`outline-${colorTab[tabName]}-500`);

    console.log(tabName);


    playClickSound();
}

function disableTabs() {

    for (let i = 0; i < buttonsArray.length; i++) {
        
        // Skip the connect button
        if (buttonsArray[i].id == "connectButton") {
            
            buttonsArray[i].classList.add("bg-green-500", "outline-green-500");
            continue;
        }

        buttonsArray[i].disabled = true;
        buttonsArray[i].classList.add("bg-gray-500");

        console.log(buttonsArray[i]);
    }
}

function enableTabs() {
    
    for (let i = 0; i < buttonsArray.length; i++) {
        
        // Skip the connect button
        if (buttonsArray[i].id == "connectButton") {
            
            buttonsArray[i].classList.add("bg-green-500", "outline-green-500");
            continue;
        }

        buttonsArray[i].disabled = false;
        buttonsArray[i].classList.add(`bg-${buttonsColor[i]}-500`);

        console.log(buttonsArray[i]);
    }
}


disableTabs();
