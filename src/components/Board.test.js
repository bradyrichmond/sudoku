// Module imports
import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount, render } from 'enzyme'

// App imports
import { Board, createGameboard } from './Board'
import Region from './Region'

describe('board render tests', () => {
    
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Board />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('renders 9 regions', () => {
        var wrapper = render(<Board />)
        var elements = wrapper.find('.region')
        expect(elements.length).toBe(9)
    })
})

describe('game creation', () => {

    it('creates and populates the gameboard', () => {
        let gameboard = createGameboard()

    })

    it('can tell if gameboard is incomplete', () => {
        let gameboard = createGameboard()
        expect(gameboard.isComplete()).toBe(false);
    })

    it('can tell if gameboard is complete', () => {
        let gameboard = createGameboard();
        gameboard = solveGameboard(gameboard);
        expect(gameboard.isComplete).toBe(true);
    })
})