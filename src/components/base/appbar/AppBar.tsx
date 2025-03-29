import React from 'react';
import { Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import styles from './AppBar.style';

interface CustomAppBarProps {
  title: string;
  onBackPress?: () => void;
  titleAlign?: 'left' | 'center';
  rightIcons?: { icon: string; onPress: () => void }[];
  children?: React.ReactNode;
}

const AppBar: React.FC<CustomAppBarProps> = ({
  title,
  onBackPress,
  titleAlign = 'center',
  rightIcons = [],
  children,
}) => {
  return (
    <View>
      {/* AppBar */}
      <Appbar.Header style={styles.header}>
        {/* Back Button (Optional) */}
        {onBackPress && <Appbar.BackAction onPress={onBackPress} />}

        {/* Title (Center or Left) */}
        <View
          style={[
            styles.titleContainer,
            titleAlign === 'center' && styles.centerTitle,
          ]}
        >
          <Text style={styles.title}>{title}</Text>
        </View>

        {/* Right Icons (Up to 3) */}
        <View style={styles.rightIcons}>
          {rightIcons.map((item, index) => (
            <Appbar.Action
              key={index}
              icon={item.icon}
              onPress={item.onPress}
            />
          ))}
        </View>
      </Appbar.Header>

      {/* Child View (Custom Content) */}
      {children && <View style={styles.childContainer}>{children}</View>}
    </View>
  );
};

export default AppBar;
