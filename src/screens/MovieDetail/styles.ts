// src/screens/Dashboard/styles.ts
import { StyleSheet } from 'react-native';
import { colors, scale } from 'utils';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white },
  poster: {
    height: scale(360),
  },
  overlay: {
    marginTop: scale(70),
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  watchText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
  },
  title: {
    color: colors.goldenColor,
  },
  release: {
    color: colors.white,
    marginBottom: scale(10),
  },
  primaryBtn: {
    backgroundColor: colors.skyColor,
    borderRadius: scale(10),
    marginBottom: scale(10),
    width: scale(243),
    height: scale(50),
    justifyContent: 'center',
  },
  primaryText: {
    color: colors.white,
    textAlign: 'center',
  },
  secondaryBtn: {
    borderRadius: scale(10),
    marginBottom: scale(10),
    width: scale(243),
    height: scale(50),
    borderWidth: 1,
    borderColor: colors.skyColor,
    justifyContent: 'center',
  },
  secondaryText: {
    color: colors.white,
    textAlign: 'center',
  },
  genresWrapper: {
    padding: 20,
  },
  sectionTitle: {
    marginBottom: 10,
  },
  genres: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  genreTag: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#eee',
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
    fontSize: 14,
    color: colors.white,
  },
  overviewWrapper: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  overview: {
    fontSize: scale(12),
    color: '#8F8F8F',
  },
  doneBtn: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: '#00000080',
    padding: 10,
    borderRadius: 20,
  },
  doneText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  videoPlayer: {
    flex: 1,
    backgroundColor: colors.fadeBlack,
    justifyContent: 'center',
  },
  line: {
    height: scale(1.7),
    width: '90%',
    backgroundColor: colors.secondaryBackgroundColor,
    marginHorizontal: scale(20),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: scale(20),
  },
});

export default styles;
