import { ImageBackground, Text, View } from 'react-native';
import Button from '../../Components/Button/.';
import styles from './defaultCSS';

const image = require('../../Assets/images/backgroundImage.png');

const index = ({ children }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="repeat" style={styles.image}>
                {children}
            </ImageBackground>
        </View>

    );
};

export default index;
