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
  createCanvas(600, 575);

  i1 = createSlider(0, 400, 100, 1);
  i1.position(25, 525);

  i2 = createSlider(0, 400, 300, 1);
  i2.position(i1.x+i1.width+15, i1.y);

  i3 = createSlider(pow(10,-6), 10*pow(10,-6), pow(10,-6), 0.01*pow(10,-6));
  i3.position(i2.x+i2.width+15, i1.y);

  speed = createSlider(1, 100, 1, 1);
  speed.position(i3.x+i3.width+15, i1.y);

  play = createCheckbox('',false);
  play.position(speed.x+speed.width+15, i1.y-17);

  select = createSelect();
	select.option('Case 1');
  select.option('Case 2');
  select.option('Case 3');
  select.option('Case 4');
  select.option('Case 5');
  select.option('Case 6');
	select.position(430, 520);
  select.class('select.ccs');

  reset = createButton('t = 0');
  reset.position(525, select.y-12);
  reset.mousePressed(r);
}

function draw()
{
  let x = [];
  let y1 = [];
  let y2 = [];

  background('#444444');
  stroke(1);
  fill('#ffffff');
  text('Diffusion Type', select.x-3, speed.y - 17);

  if(select.value()=='Case 1')
  {
    i1.elt.max = 400;
    i1.elt.min = 0;
    i1.elt.step = 1;

    i2.elt.max = 400;
    i2.elt.min = 0;
    i2.elt.step = 1;

    speed.elt.max = 100;
    speed.elt.min = 1;
    speed.elt.step = 1;

    fill('#ffffff');
    text('Initial\nConcentration', i1.x , i1.y - 30);
    fill('#ffffff');
    text('Surface\nConcentration', i2.x , i2.y - 30);
    fill('#ffffff');
    text('Diffusivity', i3.x , i3.y - 17);
    fill('#ffffff');
    text('Speed', speed.x , speed.y - 17);
    fill('#ffffff');
    text('Play', play.x , speed.y - 17);

    translate(i1.x,i1.y - 75);
    stroke('#ffffff');
    line(0,0,0,-400);
    stroke('#ffffff');
    line(0,0,550,0);
  }
  else if(select.value()=='Case 2')
  {
    i1.elt.max = 400;
    i1.elt.min = 0;
    i1.elt.step = 1;

    i2.elt.max = 400;
    i2.elt.min = 0;
    i2.elt.step = 1;

    speed.elt.max = 100;
    speed.elt.min = 1;
    speed.elt.step = 1;

    fill('#ffffff');
    text('Initial\nConcentration', i1.x , i1.y - 30);
    fill('#ffffff');
    text('Surface\nConcentration', i2.x , i2.y - 30);
    fill('#ffffff');
    text('Diffusivity', i3.x , i3.y - 17);
    fill('#ffffff');
    text('Speed', speed.x , speed.y - 17);
    fill('#ffffff');
    text('Play', play.x , speed.y - 17);

    translate(i1.x,i1.y - 75);
    stroke('#ffffff');
    line(275,0,275,-400);
    stroke('#ffffff');
    line(0,0,550,0);
  }
  else if(select.value()=='Case 3')
  {
    i1.elt.max = 400;
    i1.elt.min = 0;
    i1.elt.step = 1;

    i2.elt.max = 1;
    i2.elt.min = 0.1;
    i2.elt.step = 0.001;

    speed.elt.max = 100;
    speed.elt.min = 1;
    speed.elt.step = 1;

    fill('#ffffff');
    text('Initial\nConcentration', i1.x , i1.y - 30);
    fill('#ffffff');
    text('Rectangular\nProfile', i2.x , i2.y - 30);
    fill('#ffffff');
    text('Diffusivity', i3.x , i3.y - 17);
    fill('#ffffff');
    text('Speed', speed.x , speed.y - 17);
    fill('#ffffff');
    text('Play', play.x , speed.y - 17);

    translate(i1.x,i1.y - 75);
    stroke('#ffffff');
    line(275,0,275,-400);
    stroke('#ffffff');
    line(0,0,550,0);
  }
  else if(select.value()=='Case 4')
  {
    i1.elt.max = 800;
    i1.elt.min = 0;
    i1.elt.step = 1;

    i2.elt.max = 400;
    i2.elt.min = 32;
    i2.elt.step = 1;

    speed.elt.max = 0.02;
    speed.elt.min = 0.001;
    speed.elt.step = 0.001;

    print(i2.value());

    fill('#ffffff');
    text('Initial Amount', i1.x , i1.y - 30);
    fill('#ffffff');
    text('Diffusivity', i2.x , i2.y - 30);
    fill('#ffffff');
    text('Speed', speed.x , speed.y - 17);
    fill('#ffffff');
    text('Play', play.x , speed.y - 17);

    translate(i1.x,i1.y - 75);
    stroke('#ffffff');
    line(275,0,275,-400);
    stroke('#ffffff');
    line(0,0,550,0);
  }
  else if(select.value()=='Case 5')
  {
    i1.elt.max = 400;
    i1.elt.min = i2.value();
    i1.elt.step = 1;

    i2.elt.max = 400;
    i2.elt.min = 0;
    i2.elt.step = 1;

    speed.elt.max = 100;
    speed.elt.min = 1;
    speed.elt.step = 1;

    fill('#ffffff');
    text('Initial\nConcentration', i1.x , i1.y - 30);
    fill('#ffffff');
    text('Surface\nConcentration', i2.x , i2.y - 30);
    fill('#ffffff');
    text('Diffusivity', i3.x , i3.y - 17);
    fill('#ffffff');
    text('Speed', speed.x , speed.y - 17);
    fill('#ffffff');
    text('Play', play.x , speed.y - 17);

    translate(i1.x,i1.y - 75);
    stroke('#ffffff');
    line(0,0,0,-400);
    stroke('#ffffff');
    line(0,0,550,0);
  }
  else if(select.value()=='Case 6')
  {
    i1.elt.max = 400;
    i1.elt.min = 0;
    i1.elt.step = 1;

    i2.elt.max = 400;
    i2.elt.min = i1.value();
    i2.elt.step = 1;

    speed.elt.max = 200;
    speed.elt.min = 1;
    speed.elt.step = 1;

    fill('#ffffff');
    text('Initial\nConcentration', i1.x , i1.y - 30);
    fill('#ffffff');
    text('Surface\nConcentration', i2.x , i2.y - 30);
    fill('#ffffff');
    text('Diffusivity', i3.x , i3.y - 17);
    fill('#ffffff');
    text('Speed', speed.x , speed.y - 17);
    fill('#ffffff');
    text('Play', play.x , speed.y - 17);

    translate(i1.x,i1.y - 75);
    stroke('#ffffff');
    line(0,0,0,-400);
    stroke('#ffffff');
    line(0,0,550,0);
  }

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
      let xTemp = -550/20;
      for(let i = 0; i <= 550; i++)
      {
        let out = diffuse4(xTemp, -i1.value(), i2.value(), time);
        xTemp += 1/10;
        x.push(i);
        y1.push(out);
      }
    }
    else if(select.value()=='Case 5')
    {
      let xTemp = 0;
      for(let i = 0; i <= 550; i++)
      {
        let out = diffuse5(xTemp, -i1.value(), -i2.value(), i3.value(), time, 1000);
        xTemp += 1/50;
        x.push(i);
        y1.push(out);
      }
    }
    else if(select.value()=='Case 6')
    {
      let xTemp = -550;
      for(let i = 0; i <= 550; i++)
      {
        let out = diffuse6(xTemp, -i1.value(), -i2.value(), i3.value(), time, 1000);
        xTemp += 1/25;
        x.push(i);
        y1.push(out);
      }
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
  return(N/sqrt(4*PI*D*t)*exp(-1*(x*x/4/D/t)));
}

function diffuse5(x, co ,cs, D, t, n)
{
  let L = 11;
  let infSum = 0;
  for(let i = 0; i<n; i++)
  {
    let inc = 2*i + 1;
    infSum += (1/(inc))*sin((inc)*PI*x/L)*exp(-1*pow((inc*PI/L),2)*D*t);
  }
  return (cs + (co-cs)*(4/PI)*infSum);
}

function diffuse6(x, co ,cs, D, t, n)
{
  let L = 11;
  let infSum = 0;
  for(let i = 0; i<n; i++)
  {
    let L = 11;
    let infSum = 0;
    for(let i = 0; i<n; i++)
    {
      let inc = 2*i + 1;
      infSum += (1/(inc))*sin((inc)*PI*x/L/2+PI)*exp(-1*pow((inc*PI/L),2)*D*t);
    }
    return (cs+(co-cs)*(4/PI)*infSum);
  }
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
