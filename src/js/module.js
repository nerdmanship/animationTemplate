/*
##############################################################################

  TODO
  
  - Hard left: strech leg, tilt forward, move forward


  - Capital first letters may be a problem in data-attributes
  

// Find move
// Rough out sequence
// Jump back

//// tlImpact
// Conor walks slowly forward, gets hit twice in jab hand, takes impact
// Ref: https://www.youtube.com/watch?v=vyxMIDL-I-E - 3.00
//// tlStep, tlPush
// Conor takes two steps forward and keep distance with jab hand ()
//// tlPunch
// From second push, Conor strikes hard and fast right ()


*/






/*
##############################################################################

  VARIABLES

  Keywords: view, conor, c.parts, n.parts

///////////////////////////////////////
*/



// SVG reference
const view = document.querySelector("[data-view]");

// Bodyparts, i.e. "c.head"
let c = {}; // Conor
let n = {}; // Nate

const parts = ["body","FootFront","FootBack","KneeFront","KneeBack","LegFront","LegBack","HipFront","HipBack","SpineFront","SpineBack","ShoulderFront","ShoulderBack","ElbowFront","ElbowBack","WristFront","WristBack","Neck","Head", "fingers", "noFingers"];

for (let i = 0; i < parts.length; i++) {
  c[parts[i]] = view.querySelector("[data-conor="+parts[i]+"]");
}

for (let i = 0; i < parts.length; i++) {
  n[parts[i]] = view.querySelector("[data-nate="+parts[i]+"]");
}



/*
///////////////////////////////////////

  End of VARIABLES

##############################################################################
*/








/*
##############################################################################

  STARTING VALUES

  Keywords: conorStartPose, nateStartPose, setStartingValues

///////////////////////////////////////
*/



//  Conor
function conorStartPose() {
  // Rotation
  TweenMax.set(c.body, { rotation: 0, x: 100, y: 20, transformOrigin: "center"});
  TweenMax.set(c.FootBack, { rotation: 0, transformOrigin: "center"});
  TweenMax.set(c.KneeBack, { rotation: -25, transformOrigin: "center"});
  TweenMax.set(c.LegBack, { rotation: 30, transformOrigin: "center"});
  TweenMax.set(c.HipBack, { rotation: 0, transformOrigin: "center"});
  TweenMax.set(c.SpineBack, { rotation: 0, transformOrigin: "center"});
  TweenMax.set(c.ShoulderBack, { rotation: 100, transformOrigin: "center"});
  TweenMax.set(c.ElbowBack, { rotation: -15, transformOrigin: "center"});
  TweenMax.set(c.WristBack, { rotation: 25, transformOrigin: "center"});
  TweenMax.set(c.FootFront, { rotation: 0, transformOrigin: "center"});
  TweenMax.set(c.KneeFront, { rotation: 0, transformOrigin: "center"});
  TweenMax.set(c.LegFront, { rotation: -20, transformOrigin: "center"});
  TweenMax.set(c.HipFront, { rotation: 0, transformOrigin: "center"});
  TweenMax.set(c.SpineFront, { rotation: -10, transformOrigin: "center"});
  TweenMax.set(c.ShoulderFront, { rotation: 55, transformOrigin: "center"});
  TweenMax.set(c.ElbowFront, { rotation: 80, transformOrigin: "center"});
  TweenMax.set(c.WristFront, { rotation: 0, transformOrigin: "center"});
  TweenMax.set(c.Neck, { rotation: 0, transformOrigin: "center"});
  TweenMax.set(c.Head, { rotation: 0, transformOrigin: "center"});
  // Position
  TweenMax.set(c.ShoulderBack, { x: 0 });
  TweenMax.set(c.HipBack, { x: 0 });
  TweenMax.set(c.LegBack, { x: 0 });
  TweenMax.set(c.Neck, { x: 0 });
  TweenMax.set(c.LegFront, { x: 0 });
  TweenMax.set(c.HipFront, { x: 0 });
  TweenMax.set(c.ShoulderFront, { x: 0, y: 5 });
  // Visibility
  TweenMax.set(c.fingers, { autoAlpha: 1 });
  TweenMax.set(c.noFingers, { autoAlpha: 0 });
}

