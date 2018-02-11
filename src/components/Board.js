// Module imports
import React, { Component } from 'react'

// App imports
import Region from './Region'

export class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            regions: []
        }
    }

    componentDidMount() {
        generateGameboard();
        let newRegions = gameboard.regions.map((region, i) => <Region squares={region.squares} key={i} />)
        this.setState({ regions: newRegions })
    }

    render() {
        return (
            <div className='board'>
                {this.state.regions}
            </div>
        )
    }
}

const generateGameboard = () => {
    gameboard.regions.forEach((region, region_index) => {
       generateRegion(region, region_index) 
    });
}

const generateRegion = (region, region_index) => {
    region.squares.forEach((square, square_index) => {
        let originalRegion = region;
        generateRandomSudokuNumber(square, square_index, region, region_index);
    })
}

const generateRandomSudokuNumber = (square, square_index, region, region_index) => {
    let value = Math.ceil(Math.random() * 9);

    const setValue = (value) => {
        gameboard.regions[region_index].squares[square_index].value = value
        updateConflicts(square, square_index, region, region_index)
    }

    if (square.conflicts.indexOf(value) === -1) {
         setValue(value)
    } else {
        switch (1) {
            case 1:
                if (square.conflicts.indexOf(1) === -1) {
                    setValue(1)
                    break;
                }
            case 2:
                if (square.conflicts.indexOf(2) === -1) {
                    setValue(2)
                    break;
                }
            case 3:
                if (square.conflicts.indexOf(3) === -1) {
                    setValue(3)
                    break;
                }
            case 4:
                if (square.conflicts.indexOf(4) === -1) {
                    setValue(4)
                    break;
                }
            case 5:
                if (square.conflicts.indexOf(5) === -1) {
                    setValue(5)
                    break;
                }
            case 6:
                if (square.conflicts.indexOf(6) === -1) {
                    setValue(6)
                    break;
                }
            case 7:
                if (square.conflicts.indexOf(7) === -1) {
                    setValue(7)
                    break;
                }
            case 8:
                if (square.conflicts.indexOf(8) === -1) {
                    setValue(8)
                    break;
                }
            case 9:
                if (square.conflicts.indexOf(9) === -1) {
                    setValue(9)
                    break;
                }
            default:
                console.error('should reset here', `region ${region_index}`, `square: ${square_index}`, `conflicts ${square.conflicts}`)
        }
    }
}

const updateConflicts = (square, square_index, region, region_index) => {
    //update region
    gameboard.regions[region_index].squares.forEach(sq => {
        if (sq !== square) {
            sq.conflicts.push(square.value);
        }
    });

    //update rest of board
    gameboard.regions.forEach(reg => {
        if(reg !== region) {
            reg.squares.forEach(sq => {
                if (sq.column === square.column || sq.row === square.row) {
                    sq.conflicts.push(square.value);
                }
            })
        }
    })
}

let gameboard = {
    regions: [
        {
            squares: [
                {
                    value: 0,
                    conflicts: [],
                    row: 0,
                    column: 0
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 0,
                    column: 1
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 0,
                    column: 2
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 1,
                    column: 0
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 1,
                    column: 1
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 1,
                    column: 2
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 2,
                    column: 0
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 2,
                    column: 1
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 2,
                    column: 2
                }
            ],
        },
        {
            squares: [
                {
                    value: 0,
                    conflicts: [],
                    row: 0,
                    column: 3
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 0,
                    column: 4
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 0,
                    column: 5
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 1,
                    column: 3
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 1,
                    column: 4
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 1,
                    column: 5
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 2,
                    column: 3
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 2,
                    column: 4
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 2,
                    column: 5
                }
            ],
        },
        {
            squares: [
                {
                    value: 0,
                    conflicts: [],
                    row: 0,
                    column: 6
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 0,
                    column: 7
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 0,
                    column: 8
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 1,
                    column: 6
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 1,
                    column: 7
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 1,
                    column: 8
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 2,
                    column: 6
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 2,
                    column: 7
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 2,
                    column: 8
                }
            ],
        },
        {
            squares: [
                {
                    value: 0,
                    conflicts: [],
                    row: 3,
                    column: 0
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 3,
                    column: 1
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 3,
                    column: 2
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 4,
                    column: 0
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 4,
                    column: 1
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 4,
                    column: 2
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 5,
                    column: 0
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 5,
                    column: 1
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 5,
                    column: 2
                }
            ],
        },
        {
            squares: [
                {
                    value: 0,
                    conflicts: [],
                    row: 3,
                    column: 3
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 3,
                    column: 4
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 3,
                    column: 5
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 4,
                    column: 3
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 4,
                    column: 4
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 4,
                    column: 5
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 5,
                    column: 3
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 5,
                    column: 4
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 5,
                    column: 5
                }
            ],
        },
        {
            squares: [
                {
                    value: 0,
                    conflicts: [],
                    row: 3,
                    column: 6
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 3,
                    column: 7
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 3,
                    column: 8
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 4,
                    column: 6
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 4,
                    column: 7
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 4,
                    column: 8
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 5,
                    column: 6
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 5,
                    column: 7
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 5,
                    column: 8
                }
            ],
        },
        {
            squares: [
                {
                    value: 0,
                    conflicts: [],
                    row: 6,
                    column: 0
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 6,
                    column: 1
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 6,
                    column: 2
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 7,
                    column: 0
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 7,
                    column: 1
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 7,
                    column: 2
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 8,
                    column: 0
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 8,
                    column: 1
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 8,
                    column: 2
                }
            ],
        },
        {
            squares: [
                {
                    value: 0,
                    conflicts: [],
                    row: 6,
                    column: 3
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 6,
                    column: 3
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 6,
                    column: 3
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 7,
                    column: 4
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 7,
                    column: 4
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 7,
                    column: 4
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 8,
                    column: 5
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 8,
                    column: 5
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 8,
                    column: 5
                }
            ],
        },
        {
            squares: [
                {
                    value: 0,
                    conflicts: [],
                    row: 6,
                    column: 6
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 6,
                    column: 7
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 6,
                    column: 8
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 7,
                    column: 6
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 7,
                    column: 7
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 7,
                    column: 8
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 8,
                    column: 6
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 8,
                    column: 7
                },
                {
                    value: 0,
                    conflicts: [],
                    row: 8,
                    column: 8
                }
            ],
        }
    ]
}