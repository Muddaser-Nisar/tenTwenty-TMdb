import { StyleSheet } from 'react-native';
import { colors, scale } from 'utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: scale(20),
  },
  title: {
    fontSize: scale(14),
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 13,
    color: '#4A90E2',
    textAlign: 'center',
    marginVertical: 6,
  },
  dateLabel: {
    fontWeight: '500',
    marginTop: 15,
    marginBottom: 8,
    fontSize: 16,
  },
  dateScroll: {
    flexGrow: 0,
    marginBottom: 15,
  },
  dateItem: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    backgroundColor: '#A6A6A61A',
    borderRadius: 16,
    marginRight: 10,
  },
  dateItemSelected: {
    backgroundColor: colors.skyColor,
  },
  dateText: {
    fontSize: 14,
    color: '#333',
  },
  dateTextSelected: {
    color: '#fff',
    fontWeight: '600',
  },
  cardRow: {
    flexDirection: 'row',
  },
  card: {
    borderWidth: 0.8,
    borderColor: colors.skyColor,
    borderRadius: 12,
    padding: 12,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  time: {
    fontSize: 16,
    fontWeight: '600',
  },
  hall: {
    fontSize: 13,
    color: '#999',
  },
  seatMap: {
    height: 90,
    justifyContent: 'space-around',
    marginBottom: 8,
  },
  seatRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  seatDot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: '#A0C4FF',
  },
  price: {
    marginTop: scale(8),
    fontSize: 13,
    color: '#555',
  },
  bold: {
    fontWeight: 'bold',
    color: '#000',
  },
  button: {
    backgroundColor: colors.skyColor,
    borderRadius: scale(10),
    paddingVertical: 14,
    marginTop: 'auto',
    marginBottom: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  secondaryContainer: {
    flex: 1,
    backgroundColor: colors.secondaryBackgroundColor,
    paddingHorizontal: scale(20),
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  symmetry: {
    width: 24,
  },
  cardTop: {
    marginTop: scale(5),
    paddingVertical: scale(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
