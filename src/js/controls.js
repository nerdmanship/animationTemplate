var $ = Sizzle,
    $panel1 = $("#panel1"),
    $panel2 = $("#panel2"),
    $panel3 = $("#panel3"),
    $panel1Text = $("#panel1 h1"),
    $panel2Text = $("#panel2 h2"),
    $info = $("#info"),
    $list = $("li"),
    $orderNow = $("#orderNow"),    
    tl;

var tl = new TimelineMax({delay:0.5, repeat:3, repeatDelay:2, onUpdate:updateStats, onRepeat:updateReps, onComplete:restart});

//banner animation code (only 11 lines)

 tl.from(panel1, 0.5, {autoAlpha:0})
   .from($panel1Text, 0.5, {scale:0.5, autoAlpha:0, ease:Back.easeOut})
   .set($panel2, {top:0}, "+=2")
   .from($panel2, 0.2, {autoAlpha:0, scale:1.5})
   .from($panel2Text, 0.2, {top:250}, "+=0.5")
   .to($panel2Text, 0.2, {top:250}, "+=2")
   .set($panel3, {top:0}, "final")
   .from($info, 0.5, {top:250}, "final")
   .to($panel2, 0.5, {top:-60}, "final")
   .staggerFrom($list, 0.3, {autoAlpha:0, left:50}, 0.1, "+=0.2")
   .from($orderNow, 0.5, {scale:0, autoAlpha:0, ease:Back.easeOut});

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

function updateReps() {
  reps++;
  repeatCount.innerHTML = reps;
}

function updateStats() {
  time.innerHTML = tl.time().toFixed(2);
  totalTime.innerHTML = tl.totalTime().toFixed(2);
  progress.innerHTML = tl.progress().toFixed(2);
  totalProgress.innerHTML = tl.totalProgress().toFixed(2);
}

function reset() {
  reps = 0;
  duration.innerHTML = tl.duration().toFixed(2);
  totalDuration.innerHTML = tl.totalDuration().toFixed(2);
  repeatCount.innerHTML = reps;
  totalRepeatCount.innerHTML = tl.repeat();
}

function restart() {
  TweenLite.to(restart, 0.4, {autoAlpha:1})
}

restart.onclick = function() {
  reset();
  TweenLite.set(restart, {autoAlpha:0})
  tl.restart();
}

reset();