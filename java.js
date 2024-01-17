const buttons=document.querySelector('button');


function createDIV(numberOfGrid) {
    const containers = document.querySelectorAll('.container');
        containers.forEach(container => {
        container.remove()
    });

    for (let i=1;i<= numberOfGrid;i++) {

    const grid=document.createElement("div");
    grid.classList.add("container")
    document.body.append(grid)
}
}

function createGRID(numberOfGrid) {
    const divs=document.querySelectorAll("div");
    divs.forEach(div =>{
        for (let i=1; i<=numberOfGrid; i++) {
            const grid=document.createElement("div");
            grid.classList.add("grid")
            div.appendChild(grid)
    }
})}

function number() {
    let numberOfGrid=prompt("how many grids?")
    console.log(typeof Number(numberOfGrid))
    const number=Number(numberOfGrid)
    createDIV(number);
    createGRID(number);
}

buttons.addEventListener('click',number)
