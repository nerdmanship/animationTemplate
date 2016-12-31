const view = document.querySelector("[data-view]");

const conor = view.querySelector("[data-conor=body]");
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

const allElems = [conor, conorFootFront, conorFootBack, conorKneeFront, conorKneeBack, conorLegFront, conorLegBack, conorHipFront, conorHipBack, conorSpineFront, conorSpineBack, conorShoulderFront, conorShoulderBack, conorElbowFront, conorElbowBack, conorWristFront, conorWristBack, conorNeck, conorHead, nate, nateFootFront, nateFootBack, nateKneeFront, nateKneeBack, nateLegFront, nateLegBack, nateHipFront, nateHipBack, nateSpineFront, nateSpineBack, nateShoulderFront, nateShoulderBack, nateElbowFront, nateElbowBack, nateWristFront, nateWristBack, nateNeck, nateHead];


const conorPose = function() {
  TweenMax.set(conor, { rotation: 0, x: 100, y: 20, transformOrigin: "center"});
  TweenMax.set(conorFootBack, { rotation: 0, transformOrigin: "center"});
  TweenMax.set(conorKneeBack, { rotation: -25, transformOrigin: "center"});
  TweenMax.set(conorLegBack, { rotation: 30, transformOrigin: "center"});
  TweenMax.set(conorHipBack, { rotation: 0, transformOrigin: "center"});
  TweenMax.set(conorSpineBack, { rotation: 0, transformOrigin: "center"});
  TweenMax.set(conorShoulderBack, { rotation: 100, transformOrigin: "center"});
  TweenMax.set(conorElbowBack, { rotation: -15, transformOrigin: "center"});
  TweenMax.set(conorWristBack, { rotation: 25, transformOrigin: "center"});

  TweenMax.set(conorFootFront, { rotation: 0, transformOrigin: "center"});
  TweenMax.set(conorKneeFront, { rotation: 0, transformOrigin: "center"});
  TweenMax.set(conorLegFront, { rotation: -20, transformOrigin: "center"});
  TweenMax.set(conorHipFront, { rotation: 0, transformOrigin: "center"});
  TweenMax.set(conorSpineFront, { rotation: 0, transformOrigin: "center"});
  TweenMax.set(conorShoulderFront, { rotation: 55, transformOrigin: "center"});
  TweenMax.set(conorElbowFront, { rotation: 80, transformOrigin: "center"});
  TweenMax.set(conorWristFront, { rotation: 0, transformOrigin: "center"});

  TweenMax.set(conorNeck, { rotation: 0, transformOrigin: "center"});
  TweenMax.set(conorHead, { rotation: 0, transformOrigin: "center"});
  
  TweenMax.set(conorShoulderBack, { x: 12 });
  TweenMax.set(conorHipBack, { x: 6 });
  TweenMax.set(conorLegBack, { x: 6 });

  TweenMax.set(conorNeck, { x: 0 });

  TweenMax.set(conorLegFront, { x: -6 });
  TweenMax.set(conorHipFront, { x: -6 });
  TweenMax.set(conorShoulderFront, { x: -12 });
}


const rotateConorTo = function(value, duration) {
  TweenMax.to(conorShoulderBack, duration, { x: value*4 });
  TweenMax.to(conorHipBack, duration, { x: value*2 });
  TweenMax.to(conorLegBack, duration, { x: value*2 });

  TweenMax.to(conorNeck, duration, { x: value*0.2 });

  TweenMax.to(conorLegFront, duration, { x: value*(-2) });
  TweenMax.to(conorHipFront, duration, { x: value*(-2) });
  TweenMax.to(conorShoulderFront, duration, { x: value*(-4) });
}


conorPose();

const tlConor = new TimelineMax({ repeat: -1, repeatDelay: 2, onUpdate:updateStats });
const tlConorStance = new TimelineMax({ paused: true, repeat: -1, yoyo: true });
const tlConorWaving = new TimelineMax({ paused: true, repeat: 1  });

tlConorStance
  .to(conorLegBack, 1.25, { rotation: "+=5", transformOrigin: "center" }, 0)
  .to(conorLegFront, 1.25, { rotation: "+=5", transformOrigin: "center" }, 0)
  .to(conorKneeBack, 1.25, { rotation: "-=9", transformOrigin: "center" }, 0)
  .to(conorKneeFront, 1.25, { rotation: "-=15", transformOrigin: "center" }, 0)
  .to(conor, 1.25, { y: "+=8" }, 0)
  ;

