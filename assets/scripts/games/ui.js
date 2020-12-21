'use strict'

const store = require('./../store')
// require the logic for the gameboard
// const logic = require('./logic')

const onError = function (error) {
  $('#message2').text('Failed to execute, please try again or fix the code. ', error)
}
const onCreateGameSuccess = function (event) {
  $('#message2').text('New game Created. "X" goes first. Have fun, dont cheat 8)!')
  $('#game-table').show()
  // event object is stored inside the API
  store.game = event.game
  // console.log('current is', event)
}

const onGameUpdateSuccess = function (event) {
  // $('#message2').show()
  // simply store the current position of players into the data.
  store.game = event.game
  // console.log('hello, are you here? ', event)
  // console.log('store.game huh? ', store.game)
}

const onGetGamesSuccess = function (event) {
  // set games to the current total length of games created
  const games = event.games.length
  // console.log('what is gameS?? ', games)
  // display the total amount of games played.
  $('#message2').html(`The total games you've played and created is: ${games}`)
}

module.exports = {
  onError,
  onGetGamesSuccess,
  // onGetGameSuccess,
  onCreateGameSuccess,
  onGameUpdateSuccess
}
