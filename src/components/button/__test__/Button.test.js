import React from "react";
import { createRoot } from 'react-dom/client';
import Button from "../Button";

import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import renderer from 'react-test-renderer';

afterEach(cleanup);

it('renders without crashing', () => {
    const div = document.createElement('div');
    const root = createRoot(div);
    root.render(<Button />);
})

it('renders button correctly', () => {
    render(<Button label='click me' />);
    expect(screen.getByTestId('button')).toHaveTextContent('click me');
})

it('renders button correctlyg', () => {
    render(<Button label='save' />);
    expect(screen.getByTestId('button')).toHaveTextContent('save');
})

it("matches snapshot 1", () => {
    const tree = renderer.create(<Button label='save' />).toJSON();
    expect(tree).toMatchSnapshot();
})

it("matches snapshot 2", () => {
    const tree = renderer.create(<Button label='click me' />).toJSON();
    expect(tree).toMatchSnapshot();
})