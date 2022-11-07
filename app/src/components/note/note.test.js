import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import { Note } from './note'

const note = {
    content: "This is a test",
    important: true
}

test('render content', () => {
    
    const component = render(<Note {...note} />)
    component.getByText('This is a test')
    component.getByText('make not important')

    component.debug()
})

test('clicking the button calls event handler once', ()=>{

    const mockHandler = jest.fn()
    const component = render (<Note {...note} togleImportant={mockHandler} />)
    const button = component.getByText('make not important')

    fireEvent.click(button)
    expect(mockHandler).toHaveBeenCalledTimes(1)

})