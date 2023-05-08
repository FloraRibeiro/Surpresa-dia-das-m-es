var imagens = [
	"fotoaleat.jpeg",
	"diadasmaes.png",
  ];

  function drawImage(canvas, index) {
	var ctx = canvas.getContext("2d");
	var imagem = new Image();
	imagem.src = imagens[index];
	imagem.onload = function() {
	  ctx.drawImage(imagem, 0, 0, canvas.width, canvas.height);
	};
  }

 var x= document.getElementById("myAudio");

function newImage()
{

	var canvas1 = document.getElementById("myCanvas");
drawImage(canvas1, 0); // desenha a primeira imagem no primeiro canvas

var canvas2 = document.getElementById("myCanvas1");

drawImage(canvas2, 1); // desenha a segunda imagem no segundo canvas
	
	fabric.Image.fromURL('fotoaleat.jpeg', 'diadasmaes.png', function(Img) {
	blockImageObject = Img;
		
	blockImageObject.scaleToWidth(700);
	blockImageObject.scaleToHeight(510);
	blockImageObject.set({
	top:0,
	left:0
	});
	canvas.add(blockImageObject);
	});
	
}


function playSound(){
	x.play();
}