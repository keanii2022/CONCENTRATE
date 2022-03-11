    //PROMPT//
    var userName = prompt('WHAT IS YOUR NAME? Type it in and press OK to start')
    //START GAME//
    // function init () {
    //     board = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,]
    //     attempts = [null]
    //     }
    //STATE VARIABLES//
    let testCards = [

    {front:'https://external-preview.redd.it/KZstz_h1NDJxIy_hpQG0Bpe6AdI5gHgbnDGTNYEtXXo.jpg?auto=webp&s=9ec351afd820024825f7c342f7e048bcc0a44561',
    back: 'https://games.lol/wp-content/uploads/2020/08/among-us-free-full-version-150x150.jpg.webp',
    id: 1},

    {front:'https://is3-ssl.mzstatic.com/image/thumb/Purple114/v4/e4/32/52/e4325222-d1d6-c01e-4df0-b917f5878ccd/source/256x256bb.jpg',
    back: 'https://games.lol/wp-content/uploads/2020/08/among-us-free-full-version-150x150.jpg.webp',
    id: 2},

    {front:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPi_YxpfxUGGoP5qxzFPOuzftLmg-uCCPS4Q&usqp=CAU',
    back: 'https://games.lol/wp-content/uploads/2020/08/among-us-free-full-version-150x150.jpg.webp',
    id: 3},

    {front:'https://www.androidfreeware.net/img2/among-us-soundboard-sound-effect-crewmate-imposter.jpg',
    back: 'https://games.lol/wp-content/uploads/2020/08/among-us-free-full-version-150x150.jpg.webp',
    id: 4},

    {front:'https://external-preview.redd.it/kH6RTFKE40_NpoSyWQx_Lj9GDGNGO1Atenr3jcMdd64.jpg?auto=webp&s=ac80cee1cc3df35f32c1aadb7f00cfb4bbeade0d',
    back: 'https://games.lol/wp-content/uploads/2020/08/among-us-free-full-version-150x150.jpg.webp',
    id: 5},

    {front:'https://external-preview.redd.it/9-A-34ddmlXCMrLCTPrJ7MwTiqzZXycQOKC178vHMPs.jpg?auto=webp&s=2f0ea9f9b0c2631ba31183b8f49ec439b14c1ce4',
    back: 'https://games.lol/wp-content/uploads/2020/08/among-us-free-full-version-150x150.jpg.webp',
    id: 6},
    ]

    document.getElementById('1') 
    let card1 = document.getElementById('1').childNodes[1]
    card1.src = testCards[0].back
    card1.value = testCards[0].id
    console.log(card1.value)

    document.getElementById('2') 
    let card2 = document.getElementById('2').childNodes[1]
    card2.src = testCards[0].back
    card2.value = testCards[1].id
    console.log(card2.value)

    document.getElementById('3') 
    let card3 = document.getElementById('3').childNodes[1]
    card3.src = testCards[0].back
    card3.value = testCards[2].id
    console.log(card3.value)

    document.getElementById('4') 
    let card4 = document.getElementById('4').childNodes[1]
    card4.src = testCards[0].back
    card4.value = testCards[3].id
    console.log(card4.value)

    document.getElementById('5') 
    let card5 = document.getElementById('5').childNodes[1]
    card5.src = testCards[0].back
    card5.value = testCards [4].id
    console.log(card5.value)

    document.getElementById('6') 
    let card6 = document.getElementById('6').childNodes[1]
    card6.src = testCards[0].back
    card6.value = testCards[5].id
    console.log(card6.value)

    document.getElementById('7') 
    let card7 = document.getElementById('7').childNodes[1]
    card7.src = testCards[0].back
    card7.value = testCards[0].id
    console.log(card7.value)

    document.getElementById('8') 
    let card8 = document.getElementById('8').childNodes[1]
    card8.src = testCards[0].back
    card8.value = testCards[1].id
    console.log(card8.value)

    document.getElementById('9') 
    let card9 = document.getElementById('9').childNodes[1]
    card9.src = testCards[0].back
    card9.value = testCards[2].id
    console.log(card9.value)

    document.getElementById('10') 
    let card10 = document.getElementById('10').childNodes[1]
    card10.src = testCards[0].back
    card10.value = testCards[3].id
    console.log(card10.value)

    document.getElementById('11') 
    let card11 = document.getElementById('11').childNodes[1]
    card11.src = testCards[0].back
    card11.value = testCards[4].id
    console.log(card11.value)
    
    document.getElementById('12') 
    let card12 = document.getElementById('12').childNodes[1]
    card12.src = testCards[0].back
    card12.value = testCards[5].id
    console.log(card12.value)

    let board = []
    let clicks = 0
    let twoClicks = []
    let divIds = []
    let matches = 0

    //CACHED ELEMENTS//
    const divEl = document.querySelector('.row')
    const cardEl = document.querySelector('.card')
    const clicksEl = document.querySelector('#clicks')
    let winDivEl1 = document.querySelector('.winDiv1')
    let winDivEl2 = document.querySelector('.winDiv2')
    let winDivEl3 = document.querySelector('.winDiv3')

    // EVENT LISTENER BELOW (1)\\
    // USER CLICKS ON TWO BOXES IN divEl 

    divEl.addEventListener('click', function(evt) {
        twoClicks.push(evt.target.value)
        clicks ++ 
        clicksEl.textContent = clicks
        // GAME: FLIPS IMAGE/CHECKS IF THE IMAGES MATCH
        let idx = testCards.findIndex(function(card) {   
            return card.id === evt.target.value
        }) 
        //IF THEY MATCH - NOTHING HAPPENS
        // IF IMAGES DONT MATCH, REVERT BACK TO ORIGINAL STATE,
        evt.target.src = testCards[idx].front
        divIds.push(evt.target.parentElement.id)
        if (twoClicks.length === 2)       
        {
        if(twoClicks[0] !== twoClicks[1]){   
            setTimeout(function() 
            {document.getElementById(divIds[0]).childNodes[1].src = testCards[0].back
            document.getElementById(divIds[1]).childNodes[1].src = testCards[0].back}, 500)
        } 
        setTimeout(function() {
            twoClicks.length = 0
        divIds.length = 0   
        }, 600)
        }      
        if(clicks === 12) {
            winDivEl1.textContent = 'LOCKED IN, LETS GO'
        } else if(clicks == 13) 
        winDivEl2.textContent = '..........scratch that, try again.(you lost, buddy)'
        if(clicks === 15) {
            winDivEl3.textContent = 'you are cheating >:/'
        }
        }
        )
    // USER KEEPS CLICKING UNTIL ALL CARDS HAVE BEEN RENDERED
    // SCORING:BASED ON NUMBER OF CLICKS/ATTEMPTS,
     
    //NO LOSE LOGIC BECAUSE WE DONT LOSE WE WIN
// ICEBOX: "YOU WIN" ALERT WHEN MATCHES MATCH
//ICEBOX: MUSIC
//FUTURE ENHANCEMENTS: EACH DIV CAN ONLY BE CLICKED ONCE AND THEN DISABLED