tlConorWaving
  .fromTo(conorShoulderBack, 1, { rotation: 80, transformOrigin: "center", ease: Power1.easeInOut}, { rotation: 90, transformOrigin: "center" }, 0)
  .to(conorShoulderBack, 1.5, { rotation: 80, transformOrigin: "center", ease: Power1.easeInOut }, 1)
  .fromTo(conorElbowBack, 0.625, { rotation: 0, transformOrigin: "center", ease: Power2.easeOut}, { rotation: 10, transformOrigin: "center" }, 0)
  .fromTo(conorShoulderBack, 0.625, { x: -5, ease: Power2.easeOut}, { x: 0 }, 0)
  .to(conorElbowBack, 1.25, { rotation: -20, transformOrigin: "center", ease: Power1.easeInOut}, 0.625)
  .to(conorShoulderBack, 1.25, { x: -10, ease: Power1.easeInOut}, 0.625)
  .to(conorElbowBack, 0.625, { rotation: 0, transformOrigin: "center", ease: Power2.easeIn}, 1.875)
  .to(conorShoulderBack, 0.625, { x: -5, ease: Power2.easeIn}, 1.875)
  ;

const timeUnit = 0.3;
const delayUnit = timeUnit/4;

tlConor
//////
////// KneeBack, LegBack, LegFront
//////
  .add("step1")
  .to(conorLegBack, timeUnit, { rotation: 35, ease: Power1.easeNone }, "step1")
  .to(conorKneeBack, timeUnit/2, { rotation: -40, ease: Power1.easeNone }, "step1")
  .to(conorKneeBack, timeUnit/2, { rotation: -20, ease: Power1.easeNone }, "step1 =+" + timeUnit/2)
  .to(conorLegBack, timeUnit, { rotation: 30, ease: Power1.easeNone }, "step1 =+" + timeUnit)
  .to(conorKneeBack, timeUnit, { rotation: -25, ease: Power1.easeNone }, "step1 =+" + timeUnit)
  .to(conorLegFront, timeUnit, { rotation: -25, ease: Power1.easeNone }, "step1")
  .to(conorLegFront, timeUnit, { rotation: -20, ease: Power1.easeNone }, "step1 =+" + timeUnit)
  .to(conor, timeUnit, { rotation: 3, x: "-=5", y: 25, ease: Power1.easeNone }, "step1")
  .to(conor, timeUnit, { rotation: 0, x: "-=25", y: 20, ease: Power1.easeNone }, "step1 =+" + timeUnit)
  
  .add("step2", "step1 =+" + timeUnit*2 )
  .to(conorLegBack, timeUnit/2, { rotation: 40, ease: Power1.easeNone }, "step2")
  .to(conorKneeBack, timeUnit/4, { rotation: -45, ease: Power1.easeNone }, "step2")
  .to(conorKneeBack, timeUnit/4, { rotation: -25, ease: Power1.easeNone }, "step2 =+" + timeUnit/4)
  .to(conorLegBack, timeUnit/2, { rotation: 30, ease: Power1.easeNone }, "step2 =+" + timeUnit/2)
  .to(conorLegFront, timeUnit/2, { rotation: -30, ease: Power1.easeNone }, "step2")
  .to(conorLegFront, timeUnit/2, { rotation: -20, ease: Power1.easeNone }, "step2 =+" + timeUnit/2)
  .to(conor, timeUnit/2, { rotation: 5, x: "-=20", y: 30, ease: Power1.easeNone }, "step2")
  .to(conor, timeUnit/2, { rotation: 0, x: "-=40", y: 20, ease: Power1.easeNone }, "step2 =+" + timeUnit/2)

