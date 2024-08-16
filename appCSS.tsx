import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  "activationArea": {
      position: "absolute",
      top: 0,
      left: 0,
      width: 120,
      height: 120,
      zIndex: 1,
      // backgroundColor: 'red' // Uncomment to see the activation area
    },
    closeButtonContainer: {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    closeButton: {
      backgroundColor: 'lightcoral',
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 10,
    },
    closeButtonText: {
      color: 'black',
    },
});


export default styles;
