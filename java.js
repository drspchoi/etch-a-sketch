let numberOfGrid=20;

function createDIV(numberOfGrid) {
    for (let i=0;i<= numberOfGrid;i++) {

    const grid=document.createElement("div");
    grid.classList.add("container")
    document.body.append(grid)
}
}

createDIV(numberOfGrid)

const divs=document.querySelectorAll("div");
divs.forEach(div =>{
    for (let i=0; i<=numberOfGrid; i++) {
        const grid=document.createElement("div");
        grid.classList.add("grid")
        div.appendChild(grid)
    }
})

/*const container2=document.createElement("div");
const grid2=document.createElement("div")
grid2.textContent="fuck!"
console.log(grid2)
container2.appendChild(grid2)*/