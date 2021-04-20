
// Number Guessing 

function numberguessgame(mynum) {
    var bot = Math.floor(Math.random() * 10);
    console.log(bot);
    if (mynum == bot) {
        return "You won. ";
    } else if (mynum > bot) {
        return "Too big. ";
    } else if (mynum < bot) {
        return "Too small. ";
    }

}

var mynum = window.prompt("Enter the best guess: ");
console.log(numberguessgame(mynum));
