var btn_circle=document.getElementById("btnC")
var btn_rect=document.getElementById("btnR")
var btn_tritangle=document.getElementById("btnT")

var circle=document.getElementById("circle");
var rect=document.getElementById("rect");
var triangle=document.getElementById("triangle");

btn_circle.onclick=function()
    {
        circle.setAttribute("class","shape_circle");
    }
btn_rect.onclick=function(){
    rect.setAttribute("class","shape_rect");
}
btn_triangle.onclick=function(){
    triangle.setAttribute("class","shape_triangle");
}
circle.onclick=function(){
    circle.setAttribute("class","hide");
}
