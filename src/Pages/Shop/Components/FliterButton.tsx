// FilterButton.js
import React from 'react';

const FilterButton = ({ name, label, className }) => {
  return (
    <button data-name={name} className={`filter button ${className}`}>
      {label}
    </button>
  );
};

export default FilterButton;