//  Nate
function nateStartPose() {
  // Rotation
  TweenMax.set(n.body, { rotation: 0, x: 0, y: 20, transformOrigin: "center"});
  TweenMax.set(n.FootBack, { rotation:0, transformOrigin: "center"});
  TweenMax.set(n.KneeBack, { rotation:0, transformOrigin: "center"});
  TweenMax.set(n.LegBack, { rotation:0, transformOrigin: "center"});
  TweenMax.set(n.HipBack, { rotation:0, transformOrigin: "center"});
  TweenMax.set(n.SpineBack, { rotation:0, transformOrigin: "center"});
  TweenMax.set(n.ShoulderBack, { rotation:0, transformOrigin: "center"});
  TweenMax.set(n.ElbowBack, { rotation:0, transformOrigin: "center"});
  TweenMax.set(n.WristBack, { rotation:0, transformOrigin: "center"});
  TweenMax.set(n.FootFront, { rotation:0, transformOrigin: "center"});
  TweenMax.set(n.KneeFront, { rotation:0, transformOrigin: "center"});
  TweenMax.set(n.LegFront, { rotation:0, transformOrigin: "center"});
  TweenMax.set(n.HipFront, { rotation:0, transformOrigin: "center"});
  TweenMax.set(n.SpineFront, { rotation:0, transformOrigin: "center"});
  TweenMax.set(n.ShoulderFront, { rotation:0, transformOrigin: "center"});
  TweenMax.set(n.ElbowFront, { rotation:0, transformOrigin: "center"});
  TweenMax.set(n.WristFront, { rotation:0, transformOrigin: "center"});
  TweenMax.set(n.Neck, { rotation:0, transformOrigin: "center"});
  TweenMax.set(n.Head, { rotation:0, transformOrigin: "center"});
  // Position
  TweenMax.set(n.ShoulderBack, { x: 0});
  TweenMax.set(n.HipBack, { x: 0});
  TweenMax.set(n.LegBack, { x: 0});
  TweenMax.set(n.Neck, { x: 0});
  TweenMax.set(n.LegFront, { x: 0});
  TweenMax.set(n.HipFront, { x: 0});
  TweenMax.set(n.ShoulderFront, { x: 0});
  // Visibility
  TweenMax.set(n.fingers, { autoAlpha: 0 });
  TweenMax.set(n.noFingers, { autoAlpha: 1 });
}

// Starting values
function setStartingValues() {
  conorStartPose();
  nateStartPose();
}

// Init
setStartingValues();



/*
///////////////////////////////////////

  End of STARTING VALUES

##############################################################################
*/





/*
##############################################################################

  TIMELINES

  Keywords: tlConor,

///////////////////////////////////////
*/


const timeUnit = 0.3;

const tlConor = new TimelineMax({ repeat: -1, repeatDelay: 2, onUpdate:updateStats, onUpdateParams: tlConor });
const tlImpact = new TimelineMax({ paused: true });
const tlStepPush = new TimelineMax({ paused: true });
const tlStep = new TimelineMax({ paused: true });
const tlPush = new TimelineMax({ paused: true });
const tlWiggle = new TimelineMax({ paused: true });
const tlPunch = new TimelineMax({ paused: true });
const tlStrike = new TimelineMax({ paused: true });



