// SimpleComponent.tsx
import React from 'react';

// Define the props interface (optional but recommended)
interface SimpleContainerProps {
  name?: string;
  className: string | undefined;
}

export const SimpleContainer: React.FC<SimpleContainerProps> = ({
  name = 'thisis demo heroContent',
  className,
}) => {
  return (
    <div className={className}>
      <h1>Hello, {name}!</h1>
      <p>This is a simple React component written in TypeScript.</p>
    </div>
  );
};

export default SimpleContainer;
