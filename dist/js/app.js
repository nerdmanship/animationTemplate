"use strict";

/*
##############################################################################

  TODO
  
Animate all feet movement
Animate ambience movement
Adjust original animation


Conor impact in end of tlStrike
tlRetreat, Conor blocks the strike and takes two steps back


Fix Conors dragging leg
Remove Conors floppy front arm
*/

/*
##############################################################################

  VARIABLES

  Keywords: view, conor, c.parts, n.parts

///////////////////////////////////////
*/

// Elements
var view = document.querySelector("[data-view]");

var c = {}; // Conor
var n = {}; // Nate

var parts = ["body", "FootFront", "FootBack", "KneeFront", "KneeBack", "LegFront", "LegBack", "HipFront", "HipBack", "SpineFront", "SpineBack", "ShoulderFront", "ShoulderBack", "ElbowFront", "ElbowBack", "WristFront", "WristBack", "Neck", "Head", "fingers", "noFingers"];

for (var i = 0; i < parts.length; i++) {
  c[parts[i]] = view.querySelector("[data-conor=" + parts[i] + "]");
}

for (var _i = 0; _i < parts.length; _i++) {
  n[parts[_i]] = view.querySelector("[data-nate=" + parts[_i] + "]");
}

// Timelines
var timeUnit = 0.3;

var tlFighters = new TimelineMax({ repeat: -1, repeatDelay: 2, onUpdate: updateStats, onUpdateParams: tlFighters });
var tlFighting = new TimelineMax({ paused: true });
var tlWalking = new TimelineMax({ paused: true });
var tlWalkingNate = new TimelineMax({ paused: true });
var tlWalkingConor = new TimelineMax({ paused: true });

var tlC = {};
var tlN = {};

var fightScenesConor = ["impact", "stepPush", "step", "push", "wiggle", "strike", "punch", "punch2", "retreat"];
var fightScenesNate = ["jabbing", "backing", "getHit", "attack"];

for (var _i2 = 0; _i2 < fightScenesConor.length; _i2++) {
  tlC[fightScenesConor[_i2]] = new TimelineMax({ paused: true });
}

for (var _i3 = 0; _i3 < fightScenesNate.length; _i3++) {
  tlN[fightScenesNate[_i3]] = new TimelineMax({ paused: true });
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
  TweenMax.set(c.body, { rotation: 0, x: 100, y: 20, transformOrigin: "center" });
  TweenMax.set(c.FootBack, { rotation: 0, transformOrigin: "center" });
  TweenMax.set(c.KneeBack, { rotation: -25, transformOrigin: "center" });
  TweenMax.set(c.LegBack, { rotation: 30, transformOrigin: "center" });
  TweenMax.set(c.HipBack, { rotation: 0, transformOrigin: "center" });
  TweenMax.set(c.SpineBack, { rotation: 0, transformOrigin: "center" });
  TweenMax.set(c.ShoulderBack, { rotation: 100, transformOrigin: "center" });
  TweenMax.set(c.ElbowBack, { rotation: -25, transformOrigin: "center" });
  TweenMax.set(c.WristBack, { rotation: 25, transformOrigin: "center" });
  TweenMax.set(c.FootFront, { rotation: 0, transformOrigin: "center" });
  TweenMax.set(c.KneeFront, { rotation: 0, transformOrigin: "center" });
  TweenMax.set(c.LegFront, { rotation: -20, transformOrigin: "center" });
  TweenMax.set(c.HipFront, { rotation: 0, transformOrigin: "center" });
  TweenMax.set(c.SpineFront, { rotation: -10, transformOrigin: "center" });
  TweenMax.set(c.ShoulderFront, { rotation: 0, transformOrigin: "center" });
  TweenMax.set(c.ElbowFront, { rotation: 50, transformOrigin: "center" });
  TweenMax.set(c.WristFront, { rotation: 0, transformOrigin: "center" });
  TweenMax.set(c.Neck, { rotation: 0, transformOrigin: "center" });
  TweenMax.set(c.Head, { rotation: 0, transformOrigin: "center" });
  // Position
  TweenMax.set(c.ShoulderBack, { x: 0 });
  TweenMax.set(c.HipBack, { x: 0 });
  TweenMax.set(c.LegBack, { x: 0 });
  TweenMax.set(c.Neck, { x: 0 });
  TweenMax.set(c.LegFront, { x: 0 });
  TweenMax.set(c.HipFront, { x: 0 });
  TweenMax.set(c.ShoulderFront, { x: 0, y: 7 });
  // Visibility
  TweenMax.set(c.fingers, { autoAlpha: 1 });
  TweenMax.set(c.noFingers, { autoAlpha: 0 });
}

//  Nate
function nateStartPose() {
  // Rotation
  TweenMax.set(n.body, { rotation: 8, x: 165, y: 20, transformOrigin: "center" });

  TweenMax.set(n.KneeBack, { rotation: 30, transformOrigin: "center" });
  TweenMax.set(n.LegBack, { rotation: -30, transformOrigin: "center" });

  TweenMax.set(n.HipBack, { rotation: 0, transformOrigin: "center" });
  TweenMax.set(n.SpineBack, { rotation: -10, transformOrigin: "center" });
  TweenMax.set(n.ShoulderBack, { rotation: 90, transformOrigin: "center" });
  TweenMax.set(n.ElbowBack, { rotation: -90, transformOrigin: "center" });
  TweenMax.set(n.WristBack, { rotation: -10, transformOrigin: "center" });

  TweenMax.set(n.KneeFront, { rotation: 15, transformOrigin: "center" });
  TweenMax.set(n.LegFront, { rotation: 5, transformOrigin: "center" });

  TweenMax.set(n.HipFront, { rotation: 0, transformOrigin: "center" });
  TweenMax.set(n.SpineFront, { rotation: 0, transformOrigin: "center" });
  TweenMax.set(n.ShoulderFront, { rotation: -50, transformOrigin: "center" });
  TweenMax.set(n.ElbowFront, { rotation: -90, transformOrigin: "center" });
  TweenMax.set(n.WristFront, { rotation: 0, transformOrigin: "center" });

  TweenMax.set(n.Neck, { rotation: 20, transformOrigin: "center" });
  TweenMax.set(n.Head, { rotation: 10, transformOrigin: "center" });
  // Position
  TweenMax.set(n.ShoulderBack, { x: 0 });
  TweenMax.set(n.HipBack, { x: 0 });
  TweenMax.set(n.LegBack, { x: 0 });
  TweenMax.set(n.Neck, { x: 0 });
  TweenMax.set(n.LegFront, { x: 0 });
  TweenMax.set(n.HipFront, { x: 0 });
  TweenMax.set(n.ShoulderFront, { y: 8, x: 0 });
  // Visibility
  TweenMax.set(n.fingers, { autoAlpha: 0 });
  TweenMax.set(n.noFingers, { autoAlpha: 1 });
}

//  Nate
function visibility() {
  TweenMax.set(c.Neck, { autoAlpha: 1 });
  TweenMax.set(c.Head, { autoAlpha: 1 });
  TweenMax.set(c.body, { autoAlpha: 1 });
  TweenMax.set(c.ShoulderBack, { autoAlpha: 1 });
  TweenMax.set(c.ShoulderFront, { autoAlpha: 1 });
  TweenMax.set(c.ElbowBack, { autoAlpha: 1 });
  TweenMax.set(c.ElbowFront, { autoAlpha: 1 });
  TweenMax.set(c.WristBack, { autoAlpha: 1 });
  TweenMax.set(c.WristFront, { autoAlpha: 1 });
  TweenMax.set(c.fingers, { autoAlpha: 1 });
  TweenMax.set(c.noFingers, { autoAlpha: 0 });
  TweenMax.set(c.SpineBack, { autoAlpha: 1 });
  TweenMax.set(c.SpineFront, { autoAlpha: 1 });
  TweenMax.set(c.HipFront, { autoAlpha: 1 });
  TweenMax.set(c.HipBack, { autoAlpha: 1 });
  TweenMax.set(c.KneeBack, { autoAlpha: 1 });
  TweenMax.set(c.LegBack, { autoAlpha: 1 });
  TweenMax.set(c.LegFront, { autoAlpha: 1 });
  TweenMax.set(c.KneeFront, { autoAlpha: 1 });

  TweenMax.set(n.Neck, { autoAlpha: 1 });
  TweenMax.set(n.Head, { autoAlpha: 1 });
  TweenMax.set(n.body, { autoAlpha: 1 });
  TweenMax.set(n.ShoulderBack, { autoAlpha: 1 });
  TweenMax.set(n.ShoulderFront, { autoAlpha: 1 });
  TweenMax.set(n.ElbowBack, { autoAlpha: 1 });
  TweenMax.set(n.ElbowFront, { autoAlpha: 1 });
  TweenMax.set(n.WristBack, { autoAlpha: 1 });
  TweenMax.set(n.WristFront, { autoAlpha: 1 });
  TweenMax.set(n.fingers, { autoAlpha: 0 });
  TweenMax.set(n.noFingers, { autoAlpha: 1 });
  TweenMax.set(n.SpineBack, { autoAlpha: 1 });
  TweenMax.set(n.SpineFront, { autoAlpha: 1 });
  TweenMax.set(n.HipFront, { autoAlpha: 1 });
  TweenMax.set(n.HipBack, { autoAlpha: 1 });
  TweenMax.set(n.KneeBack, { autoAlpha: 1 });
  TweenMax.set(n.LegBack, { autoAlpha: 1 });
  TweenMax.set(n.LegFront, { autoAlpha: 1 });
  TweenMax.set(n.KneeFront, { autoAlpha: 1 });
}

