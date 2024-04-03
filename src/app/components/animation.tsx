"use client";
import { TypeAnimation } from 'react-type-animation';

const Animation = () => {
  return (
    <TypeAnimation
      sequence={[
        'Web Developer_',
        1000, 
        'React.js developer_',
        1000,
        'Software Engineer_',
        1000,
        'Next.js Developer_',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2rem', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};

export default Animation;