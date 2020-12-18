'use strict'

const store = require('./../store')
// require the logic for the gameboard
// const logic = require('./logic')

const onError = function (error) {
  $('#message2').text('Failed to execute, please try again or fix the code. ', error)
}
const onCreateGameSuccess = function (event) {
  $('#message2').text('Game Created. Have fun! "X" goes first ')
  $('#game-table').show()
  // for (const key in event) {
  // // this check can be safely omitted in modern JS engines
  //   delete event[key]
  // }
  // $('#b').html('Pick me!')
  console.log('the event for create game is ', event)
  store.game = event.game
  // console.log('current is', event)
}

const onGameUpdateSuccess = function (event) {
  // $('#message2').show()
  store.game = event.game
  console.log('hello, are you here? ', event)
  console.log('store.game huh? ', store.game)
  // $('#message2').text('Game updated. Next player move ')
}

// const onGameOver = function (response) {
//   store.game = response.game
//   console.log('hello, are you here? ', event)
//   console.log('store.game huh? ', store.game)
//   $('#message2').text('You won! congragulations!')
//   $('#game-table').unbind(response.game)
// }

const onGetGameSuccess = function (event) {
  $('#message2').text('Games Generated ! ')
  store.game = event.game
}

const onGetGamesSuccess = function (event) {
  const games = event.games.length
  // console.log('what is gameS?? ', games)
  // let gamesHTML = ''
  $('#message2').text('The total games played is: ', games)
}

module.exports = {
  onError,
  onGetGamesSuccess,
  onGetGameSuccess,
  // onGameOver,
  onCreateGameSuccess,
  onGameUpdateSuccess
}
