// 'use strict'
// const config = require('./../config')
// const store = require('./../store')
//
// const index = function (data) {
//   return $.ajax({
//     url: config.apiUrl + '/games',
//     method: 'GET',
//     headers: {
//       Authorization: 'Bearer ' + store.user.token
//     },
//     data
//   })
// }
// const onGetGame = function (data) {
//   return $.ajax({
//     url: config.apiUrl + '/games/' + data.games.id,
//     method: 'GET',
//     headers: {
//       Authorization: 'Bearer ' + store.user.token
//     },
//     data
//   })
// }
// const createGame = function (data) {
//   return $.ajax({
//     url: config.apiUrl + '/games',
//     method: 'POST',
//     headers: {
//       Authorization: 'Bearer ' + store.user.token
//     },
//     data
//   })
// }
// const gameUpdate = function (data) {
//   return $.ajax({
//     url: config.apiUrl + '/games',
//     method: 'GET',
//     headers: {
//       Authorization: 'Bearer ' + store.user.token
//     },
//     data
//   })
// }
// module.exports = {
//   index,
//   gameUpdate,
//   createGame,
//   onGetGame
// }
