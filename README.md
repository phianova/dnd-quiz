# js-quiz-assignment
Assignment 2 for TDA development bootcamp - JS-based quiz.

Project Brief below.

## Aims ##
I aim to create a quiz as detailed in the project brief below, determining which DND character class you should choose based on your personality.

I'm going to try and implement not quite a "mostly As" style scoring system but a slightly more complex one, where the answers are less obviously associated with the same thing each time. I want there to be more than four results options.

I'll either have results options that altogether add up to each of the 12 classes, OR I'll have two different "paths" the quiz can end up going down depending on an initial question set.

I'd also like the results page to display an image/card based on the result.

## Project Brief ##
_The aim of this project is to create a quiz that will ask a series of questions and produce a result
on completion of all the questions.
The quiz can take the form of “mostly a’s” type scoring (although this should be calculated
automatically for the user rather than relying on them adding it up) or can use a more complex
scoring system to calculate the result.
You can use the provided personality quiz to provide the questions and result or you can be
more creative and make something like this Harry Potter sorting hat quiz .
Extra bragging rights will be awarded for creativity in the subject and presentation of your quiz._

### Your Project ###
_The quiz should be created using HTML, CSS and JavaScript. The quiz should include the
following functionality:

1. A Single HTML page. The user should not move from the page when answering
the questions or getting the results.
2. A simple design that uses ~~bootstrap~~ Tailwind CSS elements to manage layout.
~~3. A separate css file should be used for styling the page.~~
4. The quiz should consist of at least 5 multiple choice questions.
5. The quiz should process the users responses and produce a result at the end.
6. Questions not in use should be hidden.
7. User response could be either by selecting a radio button or clicking a picture link
but should not use popup boxes or text entry.
8. The result should be hidden until the end.
9. Initial information about the quiz should be displayed when the user first opens
the page. This should be hidden whilst the user answers questions and when the
results are displayed.
10. Functions should be reused where possible._

### Extension ###
_Store the JavaScript functions in a separate file and abstract them so some can be
reused to score and present a second set of questions on a separate HTML page._


## Logic map ##
Classes available:
- Barbarian
- Bard
- Cleric
- Druid
- Fighter
- Monk
- Paladin
- Ranger
- Rogue
- Sorcerer
- Warlock
- Wizard

Initial question: How magical are you?
Options:
1. Ew, not at all. Let's keep it real here. - leads to: Barbarian, Fighter, Ranger, Rogue
2. Magic runs through my veins! Watch me bend this spoon! - leads to: Druid, Sorcerer, Warlock, Wizard
3. Maybe I got a lil' sparkle in me... - leads to: Bard, Cleric, Monk, Paladin

From there, we get a different set of questions per path:
Path One:
1. In a battle sitch, where do you want to be?
    Options:
    a. CHAAAAAAARGEEEEEE! (Barbarian)
    b. Gettin' all up in their business (Fighter)
    c. Far, far away! But I'm not scared, I- I promise! (Ranger)
    d. Waiting in the shadows (Rogue)

Path Two:
1. What is power?
    Options:
    a. The life force of the Earth, harnessed by becoming one with it. A mighty natural force (Druid)
    b. The glory of my bloodline. The gift of my ancestors. I. Am. Power. (Sorceror)
    c. Knowledge, honed and built up over centuries (Wizard)
    d. I don't know but daddy gave me magic fingies :3 (Warlock)


Path Three:
1. Are you religious?
    Options:
    a. Unless MUSIC is a religion then no sir * shreds on guitar * (Bard)
    b. I'm a strong believer in the healing power of prayer (Cleric)
    c. I believe in a higher power but I'm mostly about meditation, getting centred, feeling the vibes (Monk)
    d. I would both kill and die for my faith. I am a literal CRUSADER. ALL SHALL FACE THE GLORY OF (insert deity here) (Paladin)


