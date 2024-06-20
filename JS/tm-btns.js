import { teamData } from "../Data/F1_Data.js";

// Event delegation for toggle buttons
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.toggleCollapse').forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const collapseDiv = document.getElementById(targetId);
            
            // Close other open collapse elements
            const openCollapses = document.querySelectorAll('.btn-collapse.show');
            openCollapses.forEach(collapse => {
                if (collapse.id !== targetId) {
                    collapse.classList.remove('show');
                }
            });
            
            // Toggle the clicked collapse element
            collapseDiv.classList.toggle('show');
        });
    });
});

// Get references to the button container and card body
const buttonContainer = document.getElementById('button-container');
const cardBody = document.getElementById('card-body');

// Function to create buttons for each year
function createButtons(years) {
    years.forEach(year => {
        const button = document.createElement('button');
        button.className = 'btn btn-primary';
        button.textContent = year[0];
        button.addEventListener('click', () => displayDataForYear(year[0]));
        buttonContainer.appendChild(button);
    });
}

// Function to display data for a specific year in the card body
function displayDataForYear(year) {
    const team = teamData.find(t => t.years.some(y => y[0] === year));
    const yearData = team.years.find(y => y[0] === year);
    cardBody.innerHTML = `<p>${yearData[1]}</p>`;
}

// Initialize buttons with the first team's years
createButtons(teamData[0].years);
  
  

