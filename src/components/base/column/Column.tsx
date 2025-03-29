import React from 'react';
import { View, ViewStyle } from 'react-native';
import styles from './Column.style';

interface ColumnProps {
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

const Column: React.FC<ColumnProps> = ({
  children,
  style,
  justifyContent = 'flex-start',
  alignItems = 'center',
}) => {
  return (
    <View style={[styles.column, { justifyContent, alignItems }, style]}>
      {children}
    </View>
  );
};

export default Column;
