import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

const mockToggleModal = jest.fn();

const currentPhoto = {
    name: "Astartes",
    category: "commercial",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, tenetur soluta ut voluptates eligendi molestiae placeat sint possimus illum ullam laboriosam atque praesentium ducimus quas expedita commodi, est ipsum optio.",
    index: 1
}

afterEach(cleanup);

describe('Modal Component', () => {
    it('renders', () => {
        render(<Modal currentPhoto={currentPhoto} />)
    });

    it('matches snapshot of DOM node structure', () => {
        const {asFragment} = render(<Modal currentPhoto={currentPhoto} />);
        expect(asFragment()).toMatchSnapshot()
    }); 
});

describe('click event', () => {
    it('calls onClose handler', () => {
        const { getByText } = render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />)
        fireEvent.click(getByText("Close this Modal"))
        expect(mockToggleModal).toHaveBeenCalled();
    })
})
