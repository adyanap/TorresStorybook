import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';

import Button from '../components/Button';
import BufferView from './decorators';

export const handleButtonPress = event => {
  event.persist();
  action('tapped-default');
}


export const actions = {
  onButtonPress: handleButtonPress,
};

storiesOf('Button', module)
  .addDecorator(BufferView)
  .add('default', () => <Button {...actions}>Press Me</Button>)
  .add('outline', () => (
    <Button {...actions} >
      Press Me
    </Button>
  ))
