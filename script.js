const countriesBank = [
	"Afghanistan",
	"Albania",
	"Algeria",
	"American Samoa",
	"Andorra",
	"Angola",
	"Anguilla",
	"Antarctica",
	"Antigua and Barbuda",
	"Argentina",
	"Armenia",
	"Aruba",
	"Australia",
	"Austria",
	"Azerbaijan",
	"The Bahamas",
	"Bahrain",
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
	"Bermuda",
	"Bhutan",
	"Bolivia",
	"Bonaire",
	"Bosnia and Herzegovina",
	"Botswana",
	"Bouvet Island",
	"Brazil",
	"The British Indian Ocean Territory",
	"Brunei Darussalam",
	"Bulgaria",
	"Burkina Faso",
	"Burundi",
	"Cabo Verde",
	"Cambodia",
	"Cameroon",
	"Canada",
	"The Cayman Islands",
	"The Central African Republic",
	"Chad",
	"Chile",
	"China",
	"Christmas Island",
	"The Cocos Islands",
	"Colombia",
	"The Comoros",
	"Democratic Republic Of Congo",
	"Congo",
	"The Cook Islands",
	"Costa Rica",
	"Croatia",
	"Cuba",
	"Curaçao",
	"Cyprus",
	"Czechia",
	"Côte d'Ivoire",
	"Denmark",
	"Djibouti",
	"Dominica",
	"Dominican Republic",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Equatorial Guinea",
	"Eritrea",
	"Estonia",
	"Eswatini",
	"Ethiopia",
	"The Falkland Islands",
	"The Faroe Islands",
	"Fiji",
	"Finland",
	"France",
	"French Guiana",
	"French Polynesia",
	"The French Southern Territories",
	"Gabon",
	"Gambia",
	"Georgia",
	"Germany",
	"Ghana",
	"Gibraltar",
	"Greece",
	"Greenland",
	"Grenada",
	"Guadeloupe",
	"Guam",
	"Guatemala",
	"Guernsey",
	"Guinea",
	"Guinea-Bissau",
	"Guyana",
	"Haiti",
	"Heard Island and McDonald Islands",
	"The Holy See",
	"Honduras",
	"Hong Kong",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iran",
	"Iraq",
	"Ireland",
	"Isle of Man",
	"Israel",
	"Italy",
	"Jamaica",
	"Japan",
	"Jersey",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"North Korea",
	"The Republic Of Korea",
	"Kuwait",
	"Kyrgyzstan",
	"The Lao People's Democratic Republic",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macao",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"The Marshall Islands",
	"Martinique",
	"Mauritania",
	"Mauritius",
	"Mayotte",
	"Mexico",
	"Micronesia",
	"Moldova",
	"Monaco",
	"Mongolia",
	"Montenegro",
	"Montserrat",
	"Morocco",
	"Mozambique",
	"Myanmar",
	"Namibia",
	"Nauru",
	"Nepal",
	"Netherlands",
	"New Caledonia",
	"New Zealand",
	"Nicaragua",
	"Niger",
	"Nigeria",
	"Niue",
	"Norfolk Island",
	"The Northern Mariana Islands",
	"Norway",
	"Oman",
	"Pakistan",
	"Palau",
	"Palestine",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines",
	"Pitcairn",
	"Poland",
	"Portugal",
	"Puerto Rico",
	"Qatar",
	"Republic of North Macedonia",
	"Romania",
	"Russian Federation",
	"Rwanda",
	"Réunion",
	"Saint Barthélemy",
	"Saint Helena",
	"Saint Kitts and Nevis",
	"Saint Lucia",
	"Saint Martin",
	"Saint Pierre and Miquelon",
	"Saint Vincent and the Grenadines",
	"Samoa",
	"San Marino",
	"Sao Tome and Principe",
	"Saudi Arabia",
	"Senegal",
	"Serbia",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"South Africa",
	"South Georgia and the South Sandwich Islands",
	"South Sudan",
	"Spain",
	"Sri Lanka",
	"Sudan",
	"Suriname",
	"Svalbard and Jan Mayen",
	"Sweden",
	"Switzerland",
	"Syrian Arab Republic",
	"Taiwan",
	"Tajikistan",
	"The United Republic Of Tanzania",
	"Thailand",
	"Timor-Leste",
	"Togo",
	"Tokelau",
	"Tonga",
	"Trinidad and Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"The Turks and Caicos Islands",
	"Tuvalu",
	"Uganda",
	"Ukraine",
	"United Arab Emirates",
	"United Kingdom",
	"The United States of America",
	"Uruguay",
	"Uzbekistan",
	"Vanuatu",
	"Venezuela",
	"Viet Nam",
	"British Virgin Islands",
	"Us Virgin Islands",
	"Wallis and Futuna",
	"Western Sahara",
	"Yemen",
	"Zambia",
	"Zimbabwe",
	"Åland Islands"
];
let availableCountries = countriesBank

//get elements.
const imgContainer = document.getElementById("questionImage");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
const answers = Array.from(document.getElementsByClassName("answer"));
const count = document.getElementById("attempts");
let rating = document.getElementById("accuracy");
let allAnswers = [answer1, answer2, answer3, answer4,];

let acceptingAnswers = true;
let currentAnswer = [];
let streak = 0;
let accuracy = 0;

function getRandomObj(group){
    let picker = Math.floor(Math.random()* group.length)
    return picker
};
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
};
function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
};
// function increaseScore(div, val, total){
//     val + total;
//     div.innerText = val;
// };
function generateNewQuestion(){
    let country = availableCountries[getRandomObj(availableCountries)];
    //pick random object from list.
    let correctAnswer = country;
    //change png to svg when styling.
    let imageSrc = "https://countryflagsapi.com/svg/"+correctAnswer+"";
    let imageUrl = "<img style='max-height: 300px;' class='card-img-top' src='"+imageSrc+"' alt='World Flag'/>";
    //apply current questions image to the dom
    imgContainer.innerHTML = imageUrl;
    let order = shuffle(allAnswers);

    order[0].innerText = correctAnswer;

    let wrongAnswer = removeItemOnce(shuffle(availableCountries), correctAnswer);
    order[1].innerText = wrongAnswer[1];
    order[2].innerText = wrongAnswer[3];
    order[3].innerText = wrongAnswer[4];

    acceptingAnswers = true;
    currentAnswer.push(correctAnswer);
};

answers.forEach(answer => {
    answer.addEventListener("click", function sortAnswer(e){
        if(!acceptingAnswers) return;

        
        let selectedAnswer = e.target;
        let btnValue = selectedAnswer.innerHTML;
        let correct = currentAnswer[0];
        if (btnValue === correct) {
            classToApply = "t-success";
            selectedAnswer.classList.add(classToApply);
            // increaseScore(rating, accuracy, 1);
            accuracy += 1;
            rating.innerText = accuracy
        } else {
            classToApply = "t-danger";
            selectedAnswer.classList.add(classToApply);
        };
        // increaseScore(count, streak, 1);
        streak += 1;
        count.innerText = streak;
        setTimeout(() => {
            selectedAnswer.classList.remove(classToApply);
            currentAnswer.pop(currentAnswer);
            generateNewQuestion();
        }, 1200);
    });
});

function startQuiz(){
    streak = 0;
    generateNewQuestion();
    console.log(currentAnswer)
    // marking()
}

startQuiz()

