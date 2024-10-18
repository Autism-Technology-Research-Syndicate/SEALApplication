import {StyleSheet} from 'react-native';

const stylesheet = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
  },
  protanopia: {
    backgroundColor: 'rgba(255, 0, 0, 0.2)',
  },
  deuteranopia: {
    backgroundColor: 'rgba(0, 255, 0, 0.15)',
  },
  tritanopia: {
    backgroundColor: 'rgba(0, 0, 255, 0.2)',
  },
});

export default stylesheet;
