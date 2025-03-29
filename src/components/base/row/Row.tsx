import React from 'react';
import { View, ViewStyle } from 'react-native';
import styles from './Row.style';

interface RowProps {
  children: React.ReactNode;
  style?: ViewStyle;
  justifyContent?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
}

const Row: React.FC<RowProps> = ({
  children,
  style,
  justifyContent = 'flex-start',
  alignItems = 'center',
}) => {
  return (
    <View style={[styles.row, { justifyContent, alignItems }, style]}>
      {children}
    </View>
  );
};

export default Row;
