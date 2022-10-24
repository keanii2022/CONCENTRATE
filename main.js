document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name:'card-1',
            img:"https://i.imgur.com/fDstWiz.png"
        },
        {
            name:'card-2',
            img:"https://i.imgur.com/t6ZL26V.jpg"
        },
        {
            name:'card-3',
            img:""
        },
        {
            name:'card-4',
            img:""
        },
        {
            name:'card-5',
            img:""
        },
        {
            name:'card-6',
            img:""
        },
        {
            name:'card-1',
            img:"https://i.imgur.com/fDstWiz.png"
        },
        {
            name:'card-2',
            img:"https://i.imgur.com/t6ZL26V.jpg"
        },
        {
            name:'card-3',
            img:""
        },
        {
            name:'card-4',
            img:""
        },
        {
            name:'card-5',
            img:""
        },
        {
            name:'card-6',
            img:""
        },
    ]
    cardArray.sort(() => 0.5 - Math.random())
    
    const board = document.querySelector('.board')
    const attempts = document.getElementById('attempts')
    const placeholder = "https://loremflickr.com/100/100"
    const blank = ""

    var cardsClicked = []
    var cardsClickedId = []
    var cardMatches = []

    // Create the board
    function createBoard() {
        for(let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', placeholder)
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            board.appendChild(card)
        }
    }

    //flipCard function
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsClicked.push(cardArray[cardId].name)
        cardsClickedId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsClicked.length ===2) {
            setTimeout(checkForMatch, 400)
        }
    }

    // checkForMatch function
    function checkForMatch() {
        var cards = document.querySelectorAll;('img')
        const firstCard = cardsClickedId[0]
        const secondCard = cardsClickedId[1]
    
        if(firstCard === secondCard) {
            cards[firstCard].setAttribute('src', placeholder)
            cards[secondCard].setAttribute('src', placeholder)
            alert('GOOD JOB DUDE!')
        }
        else if (cardsClicked[0] === cardsClicked [1]) {
            cards[firstCard].setAttribute('src', blank)
            cards[secondCard].setAttribute('src', blank)
            cards[firstCard].removeEventListener('click', flipCard)
            cards[secondCard].removeEventListener('click', flipCard)
            cardsMatched.push(cardsClicked)
        }
        else {
            setTimeout(() => {
                cards[firstCard].setAttribute('src', placeholder)
                cards[secondCard].setAttribute('src', placeholder)
            }, 350)
        }
        cardsClicked = []
        cardsClickedId = []
        result.textContent = cardsMatched.length 
        if (cardsMatched.length === cardArray.length/2) {
            result.textContent = 'YOOO YOU WON'
        }
    }

    createBoard()
})