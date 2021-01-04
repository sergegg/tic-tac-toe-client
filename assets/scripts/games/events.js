'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

const player1 = 'X'
const player2 = 'O'
let currentPlayer = player1
let isOver = false
// let currentPlayer = ''
const onGetGames = function (event) {
  event.preventDefault()
  api.index()
    .then(ui.onGetGamesSuccess)
    .catch(ui.onError)
}

const onCreateGame = function () {
  event.preventDefault()
  // the only thing that needs to be set is player X to start again.
  // afterwards, the new and clean game object is sent in onCreateGameSuccess
  currentPlayer = player1
  // need to reset the 'X's and O's to be '' again!
  api.createGame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.onError)
}

const onGameUpdate = function (event) {
  // prevent refreshing of page
  event.preventDefault()
  // console.log('what is event?? ', event)
  // console.log('does store exist? ', store)
  // find the cell index to the current box which is clicked
  const cellIndex = $(this).data('cell-index')
  // console.log('What is cell index?? ', cellIndex)
  const currentBox = event.target
  // find the box which the user clicked using the event which was passed in.
  // is the box text is matching and the game isn't over, fill in the box
  // with the current player and start checking if there is a winner..
  // based on the result of the search, send the information to the api.
  // store.game.over is checked, if its false (resets after game object is sent)
  // then continue filling in the boxes as regular.
  if ($(currentBox).html() === '' && store.game.over === false) {
    // i need to check if the board is full.. to tell user the game is over, start new
    // if (store.game.over === false && (store.game.cells[cellIndex] === player1 || player2)) {
    //   $('#message2').text('box is taken or game is over, start a new game if over!')
    // }
    // if ($(currentBox).html() !== '' && store.game.over !== true) {
    //   $('#message2').text('The game is a tie! No winner')
    // }
    // need to create a logic where the game lets you know if there is a tie..
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
      // update the player to be the next one to move if game isn't over
      $('#message2').text('No winner yet, next player.. ')
    }
    // console.log('what is store.game.celsl ', store.game.cells)
    // console.log('whos the current player ', currentPlayer)
    api.gameUpdate(cellIndex, currentPlayer, isOver)
      .then(ui.onGameUpdateSuccess)
      // .then(ui.onGameOver)
      .catch(ui.onError)
      // if ? if true : if false
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
