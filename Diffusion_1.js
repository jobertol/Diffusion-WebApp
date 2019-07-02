let i1, i2, dist, i3, speed, play, select, reset;
let time = 0.01;

//erf constants
let a1 = 0.254829592;
let a2 = -0.284496736;
let a3 =  1.421413741;
let a4 = -1.453152027;
let a5 =  1.061405429;
let p  =  0.3275911;


function setup()
{
  createCanvas(900, 575);

  i1 = createSlider(0, 400, 100, 1);
  i1.position(25, 500);
  i1.size(100, 20);

  i2 = createSlider(0, 400, 300, 1);
  i2.position(135, 500);
  i2.size(100, 20);

  i3 = createSlider(pow(10,-6), 10*pow(10,-6), pow(10,-6), 0.01*pow(10,-6));
  i3.position(245, 500);
  i3.size(100, 20);

  speed = createSlider(1, 100, 1, 1);
  speed.position(355, 500);
  speed.size(100, 20);

  play = createCheckbox('',false);
  play.position(500, 500);

  select = createSelect();
	select.option('Semi-Infinite from Constant Source');
	select.option('Interi4usion in Two Semi-Infinite Bodies');
	select.position(600, 200);

  reset = createButton('Reset');
  reset.position(600, 240);
  reset.mousePressed(r);

  speedCoef = 0;
}

function draw()
{

  let x = [];
  let y = [];

  background('#444444');
  stroke(1);
  fill('#ffffff');
  text('Initial\nConcentration', i1.x , i1.y - 23);
  fill('#ffffff');
  text('Surface\nConcentration', i2.x , i2.y - 23);
  fill('#ffffff');
  text('Diffusivity', i3.x , i3.y - 10);
  fill('#ffffff');
  text('Speed', speed.x , speed.y - 10);
  fill('#ffffff');
  text('Play', play.x , play.y - 10);


  translate(i1.x,i1.y - 50);
  stroke('#ffffff');
  line(0,0,0,-400);
  stroke('#ffffff');
  line(0,0,550,0);

  if(play.checked())
  {
    let xTemp = 0;

    for(let i = 0; i <= 550; i++)
    {
      let out = diffuse1(xTemp, -i1.value(), -i2.value(), i3.value(), time);
      xTemp += 1/150;
      x.push(i);
      y.push(out);
    }

    let ymax = max(y);
    let ymin = min(y);

    noFill();
    stroke('#ffffff');
  	beginShape();
  	for(let i = 0; i < x.length; i++)
    {
      vertex(i, y[i]);
  	}
  	endShape();

    time += speed.value()*speed.value();
  }
}

function diffuse1(x, co, cs, D, t)
{
    let temp = (co+(cs-co)*(1-erf(x/(2*sqrt(D*t)))));
    return temp;
}

function erf(num)
{
  let sign = 1;
  if(num < 0)
  {
    sign = -1;
    num *= sign;
  }

  let t = 1.0/(1.0+p*num);
  let output = 1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-num*num);
  return sign*output;
}

function r()
{
  time = 0.01;
}
