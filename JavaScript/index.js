let form1=document.getElementById("form_1");
let form2=document.getElementById("form_2");
let form3=document.getElementById("form_3");

let next1=document.getElementById("Next1");
let next2=document.getElementById("Next2");

let previous1=document.getElementById("Previous1");
let previous2=document.getElementById("Previous2");
let progress=document.getElementById("progress");

next1.onclick=function(){
    form1.style.left="-450px";
    form2.style.left="40px";
    progress.style.width="240px";

}

previous1.onclick=function(){
    form1.style.left="40px";
    form2.style.left="450px";
    progress.style.width="120px";
}
next2.onclick=function(){
    form2.style.left="-450px";
    form3.style.left="40px";
    progress.style.width="360px";

}
previous2.onclick=function(){
    form2.style.left="40px";
    form3.style.left="450px";
    progress.style.width="240px";
}