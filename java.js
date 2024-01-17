let numberOfGrid=10;

function createGrid() {
    const container=document.querySelector("div");
    const grid=document.createElement("div");
    grid.classList.add("grid")
    //grid.setAttribute('style','border: 1px solid black')
    //grid.textContent="fuck!!"
    container.appendChild(grid)
}

for (let i=0;i<= numberOfGrid;i++) {
    createGrid()
}

const container2=document.createElement("div");
const grid2=document.createElement("div")
grid2.textContent="fuck!"
console.log(grid2)
container2.appendChild(grid2)