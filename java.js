const initiate=document.querySelector('#btn');
const end=document.querySelector('#end')


function clean() {
    const containers = document.querySelectorAll('.container');
    containers.forEach(container => {
    container.remove()
});
}

function createDIV(numberOfGrid) {

    clean()

    for (let i=1;i<= numberOfGrid;i++) {

    const grid=document.createElement("div");
    grid.classList.add("container")
    document.body.append(grid)
}
}

function createGRID(numberOfGrid) {
    const divs=document.querySelectorAll(".container");
    divs.forEach(div =>{
        for (let i=1; i<=numberOfGrid; i++) {
            const grid=document.createElement("div");
            grid.classList.add("grid")
            
            div.appendChild(grid)
    }
})}

function number() {
    let numberOfGrid=prompt("how many grids?")
    //console.log(typeof Number(numberOfGrid))
    const number=Number(numberOfGrid)
    createDIV(number);
    createGRID(number);
    document.querySelectorAll('.grid').forEach (grid => {
        grid.addEventListener('mouseover', mouseover)
        grid.addEventListener('mouseout', ()=> mouseout(grid))
    })
}

function mouseover () {
    this.setAttribute('style', "background-color: gray")
}    

function mouseout (grid) {
    grid.setAttribute('style', "background-color: white")
    //document.body.setAttribute('style',"background-color: black")
}


initiate.onclick=function() {number()}
end.onclick=function() {clean()}

//buttons.addEventListener('click',number)
//grid.onmouseover=function() {grid.setAttribute('style', "background-color: red")}
//grid.addEventListener('mouseover',() => {grid.setAttribute('style', "background-color: gray")})
