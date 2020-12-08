// 'use strict'
//
// const api = require('./api')
// const ui = require('./ui')
//
// const getFormFields = require('./../../../lib/get-form-fields')
//
// const onGetGames = function (event) {
//   event.preventDefault()
//
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
// const onCreateGame = function (event) {
//   event.preventDefault()
//   // ui.onCreateGameSuccess
// }
//
// // with each click, the 3x3 grid should send some type of event
// // that recognizes what box was tapped
// const onGameUpdate = function (event) {
//   event.preventDefault()
//   // api.gameUpdate(data)
//   // ui.onUpdateGameSuccess
// }
