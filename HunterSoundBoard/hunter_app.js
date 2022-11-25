function playAudio(filename){
    let audio = new Audio(filename)
    audio.play()
}

function changeBackground(filename){
    document.body.style.backgroundImage = 'url(' + filename + ')'
    document.body.style.backgroundSize  = '300px'
}