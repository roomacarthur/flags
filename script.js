// Initialize variables for the countries and quiz elements
let countriesBank = []; // Array to store countries and their codes from the API
let availableCountries = []; // Array of country names for easy access
let countryCodes = {}; // Object to map country names to their ISO codes
const imgContainer = document.getElementById("questionImage"); // Image container for displaying the flag
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
const allAnswers = [answer1, answer2, answer3, answer4]; // Array of answer buttons
let acceptingAnswers = true; // Flag to control answer acceptance
let currentAnswer = []; // Array to store the correct answer for validation
let streak = 0; // Counter for the number of attempts
let accuracy = 0; // Counter for correct answers

// Fetch country data from Flagpedia API
fetch("https://flagcdn.com/en/codes.json")
  .then((response) => response.json())
  .then((data) => {
    // Format data into an array of country objects and map codes to country names
    countriesBank = Object.keys(data).map((code) => ({
      name: data[code], // Country name
      code: code, // Country ISO code
    }));

    // Create an array of country names to use for quiz options
    availableCountries = countriesBank.map((country) => country.name);

    // Map country names to ISO codes for efficient lookup
    countriesBank.forEach((country) => {
      countryCodes[country.name] = country.code;
    });

    // Start the quiz after successfully loading data
    startQuiz();
  })
  .catch((error) => console.error("Error loading country data:", error));

// Utility Functions

// Get a random index within the provided array length
function getRandomObj(group) {
  return Math.floor(Math.random() * group.length);
}

// Shuffle an array using the Fisher-Yates algorithm
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // Loop to randomly swap elements in the array
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

// Remove a specific value from an array, if it exists
function removeItemOnce(arr, value) {
  const index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

// Main Game Functions

// Generate a new question by randomly selecting a country and updating the DOM
function generateNewQuestion() {
  // Select a random country from countriesBank
  let country = countriesBank[getRandomObj(countriesBank)];
  let correctAnswer = country.name; // Set the correct answer
  let countryCode = country.code; // Get the ISO code for the selected country
  let imageSize = "64x48"; // Preferred size for the flag image
  let imageSrc = `https://flagcdn.com/${countryCode}.svg`; // Construct the flag image URL
  let imageUrl = `<img style='max-height: 300px;' class='card-img-top' src='${imageSrc}' alt='World Flag'/>`;
  imgContainer.innerHTML = imageUrl; // Insert the flag image into the DOM

  // Shuffle the answer buttons to place the correct answer in a random position
  let order = shuffle(allAnswers);
  order[0].innerText = correctAnswer; // Set the correct answer on a random button

  // Select three incorrect answers and assign them to the remaining buttons
  let wrongAnswers = shuffle(
    removeItemOnce([...availableCountries], correctAnswer) // Exclude the correct answer
  );
  order[1].innerText = wrongAnswers[0];
  order[2].innerText = wrongAnswers[1];
  order[3].innerText = wrongAnswers[2];

  acceptingAnswers = true; // Enable answer selection
  currentAnswer = [correctAnswer]; // Store the correct answer for validation
}

// Initialize and start the quiz
function startQuiz() {
  streak = 0; // Reset streak counter
  accuracy = 0; // Reset accuracy counter
  document.getElementById("attempts").innerText = streak; // Display initial streak
  document.getElementById("accuracy").innerText = accuracy; // Display initial accuracy
  generateNewQuestion(); // Load the first question
}

// Event listener for answer selection
allAnswers.forEach((answer) => {
  answer.addEventListener("click", function sortAnswer(e) {
    if (!acceptingAnswers) return; // Prevent multiple selections
    acceptingAnswers = false; // Disable answer selection temporarily

    let selectedAnswer = e.target;
    let btnValue = selectedAnswer.innerText; // Get the selected answer text
    let correct = currentAnswer[0]; // Retrieve the correct answer
    let classToApply = btnValue === correct ? "t-success" : "t-danger"; // Determine feedback class

    // Update accuracy if the answer is correct
    if (btnValue === correct) {
      accuracy += 1;
      document.getElementById("accuracy").innerText = accuracy;
    }

    // Increment the streak counter
    streak += 1;
    document.getElementById("attempts").innerText = streak;

    // Apply feedback class to the selected button
    selectedAnswer.classList.add(classToApply);
    setTimeout(() => {
      selectedAnswer.classList.remove(classToApply); // Remove feedback class after delay
      currentAnswer.pop(); // Clear the current answer
      generateNewQuestion(); // Load the next question
    }, 1200);
  });
});
