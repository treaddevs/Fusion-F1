// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

document.addEventListener('DOMContentLoaded', function () {
  var currentDate = new Date();
  var accordionItems = document.querySelectorAll('.horizontal-accordion .card.choice');

  // Get the dates of all races from the accordion items
  var raceDates = Array.from(accordionItems).map(function (item) {
      var dateString = item.querySelector('.footer .card-h4').textContent;
      // Split the date string into month, day, and year
      var [month, day, year] = dateString.split(' ');
      // Construct a new Date object using the parsed values
      var raceDate = new Date(year, months.indexOf(month), parseInt(day));
      return raceDate;
  });

  // Filter out past races
  var futureRaceDates = raceDates.filter(function (date) {
      return date > currentDate;
  });

  // Find the nearest upcoming race
  var upcomingRaceDate = futureRaceDates.length > 0 ? futureRaceDates[0] : null;

  if (upcomingRaceDate) {
      // Find the index of the upcoming race accordion item
      var upcomingRaceIndex = raceDates.findIndex(function (date) {
          return date.getTime() === upcomingRaceDate.getTime();
      });

      // Close all accordion items
      accordionItems.forEach(function (item) {
          item.classList.remove('show');
      });

      // Open the accordion item for the upcoming race
      accordionItems[upcomingRaceIndex].classList.add('show');
      accordionItems[upcomingRaceIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // Remove the click event listener from the accordion items
  accordionItems.forEach((card) => {
      card.removeEventListener("click", toggleAccordion);
  });
});

// Function to toggle accordion
function toggleAccordion() {
  const choiceArray = document.querySelectorAll(".choice");

  choiceArray.forEach((element) => {
      element.classList.remove("expand", "unset");
      element.classList.add("small");
  });

  this.classList.remove("small");
  this.classList.add("expand");
}

// Add click event listener to each accordion item
const choiceArray = document.querySelectorAll(".choice");
choiceArray.forEach((card) => {
  card.addEventListener("click", toggleAccordion);
});




