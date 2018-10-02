function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  background(40, 55, 71);
  angleMode(DEGREES);
  frameRate(60);
}

function draw () {

//light 1
  push ();
  stroke(250, 219, 216);
  strokeWeight (0.2);
  translate (width/2, height/2);
  line (-width/2,-height/2, -cos(frameCount)*250, -sin (frameCount)*250);
  pop ();

//light 3
  push ();
  stroke(214, 234, 248);
  strokeWeight (0.2);
  translate (width/2, height/2);
  line (-width/2,height/2, -cos(frameCount)*250, sin (frameCount)*250);
  pop ();

//light 2
  push ();
  stroke(250, 219, 216);
  strokeWeight (0.2);
  translate (width/2, height/2);
  line (width/2,height/2, cos(frameCount)*250, sin (frameCount)*250);
  pop ();

//light 4
  push ();
  stroke(214, 234, 248);
  strokeWeight (0.2);
  translate (width/2, height/2);
  line (width/2,-height/2, cos(frameCount)*250, -sin (frameCount)*250);
  pop ();


//orange - green
  push ();
  stroke(lerpColor(color(230, 126, 34), color(39, 174, 96), frameCount/360));
  strokeWeight (2);
  translate (width/2, height/2);
  line (-250,0, cos(frameCount*6)*250, sin (frameCount*6)*250);
  pop ();

//green - orange
  push ();
  stroke(lerpColor(color(39, 174, 96), color(230, 126, 34), frameCount/360));
  strokeWeight (2);
  translate (width/2, height/2);
  line (250,0, -cos(frameCount*6)*250, -sin (frameCount*6)*250);
  pop ();


//blue - yellow
  push ();
  stroke(lerpColor(color(52, 152, 219), color(244, 208, 63), frameCount/360));
  strokeWeight (2);
  translate (width/2, height/2);
  line (-250,0, -cos(frameCount*6)*250, -sin (frameCount*6)*250);
  pop ();

//yellow - blue
  push ();
  stroke(lerpColor(color(244, 208, 63), color(52, 152, 219), frameCount/360));
  strokeWeight (2);
  translate (width/2, height/2);
  line (250,0, cos(frameCount*6)*250, sin (frameCount*6)*250);
  pop ();


//momentum wheel
  push ()
  stroke (lerpColor(color(192, 57, 43), color(244, 246, 247), frameCount/360));
  strokeWeight (1);
  noFill ();
  translate (width/2,height/2);
  rotate (frameCount*12);
  ellipse (125, 0,250);
  pop()



  if (frameCount == 360) {
    noLoop ();
  }


}
