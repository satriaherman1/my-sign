
      var progressBar = new ProgressBar.Line("#progress-container", {
        strokeWidth: 0.6,
        easing: "easeInOut",
        duration: 1400,
        color: "#375DFB",
        trailColor: "#eee",
        trailWidth: 0.6,
        trailRounded: true,
        svgStyle: { width: "100%", height: "100%" },
      });

      function updateProgressBar(value) {
        progressBar.animate(value); 
      }
      updateProgressBar(0.5); 
