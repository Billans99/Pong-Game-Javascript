const gameBoard = document.querySelector("#game-board")
const context = gameBoard.getContext("2d")
const scoreText = document.querySelector("#score-text")
const resetButton = document.querySelector("#reset-button")
const gameWidth = gameBoard.width
const gameHeight = gameBoard.height
const boardBackground = "silver"
const paddle1Color = "lightblue"
const paddle2Color = "red"
const paddleBorder = "black"
const ballColor = "black"
const ballBorderColor = "green"
const ballRadius = 12.5
const paddleSpeed = 50
let intervalID 
let ballSpeed = 1;
let ballX = gameWidth / 2
let ballY = gameHeight / 2
