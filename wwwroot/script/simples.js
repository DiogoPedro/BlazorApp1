window.showMessageConsole = (message) => {
    console.log(message + "!");
    return true;
}

window.alertAadsa = function (message) {
    alert(message + "como passa");
}

window.squareJS = (x) => {
    return x * x;
}

window.changeName = (x) => { 
    const x = document.getElementsByClassName('box')[0];
    //let x = document.getElementsByClassName("box");
    //window.alert(x.innerHTML + "");

    //const x = document.getElementById('box');
    x.innerHTML = '<h2>'+ x + '</h2>';

}