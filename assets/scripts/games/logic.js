'use strict'

const gameBoard = require('./../../../index.html')
const events = require('./events')
const store = require('./../store')
const gameCells = ['0', '1', '2', '3', '4', '5', '6', '7', '8']
const player1 = 'X'
const player2 = 'Y'

// need function to rotate between players
// need a function to track if the current box is taken
// need a function to track winner and loser
const findIndex = function (one, two, three) {

}
// obtain current index
// function to check for tie

module.exports = {
  rotatePlayers
}


if ((store.game.cells[0] === currentPlayer) &&
    (store.game.cells[1] === currentPlayer) &&
    (store.game.cells[2] === currentPlayer)) {
  isOver = true
} else if
((store.game.cells[0] === currentPlayer) &&
    (store.game.cells[3] === currentPlayer) &&
    (store.game.cells[6] === currentPlayer)) {
  isOver = true
} else if
((store.game.cells[6] === currentPlayer) &&
    (store.game.cells[7] === currentPlayer) &&
    (store.game.cells[8] === currentPlayer)) {
  isOver = true
} else if
((store.game.cells[2] === currentPlayer) &&
    (store.game.cells[5] === currentPlayer) &&
    (store.game.cells[8] === currentPlayer)) {
  isOver = true
} else if
((store.game.cells[0] === currentPlayer) &&
  (store.game.cells[4] === currentPlayer) &&
  (store.game.cells[8] === currentPlayer)) {
  isOver = true
} else if
((store.game.cells[2] === currentPlayer) &&
(store.game.cells[4] === currentPlayer) &&
(store.game.cells[6] === currentPlayer)) {
  isOver = true
} else if
((store.game.cells[1] === currentPlayer) &&
    (store.game.cells[4] === currentPlayer) &&
    (store.game.cells[7] === currentPlayer)) {
  isOver = true
} else if
((store.game.cells[3] === currentPlayer) &&
    (store.game.cells[4] === currentPlayer) &&
    (store.game.cells[5] === currentPlayer)) {
  isOver = true
}
