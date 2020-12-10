'use strict'

const authEvents = require('./auth/events')
const gameEvents = require('./games/events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // hide all fields which need sign-in before usage
  $('.confirmed').hide()
  // hide game setup until the user presses "new game"
  $('#game-table').hide()
  // set up the sign up
  $('#sign-up').on('submit', authEvents.onSignUp)
  // set up the sign up
  $('#sign-in').on('submit', authEvents.onSignIn)
  // set up the sign up
  $('#change-pw').on('submit', authEvents.onChangePw)
  // set up the sign up
  $('#sign-out').on('click', authEvents.onSignOut)

  // game settings
  // when clicked, the button will display all games played
  // $('#get-games').on('click', gameEvents.onGetGames)
  // // when clicked, the button will display one game played with ID provided
  // $('#get-game').on('submit', gameEvents.onGetGame)
  // when clicked, the button will start a brand new game
  $('#start-game').on('click', gameEvents.onCreateGame)
  // when clicked, register the click in the system
  // $('.row').on('click', gameEvents.onClick) //
  // when clicked, the button will update the game
  $('#game-table').on('click', 'button', gameEvents.onGameUpdate)
})
