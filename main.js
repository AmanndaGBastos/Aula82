var canvas=document.getElementById("myCanvas")
var ctx=canvas.getContext("2d")
var color="blue"
var widthLine=1

var mouseEvent="empty"
var  lastPositionX,lastPositionY

canvas.addEventListener("mousedown", myMousedown)

function myMousedown(e){

 mouseEvent="mouseDown"

}

canvas.addEventListener("mouseup", myMouseUp)
function myMouseUp(e){

    mouseEvent="mouseUp"
}

canvas.addEventListener("mouseleave", myMouseLeave)
function myMouseLeave(e){

    mouseEvent="mouseLeave"
    
}
canvas.addEventListener("mousemove",myMouseMove)
function myMouseMove(e){

    var positionMouseX =e.clientX-canvas.offsetLeft;
    var positionMouseY =e.clientY-canvas.offsetTop
    
    if (mouseEvent =="mouseDown") 

    //if= condição verificar se o evento do mouse é o mousemove
   {
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=widthLine;
     
    console.log("posiçãoXInicial="+positionMouseXInicial+" posiçãoYInicial="+positionMouseYInicial)
    ctx.moveTo(positionMouseXInicial,positionMouseYInicial)

    console.log("posiçãoXFinal="+positionMouseX+" posiçãoYFinal="+positionMouseY)
    ctx.lineTo(positionMouseX,positionMouseY)
    ctx.stroke();
   }
var positionMouseXInicial=positionMouseX
var positionMouseYInicial=positionMouseY

}



