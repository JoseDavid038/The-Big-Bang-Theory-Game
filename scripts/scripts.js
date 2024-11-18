

function goToGame() {
  window.location.href = 'game.html';
}


let buttonPlay = document.querySelector('.js-play-button');
buttonPlay.addEventListener('click', () => {
    goToGame();
})