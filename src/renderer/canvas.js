
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

///
var slider = document.getElementById("mySlider");
var value_s = document.getElementById("result");

value_s.innerHTML = slider.value;

var sx=0; 
var sy=0;
var inc = 0.5;

function movingRect(){
    ctx.clearRect(0,0,500,500);
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(sx,0,50,50);

    sx +=inc;

    if (sx > 500 || sx < 0){
        inc *= -1;
    }

}

slider.oninput = function(){
    if(inc > 0){
     inc = this.value*1;
    }else{
     inc = this.value*-1;   
    }
    value_s.innerHTML = this.value;
}

//animation part
setInterval(movingRect, 30);


