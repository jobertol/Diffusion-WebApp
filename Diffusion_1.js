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
  i1.style('border-radius', '5px');

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
	select.option('Case 1');
  select.option('Case 2');
  select.option('Case 3');
  select.option('Case 4');
  select.option('Case 5');
  select.option('Case 6');
	select.position(600, 200);

  reset = createButton('Reset');
  reset.position(600, 240);
  reset.mousePressed(r);

  reset.style('background-color','#00BCE2');
  reset.style('border','0px');
  reset.style('border-radius','15px');
  reset.style('color','#ffffff');
  reset.style('padding','5px 10px');
  reset.style('text-decoration','none');
  reset.style('display','inline-block');
  reset.style('font-size','13px');

  speedCoef = 0;
}

function draw()
{
  let x = [];
  let y1 = [];
  let y2 = [];

  background('#444444');
  stroke(1);
  fill('#ffffff');
  text('Select Diffusion Type', select.x , select.y - 23);

  if(select.value()=='Case 1')
  {
    i2.elt.max = 400;
    i2.elt.min = 0;
    i2.elt.step = 1;
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
  }
  else if(select.value()=='Case 2')
  {
    i2.elt.max = 400;
    i2.elt.min = 0;
    i2.elt.step = 1;
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
  }
  else if(select.value()=='Case 3')
  {
    i2.elt.max = 1;
    i2.elt.min = 0.1;
    i2.elt.step = 0.001;
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
  }
  else if(select.value()=='Case 4')
  {
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
  }
  else if(select.value()=='Case 5')
  {

  }
  else if(select.value()=='Case 6')
  {

  }

  translate(i1.x,i1.y - 50);
  stroke('#ffffff');
  line(0,0,0,-400);
  stroke('#ffffff');
  line(0,0,550,0);

  if(play.checked())
  {


    if(select.value()=='Case 1')
    {
      let xTemp = 0;
      for(let i = 0; i <= 550; i++)
      {
        let out = diffuse1(xTemp, -i1.value(), -i2.value(), i3.value(), time);
        xTemp += 1/150;
        x.push(i);
        y1.push(out);
      }
    }
    else if(select.value()=='Case 2')
    {
      let xTemp = -550/300;
      for(let i = 0; i <= 550; i++)
      {
        let out = diffuse2(xTemp, -i1.value(), -i2.value(), i3.value(), time);
        xTemp += 1/150;
        x.push(i);
        y1.push(out[0]);
        y2.push(out[1]);
      }
    }
    else if(select.value()=='Case 3')
    {
      let xTemp = -550/300;
      for(let i = 0; i <= 550; i++)
      {
        let out = diffuse3(xTemp, i2.value(), -i1.value(), i3.value(), time);
        xTemp += 1/150;
        x.push(i);
        y1.push(out);
      }
    }
    else if(select.value()=='Case 4')
    {
    }
    else if(select.value()=='Case 5')
    {
    }
    else if(select.value()=='Case 6')
    {
    }

    noFill();
    stroke('#3FA9F5');
  	beginShape();
  	for(let i = 0; i < x.length; i++)
    {
      vertex(i, y1[i]);
  	}
  	endShape();

    if(select.value()=='Case 2')
    {
      noFill();
      stroke('#FF931E');
    	beginShape();
    	for(let i = 0; i < x.length; i++)
      {
        vertex(i, y2[i]);
    	}
    	endShape();
    }

    time += speed.value()*speed.value();
  }
}

function diffuse1(x, co, cs, D, t)
{
    let temp = (co+(cs-co)*(1-erf(x/(2*sqrt(D*t)))));
    return temp;
}

function diffuse2(x,ca,cb,D,t)
{
  let temp = [];
  temp.push(0.5*ca*(1-erf(x/(2*sqrt(D*t)))));
  temp.push(cb-0.5*cb*(1-erf(x/(2*sqrt(D*t)))));
  return temp;
}

function diffuse3(x,L,c,D,t)
{
  return(0.5*c*(erf((x+L)/(2*sqrt(D*t)))-erf((x-L)/(2*sqrt(D*t)))));
}

function diffuse4(x,N,D,t)
{
  return(N/sqrt(4*3.1415926535*D*t)*exp(-1*(x*x/4/D/t)));
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
