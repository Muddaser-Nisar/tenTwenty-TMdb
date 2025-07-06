import { StyleSheet } from 'react-native';
import { colors, scale } from 'utils';

//we can do type check on style as well
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingBottom: scale(15),
    alignItems: 'center',
  },
  image: {
    width: scale(130),
    height: scale(100),
    borderRadius: scale(8),
    marginRight: scale(10),
    borderWidth: 0.5,
    borderColor: colors.InActiveColor,
  },
  info: {
    flex: 1,
  },
  title: {
    color: colors.fadeBlack,
  },
  genre: {
    fontSize: scale(10),
    color: colors.placeHolderColor,
    marginTop: scale(4),
  },
});

export default styles;