//////
////// ShoulderBack, Elbowback, WristBack
//////
  .add("push1", "step1")
  .to(conorShoulderBack, timeUnit, { rotation: 50}, "push1")
  .to(conorElbowBack, timeUnit, { rotation: 50}, "push1")
  .to(conorWristBack, timeUnit, { rotation: 45}, "push1")
  .to(conorShoulderBack, timeUnit, { rotation: 90, ease: Power2.easeOut }, "push1 =+" + timeUnit)
  .to(conorElbowBack, timeUnit, { rotation: -20}, "push1 =+" + timeUnit)
  .to(conorWristBack, timeUnit, { rotation: 25}, "push1 =+" + timeUnit)

  .add("push2", "push1 =+" + timeUnit*2)
  .to(conorShoulderBack, timeUnit*0.3, { rotation: 60, ease: Power1.easeInOut }, "push2")
  .to(conorElbowBack, timeUnit/2, { rotation: 50}, "push2")
  .to(conorWristBack, timeUnit/2, { rotation: 25 }, "push2")
  .to(conorShoulderBack, timeUnit, { rotation: 110, ease: Power1.easeOut }, "push2 =+" + timeUnit*0.3)
  .to(conorElbowBack, timeUnit, { rotation: -30}, "push2 =+" + timeUnit/2)
  .to(conorWristBack, timeUnit, { rotation: 35 }, "push2 =+" + timeUnit/2)
  
//////
////// ShoulderFront, ElbowFront, HipFront, HipBack
//////
  .add("wiggle", "step1")
  .to(conorShoulderFront, timeUnit/2, { y: 2, x: 0, rotation: 60, ease: Power1.easeInOut }, "wiggle")
  .to(conorElbowFront, timeUnit, { rotation: 60, ease: Power1.easeInOut }, "wiggle")
  .to(conorShoulderFront, timeUnit/2, { y: 0, x: -2, rotation: 50, ease: Power1.easeInOut }, "wiggle =+" + timeUnit/2)
  .to(conorShoulderFront, timeUnit/2, { y: 2, x: 0, rotation: 65, ease: Power1.easeInOut }, "wiggle =+" + timeUnit)
  .to(conorElbowFront, timeUnit, { rotation: 80, ease: Power1.easeInOut }, "wiggle =+" + timeUnit)
  .to(conorShoulderFront, timeUnit/2, { y: 0, x: -2, rotation: 45, ease: Power1.easeInOut }, "wiggle =+" + timeUnit*1.5)
  .to(conorShoulderFront, timeUnit/2, { y: 2, x: -5, rotation: 60, ease: Power1.easeInOut }, "wiggle =+" + timeUnit*2)
  .to(conorElbowFront, timeUnit, { rotation: 70, ease: Power1.easeInOut }, "wiggle =+" + timeUnit*2)
  .to(conorShoulderFront, timeUnit/2, { y: 5, x: -3, rotation: 55, ease: Power1.easeInOut }, "wiggle =+" + timeUnit*2.5)

  .to(conorHipFront, timeUnit/2, { rotation: -10 }, "wiggle")
  .to(conorHipBack, timeUnit/2, { rotation: -5 }, "wiggle")
  .to(conorHipFront, timeUnit, { rotation: 0 }, "wiggle =+" + timeUnit/2)
  .to(conorHipBack, timeUnit, { rotation: 0 }, "wiggle =+" + timeUnit/2)
  .to(conorHipFront, timeUnit/2, { rotation: -5 }, "wiggle =+" + timeUnit*2)
  .to(conorHipBack, timeUnit/2, { rotation: -10 }, "wiggle =+" + timeUnit*2)


  

  ;

tlConor.play().timeScale(1);



var duration = document.getElementById("duration"),
    totalDuration = document.getElementById("totalDuration"),
    repeatCount = document.getElementById("repeatCount"),
    totalRepeatCount = document.getElementById("totalRepeatCount"),
    time = document.getElementById("time"),
    totalTime = document.getElementById("totalTime"),
    progress = document.getElementById("progress"),
    totalProgress = document.getElementById("totalProgress"),
    restart = document.getElementById("restart"),
    reps = 0;

function updateStats() {
  var timeline = tlConor;

  time.innerHTML = timeline.time().toFixed(2);
  totalTime.innerHTML = timeline.totalTime().toFixed(2);
  progress.innerHTML = timeline.progress().toFixed(2);
  totalProgress.innerHTML = timeline.totalProgress().toFixed(2);
}


// Test all joints
// TweenMax.staggerTo(allElems, 0.3, { rotation: 30, transformOrigin: "center", repeat:1, yoyo:true }, 0.6);






