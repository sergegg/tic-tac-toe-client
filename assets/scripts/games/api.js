'use strict'
const config = require('./../config')
const store = require('./../store')
// const events = require('./events')
// const ui = require('./ui')

const index = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}
const onGetGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}
const createGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {}
  })
}
const gameUpdate = function (cellIndex, currentPlayer) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: cellIndex,
          value: currentPlayer
        },
        over: false
      }
    }
  })
}
module.exports = {
  index,
  gameUpdate,
  createGame,
  onGetGame
}
