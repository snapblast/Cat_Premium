/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var images = ['https://s26.postimg.org/663qqgd09/kitten-small.png', 'https://s26.postimg.org/6k52q1x3t/Cat_Dual.jpg',
    'https://s26.postimg.org/domvz34d5/Cat3.jpg', 'https://s26.postimg.org/8r9bdz2e1/Cat4.jpg', 'https://s26.postimg.org/830gv13o9/Cat5.jpg'];


// Let's loop over the numbers in our array
window.onload = function () {
    var count = 0;
    for (var i = 0; i < images.length; i++) {

        // This is the number we're on...
        var num = images[i];

        // We're creating a DOM element for the number
        var elem = document.getElementsByClassName('meowpic')[i];
        var catName = elem.innerText;
        //elem.textContent = num;

        // ... and when we click, alert the value of `num`
        elem.addEventListener('click', (function (numCopy, nameCopy) {
            return function () {
                //resetting values
                count = 0;
                var instruction = document.getElementById('instruction');
                instruction.setAttribute("style", "display: block");
                var clickParagraph = document.getElementById('numberofclicks');
                clickParagraph.innerHTML = '';
                
                var catContainer = document.getElementById('mysterycat');
                var catHeader = document.getElementById('catName');
                catHeader.innerHTML = nameCopy;
                var newCat = document.createElement('img');
                newCat.src = numCopy;
                newCat.onclick = function(){
                    count++;
                    var clickParagraph = document.getElementById('numberofclicks');
                    clickParagraph.innerHTML = 'You made me meow '+count+" times!";
                    var instruction = document.getElementById('instruction');
                    instruction.setAttribute("style", "display: none");
                };
                var currentCat = document.getElementById('mysterycat').getElementsByTagName('img')[0];
                if (currentCat) {
                    currentCat.parentNode.removeChild(currentCat);
                }
                ;
                catContainer.appendChild(newCat);
            };
        })(num,catName));


    }
    ;
};
