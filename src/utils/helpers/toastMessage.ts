import Toast from 'react-native-toast-message';
import { scale } from './scale';
//this is for navigation
export const showToast = (
  type: 'success' | 'error' | 'info',
  text1: string,
  text2?: string,
  bottomOffset = scale(80),
) => {
  Toast.show({
    type,
    text1,
    text2,
    position: 'bottom', // This positions the toast at the bottom
    visibilityTime: 2000,
    autoHide: true,
    bottomOffset: bottomOffset, // Adjust for the safe area at the bottom
    topOffset: bottomOffset, // Adjust for the safe area at the top if needed elsewhere
  });
};
