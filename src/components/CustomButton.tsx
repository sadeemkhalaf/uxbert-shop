import React from 'react';

const CustomButton = ({children, title = 'Button', bgColor = '', textColor = '', onPress}) => {
  return (
    <a
      onClick={onPress}
      className="mx-2 my-2 flex items-center bg-indigo-600 transition duration-150 ease-in-out hover:border-indigo-600 border border-indigo-700 rounded text-white hover:text-indigo-400 pl-3 pr-6 py-2 text-sm"
    >
      {children}
      {title}
    </a>
  );
};

export default CustomButton;
