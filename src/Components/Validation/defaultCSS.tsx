import { StyleSheet } from 'react-native';

const stylesheet = StyleSheet.create({
    container:{
    marginBottom: 0,
    flex: 1,
    alignSelf: "center",
    fontSize: 1,
    gap: 10,
    width: '100%'
    },
    item:{
        flexDirection: 'row',
        paddingRight: 20,
        gap: 1
    }
});

export default stylesheet;
