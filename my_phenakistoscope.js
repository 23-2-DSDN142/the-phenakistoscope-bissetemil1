const SLICE_COUNT = 8;//6 minimum 18 max

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);//turns lines off if false
  pScope.set_direction(CCW);// clockwise CW counter clockwise CCW
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image_sequence("final" , "png", 9 );
  pScope.load_image("ball" , "png");

}

function setup_layers(pScope){

  new PLayer(null, 177, 230, 181);//pastel court green //lets us draw the whole circle background, ignoring the boundaries
  
  var finalSequence = new PLayer(Ftennis); 
  finalSequence.mode( SWIRL(4) ); // What i want for tennis racket
  finalSequence.set_boundary( 200, 900 );

  var oval = new PLayer (petals);
  oval.mode(SWIRL(3));
  oval.set_boundary(100, 150);

  var centreImage = new PLayer(launcher);
  centreImage.mode (RING);
  centreImage.set_boundary (100,200);

  var outerRing = new PLayer(ring);
  outerRing.mode (RING);
  outerRing.set_boundary(850,900);

  var innerRing = new PLayer(ringer);
  innerRing.mode (RING);
  innerRing.set_boundary(340,360);



}

function petals(x, y, animation, pScope){

  stroke(255,255,255)
  ellipse(100, 0, 200, 100, animation.wave(5));
  
  }
  

function launcher(x, y, animation, pScope){
  
  scale(0.3);
  pScope.draw_image("ball",-30,-400);

}

function Ftennis(x, y, animation, pScope){ 
  scale (0.15);
  pScope.draw_image_from_sequence("final", x, -900, animation.wave(2));

  pScope.draw_image_from_sequence("final", 2000, -1000, animation.wave(2));
}

function ring(x, y, animation, pScope){

  pScope.fill_background(255, 255, 255);

}

function ringer(x, y, animation, pScope){

  pScope.fill_background(255, 255, 255);

}


