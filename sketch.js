var weight = [35,38,42,45,43,34,36,41,48,32];
var total = 0;
for(var i = 0; i<weight.length; i++) {
  total=total+weight[i];
}
var average = total/weight.length;
console.log(total);
console.log(average);
function setup() {
  createCanvas(400,400);

}

function draw() 
{
  background(30);
}

 

