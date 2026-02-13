/*    JavaScript 7th Edition
     Chapter 3
     Chapter case

     Tipton Turbines
     Program to display games results in a web table
     Author: Sami Achnine
     Date: Feb 13 2026  

     Filename: js03.js
 */

// days of the week
let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

window.addEventListener("load", addWeekdays);

// function to write weekday names into the calendar
function addWeekdays() {
    let i = 0; // counter initial value

    let headingCells = document.getElementsByTagName("th"); // reference the heading cells

    // write each day into the heading cell
    while (i < 7) {
        headingCells[i].innerHTML = weekDays[i];
        i++; // go to the next heading cell
    }
};

window.addEventListener("load", showGames);

function showGames() {
    for (let i = 0; i < gameDates.length; i++){
        let gameInfo = "";

        // open paragraph
        gameInfo += "<p>";

        // display game location
        if (gameLocations[i] === "h") {
            gameInfo += "vs. ";
        }
        else if (gameLocations[i] === "a") {
            gameInfo += "@ ";
        }

        // include opponent
        gameInfo += gameOpponents[i] + "<br>";

        // include result and score
        gameInfo += gameResults[i] + ": (" + runsScored[i] + " - " + runsAllowed[i] + ")";

        // display innings played for suspended, shortened, or extra inning games
        if (gameInnings[i] < 5){
            gameInfo += " [" + gameInnings[i] + "]***";
        }
        else if (gameInnings[i] < 9) {
            gameInfo += " [" + gameInnings[i] + "]*";
        }
        else if (gameInnings[i] > 9){
            gameInfo += " [" + gameInnings[i] + "]";
        }

        // close paragraph
        gameInfo += "</p>";

        // write information to table cell
        let tableCell = document.getElementById(gameDates[i]);
        tableCell.insertAdjacentHTML("beforeEnd", gameInfo);
    }
}