const levels = [
    {
        "x": 20,
        "y": 20,
        "level":[
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,2,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,
        1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,
        1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,
        1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,
        1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,
        1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,
        1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,
        1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,
        1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,
        1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,
        1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,
        1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,
        1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,
        1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,
        1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,
        1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,
        1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
        ]
    },
    {
        "x": 20,
        "y": 20,
        "level":[
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,3,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1,
        1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,
        1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,
        1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,
        1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,
        1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,
        1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
        ]
    },
    {
        "x": 20,
        "y": 20,
        "level":[
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,
        1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,
        1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,
        1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,
        1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,
        1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,
        1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,
        1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,
        1,0,1,0,1,0,1,0,1,0,3,1,0,1,0,1,0,1,0,1,
        1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,
        1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,
        1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,
        1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,
        1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,
        1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,
        1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
        ]
    },
    {
        "x": 20,
        "y": 20,
        "level":[
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,3,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,
        1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,
        1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,
        1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,
        1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,
        1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,
        1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,
        1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,
        1,0,1,0,1,0,1,0,1,0,2,1,0,1,0,1,0,1,0,1,
        1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,
        1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,
        1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,
        1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,
        1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,
        1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,
        1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
        ]
    },
    {
        "x": 20,
        "y": 20,
        "level":[
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,2,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,
        1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,
        1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,
        1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,
        1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,
        1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,
        1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,
        1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,
        1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,
        1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,
        1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,
        1,0,1,3,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,
        1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,
        1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,
        1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,
        1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,
        1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
        ]
    },
    {
        "x": 20,
        "y": 20,
        "level":[
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,0,1,0,1,0,1,3,1,0,1,0,1,0,1,0,1,0,1,
        1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,
        1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,
        1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,
        1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,
        1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,
        1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,
        1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,
        1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,
        1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,
        1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,
        1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,
        1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,
        1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,
        1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,
        1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,
        1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,
        1,2,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
        ]
    },
    {
        "x": 20,
        "y": 40,
        "level":[
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,
        1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,
        1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,
        1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,
        1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,
        1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,
        1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,
        1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,
        1,0,0,0,1,0,1,0,1,0,2,1,0,1,0,1,0,1,0,1,
        1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,
        1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,
        1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,
        1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,
        1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,
        1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,
        1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,
        1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,
        1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,
        1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,
        1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,
        1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,
        1,0,1,0,1,0,1,0,1,0,3,1,0,1,0,1,0,1,0,1,
        1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,
        1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,
        1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,
        1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,
        1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,
        1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,
        1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
        ]
    }
];
var current = -1;

function buildLevelFromArray(array, x, y) {
    const stage = document.getElementsByClassName('stage')[0];
    stage.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
    stage.style.gridTemplateRows = `repeat(${y}, 1fr)`;
    stage.style.width = `calc(20px * ${x})`;
    stage.style.height = `calc(20px * ${y})`;
    stage.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        const cell = document.createElement('div');
        if (array[i] === 0) {
            cell.classList.add('path');
        }
        if (array[i] === 1) {
            cell.classList.add('wall');
        }
        if (array[i] === 2) {
            cell.classList.add('start');
        }
        if (array[i] === 3) {
            cell.classList.add('finish');
        }
        stage.appendChild(cell);
    }
}

function restartGame() {
    alert('You lose!');
    window.location.reload();
}

function winGame() {
    alert('You win!');
    window.location.reload();
}

function nextLevel() {
    current ++;
    if (current >= levels.length) {
        winGame();
    } else {
        buildLevelFromArray(levels[current]["level"], levels[current]["x"], levels[current]["y"]);
        document.getElementsByClassName('start')[0].addEventListener('click', (e) => {
            let walls = document.body.getElementsByClassName('wall')
            for (let i = 0; i < walls.length; i++) {
                walls.item(i).addEventListener('mouseover', (e) => {
                    restartGame();
                })
            }
            document.getElementsByClassName('finish')[0].addEventListener('click', (e) => {
                nextLevel();
            });
        });
    }
}

addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

addEventListener('keydown', (e) => {
    if (e.which == 13) {
        nextLevel();
    }
});

nextLevel();