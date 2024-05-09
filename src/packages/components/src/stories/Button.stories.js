import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';

// This is the "meta" information for Storybook
export default {
  title: 'Button', // This will be the title in Storybook
  component: Button, // Component to be showcased
};

// Story 1: Default Button
export const Default = () => (
  <Button onClick={action('button-click')}>
    Click me!
  </Button>
);

// Story 2: Button with custom style
export const CustomStyle = () => (
  <Button style={{ backgroundColor: 'red', color: 'white' }}>
    Custom Style
  </Button>
);
