import React from 'react';

interface SeparatorProps {
  className?: string;
  orientation?: 'horizontal' | 'vertical'; // Define allowed values for orientation
}

const Separator: React.FC<SeparatorProps> = ({ className, orientation = 'horizontal' }) => {
  // Add conditional logic for orientation
  const orientationClasses = orientation === 'vertical' ? 'h-full w-[1px]' : 'h-[1px] w-full';

  return (
    <div className={`${orientationClasses} bg-gray-300 ${className || ''}`} />
  );
};

export default Separator;

