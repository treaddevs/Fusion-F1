import { teamData } from '../Data/F1_Data';
import { drivers } from '../Data/F1_Data';

document.addEventListener('DOMContentLoaded', async () => {
    const params = new URLSearchParams(window.location.search);
    const teamId = params.get('id');

    if (teamId) {
        const driver = await fetchDriverData(teamId);

        if (driver) {
            displayDriver(driver);
        } else {
            console.error('Team not found');
        }
    } else {
        console.error('Team ID not provided');
    }
});

async function fetchDriverData(teamId) {
    // Simulate fetching driver data
    return teamData.find(d => d.id === parseInt(teamId));
}

function displayDriver(driver) {
    const teamContainer = document.getElementById('team-container');

    // Clear any existing content
    teamContainer.innerHTML = '';

    const teamPage = document.createElement('div');
    teamPage.className = 'driver-page';

    teamPage.innerHTML = `
    <div class="team-name">
        ${teamData.team}   
    </div>
    <div class="team-page">
        <div class="drivers-info">
            <div class="left-driver">
                <div class="driver-pic" style="background-image: url(${driver.pic})"></div>
                <div class="number-flag">
                    <h2 class="driver-number">${driver.number}</h2>   
                    <div class="driver-flag" style="background-image: url(${driver.flag});"></div>
                </div>
                <div class="driver-name">
                    <p class="name-text">${driver.firstName} ${driver.lastName}</p>
                </div>
                <div class="team-name">
                    <p>${teamData.teamName}</p>   
                </div>
            </div>
            <div class="right-driver">
                <div class="driver-pic" style="background-image: url(${driver.pic})"></div>
                <div class="number-flag">
                    <h2 class="driver-number">${driver.number}</h2>   
                    <div class="driver-flag" style="background-image: url(${driver.flag});"></div>
                </div>
                <div class="driver-name">
                    <p class="name-text">${driver.firstName} ${driver.lastName}</p>
                </div>
                <div class="team-name">
                    <p>${teamData.teamName}</p>   
                </div>
            </div>
        </div>
        <div class="teams-info">
            <div class="logo-box">
                <img src=url(${teamData.logo})>
            </div>
            <div class="data-block">
                    <div class="key-block">
                    <p>Full Team Name</p>
                    <p>Base</p>
                    <p>Team Chief</p>
                    <p>Technical Chief</p>
                    <p>Chassis</p>
                    <p>Power Unit</p>
                    <p>First Team Entry</p>
                    <p>World Championships</p>
                    <p>Highest Race Finish</p>
                    <p>Pole Positions</p>
                    <p>Fastest Laps</p>
                </div>
                <div class="value-block">
                    <p>${teamData.teamName}</p>
                    <p>${teamData.base}</p>
                    <p>${teamData.chief}</p>
                    <p>${teamData.techChief}</p>
                    <p>${teamData.chasis}</p>
                    <p>${teamData.powerUnit}</p>
                    <p>${teamData.firstTeamEntry}</p>
                    <p>${teamData.worldChampionships}</p>
                    <p>${teamData.higestRaceFinish}</p>
                    <p>${teamData.polePositions}</p>
                    <p>${teamData.fastestLaps}</p>
                </div>
            </div>
        </div>
        `;
        
    teamContainer.appendChild(teamPage);
}
