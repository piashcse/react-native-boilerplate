import React, { ReactNode } from 'react';
import { Text, TextProps } from 'react-native-paper';
import { TextStyle } from 'react-native';
import styles from './PrimaryTextView.style';
import { Fonts } from '@/src/config/appConfig';

interface AppTextProps extends TextProps {
  children: ReactNode;
  fontSize?: number;
  fontFamily?: 'bold' | 'semiBold' | 'medium' | 'regular';
  color?: string;
  style?: TextStyle;
  textAlign?: 'left' | 'center' | 'right';
}

const PrimaryTextView: React.FC<AppTextProps> = ({
  children,
  fontSize = 14,
  fontFamily = 'Inter_400Regular',
  color = '#000',
  style,
  textAlign,
  ...props
}) => {
  return (
    <Text
      style={[
        styles.text,
        {
          fontSize,
          fontFamily: Fonts[fontFamily] || fontFamily,
          color,
          textAlign,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};
export default PrimaryTextView;
