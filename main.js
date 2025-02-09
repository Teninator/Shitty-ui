if (navigator.getAutoplayPolicy("mediaelement") === "allowed") {
    // The video element will autoplay with audio.
  } else if (navigator.getAutoplayPolicy("mediaelement") === "allowed-muted") {
    // Not audio on video
    video.muted = false;
  } else if (navigator.getAutoplayPolicy("mediaelement") === "disallowed") {
        alert("Unban me dipshit");

  }

  let blink =
            document.getElementById('blink');

        setInterval(function () {
            blink.style.opacity =
                (blink.style.opacity == 0 ? 1 : 0);
        }, 1000); 


        document.getElementById("p_button").addEventListener("click", function() 
        {
          alert("Button was clicked!");
      }
    );

  