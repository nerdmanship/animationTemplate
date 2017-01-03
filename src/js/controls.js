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

  var slider = document.createElement("INPUT");
  slider.setAttribute("type", "range");
  slider.setAttribute("step", "0.001");
  slider.setAttribute("id", "slider");
  slider.setAttribute("min", "0");
  slider.setAttribute("max", "1");
  controls.appendChild(slider);

  slider.addEventListener("mouseover", function(){ timeline.pause(); })
  slider.addEventListener("mouseout", function(){ timeline.resume(); })

  read("mousedown");
  read("mousemove");

  function read(eventType) {
    slider.addEventListener(eventType, function() {
      window.requestAnimationFrame(function () {
        timeline.progress(slider.value);
      });
    });
  }
}

function updateStats() {
    slider.value = this.progress();
    duration.innerHTML = this.duration().toFixed(2);
    time.innerHTML = this.time().toFixed(2);
  }

//  INIT
controlTimeline(tlConor);