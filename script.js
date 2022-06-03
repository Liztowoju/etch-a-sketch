// creating and styling the board grid

function fillBoard(size) {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    /* I was wondering what's the essence of creating divs if I already wrote the code above. here is the thing; 
     creating grid columns and rows is just a layout, it doesnt compartmentalise each of the layout for
    individual specific use like a div would and has done in this case. I'm glad i figured that out myself.*/

    // forloop to create 256 square divs(16*16)
    let amount = size * size
    for (let i = 0; i < amount; i++) {
        let square = document.createElement("div");
        square.style.backgroundColor = "red";
        board.insertAdjacentElement("beforeend", square);
    }
}
fillBoard(16);

function changeSize(input) {
    fillBoard(input);
}