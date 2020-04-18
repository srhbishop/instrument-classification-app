const instrumentDivs = document.querySelectorAll('.instrument');
const containers = document.querySelectorAll('.container');
const answerBtn = document.querySelector('.check-answer');
const tryAgain = document.querySelector('.try-again-btn');
const answerContainer = document.querySelector('.answer-containers');
const lowerContainer = document.querySelector('.lower-containers');
const upperContainer = document.querySelector('.upper-container');
const introPara = document.querySelector('.introduction');

instrumentDivs.forEach(instrument => {
    instrument.addEventListener('dragstart', function() {
        instrument.classList.add('dragging')
    })

    instrument.addEventListener('dragend', function() {
        instrument.classList.remove('dragging')
    })
});

containers.forEach(container => {
    container.addEventListener('dragover', e => {
        e.preventDefault()
        const instrument = document.querySelector('.dragging');
        container.appendChild(instrument)
    })
})

answerBtn.addEventListener('click', function() {
    answerContainer.classList.add('answer-containers-active')
    lowerContainer.style.display = 'none';
    answerBtn.style.display = 'none';
    upperContainer.style.display = 'none';
    tryAgain.style.display = 'flex';
    introPara.style.display = 'none';
})

tryAgain.addEventListener('click', function() {
    answerContainer.classList.remove('answer-containers-active');
    lowerContainer.style.display = 'flex';
    answerBtn.style.display = 'flex';
    tryAgain.style.display = 'none';
    upperContainer.style.display = 'flex';
    introPara.style.display = 'block';
})