//  TAKING HITS TO JAB HAND
//  Keywords: keywords
///////////////////////////////////////
tlImpact.timeScale(1)
  .add("impact1")

  .to(c.LegBack, timeUnit, { rotation: 35, ease: Power1.easeNone }, "impact1")
  .to(c.KneeBack, timeUnit/2, { rotation: -40, ease: Power1.easeNone }, "impact1")
  .to(c.KneeBack, timeUnit/2, { rotation: -20, ease: Power1.easeNone }, "impact1 =+" + timeUnit/2)
  .to(c.LegBack, timeUnit, { rotation: 30, ease: Power1.easeNone }, "impact1 =+" + timeUnit)
  .to(c.KneeBack, timeUnit, { rotation: -25, ease: Power1.easeNone }, "impact1 =+" + timeUnit)

  .to(c.LegFront, timeUnit, { rotation: -20, ease: Power1.easeNone }, "impact1")
  .to(c.LegFront, timeUnit, { rotation: -10, ease: Power1.easeNone }, "impact1 =+" + timeUnit)
  .to(c.KneeFront, timeUnit, { rotation: 0, ease: Power1.easeNone }, "impact1")
  .to(c.KneeFront, timeUnit, { rotation: -20, ease: Power1.easeNone }, "impact1 =+" + timeUnit)
  
  .to(c.body, timeUnit, { rotation: -1, x: "-=15", y: 21, ease: Power1.easeNone }, "impact1")
  .to(c.body, timeUnit, { rotation: 1, x: "-=15", y: 23, ease: Power1.easeNone }, "impact1 =+" + timeUnit)
  
  .add("impact2", "impact1 =+" + timeUnit*2)
  .to(c.LegBack, timeUnit, { rotation: 35, ease: Power1.easeNone }, "impact2")
  .to(c.KneeBack, timeUnit/2, { rotation: -40, ease: Power1.easeNone }, "impact2")
  .to(c.KneeBack, timeUnit/2, { rotation: -20, ease: Power1.easeNone }, "impact2 =+" + timeUnit/2)
  .to(c.LegBack, timeUnit, { rotation: 30, ease: Power1.easeNone }, "impact2 =+" + timeUnit)
  .to(c.KneeBack, timeUnit, { rotation: -25, ease: Power1.easeNone }, "impact2 =+" + timeUnit)

  .to(c.LegFront, timeUnit, { rotation: -20, ease: Power1.easeNone }, "impact2")
  .to(c.LegFront, timeUnit, { rotation: -10, ease: Power1.easeNone }, "impact2 =+" + timeUnit)
  .to(c.KneeFront, timeUnit, { rotation: 0, ease: Power1.easeNone }, "impact2")
  .to(c.KneeFront, timeUnit, { rotation: -20, ease: Power1.easeNone }, "impact2 =+" + timeUnit)
  
  .to(c.body, timeUnit, { rotation: -2, x: "-=25", y: 20, ease: Power1.easeNone }, "impact2")
  .to(c.body, timeUnit, { rotation: 0, x: "-=15", y: 20, ease: Power1.easeNone }, "impact2 =+" + timeUnit)

  // Impacts
  .add("hit1", "impact2")
  .to(c.ShoulderBack, timeUnit/4, { rotation: 90}, "hit1")
  .to(c.ShoulderBack, timeUnit/4, { rotation: 100}, "hit1 =+" + timeUnit/3)
  .to(c.ElbowBack, timeUnit/4, { rotation: -5}, "hit1")
  .to(c.ElbowBack, timeUnit/4, { rotation: -15}, "hit1 =+" + timeUnit/3)
  .to(c.WristBack, timeUnit/4, { rotation: 35}, "hit1")
  .to(c.WristBack, timeUnit/4, { rotation: 25}, "hit1 =+" + timeUnit/3)

  .add("hit2", "hit1 =+" + timeUnit*1.5)
  .to(c.ShoulderBack, timeUnit/4, { rotation: 90}, "hit2")
  .to(c.ShoulderBack, timeUnit/4, { rotation: 100}, "hit2 =+" + timeUnit/3)
  .to(c.ElbowBack, timeUnit/4, { rotation: -5}, "hit2")
  .to(c.ElbowBack, timeUnit/4, { rotation: -15}, "hit2 =+" + timeUnit/3)
  .to(c.WristBack, timeUnit/4, { rotation: 35}, "hit2")
  .to(c.WristBack, timeUnit/4, { rotation: 25}, "hit2 =+" + timeUnit/3)

  .add("afterImpact")
  ;



//  STEP PUSH
//  Keywords: Second move
//////////////////////////////////////

