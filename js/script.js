// script.js
document.addEventListener('DOMContentLoaded', function() {
    console.log("Page fully loaded and parsed");

    var toggleButton = document.getElementById('toggleBorderButton');
    var today = new Date();
    var currentDay = today.getDate(); // Get the current day as a number
    var dayLinkId = "day" + (currentDay < 10 ? "0" + currentDay : currentDay); // Adjust for leading zero
    var dayLink = document.getElementById(dayLinkId);

    toggleButton.addEventListener('click', function() {
        if (dayLink) {
            dayLink.classList.toggle('highlight-border');
        } else {
            console.log("No link found for the current day: " + dayLinkId);
        }
    });
});
