import { teamData } from "../Data/F1_Data.js";

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleCollapse');
    const collapseDiv = document.getElementById('collapseExample');

    toggleButton.addEventListener('click', function() {
        if (collapseDiv.classList.contains('show')) {
        collapseDiv.classList.remove('show');
        } else {
        collapseDiv.classList.add('show');
        }
    });
});
  
  

