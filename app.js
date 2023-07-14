function change()
{
    var img=document.getElementById("bulb");
    if(img.src.match("off")){
        img.src="assests/on.jpg";
    }
    else{
        img.src="./assests/off.jpg";
    }
}