import { StyleSheet } from 'react-native';
import { colors, fonts, scale } from 'utils';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(14),
    backgroundColor: colors.secondaryBackgroundColor,
    gap: scale(10),
    borderRadius: scale(30),
    marginHorizontal: scale(12),
    height: scale(48),
  },
  input: {
    flex: 1,
    backgroundColor: colors.secondaryBackgroundColor,
    paddingVertical: scale(8),
    paddingHorizontal: scale(10),
    borderRadius: scale(10),
    color: colors.fadeBlack,
    fontFamily: fonts.PoppinsRegular,
  },
  list: {
    marginTop: scale(16),
    paddingTop: scale(16),
    paddingHorizontal: scale(15),
    paddingBottom: scale(16),
    backgroundColor: colors.secondaryBackgroundColor,
  },
  noResult: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: scale(16),
    color: colors.fadeBlack,
  },
  contentContainer: {
    marginTop: scale(16),
    paddingTop: scale(16),
    paddingHorizontal: scale(12),
    paddingBottom: scale(16),
    backgroundColor: colors.secondaryBackgroundColor,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: scale(12),
  },
  cardWrapper: {
    flex: 0.488,
  },
  headerText: {
    color: colors.fadeBlack,
    marginBottom: scale(15),
    paddingVertical: scale(10),
    borderBottomColor: colors.placeHolderColor,
    borderBottomWidth: 0.6,
    fontSize: scale(12),
  },
});

export default styles;
