import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection:'column',
        height: '100%',
        width: '100%',
        rowGap: 10,
        padding: 10
    },
    body: {
        flex: 2,
        rowGap: 50,
        justifyContent: 'center'
    },
    upper_body:
    {
        justifyContent: 'center',
        rowGap: 20

    },
    bottom_body:
    {
        rowGap: 20
    },
    middle_body:
    {
        rowGap: 10
    },
});
export default styles;