//  Keywords: body, Conor, KneeBack, LegBack, LegFront
tlStep
  .add("step1")
  .to(c.LegBack, timeUnit, { rotation: 35, ease: Power1.easeNone }, "step1")
  .to(c.KneeBack, timeUnit/2, { rotation: -40, ease: Power1.easeNone }, "step1")
  .to(c.KneeBack, timeUnit/2, { rotation: -20, ease: Power1.easeNone }, "step1 =+" + timeUnit/2)
  .to(c.LegBack, timeUnit, { rotation: 30, ease: Power1.easeNone }, "step1 =+" + timeUnit)
  .to(c.KneeBack, timeUnit, { rotation: -25, ease: Power1.easeNone }, "step1 =+" + timeUnit)
  .to(c.LegFront, timeUnit, { rotation: -25, ease: Power1.easeNone }, "step1")
  .to(c.LegFront, timeUnit, { rotation: -20, ease: Power1.easeNone }, "step1 =+" + timeUnit)
  .to(c.body, timeUnit, { rotation: 3, x: "-=30", y: 25, ease: Power1.easeNone }, "step1")
  .to(c.body, timeUnit, { rotation: 0, x: "-=25", y: 20, ease: Power1.easeNone }, "step1 =+" + timeUnit)
  
  .add("step2", "step1 =+" + timeUnit*2 )
  .to(c.LegBack, timeUnit/2, { rotation: 40, ease: Power1.easeNone }, "step2")
  .to(c.KneeBack, timeUnit/4, { rotation: -45, ease: Power1.easeNone }, "step2")
  .to(c.KneeBack, timeUnit/4, { rotation: -25, ease: Power1.easeNone }, "step2 =+" + timeUnit/4)
  .to(c.LegBack, timeUnit/2, { rotation: 30, ease: Power1.easeNone }, "step2 =+" + timeUnit/2)
  .to(c.LegFront, timeUnit/2, { rotation: -30, ease: Power1.easeNone }, "step2")
  .to(c.LegFront, timeUnit/2, { rotation: -20, ease: Power1.easeNone }, "step2 =+" + timeUnit/2)
  .to(c.body, timeUnit/2, { rotation: 5, x: "-=20", y: 30, ease: Power1.easeNone }, "step2")
  .to(c.body, timeUnit/2, { rotation: 0, x: "-=40", y: 20, ease: Power1.easeNone }, "step2 =+" + timeUnit/2)
  ;

//  Keywords: ShoulderBack, Elbowback, WristBack
tlPush
  .add("push1")
  .to(c.ShoulderBack, timeUnit, { rotation: 50}, "push1")
  .to(c.ElbowBack, timeUnit, { rotation: 50}, "push1")
  .to(c.WristBack, timeUnit, { rotation: 45}, "push1")
  .to(c.ShoulderBack, timeUnit, { rotation: 90, ease: Power2.easeOut }, "push1 =+" + timeUnit)
  .to(c.ElbowBack, timeUnit, { rotation: -20}, "push1 =+" + timeUnit)
  .to(c.WristBack, timeUnit, { rotation: 25}, "push1 =+" + timeUnit)

  .add("push2", "push1 =+" + timeUnit*2)
  .to(c.ShoulderBack, timeUnit*0.3, { rotation: 60, ease: Power1.easeInOut }, "push2")
  .to(c.ElbowBack, timeUnit/2, { rotation: 50}, "push2")
  .to(c.WristBack, timeUnit/2, { rotation: 25 }, "push2")
  .to(c.ShoulderBack, timeUnit, { rotation: 110, ease: Power1.easeOut }, "push2 =+" + timeUnit*0.3)
  .to(c.ElbowBack, timeUnit, { rotation: -30}, "push2 =+" + timeUnit/2)
  .to(c.WristBack, timeUnit, { rotation: 35 }, "push2 =+" + timeUnit/2)
  .add("afterPush")
  ;

//  Keywords: ShoulderFront, ElbowFront, HipFront, HipBack
tlWiggle
  .add("wiggle")
  .to(c.ShoulderFront, timeUnit/2, { y: 2, x: 0, rotation: 60, ease: Power1.easeInOut }, "wiggle")
  .to(c.ElbowFront, timeUnit, { rotation: 60, ease: Power1.easeInOut }, "wiggle")
  .to(c.ShoulderFront, timeUnit/2, { y: 0, x: -2, rotation: 50, ease: Power1.easeInOut }, "wiggle =+" + timeUnit/2)
  .to(c.ShoulderFront, timeUnit/2, { y: 2, x: 0, rotation: 65, ease: Power1.easeInOut }, "wiggle =+" + timeUnit)
  .to(c.ElbowFront, timeUnit, { rotation: 80, ease: Power1.easeInOut }, "wiggle =+" + timeUnit)
  .to(c.ShoulderFront, timeUnit/2, { y: 0, x: -2, rotation: 45, ease: Power1.easeInOut }, "wiggle =+" + timeUnit*1.5)
  .to(c.ShoulderFront, timeUnit/2, { y: 2, x: -5, rotation: 60, ease: Power1.easeInOut }, "wiggle =+" + timeUnit*2)
  .to(c.ElbowFront, timeUnit, { rotation: 70, ease: Power1.easeInOut }, "wiggle =+" + timeUnit*2)
  .to(c.ShoulderFront, timeUnit/2, { y: 5, x: -3, rotation: 55, ease: Power1.easeInOut }, "wiggle =+" + timeUnit*2.5)

  .to(c.HipFront, timeUnit/2, { rotation: -10 }, "wiggle")
  .to(c.HipBack, timeUnit/2, { rotation: -5 }, "wiggle")
  .to(c.HipFront, timeUnit, { rotation: 0 }, "wiggle =+" + timeUnit/2)
  .to(c.HipBack, timeUnit, { rotation: 0 }, "wiggle =+" + timeUnit/2)
  .to(c.HipFront, timeUnit/2, { rotation: -5 }, "wiggle =+" + timeUnit*2)
  .to(c.HipBack, timeUnit/2, { rotation: -10 }, "wiggle =+" + timeUnit*2)
  ;

