document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name:'card-1',
            img:""
        },
        {
            name:'card-2',
            img:""
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
            img:""
        },
        {
            name:'card-2',
            img:""
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
    const placeholder = "https://loremflickr.com/100/100"

    var cardsClicked = []
    var cardsClickedId = []

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

    createBoard()
})