import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  } as ViewStyle,
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#305070',
  } as TextStyle,
});

export default styles;
