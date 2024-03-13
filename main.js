document.getElementById('copyEmail').addEventListener('click', function() {
    // Copy email to clipboard
    const email = "fabian@rosholm.studio";
    navigator.clipboard.writeText(email).then(function() {
       // Change div style and text
       this.style.backgroundColor = "white";
       this.style.color = "black";
       this.innerText = "Copied!";
   
       // Revert changes after 1 second
       setTimeout(() => {
         this.style.backgroundColor = "#1D1D1D";
         this.style.color = "#CCCCCC";
         this.innerText = "Copy Email";
       }, 1000);
    }.bind(this));
   });
