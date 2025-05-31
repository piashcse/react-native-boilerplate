import React from 'react';
import { Snackbar } from 'react-native-paper';
import { useSnackbarStore } from '@/src/zustand/snackBarStore';
import styles from './AppSnackBar.style';

const AppSnackBar = () => {
  const { visible, message, hideSnackbar } = useSnackbarStore();

  return (
    <Snackbar
      style={styles.container}
      visible={visible}
      onDismiss={hideSnackbar}
      duration={3000}
      onIconPress={hideSnackbar}
    >
      {message}
    </Snackbar>
  );
};

export default AppSnackBar;
