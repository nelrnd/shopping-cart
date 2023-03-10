import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBarCart from './NavBarCart';

describe('Navigation bar cart', () => {
  it('should not render items number when given empty cart', () => {
    const cart = [];
    render(<NavBarCart cart={cart} />);
    const itemsNumber = screen.queryByTestId('items-number');
    expect(itemsNumber).not.toBeInTheDocument();
  });

  it('should render 4 to items number when given a cart of 4 items', () => {
    const cart = [{ name: 'A' }, { name: 'B' }, { name: 'C' }, { name: 'D' }];
    render(<NavBarCart cart={cart} />);
    const itemsNumber = screen.getByText('4');
    expect(itemsNumber).toBeInTheDocument();
  });

  it('should render 4 to items number when given a cart of 2 items of quantity 2', () => {
    const cart = [
      { name: 'A', quantity: 2 },
      { name: 'B', quantity: 2 },
    ];
    render(<NavBarCart cart={cart} />);
    const itemsNumber = screen.getByText('4');
    expect(itemsNumber).toBeInTheDocument();
  });

  it('should render 9 to items number when given a cart of 1 item of quantity 9', () => {
    const cart = [{ name: 'A', quantity: 9 }];
    render(<NavBarCart cart={cart} />);
    const itemsNumber = screen.getByText('9');
    expect(itemsNumber).toBeInTheDocument();
  });

  it('should render +9 to items number when given a cart with 10 items', () => {
    const cart = [
      { name: 'A' },
      { name: 'B' },
      { name: 'C' },
      { name: 'D' },
      { name: 'E' },
      { name: 'F' },
      { name: 'G' },
      { name: 'H' },
      { name: 'I' },
      { name: 'J' },
    ];
    render(<NavBarCart cart={cart} />);
    const itemsNumber = screen.getByText('+9');
    expect(itemsNumber).toBeInTheDocument();
  });
});
