       function mousePressed() {
       launchFullScreenMode(document.getElementById('p5-canvas');
       }
       function mouseReleased() {
       launchFullScreenMode(document.getElementById('p5-canvas');
       }
                                        
        document.onfullscreenchange = function(event) {
            const element = document.fullscreenElement;
            if (element) {
              
                console.log('Enter Full Screen Event occurred', element);
            } else {
                console.log('Exit Full Screen Event occurred', element);
            }
        }

        /**
        * Enter the full screen mode.
        * 
        */
        function launchFullScreenMode(element) {
            if(!document.fullscreenEnabled) { // if the full screen mode is not supported
                alert("Full Screen Mode is not supported");
                return;
            }

            if(element.requestFullscreen) { // if we can request a full screen for the video element    
                    element
                    .requestFullscreen() /// give a promise
                    .then(() => {
                        console.log('We are in a full screen mode');
                        
                    })
            }
        }

        /**
        * Exit the full screen mode.
        */
        function exitFullScreenMode() {
            if(document.exitFullscreen) {
                document
                .exitFullscreen() // promise
                .then( () => {
                    console.log('We have exited the full screen mode');
                });
            }           
        }
     
    

/*

   <div id = "canvasForHTML" > </div> 
   
    <div class= "center buttons">
      <button id="enterFullScreen"
      onclick="launchFullScreenMode(document.getElementById('canvasForHTML'))"; styl
*/
