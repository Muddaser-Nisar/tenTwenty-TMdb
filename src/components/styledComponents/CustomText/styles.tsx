import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { colors, scale } from 'utils';

interface Styles {
  loginTopContainer?: ViewStyle;
  textStyle?: TextStyle;
}

const Styles = (): Styles => {
  return StyleSheet.create<Styles>({
    textStyle: {
      color: colors.fadeBlack,
      marginTop: scale(2),
      paddingHorizontal: scale(5.5),
      fontSize: scale(20),
    },
  });
};

export default Styles;
