'use strict'

const api = require('./api')
const ui = require('./ui')

const getFormFields = require('./../../../lib/get-form-fields')


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
//   const isEmpty = ''
//   const currentSelection = event.target
//   // console.log('the selection is ', currentSelection)
//   if (currentSelection === isEmpty) {
//     onGameUpdate(currentSelection)
//   } else {
//     $('.message2').text('The space you picked is already taken, bruv')
//   }
// }

const onGameUpdate = function (event) {
  event.preventDefault()
  console.log('what is event? ', event)
  const currentSelection = event.target
  const currentId = event.target.id
  console.log('hello event.target ', currentSelection)
  console.log('hello event.id ', currentId)
  // console.log('the selection is ', currentSelection)
  if (currentSelection !== '') {
    api.gameUpdate()
      .then(ui.onGameUpdateSuccess)
      .catch(ui.onError)
  } else {
    $('#message2').text('The space you picked is already taken, mate')
  }
}

module.exports = {
  // onGetGames,
  // onGetGame,
  onCreateGame,
  // onClick,
  onGameUpdate
}
