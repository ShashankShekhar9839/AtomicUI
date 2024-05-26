// src/Card/Card.stories.js
import React from 'react';
import Card from '../Card';

export default {
  title: 'Components/Card',
  component: Card
};

export const Default = () => <Card onClick={() => alert('Clicked!')}>Click Me</Card>;
