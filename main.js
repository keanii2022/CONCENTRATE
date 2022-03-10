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
let testCard = {
    front:'https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/240672537_1204656580051848_4414292322553119668_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=QYZAaxt4svoAX-nxLB0&_nc_ht=scontent-sjc3-1.xx&oh=00_AT_0ScMT2bW5Hvxq5SBeCm0aTa9lVGCYQBKne6LDlQsgaA&oe=622D9D0D',
    back: 'https://games.lol/wp-content/uploads/2020/08/among-us-free-full-version-150x150.jpg.webp',
    id: 1
}

document.getElementById('1') 
let card1 = document.getElementById('1').childNodes[1]
console.log(card1)

card1.src = testCard.back

document.getElementById('2') 
let card2 = document.getElementById('2').childNodes[1]
console.log(card2)

card2.src = testCard.back

document.getElementById('3') 
let card3 = document.getElementById('3').childNodes[1]
console.log(card3)

card3.src = testCard.back

document.getElementById('4') 
let card4 = document.getElementById('4').childNodes[1]
console.log(card4)

card4.src = testCard.back

document.getElementById('5') 
let card5 = document.getElementById('5').childNodes[1]
console.log(card5)

card5.src = testCard.back

document.getElementById('6') 
let card6 = document.getElementById('6').childNodes[1]
console.log(card6)

card6.src = testCard.back

document.getElementById('7') 
let card7 = document.getElementById('7').childNodes[1]
console.log(card7)

card7.src = testCard.back

document.getElementById('8') 
let card8 = document.getElementById('8').childNodes[1]
console.log(card8)

card8.src = testCard.back

document.getElementById('9') 
let card9 = document.getElementById('9').childNodes[1]
console.log(card9)

card9.src = testCard.back

document.getElementById('10') 
let card10 = document.getElementById('10').childNodes[1]
console.log(card10)

card10.src = testCard.back

document.getElementById('11') 
let card11 = document.getElementById('11').childNodes[1]
console.log(card11)

card11.src = testCard.back

document.getElementById('12') 
let card12 = document.getElementById('12').childNodes[1]
console.log(card12)

card12.src = testCard.back

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
    card1.src = testCard.front
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
