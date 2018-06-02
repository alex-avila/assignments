// It's computer's turn
// look at every possible move one level deep
// if one yields a win return the move associated


let ai = {
    getState(board, contender) {
        const winConditions = [
            ['topL', 'topM', 'topR'],
            ['midL', 'midM', 'midR'],
            ['botL', 'botM', 'botR'],
            ['topL', 'midM', 'botR'],
            ['topR', 'midM', 'botL'],
            ['topL', 'midL', 'botL'],
            ['topM', 'midM', 'botM'],
            ['topR', 'midR', 'botR'],
        ]
        for (let i = 0; i < winConditions.length; i++) {
            let [a, b, c] = winConditions[i]
            if (board[a] === contender && board[b] === contender && board[c] === contender) {
                return 1
            }
        }
        return 0
    },


    // go through every available move
    // run getState on each
    // if getState finds that there is a win condition met
    // push the number '1' to the results
    // if it doesn't run this function again
    // this function should add to the extisting array an array
    // results: [],
    getBestMove(board, contender, moves) {
        // win = 1
        // lose = -1
        // inconclusive = 0
        const results = []
        for (let i = 0; i < moves.length; i++) {
            let boardCopy = { ...board, [moves[i]]: contender}
            if (this.getState(boardCopy, contender) === 1) {
                results.push(1)
            } else {
                results.push(0)
            }
        }

        for (let i = 0; i < results.length; i++) {
            if (results[i] === 1) {
                return moves[i]
            }
        }
        return moves[Math.floor(Math.random() * moves.length)]

        // alternate contender
        // contender = contender === 'o' ? 'x' : 'o'
        // this.getBestMove(board, contender, moves)
    }
}

export default ai
