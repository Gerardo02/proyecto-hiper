const buttons = document.querySelectorAll('button');
let height = 500;

buttons.forEach(
    button => {
        button.style.height = `${height}px`;
        height = height - 20;
        button.style.backgroundColor = button.dataset.colors;
    }
);

const playnote = event =>{
    const button = event.target;
    const note = button.dataset.note;
    const audioId = `audio${note}`;
    console.log(audioId);
    const audio = document.getElementById(audioId);
    audio.pause();
    audio.currentTime = 0;
    audio.play();
}