import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import Cart from './Cart';

describe('Cart', () => {
  it('should render "My cart (5)" when given cart object of 5 items', () => {
    const cart = [
      { title: 'A' },
      { title: 'B' },
      { title: 'C' },
      { title: 'D' },
      { title: 'E' },
    ];
    render(<Cart cart={cart} />);
    const heading = screen.getByRole('heading', { name: /My cart/ });
    expect(within(heading).getByText('(5)')).toBeInTheDocument();
  });

  it('should render "My cart (0)" when given cart object of 0 items', () => {
    const cart = [];
    render(<Cart cart={cart} />);
    const heading = screen.getByRole('heading', { name: /My cart/ });
    expect(within(heading).getByText('(0)')).toBeInTheDocument();
  });

  it('should render "My cart (5)" when given cart object of 1 items of quantity 5', () => {
    const cart = [{ title: 'A', quantity: 5 }];
    const setCart = jest.fn();
    render(<Cart cart={cart} setCart={setCart} />);
    const heading = screen.getByRole('heading', { name: /My cart/ });
    expect(within(heading).getByText('(5)')).toBeInTheDocument();
  });

  it('should render 5 items when given cart object of 5 items instead of "Your cart is empty"', () => {
    const cart = [
      { title: 'A' },
      { title: 'B' },
      { title: 'C' },
      { title: 'D' },
      { title: 'E' },
    ];
    render(<Cart cart={cart} />);
    const items = screen.getAllByTestId('CartItem');
    expect(items.length).toBe(5);
    expect(screen.queryByText('Your cart is empty')).toBeNull();
  });

  it('sould render empty list when given empty cart object', () => {
    const cart = [];
    render(<Cart cart={cart} />);
    expect(screen.getByText('Your cart is empty')).toBeInTheDocument();
    expect(screen.queryAllByTestId('CartItem')).toEqual([]);
  });

  it('should render total of $150 when given cart object of 3 items of price 50', () => {
    const cart = [
      { title: 'A', price: 50 },
      { title: 'B', price: 50 },
      { title: 'C', price: 50 },
    ];
    render(<Cart cart={cart} />);
    expect(screen.getByText('$150')).toBeInTheDocument();
  });

  it('should render total of $0 when given empty cart object', () => {
    const cart = [];
    render(<Cart cart={cart} />);
    expect(screen.getByText('$0')).toBeInTheDocument();
  });
});
