// Module imports
import React, { Component } from 'react'

// App imports
import Square from './Square'

export default class Region extends Component {
    constructor(props) {
        super(props)
        this.state = {
            squares: []
        }
    }

    componentDidMount() {
        if (this.props.squares) {
            let newSquares = this.props.squares.map((square, i) => <Square value={square.value} key={i} column={square.column} row={square.row} />)
            this.setState({squares: newSquares})
        }
    }

    render() {
        return (
            <div className="region">
                {this.state.squares}
            </div>           
        )
    }
}