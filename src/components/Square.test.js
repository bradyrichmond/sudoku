// Module imports
import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount, render } from 'enzyme'

// App imports
import Square from './Square'

describe('square render tests', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Square />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('renders with a value', () => {
        var wrapper = render(<Square value='9'/>)
        expect(wrapper.html()).toBe('9')
    })
})