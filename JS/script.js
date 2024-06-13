//alert("Working!");


// Video Text Overlay //
function fadeOutText() {
    var svgText = document.querySelector('.video .highlights text tspan');
    svgText.classList.add("fadeOutAnimation");
}

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function plusSlides(event, n) {
    showSlides(slideIndex += n);
    event.preventDefault(); // Prevent default anchor behavior
}

$('#myCarousel').carousel({
    interval:   4000
});

// Driver Standings + API //
document.addEventListener('DOMContentLoaded', function () {
    const listItems = document.querySelectorAll('.list-group-item');

    // Function to toggle 'active' class
    function toggleActiveClass() {
        listItems.forEach(item => {
            item.classList.remove('active');
        });
        this.classList.add('active');
    }

    // Add click event listener to each list item
    listItems.forEach(item => {
        item.addEventListener('click', toggleActiveClass);

        // Add hover event listener to each list item
        item.addEventListener('mouseenter', toggleActiveClass);
    });
});

// Function to fetch F1 driver standings from Ergast API
async function fetchDriverStandings() {
    try {
        const response = await fetch('https://ergast.com/api/f1/current/driverStandings.json');
        const data = await response.json();
        return data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    } catch (error) {
        console.error('Error fetching driver standings:', error);
        return [];
    }
}

async function updatePointsForAllDrivers() {
    const driverStandings = await fetchDriverStandings();
    const listContainer = document.querySelector('.list-group');

    // Sort driver standings by points
    driverStandings.sort((a, b) => b.points - a.points);

    // Clear existing list items
    listContainer.innerHTML = '';

    driverStandings.forEach((driver, index) => {
        const driverFullName = `${driver.Driver.givenName} ${driver.Driver.familyName}`;
        const points = driver.points;
        const rank = index + 1; // Since index is 0-based

        // Create list item for each driver
        const listItem = document.createElement('a');
        listItem.href = '#';
        listItem.classList.add('list-group-item', 'list-group-item-action', 'px-3', 'border-0');
        listItem.dataset.mdbRippleInit = '';
        listItem.dataset.driverId = driver.Driver.driverId;

        // Create driver name element
        const nameElement = document.createElement('p');
        nameElement.classList.add('rankings-name');

        // Create elements for driver's name, points, and rank
        const rankElement = document.createElement('span');
        rankElement.classList.add('rank', 'mr-2');
        rankElement.textContent = rank;

        const firstNameElement = document.createElement('span');
        firstNameElement.classList.add('rankings-first-name');
        
        const lastNameElement = document.createElement('span');
        lastNameElement.classList.add('rankings-last-name');

        // Modify name order for driver named "Guanyu Zhou"
        if (driver.Driver.familyName === 'Zhou' && driver.Driver.givenName === 'Guanyu') {
            firstNameElement.textContent = 'Zhou';
            lastNameElement.textContent = 'Guanyu';
        } else {
            firstNameElement.textContent = driver.Driver.givenName;
            lastNameElement.textContent = driver.Driver.familyName;
        }

        const teamElement = document.createElement('span');
        teamElement.classList.add('team');
        teamElement.style.verticalAlign = 'center'; // Align vertically
        teamElement.textContent = getTeamDisplayName(driver.Constructors[0].name);

        // Create team color icon element
        const teamColorIcon = document.createElement('span');
        teamColorIcon.classList.add('team-color-icon', driver.Constructors[0].name.toLowerCase().replace(/\s/g, '-'));
        teamColorIcon.style.backgroundColor = getTeamColor(driver.Constructors[0].name); // Set background color based on team name
        const teamDisplayName = getTeamDisplayName(driver.Constructors[0].name);
        const teamDisplayNameClass = teamDisplayName.toLowerCase().replace(/\s/g, '-');
        teamColorIcon.classList.add('team-color-icon', teamDisplayNameClass);
        teamColorIcon.style.backgroundColor = getTeamColor(driver.Constructors[0].name); // Set background color based on team name
        teamColorIcon.style.verticalAlign = 'center';

        const pointsContainer = document.createElement('div');
        pointsContainer.classList.add('points-container');
        pointsContainer.style.verticalAlign = 'center'; // Align vertically

        const pointsElement = document.createElement('span');
        pointsElement.classList.add(`${driver.Driver.familyName.toLowerCase()}-points`, 'points');
        pointsElement.style.verticalAlign = 'center'; // Align vertically
        pointsElement.textContent = `${points} PTS`;

        const chevronRightIcon = document.createElement('i');
        chevronRightIcon.classList.add('fas', 'fa-angle-right');
        chevronRightIcon.style.verticalAlign = 'center'; // Align vertically

        const chevronRightIcon2 = document.createElement('i');
        chevronRightIcon2.classList.add('icon', 'icon-chevron-right', 'f1-color--warmRed');
        chevronRightIcon2.style.verticalAlign = 'center'; // Align vertically

        // Append elements to the list item with spaces
        nameElement.appendChild(rankElement);
        nameElement.appendChild(document.createTextNode(' ')); // Add space between rank and color icon
        nameElement.appendChild(teamColorIcon); // Add team color icon
        nameElement.appendChild(document.createTextNode(' ')); // Add space between color icon and first name
        nameElement.appendChild(firstNameElement);
        nameElement.appendChild(document.createTextNode(' ')); // Add space between first and last name
        nameElement.appendChild(lastNameElement);
        nameElement.appendChild(document.createTextNode(' ')); // Add space between last name and team
        nameElement.appendChild(teamElement);

        pointsContainer.appendChild(pointsElement);
        pointsContainer.appendChild(chevronRightIcon);
        pointsContainer.appendChild(chevronRightIcon2);

        listItem.appendChild(nameElement);
        listItem.appendChild(pointsContainer);

        // Append the list item to the container
        listContainer.appendChild(listItem);
    });
}

