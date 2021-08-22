const triviaContainer = document.getElementById("triviaContainer");
const score = document.getElementById("score");
const goBtn = document.getElementById("goBtn");
const number = document.getElementById("number");
const category = document.getElementById("category");
const difficulty = document.getElementById("difficulty");
const type = document.getElementById("type");

goBtn.addEventListener("click", () => {
  let search = "amount=" + number.value;
  if (category.value !== "any") {
    search += "&category=" + category.value;
  }
  if (difficulty.value !== "any") {
    search += "&difficulty=" + difficulty.value;
  }
  if (type.value !== "any") {
    search += "&type=" + type.value;
  }

  const APIURL = "https://opentdb.com/api.php?" + search;

  getQuestions(APIURL);
  clearForm();
});

function clearForm() {
  number.value = "10";
  category.value = "any";
  difficulty.value = "any";
  type.value = "any";
}

async function getQuestions(url) {
  const resp = await fetch(url);
  const respData = await resp.json();

  showQuestion(respData.results);
}

function showQuestion(data) {
  data.forEach((question) => {
    //Creating trivia components containers
    const triviaCard = document.createElement("div");
    const qTitle = document.createElement("div");
    const qCategory = document.createElement("div");
    const qButton = document.createElement("div");
    const qAnswers = document.createElement("div");

    //Adding class list to all trivia components containers
    triviaCard.classList.add("trivia-card");
    qTitle.classList.add("q-title");
    qCategory.classList.add("q-category");
    qButton.classList.add("q-button");
    qAnswers.classList.add("q-answers");

    //Adding child containers to Trivia Card
    triviaCard.appendChild(qCategory);
    triviaCard.appendChild(qTitle);
    triviaCard.appendChild(qAnswers);
    triviaCard.appendChild(qButton);

    //Creating inner tags for every container
    const category = document.createElement("h6");
    const title = document.createElement("h5");
    const button = document.createElement("button");

    //Adding text fetched from API object
    category.innerHTML = "Category: " + question.category;
    title.innerHTML = question.question;
    button.innerText = "Next Question";

    //Adding child tags to containers
    qCategory.appendChild(category);
    qTitle.appendChild(title);
    button.setAttribute("type", "submit");
    qButton.appendChild(button);

    //Creating options radio buttons
    const option = document.createElement("div");
    option.classList.add("option");
    const correctAnswer = document.createElement("input");
    const correctAnswerLabel = document.createElement("label");

    correctAnswer.setAttribute("type", "radio");
    correctAnswer.setAttribute("id", question.correct_answer);
    correctAnswer.setAttribute("name", question.question);
    correctAnswer.setAttribute("value", question.correct_answer);
    correctAnswerLabel.setAttribute("for", question.correct_answer);
    correctAnswerLabel.innerText = question.correct_answer;

    option.appendChild(correctAnswer);
    option.appendChild(correctAnswerLabel);
    qAnswers.appendChild(option);

    question.incorrect_answers.forEach((incorrect_answer) => {
      const option = document.createElement("div");
      option.classList.add("option");
      const incorrectAnswer = document.createElement("input");
      const incorrectAnswerLabel = document.createElement("label");

      incorrectAnswer.setAttribute("type", "radio");
      incorrectAnswer.setAttribute("id", incorrect_answer);
      incorrectAnswer.setAttribute("name", question.question);
      incorrectAnswer.setAttribute("value", incorrect_answer);
      incorrectAnswerLabel.setAttribute("for", incorrect_answer);
      incorrectAnswerLabel.innerText = incorrect_answer;

      option.appendChild(incorrectAnswer);
      option.appendChild(incorrectAnswerLabel);
      qAnswers.appendChild(option);
    });
    triviaContainer.appendChild(triviaCard);
  });
}
