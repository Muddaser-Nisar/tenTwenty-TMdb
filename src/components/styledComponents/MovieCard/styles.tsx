import { StyleSheet } from 'react-native';
import { colors, scale } from 'utils';

//we can do type check on style as well
const styles = StyleSheet.create({
  card: {
    marginBottom: scale(20),
    borderRadius: scale(12),
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  poster: {
    width: '100%',
    height: '100%',
    borderWidth: 0.3,
    borderColor: colors.InActiveColor,
  },
  titleContainer: {
    paddingVertical: scale(16),
    paddingHorizontal: scale(17),
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  title: {
    color: colors.white,
  },
});

export default styles;
