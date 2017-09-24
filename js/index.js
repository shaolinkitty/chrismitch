var index = 0;

function swap () {
  var image = document.getElementById('image');
  var images = ['../images/schloss.jpg', '../images/plansee.jpg'];
  image.src = images[index];
  index++;
  if (index >= images.length) {
     index = 0;
  }
}

setInterval(swap, 3000);
