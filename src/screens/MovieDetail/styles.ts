// src/screens/Dashboard/styles.ts
import { StyleSheet } from 'react-native';
import { colors, scale } from 'utils';

const styles = StyleSheet.create({
  error: {
    flex: 1,
    textAlign: 'center',
    marginTop: 100,
    color: 'red',
    fontSize: 16,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  topHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: scale(14),
    paddingHorizontal: scale(16),
  },
  contentContainer: {
    paddingHorizontal: scale(12),
    paddingTop: scale(18),
    backgroundColor: colors.secondaryBackgroundColor,
  },
});

export default styles;
