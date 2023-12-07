//Array of classes, scores and images
const classArray = [
    {
        class: "barbarian",
        score: 0,
        img: "./images/barbarian.svg",
        link: "https://www.dndbeyond.com/classes/barbarian"
    },
    {
        class: "bard",
        score: 0,
        img: "./images/bard.svg",
        link: "https://www.dndbeyond.com/classes/bard"
    },
    {
        class: "cleric",
        score: 0,
        img: "./images/cleric.svg",
        link: "https://www.dndbeyond.com/classes/cleric"
    },
    {
        class: "druid",
        score: 0,
        img: "./images/druid.svg",
        link: "https://www.dndbeyond.com/classes/druid"
    },
    {
        class: "fighter",
        score: 0,
        img: "./images/fighter.svg",
        link: "https://www.dndbeyond.com/classes/fighter"
    },
    {
        class: "monk",
        score: 0,
        img: "./images/monk.svg",
        link: "https://www.dndbeyond.com/classes/monk"
    },
    {
        class: "paladin",
        score: 0,
        img: "./images/paladin.svg",
        link: "https://www.dndbeyond.com/classes/paladin"
    },
    {
        class: "ranger",
        score: 0,
        img: "./images/ranger.svg",
        link: "https://www.dndbeyond.com/classes/ranger"
    },
    {   
        class: "rogue",
        score: 0,
        img: "./images/rogue.svg",
        link: "https://www.dndbeyond.com/classes/rogue"
    },
    {
        class: "sorcerer",
        score: 0,
        img: "./images/sorcerer.svg",
        link: "https://www.dndbeyond.com/classes/sorcerer"
    },
    {
        class: "warlock",
        score: 0,
        img: "./images/warlock.svg",
        link: "https://www.dndbeyond.com/classes/warlock"
    },
    {
        class: "wizard",  
        score: 0,
        img: "./images/wizard.svg",
        link: "https://www.dndbeyond.com/classes/wizard"
    }
]

//Question array for path 1 (Barbarian, Fighter, Ranger, Rogue) - collapse if you value your life
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
            answer: "Popcorn, while I'm watching some drama unfold from the corner",
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
            answer: "Freshly hunted venison",
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

//Question array for path 2 (Druid, Sorcerer, Wizard, Warlock) - collapse if you value your life
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
            answer: "Powers is the things the big nice demon man gave me in exchange for my soul",
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
        question: "What do you want to be when you grow up?",
        answer1: { 
            answer: "Someone's trophy wife",
            class:"warlock"
        },
        answer2: { 
            answer: "Rich and powerful",
            class:"sorcerer"
        },
        answer3: { 
            answer: "An expert in my chosen field",
            class:"wizard"
        },
        answer4: { 
            answer: "A gardener",
            class:"druid"
        }
    },
    {
        question: "Accessorize! What are you pairing your outfit with tonight?",
        answer1: { 
            answer: "A pair of round spectacles with a brass rim",
            class:"wizard"
        },
        answer2: { 
            answer: "Socks and sandals",
            class:"druid"
        },
        answer3: { 
            answer: "A diamond tennis bracelet from my rich and powerful husband",
            class:"warlock"
        },
        answer4: { 
            answer: "Some fireproof leather gloves",
            class:"sorcerer"
        }
    },
    {
        question: "Who do you look up to?",
        answer1: { 
            answer: "My ancestors",
            class:"sorcerer"
        },
        answer2: { 
            answer: "Whoever buys me things",
            class:"warlock"
        },
        answer3: { 
            answer: "Mother Earth",
            class:"druid"
        },
        answer4: { 
            answer: "Those who have studied my craft before me",
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
            class:"paladin"
        },
        answer4: { 
            answer: "Thank You for the Music - ABBA",
            class:"bard"
        }
    },
    {
        question: "What makes you smile?",
        answer1: { 
            answer: "A sick guitar riff",
            class:"bard"
        },
        answer2: { 
            answer: "Peace and tranquillity",
            class:"monk"
        },
        answer3: { 
            answer: "Converting heathens",
            class:"paladin"
        },
        answer4: { 
            answer: "Helping others",
            class:"cleric"
        }
    },
    {
        question: "What's your strategy for dealing with a hostile enemy?",
        answer1: { 
            answer: "I'm a lover not a fighter! Stay far away and help out whoever's in trouble",
            class:"cleric"
        },
        answer2: { 
            answer: "Say a quick prayer and run straight in to save the day",
            class:"paladin"
        },
        answer3: { 
            answer: "Get everyone dancing! Can't be mad if you're dancing",
            class:"bard"
        },
        answer4: { 
            answer: "Punch it til it dies",
            class:"monk"
        }
    },
    {
        question: "What was your favourite subject at school?",
        answer1: { 
            answer: "Gymnastics",
            class:"monk"
        },
        answer2: { 
            answer: "Music",
            class:"bard"
        },
        answer3: { 
            answer: "Biology",
            class:"cleric"
        },
        answer4: { 
            answer: "Religious Studies",
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
