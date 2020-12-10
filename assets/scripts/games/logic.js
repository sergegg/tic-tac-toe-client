'use strict'

const gameBoard = require('./../../../index.html')
const events = require('./events')
const store = require('./../store')
const gameCells = ['0', '1', '2', '3', '4', '5', '6', '7', '8']
const player1 = 'X'
const player2 = 'Y'

// need function to rotate between players
const rotatePlayers = function (event) {
  let user = ''
  if (user === player1) {

  }
}
// need a function to track if the current box is taken
// need a function to track winner and loser
// obtain current index
// function to check for tie

module.exports = {
  rotatePlayers
}
