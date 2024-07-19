import { ImageBackground, Text, View } from 'react-native';
import Button from '../../Components/Button/.';
import styles from './defaultCSS';

const image = { uri: 'https://legacy.reactjs.org/logo-og.png' };

const index = ({ children }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                {children}
            </ImageBackground>
        </View>

    );
};

export default index;
