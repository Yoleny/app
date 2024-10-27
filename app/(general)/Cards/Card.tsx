// src/components/Card.tsx
import React from 'react';


interface CardProps {
  header: string;
  body: string;
}

const Card: React.FC<CardProps> = ({ header, body }) => {
  return (
    <div className="card">
      <h2>{header}</h2>
      <p>{body}</p>
    </div>
  );
};

export default Card;