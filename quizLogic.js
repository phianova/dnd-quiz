/* Functions needed:
1. Start quiz
2. Move question
3. Determine path
4. Track score
5. Display result
6. Restart

Will track scores with object/array of scores for each class.
*/

//Set current question to 0 and set blank question path array
let currentQuestion = 0;
let questionArray = [];

//Start quiz on click of button on start screen
const startQuiz = () => {
    //Hide start screen
    switchDisplay("start-screen", false);

    //Show path-question
    switchDisplay("path-question", true);

}

//Set path (ie question array) on click of button on path screen
const determinePath = () => {
    //Display input prompt if no option selected
    if (inputChecked("path") === false) {
        switchDisplay("input-prompt", true)
    } else {
    //Make sure input prompt not displaying
        switchDisplay("input-prompt", false)
    //Select corresponding question array for selected path
        pathValue = answerValueFunction("path");
        questionArray = pathQuestion[pathValue];

    //Hide path screen
        switchDisplay("path-question", false);

    //Show questions screen
        switchDisplay("question", true);
        nextQuestion();

    //Reset path inputs
        resetInput("path");
    }
} 

//Progress to next question on click of next question button
const nextQuestion = () => {
    if (currentQuestion > 0 && inputChecked("question" + currentQuestion) === false) {
        switchDisplay("input-prompt", true)
    } else {
        switchDisplay("input-prompt", false)
    //Call trackScore function
        trackScore();

    //Increment current question upward
        currentQuestion ++;

    //If currentQuestion is at 4, change button text
        if (currentQuestion === 5) {
            document.getElementById("next-button").innerText = "See results"
        }

    //If currentQuestion is at max, call displayResult()
        if (currentQuestion === 6) {
            displayResult();
            return false;
        }

    //Use DOM to change question text, input names and input values
        answerChanges();

    //Use DOM to reset radio inputs
        resetInput("question" + currentQuestion);
    }
}
//Update scores based on answers
const trackScore = () => {
    //Where answer = class, add to class score
    if (currentQuestion > 0) {
        let questionName = "question" + currentQuestion;
        let answer = answerValueFunction(questionName);
        currentClassObject = classArray.find((a) => a.class === answer);
        currentClassObject.score ++;
    }
}

//Determine and display result based on score when all questions answered
const displayResult = () => {
    //Check max scores and determine results type 
    let finalClass = "";
    let finalClassScore = 0;
    let finalClassImg = "";
    let finalClassLink = "";
    for (let j = 0; j < classArray.length; j++) {
        if (classArray[j].score > finalClassScore) {
            finalClassScore = classArray[j].score;
            finalClass = classArray[j].class;
            finalClassImg = classArray[j].img;
            finalClassLink = classArray[j].link;
        }
    }

    //Change text and image dependent on result
    let resultsText = document.getElementById("results-type");
    let resultsImage = document.getElementById("results-image");
    let resultsImageLink = document.getElementById("results-image-link");
    resultsText.innerText = capitalLetter(finalClass);
    resultsImage.src = finalClassImg;
    resultsImageLink.href = finalClassLink;

    //Hide questions screen, display results screen (incl. restart button)
    switchDisplay("question", false);
    switchDisplay("results", true);
}

//Restart quiz on click of restart button
const restartQuiz = () => {
    //Reset score and path values
    currentQuestion = 0;
    questionArray = [];
    for (i=0; i < classArray.length; i++) {
        classArray[i].score = 0;
    }

    //hide results screen, display start screen
    switchDisplay("results", false);
    switchDisplay("start-screen", true);

    //Reset question button text
    document.getElementById("next-button").innerText = "Next question"

}

//Change answer and question text and inputs each time nextQuestion() is called
const answerChanges = () => {
    //Use DOM to change question and answer text
    let questionText = document.getElementById("question-question");
    let answer1Text = document.getElementById("answer1-label");
    let answer2Text = document.getElementById("answer2-label");
    let answer3Text = document.getElementById("answer3-label");
    let answer4Text = document.getElementById("answer4-label");

    questionText.innerHTML = questionArray[currentQuestion-1].question
    //TODO figure out how to dynamically generate variable names to make below a loop
    answer1Text.innerHTML = questionArray[currentQuestion-1].answer1.answer
    answer2Text.innerHTML = questionArray[currentQuestion-1].answer2.answer
    answer3Text.innerHTML = questionArray[currentQuestion-1].answer3.answer
    answer4Text.innerHTML = questionArray[currentQuestion-1].answer4.answer

    //Use DOM to change input name
    let answer1Input = document.getElementById("answer1");
    let answer2Input = document.getElementById("answer2");
    let answer3Input = document.getElementById("answer3");
    let answer4Input = document.getElementById("answer4");

    answer1Input.name = "question" + currentQuestion;
    answer2Input.name = "question" + currentQuestion;
    answer3Input.name = "question" + currentQuestion;
    answer4Input.name = "question" + currentQuestion;

    //Use DOM to set value of answers to correct DND class for scoring
    answer1Input.value = questionArray[currentQuestion-1].answer1.class;
    answer2Input.value = questionArray[currentQuestion-1].answer2.class;
    answer3Input.value = questionArray[currentQuestion-1].answer3.class;
    answer4Input.value = questionArray[currentQuestion-1].answer4.class;

}

//REUSABLE: Switch display function to toggle whether to show or hide screens (element must be flex)
const switchDisplay = (id, status) => {
    let element = document.getElementById(id);
    let display = (status) ? "flex" : "none";
    element.style.display = display;
}

//REUSABLE: Find answer value function to determine which of a series of radio inputs is checked
const answerValueFunction = (name) => {
    let answersArray = document.getElementsByName(name);
    let answerValue = "";
    for (let i = 0; i < answersArray.length; i++) {
        if (answersArray[i].checked) {
            answerValue = answersArray[i].value
        }
    }
    return answerValue;
}

//REUSABLE: Capitalise class names for display
const capitalLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//REUSABLE: Reset radio inputs to blank
const resetInput = (name) => {
    let inputsArray = document.getElementsByName(name);
    for (let i = 0; i < inputsArray.length; i++) {
        if (inputsArray[i].checked) {
            inputsArray[i].checked = false;
        }
    }
}

//REUSABLE: Check if at least one input is checked
const inputChecked = (name) => {
    let inputsArray = document.getElementsByName(name);
    let checked = false;
    for (let i = 0; i < inputsArray.length; i++) {
        if (inputsArray[i].checked) {
            checked = true;
        }
    }
    return checked;
}