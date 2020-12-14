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

const onGameOver = function (event) {
  store.game = event.game
  // console.log('hello, are you here? ', event)
  // console.log('store.game huh? ', store.game)
  $('#message2').text('You won! congragulations!')
}

// console.log('what is logic?/ ', logic)
// store.game = logic
//   console.log('store.game is now ')
// }
// const currentPlayer = function (event) {
//   if ()
// }
const onGetGameSuccess = function (event) {
  $('#message2').text('Games Generated ! ')
  store.game = event.game
}
const onGetGamesSuccess = function (event) {
  const games = event.games
  console.log('what is gameS?? ', games)
  // let gamesHTML = ''
  games.forEach(function (game) {
    console.log('game is', game)
    // const currentGameHTML = ('
    // ')
    //
  })
}

module.exports = {
  onError,
  onGetGamesSuccess,
  onGetGameSuccess,
  onGameOver,
  onCreateGameSuccess,
  onGameUpdateSuccess
}
