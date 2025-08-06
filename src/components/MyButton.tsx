
'use client';

import React from 'react';

interface MyButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'fun';
  className?: string;
}

// components/MyButton.tsx
const MyButton: React.FC<MyButtonProps> = ({ 
  children = "Explore Kids Collection! 👶✨", 
  onClick = () => alert('Welcome to KidsWear PK! 🎉👕👗'), 
  variant = 'fun',
  className = '' 
}) => {
  const baseStyles = "font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-pulse hover:animate-none";
  
  const variantStyles = {
    primary: "bg-gradient-to-r from-pink-500 to-purple-600 text-white",
    secondary: "bg-white border-2 border-purple-300 text-purple-700 hover:bg-purple-50",
    fun: "bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white hover:from-yellow-500 hover:via-pink-600 hover:to-purple-700"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default MyButton;
