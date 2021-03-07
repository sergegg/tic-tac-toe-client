'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

const player1 = 'X'
const player2 = 'O'
let currentPlayer = player1
let isOver = false
const onGetGames = function (event) {
  event.preventDefault()
  api.index()
    .then(ui.onGetGamesSuccess)
    .catch(ui.onError)
}

const onCreateGame = function () {
  event.preventDefault()
  currentPlayer = player1
  api.createGame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.onError)
}

const onGameUpdate = function (event) {
  event.preventDefault()
  const cellIndex = $(this).data('cell-index')
  const currentBox = event.target
  if ($(currentBox).html() === '' && store.game.over === false) {
    $(currentBox).html(currentPlayer)
    store.game.cells[cellIndex] = currentPlayer
    if ((store.game.cells[0] === currentPlayer) &&
          (store.game.cells[1] === currentPlayer) &&
          (store.game.cells[2] === currentPlayer)) {
      isOver = true
      $('#message2').text(`Congragulations ${currentPlayer}, you win!`)
    } else if
    ((store.game.cells[0] === currentPlayer) &&
        (store.game.cells[3] === currentPlayer) &&
        (store.game.cells[6] === currentPlayer)) {
      isOver = true
      $('#message2').text(`Congragulations ${currentPlayer}, you win!`)
    } else if
    ((store.game.cells[6] === currentPlayer) &&
          (store.game.cells[7] === currentPlayer) &&
          (store.game.cells[8] === currentPlayer)) {
      isOver = true
      $('#message2').text(`Congragulations ${currentPlayer}, you win!`)
    } else if
    ((store.game.cells[2] === currentPlayer) &&
          (store.game.cells[5] === currentPlayer) &&
          (store.game.cells[8] === currentPlayer)) {
      isOver = true
      $('#message2').text(`Congragulations ${currentPlayer}, you win!`)
    } else if
    ((store.game.cells[0] === currentPlayer) &&
        (store.game.cells[4] === currentPlayer) &&
        (store.game.cells[8] === currentPlayer)) {
      isOver = true
      $('#message2').text(`Congragulations ${currentPlayer}, you win!`)
    } else if
    ((store.game.cells[2] === currentPlayer) &&
      (store.game.cells[4] === currentPlayer) &&
      (store.game.cells[6] === currentPlayer)) {
      isOver = true
      $('#message2').text(`Congragulations ${currentPlayer}, you win!`)
    } else if
    ((store.game.cells[1] === currentPlayer) &&
          (store.game.cells[4] === currentPlayer) &&
          (store.game.cells[7] === currentPlayer)) {
      isOver = true
      $('#message2').text(`Congragulations ${currentPlayer}, you win!`)
    } else if
    ((store.game.cells[3] === currentPlayer) &&
          (store.game.cells[4] === currentPlayer) &&
          (store.game.cells[5] === currentPlayer)) {
      isOver = true
      $('#message2').text(`Congragulations ${currentPlayer}, you win!`)
    } else {
      isOver = false
      $('#message2').text('No winner yet, next player.. ')
    }
    api.gameUpdate(cellIndex, currentPlayer, isOver)
      .then(ui.onGameUpdateSuccess)
      .catch(ui.onError)
    currentPlayer = currentPlayer === player1 ? player2 : player1
  } else if (store.game.cells[cellIndex] !== '') {
    $('#message2').text('No can do, you are trying to put your mark on a box which is already selected.. Please try again :) ')
  } else {
    $('#message2').text('No can do, the game is over!')
  }
}

module.exports = {
  onGetGames,
  onCreateGame,
  onGameUpdate
}
