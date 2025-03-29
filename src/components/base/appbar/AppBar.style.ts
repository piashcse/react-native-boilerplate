import { StyleSheet } from 'react-native';
import { AppColors } from '@/src/constants/AppColors';
import { Fonts } from '@/src/config/AppConfig';

const styles = StyleSheet.create({
  header: {
    backgroundColor: AppColors.light.primaryColor,
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
    color: AppColors.white,
  },
  rightIcons: {
    flexDirection: 'row',
  },
  childContainer: {
    padding: 10,
    backgroundColor: AppColors.white,
  },
});
export default styles;
