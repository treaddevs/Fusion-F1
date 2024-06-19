import { teamData } from '../Data/F1_Data.js';
import { drivers } from '../Data/F1_Data.js';

document.addEventListener('DOMContentLoaded', async () => {
    displayTeams();
});

async function displayTeams() {
    const teamContainer = document.getElementById('team-container');
    
    // Clear any existing content
    teamContainer.innerHTML = '';

    // Loop through each team and display its information
    teamData.forEach(async (team) => {
        const teamPage = document.createElement('div');
        teamPage.className = 'driver-page';

        // Fetch driver data for the current team
        const driver = await fetchDriverData(team.id);

        if (driver) {
            teamPage.innerHTML = `
                <div class="team-name">
                    ${team.teamName}   
                </div>
                <div class="team-page">
                    <div class="drivers-info">
                        <!-- Left driver -->
                        <div class="left-driver">
                            <!-- Driver picture -->
                            <div class="driver-pic" style="background-image: url(${driver[0].pic})"></div>
                            <!-- Driver number and flag -->
                            <div class="number-flag">
                                <h2 class="driver-number">${driver[0].number}</h2>   
                                <div class="driver-flag" style="background-image: url(${driver[0].flag});"></div>
                            </div>
                            <!-- Driver name -->
                            <div class="driver-name">
                                <p class="name-text">${driver[0].firstName} ${driver[0].lastName}</p>
                            </div>
                            <!-- Team name -->
                            <div class="team-name">
                                <p>${team.teamName}</p>   
                            </div>
                        </div>
                        <!-- Right driver -->
                        <div class="right-driver">
                            <!-- Driver picture -->
                            <div class="driver-pic" style="background-image: url(${driver[1].pic})"></div>
                            <!-- Driver number and flag -->
                            <div class="number-flag">
                                <h2 class="driver-number">${driver[1].number}</h2>   
                                <div class="driver-flag" style="background-image: url(${driver[1].flag});"></div>
                            </div>
                            <!-- Driver name -->
                            <div class="driver-name">
                                <p class="name-text">${driver[1].firstName} ${driver[1].lastName}</p>
                            </div>
                            <!-- Team name -->
                            <div class="team-name">
                                <p>${team.teamName}</p>   
                            </div>
                        </div>
                    </div>
                    <!-- Team information -->
                    <div class="teams-info">
                        <div class="logo-box">
                            <img src="${team.logo}">
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
                                <p>${team.teamName}</p>
                                <p>${team.base}</p>
                                <p>${team.chief}</p>
                                <p>${team.techChief}</p>
                                <p>${team.chasis}</p>
                                <p>${team.powerUnit}</p>
                                <p>${team.firstTeamEntry}</p>
                                <p>${team.worldChampionships}</p>
                                <p>${team.highestRaceFinish}</p>
                                <p>${team.polePositions}</p>
                                <p>${team.fastestLaps}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            teamContainer.appendChild(teamPage);
        } else {
            console.error('Driver not found for team: ', team.teamName);
        }
    });
}

async function fetchDriverData(teamId) {
    // Simulate fetching driver data
    return drivers.filter(d => d.team === teamData.find(t => t.id === teamId).team);
}

// import { teamData } from '../Data/F1_Data';
// import { drivers } from '../Data/F1_Data';

// document.addEventListener('DOMContentLoaded', async () => {
//     const params = new URLSearchParams(window.location.search);
//     const teamId = params.get('id');

//     if (teamId) {
//         const driver = await fetchDriverData(teamId);

//         if (driver) {
//             displayDriver(driver);
//         } else {
//             console.error('Team not found');
//         }
//     } else {
//         console.error('Team ID not provided');
//     }
// });

// async function fetchDriverData(teamId) {
//     return teamData.find(d => d.id === parseInt(teamId));
// }

// function displayDriver(driver) {
//     const teamContainer = document.getElementById('team-container');

//     teamContainer.innerHTML = '';

//     const teamPage = document.createElement('div');
//     teamPage.className = 'driver-page';

//     teamPage.innerHTML = `
//     <div class="team-name">
//         ${teamData.team}   
//     </div>
//     <div class="team-page">
//         <div class="drivers-info">
//             <div class="left-driver">
//                 <div class="driver-pic" style="background-image: url(${driver.pic})"></div>
//                 <div class="number-flag">
//                     <h2 class="driver-number">${driver.number}</h2>   
//                     <div class="driver-flag" style="background-image: url(${driver.flag});"></div>
//                 </div>
//                 <div class="driver-name">
//                     <p class="name-text">${driver.firstName} ${driver.lastName}</p>
//                 </div>
//                 <div class="team-name">
//                     <p>${teamData.teamName}</p>   
//                 </div>
//             </div>
//             <div class="right-driver">
//                 <div class="driver-pic" style="background-image: url(${driver.pic})"></div>
//                 <div class="number-flag">
//                     <h2 class="driver-number">${driver.number}</h2>   
//                     <div class="driver-flag" style="background-image: url(${driver.flag});"></div>
//                 </div>
//                 <div class="driver-name">
//                     <p class="name-text">${driver.firstName} ${driver.lastName}</p>
//                 </div>
//                 <div class="team-name">
//                     <p>${teamData.teamName}</p>   
//                 </div>
//             </div>
//         </div>
//         <div class="teams-info">
//             <div class="logo-box">
//                 <img src=url(${teamData.logo})>
//             </div>
//             <div class="data-block">
//                     <div class="key-block">
//                     <p>Full Team Name</p>
//                     <p>Base</p>
//                     <p>Team Chief</p>
//                     <p>Technical Chief</p>
//                     <p>Chassis</p>
//                     <p>Power Unit</p>
//                     <p>First Team Entry</p>
//                     <p>World Championships</p>
//                     <p>Highest Race Finish</p>
//                     <p>Pole Positions</p>
//                     <p>Fastest Laps</p>
//                 </div>
//                 <div class="value-block">
//                     <p>${teamData.teamName}</p>
//                     <p>${teamData.base}</p>
//                     <p>${teamData.chief}</p>
//                     <p>${teamData.techChief}</p>
//                     <p>${teamData.chasis}</p>
//                     <p>${teamData.powerUnit}</p>
//                     <p>${teamData.firstTeamEntry}</p>
//                     <p>${teamData.worldChampionships}</p>
//                     <p>${teamData.higestRaceFinish}</p>
//                     <p>${teamData.polePositions}</p>
//                     <p>${teamData.fastestLaps}</p>
//                 </div>
//             </div>
//         </div>
//         `;

//     teamContainer.appendChild(teamPage);
// }