tlStepPush
  .add(tlStep.restart(), 0) // Duration 0.9
  .add(tlPush.restart(), 0) // Duration 1.05
  .add(tlWiggle.restart(), 0) // Duration 0.9
  .add("afterStepPush")
  ;



//  Punch
//  Keywords: whole body
//////////////////////////////////////

tlPunch.timeScale(1)
  .add("suspend")
  // Primary
  .to(c.ShoulderBack, timeUnit/3, { rotation: 80, y: 5, ease: Power1.easeInOut }, "suspend")
  .to(c.ElbowBack, timeUnit/3, { rotation: 20, ease: Power1.easeInOut }, "suspend")
  // Secondary
  .to(c.Neck, timeUnit/3, { rotation: -30, ease: Power1.easeInOut }, "suspend")
  .to(c.Head, timeUnit/3, { rotation: 20, ease: Power1.easeInOut }, "suspend")
  .to(c.ShoulderFront, timeUnit/3, { rotation: 70, ease: Power1.easeInOut}, "suspend")
  .to(c.ElbowFront, timeUnit/3, { rotation: 80, ease: Power1.easeInOut}, "suspend")
  .to(c.HipBack, timeUnit/3, { rotation: -5, ease: Power1.easeInOut }, "suspend")
  .to(c.HipFront, timeUnit/3, { rotation: -10, ease: Power1.easeInOut }, "suspend")

  .add("release", "suspend =+" + timeUnit/3)
  // Primary
  .to(c.SpineBack, timeUnit/3, { rotation: -10, ease: Power1.easeIn }, "release")
  .to(c.ShoulderBack, timeUnit/3, { rotation: 150, x: 0, y: -10, ease: Power1.easeIn }, "release")
  .to(c.ElbowBack, timeUnit/3, { rotation: -30, ease: Back.easeOut }, "release")
  .to(c.WristBack, timeUnit/3, { rotation: 10, ease: Power1.easeIn }, "release")
  .set(c.fingers, { autoAlpha: 0}, "release")
  .set(c.noFingers, { autoAlpha: 1}, "release")
  .to(c.body, timeUnit/3, { x: "-=40", y: 35, rotation: -15, ease: Power1.easeIn }, "release")
  .to(c.LegBack, timeUnit/3, { rotation: 55, ease: Power1.easeNone }, "release")
  .to(c.LegFront, timeUnit/3, { rotation: -15, ease: Power1.easeNone }, "release")

  // Secondary
  .to(c.Neck, timeUnit/3, { rotation: 30, ease: Power1.easeIn }, "release")
  .to(c.Head, timeUnit/3, { rotation: 0, y: 5, ease: Power1.easeIn }, "release")
  .to(c.ShoulderFront, timeUnit/3, { rotation: 0, x: 5, y: 5 , ease: Power1.easeOut}, "release")
  .to(c.ElbowFront, timeUnit/3, { rotation: 130, ease: Power1.easeIn}, "release")
  .to(c.HipFront, timeUnit/3, { rotation: 0, ease: Power1.easeIn }, "release")

  // After
  //.to(c.ShoulderBack, timeUnit, { rotation: 170, ease: Power1.easeIn }, "release")
  .add("afterPunch")
  ;



