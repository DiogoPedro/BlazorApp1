window.changeColorID = (nameID, color) => {
    let element = document.getElementById("nameID");
    element.style.color = color;
}

window.changeColorClass = (data) => {
    let nameClass = data.Classe;
    let color = data.Color;

    alert(data);

    let element = document.getElementsByTagName(nameClass)[0];
    //element.style.color = color + "!important;";
}

window.changeContext = (nameID, context) => {
    let element = document.getElementById(nameID);
    element.innerHTML = context;
}