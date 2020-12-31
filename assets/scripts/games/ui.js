'use strict'

const store = require('./../store')
// require the logic for the gameboard
// const logic = require('./logic')

const onError = function (error) {
  $('#message2').text('Failed to execute, please try again or fix the code. ', error)
}
const onCreateGameSuccess = function (event) {
  $('#message2').text('New game Created. Player "X" goes first. Have fun & dont cheat 8)!')
  $('#game-table').show()
  // event object is stored inside the API
  // console.log('event.target is --- ', event.target) // undefined
  // console.log('event is IN UI ', event)
  // // console.log('event.html?? ', event.game.html) // undefined
  // console.log('event.game is IN UI ', event.game) // game object is event.game
  // console.log('what is store -- IN UI --', store)
  // event.over = false
  $('.col-4').html('')
  store.game = event.game
  // console.log('current is', event)
}

const onGameUpdateSuccess = function (event) {
  // $('#message2').show()
  // simply store the current position of players into the data.
  store.game = event.game
  // console.log('hello, are you here event? ', event) // the game object
  // console.log('store.game huh? ', store.game) // game object
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
