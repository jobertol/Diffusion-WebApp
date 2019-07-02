let dynamicGraph = [];
let surface, initial, dist, time, diff, speed, thickness = 0;
let x = [];
let y = [];
let play;

function setup() {
  //New
  createCanvas(1000, 600);

  surface = createInput();
  surface.position(25, 550);
  surface.size(75, 20);
  surface.value(10);

  initial = createInput();
  initial.position(125, 550);
  initial.size(75, 20);
  initial.value(10);

  thick = createInput();
  thick.position(225, 550);
  thick.size(75, 20);
  thick.value(10);

  diff = createInput();
  diff.position(325, 550);
  diff.size(75, 20);
  diff.value(10);

  speed = createSlider(10, 100000, 50);
  speed.position(425, 550);
  speed.value(10);

  play = createCheckbox('',false);
  play.position(600, 550);
  play.value(10);

  for(let i = 0; i < thick.value(); i=i+(thick/1000))
  {
    x.push(i);
  }
}

function draw() {

  x = [];
  y = [];

  background('#444444');
  stroke(1);
  text('Surface\nConcentration', surface.x , surface.y - 23);
  fill('#ffffff');
  text('Initial\nConcentration', initial.x , initial.y - 23);
  fill('#ffffff');
  text('Thickness', thick.x , thick.y - 10);
  fill('#ffffff');
  text('Diffusivity', diff.x , diff.y - 10);
  fill('#ffffff');
  text('Speed', speed.x , speed.y - 10);
  fill('#ffffff');
  text('Play', play.x , play.y - 10);
  fill('#ffffff');

  translate(surface.x,surface.y - 100);
  stroke('#ffffff');
  line(0,0,0,-400);
  stroke('#ffffff');
  line(0,0,550,0);

  if(play.checked())
  {
    let tempX = 0;
    for(let i = 0; i <= 550; i++)
    {
      let out = sin(i/50);
      x.push(i);
      y.push(out);
      //tempX = thick.value()/550;
    }

    let ymax = max(y);
    let ymin = min(y);

    for(let i = 0; i <= 550; i++)
    {
      y[i] = (y[i]-ymin)/(ymax-ymin)*-400;
    }


    noFill();
    stroke('#ffffff');
  	beginShape();
  	for(let i = 0; i < x.length; i++)
    {
      vertex(i, y[i]);
  	}
  	endShape();

  }

}
