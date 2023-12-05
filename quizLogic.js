/* Functions needed:
1. Start quiz
2. Move question
3. Determine path
4. Track score
5. Display result
6. Restart

Will track scores with object/array of scores for each class.
*/

classObject = {
    bard: {
        score: 0,
        img: ""
    },
    barbarian: {
        score: 0,
        img: ""
    },
    cleric:  {
        score: 0,
        img: ""
    },
    druid:  {
        score: 0,
        img: ""
    },
    fighter:  {
        score: 0,
        img: ""
    },
    monk:  {
        score: 0,
        img: ""
    },
    paladin:  {
        score: 0,
        img: ""
    },
    ranger:  {
        score: 0,
        img: ""
    },
    rogue:  {
        score: 0,
        img: ""
    },
    sorcerer:  {
        score: 0,
        img: ""
    },
    warlock:  {
        score: 0,
        img: ""
    },
    wizard:  {
        score: 0,
        img: ""
    }
}

//Question array for path 1 - collapse if you value your life
const questionArray1 = [
    {
        question: "In a battle sitch, where do you want to be?",
        answer1: { 
            answer: "CHAAAAAAARGEEEEEE!",
            class:"barbarian"
        },
        answer2: { 
            answer: "Gettin' all up in their business",
            class:"fighter"
        },
        answer3: { 
            answer: "Far, far away! But I'm not scared, I- I promise!",
            class:"ranger"
        },
        answer4: { 
            answer: "Waiting in the shadows",
            class:"rogue"
        }
    },
    {
        question: "",
        answer1: { 
            answer: "",
            class:""
        },
        answer2: { 
            answer: "",
            class:""
        },
        answer3: { 
            answer: "",
            class:""
        },
        answer4: { 
            answer: "",
            class:""
        }
    },
    {
        question: "",
        answer1: { 
            answer: "",
            class:""
        },
        answer2: { 
            answer: "",
            class:""
        },
        answer3: { 
            answer: "",
            class:""
        },
        answer4: { 
            answer: "",
            class:""
        }
    },
    {
        question: "",
        answer1: { 
            answer: "",
            class:""
        },
        answer2: { 
            answer: "",
            class:""
        },
        answer3: { 
            answer: "",
            class:""
        },
        answer4: { 
            answer: "",
            class:""
        }
    },
    {
        question: "",
        answer1: { 
            answer: "",
            class:""
        },
        answer2: { 
            answer: "",
            class:""
        },
        answer3: { 
            answer: "",
            class:""
        },
        answer4: { 
            answer: "",
            class:""
        }
    },
    {
        question: "",
        answer1: { 
            answer: "",
            class:""
        },
        answer2: { 
            answer: "",
            class:""
        },
        answer3: { 
            answer: "",
            class:""
        },
        answer4: { 
            answer: "",
            class:""
        }
    },
    {
        question: "",
        answer1: { 
            answer: "",
            class:""
        },
        answer2: { 
            answer: "",
            class:""
        },
        answer3: { 
            answer: "",
            class:""
        },
        answer4: { 
            answer: "",
            class:""
        }
    }
]

//Question array for path 2 - collapse if you value your life
const questionArray2 = [
    {
        question: "What is power?",
        answer1: { 
            answer: "The life force of the Earth, harnessed by becoming one with it. A mighty natural force",
            class:"druid"
        },
        answer2: { 
            answer: "The glory of my bloodline. The gift of my ancestors. I. Am. Power",
            class:"sorcerer"
        },
        answer3: { 
            answer: "Knowledge, honed and built up over centuries",
            class:"wizard"
        },
        answer4: { 
            answer: "I don't know but daddy gave me magic fingies :3",
            class:"warlock"
        }
    },
    {
        question: "",
        answer1: { 
            answer: "",
            class:""
        },
        answer2: { 
            answer: "",
            class:""
        },
        answer3: { 
            answer: "",
            class:""
        },
        answer4: { 
            answer: "",
            class:""
        }
    },
    {
        question: "",
        answer1: { 
            answer: "",
            class:""
        },
        answer2: { 
            answer: "",
            class:""
        },
        answer3: { 
            answer: "",
            class:""
        },
        answer4: { 
            answer: "",
            class:""
        }
    },
    {
        question: "",
        answer1: { 
            answer: "",
            class:""
        },
        answer2: { 
            answer: "",
            class:""
        },
        answer3: { 
            answer: "",
            class:""
        },
        answer4: { 
            answer: "",
            class:""
        }
    },
    {
        question: "",
        answer1: { 
            answer: "",
            class:""
        },
        answer2: { 
            answer: "",
            class:""
        },
        answer3: { 
            answer: "",
            class:""
        },
        answer4: { 
            answer: "",
            class:""
        }
    },
    {
        question: "",
        answer1: { 
            answer: "",
            class:""
        },
        answer2: { 
            answer: "",
            class:""
        },
        answer3: { 
            answer: "",
            class:""
        },
        answer4: { 
            answer: "",
            class:""
        }
    },
    {
        question: "",
        answer1: { 
            answer: "",
            class:""
        },
        answer2: { 
            answer: "",
            class:""
        },
        answer3: { 
            answer: "",
            class:""
        },
        answer4: { 
            answer: "",
            class:""
        }
    }
]

