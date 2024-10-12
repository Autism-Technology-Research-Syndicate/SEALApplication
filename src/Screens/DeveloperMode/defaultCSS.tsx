import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: width * 0.9,
    maxWidth: 400,
    backgroundColor: '#2C2C2E',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  optionsContainer: {
    width: width * 0.7,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  option: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    backgroundColor: '#3A3A3C',
    padding: 15,
    borderRadius: 12,
    marginVertical: 8,
    width: '100%',
  },
  optionIcon: {
    fontSize: 24,
    marginRight: 15,
  },
  optionText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  statusContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#4A4A4C',
    borderRadius: 8,
    width: '100%',
  },
  statusText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 14,
  },
  closeButton: {
    backgroundColor: 'lightcoral',
    padding: 5,
    borderRadius: 5,
    alignSelf: 'center',
  },
  closeButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
});

export default styles;