//  STRIKE HARD LEFT
//  Keywords: Last aggression
///////////////////////////////////////

tlStrike.timeScale(1)
  .add("strike")
  .to(c.LegFront, timeUnit, { rotation: -15, ease: Power1.easeInOut }, "strike")
  .to(c.KneeFront, timeUnit, { rotation: -5, ease: Power1.easeInOut }, "strike")
  .to(c.body, timeUnit, { rotation: -25, x: "-=15", ease: Power1.easeInOut }, "strike")

  // Leg and hip back
  .to(c.LegBack, timeUnit, { x: "+=5", rotation: 65, ease: Power1.easeInOut }, "strike")
  .to(c.HipBack, timeUnit, { x: "+=5", ease: Power1.easeInOut }, "strike")
  .to(c.KneeBack, timeUnit, { rotation: -35, ease: Power1.easeInOut }, "strike")

  // Rotate torso
  .to(c.HipBack, timeUnit, { rotation: 0, ease: Power1.easeInOut }, "strike")
  .to(c.HipFront, timeUnit, { rotation: -10, ease: Power1.easeInOut }, "strike")
  .to(c.SpineBack, timeUnit, { rotation: 10, ease: Power1.easeInOut }, "strike")
  .to(c.SpineFront, timeUnit, { rotation: -30, ease: Power2.easeIn }, "strike")

  // Move head
  .to(c.Neck, timeUnit, { rotation: 10, x: -15, ease: Power2.easeIn }, "strike")
  .to(c.Head, timeUnit, { rotation: 40, ease: Power1.easeIn }, "strike")

  // Pull back right
  .to(c.ShoulderBack, timeUnit/2, { rotation: 150, x: 0, y: -10, ease: Power4.easeOut }, "strike")
  .to(c.ShoulderBack, timeUnit, { rotation: -60, x: 20, y: 5, ease: Power3.easeOut }, "strike =+" + timeUnit*0.5)
  .to(c.ElbowBack, timeUnit, { rotation: 20, ease: Power1.easeIn }, "strike")
  
  // Throw left
  .to(c.ShoulderFront, timeUnit, { rotation: 180, x: -20, y: -15, ease: Power4.easeIn }, "strike")
  .to(c.ElbowFront, timeUnit, { rotation: -20, ease: Power4.easeIn }, "strike")

  .add("pullBack")
  // Upper body
  .to(c.ShoulderFront, timeUnit*3, { rotation: 0, x: 0, y: 5, ease: Power2.easeNone }, "pullBack")
  .to(c.ElbowFront, timeUnit*3, { rotation: 90, ease: Power3.easeOut }, "pullBack")
  .to(c.HipBack, timeUnit*3, { rotation: 0, ease: Back.easeOut }, "pullBack")
  .to(c.HipFront, timeUnit*3, { rotation: 0, ease: Back.easeOut }, "pullBack")
  .to(c.SpineBack, timeUnit*3, { rotation: -10, ease: Back.easeIn }, "pullBack")
  .to(c.SpineFront, timeUnit*3, { rotation: 0, ease: Back.easeIn }, "pullBack")
  .to(c.ShoulderBack, timeUnit*3, { rotation: 40, x: 5, y: -5, ease: Power1.easeNone }, "pullBack")
  .to(c.ElbowBack, timeUnit*3, { rotation: 45, ease: Power2.easeIn }, "pullBack")

  .to(c.Neck, timeUnit, { rotation: 0, x: 0, y: 0, ease: Power2.easeNone }, "pullBack")
  .to(c.Head, timeUnit, { rotation: 30, ease: Power2.easeNone }, "pullBack")
  .to(c.Neck, timeUnit*2, { rotation: 25, x: -4, y: -3, ease: Power2.easeNone }, "pullBack =+" + timeUnit)
  .to(c.Head, timeUnit*2, { rotation: -5, ease: Power2.easeNone }, "pullBack =+" + timeUnit)

  // Lower body
  .to(c.body, timeUnit/2, { rotation: -28, x: "-=5", ease: Power1.easeNone }, "pullBack")
  .to(c.LegBack, timeUnit/2, { rotation: 68, ease: Power1.easeNone }, "pullBack")
  .to(c.KneeBack, timeUnit/2, { rotation: -37, ease: Power1.easeNone }, "pullBack")
  .to(c.LegFront, timeUnit/2, { rotation: -5, ease: Power1.easeNone }, "pullBack")
  .to(c.KneeFront, timeUnit/2, { rotation: -25, ease: Power1.easeNone }, "pullBack")

  .to(c.body, timeUnit/2, { rotation: -15, x: "-=25", y: 15, ease: Power1.easeIn }, "pullBack =+" + timeUnit/2)
  .to(c.LegBack, timeUnit/2, { rotation: 30, ease: Power1.easeIn }, "pullBack =+" + timeUnit/2)
  .to(c.KneeBack, timeUnit/2, { rotation: -10, ease: Power1.easeIn }, "pullBack =+" + timeUnit/2)
  .to(c.LegFront, timeUnit/2, { rotation: -5, ease: Power1.easeIn }, "pullBack =+" + timeUnit/2)
  .to(c.KneeFront, timeUnit/2, { rotation: -25, ease: Power1.easeIn }, "pullBack =+" + timeUnit/2)
  
  .to(c.body, timeUnit/2, { rotation: -10, x: "+=20", y: 20, ease: Power1.easeOut }, "pullBack =+" + timeUnit)
  .to(c.LegBack, timeUnit/2, { rotation: 35, x: "-=5", ease: Power1.easeOut }, "pullBack =+" + timeUnit)
  .to(c.HipBack, timeUnit/2, { x: "-=5", ease: Power1.easeOut }, "pullBack =+" + timeUnit)
  .to(c.KneeBack, timeUnit/2, { rotation: -20, ease: Power1.easeOut }, "pullBack =+" + timeUnit)
  .to(c.LegFront, timeUnit/2, { rotation: -15, ease: Power1.easeOut }, "pullBack =+" + timeUnit)
  .to(c.KneeFront, timeUnit/2, { rotation: -5, ease: Power3.easeOut }, "pullBack =+" + timeUnit)

  .to(c.body, timeUnit/2, { y: 15, x: "-=5", ease: Power1.easeOut }, "pullBack =+" + timeUnit*1.5)
  .to(c.LegBack, timeUnit/2, { rotation: 30, ease: Power1.easeOut }, "pullBack =+" + timeUnit*1.5)
  .to(c.KneeBack, timeUnit/2, { rotation: -15, ease: Power1.easeOut }, "pullBack =+" + timeUnit*1.5)
  .to(c.LegFront, timeUnit/2, { rotation: -15, ease: Power1.easeOut }, "pullBack =+" + timeUnit*1.5)
  .to(c.KneeFront, timeUnit/2, { rotation: 0, ease: Power3.easeOut }, "pullBack =+" + timeUnit*1.5)

  .to(c.body, timeUnit, { y: 20, ease: Power1.easeIn }, "pullBack =+" + timeUnit*2)
  .to(c.LegBack, timeUnit, { rotation: 35, ease: Power1.easeIn }, "pullBack =+" + timeUnit*2)
  .to(c.KneeBack, timeUnit, { rotation: -25, ease: Power1.easeIn }, "pullBack =+" + timeUnit*2)
  .to(c.LegFront, timeUnit, { rotation: -14, ease: Power1.easeIn }, "pullBack =+" + timeUnit*2)
  .to(c.KneeFront, timeUnit, { rotation: -5, ease: Power3.easeIn }, "pullBack =+" + timeUnit*2)

  ;