// Starting values
function setStartingValues() {
  conorStartPose();
  nateStartPose();
  visibility();
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

  Keywords: "impact", "stepPush", "step", "push", "wiggle", "punch", "punch2", "retreat", "jabbing", "backing", "getHit", "attack"

///////////////////////////////////////
*/

//  CONOR TIMELINES
///////////////////////////////////////

//  Impact
tlC.impact.add("impact1")

// .to(c.LegBack, timeUnit, { rotation: 35, ease: Power1.easeNone }, "impact1")
// .to(c.KneeBack, timeUnit/2, { rotation: -40, ease: Power1.easeNone }, "impact1")
// .to(c.KneeBack, timeUnit/2, { rotation: -20, ease: Power1.easeNone }, "impact1 =+" + timeUnit/2)
// .to(c.LegBack, timeUnit, { rotation: 30, ease: Power1.easeNone }, "impact1 =+" + timeUnit)
// .to(c.KneeBack, timeUnit, { rotation: -25, ease: Power1.easeNone }, "impact1 =+" + timeUnit)

// .to(c.LegFront, timeUnit, { rotation: -20, ease: Power1.easeNone }, "impact1")
// .to(c.LegFront, timeUnit, { rotation: -10, ease: Power1.easeNone }, "impact1 =+" + timeUnit)
// .to(c.KneeFront, timeUnit, { rotation: 0, ease: Power1.easeNone }, "impact1")
// .to(c.KneeFront, timeUnit, { rotation: -20, ease: Power1.easeNone }, "impact1 =+" + timeUnit)

// .to(c.body, timeUnit, { rotation: -1, x: "-=15", y: 21, ease: Power1.easeNone }, "impact1")
// .to(c.body, timeUnit, { rotation: 1, x: "-=15", y: 23, ease: Power1.easeNone }, "impact1 =+" + timeUnit)

.add("impact2", "impact1 =+" + timeUnit * 2)
// .to(c.LegBack, timeUnit, { rotation: 35, ease: Power1.easeNone }, "impact2")
// .to(c.KneeBack, timeUnit/2, { rotation: -40, ease: Power1.easeNone }, "impact2")
// .to(c.KneeBack, timeUnit/2, { rotation: -20, ease: Power1.easeNone }, "impact2 =+" + timeUnit/2)
// .to(c.LegBack, timeUnit, { rotation: 30, ease: Power1.easeNone }, "impact2 =+" + timeUnit)
// .to(c.KneeBack, timeUnit, { rotation: -25, ease: Power1.easeNone }, "impact2 =+" + timeUnit)

// .to(c.LegFront, timeUnit, { rotation: -20, ease: Power1.easeNone }, "impact2")
// .to(c.LegFront, timeUnit, { rotation: -10, ease: Power1.easeNone }, "impact2 =+" + timeUnit)
// .to(c.KneeFront, timeUnit, { rotation: 0, ease: Power1.easeNone }, "impact2")
// .to(c.KneeFront, timeUnit, { rotation: -20, ease: Power1.easeNone }, "impact2 =+" + timeUnit)

// .to(c.body, timeUnit, { rotation: -2, x: "-=25", y: 20, ease: Power1.easeNone }, "impact2")
// .to(c.body, timeUnit, { rotation: 0, x: "-=15", y: 20, ease: Power1.easeNone }, "impact2 =+" + timeUnit)

// Impacts
.add("hit1", "impact2 =-0.3").to(c.ShoulderBack, timeUnit / 4, { rotation: 90, x: "+=3" }, "hit1").to(c.ShoulderBack, timeUnit / 4, { rotation: 100, x: "-=3" }, "hit1 =+" + timeUnit / 3).to(c.ElbowBack, timeUnit / 4, { rotation: -5 }, "hit1").to(c.ElbowBack, timeUnit / 4, { rotation: -20 }, "hit1 =+" + timeUnit / 3).to(c.WristBack, timeUnit / 4, { rotation: 35 }, "hit1").to(c.WristBack, timeUnit / 4, { rotation: 25 }, "hit1 =+" + timeUnit / 3).add("hit2", "hit1 =+" + timeUnit * 1.5).to(c.ShoulderBack, timeUnit / 4, { rotation: 90, x: "+=3" }, "hit2").to(c.ShoulderBack, timeUnit / 4, { rotation: 100, x: "-=3" }, "hit2 =+" + timeUnit / 3).to(c.ElbowBack, timeUnit / 4, { rotation: -10 }, "hit2").to(c.ElbowBack, timeUnit / 4, { rotation: -25 }, "hit2 =+" + timeUnit / 3).to(c.WristBack, timeUnit / 4, { rotation: 35 }, "hit2").to(c.WristBack, timeUnit / 4, { rotation: 25 }, "hit2 =+" + timeUnit / 3)

// Wiggle front arm
.add("frontArmWiggle", "impact1").to(c.ShoulderFront, timeUnit, { rotation: "+=15", ease: Back.easeOut }, "frontArmWiggle").to(c.ShoulderFront, timeUnit, { rotation: "-=5", ease: Back.easeOut }, "frontArmWiggle =+" + timeUnit).to(c.ElbowFront, timeUnit, { rotation: "+=25", ease: Back.easeIn }, "frontArmWiggle").to(c.ElbowFront, timeUnit, { rotation: "-=10", ease: Back.easeOut }, "frontArmWiggle =+" + timeUnit).add("afterImpact");

//  StepPush
tlC.step.add("step1").to(c.LegBack, timeUnit, { rotation: 35, ease: Power1.easeNone }, "step1").to(c.KneeBack, timeUnit / 2, { rotation: -40, ease: Power1.easeNone }, "step1").to(c.KneeBack, timeUnit / 2, { rotation: -20, ease: Power1.easeNone }, "step1 =+" + timeUnit / 2).to(c.LegBack, timeUnit, { rotation: 30, ease: Power1.easeNone }, "step1 =+" + timeUnit).to(c.KneeBack, timeUnit, { rotation: -25, ease: Power1.easeNone }, "step1 =+" + timeUnit).to(c.LegFront, timeUnit, { rotation: -25, ease: Power1.easeNone }, "step1").to(c.LegFront, timeUnit, { rotation: -20, ease: Power1.easeNone }, "step1 =+" + timeUnit).to(c.body, timeUnit, { rotation: 3, x: "-=25", y: 25, ease: Power1.easeNone }, "step1").to(c.body, timeUnit, { rotation: 0, x: "-=20", y: 20, ease: Power1.easeNone }, "step1 =+" + timeUnit).add("step2", "step1 =+" + timeUnit * 2).to(c.LegBack, timeUnit / 2, { rotation: 40, ease: Power1.easeNone }, "step2").to(c.KneeBack, timeUnit / 4, { rotation: -45, ease: Power1.easeNone }, "step2").to(c.KneeBack, timeUnit / 4, { rotation: -25, ease: Power1.easeNone }, "step2 =+" + timeUnit / 4).to(c.LegBack, timeUnit / 2, { rotation: 30, ease: Power1.easeNone }, "step2 =+" + timeUnit / 2).to(c.LegFront, timeUnit / 2, { rotation: -30, ease: Power1.easeNone }, "step2").to(c.LegFront, timeUnit / 2, { rotation: -20, ease: Power1.easeNone }, "step2 =+" + timeUnit / 2).to(c.body, timeUnit / 2, { rotation: 5, x: "-=15", y: 30, ease: Power1.easeNone }, "step2").to(c.body, timeUnit / 2, { rotation: 0, x: "-=20", y: 20, ease: Power1.easeNone }, "step2 =+" + timeUnit / 2);

tlC.push.add("push1").to(c.ShoulderBack, timeUnit, { rotation: 50 }, "push1").to(c.ElbowBack, timeUnit, { rotation: 50 }, "push1").to(c.WristBack, timeUnit, { rotation: 45 }, "push1").to(c.ShoulderBack, timeUnit, { rotation: 90, ease: Power2.easeOut }, "push1 =+" + timeUnit).to(c.ElbowBack, timeUnit, { rotation: -20 }, "push1 =+" + timeUnit).to(c.WristBack, timeUnit, { rotation: 25 }, "push1 =+" + timeUnit).add("push2", "push1 =+" + timeUnit * 2).to(c.ShoulderBack, timeUnit * 0.3, { rotation: 60, ease: Power1.easeInOut }, "push2").to(c.ElbowBack, timeUnit / 2, { rotation: 50 }, "push2").to(c.WristBack, timeUnit / 2, { rotation: 25 }, "push2").to(c.ShoulderBack, timeUnit, { rotation: 110, ease: Power1.easeOut }, "push2 =+" + timeUnit * 0.3).to(c.ElbowBack, timeUnit, { rotation: -30 }, "push2 =+" + timeUnit / 2).to(c.WristBack, timeUnit, { rotation: 35 }, "push2 =+" + timeUnit / 2).add("afterPush");

tlC.wiggle.add("wiggle").to(c.ShoulderFront, timeUnit / 2, { y: 2, x: 0, rotation: "-=5", ease: Power1.easeInOut }, "wiggle").to(c.ElbowFront, timeUnit, { rotation: 60, ease: Power1.easeInOut }, "wiggle").to(c.ShoulderFront, timeUnit / 2, { y: 0, x: -2, rotation: "+=10", ease: Power1.easeInOut }, "wiggle =+" + timeUnit / 2).to(c.ShoulderFront, timeUnit / 2, { y: 2, x: 0, rotation: "-=15", ease: Power1.easeInOut }, "wiggle =+" + timeUnit).to(c.ElbowFront, timeUnit, { rotation: 80, ease: Power1.easeInOut }, "wiggle =+" + timeUnit).to(c.ShoulderFront, timeUnit / 2, { y: 0, x: -2, rotation: "+=20", ease: Power1.easeInOut }, "wiggle =+" + timeUnit * 1.5).to(c.ShoulderFront, timeUnit / 2, { y: 2, x: -5, rotation: "-=15", ease: Power1.easeInOut }, "wiggle =+" + timeUnit * 2).to(c.ElbowFront, timeUnit, { rotation: 70, ease: Power1.easeInOut }, "wiggle =+" + timeUnit * 2).to(c.ShoulderFront, timeUnit / 2, { y: 5, x: -3, rotation: "+=5", ease: Power1.easeInOut }, "wiggle =+" + timeUnit * 2.5).to(c.HipFront, timeUnit / 2, { rotation: -10 }, "wiggle").to(c.HipBack, timeUnit / 2, { rotation: -5 }, "wiggle").to(c.HipFront, timeUnit, { rotation: 0 }, "wiggle =+" + timeUnit / 2).to(c.HipBack, timeUnit, { rotation: 0 }, "wiggle =+" + timeUnit / 2).to(c.HipFront, timeUnit / 2, { rotation: -5 }, "wiggle =+" + timeUnit * 2).to(c.HipBack, timeUnit / 2, { rotation: -10 }, "wiggle =+" + timeUnit * 2);

tlC.stepPush.add(tlC.step.restart(), 0) // Duration 0.9
.add(tlC.push.restart(), 0) // Duration 1.05
.add(tlC.wiggle.restart(), 0) // Duration 0.9
.add("afterStepPush");

//  Punch
tlC.punch.add("suspend")
// Primary
.to(c.ShoulderBack, timeUnit / 3, { rotation: 80, y: 5, ease: Power1.easeInOut }, "suspend").to(c.ElbowBack, timeUnit / 3, { rotation: 20, ease: Power1.easeInOut }, "suspend")
// Secondary
.to(c.Neck, timeUnit / 3, { rotation: -30, ease: Power1.easeInOut }, "suspend").to(c.Head, timeUnit / 3, { rotation: 20, ease: Power1.easeInOut }, "suspend").to(c.ShoulderFront, timeUnit / 3, { rotation: 70, ease: Power1.easeInOut }, "suspend").to(c.ElbowFront, timeUnit / 3, { rotation: 80, ease: Power1.easeInOut }, "suspend").to(c.HipBack, timeUnit / 3, { rotation: -5, ease: Power1.easeInOut }, "suspend").to(c.HipFront, timeUnit / 3, { rotation: -10, ease: Power1.easeInOut }, "suspend").add("release", "suspend =+" + timeUnit / 3)
// Primary
.to(c.SpineBack, timeUnit / 3, { rotation: -10, ease: Power1.easeIn }, "release").to(c.ShoulderBack, timeUnit / 3, { rotation: 150, x: 0, y: -10, ease: Power1.easeIn }, "release").to(c.ElbowBack, timeUnit / 3, { rotation: -30, ease: Back.easeOut }, "release").to(c.WristBack, timeUnit / 3, { rotation: 10, ease: Power1.easeIn }, "release").set(c.fingers, { autoAlpha: 0 }, "release").set(c.noFingers, { autoAlpha: 1 }, "release").to(c.body, timeUnit / 3, { x: "-=40", y: 35, rotation: -15, ease: Power1.easeIn }, "release").to(c.LegBack, timeUnit / 3, { rotation: 55, ease: Power1.easeNone }, "release").to(c.LegFront, timeUnit / 3, { rotation: -15, ease: Power1.easeNone }, "release")

// Secondary
.to(c.Neck, timeUnit / 3, { rotation: 30, ease: Power1.easeIn }, "release").to(c.Head, timeUnit / 3, { rotation: 0, y: 5, ease: Power1.easeIn }, "release").to(c.ShoulderFront, timeUnit / 3, { rotation: 0, x: 5, y: 5, ease: Power1.easeOut }, "release").to(c.ElbowFront, timeUnit / 3, { rotation: 130, ease: Power1.easeIn }, "release").to(c.HipFront, timeUnit / 3, { rotation: 0, ease: Power1.easeIn }, "release")

// After
//.to(c.ShoulderBack, timeUnit, { rotation: 170, ease: Power1.easeIn }, "release")
.add("afterPunch");

//  Punch 2
tlC.punch2.add("strike").to(c.LegFront, timeUnit, { rotation: -15, ease: Power1.easeInOut }, "strike").to(c.KneeFront, timeUnit, { rotation: -5, ease: Power1.easeInOut }, "strike").to(c.body, timeUnit, { rotation: -25, x: "-=15", ease: Power1.easeInOut }, "strike")

// Leg and hip back
.to(c.LegBack, timeUnit, { x: "+=5", rotation: 65, ease: Power1.easeInOut }, "strike").to(c.HipBack, timeUnit, { x: "+=5", ease: Power1.easeInOut }, "strike").to(c.KneeBack, timeUnit, { rotation: -35, ease: Power1.easeInOut }, "strike")

// Rotate torso
.to(c.HipBack, timeUnit, { rotation: 0, ease: Power1.easeInOut }, "strike").to(c.HipFront, timeUnit, { rotation: -10, ease: Power1.easeInOut }, "strike").to(c.SpineBack, timeUnit, { rotation: 10, ease: Power1.easeInOut }, "strike").to(c.SpineFront, timeUnit, { rotation: -30, ease: Power2.easeIn }, "strike")

// Move head
.to(c.Neck, timeUnit, { rotation: 10, x: -15, ease: Power2.easeIn }, "strike").to(c.Head, timeUnit, { rotation: 40, ease: Power1.easeIn }, "strike")

// Pull back right
.to(c.ShoulderBack, timeUnit / 2, { rotation: 150, x: 0, y: -10, ease: Power4.easeOut }, "strike").to(c.ShoulderBack, timeUnit, { rotation: -60, x: 20, y: 5, ease: Power3.easeOut }, "strike =+" + timeUnit * 0.5).to(c.ElbowBack, timeUnit, { rotation: 60, ease: Power1.easeIn }, "strike")

// Throw left
.to(c.ShoulderFront, timeUnit, { rotation: 170, x: -20, y: -15, ease: Back.easeInOut }, "strike =+" + timeUnit * 0.2).to(c.ElbowFront, timeUnit, { rotation: -20, ease: Back.easeInOut }, "strike =+" + timeUnit * 0.2).add("pullBack")
// Upper body
.to(c.ShoulderFront, timeUnit * 3, { rotation: 0, x: 0, y: 5, ease: Back.easeOut }, "pullBack").to(c.ElbowFront, timeUnit * 3, { rotation: 90, ease: Back.easeOut }, "pullBack").to(c.SpineBack, timeUnit * 2, { rotation: -20, ease: Back.easeOut }, "pullBack").to(c.SpineFront, timeUnit * 2, { rotation: -20, ease: Back.easeOut }, "pullBack").to(c.HipBack, timeUnit, { rotation: 25, ease: Power2.easeOut }, "pullBack =+" + timeUnit).to(c.HipFront, timeUnit, { rotation: 20, ease: Power2.easeOut }, "pullBack =+" + timeUnit).to(c.Neck, timeUnit * 3, { rotation: -5, x: -5, y: -3, ease: Power3.easeOut }, "pullBack").to(c.Head, timeUnit * 3, { rotation: -5, ease: Power3.easeOut }, "pullBack")

// Wiggle in response to Nates push
.to(c.HipBack, timeUnit, { rotation: "-=3", ease: SlowMo.ease.config(0.1, 0.1, true) }, "pullBack =+" + timeUnit * 2).to(c.HipFront, timeUnit, { rotation: "-=3", ease: SlowMo.ease.config(0.1, 0.1, true) }, "pullBack =+" + timeUnit * 2)

// Block arm
.to(c.ShoulderBack, timeUnit * 2, { rotation: 45, x: 5, y: -5, ease: Back.easeOut }, "pullBack").to(c.ElbowBack, timeUnit * 2, { rotation: 110, ease: Back.easeOut }, "pullBack")
// .to(c.ShoulderBack, timeUnit/2, { rotation: 45, y: -10, ease: Back.easeOut }, "pullBack =+" + timeUnit*1.5)
// .to(c.ElbowBack, timeUnit/2, { rotation: 110, ease: Back.easeOut }, "pullBack =+" + timeUnit*1.5)

// Lower body
.to(c.body, timeUnit / 2, { rotation: -28, x: "-=5", ease: Power1.easeNone }, "pullBack").to(c.LegBack, timeUnit / 2, { rotation: 68, ease: Power1.easeNone }, "pullBack").to(c.KneeBack, timeUnit / 2, { rotation: -37, ease: Power1.easeNone }, "pullBack").to(c.LegFront, timeUnit / 2, { rotation: -5, ease: Power1.easeNone }, "pullBack").to(c.KneeFront, timeUnit / 2, { rotation: -25, ease: Power1.easeNone }, "pullBack").to(c.body, timeUnit / 2, { rotation: -15, x: "-=25", y: 15, ease: Power1.easeIn }, "pullBack =+" + timeUnit / 2).to(c.LegBack, timeUnit / 2, { rotation: 30, ease: Power1.easeIn }, "pullBack =+" + timeUnit / 2).to(c.KneeBack, timeUnit / 2, { rotation: -10, ease: Power1.easeIn }, "pullBack =+" + timeUnit / 2).to(c.LegFront, timeUnit / 2, { rotation: -5, ease: Power1.easeIn }, "pullBack =+" + timeUnit / 2).to(c.KneeFront, timeUnit / 2, { rotation: -25, ease: Power1.easeIn }, "pullBack =+" + timeUnit / 2).to(c.body, timeUnit / 2, { rotation: -10, x: "+=20", y: 20, ease: Power1.easeOut }, "pullBack =+" + timeUnit).to(c.LegBack, timeUnit / 2, { rotation: 35, x: "-=5", ease: Power1.easeOut }, "pullBack =+" + timeUnit).to(c.HipBack, timeUnit / 2, { x: "-=5", ease: Power1.easeOut }, "pullBack =+" + timeUnit).to(c.KneeBack, timeUnit / 2, { rotation: -20, ease: Power1.easeOut }, "pullBack =+" + timeUnit).to(c.LegFront, timeUnit / 2, { rotation: -15, ease: Power1.easeOut }, "pullBack =+" + timeUnit).to(c.KneeFront, timeUnit / 2, { rotation: -5, ease: Power3.easeOut }, "pullBack =+" + timeUnit).to(c.body, timeUnit / 2, { y: 15, x: "-=5", ease: Power1.easeOut }, "pullBack =+" + timeUnit * 1.5).to(c.LegBack, timeUnit / 2, { rotation: 30, ease: Power1.easeOut }, "pullBack =+" + timeUnit * 1.5).to(c.KneeBack, timeUnit / 2, { rotation: -15, ease: Power1.easeOut }, "pullBack =+" + timeUnit * 1.5).to(c.LegFront, timeUnit / 2, { rotation: -15, ease: Power1.easeOut }, "pullBack =+" + timeUnit * 1.5).to(c.KneeFront, timeUnit / 2, { rotation: 0, ease: Power3.easeOut }, "pullBack =+" + timeUnit * 1.5).to(c.body, timeUnit, { y: 20, ease: Power1.easeIn }, "pullBack =+" + timeUnit * 2).to(c.LegBack, timeUnit, { rotation: 35, ease: Power1.easeIn }, "pullBack =+" + timeUnit * 2).to(c.KneeBack, timeUnit, { rotation: -25, ease: Power1.easeIn }, "pullBack =+" + timeUnit * 2).to(c.LegFront, timeUnit, { rotation: -14, ease: Power1.easeIn }, "pullBack =+" + timeUnit * 2).to(c.KneeFront, timeUnit, { rotation: -5, ease: Power3.easeIn }, "pullBack =+" + timeUnit * 2).add("afterStrike");

//  Strike
tlC.strike.add(tlC.punch.play()).add(tlC.punch2.play(), "afterPunch");

//  CONOR RETREATING
//  Keywords: -
///////////////////////////////////////


//  Retreat
tlC.retreat // Max 2x timeUnit
.add("oneStepBack")
// Lower body
.to(c.body, timeUnit * 0.75, { rotation: "+=10", x: "+=15", y: "+=15", ease: Power1.easeIn }, "oneStepBack").to(c.body, timeUnit * 0.75, { rotation: "-=5", x: "+=15", y: "-=5", ease: Power1.easeOut }, "oneStepBack =+" + timeUnit * 0.75).to(c.LegBack, timeUnit * 0.75, { rotation: "+=5", ease: Power1.easeIn }, "oneStepBack").to(c.LegBack, timeUnit * 0.75, { rotation: "-=10", ease: Power1.easeOut }, "oneStepBack =+" + timeUnit * 0.75).to(c.KneeBack, timeUnit * 0.75, { rotation: "-=10", ease: Power1.easeIn }, "oneStepBack").to(c.KneeBack, timeUnit * 0.75, { rotation: 0, ease: Power1.easeOut }, "oneStepBack =+" + timeUnit * 0.75).to(c.LegFront, timeUnit * 0.75, { rotation: "-=10", ease: Power2.easeIn }, "oneStepBack").to(c.LegFront, timeUnit * 0.75, { rotation: "+=10", ease: Power1.easeOut }, "oneStepBack =+" + timeUnit * 0.75).to(c.KneeFront, timeUnit * 0.75, { rotation: "-=25", ease: Power1.easeIn }, "oneStepBack").to(c.KneeFront, timeUnit * 0.75, { rotation: "+=5", ease: Power1.easeOut }, "oneStepBack =+" + timeUnit * 0.75).to(c.HipBack, timeUnit * 1.5, { rotation: "-=10", ease: Power2.easeOut }, "oneStepBack").to(c.HipFront, timeUnit * 1.5, { rotation: "-=10", ease: Power2.easeOut }, "oneStepBack").to(c.SpineBack, timeUnit * 1.5, { rotation: "-=20", ease: Power1.easeOut }, "oneStepBack").to(c.SpineFront, timeUnit * 1.5, { rotation: "-=20", ease: Power1.easeOut }, "oneStepBack").to(c.Neck, timeUnit * 1.5, { rotation: "-=10", x: "-=20", y: "+=10", ease: Power1.easeOut }, "oneStepBack").to(c.ShoulderBack, timeUnit * 1.5, { rotation: 75, ease: Back.easeOut }, "oneStepBack").to(c.ElbowBack, timeUnit * 1.5, { rotation: 80, ease: Back.easeOut }, "oneStepBack").to(c.ShoulderFront, timeUnit * 1.5, { rotation: 105, ease: Back.easeOut }, "oneStepBack").to(c.ElbowFront, timeUnit * 1.5, { rotation: 80, ease: Back.easeOut }, "oneStepBack").add("bigImpact") // Impact after 1.5 timeUnit

// TAKE THE PUNCH

// Snap back with body and leg
.to(c.body, timeUnit * 1.5, { rotation: 15, x: 60, y: 25, ease: Back.easeOut }, "bigImpact").to(c.LegFront, timeUnit * 1.5, { rotation: 10, ease: Back.easeOut }, "bigImpact").to(c.KneeFront, timeUnit * 1.5, { rotation: -35, ease: Back.easeOut }, "bigImpact")

// Back leg 5s
.to(c.KneeBack, timeUnit * 5, { bezier: { curviness: 5, values: [{ rotation: -30 }, { rotation: -40 }, { rotation: 0 }] }, ease: Power1.easeOut }, "bigImpact").to(c.LegBack, timeUnit * 2, { bezier: { curviness: 2, values: [{ rotation: 15 }, { rotation: 0 }] }, ease: Power2.easeOut }, "bigImpact")

// Impact to the head
.to(c.Neck, timeUnit, { rotation: 20, x: -10, y: 10, ease: Power1.easeOut }, "bigImpact").to(c.Neck, timeUnit * 3, { rotation: 10, x: -13, y: -5, ease: Power1.easeOut }, "bigImpact =+" + timeUnit).to(c.Head, timeUnit, { rotation: 20, ease: Power3.easeOut }, "bigImpact").to(c.Head, timeUnit * 1.5, { rotation: -15, ease: Power1.easeIn }, "bigImpact =+" + timeUnit).to(c.Head, timeUnit * 2.5, { rotation: 5, ease: Power1.easeOut }, "bigImpact =+" + timeUnit * 2.5)

// .to(c.Head, timeUnit/2, { rotation: 5, ease: Power3.easeOut }, "bigImpact")

// Crouch
.to(c.HipBack, timeUnit, { rotation: -30, ease: Power1.easeOut }, "bigImpact").to(c.HipFront, timeUnit, { rotation: -35, ease: Power1.easeOut }, "bigImpact").to(c.SpineBack, timeUnit, { rotation: -15, ease: Power1.easeOut }, "bigImpact").to(c.SpineFront, timeUnit, { rotation: -25, ease: Power1.easeOut }, "bigImpact")

// Arms  
.to(c.ShoulderFront, timeUnit, { rotation: 120, x: "-=5", ease: Power4.easeOut }, "bigImpact").to(c.ElbowFront, timeUnit, { rotation: 70, ease: Power4.easeOut }, "bigImpact").to(c.ShoulderFront, timeUnit, { rotation: 105, ease: Power1.easeInOut }, "bigImpact =+" + timeUnit).to(c.ElbowFront, timeUnit, { rotation: 85, ease: Power1.easeInOut }, "bigImpact =+" + timeUnit).to(c.ShoulderFront, timeUnit, { rotation: 80, ease: Power2.easeOut }, "bigImpact =+" + timeUnit * 2).to(c.ElbowFront, timeUnit, { rotation: 50, ease: Power2.easeOut }, "bigImpact =+" + timeUnit * 2).to(c.ShoulderFront, timeUnit * 1, { rotation: 0, ease: Power1.easeInOut }, "bigImpact =+" + timeUnit * 3.5).to(c.ElbowFront, timeUnit * 1.5, { bezier: { curviness: 2, values: [{ rotation: 55 }, { rotation: 0 }] }, ease: Power1.easeInOut }, "bigImpact =+" + timeUnit * 3.5).to(c.ShoulderBack, timeUnit, { rotation: 70, x: "+=10", y: "-=5", ease: Power2.easeOut }, "bigImpact").to(c.ElbowBack, timeUnit, { rotation: 30, ease: Power2.easeOut }, "bigImpact").to(c.WristBack, timeUnit, { rotation: 5, ease: Power2.easeOut }, "bigImpact").to(c.ShoulderBack, timeUnit * 2, { rotation: 20, ease: Power1.easeInOut }, "bigImpact =+" + timeUnit).to(c.ElbowBack, timeUnit * 2, { rotation: 20, ease: Power3.easeIn }, "bigImpact =+" + timeUnit).to(c.ShoulderBack, timeUnit * 2, { rotation: 20, ease: Power2.easeOut }, "bigImpact =+" + timeUnit * 3).to(c.ShoulderBack, timeUnit * 4, { x: 5, y: -5, ease: Power2.easeIn }, "bigImpact =+" + timeUnit * 1).to(c.ElbowBack, timeUnit * 2, { rotation: -10, ease: Power1.easeOut }, "bigImpact =+" + timeUnit * 3).to(c.SpineBack, timeUnit, { rotation: -20, ease: Power1.easeIn }, "bigImpact =+" + timeUnit * 4)

// RECOVER
.to(c.body, timeUnit * 3.5, { rotation: 0, x: 35, y: 10, ease: Power1.easeOut }, "bigImpact =+" + timeUnit * 1.5).to(c.KneeFront, timeUnit * 3.5, { rotation: 0, ease: Power1.easeOut }, "bigImpact =+" + timeUnit * 1.5).to(c.LegFront, timeUnit * 3.5, { rotation: 0, ease: Power1.easeOut }, "bigImpact =+" + timeUnit * 1.5).to(c.HipBack, timeUnit * 3, { rotation: 15, ease: Power2.easeInOut }, "bigImpact =+" + timeUnit).to(c.HipFront, timeUnit * 3, { rotation: 15, ease: Power2.easeInOut }, "bigImpact =+" + timeUnit).to(c.SpineBack, timeUnit * 3, { rotation: -15, ease: Power1.easeOut }, "bigImpact =+" + timeUnit).to(c.SpineFront, timeUnit * 3, { rotation: -15, ease: Power1.easeOut }, "bigImpact =+" + timeUnit);

tlWalkingConor.add("billionairStrut").to(c.body, timeUnit, { x: "-=20", ease: Power1.easeIn }, "billionairStrut").to(c.body, timeUnit, { y: 15, ease: Power2.easeInOut, repeat: 16, yoyo: true }, "billionairStrut =+" + timeUnit * 1.1).to(c.body, timeUnit * 17, { x: "-=550", scale: 0.9, ease: Linear.easeNone }, "billionairStrut =+" + timeUnit).to(c.LegFront, timeUnit * 2, { x: "+=10", ease: Power1.easeInOut, repeat: 7, yoyo: true }, "billionairStrut").to(c.LegFront, timeUnit * 2, { rotation: 15, ease: Power1.easeInOut }, "billionairStrut").to(c.KneeFront, timeUnit, { rotation: -40, ease: Power1.easeInOut }, "billionairStrut").to(c.KneeFront, timeUnit, { rotation: 10, ease: Power1.easeInOut }, "billionairStrut =+" + timeUnit).to(c.LegFront, timeUnit * 2, { rotation: -20, repeat: 7, yoyo: true, ease: Power1.easeInOut }, "billionairStrut =+" + timeUnit * 2).to(c.KneeFront, timeUnit * 2.5, { bezier: { curviness: 2, values: [{ rotation: -40 }, { rotation: 10 }] }, repeat: 3, repeatDelay: timeUnit * 1.5, ease: Power1.easeInOut }, "billionairStrut =+" + timeUnit * 4).to(c.LegBack, timeUnit * 2, { x: "+=10", ease: Power1.easeInOut, repeat: 7, yoyo: true }, "billionairStrut =+" + timeUnit * 2).to(c.LegBack, timeUnit * 2, { rotation: -20, ease: Power1.easeInOut }, "billionairStrut").to(c.LegBack, timeUnit * 2, { rotation: 15, repeat: 7, yoyo: true, ease: Power1.easeInOut }, "billionairStrut =+" + timeUnit * 2).to(c.KneeBack, timeUnit * 1.5, { rotation: 10, ease: Power1.easeInOut }, "billionairStrut").to(c.KneeBack, timeUnit * 2.5, { bezier: { curviness: 2, values: [{ rotation: -40 }, { rotation: 10 }] }, repeat: 3, repeatDelay: timeUnit * 1.5, ease: Power1.easeInOut }, "billionairStrut =+" + timeUnit * 1.5).to(c.HipFront, timeUnit * 2, { x: "+=10", rotation: "-=5", ease: Power1.easeInOut, repeat: 7, yoyo: true }, "billionairStrut").to(c.HipBack, timeUnit * 2, { rotation: "+=10", ease: Linear.easeNone }, "billionairStrut").to(c.HipBack, timeUnit * 2, { x: "+=10", rotation: "-=5", ease: Power1.easeInOut, repeat: 7, yoyo: true }, "billionairStrut =+" + timeUnit * 2).to(c.SpineFront, timeUnit * 2, { rotation: "+=10", ease: Linear.easeNone }, "billionairStrut").to(c.SpineFront, timeUnit * 2, { rotation: "-=15", ease: Linear.easeNone, repeat: 7, yoyo: true }, "billionairStrut =+" + timeUnit * 2).to(c.SpineBack, timeUnit * 2, { rotation: "-=10", ease: Linear.easeNone }, "billionairStrut").to(c.SpineBack, timeUnit * 2, { rotation: "+=15", ease: Linear.easeNone, repeat: 7, yoyo: true }, "billionairStrut =+" + timeUnit * 2).to(c.Neck, timeUnit * 2, { x: "-=15", y: "+=5", ease: Linear.easeNone }, "billionairStrut").to(c.Neck, timeUnit * 2, { x: "-=10", y: "+=5", ease: Linear.easeNone, repeat: 7, yoyo: true }, "billionairStrut =+" + timeUnit * 2).to(c.Head, timeUnit * 0.75, { rotation: "-=15", ease: Linear.easeNone, repeat: 22, yoyo: true }, "billionairStrut").to(c.ShoulderFront, timeUnit * 2, { x: "+=10", y: "+=5", ease: Power1.easeInOut }, "billionairStrut").to(c.ShoulderFront, timeUnit * 2, { rotation: 0, ease: Power1.easeInOut }, "billionairStrut =+" + timeUnit / 2).to(c.ShoulderFront, timeUnit * 2, { x: "-=30", y: "-=20", ease: Power1.easeInOut, repeat: 7, yoyo: true }, "billionairStrut =+" + timeUnit * 2).to(c.ShoulderFront, timeUnit * 2, { rotation: 90, ease: Power1.easeInOut, repeat: 7, yoyo: true }, "billionairStrut =+" + timeUnit * 2.5).to(c.ElbowFront, timeUnit * 2, { rotation: -65, ease: Power2.easeInOut }, "billionairStrut =+" + timeUnit * 1.5).to(c.ElbowFront, timeUnit * 2, { rotation: 0, ease: Power2.easeInOut, repeat: 6, yoyo: true }, "billionairStrut =+" + timeUnit * 3.5).to(c.WristFront, timeUnit * 2, { x: 10, y: -10, ease: Power2.easeInOut }, "billionairStrut").to(c.ShoulderBack, timeUnit * 2, { x: "-=10", y: "-=5", ease: Power1.easeInOut }, "billionairStrut").to(c.ShoulderBack, timeUnit * 2, { rotation: 100, ease: Power1.easeInOut }, "billionairStrut =+" + timeUnit / 2).to(c.ShoulderBack, timeUnit * 2, { x: "+=20", y: "+=20", ease: Power1.easeInOut, repeat: 7, yoyo: true }, "billionairStrut =+" + timeUnit * 2).to(c.ShoulderBack, timeUnit * 2, { rotation: -30, ease: Power1.easeInOut, repeat: 7, yoyo: true }, "billionairStrut =+" + timeUnit * 2.5).to(c.ElbowBack, timeUnit * 2, { rotation: -20, ease: Power2.easeInOut }, "billionairStrut").to(c.ElbowBack, timeUnit * 2, { rotation: -65, ease: Power2.easeInOut, repeat: 6, yoyo: true }, "billionairStrut =+" + timeUnit * 3.5).to(c.WristBack, timeUnit * 2, { x: 10, y: -10, ease: Power2.easeInOut }, "billionairStrut").to(c.WristBack, timeUnit * 2, { rotation: -30, ease: Power2.easeInOut, repeat: 6, yoyo: true }, "billionairStrut =+" + timeUnit * 3.5);

//  NATE TIMELINES
///////////////////////////////////////

// Jab jab
tlN.jabbing.add("jab1").to(n.ShoulderBack, timeUnit, { rotation: 0, ease: Power1.easeIn }, "jab1").to(n.ElbowBack, timeUnit, { rotation: 30, ease: Power1.easeIn }, "jab1").to(n.ShoulderBack, timeUnit, { rotation: 50, ease: Power4.easeOut }, "jab1 =+" + timeUnit).to(n.ElbowBack, timeUnit, { rotation: -50, ease: Power4.easeOut }, "jab1 =+" + timeUnit).add("jab2", timeUnit * 2).to(n.ShoulderBack, timeUnit / 2, { rotation: 5, ease: Power3.easeIn }, "jab2").to(n.ElbowBack, timeUnit / 2, { rotation: 30, ease: Power3.easeIn }, "jab2").add("jab22").to(n.ShoulderBack, timeUnit / 2, { rotation: 30, ease: Power1.easeOut }, "jab22").to(n.ElbowBack, timeUnit / 2, { rotation: -30, ease: Power1.easeOut }, "jab22").add("jabMove", "jab1").to(n.body, timeUnit, { rotation: "+=5", x: "+=15", ease: Power2.easeIn }, "jabMove").to(n.LegBack, timeUnit, { rotation: "-=20", ease: Power1.easeIn }, "jabMove").to(n.KneeBack, timeUnit, { rotation: "+=20", ease: Power1.easeIn }, "jabMove").add("jabMove2", "jabMove =+" + timeUnit).to(n.body, timeUnit, { rotation: "-=5", ease: Power2.easeOut }, "jabMove2").to(n.LegBack, timeUnit, { rotation: "+=20", ease: Power2.easeOut }, "jabMove2").to(n.KneeBack, timeUnit, { rotation: "-=20", ease: Power2.easeOut }, "jabMove2").to(n.LegFront, timeUnit, { rotation: "-=5", ease: Power1.easeIn }, "jabMove2").to(n.KneeFront, timeUnit, { rotation: "+=15", ease: Power1.easeIn }, "jabMove2").add("jabMove3", "jabMove2 =+" + timeUnit).to(n.LegFront, timeUnit, { rotation: "+=5", ease: Power1.easeOut }, "jabMove3").to(n.KneeFront, timeUnit, { rotation: "-=15", ease: Power1.easeOut }, "jabMove3");

// Backing
tlN.backing.add("still", 0).to(n.body, timeUnit, { rotation: "+=2", x: "+=5", y: "+=5", ease: SlowMo.ease.config(0.1, 0.1, true) }, "still").to(n.LegBack, timeUnit, { rotation: "-=10", ease: SlowMo.ease.config(0.1, 0.1, true) }, "still").to(n.KneeBack, timeUnit, { rotation: "+=20", ease: SlowMo.ease.config(0.1, 0.1, true) }, "still").to(n.LegFront, timeUnit, { rotation: "-=10", ease: SlowMo.ease.config(0.1, 0.1, true) }, "still").to(n.KneeFront, timeUnit, { rotation: "+=20", ease: SlowMo.ease.config(0.1, 0.1, true) }, "still").add("pushed1", timeUnit).to(n.ShoulderBack, timeUnit, { rotation: 40, ease: Power2.easeIn }, "pushed1").to(n.ElbowBack, timeUnit, { rotation: -40, ease: Power2.easeIn }, "pushed1").add("backMove", "pushed1").to(n.body, timeUnit * 1.5, { x: "-=70", ease: Power1.easeInOut }, "backMove").to(n.body, timeUnit * 0.75, { rotation: "-=15", y: "+=15", ease: Power2.easeIn }, "backMove").to(n.body, timeUnit * 0.75, { rotation: "+=15", y: "-=15", ease: Power2.easeOut }, "backMove =+" + timeUnit * 0.75).to(n.KneeBack, timeUnit * 0.75, { rotation: "-=20", ease: Power1.easeIn }, "backMove").to(n.LegBack, timeUnit * 0.75, { rotation: "-=10", ease: SlowMo.ease.config(0.1, 0.1, true) }, "backMove =+" + timeUnit * 0.75).to(n.KneeBack, timeUnit * 0.75, { rotation: "+=20", ease: Power1.easeIn }, "backMove =+" + timeUnit * 0.75).to(n.KneeFront, timeUnit * 0.75, { rotation: "-=30", ease: Power2.easeIn }, "backMove").to(n.KneeFront, timeUnit * 0.75, { rotation: "+=30", ease: Power2.easeOut }, "backMove =+" + timeUnit * 0.75).to(n.LegFront, timeUnit * 0.75, { rotation: "+=35", ease: Power1.easeIn }, "backMove").to(n.LegFront, timeUnit * 0.75, { rotation: "-=35", ease: Power1.easeOut }, "backMove =+" + timeUnit * 0.75).add("crouchMove", timeUnit * 2.5).to(n.body, timeUnit, { rotation: "+=5", x: "-=10", y: "+=2", ease: Power2.easeInOut }, "crouchMove").to(n.LegBack, timeUnit, { rotation: "-=10", ease: Power3.easeInOut }, "crouchMove").to(n.KneeBack, timeUnit, { rotation: "+=10", ease: Power3.easeInOut }, "crouchMove").to(n.LegFront, timeUnit, { rotation: "-=15", ease: Power3.easeInOut }, "crouchMove").to(n.KneeFront, timeUnit, { rotation: "+=20", ease: Power3.easeInOut }, "crouchMove").add("pushed12", timeUnit * 2).to(n.ShoulderBack, timeUnit, { rotation: 30, ease: Back.easeOut }, "pushed12").to(n.ElbowBack, timeUnit, { rotation: -45, ease: Back.easeOut }, "pushed12").add("pushed13", timeUnit * 3).to(n.ShoulderBack, timeUnit / 2, { rotation: 50, ease: Power1.easeOut }, "pushed13").to(n.ElbowBack, timeUnit / 2, { rotation: -100, ease: Power1.easeOut }, "pushed13").to(n.HipBack, timeUnit / 2, { rotation: -5, ease: Power2.easeInOut }, "pushed13").to(n.HipFront, timeUnit / 2, { rotation: -5, ease: Power2.easeInOut }, "pushed13").to(n.SpineBack, timeUnit / 2, { rotation: 15, ease: Power2.easeInOut }, "pushed13").to(n.SpineFront, timeUnit / 2, { rotation: 15, ease: Power2.easeInOut }, "pushed13").to(n.Neck, timeUnit / 2, { rotation: 10, y: "+=10", ease: Power2.easeInOut }, "pushed13").to(n.Head, timeUnit / 2, { rotation: 0, ease: Power2.easeInOut }, "pushed13").to(n.ShoulderFront, timeUnit / 2, { rotation: -10, ease: Back.easeOut }, "pushed13").to(n.ElbowFront, timeUnit / 2, { rotation: -130, ease: Back.easeOut }, "pushed13");

// Get Hit
tlN.getHit
// Jab
.add("charging").to(n.body, timeUnit * 0.75, { rotation: "+=5", x: "+=20", y: "-=10", ease: Power1.easeOut }, "charging").to(n.LegBack, timeUnit * 0.75, { rotation: "+=5", ease: Power1.easeOut }, "charging").to(n.KneeBack, timeUnit * 0.75, { rotation: "-=5", ease: Power1.easeOut }, "charging").to(n.LegFront, timeUnit * 0.75, { rotation: "+=10", ease: Power1.easeOut }, "charging").to(n.KneeFront, timeUnit * 0.75, { rotation: "-=30", ease: Power1.easeOut }, "charging").to(n.ShoulderBack, timeUnit * 0.75, { rotation: 90, x: -10, ease: Power1.easeIn }, "charging").to(n.ElbowBack, timeUnit * 0.75, { rotation: -50, ease: Power1.easeIn }, "charging").to(n.ShoulderFront, timeUnit * 0.75, { rotation: -110, ease: Power1.easeIn }, "charging").to(n.ElbowFront, timeUnit * 0.75, { rotation: 10, ease: Power1.easeIn }, "charging")

// Jab impact
.add("jabImpact", "charging =+" + timeUnit * 0.75).to(n.HipBack, timeUnit / 2, { rotation: "-=5", ease: Back.easeOut }, "jabImpact").to(n.HipFront, timeUnit / 2, { rotation: "-=5", ease: Back.easeOut }, "jabImpact").to(n.SpineBack, timeUnit / 2, { rotation: "-=5", ease: Back.easeOut }, "jabImpact").to(n.SpineFront, timeUnit / 2, { rotation: "-=5", ease: Back.easeOut }, "jabImpact").to(n.Neck, timeUnit / 2, { rotation: "-=10", y: "-=2", ease: Back.easeOut }, "jabImpact").to(n.Head, timeUnit / 2, { rotation: "-=5", ease: Back.easeOut }, "jabImpact")

// Stretch back leg and bend front
.to(n.body, timeUnit * 0.75, { rotation: "-=5", y: "+=10", ease: Power1.easeOut }, "jabImpact").to(n.LegBack, timeUnit * 0.75, { rotation: -30, ease: Power1.easeOut }, "jabImpact").to(n.KneeBack, timeUnit * 0.75, { rotation: 0, ease: Power1.easeOut }, "jabImpact").to(n.LegFront, timeUnit * 0.75, { rotation: -20, ease: Power1.easeOut }, "jabImpact").to(n.KneeFront, timeUnit * 0.75, { rotation: 50, ease: Power1.easeOut }, "jabImpact").add("covering", "charging =+" + timeUnit * 0.75).to(n.body, timeUnit * 0.75, { x: "-=35", ease: Power1.easeOut }, "covering").to(n.ShoulderBack, timeUnit * 0.75, { rotation: 70, y: 0, ease: Power1.easeOut }, "covering").to(n.ElbowBack, timeUnit * 0.75, { rotation: -90, ease: Power1.easeOut }, "covering").to(n.ShoulderFront, timeUnit * 0.75, { rotation: -60, x: 5, y: 0, ease: Power1.easeOut }, "covering").to(n.ElbowFront, timeUnit * 0.75, { rotation: -90, ease: Power1.easeOut }, "covering").add("bounceBack", "jabImpact =+" + timeUnit / 2).to(n.SpineBack, timeUnit / 2, { rotation: "+=5", ease: Power4.easeOut }, "bounceBack").to(n.SpineFront, timeUnit / 2, { rotation: "+=5", ease: Power4.easeOut }, "bounceBack").to(n.HipBack, timeUnit / 2, { rotation: "+=10", ease: Back.easeOut }, "bounceBack").to(n.HipFront, timeUnit / 2, { rotation: "+=10", ease: Back.easeOut }, "bounceBack").to(n.Neck, timeUnit / 2, { rotation: -10, y: 15, ease: Back.easeOut }, "bounceBack").to(n.Head, timeUnit / 2, { rotation: 10, ease: Back.easeOut }, "bounceBack")

// Hard punch
.add("strikeImpact", "charging =+" + timeUnit * 1.5).to(n.body, timeUnit, { x: "-=5", rotation: "-=3", y: "-=1", ease: SlowMo.ease.config(0.1, 0.1, true) }, "strikeImpact").to(n.LegBack, timeUnit, { rotation: -25, ease: SlowMo.ease.config(0.1, 0.1, true) }, "strikeImpact").to(n.KneeBack, timeUnit, { rotation: -10, ease: SlowMo.ease.config(0.1, 0.1, true) }, "strikeImpact").to(n.ShoulderFront, timeUnit, { rotation: -70, x: "+=5", y: -2, ease: Back.easeOut }, "strikeImpact").to(n.ShoulderBack, timeUnit, { rotation: 50, y: -20, x: "-=5", ease: Back.easeOut }, "strikeImpact").to(n.ElbowBack, timeUnit, { rotation: -100, ease: Back.easeOut }, "strikeImpact").to(n.ElbowFront, timeUnit, { rotation: -110, ease: Back.easeOut }, "strikeImpact").add("strikeImpact2", "bounceBack =+" + timeUnit / 2).to(n.HipBack, timeUnit, { rotation: "-=5", ease: SlowMo.ease.config(0.1, 0.1, true) }, "strikeImpact2").to(n.HipFront, timeUnit, { rotation: "-=5", ease: SlowMo.ease.config(0.1, 0.1, true) }, "strikeImpact2").to(n.SpineBack, timeUnit, { rotation: "-=15", ease: SlowMo.ease.config(0.1, 0.1, true) }, "strikeImpact2").to(n.SpineFront, timeUnit, { rotation: "-=5", ease: SlowMo.ease.config(0.1, 0.1, true) }, "strikeImpact2").to(n.Neck, timeUnit, { rotation: "+=5", ease: SlowMo.ease.config(0.1, 0.1, true) }, "strikeImpact2").to(n.Head, timeUnit, { rotation: "+=15", ease: SlowMo.ease.config(0.1, 0.1, true) }, "strikeImpact2").add("findBalance", "strikeImpact =+" + timeUnit)
// step back and straighten up
.to(n.body, timeUnit * 2, { rotation: 15, y: 20, x: "+=25", ease: Back.easeOut }, "findBalance").to(n.LegBack, timeUnit * 2, { rotation: "+=5", ease: Back.easeOut }, "findBalance").to(n.KneeBack, timeUnit * 2, { rotation: "+=20", ease: Back.easeOut }, "findBalance").to(n.LegFront, timeUnit * 2, { rotation: "+=25", ease: Back.easeOut }, "findBalance").to(n.KneeFront, timeUnit * 2, { rotation: "-=40", ease: Back.easeOut }, "findBalance").to(n.ShoulderFront, timeUnit, { rotation: 20, ease: Back.easeOut }, "findBalance").to(n.ElbowFront, timeUnit, { rotation: -100, ease: Back.easeOut }, "findBalance")
// .to(n.ShoulderFront, timeUnit, { rotation: -40, ease: Power1.easeOut }, "findBalance =+" + timeUnit)
// .to(n.ElbowFront, timeUnit, { rotation: -85, ease: Power1.easeOut }, "findBalance =+" + timeUnit)
.to(n.ShoulderFront, timeUnit * 0.75, { rotation: 30, ease: Power1.easeIn }, "findBalance =+" + timeUnit * 2).to(n.ElbowFront, timeUnit * 0.75, { rotation: -100, ease: Power1.easeIn }, "findBalance =+" + timeUnit * 2)

// Punch
.to(n.ShoulderBack, timeUnit, { rotation: -30, y: "+=5", x: "+=10", ease: Power1.easeIn }, "findBalance").to(n.ElbowBack, timeUnit, { rotation: 30, ease: Power1.easeIn }, "findBalance").to(n.ShoulderBack, timeUnit * 1.75, { rotation: -20, ease: SlowMo.ease.config(0.2, 0.3, true) }, "findBalance =+" + timeUnit).to(n.ElbowBack, timeUnit * 1.75, { rotation: 5, ease: SlowMo.ease.config(0.2, 0.3, true) }, "findBalance =+" + timeUnit).add("findBalanceTorso", "strikeImpact2 =+" + timeUnit).to(n.HipBack, timeUnit * 2, { rotation: 0, ease: Power3.easeOut }, "findBalanceTorso")
//.to(n.HipBack, timeUnit, { rotation: 0, ease: Power3.easeOut }, "findBalanceTorso =+" + timeUnit)
.to(n.SpineBack, timeUnit * 2, { rotation: 15, ease: Power2.easeOut }, "findBalanceTorso").to(n.HipFront, timeUnit * 2, { rotation: -5, ease: Power1.easeOut }, "findBalanceTorso").to(n.SpineFront, timeUnit * 2, { rotation: 10, ease: Back.easeOut }, "findBalanceTorso").to(n.Neck, timeUnit, { rotation: -10, x: 0, y: 10, ease: Power1.easeOut }, "findBalanceTorso").to(n.Neck, timeUnit, { x: -7, ease: Power1.easeOut }, "findBalanceTorso =+" + timeUnit).to(n.Head, timeUnit * 2, { rotation: 5, ease: Back.easeOut }, "findBalanceTorso");

// Attack
tlN.attack.add("chargeAttack").to(n.body, timeUnit, { rotation: "+=10", x: "+=0", y: "+=5", ease: Back.easeIn }, "chargeAttack").to(n.LegBack, timeUnit, { rotation: "-=20", ease: Back.easeIn }, "chargeAttack").to(n.KneeBack, timeUnit, { rotation: "+=20", ease: Back.easeIn }, "chargeAttack").to(n.LegFront, timeUnit, { rotation: "-=20", ease: Back.easeIn }, "chargeAttack").to(n.KneeFront, timeUnit, { rotation: "+=20", ease: Back.easeIn }, "chargeAttack").to(n.SpineBack, timeUnit, { rotation: "+=10", ease: Back.easeIn }, "chargeAttack").to(n.SpineFront, timeUnit, { rotation: "+=10", ease: Back.easeIn }, "chargeAttack").to(n.Neck, timeUnit, { rotation: "-=10", y: 10, ease: Back.easeIn }, "chargeAttack").to(n.Head, timeUnit, { rotation: "-=10", ease: Back.easeIn }, "chargeAttack").to(n.ShoulderFront, timeUnit, { rotation: "+=10", ease: Power2.easeIn }, "chargeAttack").to(n.ElbowFront, timeUnit, { rotation: "-=30", ease: Power2.easeIn }, "chargeAttack").add("attack", "chargeAttack =+" + timeUnit).to(n.body, timeUnit, { rotation: "+=1", x: "+=20", y: "+=1", ease: Power4.easeOut }, "attack").to(n.LegBack, timeUnit, { rotation: "-=10", ease: Power4.easeOut }, "attack").to(n.KneeBack, timeUnit, { rotation: "+=10", ease: Power4.easeOut }, "attack").to(n.LegFront, timeUnit, { rotation: 0, ease: Power4.easeOut }, "attack").to(n.KneeFront, timeUnit, { rotation: 0, ease: Power4.easeOut }, "attack").to(n.Neck, timeUnit, { rotation: "-=10", ease: Power1.easeNone }, "attack").to(n.Head, timeUnit, { rotation: "-=5", ease: Power1.easeNone }, "attack")

// Holding Conor
.to(n.ShoulderBack, timeUnit, { rotation: 120, y: -5, x: 0, ease: Power4.easeOut }, "attack").to(n.ElbowBack, timeUnit / 2, { rotation: -90, ease: Power3.easeOut }, "attack")
//.to(n.ElbowBack, timeUnit/2, { rotation: -60, ease: Power4.easeOut }, "attack +=" + timeUnit/2)
.to(n.SpineBack, timeUnit, { rotation: "-=15", ease: Power4.easeOut }, "attack").to(n.Neck, timeUnit, { rotation: "+=25", ease: Power4.easeOut }, "attack")

// Punch
.to(n.ShoulderFront, timeUnit / 2, { rotation: -140, y: "-=10", ease: Power3.easeIn }, "attack").to(n.ElbowFront, timeUnit / 4, { rotation: "+=10", ease: Power3.easeIn }, "attack").to(n.ElbowFront, timeUnit / 4, { rotation: 10, ease: Power3.easeIn }, "attack =+" + timeUnit / 4)
// Overshoot
.to(n.ShoulderFront, timeUnit / 2, { rotation: -125, y: 0, ease: Power1.easeOut }, "attack =+" + timeUnit / 2).to(n.ElbowFront, timeUnit / 2, { rotation: 0, ease: Power1.easeOut }, "attack =+" + timeUnit / 2).to(n.HipBack, timeUnit, { rotation: "-=5", ease: Power4.easeOut }, "attack").to(n.HipFront, timeUnit, { rotation: "+=5", ease: Power4.easeOut }, "attack").to(n.ShoulderBack, timeUnit, { x: -10, ease: Power4.easeOut }, "attack").add("fuckOffStance")
// Straighten up
.to(n.body, timeUnit * 2, { rotation: 0, x: "-=55", y: 10, ease: Power3.easeInOut }, "fuckOffStance").to(n.HipBack, timeUnit * 2, { rotation: 0 }, "fuckOffStance").to(n.SpineBack, timeUnit * 2, { rotation: 0 }, "fuckOffStance").to(n.HipFront, timeUnit * 2, { rotation: 0 }, "fuckOffStance").to(n.SpineFront, timeUnit * 2, { rotation: 0 }, "fuckOffStance").to(n.Neck, timeUnit * 2, { rotation: 15 }, "fuckOffStance").to(n.Head, timeUnit * 2, { rotation: 0 }, "fuckOffStance").to(n.HipBack, timeUnit * 2, { x: 0 }, "fuckOffStance").to(n.LegBack, timeUnit * 2, { x: 0 }, "fuckOffStance").to(n.Neck, timeUnit * 2, { x: 0, y: 0 }, "fuckOffStance").to(n.LegFront, timeUnit * 2, { x: 0 }, "fuckOffStance").to(n.HipFront, timeUnit * 2, { x: 0 }, "fuckOffStance").to(n.KneeFront, timeUnit * 2, { rotation: 0, ease: Power3.easeInOut }, "fuckOffStance").to(n.LegFront, timeUnit * 2, { rotation: 0, ease: Power3.easeInOut }, "fuckOffStance").to(n.LegBack, timeUnit, { rotation: "+=20", ease: Power3.easeIn }, "fuckOffStance").to(n.KneeBack, timeUnit, { rotation: "-=40", ease: Power3.easeIn }, "fuckOffStance").to(n.LegBack, timeUnit, { rotation: 0 }, "fuckOffStance =+" + timeUnit).to(n.KneeBack, timeUnit / 2, { rotation: "+=20" }, "fuckOffStance =+" + timeUnit).to(n.KneeBack, timeUnit / 2, { rotation: 0 }, "fuckOffStance =+" + timeUnit * 1.5)

// Shrug
.to(n.ShoulderFront, timeUnit * 2, { rotation: 20, y: -5, x: 5, ease: Power3.easeOut }, "fuckOffStance").to(n.ElbowFront, timeUnit, { rotation: -110, ease: Power2.easeOut }, "fuckOffStance").to(n.ElbowFront, timeUnit, { rotation: -20, ease: Power1.easeNone }, "fuckOffStance =+" + timeUnit).to(n.ShoulderBack, timeUnit * 2, { rotation: 35, y: -10, x: 0, ease: Power3.easeOut }, "fuckOffStance").to(n.ElbowBack, timeUnit, { rotation: -60, ease: Power1.easeIn }, "fuckOffStance").to(n.ElbowBack, timeUnit, { rotation: -20, ease: Back.easeOut }, "fuckOffStance =+" + timeUnit)

// Flippin the bird
.add("flippin", "fuckOffStance =+" + timeUnit * 2).to(n.ShoulderBack, timeUnit * 1.5, { rotation: "+=15", ease: Power1.easeOut }, "flippin").to(n.ElbowBack, timeUnit * 1.5, { rotation: "-=40", ease: Power1.easeNone }, "flippin").to(n.ShoulderBack, timeUnit, { rotation: 10, x: 0, y: -5, ease: Back.easeOut }, "flippin =+" + timeUnit * 1.5).to(n.ElbowBack, timeUnit, { rotation: 10, ease: Back.easeOut }, "flippin =+" + timeUnit * 1.5).fromTo(n.fingers, timeUnit, { scaleY: 0, transformOrigin: "right bottom" }, { scaleY: 1 }, "flippin =+" + timeUnit).to(n.fingers, 0, { autoAlpha: 1 }, "flippin =+" + timeUnit * 1.5).to(n.ShoulderFront, timeUnit * 2, { rotation: 10, y: 0, x: 0, ease: Power1.easeIn }, "flippin").to(n.ElbowFront, timeUnit * 2, { rotation: 0, ease: Back.easeOut }, "flippin").to(n.SpineFront, timeUnit * 2, { rotation: "-=5", ease: Power1.easeIn }, "flippin").to(n.SpineBack, timeUnit * 2, { rotation: "+=5", ease: Power1.easeIn }, "flippin").to(n.Neck, timeUnit * 2, { x: "-=10", rotation: "-=5", ease: Power1.easeIn }, "flippin").to(n.Head, timeUnit * 2, { rotation: "-=5", ease: Power1.easeIn }, "flippin")

// Step back
.add("startBacking").to(n.body, timeUnit * 2.5, { x: "-=40", scale: "-=0.01", transformOrigin: "center bottom", ease: Linear.easeNone }, "fuckOffStance =+" + timeUnit * 2).to(n.body, timeUnit * 2.5, { y: "+=3", rotation: "+=2", ease: SlowMo.ease.config(0.1, 0.1, true) }, "fuckOffStance =+" + timeUnit * 2).to(n.LegBack, timeUnit * 2.5, { rotation: "-=15", ease: Linear.easeNone }, "fuckOffStance =+" + timeUnit * 2).to(n.KneeBack, timeUnit * 2.5, { rotation: "-=0", ease: Linear.easeNone }, "fuckOffStance =+" + timeUnit * 2).to(n.LegFront, timeUnit * 2.5, { rotation: "+=5", ease: Linear.easeNone }, "fuckOffStance =+" + timeUnit * 2).to(n.KneeFront, timeUnit * 2.5, { rotation: "+=20", ease: Linear.easeNone }, "fuckOffStance =+" + timeUnit * 2).add("fightOver");

tlWalkingNate.add("walkingBack").to(n.HipBack, timeUnit * 15, { bezier: { curviness: 2, values: [{ rotation: 5 }, { rotation: -5 }, { rotation: 0 }] }, ease: Linear.easeNone }, "walkingBack").to(n.HipFront, timeUnit * 15, { bezier: { curviness: 2, values: [{ rotation: 5 }, { rotation: -5 }, { rotation: 0 }] }, ease: Linear.easeNone }, "walkingBack").to(n.ShoulderBack, timeUnit * 15, { bezier: { curviness: 2, values: [{ rotation: "-=10" }, { rotation: "+=5" }, { rotation: "-=5" }, { rotation: "+=5" }, { rotation: "+=5" }, { rotation: "+=5" }] }, ease: Linear.easeNone }, "walkingBack").to(n.ElbowBack, timeUnit * 15, { bezier: { curviness: 1, values: [{ rotation: "-=5" }, { rotation: "+=5" }, { rotation: "-=5" }, { rotation: "+=5" }, { rotation: "-=5" }, { rotation: "+=5" }, { rotation: "-=10" }, { rotation: " 0" }] }, ease: Linear.easeNone }, "walkingBack").to(n.ShoulderFront, timeUnit * 15, { x: "+=5", bezier: { curviness: 5, values: [{ rotation: "-=10" }, { rotation: "+=5" }, { rotation: "-=5" }, { rotation: "+=5" }, { rotation: "+=5" }, { rotation: "+=5" }] }, ease: Linear.easeNone }, "walkingBack").to(n.Head, timeUnit * 7.5, { bezier: { curviness: 1, values: [{ rotation: "-=5" }, { rotation: "+=5" }, { rotation: "-=5" }, { rotation: "+=5" }, { rotation: "-=5" }, { rotation: "+=5" }, { rotation: "-=10" }, { rotation: "+=5" }] }, ease: Linear.easeNone }, "walkingBack").to(n.Head, timeUnit * 7.5, { bezier: { curviness: 1, values: [{ rotation: "-=5" }, { rotation: "+=5" }, { rotation: "-=5" }, { rotation: "+=5" }, { rotation: "-=5" }, { rotation: "+=5" }, { rotation: "-=10" }, { rotation: "+=5" }] }, ease: Linear.easeNone }, "walkingBack =+" + timeUnit * 7.5).to(n.body, timeUnit * 2.5, { x: "-=60", scale: "-=0.01", transformOrigin: "center bottom", ease: Linear.easeNone }, "walkingBack").to(n.body, timeUnit * 2.5, { y: "+=1", ease: SlowMo.ease.config(0.1, 0.1, true) }, "walkingBack").to(n.LegBack, timeUnit * 2.5, { rotation: "+=20", ease: Linear.easeNone }, "walkingBack").to(n.KneeBack, timeUnit * 2.5, { rotation: "+=30", ease: Linear.easeNone }, "walkingBack").to(n.LegFront, timeUnit * 2.5, { rotation: "-=20", ease: Linear.easeNone }, "walkingBack").to(n.KneeFront, timeUnit * 2.5, { rotation: "-=30", ease: Linear.easeNone }, "walkingBack").to(n.body, timeUnit * 2.5, { x: "-=60", scale: "-=0.01", transformOrigin: "center bottom", ease: Linear.easeNone }, "walkingBack =+" + timeUnit * 2.5).to(n.body, timeUnit * 2.5, { y: "+=1", ease: SlowMo.ease.config(0.1, 0.1, true) }, "walkingBack =+" + timeUnit * 2.5).to(n.LegBack, timeUnit * 2.5, { rotation: "-=20", ease: Linear.easeNone }, "walkingBack =+" + timeUnit * 2.5).to(n.KneeBack, timeUnit * 2.5, { rotation: "-=30", ease: Linear.easeNone }, "walkingBack =+" + timeUnit * 2.5).to(n.LegFront, timeUnit * 2.5, { rotation: "+=20", ease: Linear.easeNone }, "walkingBack =+" + timeUnit * 2.5).to(n.KneeFront, timeUnit * 2.5, { rotation: "+=30", ease: Linear.easeNone }, "walkingBack =+" + timeUnit * 2.5).to(n.body, timeUnit * 2.5, { x: "-=60", scale: "-=0.01", transformOrigin: "center bottom", ease: Linear.easeNone }, "walkingBack =+" + timeUnit * 5).to(n.body, timeUnit * 2.5, { y: "+=1", ease: SlowMo.ease.config(0.1, 0.1, true) }, "walkingBack =+" + timeUnit * 5).to(n.LegBack, timeUnit * 2.5, { rotation: "+=20", ease: Linear.easeNone }, "walkingBack =+" + timeUnit * 5).to(n.KneeBack, timeUnit * 2.5, { rotation: "+=30", ease: Linear.easeNone }, "walkingBack =+" + timeUnit * 5).to(n.LegFront, timeUnit * 2.5, { rotation: "-=20", ease: Linear.easeNone }, "walkingBack =+" + timeUnit * 5).to(n.KneeFront, timeUnit * 2.5, { rotation: "-=30", ease: Linear.easeNone }, "walkingBack =+" + timeUnit * 5).to(n.body, timeUnit * 2.5, { x: "-=60", scale: "-=0.01", transformOrigin: "center bottom", ease: Linear.easeNone }, "walkingBack =+" + timeUnit * 7.5).to(n.body, timeUnit * 2.5, { y: "+=1", ease: SlowMo.ease.config(0.1, 0.1, true) }, "walkingBack =+" + timeUnit * 7.5).to(n.LegBack, timeUnit * 2.5, { rotation: "-=20", ease: Linear.easeNone }, "walkingBack =+" + timeUnit * 7.5).to(n.KneeBack, timeUnit * 2.5, { rotation: "-=30", ease: Linear.easeNone }, "walkingBack =+" + timeUnit * 7.5).to(n.LegFront, timeUnit * 2.5, { rotation: "+=20", ease: Linear.easeNone }, "walkingBack =+" + timeUnit * 7.5).to(n.KneeFront, timeUnit * 2.5, { rotation: "+=30", ease: Linear.easeNone }, "walkingBack =+" + timeUnit * 7.5).to(n.body, timeUnit * 2.5, { x: "-=60", scale: "-=0.01", transformOrigin: "center bottom", ease: Linear.easeNone }, "walkingBack =+" + timeUnit * 10).to(n.body, timeUnit * 2.5, { y: "+=1", ease: SlowMo.ease.config(0.1, 0.1, true) }, "walkingBack =+" + timeUnit * 10).to(n.LegBack, timeUnit * 2.5, { rotation: "+=20", ease: Linear.easeNone }, "walkingBack =+" + timeUnit * 10).to(n.KneeBack, timeUnit * 2.5, { rotation: "+=30", ease: Linear.easeNone }, "walkingBack =+" + timeUnit * 10).to(n.LegFront, timeUnit * 2.5, { rotation: "-=20", ease: Linear.easeNone }, "walkingBack =+" + timeUnit * 10).to(n.KneeFront, timeUnit * 2.5, { rotation: "-=30", ease: Linear.easeNone }, "walkingBack =+" + timeUnit * 10).to(n.body, timeUnit * 2.5, { x: "-=60", scale: "-=0.01", transformOrigin: "center bottom", ease: Linear.easeNone }, "walkingBack =+" + timeUnit * 12.5).to(n.body, timeUnit * 2.5, { y: "+=1", ease: SlowMo.ease.config(0.1, 0.1, true) }, "walkingBack =+" + timeUnit * 12.5).to(n.LegBack, timeUnit * 2.5, { rotation: "-=20", ease: Linear.easeNone }, "walkingBack =+" + timeUnit * 12.5).to(n.KneeBack, timeUnit * 2.5, { rotation: "-=30", ease: Linear.easeNone }, "walkingBack =+" + timeUnit * 12.5).to(n.LegFront, timeUnit * 2.5, { rotation: "+=20", ease: Linear.easeNone }, "walkingBack =+" + timeUnit * 12.5).to(n.KneeFront, timeUnit * 2.5, { rotation: "+=30", ease: Linear.easeNone }, "walkingBack =+" + timeUnit * 12.5);

tlWalking.add(tlWalkingNate.play(), 0).add(tlWalkingConor.play(), 0);

//  MAIN TIMELINES
///////////////////////////////////////

tlFighting.add("start").add(tlC.impact.play(), "start").add(tlN.jabbing.play(), "start").add(tlC.stepPush.play(), "afterImpact").add(tlN.backing.play(), "afterImpact").add(tlC.strike.play(), "afterStepPush").add(tlN.getHit.play(), "afterStepPush").add(tlN.attack.play(), "afterStrike").add(tlC.retreat.play(), "afterStrike");

tlFighters.timeScale(1).add(tlFighting.play()).add(tlWalking.play(), "fightOver");

/*
///////////////////////////////////////

  End of TIMELINES

##############################################################################
*/

function testDurations() {

  var a = tlC.impact.duration().toFixed(2);
  var b = tlN.jabbing.duration().toFixed(2);
  var c = tlC.stepPush.duration().toFixed(2);
  var d = tlN.backing.duration().toFixed(2);
  var e = tlC.strike.duration().toFixed(2);
  var f = tlN.getHit.duration().toFixed(2);

  // impact vs jabbing
  if (a === b) {
    console.log("Exactly the same");
  } else {
    if (a < b) {
      console.log(" IMPACT is smaller than JABBING : " + (a - b));
    } else if (a > b) {
      console.log(" IMPACT is bigger than JABBING : " + (a - b));
    }
  }

  // StepPush vs Backing
  if (c === d) {
    console.log("Exactly the same");
  } else {
    if (c < d) {
      console.log("STEPPUSH is smaller than BACKING : " + (c - d));
    } else if (c > d) {
      console.log("STEPPUSH is bigger than BACKING : " + (c - d));
    }
  }

  // Strike vs getHit
  if (e === f) {
    console.log("Exactly the same");
  } else {
    if (e < f) {
      console.log("Strike is smaller than getHit : " + (e - f));
    } else if (e > f) {
      console.log("Strike is bigger than getHit : " + (e - f));
    }
  }
}

testDurations();
"use strict";

/*
#######################################

  TIMELINE CONTROLS

  Keywords: slider, stats, timeline

///////////////////////////////////////
*/

function controlTimeline(timeline) {
  var duration = document.getElementById("duration");
  var time = document.getElementById("time");
  var controls = document.getElementById("controls");
  var togglePlay = document.getElementById("togglePlay");
  var playing = true;

  var slider = document.createElement("INPUT");
  slider.setAttribute("type", "range");
  slider.setAttribute("step", "0.001");
  slider.setAttribute("id", "slider");
  slider.setAttribute("min", "0");
  slider.setAttribute("max", "1");
  controls.appendChild(slider);

  slider.addEventListener("mousedown", function () {
    timeline.pause();
  });
  slider.addEventListener("mouseup", function () {
    if (playing) {
      timeline.resume();
    }
  });

  read("mousedown");
  read("mousemove");

  function read(eventType) {
    slider.addEventListener(eventType, function () {
      window.requestAnimationFrame(function () {
        timeline.progress(slider.value);
      });
    });
  }

  togglePlay.addEventListener("mousedown", function () {
    if (playing) {
      playing = false;
      timeline.pause();
    } else {
      playing = true;
      timeline.resume();
    }
  });
}

function updateStats() {
  slider.value = this.progress();
  duration.innerHTML = this.duration().toFixed(2);
  time.innerHTML = this.time().toFixed(2);
}

//  INIT
controlTimeline(tlFighters);
"use strict";
