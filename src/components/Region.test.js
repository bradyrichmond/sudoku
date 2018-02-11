// Module imports
import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount, render } from 'enzyme'

// App imports
import Region, { generateSquares } from './Region'

describe('region render tests', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Region />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('renders 9 squares', () => {
        var wrapper = render(<Region />)
        var elements = wrapper.find('.square')
        expect(elements.length).toBe(9)
    })
})