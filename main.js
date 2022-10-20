document.addEventListener('DOMContentLoaded', () => {
    var cardArray = [
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
    const score = document.getElementById('score')
    const placeholder = ""

    var cardsClicked = []
    var cardsClickedId = []
    var cardsMatches = []

    // Create the board
    function createBoard() {
        for(let i=0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', placeholder)
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            board.appendChild(card)
        }
    }
})