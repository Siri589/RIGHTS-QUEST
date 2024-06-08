const crosswordData = {
    grid: [
        ["C", "O", "N", "S", "T", "I", "T", "U", "T", "I", "O", "N"],
        ["", "", "", "", "", "", "", "", "", "", "", ""],
        ["P", "R", "E", "A", "M", "B", "L", "E", "", "", "", ""],
        ["A", "", "", "", "", "", "", "", "", "", "", ""],
        ["R", "", "", "", "", "", "", "", "", "", "", ""],
        ["L", "", "", "", "D", "E", "M", "O", "C", "R", "A", "C", "Y"],
        ["I", "", "", "", "", "", "", "", "", "", "", ""],
        ["A", "", "", "", "", "", "", "", "", "", "", ""],
        ["M", "", "", "", "", "", "", "", "", "", "", ""],
        ["E", "", "", "", "", "", "", "", "", "", "", ""],
        ["N", "", "", "", "", "", "", "", "", "", "", ""],
        ["T", "", "", "", "", "", "", "", "", "", "", ""]
    ],
    acrossClues: [
        { clue: "Supreme law of India", answer: "CONSTITUTION", row: 0, col: 0, number: 1 },
        { clue: "Introduction to the Constitution", answer: "PREAMBLE", row: 2, col: 0, number: 2 },
        { clue: "Government by the people", answer: "DEMOCRACY", row: 5, col: 4, number: 3 }
    ],
    downClues: [
        { clue: "Contains laws of India", answer: "PARLIAMENT", row: 2, col: 0, number: 4 }
    ]
};

const createCrossword = () => {
    const table = document.getElementById("crossword");

    for (let i = 0; i < crosswordData.grid.length; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < crosswordData.grid[i].length; j++) {
            let cell = document.createElement("td");
            if (crosswordData.grid[i][j] !== "") {
                let input = document.createElement("input");
                input.maxLength = 1;
                input.dataset.row = i;
                input.dataset.col = j;
                cell.appendChild(input);
                
                crosswordData.acrossClues.concat(crosswordData.downClues).forEach(clue => {
                    if (clue.row === i && clue.col === j) {
                        let cellNumber = document.createElement("div");
                        cellNumber.className = 'cell-number';
                        cellNumber.textContent = clue.number;
                        cell.appendChild(cellNumber);
                    }
                });
            }
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    const acrossClues = document.getElementById("across-clues");
    crosswordData.acrossClues.forEach(clue => {
        let li = document.createElement("li");
        li.innerHTML = `<strong>${clue.number}. ${clue.clue}</strong> (${clue.answer.length} letters)`;
        acrossClues.appendChild(li);
    });

    const downClues = document.getElementById("down-clues");
    crosswordData.downClues.forEach(clue => {
        let li = document.createElement("li");
        li.innerHTML = `<strong>${clue.number}. ${clue.clue}</strong> (${clue.answer.length} letters)`;
        downClues.appendChild(li);
    });
};

window.onload = createCrossword;
