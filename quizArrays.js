//Array of classes, scores and images
const classArray = [
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
