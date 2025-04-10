import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import styles from './CentralLoading.style';
import { useSelector } from 'react-redux';
import { AppColors } from '@/src/constants/AppColors';
import { selectGlobalLoading } from '@/src/selector/Selector';

const CentralLoading = () => {
  const isLoading = useSelector(selectGlobalLoading);
  if (!isLoading) return null;
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={AppColors.light.primaryColor} />
    </View>
  );
};

export default CentralLoading;
