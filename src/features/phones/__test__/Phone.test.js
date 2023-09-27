import '@testing-library/jest-dom';
import {render, screen} from "@testing-library/react";
import Phones from "../Phones";

const users = [
    {name: 'davide', surname: 'ga'},
    {name: 'mario', surname: 'lsd'},
    {name: 'giovanni', surname: 'das'},
    {name: 'sara', surname: 'mine'},
    {name: 'michael', surname: 'sad'},
]

it('render list ', () => {
    render(<Phones />)
    expect(screen.getByText('davide')).toBeInTheDocument();
})

jest.mock("../phoneAPI", () => ({
    getAll: jest.fn(() => Promise.resolve(users))
}));
