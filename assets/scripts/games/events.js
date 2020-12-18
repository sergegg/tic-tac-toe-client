'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

const getFormFields = require('./../../../lib/get-form-fields')

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
// const onGetGame = function (event) {
//   event.preventDefault()
//   const game = getFormFields(event.target)
//   api.onGetGame(game)
//     .then(ui.onGetGameSuccess)
//     .catch(ui.onError)
// }

const onCreateGame = function () {
  event.preventDefault()
  // $('#game-table').unbind(store.game)
  // set current
  api.createGame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.onError)
}
// function to figure out the position of

const onGameUpdate = function (event) {
  event.preventDefault()
  // console.log('did we create a new game??? ', event.target)
  // const gameCells = ['0', '1', '2', '3', '4', '5', '6', '7', '8']
  // console.log('in case you forget what event is, ', event)
  const cellIndex = $(this).data('cell-index')
  // const arr = [store.game.cells]
  console.log('What is cell index?? ', cellIndex)
  const currentBox = event.target
  // let isOver = false
  if ($(currentBox).html() === 'Click me!' && isOver === false) {
    $(currentBox).html(currentPlayer)
    store.game.cells[cellIndex] = currentPlayer
    console.log('whats cell index after click ', cellIndex)
    console.log('whats currentPlayer after click ', currentPlayer)
    console.log('whats isOver after click ', isOver)
    console.log('whats current box after click ', currentBox)
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
    console.log('what is store.game.celsl ', store.game.cells)
    console.log('whos the current player ', currentPlayer)
    api.gameUpdate(cellIndex, currentPlayer, isOver)
      .then(ui.onGameUpdateSuccess)
      // .then(ui.onGameOver)
      .catch(ui.onError)
    currentPlayer = currentPlayer === player1 ? player2 : player1
  } else {
    $('#message2').text('No can do, try again in an empty box.. ')
  }

  // if (isOver === true) {
  //   $('#message2').text(`Congragulations ${currentPlayer}, you win!`)
  //   $('#game-table').unbind(store.game)
  // }
}

module.exports = {
  onGetGames,
  onCreateGame,
  onGameUpdate
}
// else {
//   currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
// }
// if (currentPlayer === player1) {
//   currentPlayer = player2
// } else {
//   currentPlayer = player1
// }
// console.log('I am cellIndex AFTER', cellIndex)
// console.log('I am currentBox AFTER ', currentBox)
// console.log('I am currentPlayer AFTER ', currentPlayer)
// console.log('I am store.game.cells[0]----', store.game.cells[0])
// console.log('I am store.game.cells[1]----', store.game.cells[1])
// console.log('I am store.game.cells[2]----', store.game.cells[2])
// console.log('I am store.game.cells[3]----', store.game.cells[3])
// console.log('I am store.game.cells[4]----', store.game.cells[4])
// console.log('I am store.game.cells[5]----', store.game.cells[5])
// console.log('I am store.game.cells[6]----', store.game.cells[6])
// console.log('I am store.game.cells[7]----', store.game.cells[7])
// console.log('I am store.game.cells[8]----', store.game.cells[8])
