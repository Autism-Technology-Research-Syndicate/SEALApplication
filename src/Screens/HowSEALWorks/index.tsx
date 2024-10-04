import {View} from 'react-native';
import BackgroundWrapper from '../../Components/BackgroundWrapper/.';
import Carousel from '../../Features/Carousel';
import {Appbar} from 'react-native-paper';
import {getStyles} from './defaultCSS';
import data from './data';
import {useFontContext} from '../../Contexts/FontContext';

const Index = ({navigation}) => {
  const {selectedFontFamily, setSelectedFontFamily} = useFontContext();
  const styles = getStyles(selectedFontFamily);
  return (
    <BackgroundWrapper>
      <View style={styles.container}>
        <Appbar.BackAction onPress={() => navigation.navigate('Login')} />
        <Carousel data={data} />
      </View>
    </BackgroundWrapper>
  );
};

export default Index;
