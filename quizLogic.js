/* Functions needed:
1. Start quiz
2. Move question
3. Determine path
4. Track score
5. Display result
6. Restart

Will track scores with object/array of scores for each class.
*/

classArray = [
    {
        class: "barbarian",
        score: 0,
        img: "./images/barbarian.svg"
    },
    {
        class: "bard",
        score: 0,
        img: "./images/bard.svg"
    },
    {
        class: "cleric",
        score: 0,
        img: "./images/cleric.svg"
    },
    {
        class: "druid",
        score: 0,
        img: "./images/druid.svg"
    },
    {
        class: "fighter",
        score: 0,
        img: "./images/fighter.svg"
    },
    {
        class: "monk",
        score: 0,
        img: "./images/monk.svg"
    },
    {
        class: "paladin",
        score: 0,
        img: "./images/paladin.svg"
    },
    {
        class: "ranger",
        score: 0,
        img: "./images/ranger.svg"
    },
    {   
        class: "rogue",
        score: 0,
        img: "./images/rogue.svg"
    },
    {
        class: "sorcerer",
        score: 0,
        img: "./images/sorcerer.svg"
    },
    {
        class: "warlock",
        score: 0,
        img: "./images/warlock.svg"
    },
    {
        class: "wizard",  
        score: 0,
        img: "./images/wizard.svg"
    }
]

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
        question: "What's your favourite animal?",
        answer1: { 
            answer: "Hmm...maybe a rat? Or a bat? Or a snake?",
            class:"rogue"
        },
        answer2: { 
            answer: "ONE I CAN RIDE INTO BATTLE!",
            class:"barbarian"
        },
        answer3: { 
            answer: "Something cool like a tiger ",
            class:"fighter"
        },
        answer4: { 
            answer: "All. Of. Them.",
            class:"ranger"
        }
    },
    {
        question: "What would be your strategy for surviving an apocalytic event?",
        answer1: { 
            answer: "Hide 'til it's all over",
            class:"rogue"
        },
        answer2: { 
            answer: "Utilise my expert tracking skills to become a master of this new, challenging environment",
            class:"ranger"
        },
        answer3: { 
            answer: "Acquire a rag-tag team of misfits and take out anyone that stands in our way",
            class:"fighter"
        },
        answer4: { 
            answer: "RUN HEADLONG AT THE APOCALYPSE AND DIE A GLORIOUS DEATH!",
            class:"barbarian"
        }
    },
    {
        question: "Favourite food?",
        answer1: { 
            answer: "Popcorn, while I'm watching the events of a battle unfold from the shadows",
            class:"rogue"
        },
        answer2: { 
            answer: "MEAT!",
            class:"barbarian"
        },
        answer3: { 
            answer: "I dunno I guess a burger?",
            class:"fighter"
        },
        answer4: { 
            answer: "Venison, fresh from the tip of my arrow",
            class:"ranger"
        }
    },
    {
        question: "Favourite song?",
        answer1: { 
            answer: "Eye of the Tiger - Survivor",
            class:"fighter"
        },
        answer2: { 
            answer: "Bodies - Drowning Pool",
            class:"barbarian"
        },
        answer3: { 
            answer: "bad guy - Billie Eilish",
            class:"rogue"
        },
        answer4: { 
            answer: "Wagon Wheel - Old Crow Medicine Show",
            class:"ranger"
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
        question: "Favourite song?",
        answer1: { 
            answer: "White Winter Hymnal - Fleet Foxes",
            class:"druid"
        },
        answer2: { 
            answer: "Butterfly - Crazy Town",
            class:"warlock"
        },
        answer3: { 
            answer: "Firestarter - The Prodigy",
            class:"sorcerer"
        },
        answer4: { 
            answer: "Season of the Witch - Donovan",
            class:"wizard"
        }
    },
    {
        question: "",
        answer1: { 
            answer: "",
            class:"warlock"
        },
        answer2: { 
            answer: "",
            class:"sorcerer"
        },
        answer3: { 
            answer: "",
            class:"wizard"
        },
        answer4: { 
            answer: "",
            class:"druid"
        }
    },
    {
        question: "",
        answer1: { 
            answer: "",
            class:"wizard"
        },
        answer2: { 
            answer: "",
            class:"druid"
        },
        answer3: { 
            answer: "",
            class:"warlock"
        },
        answer4: { 
            answer: "",
            class:"sorcerer"
        }
    },
    {
        question: "",
        answer1: { 
            answer: "",
            class:"sorcerer"
        },
        answer2: { 
            answer: "",
            class:"warlock"
        },
        answer3: { 
            answer: "",
            class:"druid"
        },
        answer4: { 
            answer: "",
            class:"wizard"
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
        question: "Favourite song?",
        answer1: { 
            answer: "Like a Prayer - Madonna",
            class:"cleric"
        },
        answer2: { 
            answer: "Kung-Fu Fighting - Carl Douglas",
            class:"monk"
        },
        answer3: { 
            answer: "Faith - George Michael",
            class:"monk"
        },
        answer4: { 
            answer: "Thank You for the Music - ABBA",
            class:"bard"
        }
    },
    {
        question: "",
        answer1: { 
            answer: "",
            class:"bard"
        },
        answer2: { 
            answer: "",
            class:"monk"
        },
        answer3: { 
            answer: "",
            class:"paladin"
        },
        answer4: { 
            answer: "",
            class:"cleric"
        }
    },
    {
        question: "",
        answer1: { 
            answer: "",
            class:"cleric"
        },
        answer2: { 
            answer: "",
            class:"paladin"
        },
        answer3: { 
            answer: "",
            class:"bard"
        },
        answer4: { 
            answer: "",
            class:"monk"
        }
    },
    {
        question: "",
        answer1: { 
            answer: "",
            class:"monk"
        },
        answer2: { 
            answer: "",
            class:"bard"
        },
        answer3: { 
            answer: "",
            class:"cleric"
        },
        answer4: { 
            answer: "",
            class:"paladin"
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
    //Called on click of button on path screen
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

const nextQuestion = () => {
    //Called first in determinePath() and then repeatedly on click of next question button
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

const trackScore = () => {
    //Called in nextQuestion()
    //Where answer = class, add to class score
    if (currentQuestion > 0) {
        let questionName = "question" + currentQuestion;
        let answer = answerValueFunction(questionName);
        currentClassObject = classArray.find((a) => a.class === answer);
        currentClassObject.score ++;
    }
}

const displayResult = () => {
    //Called when currentQuestion reaches max
    //Check max scores and determine results type 
    let finalClass = "";
    let finalClassScore = 0;
    let finalClassImg = "";
    for (let j = 0; j < classArray.length; j++) {
        if (classArray[j].score > finalClassScore) {
            finalClassScore = classArray[j].score;
            finalClass = classArray[j].class;
            finalClassImg = classArray[j].img
        }
    }

    //Change text and image dependent on result
    let resultsText = document.getElementById("results-type");
    let resultsImage = document.getElementById("results-image");
    resultsText.innerText = capitalLetter(finalClass);
    resultsImage.src = finalClassImg;

    //Hide questions screen, display results screen (incl. restart button)
    switchDisplay("question", false);
    switchDisplay("results", true);
}

const restartQuiz = () => {
    //Called on click of restart button
    //Reset score and path values
    currentQuestion = 0;
    questionArray = [];
    for (i=0; i < classArray.length; i++) {
        classArray[i].score = 0;
    }
    
    //hide results screen, display start screen
    switchDisplay("results", false);
    switchDisplay("start-screen", true);
}

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

//REUSABLE: Switch display function
const switchDisplay = (id, status) => {
    let element = document.getElementById(id);
    let display = (status) ? "flex" : "none";
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

//REUSABLE: Capitalise class names for display
const capitalLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//REUSABLE: Reset radio inputs
const resetInput = (name) => {
    let inputsArray = document.getElementsByName(name);
    for (let i = 0; i < inputsArray.length; i++) {
        if (inputsArray[i].checked) {
            inputsArray[i].checked = false;
        }
    }
}