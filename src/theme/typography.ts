import { TextStyle } from 'react-native';
import { fonts, scale } from 'utils';

interface Typography {
  [key: string]: TextStyle;
}

const typography: Typography = {
  h1: {
    fontSize: scale(10),
    fontFamily: fonts.PoppinsBold,
  },
  h2: {
    fontSize: scale(10),
    fontFamily: fonts.PoppinsRegular,
  },
};

export const h1Style: TextStyle = typography.h1;
export const h2Style: TextStyle = typography.h2;
