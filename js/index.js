function swap() {
var image=document.getElementById("image");
var index = 0;
var images = ["../images/schloss.jpg","../images/plansee.jpg"]

if (++index >= images.length) index = 0;
image.src = images[index];
}

setInterval(swap, 30000);
