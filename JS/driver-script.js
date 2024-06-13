import { drivers } from '../Data/F1_Data.js';

const driverContainer = document.getElementById('driver-container');

drivers.forEach(driver => {
  const driverPage = document.createElement('div');
  driverPage.className = 'driver-page';

  driverPage.innerHTML = `
    <div class="image-block">
      <div class="driver-pic" style="background-image: url(${driver.pic});"></div>
      <div class="number-flag">
        <h2 class="driver-number">${driver.number}</h2>   
        <div class="driver-flag" style="background-image: url(${driver.flag});"></div>
      </div>
      <div class="driver-name">
        <p class="name-text">${driver.firstName} ${driver.lastName}</p>
      </div>
    </div>
    <div class="stats-block">
      <div class="key-block">
        <p>Team</p>
        <p>Country</p>
        <p>Podiums</p>
        <p>Points</p>
        <p>Grands Prix Entered</p>
        <p>World Championships</p>
        <p>Highest Race Finish</p>
        <p>Highest Grid Position</p>
        <p>Date of Birth</p>
        <p>Place of Birth</p>
      </div>
      <div class="value-block">
        <p>${driver.team}</p>
        <p>${driver.country}</p>
        <p>${driver.podiums}</p>
        <p>${driver.points}</p>
        <p>${driver.grandPrixEntered}</p>
        <p>${driver.worldChampionships}</p>
        <p>${driver.highestRaceFinish}</p>
        <p>${driver.highestGridPosition}</p>
        <p>${driver.dateOfBirth}</p>
        <p>${driver.placeOfBirth}</p>
      </div>
    </div>
    <div class="bio-block">
      <h2>Biography</h2>
    </div>
    <div class="bio">
      <p class="driver-bio">${driver.bio}</p>
    </div>
  `;

  driverContainer.appendChild(driverPage);
});
