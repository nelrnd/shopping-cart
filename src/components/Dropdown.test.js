/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Dropdown from './Dropdown';

const items = ['Small', 'Medium', 'Large'];

describe('Dropdown', () => {
  it('should render correct title and correct number of list items', () => {
    render(<Dropdown title="Select size" items={items} />);
    expect(screen.getByText('Select size')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem').length).toBe(3);
  });

  it('sould open dropdown when clicking on it', async () => {
    render(<Dropdown title="Select size" items={items} />);
    const heading = screen.getByText('Select size');
    expect(screen.getByTestId('Dropdown')).not.toHaveClass('open');
    act(() => {
      userEvent.click(heading);
    });
    expect(screen.getByTestId('Dropdown')).toHaveClass('open');
  });

  it('should call handleChange with correct value', () => {
    const handleChange = jest.fn();
    render(
      <Dropdown title="Select size" items={items} handleChange={handleChange} />
    );
    const heading = screen.getByText('Select size');
    expect(screen.getByTestId('Dropdown')).not.toHaveClass('open');
    act(() => {
      userEvent.click(heading);
    });
    const mediumListItem = screen.getByText('Medium');
    act(() => {
      userEvent.click(mediumListItem);
    });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toBeCalledWith('Medium');
  });
});
