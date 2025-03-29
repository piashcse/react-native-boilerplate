import React from 'react';
import { View } from 'react-native';

interface SpacerProps {
  size?: number;
  horizontal?: boolean;
}

const Spacer: React.FC<SpacerProps> = ({ size = 10, horizontal = false }) => {
  return <View style={{ [horizontal ? 'width' : 'height']: size }} />;
};

export default Spacer;
