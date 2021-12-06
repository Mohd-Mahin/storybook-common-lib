import React from 'react';
import { storiesOf } from '@storybook/react';
import Select from './select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

const dataProps = {
    options,
    onChange: (selectedOption) => {
        console.log(selectedOption, 'selected-option');
    }
}


storiesOf('Select Options', module)
    .add('Select Option Component', () => <Select {...dataProps} />)