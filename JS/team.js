import { teamData, drivers } from '../Data/F1_Data.js';

document.addEventListener('DOMContentLoaded', async () => {
    const params = new URLSearchParams(window.location.search);
    const teamId = params.get('id'); // Get the team ID from the URL

    if (teamId) {
        const team = await fetchTeamData(teamId);

        if (team) {
            displayTeam(team);
        } else {
            console.error('Team not found');
        }
    } else {
        console.error('Team ID not provided');
    }
});

async function fetchTeamData(teamId) {
    // Fetch team data by ID
    return teamData.find(t => t.id === parseInt(teamId));
}

function displayTeam(team) {
    const teamContainer = document.getElementById('team-container');

    // Clear any existing content
    teamContainer.innerHTML = '';

    const teamPage = document.createElement('div');
    teamPage.className = 'team-page';

    // Fetch driver data for the current team
    const teamDrivers = fetchDriverData(team.id);

    if (teamDrivers.length) {
        // Create the team's content
        teamPage.innerHTML = `
            <div class="team-name">
                ${team.team}
            </div>
            <div class="team-body">
                <div class="drivers-info">
                    <!-- Left driver -->
                    <div class="left-driver driver-link" onclick="window.location='/Fusion-F1/driver.html?id=${teamDrivers[0].id}'">
                        <div class="driver-pic" style="background-image: url(${teamDrivers[0].pic})"></div>
                        <div class="number-flag">
                            <h2 class="driver-number">${teamDrivers[0].number}</h2>
                            <div class="driver-flag" style="background-image: url(${teamDrivers[0].flag});"></div>
                        </div>
                        <div class="driver-name">
                            <p class="name-text">${teamDrivers[0].firstName} ${teamDrivers[0].lastName}</p>
                        </div>
                        <div class="team-name">
                            <p>${team.teamName}</p>
                        </div>
                    </div>
                    <!-- Right driver -->
                    <div class="right-driver driver-link" onclick="window.location='/Fusion-F1/driver.html?id=${teamDrivers[1].id}'">
                        <div class="driver-pic" style="background-image: url(${teamDrivers[1].pic})"></div>
                        <div class="number-flag">
                            <h2 class="driver-number">${teamDrivers[1].number}</h2>
                            <div class="driver-flag" style="background-image: url(${teamDrivers[1].flag});"></div>
                        </div>
                        <div class="driver-name">
                            <p class="name-text">${teamDrivers[1].firstName} ${teamDrivers[1].lastName}</p>
                        </div>
                        <div class="team-name">
                            <p>${team.teamName}</p>
                        </div>
                    </div>
                </div>
                <!-- Team information -->
                <div class="teams-info">
                    <div class="logo-box" data-team="${team.name}">
                        <img src="${team.logo}" style="max-width: 100%; max-height: 100%; border-radius: 12px;" alt="Team Logo">
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
            <div class="profile">
                <p>Team Profile</p>
            </div>
            <div class="profile-desc">
                <p>${team.profile}</p>
            </div>
            <div class="timeline-text">
                <p>Timeline</p>
            </div>
            <div class="timeline">
                <div class="button-container">
                ${team.years.map((year, index) => {
                    const svg = index > 0 ? `
                        <div class="line">
                            <?xml version="1.0" encoding="UTF-8"?>
                            <svg width="103px" height="22px" viewBox="0 0 103 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <title>Group</title>
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="Group" transform="translate(2, 0)">
                                        <path id="Line" d="M100.132075,21 L97.1320755,21 L97.132,13 L58.8679245,13 L58.8679245,10 L97.132,10 L97.1320755,2 L100.132075,2 L100.132075,21 Z" fill="#979797" fill-rule="nonzero"></path>
                                        <path id="Line" d="M40.1320755,21 L37.1320755,21 L37.132,13 L-1.13207547,13 L-1.13207547,10 L37.132,10 L37.1320755,2 L40.1320755,2 L40.1320755,21 Z" transform="translate(19.5, 11.5) scale(-1, 1) translate(-19.5, -11.5)" fill="#979797" fill-rule="nonzero"></path>
                                        <circle id="Oval" stroke="#979797" stroke-width="3" fill="#F4F4F4" cx="49" cy="11" r="9.5"></circle>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    ` : '';

                    const button = `
                        <div class="year-button-container">
                            <button class="btn btn-primary toggleCollapse" data-target="collapse-${team.id}-${year[0]}" style="background-color: ${team.color};">
                                ${year[0]}
                            </button>
                            <div id="collapse-${team.id}-${year[0]}" class="btn-collapse">
                                <div class="card card-body">
                                    ${year[1]}
                                </div>
                            </div>
                        </div>
                    `;

                    return `${svg}${button}`;
                }).join('')}
                </div>
            </div>
        `;
        teamContainer.appendChild(teamPage);
    } else {
        console.error('Drivers not found for team');
    }
}

function fetchDriverData(teamId) {
    // Fetch driver data by team ID
    return drivers.filter(d => d.team === teamData.find(t => t.id === parseInt(teamId)).team);
}
