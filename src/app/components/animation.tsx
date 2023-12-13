"use client";
import { TypeAnimation } from 'react-type-animation';

const Animation = () => {
  return (
    <TypeAnimation
      sequence={[
        'Awais',
        1000, 
        'Web developer',
        1000,
        'Mobile App developer',
        1000,
        'Web Designer',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};

export default Animation;