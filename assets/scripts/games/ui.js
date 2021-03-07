'use strict'

const store = require('./../store')

const onError = function (error) {
  $('#message2').text('Failed to execute, please try again or fix the code. ', error)
}
const onCreateGameSuccess = function (event) {
  $('#message2').text('New game Created. Player "X" goes first. Have fun & dont cheat 8)!')
  $('#game-table').show()
  $('.col-4').html('')
  store.game = event.game
}

const onGameUpdateSuccess = function (event) {
  store.game = event.game
}

const onGetGamesSuccess = function (event) {
  const games = event.games.length
  $('#view-games').html(`The total games you've played and created is: ${games}`)
}

module.exports = {
  onError,
  onGetGamesSuccess,
  // onGetGameSuccess,
  onCreateGameSuccess,
  onGameUpdateSuccess
}
