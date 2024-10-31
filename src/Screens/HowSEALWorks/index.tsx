import {View} from 'react-native';
import BackgroundWrapper from '../../Components/BackgroundWrapper/.';
import Carousel from '../../Features/Carousel';
import {Appbar} from 'react-native-paper';
import {getStyles} from './defaultCSS';
import data from './data';
import {useSettingsContext} from '../../Contexts/SettingsContext';
import {NavigationProp} from '@react-navigation/native';

const Index = ({navigation}: {navigation: NavigationProp<any>}) => {
  const {selectedConfig, setSelectedConfig} = useSettingsContext();
  const styles = getStyles(selectedConfig.font);
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
