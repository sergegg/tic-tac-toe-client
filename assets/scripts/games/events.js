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
  // $('#game-table').unbind(store.game)
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

// function to figure out the position of

const onGameUpdate = function (event) {
  event.preventDefault()
  let isOver = false
  // console.log('did we create a new game??? ', event.target)
  // const gameCells = ['0', '1', '2', '3', '4', '5', '6', '7', '8']
  // console.log('in case you forget what event is, ', event)
  const cellIndex = $(this).data('cell-index')
  // const arr = [store.game.cells]
  const currentBox = event.target
  // let isOver = false
  console.log('I am cellIndex ', cellIndex)
  console.log('I am currentBox ', currentBox)
  console.log('I am currentPlayer ', currentPlayer)
  console.log('I am store.game.cells[0]----', store.game.cells[0])
  console.log('I am store.game.cells[1]----', store.game.cells[1])
  console.log('I am store.game.cells[2]----', store.game.cells[2])

  if ($(currentBox).html() === 'Click me!') {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
    $(currentBox).html(currentPlayer)
    if ((store.game.cells[0] === currentPlayer) &&
        (store.game.cells[1] === currentPlayer) &&
        (store.game.cells[2] === currentPlayer)) {
      isOver = true
    } else if
    ((store.game.cells[0] === currentPlayer) &&
        (store.game.cells[3] === currentPlayer) &&
        (store.game.cells[6] === currentPlayer)) {
      isOver = true
    } else if
    ((store.game.cells[6] === currentPlayer) &&
        (store.game.cells[7] === currentPlayer) &&
        (store.game.cells[8] === currentPlayer)) {
      isOver = true
    } else if
    ((store.game.cells[2] === currentPlayer) &&
        (store.game.cells[5] === currentPlayer) &&
        (store.game.cells[8] === currentPlayer)) {
      isOver = true
    } else if
    ((store.game.cells[0] === currentPlayer) &&
      (store.game.cells[4] === currentPlayer) &&
      (store.game.cells[8] === currentPlayer)) {
      isOver = true
    } else if
    ((store.game.cells[2] === currentPlayer) &&
    (store.game.cells[4] === currentPlayer) &&
    (store.game.cells[6] === currentPlayer)) {
      isOver = true
    } else if
    ((store.game.cells[1] === currentPlayer) &&
        (store.game.cells[4] === currentPlayer) &&
        (store.game.cells[7] === currentPlayer)) {
      isOver = true
    } else if
    ((store.game.cells[3] === currentPlayer) &&
        (store.game.cells[4] === currentPlayer) &&
        (store.game.cells[5] === currentPlayer)) {
      isOver = true
    }
    api.gameUpdate(cellIndex, currentPlayer, isOver)
      .then(ui.onGameUpdateSuccess)
      .catch(ui.onError)
  } else {
    $('#message2').text('No bueno, try again.. ')
  }
  // if ((store.game.cells[0] === currentPlayer) &&
  //     (store.game.cells[1] === currentPlayer) &&
  //     (store.game.cells[2] === currentPlayer)) {
  //   isOver = true
  //   api.gameUpdate(cellIndex, currentPlayer, isOver)
  //     .then(ui.onGameUpdateSuccess)
  //     .then(ui.onGameOver)
  //     .catch(ui.onError)
  // } else if
  // ((store.game.cells[0] === currentPlayer) &&
  //     (store.game.cells[3] === currentPlayer) &&
  //     (store.game.cells[6] === currentPlayer)) {
  //   isOver = true
  //   api.gameUpdate(cellIndex, currentPlayer, isOver)
  //     .then(ui.onGameUpdateSuccess)
  //     .then(ui.onGameOver)
  //     .catch(ui.onError)
  // } else if
  // ((store.game.cells[6] === currentPlayer) &&
  //     (store.game.cells[7] === currentPlayer) &&
  //     (store.game.cells[8] === currentPlayer)) {
  //   isOver = true
  //   api.gameUpdate(cellIndex, currentPlayer, isOver)
  //     .then(ui.onGameUpdateSuccess)
  //     .then(ui.onGameOver)
  //     .catch(ui.onError)
  // } else if
  // ((store.game.cells[2] === currentPlayer) &&
  //     (store.game.cells[5] === currentPlayer) &&
  //     (store.game.cells[8] === currentPlayer)) {
  //   isOver = true
  //   api.gameUpdate(cellIndex, currentPlayer, isOver)
  //     .then(ui.onGameUpdateSuccess)
  //     .then(ui.onGameOver)
  //     .catch(ui.onError)
  // } else if
  // ((store.game.cells[0] === currentPlayer) &&
  //   (store.game.cells[4] === currentPlayer) &&
  //   (store.game.cells[8] === currentPlayer)) {
  //   isOver = true
  //   api.gameUpdate(cellIndex, currentPlayer, isOver)
  //     .then(ui.onGameUpdateSuccess)
  //     .then(ui.onGameOver)
  //     .catch(ui.onError)
  // } else if
  // ((store.game.cells[2] === currentPlayer) &&
  // (store.game.cells[4] === currentPlayer) &&
  // (store.game.cells[6] === currentPlayer)) {
  //   isOver = true
  //   api.gameUpdate(cellIndex, currentPlayer, isOver)
  //     .then(ui.onGameUpdateSuccess)
  //     .then(ui.onGameOver)
  //     .catch(ui.onError)
  // } else if
  // ((store.game.cells[1] === currentPlayer) &&
  //     (store.game.cells[4] === currentPlayer) &&
  //     (store.game.cells[7] === currentPlayer)) {
  //   isOver = true
  //   api.gameUpdate(cellIndex, currentPlayer, isOver)
  //     .then(ui.onGameUpdateSuccess)
  //     .then(ui.onGameOver)
  //     .catch(ui.onError)
  // } else if
  // ((store.game.cells[3] === currentPlayer) &&
  //     (store.game.cells[4] === currentPlayer) &&
  //     (store.game.cells[5] === currentPlayer)) {
  //   isOver = true
  //   api.gameUpdate(cellIndex, currentPlayer, isOver)
  //     .then(ui.onGameUpdateSuccess)
  //     .then(ui.onGameOver)
  //     .catch(ui.onError)
  // }
  //  else if (store.game.cells.length > 9) {
  //   // if array is full then its a tie. game over, tie.
  //   $('#message2').html("Game over!!! It's a tie!")
  // }
}

// console.log('cellIndex is correct?? ', cellIndex)
// console.log('what is event? ', event)
// console.log('hello event.target ', currentSelection)
// console.log('hello event.id ', currentId)
// console.log('the selection is ', currentSelection)
// check if the box is empty, if yes, update the api and the html text in box
// if (store.data.game.cells[cellIndex] === '') {
// $(this).data('user',  )
// const locations = []
// for (let i = 0; i < store.game.cells.length; i++) {
//   if (store.game.cells[i] === 'X') {
//     locations.push(i)
//     return locations
//   }
// }

module.exports = {
  // onGetGames,
  // onGetGame,
  // isOver,
  onCreateGame,
  // onClick,
  onGameUpdate
}
