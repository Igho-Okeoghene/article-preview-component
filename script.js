//listen to when the btn is clicked
//make section-three display:none and shareSection display:flex through JavaScript.
//reverse previous action after 5 seconds;
    document.getElementById("shareBtn").addEventListener('click', function(){
        let btn = document.getElementById("thirdSection");
        let popup = document.getElementById("shareSection");
        btn.classList.toggle("no-display");
        popup.classList.toggle("display");
         console.log("Switched Change");
        setTimeout(() => {
            btn.classList.remove("no-display");
            popup.classList.remove("display");console.log("Initial Design Restored");
             }, "5000")
        
    });

