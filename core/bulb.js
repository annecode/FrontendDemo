

function changeImage() {
    element = document.getElementById('myimage')
    if (element.src.match("bulbon")) {
        element.src = "https://www.runoob.com/images/pic_bulboff.gif";
        console.log("灯关着");
    }
    else {
        element.src = "https://www.runoob.com/images/pic_bulbon.gif";
        console.log("灯开着");
    }
}