'use strict'

let targetScore = 0
let playerScore = 0
let wins = 0
let losses = 0
let emeraldValue = 0
let onyxValue = 0
let rubyValue = 0
let sapphireValue = 0

function generateTargetScore () {
  return Math.floor(Math.random() * 120) + 19
}

function generateGemPointValue () {
  return Math.floor(Math.random() * 12) + 1
}

function setupBoard () {
  targetScore = generateTargetScore()
  playerScore = 0
  emeraldValue = generateGemPointValue()
  onyxValue = generateGemPointValue()
  rubyValue = generateGemPointValue()
  sapphireValue = generateGemPointValue()

  $('#target-score').text(targetScore)
  $('#player-score').text(playerScore)
  $('#wins').text(wins)
  $('#losses').text(losses)

  $('#emerald').val(emeraldValue)
  $('#emerald-badge').text(emeraldValue)
  if (!$(this).hasClass('invisible')) {
    $('#emerald-badge').addClass('invisible')
  }

  $('#onyx').val(onyxValue)
  $('#onyx-badge').text(onyxValue)
  if (!$(this).hasClass('invisible')) {
    $('#onyx-badge').addClass('invisible')
  }

  $('#ruby').val(rubyValue)
  $('#ruby-badge').text(rubyValue)
  if (!$(this).hasClass('invisible')) {
    $('#ruby-badge').addClass('invisible')
  }

  $('#sapphire').val(sapphireValue)
  $('#sapphire-badge').text(sapphireValue)
  if (!$(this).hasClass('invisible')) {
    $('#sapphire-badge').addClass('invisible')
  }
}

$('.gems').on('click', function () {
  // console.log('this.val: ', $(this).val());

  playerScore = parseInt($(this).val()) + playerScore
  $(`#${this.id}-badge`).removeClass('invisible')
  $('#player-score').text(playerScore)

  // console.log('playerScore: ', parseInt(playerScore));

  if (playerScore === targetScore) {
    // console.log('you win');

    wins++
    $('#wins').text(wins)
    $('#gameOverModalBody').html('<h5>You Win!</h5><p>Try Again!</p>')
    $('#gameOverModal').modal('toggle')
  } else if (playerScore > targetScore) {
    // console.log('you lost');

    losses++
    $('#losses').text(losses)
    $('#gameOverModalBody').html('<h5>You Lost!</h5><p>Try Again!</p>')
    $('#gameOverModal').modal('toggle')
  }
})

$('#gameOverModal').on('hidden.bs.modal', function () {
  setupBoard()
})

setupBoard()
