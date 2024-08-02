import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        rowGap: 10,
        padding: 30
    },
    middle_section: {
        alignSelf: 'center',
        justifyContent: 'center',
        rowGap: 10,
        flex: 2
    },
    bottom_section: { 
        justifyContent: 'flex-end', 
        rowGap: 10 
    }
});
export default styles;