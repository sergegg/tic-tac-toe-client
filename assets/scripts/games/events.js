'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

const getFormFields = require('./../../../lib/get-form-fields')
let currentPlayer = ''
// const onGetGames = function (event) {
//   event.preventDefault()
//   api.index()
//     .then(ui.onGetGamesSuccess)
//     .catch(ui.onError)
// }
// const onGetGame = function (event) {
//   event.preventDefault()
//
//   const game = getFormFields(event.target)
//
//   api.getGame(game)
//     .then(ui.onGetGameSuccess)
//     .catch(ui.onError)
// }

const onCreateGame = function () {
  event.preventDefault()
  // set current
  api.createGame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.onError)
}

// const onClick = function (event) {
//   event.preventDefault()
//   const cellIndex = $(this).data()
//   const currentSelection = event.target
//   const isEmpty = ''
//   // console.log('the selection is ', currentSelection)
//   if (store.cells[cellIndex] === isEmpty) {
//     onGameUpdate()
//   } else {
//     $('.message2').html('The space you picked is already taken, bruv')
//   }
// }

const isOver = function (event) {

}

const onGameUpdate = function (event) {
  event.preventDefault()
  // const gameCells = ['0', '1', '2', '3', '4', '5', '6', '7', '8']
  const cellIndex = $(this).data('cell-index')
  const currentBox = event.target
  // console.log(cellIndex)
  // console.log(currentBox)
  // console.log(currentPlayer)
  if ($(currentBox).html() === 'Click me!') {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
    $(currentBox).html(currentPlayer)
    api.gameUpdate(cellIndex, currentPlayer)
      .then(ui.onGameUpdateSuccess)
      .then(ui.checkGameOver)
    // console.log(currentPlayer)
  } else {
    $('#message2').text('no bueno, space taken.. ')
  }
  // api.gameUpdate(cellIndex, currentPlayer)
  //   .then(ui.onGameUpdateSuccess)
  //   .then(ui.checkGameOver)
  //   .catch(ui.onError)
}

// console.log('cellIndex is correct?? ', cellIndex)
// console.log('what is event? ', event)
// console.log('hello event.target ', currentSelection)
// console.log('hello event.id ', currentId)
// console.log('the selection is ', currentSelection)
// check if the box is empty, if yes, update the api and the html text in box
// if (store.data.game.cells[cellIndex] === '') {
// $(this).data('user',  )

module.exports = {
  // onGetGames,
  // onGetGame,
  isOver,
  onCreateGame,
  // onClick,
  onGameUpdate
}
