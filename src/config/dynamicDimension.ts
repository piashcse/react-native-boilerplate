import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Define base dimensions for standard scaling
const BASE_WIDTH = 390; // iPhone 13 Pro width
const BASE_HEIGHT = 844; // iPhone 13 Pro height
const BASE_TABLET_WIDTH = 768; // Default tablet width
const BASE_TABLET_HEIGHT = 1024; // Default tablet height

// iPhone SE dimensions
const IPHONE_SE_WIDTH = 375; //  iPhone SE width
const IPHONE_SE_HEIGHT = 667; // iPhone SE height

// Calculate scaling factors
const scaleWidth = width / BASE_WIDTH;
const scaleHeight = height / BASE_HEIGHT;

// Determine if the device is a tablet
export const isTablet: boolean =
  width >= BASE_TABLET_WIDTH && height >= BASE_TABLET_HEIGHT;

// Dimensions utility object
const dimensions = {
  isTablet,
  deviceHeight: height,
  deviceWidth: width,
  // Utility for conditional width
  getDynamicWidth: (mobileSize: number, tabletSize?: number): number =>
    isTablet
      ? tabletSize
        ? tabletSize * scaleWidth
        : mobileSize * scaleWidth
      : mobileSize * scaleWidth,

  // Utility for conditional height
  getDynamicHeight: (mobileSize: number, tabletSize?: number): number =>
    isTablet
      ? tabletSize
        ? tabletSize * scaleHeight
        : mobileSize * scaleHeight
      : mobileSize * scaleHeight,
  getDynamicPaddingOrMargin: (
    mobilePadding: number,
    tabletPadding?: number
  ): number =>
    isTablet
      ? tabletPadding
        ? tabletPadding * scaleWidth
        : mobilePadding * scaleWidth
      : mobilePadding * scaleWidth,

  // Utility for conditional font size
  getFontSize: (mobileSize: number, tabletSize: number) =>
    isTablet ? tabletSize * scaleWidth : mobileSize * scaleWidth,

  // utility for home images height
  getDynamicImageHeight: (imageHeight: number, tabletSize?: number): number =>
    isTablet
      ? tabletSize
        ? tabletSize * scaleHeight
        : (height / 997) * imageHeight
      : (height / 997) * imageHeight,
  getDynamicImageWidth: (imageWidth: number, tabletSize?: number): number =>
    isTablet
      ? tabletSize
        ? tabletSize * scaleHeight
        : (width / 412) * imageWidth
      : (width / 412) * imageWidth,
};

// Check if the device matches iPhone SE dimensions
const isIphoneSE = width <= IPHONE_SE_WIDTH && height <= IPHONE_SE_HEIGHT;

export { isIphoneSE };
export const {
  getDynamicWidth,
  getDynamicHeight,
  getDynamicPaddingOrMargin,
  deviceHeight,
  deviceWidth,
  getDynamicImageHeight,
  getDynamicImageWidth,
} = dimensions;
