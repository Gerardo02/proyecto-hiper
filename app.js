const buttons = document.querySelectorAll('button');
let height = 500;

buttons.forEach(
    button => {
        button.style.height = `${height}px`;
        height = height - 20;
        button.style.backgroundColor = button.dataset.colors;
    }
);