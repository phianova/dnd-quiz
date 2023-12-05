/* Functions needed:
1. Start quiz
2. Move question
3. Determine path
4. Track score
5. Display result
6. Restart

Will track scores with object/array of scores for each class.
*/

scoreObject = {
    bard: 0,
    barbarian: 0,
    cleric: 0,
    druid: 0,
    fighter: 0,
    monk: 0,
    paladin: 0,
    ranger: 0,
    rogue: 0,
    sorcerer: 0,
    warlock: 0,
    wizard: 0
}


//Path question object:
pathQuestion = {
    path1: questionArray1,
    path2: questionArray2,
    path3: questionArray3
}


let currentQuestion = 0;
let questionArray = [];

const startQuiz = () => {
    //On click of button on start screen
    //Hide start screen
    //Show path-question

}

const determinePath = () => {
    //On click of button on path screen

    //Select question array for path
    //questionArray = pathQuestion.(path.value).value

    //Hide path screen

    //Show questions screen

}

const nextQuestion = () => {
    //Call trackScore function
    trackScore();
    //Increment current question upward

    //If currentQuestion is at max, call displayResult()
    
    //Use DOM to change question text

    
}

const trackScore = () => {
    //Where value = class, scoreObject.(name "class") ++;

}

const displayResult = () => {
    //Check max scores and determine results type

    //Hide questions screen, display results screen (incl. restart button)

}

const restartQuiz = () => {
    //Onclick of restart button
    
    //hide results screen, display start screen
}




//Question array for path 1

questionArray1 = [
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

//Question array for path 2

questionArray2 = [
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

//Question array for path 3

questionArray3 = [
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