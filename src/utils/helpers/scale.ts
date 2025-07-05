/**
 * Problem: React Native accepts either percentages or
 * density-independent pixels (DP) for its styles.
 * Percentages work well on the web,
 * but they don't support all the style properties in React Native.
 * Only padding, margin, width, height, minWidth, minHeight,
 * maxWidth, maxHeight, flexBasis can have percentage values
 * according to this commit.
 * https://github.com/facebook/react-native/commit/3f49e743bea730907066677c7cbfbb1260677d11
 * Density independent pixels (DP) are different than traditional pixels.
 * The bigger the device, the more DP it has. However,
 * density-independent pixels (DP) vary from device to device,
 * so it cannot be directly used for creating a responsive layout.
 *
 * In order to make the app look good on phones, tablets,
 * and a variety of other devices, we need to scale all of our styles.
 *
 * And we use the following functions
 * scale, widthPercentageToDP and heightPercentageToDP
 */
import { Dimensions, PixelRatio } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

//  const SCREEN_WIDTH = screenWidth;
//  const SCREEN_HEIGHT = screenHeight;
// const iphone14ViewPortWidth = 393;
// const iphone14ViewPortHeight = 852;
// const scalingMultiplier = 1.273;

// const widthScale = screenWidth / iphone14ViewPortWidth;
// const heightScale = screenHeight / iphone14ViewPortHeight;

const designViewPortWidth = 375; //this width is pixel to the provided snapshot
const designViewPortHeight = 812; //this height is pixel to the provided snapshot

const scalingMultiplier = 1.273;

const widthScale = screenWidth / designViewPortWidth;
const heightScale = screenHeight / designViewPortHeight;

/**
 * Use scale() function to scale your fonts,
 * margins and paddings w.r.t screen width and height
 * @param {number} size
 * pixel value to scale w.r.t screen dpi
 * @param {string} based
 * the value with respect to width or height
 * based = 'width' | 'height' default 'width',
 * https://github.com/NewBieBR/react-native-normalize/blob/master/src/index.ts
 */
export const scale = (
  size: number,
  based: 'width' | 'height' = 'width',
): number => {
  const newSize = based === 'height' ? size * heightScale : size * widthScale;
  if (screenWidth < 768) {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  return size * scalingMultiplier;
};
