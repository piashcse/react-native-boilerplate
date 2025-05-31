import { StyleSheet } from 'react-native';
import { appColors } from '@/src/constants/appColors';

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  headerExpanded: {
    backgroundColor: appColors.light.primaryColor, // Red background when expanded
  },
  content: {
    overflow: 'hidden',
    paddingHorizontal: 15,
  },
});

export default styles;
