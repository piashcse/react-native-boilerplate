import React from 'react';
import FastImage from 'react-native-fast-image';
import { ImageStyle } from 'react-native';
import styles from './CachedImageViewstyle';

interface CachedImageProps {
  uri: string;
  style?: ImageStyle;
  placeholder?: number;
}

const CachedImageView: React.FC<CachedImageProps> = ({
  uri,
  style,
  placeholder,
}) => {
  return (
    <FastImage
      source={uri ? { uri } : placeholder}
      style={[styles.image, style]}
      resizeMode={FastImage.resizeMode.cover}
    />
  );
};

export default CachedImageView;