//Question array for path 3 - collapse if you value your life
const questionArray3 = [
    {
        question: "Are you religious?",
        answer1: { 
            answer: "Unless MUSIC is a religion then no sir *shreds on guitar*",
            class:"bard"
        },
        answer2: { 
            answer: "I'm a strong believer in the healing power of prayer",
            class:"cleric"
        },
        answer3: { 
            answer: "I believe in a higher power but I'm mostly about meditation, getting centred, feeling the vibes",
            class:"monk"
        },
        answer4: { 
            answer: "I would both kill and die for my faith. I am a literal CRUSADER. ALL SHALL FACE THE GLORY OF (insert deity here)",
            class:"paladin"
        }    
    },
    {
        question: "",
        answer1: { 
            answer: "",
            class:""
        },
        answer2: { 
            answer: "",
            class:""
        },
        answer3: { 
            answer: "",
            class:""
        },
        answer4: { 
            answer: "",
            class:""
        }
    },
    {
        question: "",
        answer1: { 
            answer: "",
            class:""
        },
        answer2: { 
            answer: "",
            class:""
        },
        answer3: { 
            answer: "",
            class:""
        },
        answer4: { 
            answer: "",
            class:""
        }
    },
    {
        question: "",
        answer1: { 
            answer: "",
            class:""
        },
        answer2: { 
            answer: "",
            class:""
        },
        answer3: { 
            answer: "",
            class:""
        },
        answer4: { 
            answer: "",
            class:""
        }
    },
    {
        question: "",
        answer1: { 
            answer: "",
            class:""
        },
        answer2: { 
            answer: "",
            class:""
        },
        answer3: { 
            answer: "",
            class:""
        },
        answer4: { 
            answer: "",
            class:""
        }
    },
    {
        question: "",
        answer1: { 
            answer: "",
            class:""
        },
        answer2: { 
            answer: "",
            class:""
        },
        answer3: { 
            answer: "",
            class:""
        },
        answer4: { 
            answer: "",
            class:""
        }
    },
    {
        question: "",
        answer1: { 
            answer: "",
            class:""
        },
        answer2: { 
            answer: "",
            class:""
        },
        answer3: { 
            answer: "",
            class:""
        },
        answer4: { 
            answer: "",
            class:""
        }
    }
]

//Path question object:
const pathQuestion = {
    path1: questionArray1,
    path2: questionArray2,
    path3: questionArray3
}

let currentQuestion = 0;
let questionArray = [];

const startQuiz = () => {
    //On click of button on start screen
    //Hide start screen
    switchDisplay("start-screen", false);

    //Show path-question
    switchDisplay("path-question", true);

}

const determinePath = () => {
    //On click of button on path screen

    //Select question array for path
    //questionArray = pathQuestion.(path.value).value
    pathValue = answerValueFunction("path");
    questionArray = pathQuestion[pathValue];

    //Hide path screen
    switchDisplay("path-question", false);

    //Show questions screen
    switchDisplay("question", true);
    nextQuestion();

}

const nextQuestion = () => {
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
    }
    //Use DOM to change question text
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

    //Use DOM to change input name
    let answer1Input = document.getElementById("answer1");
    let answer2Input = document.getElementById("answer2");
    let answer3Input = document.getElementById("answer3");
    let answer4Input = document.getElementById("answer4");

    answer1Input.name = "question" + currentQuestion;
    answer2Input.name = "question" + currentQuestion;
    answer3Input.name = "question" + currentQuestion;
    answer4Input.name = "question" + currentQuestion;

    //Use DOM to reset radio inputs
    answer1Input.checked = false;
    answer2Input.checked = false;
    answer3Input.checked = false;
    answer4Input.checked = false;

    //Use DOM to set value of answers to correct DND class for scoring
    answer1Input.value = questionArray[currentQuestion-1].answer1.class;
    answer2Input.value = questionArray[currentQuestion-1].answer2.class;
    answer3Input.value = questionArray[currentQuestion-1].answer3.class;
    answer4Input.value = questionArray[currentQuestion-1].answer4.class;

}

const trackScore = () => {
    //Where value = class, classObject.("class") ++;
    //STUCK!! How do I access this part of the class object??
    let questionName = "question" + currentQuestion;
    let answer = answerValueFunction(questionName);
    let property = classObject[answer]
    console.log(property.score);
    classObject.answer.score ++;
    console.log(classObject);
}

const displayResult = () => {
    //Check max scores and determine results type 
    //CURRENTLY UNTESTED
    let finalClass = "";
    let finalClassScore = 0;
    for (let j = 0; j<classObject.length; j++) {
        if (classObject[j].score.value > finalClassScore) {
            finalClassScore = classObject[j].score.value;
            finalClass = classObject[j];
        }
    }
    //Hide questions screen, display results screen (incl. restart button)
    switchDisplay("question", false);
    switchDisplay("results", true);
}

const restartQuiz = () => {
    //Onclick of restart button
    
    //hide results screen, display start screen
}


//REUSABLE: Switch display function
const switchDisplay = (id, status) => {
    let element = document.getElementById(id);
    let display = (status) ? "block" : "none";
    element.style.display = display;
}

//REUSABLE: Find answer value function
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

