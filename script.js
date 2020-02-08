
//! Setup function fires automatically
function setup() {

    var socket = io();

    var side = 20;

    var matrix = [];

    //! Getting DOM objects (HTML elements)
    let carrotcount = document.getElementById('carrotscounter');
    let rabbitcount = document.getElementById('rabbitscounter');
    let predatorcount = document.getElementById('predatorscounter');
    let farmercount = document.getElementById('farmerscounter');
    let huntercount = document.getElementById('hunterscounter');
    let omnivorouscount = document.getElementById('omnivorousescounter');

    function clickHandler(evt){
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 9;
        console.log(evt);
    }
    
    var p = document.getElementById('asteroid');
    console.log(p);
    p.addEventListener("click", clickHandler);
    //! adding socket listener on "data" <-- name, after that fire 'drawCreatures' function 

    socket.on("data", drawCreatures);

    function drawCreatures(data) {
        //! after getting data pass it to matrix variable
        matrix = data.matrix;
        carrotcount.innerText = data.countofcarrots;
        rabbitcount.innerText = data.countofrabbits;
        predatorcount.innerText = data.countofpredators;
        farmercount.innerText = data.countoffarmers;
        huntercount.innerText = data.countofhunters;
        omnivorouscount.innerText = data.countofomnivorouses;
        //! Every time it creates new Canvas woth new matrix size
        createCanvas(matrix[0].length * side, matrix.length * side)
        //! clearing background by setting it to new grey color
        background('#acacac');
        //! Draw carrotscount and rabbitsCount to HTML (use DOM objects to update information, yes, and use .innerText <- function)

        //! Drawing and coloring RECTs
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) {
                    fill("#f0ba3e");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 2) {
                    fill("white");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 0) {
                    fill('#acacac');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 3) {
                    fill('red');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 4) {
                    fill('blue');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 5) {
                    fill('green');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 6) {
                    fill('black');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 6) {
                    fill('violet');
                    rect(j * side, i * side, side, side);
                }
            }
        }
    }
}