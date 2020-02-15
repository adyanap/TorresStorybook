import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import colors from '../config/colors';

export default function Button({onPress = () => {}, children = ''}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
}
