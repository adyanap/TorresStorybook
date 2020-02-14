import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import colors from '../config/colors';

export const Button = ({onPress = () => {}, children = ""}) => (
  <TouchableOpacity onPress={onPress}>
    <Text>{children}</Text>
  </TouchableOpacity>
);
