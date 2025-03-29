import React, { useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';
import { Snackbar } from 'react-native-paper';

const NetworkMonitor = () => {
  const [isConnected, setIsConnected] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      if (state.isConnected !== isConnected) {
        setIsConnected(state.isConnected ?? false);
        setVisible(true);
      }
    });

    return () => unsubscribe();
  }, [isConnected]);

  return (
    <Snackbar
      visible={visible}
      onDismiss={() => setVisible(false)}
      duration={3000}
      action={{
        label: 'Close',
        onPress: () => setVisible(false),
      }}
    >
      {isConnected ? 'Back Online' : 'You are Offline'}
    </Snackbar>
  );
};

export default NetworkMonitor;
