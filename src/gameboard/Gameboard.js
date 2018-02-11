const Gameboard = function() {
    if (!(this instanceof Gameboard)) {
        return new Gameboard();
    }
    this.regions = [];
}

Gameboard.prototype.generate = function() {
    for (let i = 1; i <= 9; i++) {
        this.addRegion(new Region())
    }
    this.regions.forEach((region) => {
        region.generateSquares(region)
    })
}

Gameboard.prototype.populate = function() {
    this.regions.forEach(region => {
        region.populateSquares()
    })
}

Gameboard.prototype.addRegion = function(region) {
    this.regions.push(region)
}

Gameboard.prototype.updateConflicts = function(square, squareRegion) {
    this.regions.forEach(region => {
        if (region === squareRegion) {
            region.squares.forEach(sq => {
                sq.addConflict(square.value)
            })
        }
    })
}

const Region = function() {
    if (!(this instanceof Region)) {
        return new Region();
    }
    this.squares = []
}

Region.prototype.generateSquares = function(region) {
    for (let i = 1; i <= 9; i++) {
        this.addSquare(new Square(region))
    }
}

Region.prototype.populateSquares = function() {
    this.squares.forEach(sq => {
        sq.populateSquare()
    })
}

Region.prototype.addSquare = function(square) {
    this.squares.push(square)
}

const Square = function (region, value, row, column, conflicts) {
    if (!(this instanceof Square)) {
        return new Square(value, row, column, conflicts);
    }
    this.value = value
    this.row = row
    this.column = column
    this.conflicts = conflicts || []
    this.region = region
}

Square.prototype.addConflict = function(conflict) {
    this.conflicts.push(conflict)
}

Square.prototype.populateSquare = function() {
    let value = Math.ceil(Math.random() * 9);
    if (this.conflicts.indexOf(value) === -1) {
        this.value = value
    }
}

export default Gameboard

//////////////////////////////////////////////////
// const generateRandomSudokuNumber = (square, square_index, region, region_index) => {
//     let value = Math.ceil(Math.random() * 9);

//     const setValue = (value) => {
//         gameboard.regions[region_index].squares[square_index].value = value
//         updateConflicts(square, square_index, region, region_index)
//     }

//     if (square.conflicts.indexOf(value) === -1) {
//         setValue(value)
//     } else {
//         switch (1) {
//             case 1:
//                 if (square.conflicts.indexOf(1) === -1) {
//                     setValue(1)
//                     break;
//                 }
//             case 2:
//                 if (square.conflicts.indexOf(2) === -1) {
//                     setValue(2)
//                     break;
//                 }
//             case 3:
//                 if (square.conflicts.indexOf(3) === -1) {
//                     setValue(3)
//                     break;
//                 }
//             case 4:
//                 if (square.conflicts.indexOf(4) === -1) {
//                     setValue(4)
//                     break;
//                 }
//             case 5:
//                 if (square.conflicts.indexOf(5) === -1) {
//                     setValue(5)
//                     break;
//                 }
//             case 6:
//                 if (square.conflicts.indexOf(6) === -1) {
//                     setValue(6)
//                     break;
//                 }
//             case 7:
//                 if (square.conflicts.indexOf(7) === -1) {
//                     setValue(7)
//                     break;
//                 }
//             case 8:
//                 if (square.conflicts.indexOf(8) === -1) {
//                     setValue(8)
//                     break;
//                 }
//             case 9:
//                 if (square.conflicts.indexOf(9) === -1) {
//                     setValue(9)
//                     break;
//                 }
//             default:
//                 console.error('should reset here', `region ${region_index}`, `square: ${square_index}`, `conflicts ${square.conflicts}`)
//         }
//     }
// }

// const updateConflicts = (square, square_index, region, region_index) => {
//     //update region
//     gameboard.regions[region_index].squares.forEach(sq => {
//         if (sq !== square) {
//             sq.conflicts.push(square.value);
//         }
//     });

//     //update rest of board
//     gameboard.regions.forEach(reg => {
//         if (reg !== region) {
//             reg.squares.forEach(sq => {
//                 if (sq.column === square.column || sq.row === square.row) {
//                     sq.conflicts.push(square.value);
//                 }
//             })
//         }
//     })
// }

