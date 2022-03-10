//PROMPT
var userName = prompt('WHAT IS YOUR NAME? Type it in and press OK to start')

///DAILY GOAL: LIMIT THE CLICKS IN THE twoClicks array - done
              //  Write the match function - done
              // git add git commit?
//NEW GOAL: FRONT PICS NEED VALUES? -ID 
//NEED TO FINISH: ADD FACE CARDS/ ADD VALUES/ WHEN MATCHED CARDS STAY FACING .front - TOGGLE BETWEEN

// 

//


//STATE VARIABLES 
let testCards = [{
    front:'https://external-preview.redd.it/KZstz_h1NDJxIy_hpQG0Bpe6AdI5gHgbnDGTNYEtXXo.jpg?auto=webp&s=9ec351afd820024825f7c342f7e048bcc0a44561',
    back: 'https://games.lol/wp-content/uploads/2020/08/among-us-free-full-version-150x150.jpg.webp',
    id: 1},
    {front:'https://is3-ssl.mzstatic.com/image/thumb/Purple114/v4/e4/32/52/e4325222-d1d6-c01e-4df0-b917f5878ccd/source/256x256bb.jpg',
    // back: 'https://games.lol/wp-content/uploads/2020/08/among-us-free-full-version-150x150.jpg.webp',
    id: 2},
    {front:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPi_YxpfxUGGoP5qxzFPOuzftLmg-uCCPS4Q&usqp=CAU',
    // back: 'https://games.lol/wp-content/uploads/2020/08/among-us-free-full-version-150x150.jpg.webp',
    id: 3},
    {front:'https://www.androidfreeware.net/img2/among-us-soundboard-sound-effect-crewmate-imposter.jpg',
    // back: 'https://games.lol/wp-content/uploads/2020/08/among-us-free-full-version-150x150.jpg.webp',
    id: 4},
    {front:'https://external-preview.redd.it/kH6RTFKE40_NpoSyWQx_Lj9GDGNGO1Atenr3jcMdd64.jpg?auto=webp&s=ac80cee1cc3df35f32c1aadb7f00cfb4bbeade0d',
    // back: 'https://games.lol/wp-content/uploads/2020/08/among-us-free-full-version-150x150.jpg.webp',
    id: 5},
    {front:'https://external-preview.redd.it/9-A-34ddmlXCMrLCTPrJ7MwTiqzZXycQOKC178vHMPs.jpg?auto=webp&s=2f0ea9f9b0c2631ba31183b8f49ec439b14c1ce4',
    // back: 'https://games.lol/wp-content/uploads/2020/08/among-us-free-full-version-150x150.jpg.webp',
    id: 6},
]

document.getElementById('1') 
let card1 = document.getElementById('1').childNodes[1]
console.log(card1)

card1.src = testCards[0].back

document.getElementById('2') 
let card2 = document.getElementById('2').childNodes[1]
console.log(card2)

card2.src = testCards[0].back

document.getElementById('3') 
let card3 = document.getElementById('3').childNodes[1]
console.log(card3)

card3.src = testCards[0].back

document.getElementById('4') 
let card4 = document.getElementById('4').childNodes[1]
console.log(card4)

card4.src = testCards[0].back

document.getElementById('5') 
let card5 = document.getElementById('5').childNodes[1]
console.log(card5)

card5.src = testCards[0].back

document.getElementById('6') 
let card6 = document.getElementById('6').childNodes[1]
console.log(card6)

card6.src = testCards[0].back

document.getElementById('7') 
let card7 = document.getElementById('7').childNodes[1]
console.log(card7)

card7.src = testCards[0].back

document.getElementById('8') 
let card8 = document.getElementById('8').childNodes[1]
console.log(card8)

card8.src = testCards[0].back

document.getElementById('9') 
let card9 = document.getElementById('9').childNodes[1]
console.log(card9)

card9.src = testCards[0].back

document.getElementById('10') 
let card10 = document.getElementById('10').childNodes[1]
console.log(card10)

card10.src = testCards[0].back

document.getElementById('11') 
let card11 = document.getElementById('11').childNodes[1]
console.log(card11)

card11.src = testCards[0].back

document.getElementById('12') 
let card12 = document.getElementById('12').childNodes[1]
console.log(card12)

card12.src = testCards[0].back

// randomize, and place 6 pictures on the board twice, for the .front which is equal to id . when you click it changes source from. front to .back


let board
let attempts = 0
let twoClicks = []
console.log(typeof board)
console.log(twoClicks)
console.log(typeof twoClicks.length)

//CACHED ELEMENTS
const divEl = document.querySelector('.row')
const cardEl = document.querySelector('.card')
console.log(divEl, cardEl)
console.log(typeof divEl, cardEl)
// EVENT LISTENERS // record data from clicks inside divEl

// Access them to compare, depending on amount of clicks(2), either keep clicking or call match function
// click data goes into array, length = 2 compare el 0 to 1 and stop clicks


divEl.addEventListener('click', function(evt) {
    // console.log(evt.target)
    twoClicks.push(evt.target.textContent)
    card1.src = testCards[0].front
    // card2.src = testCards[1].front
    // card3.src = testCards[2].front
    // card4.src = testCards[3].front
    // card5.src = testCards[4].front
    // card6.src = testCards[5].front
    // card7.src = testCards[6].front
    // card8.src = testCards[0].front
    // card9.src = testCards[1].front
    // card10.src = testCards[2].front
    // card11.src = testCards[3].front
    // card12.src = testCards[4].front
    // console.log(twoClicks)

    if (twoClicks.length === 2) {
        if(twoClicks[0] === twoClicks[1]){        
            console.log('true') 
        } else {
            console.log('false')
        }
        twoClicks.length = 0
    } 
           
       
} 


    
)
console.log(addEventListener)



        //.splice to empty array - if two clicks are true, clear array
        // css display, get grid to show nothing, when you click the css changes to display the number inside


        // if the cards match, we want them to stay.
        //if not we want them to hide the number..









// console.log('MOCKS DATA', evt.target.innerText)
// FUNCTIONS 
// GAME LOADS: Init the board/game

function init () {
    board = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,]
    attempts = [null]
}

// USER CLICKS ON A BOX - RENDERS 
function handlePlayerClicks() {

    // divEl.forEach(click => {
    //     twoClicks === 
    // });

}

// function checkForMatch() {
    // let firstCard = cardEl[0];
    // let secondCard = cardEl[1];

// }

function render () {

     
    }
    






// USER CLICKS ON A BOX - RENDERS 

// USER HAS TO CLICK A SECOND BOX - ANOTHER IMAGE RENDERS

// GAME: CHECKS IF THE IMAGES MATCH

// IF IMAGES MATCH, THEY STAY ON THE BOARD

//  IMAGES STAY RENDERED

//  IF IMAGES DONT MATCH - RENDER BACK TO ORIGINAL STATE

// USER KEEPS CLICKING UNTIL ALL CARDS HAVE BEEN RENDERED

// SCORING:
// BASED ON NUMBER OF CLICKS/ATTEMPTS

// WHEN GAME ENDS - RESTART BUTTON - RENDER SCORE

// LEAVE BOXES AS IS, CLICK 1 AND CLICK THE OTHER 1 AND RETURN TRUE OR FALSE VALUE - MATCH? IF STATEMENT
//LOOK UP CSS HOW TO COVER INSIDE CONTENT, WRITE JS FOR WHEN YOU CLICK - INNER TEXT SHOWS UP
