/* 
Quiz functions:
1. Start quiz (startQuiz())
2. Determine path (determinePath())
3. Move to next question (nextQuestion())
4. Track score (trackScore())
5. Display result (displayResult())
6. Restart (restartQuiz())

Functions for specific tasks that could be reused:
1. Change question and answer text based on question (answerChanges())
2. Toggle whether screen is displayed (switchDisplay())
3. Determine which radio input is checked (answerValueFunction())
4. Capitalise class name for final display (capitalLetter())
5. Reset all radio inputs to blank (resetInput())
6. Ensure at least one radio input is checked (inputChecked())
7. Set text and value of inputs based on an old name and new name given (nameAnswers())
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
    //Reset answer names
    nameAnswers(("question" + (currentQuestion-1)), "question");
    
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
    answer1Text.innerHTML = questionArray[currentQuestion-1].answer1.answer
    answer2Text.innerHTML = questionArray[currentQuestion-1].answer2.answer
    answer3Text.innerHTML = questionArray[currentQuestion-1].answer3.answer
    answer4Text.innerHTML = questionArray[currentQuestion-1].answer4.answer

    //Use DOM to change input name and set value of answers to correct DND class for scoring
    if (currentQuestion <= 1) {
        nameAnswers("question", ("question"+currentQuestion));
    } else if (currentQuestion === 6) {
        nameAnswers("question" + (currentQuestion-1), "question");
    } else {
        nameAnswers("question" + (currentQuestion-1), ("question" + currentQuestion));
    }

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

//REUSABLE: Update question input names to reflect current question
const nameAnswers = (oldName, newName) => {
    let inputsArray = Array.prototype.slice.call(document.getElementsByName(oldName));
    for (let i = 0; i < inputsArray.length; i++) {
        inputsArray[i].name = newName;
        if (currentQuestion > 0 && currentQuestion != 6) {
            let answerKey = Object.keys(questionArray[currentQuestion-1])[i+1]
            inputsArray[i].value = questionArray[currentQuestion-1][answerKey].class;
        }
    }
    
}