import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import styles from './CentralLoading.style';
import { useSelector } from 'react-redux';
import { appColors } from '@/src/constants/appColors';
import { selectGlobalLoading } from '@/src/selector/selector';

const CentralLoading = () => {
  const isLoading = useSelector(selectGlobalLoading);
  if (!isLoading) return null;
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={appColors.light.primaryColor} />
    </View>
  );
};

export default CentralLoading;
