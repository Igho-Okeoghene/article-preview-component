//listen to when the btn is clicked
//make section-three display:none and shareSection display:flex through JavaScript.
//reverse previous action after 5 seconds;
    document.getElementById("shareBtn").addEventListener('click', function(){
        document.getElementById("thirdSection").style.display = 'none';
        document.getElementById("shareSection").style.display = 'flex';
        console.log("Switched Change");
        setTimeout(() => {
            document.getElementById("shareSection").style.display = 'none';
            document.getElementById("thirdSection").style.display = 'flex';
            console.log("Initial Design Restored");
             }, "5000")
        
    });