//  MAIN CONOR TIMELINE
//  Keywords: Conor all moves
///////////////////////////////////////

tlConor
  .add("start")
  .add(tlImpact.play(), "start")
  .add(tlStepPush.play(), "afterImpact")
  .add(tlPunch.play(), "afterStepPush")
  .add(tlStrike.play(), "afterPunch")
  ;



//  INIT CONOR
//  Keywords: -
///////////////////////////////////////

tlConor.play().timeScale(1);





/*
///////////////////////////////////////

  End of TIMELINES

##############################################################################
*/















/*const conor = view.querySelector("[data-conor=body]");
const conorFootFront = view.querySelector("[data-conor=FootFront]");
const conorFootBack = view.querySelector("[data-conor=FootBack]");
const conorKneeFront = view.querySelector("[data-conor=KneeFront]");
const conorKneeBack = view.querySelector("[data-conor=KneeBack]");
const conorLegFront = view.querySelector("[data-conor=LegFront]");
const conorLegBack = view.querySelector("[data-conor=LegBack]");
const conorHipFront = view.querySelector("[data-conor=HipFront]");
const conorHipBack = view.querySelector("[data-conor=HipBack]");
const conorSpineFront = view.querySelector("[data-conor=SpineFront]");
const conorSpineBack = view.querySelector("[data-conor=SpineBack]");
const conorShoulderFront = view.querySelector("[data-conor=ShoulderFront]");
const conorShoulderBack = view.querySelector("[data-conor=ShoulderBack]");
const conorElbowFront = view.querySelector("[data-conor=ElbowFront]");
const conorElbowBack = view.querySelector("[data-conor=ElbowBack]");
const conorWristFront = view.querySelector("[data-conor=WristFront]");
const conorWristBack = view.querySelector("[data-conor=WristBack]");
const conorNeck = view.querySelector("[data-conor=Neck]");
const conorHead = view.querySelector("[data-conor=Head]");

const nate = view.querySelector("[data-nate=body]");
const nateFootFront = view.querySelector("[data-nate=FootFront]");
const nateFootBack = view.querySelector("[data-nate=FootBack]");
const nateKneeFront = view.querySelector("[data-nate=KneeFront]");
const nateKneeBack = view.querySelector("[data-nate=KneeBack]");
const nateLegFront = view.querySelector("[data-nate=LegFront]");
const nateLegBack = view.querySelector("[data-nate=LegBack]");
const nateHipFront = view.querySelector("[data-nate=HipFront]");
const nateHipBack = view.querySelector("[data-nate=HipBack]");
const nateSpineFront = view.querySelector("[data-nate=SpineFront]");
const nateSpineBack = view.querySelector("[data-nate=SpineBack]");
const nateShoulderFront = view.querySelector("[data-nate=ShoulderFront]");
const nateShoulderBack = view.querySelector("[data-nate=ShoulderBack]");
const nateElbowFront = view.querySelector("[data-nate=ElbowFront]");
const nateElbowBack = view.querySelector("[data-nate=ElbowBack]");
const nateWristFront = view.querySelector("[data-nate=WristFront]");
const nateWristBack = view.querySelector("[data-nate=WristBack]");
const nateNeck = view.querySelector("[data-nate=Neck]");
const nateHead = view.querySelector("[data-nate=Head]");

const tlConorStance = new TimelineMax({ paused: true, repeat: -1, yoyo: true });
const tlConorWaving = new TimelineMax({ paused: true, repeat: 1  });

tlConorStance
  .to(c.LegBack, 1.25, { rotation: "+=5", transformOrigin: "center" }, 0)
  .to(c.LegFront, 1.25, { rotation: "+=5", transformOrigin: "center" }, 0)
  .to(c.KneeBack, 1.25, { rotation: "-=9", transformOrigin: "center" }, 0)
  .to(c.KneeFront, 1.25, { rotation: "-=15", transformOrigin: "center" }, 0)
  .to(c.body, 1.25, { y: "+=8" }, 0)
  ;

tlConorWaving
  .fromTo(c.ShoulderBack, 1, { rotation: 80, transformOrigin: "center", ease: Power1.easeInOut}, { rotation: 90, transformOrigin: "center" }, 0)
  .to(c.ShoulderBack, 1.5, { rotation: 80, transformOrigin: "center", ease: Power1.easeInOut }, 1)
  .fromTo(c.ElbowBack, 0.625, { rotation: 0, transformOrigin: "center", ease: Power2.easeOut}, { rotation: 10, transformOrigin: "center" }, 0)
  .fromTo(c.ShoulderBack, 0.625, { x: -5, ease: Power2.easeOut}, { x: 0 }, 0)
  .to(c.ElbowBack, 1.25, { rotation: -20, transformOrigin: "center", ease: Power1.easeInOut}, 0.625)
  .to(c.ShoulderBack, 1.25, { x: -10, ease: Power1.easeInOut}, 0.625)
  .to(c.ElbowBack, 0.625, { rotation: 0, transformOrigin: "center", ease: Power2.easeIn}, 1.875)
  .to(c.ShoulderBack, 0.625, { x: -5, ease: Power2.easeIn}, 1.875)
  ;

  */