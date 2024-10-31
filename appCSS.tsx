import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  "activationArea": {
      position: "absolute",
      top: 0,
      left: '50%',
      transform: [{ translateX: -60 }],
      width: 120,
      height: 60,
      zIndex: 1,
      // backgroundColor: 'red' // Uncomment to see the activation area
    },
    mainContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 999,
    },
    scrollContainer: {
      padding: 10,
    },
    imageContainer: {
      marginBottom: 10,
      alignItems: 'center',
    },
    image: {
      width: '100%',
      height: 300,
      borderRadius: 10,
    },
    imageInfo: {
      marginTop: 10,
      padding: 10,
      backgroundColor: '#fff',
      borderRadius: 5,
    },
    imageText: {
      fontSize: 12,
      color: '#666',
      marginBottom: 4,
    },
    errorText: {
      color: 'red',
      fontSize: 16,
    },
    centerContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
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
    cameraCloseButton: {
      position: 'absolute',
      bottom: 20,
      right: 20,
      backgroundColor: '#ff6b6b',
      padding: 10,
      borderRadius: 5,
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    cameraCloseButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
});

export default styles;