// Call updatePointsForAllDrivers function initially and then at regular intervals for live updates
updatePointsForAllDrivers(); // Initial update
setInterval(updatePointsForAllDrivers, 60000); // Update every 60 seconds (adjust interval as needed)

// Function to get team color based on team name
function getTeamColor(teamName) {
    switch (teamName) {
        case 'Red Bull':
            return '#3671C6';
        case 'Ferrari':
            return '#E80020';
        case 'McLaren':
            return '#FF8000';
        case 'Mercedes':
            return '#27F4D2';
        case 'Aston Martin':
            return '#229971';
        case 'Alpine F1 Team':
            return '#0093CC';
        case 'Sauber':
            return '#52e252';
        case 'Haas F1 Team':
            return '#B6BABD';
        case 'RB F1 Team':
            return '#6692FF';
        case 'Williams':
            return '#64C4FF';
        default:
            return '';
    }
}

// Function to get the display name of the team
function getTeamDisplayName(teamName) {
    switch (teamName) {
        case 'Red Bull':
            return 'Red Bull Racing';
        case 'Ferrari':
            return 'Ferrari';
        case 'McLaren':
            return 'McLaren';
        case 'Mercedes':
            return 'Mercedes';
        case 'Aston Martin':
            return 'Aston Martin';
        case 'Alpine F1 Team':
            return 'Alpine';
        case 'Sauber':
            return 'Kick Sauber';
        case 'Haas F1 Team':
            return 'Haas';
        case 'RB F1 Team':
            return 'RB';
        case 'Williams':
            return 'Williams';
        default:
            return '';
    }
}

async function populatePodiumFromAPI() {
    try {
        // Fetch driver standings data from the Ergast API
        const driverStandings = await fetchDriverStandings();

        // Sort the drivers based on their points (assuming 'points' exists)
        const sortedDrivers = driverStandings.sort((a, b) => b.points - a.points); // Descending order for most points

        // Check if there are at least 3 drivers
        if (sortedDrivers.length < 3) {
            console.warn('Not enough data to populate podium.');
            return;
        }

        // Extract the top three drivers
        const topThreeDrivers = sortedDrivers.slice(0, 3);

        // Store the top three drivers in an array
        const podiumDrivers = [];

        // Populate the podium with the top three drivers
        topThreeDrivers.forEach((driver, index) => {
            const driverData = driver.Driver;
            const firstName = driverData.givenName;
            const lastName = driverData.familyName;
            const driverImage = `./Drivers/F1 Headshots PNG/${lastName}.avif`;
            const team = driver.Constructors[0].name;
            const country = driverData.nationality;

            // Position assignment based on index
            let position;
            switch (index) {
                case 0:
                    position = 'center';
                    break;
                case 1:
                    position = 'left';
                    break;
                case 2:
                    position = 'right';
                    break;
                default:
                    break;
            }

            // Populate podium with driver data
            populatePodium({ driverImage, firstName, lastName, team, country, position });

            // Store driver data in podiumDrivers array
            podiumDrivers.push({ driverImage, firstName, lastName, team, country, position });
        });

        // Return the array of top three drivers
        return podiumDrivers;
    } catch (error) {
        console.error('Error populating podium from API:', error);
    }
}

