const Gameboard = function() {
    if (!(this instanceof Gameboard)) {
        return new Gameboard();
    }
    this.squares = [];
    this.regions = [];
}

Gameboard.prototype.generate = function(reset) {

    if (reset) {
        this.squares = []
    }

    let row, column;
    let validColumns = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    for (let i = 1; i <= 81; i++) {
        row = null
        column = null

        row = Math.ceil(i / 9)
        if (validColumns.indexOf(i) !== -1) {
            column = i
        } else {
            let value = i % 9
            column = value > 0 ? value : 9
        }

        this.addSquare(new Square(i, row, column))
    }

    if (reset) {
        this.populate()
    }
}

Gameboard.prototype.generateGroup = function(groupBy) {
    let group = []
    for (let i = 1; i <= 9; i++) {
        let sqs = this.squares.filter(sq => sq[groupBy] === i)
        group.push(new Group(i, sqs))
    }
    return group;
}

Gameboard.prototype.populate = function() {
    this.squares.forEach(sq => {
        // generate region for each square
        if (sq.row <= 3) {
            if(sq.column <= 3) {
                sq.region = 1
            } else if (sq.column > 3 & sq.column <= 6) {
                sq.region = 2
            } else {
                sq.region = 3
            }
        } else if (sq.row > 3 && sq.row <= 6) {
            if (sq.column <= 3) {
                sq.region = 4
            } else if (sq.column > 3 & sq.column <= 6) {
                sq.region = 5
            } else {
                sq.region = 6
            }
        } else {
            if (sq.column <= 3) {
                sq.region = 7
            } else if (sq.column > 3 & sq.column <= 6) {
                sq.region = 8
            } else {
                sq.region = 9
            }
        }
    })

    this.squares.forEach(sq => {
        let response = sq.populateSquare()
        if (response === 'reset'){
            this.generate(true)
            return;
        }
        this.updateConflicts(sq)
    })

    this.regions = this.generateGroup("region")
    this.columns = this.generateGroup("column")
    this.rows = this.generateGroup("row")
    console.log("BRADY ", this.regions, this.columns, this.rows)
}

Gameboard.prototype.addSquare = function (square) {
    this.squares.push(square)
}

Gameboard.prototype.updateConflicts = function(square) {
    let matches = { 
        "region": square.region, 
        "column": square.column, 
        "row": square.row
    }

    let conflictValue = square.value

    let creator = (match) => {
        return this.squares.filter(filterSquare => filterSquare[match] === matches[match]).forEach(enumSquare => {
            enumSquare.addConflict(conflictValue)
        })
    }

    let changes = { 
        "regions": [],
        "columns": [],
        "rows": []
    } 

    Object.keys(matches).forEach(match => {
        changes[`${match}s`] = creator(match)
    })

    this.regions = Object.assign({}, this.regions, changes.regions)
    this.columns = Object.assign({}, this.columns, changes.columns)
    this.rows = Object.assign({}, this.rows, changes.rows)
}

const Square = function (value, row, column, conflicts, region) {
    if (!(this instanceof Square)) {
        return new Square(value, row, column, conflicts, region);
    }
    this.value = value
    this.row = row
    this.column = column
    this.conflicts = conflicts || []
    this.region = region || 0
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
                return 'reset';
        }
    }
}

export default Gameboard

const Group = function (id, squares) {
    if (!(this instanceof Group)) {
        return new Group()
    }

    this.squares = squares
    this.id = id;
}


Group.prototype.addSquare = function (square) {
    this.squares.push(square)
}