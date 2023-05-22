
var character=document.getElementById("character");

var block=document.getElementById("block");

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
   if ( character.classList != "animate"){ 
       character.classList.add("animate");
   }
    setTimeout(function(){
        character.classList.remove("animate");
    },650); 
}
}


var CheckDead = setInterval(function(){
     var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
     var blockLeft =  parseInt(window.getComputedStyle(block).getPropertyValue("left"));
     
     if(blockLeft<60 && blockLeft>0 && characterTop>=170){
        block.style.animation = "none";
        block.style.display = "none"; 
        retry.style.display= "block";
        clouds.style.display ="none";
        cloud.style.display ="none";
        clou.style.display ="none";
        clo.style.display ="none";
        cl.style.display ="none";
        c.style.display ="none";
     }
},10);