function populatePodium(driverData) {
    if (driverData.position === 'left') {
        const podiumLeft = document.querySelector('.podium-left');
        const driverLeft = podiumLeft.querySelector('.driver-left img');
        const teamBorderLeft = podiumLeft.querySelector('.team-border');
        const firstNameLeft = podiumLeft.querySelector('.firstname-left');
        const lastNameLeft = podiumLeft.querySelector('.lastname-left');
        const flagLeft = podiumLeft.querySelector('.flag-left img');

        console.log("Populating podium left (Driver in position 2):");
        console.log("  - Driver Image:", driverData.driverImage);
        console.log("  - Team Color:", getTeamColor(driverData.team));
        console.log("  - First Name:", driverData.firstName);
        console.log("  - Last Name:", driverData.lastName);

        driverLeft.src = driverData.driverImage;
        teamBorderLeft.style.backgroundColor = getTeamColor(driverData.team);
        firstNameLeft.textContent = driverData.firstName;
        lastNameLeft.textContent = driverData.lastName;

        console.log(driverData);

    } else if (driverData.position === 'center') {
        const podiumCenter = document.querySelector('.podium-center');
        const driverCenter = podiumCenter.querySelector('.driver-center img');
        const teamBorderCenter = podiumCenter.querySelector('.team-border');
        const firstNameCenter = podiumCenter.querySelector('.firstname-center');
        const lastNameCenter = podiumCenter.querySelector('.lastname-center');
        const flagCenter = podiumCenter.querySelector('.flag-center img');

        console.log("Populating podium center (Driver in position 1):");
        console.log("  - Driver Image:", driverData.driverImage);
        console.log("  - Team Color:", getTeamColor(driverData.team));
        console.log("  - First Name:", driverData.firstName);
        console.log("  - Last Name:", driverData.lastName);

        driverCenter.src = driverData.driverImage;
        teamBorderCenter.style.backgroundColor = getTeamColor(driverData.team);
        firstNameCenter.textContent = driverData.firstName;
        lastNameCenter.textContent = driverData.lastName;

        console.log(driverData);

    } else if (driverData.position === 'right') {
        const podiumRight = document.querySelector('.podium-right');
        const driverRight = podiumRight.querySelector('.driver-right img');
        const teamBorderRight = podiumRight.querySelector('.team-border');
        const firstNameRight = podiumRight.querySelector('.firstname-right');
        const lastNameRight = podiumRight.querySelector('.lastname-right');
        const flagRight = podiumRight.querySelector('.flag-right img');

        console.log("Populating podium right (Driver in position 3):");
        console.log("  - Driver Image:", driverData.driverImage);
        console.log("  - Team Color:", getTeamColor(driverData.team));
        console.log("  - First Name:", driverData.firstName);
        console.log("  - Last Name:", driverData.lastName);

        driverRight.src = driverData.driverImage;
        teamBorderRight.style.backgroundColor = getTeamColor(driverData.team);
        firstNameRight.textContent = driverData.firstName;
        lastNameRight.textContent = driverData.lastName;

        console.log(driverData);
    }
}

// Call the function to populate podium from the API
populatePodiumFromAPI();

// Race Schedule Accordion //
document.addEventListener('DOMContentLoaded', function () {
    function toggleAccordion() {
        const choiceArray = document.querySelectorAll(".choice");

        choiceArray.forEach((element) => {
            element.classList.remove("expand", "unset");
            element.classList.add("small");
        });

        this.classList.remove("small");
        this.classList.add("expand");
    }

    const choiceArray = document.querySelectorAll(".choice");
    choiceArray.forEach((card) => {
        card.addEventListener("click", toggleAccordion);
    });
});

// Tech Page 3D Carousel //
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.item');
const leftButton = document.querySelector('.button--left');
const rightButton = document.querySelector('.button--right');
const itemCount = items.length;
let currentPosition = 1;

leftButton.addEventListener('click', function() {
  roll('right');
});
rightButton.addEventListener('click', function() {
  roll('left');
});

function roll(direction) {
  carousel.classList.add(`moving-${direction}`);
  
  if (direction === 'right') {
    currentPosition = currentPosition < itemCount ? currentPosition + 1 : 1;
  } else if (direction === 'left') {
    currentPosition = currentPosition > 1 ? currentPosition - 1 : itemCount;
  }

  for (let i = 0; i < itemCount; i++) {
    const item = items[i];
    let newPosition = currentPosition + i;
    if (newPosition > itemCount) {
      newPosition -= itemCount;
    }
    item.dataset.position = newPosition;
  }

  carousel.addEventListener("transitionend", function() {
    carousel.classList.remove(`moving-${direction}`);
  }, false);

  const activeItem = document.querySelector('.item[data-position="3"]');
  console.log(activeItem);
}