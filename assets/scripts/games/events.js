'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

const getFormFields = require('./../../../lib/get-form-fields')
// let currentPlayer = ''
const player1 = 'X'
const player2 = 'O'
let currentPlayer = player2
let isOver = false

const onGetGames = function (event) {
  event.preventDefault()
  api.index()
    .then(ui.onGetGamesSuccess)
    .catch(ui.onError)
}
const onGetGame = function (event) {
  event.preventDefault()

  const game = getFormFields(event.target)

  api.onGetGame(game)
    .then(ui.onGetGameSuccess)
    .catch(ui.onError)
}

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

  // console.log('I am cellIndex BEFORE', cellIndex)
  // console.log('I am currentBox BEFORE ', currentBox)
  // console.log('I am currentPlayer BEFORE ', currentPlayer)
  // console.log('I am store.game.cells[0]----', store.game.cells[0])
  // console.log('I am store.game.cells[1]----', store.game.cells[1])
  // console.log('I am store.game.cells[2]----', store.game.cells[2])
  // console.log('I am store.game.cells[3]----', store.game.cells[3])
  // console.log('I am store.game.cells[4]----', store.game.cells[4])
  // console.log('I am store.game.cells[5]----', store.game.cells[5])
  // console.log('I am store.game.cells[6]----', store.game.cells[6])
  // console.log('I am store.game.cells[7]----', store.game.cells[7])
  // console.log('I am store.game.cells[8]----', store.game.cells[8])

  if ($(currentBox).html() === 'Click me!') {
    $(currentBox).html(currentPlayer)
    api.gameUpdate(cellIndex, currentPlayer, isOver)
      .then(ui.onGameUpdateSuccess)
      .catch(ui.onError)
    if (currentPlayer === player1) {
      currentPlayer = player2
    } else {
      currentPlayer = player1
    }
  } else {
    $('#message2').text('No can do, try again in an empty box.. ')
  }
  for (let i = 0; i < 9; i++) {
    if ((store.game.cells[0] === (player1 || player2)) &&
        (store.game.cells[1] === (player1 || player2)) &&
        (store.game.cells[2] === (player1 || player2))) {
      isOver = true
      api.gameUpdate(cellIndex, currentPlayer, isOver)
        .then(ui.onGameOver)
    // api.gameUpdate(cellIndex, currentPlayer, isOver)
    //   .then(ui.onGameOver)
    } else if
    ((store.game.cells[0] === (player1 || player2)) &&
      (store.game.cells[3] === (player1 || player2)) &&
      (store.game.cells[6] === (player1 || player2))) {
      isOver = true
      api.gameUpdate(cellIndex, currentPlayer, isOver)
        .then(ui.onGameOver)
    // api.gameUpdate(cellIndex, currentPlayer, isOver)
    //   .then(ui.onGameOver)
    } else if
    ((store.game.cells[6] === (player1 || player2)) &&
        (store.game.cells[7] === (player1 || player2)) &&
        (store.game.cells[8] === (player1 || player2))) {
      isOver = true
      api.gameUpdate(cellIndex, currentPlayer, isOver)
        .then(ui.onGameOver)
    // api.gameUpdate(cellIndex, currentPlayer, isOver)
    //   .then(ui.onGameOver)
    } else if
    ((store.game.cells[2] === (player1 || player2)) &&
        (store.game.cells[5] === (player1 || player2)) &&
        (store.game.cells[8] === (player1 || player2))) {
      isOver = true
      api.gameUpdate(cellIndex, currentPlayer, isOver)
        .then(ui.onGameOver)
    // api.gameUpdate(cellIndex, currentPlayer, isOver)
    //   .then(ui.onGameOver)
    } else if
    ((store.game.cells[0] === (player1 || player2)) &&
      (store.game.cells[4] === (player1 || player2)) &&
      (store.game.cells[8] === (player1 || player2))) {
      isOver = true
      api.gameUpdate(cellIndex, currentPlayer, isOver)
        .then(ui.onGameOver)
    // api.gameUpdate(cellIndex, currentPlayer, isOver)
    //   .then(ui.onGameOver)
    } else if
    ((store.game.cells[2] === (player1 || player2)) &&
    (store.game.cells[4] === (player1 || player2)) &&
    (store.game.cells[6] === (player1 || player2))) {
      isOver = true
      api.gameUpdate(cellIndex, currentPlayer, isOver)
        .then(ui.onGameOver)
    // api.gameUpdate(cellIndex, currentPlayer, isOver)
    //   .then(ui.onGameOver)
    } else if
    ((store.game.cells[1] === (player1 || player2)) &&
        (store.game.cells[4] === (player1 || player2)) &&
        (store.game.cells[7] === (player1 || player2))) {
      isOver = true
      api.gameUpdate(cellIndex, currentPlayer, isOver)
        .then(ui.onGameOver)
    // api.gameUpdate(cellIndex, currentPlayer, isOver)
    //   .then(ui.onGameOver)
    } else if
    ((store.game.cells[3] === (player1 || player2)) &&
        (store.game.cells[4] === (player1 || player2)) &&
        (store.game.cells[5] === (player1 || player2))) {
      isOver = true
      api.gameUpdate(cellIndex, currentPlayer, isOver)
        .then(ui.onGameOver)
    // api.gameUpdate(cellIndex, currentPlayer, isOver)
    //   .then(ui.onGameOver)
    }
  }

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
}

module.exports = {
  onGetGames,
  onGetGame,
  // isOver,
  onCreateGame,
  // onClick,
  onGameUpdate
}
