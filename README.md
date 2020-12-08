As a user, i'd like to sign up
As a user, i'd like to sign in
As a user, i'd like to start a game
As a user, i'd like to know my score
As a user, i'd like to forfit  game
As a user, i'd like to win the game
As a user, i'd like to edit my profile
As a user, i'd like to change between X and O
As a user, i'd like to interact with the website



Application Requirements
 User must be able to sign up
 User must be able to sign in
 Signed in user must be able to change password
 Signed in user must be able to sign out
 Signed in user user must be able to start a tic tac toe game
 When playing game, user must start as X and then rotate between X and O
 When playing game, user must only select available spaces on the board
 When playing game, user must be notified when win, loss or tie occurs
 Once a game is over, user must not be able to add to that board
 Once a game is over, user must be able to play again
 Signed in user must be able to view number of games played

API Requirements
 Sign up POST /sign-up
 Sign in POST /sign-in
 Change password PATCH /change-password
 Sign out DELETE /sign-out
 New game POST /games
 Update game PATCH /games/:id
 View number of games played GET /games
 Give feedback to the user after each action's success or failure.
 All forms must clear after submit success

Professional Requirements
 Do not delete your repository at any time or start over.
 Do not rely on refreshing the page for any functionality.
 Do not have any user-facing bugs.
Display non-functional buttons, nor buttons that do not successfully complete a task.
Show actions at inappropriate times (example: sign out button when not signed in).
 Do not use browser alerts or prompts.
 Do not display console logs, errors or warnings in the console.
