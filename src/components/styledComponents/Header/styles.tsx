import { StyleSheet } from 'react-native';
import { colors, scale } from 'utils';

//we can do type check on style as well
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: scale(14),
    gap: scale(12), // spacing between icon and title
  },
  title: {
    color: colors.fadeBlack,
  },
});

export default styles;
