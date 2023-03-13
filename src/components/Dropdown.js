import { useState, useEffect, useRef } from 'react';
import '../styles/Dropdown.css';

const Dropdown = ({ title, items, handleChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = async () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  const handleListItemClick = (value) => {
    setSelected(value);
    closeDropdown();
    handleChange(value);
  };

  useEffect(() => {
    // Close dropdown when clicking outside of it
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
        document.removeEventListener('click', handleOutsideClick);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleOutsideClick);
    }
  }, [isOpen]);

  return (
    <div
      className={isOpen ? 'Dropdown open' : 'Dropdown'}
      ref={dropdownRef}
      data-testid="Dropdown"
    >
      <div className="Dropdown_header" onClick={toggleDropdown}>
        <p className="Dropdown_header-title">{selected || title}</p>
      </div>

      <ul className="Dropdown_list">
        {items.map((item, index) => (
          <li
            className="Dropdown_list-item"
            onClick={() => handleListItemClick(item)}
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
