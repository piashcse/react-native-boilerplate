import { StyleSheet } from 'react-native';
import { appColors } from '@/src/constants/appColors';
import { Fonts } from '@/src/config/appConfig';

const styles = StyleSheet.create({
  header: {
    backgroundColor: appColors.light.primaryColor,
    elevation: 4,
  },
  titleContainer: {
    flex: 1,
  },
  centerTitle: {
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontFamily: Fonts.semiBold,
    color: appColors.white,
  },
  rightIcons: {
    flexDirection: 'row',
  },
  childContainer: {
    padding: 10,
    backgroundColor: appColors.white,
  },
});
export default styles;
