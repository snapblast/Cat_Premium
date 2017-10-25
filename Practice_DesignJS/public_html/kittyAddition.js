/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//debugger;
window.onload = function(){
    var meow = document.getElementById ("cat");
    document.getElementById ("cat").addEventListener ("click", updateCounter, false);
    document.getElementById ("cat2").addEventListener ("click", updateCounter2, false);
};

    var count = 0;
    function updateCounter() {
        count++;  
        document.getElementById("counted").innerHTML = "This has been clicked " + count + " times.";
    }
    
    var count2 = 0;
    function updateCounter2() {
        count2++;  
        document.getElementById("counted2").innerHTML = "This has been clicked " + count2 + " times.";
    }

