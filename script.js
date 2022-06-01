// creating and styling the board grid
let board = document.querySelector(".board")
board.style.gridTemplateColumns = "repeat(16 , 1fr)";
board.style.gridTemplateRows = "repeat(16 , 1fr)";

/* I was wondering what's the essence of creating divs if I already wrote the code above. here is the thing; 
 creating grid columns and rows is just a layout, it doesnt compartmentalise each of the layout for
individual specific use like a div would and has done in this case. I'm glad i figured that out myself.*/

// forloop to create 256 square divs(16*16)
for( let i = 0; i < 256; i++) {
let square = document.createElement("div");
square.style.backgroundColor = "red";
board.insertAdjacentElement("beforeend", square);
}