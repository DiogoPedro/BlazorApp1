window.showMessageConsole = (message) => {
    console.log(message + "!");
    return true;
}

// window.alertAadsa = function (message) {
//     alert(message + "como passa");
// }

function teste() {
    alert("Oi");
}

window.squareJS = (x) => {
    return x * x;
}

window.changeName = (variavel) => { 
    const x = document.getElementsByClassName('box')[0];
    //let x = document.getElementsByClassName("box");
    //window.alert(x.innerHTML + "");

    //const x = document.getElementById('box');
    x.innerHTML = '<h2>'+ variavel + '</h2>';

}