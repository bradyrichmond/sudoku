const Gameboard = function() {
    if (!(this instanceof Gameboard)) {
        return new Gameboard();
    }
    this.regions = [];
}

Gameboard.prototype.generate = function() {
    for (let i = 1; i <= 9; i++) {
        this.addRegion(new Region(i))
    }
    this.regions.forEach((region) => {
        region.generateSquares(region)
    })
}

Gameboard.prototype.populate = function() {
    this.regions.forEach((region, id) => {
        region.populateSquares()
        this.updateConflicts(region)
    })
}

Gameboard.prototype.addRegion = function(region) {
    this.regions.push(region)
}

Gameboard.prototype.updateConflicts = function(outerRegion) {
    this.regions.forEach(innerRegion => {
        if (outerRegion !== innerRegion) {
            outerRegion.squares.forEach(outerSquare => {
                innerRegion.squares.forEach(innerSquare => {
                    if (outerSquare.column === innerSquare.column || outerSquare.row === innerSquare.row) {
                        innerSquare.addConflict(outerSquare.value)
                    }
                })
            })
        }
    })
}

const Region = function(id) {
    if (!(this instanceof Region)) {
        return new Region()
    }

    this.squares = []
    this.id = id;
}

Region.prototype.generateSquares = function(region) {
    let row, column;
    
    for (let i = 1; i <= 9; i++) {
        row = null
        column = null

        //Default for regions 1-3
        row = Math.ceil(i / 3);

        if (region.id === 4 || region.id === 5 || region.id === 6) { 
            row += 3
        } else if (region.id === 7 || region.id === 8 || region.id === 9) {
            row += 6
        }

        switch (i) {
            case 1:
            case 4:
            case 7:
                column = 1
                break;
            case 2:
            case 5:
            case 8:
                column = 2
                break;
            case 3:
            case 6:
            case 9:
                column = 3
                break;
            default:
                console.log("shouldn't get here")
        }

        if (region.id === 2 || region.id === 5 || region.id === 8) {
            column += 3
        } else if (region.id === 3 || region.id === 6 || region.id === 9) {
            column += 6
        }

        this.addSquare(new Square(region, 0, row, column))
    }
}

Region.prototype.populateSquares = function() {
    this.squares.forEach(sq => {
        sq.populateSquare()
        this.addConflicts(sq)
    })
}

Region.prototype.addConflicts = function(square) {
    this.squares.forEach(sq => {
        if (sq !== square) {
            sq.addConflict(square.value)
        }
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
    } else {
        switch (1) {
            case 1:
                if (this.conflicts.indexOf(1) === -1) {
                    this.value = 1
                    break;
                }
            case 2:
                if (this.conflicts.indexOf(2) === -1) {
                    this.value = 2
                    break;
                }
            case 3:
                if (this.conflicts.indexOf(3) === -1) {
                    this.value = 3
                    break;
                }
            case 4:
                if (this.conflicts.indexOf(4) === -1) {
                    this.value = 4
                    break;
                }
            case 5:
                if (this.conflicts.indexOf(5) === -1) {
                    this.value = 5
                    break;
                }
            case 6:
                if (this.conflicts.indexOf(6) === -1) {
                    this.value = 6
                    break;
                }
            case 7:
                if (this.conflicts.indexOf(7) === -1) {
                    this.value = 7
                    break;
                }
            case 8:
                if (this.conflicts.indexOf(8) === -1) {
                    this.value = 8
                    break;
                }
            case 9:
                if (this.conflicts.indexOf(9) === -1) {
                    this.value = 9
                    break;
                }
            default:
                console.error('should reset here')
        }
    }
}

export default Gameboard

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

