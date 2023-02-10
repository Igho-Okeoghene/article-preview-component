//listen to when the btn is clicked
//make section-three display:none and shareSection display:flex through JavaScript.
//reverse previous action after 5 seconds;



    document.getElementById("shareBtn").addEventListener('click', function(e){
        let btn = document.getElementById("thirdSection");
        let popup = document.getElementById("shareSection");
        let displayPop = document.getElementById("popped")
        if(window.innerWidth < 700) { 
            btn.classList.toggle("no-display");
            popup.classList.toggle("display");
            
        setTimeout(() => {
            btn.classList.remove("no-display");
            popup.classList.remove("display");
             }, "5000")
        }
        else{
            displayPop.classList.toggle("show")
        };
    });

