import React from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ rating }) => {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((value) => (
        <FaStar
          key={value}
          color={value <= rating ? '#FF8B03' : '#ffffff'}
          className='stars'
        />
      ))}
    </div>
  );
};

export default StarRating;

