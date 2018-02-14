// Module imports
import React, { Component } from 'react'

// App imports
import Region from './Region'
import Gameboard from '../gameboard/Gameboard'

export class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            regions: []
        }
    }

    componentDidMount() {
        let gameboard = new Gameboard();
        gameboard.generate();
        gameboard.populate();
        console.log(gameboard)
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
