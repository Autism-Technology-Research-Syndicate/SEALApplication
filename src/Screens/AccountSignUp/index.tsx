import {View} from 'react-native';
import BackgroundWrapper from '../../Components/BackgroundWrapper/.';
import Button from '../../Components/Button/.';
import TextField from '../../Components/TextField/.';
import {accountSignUp} from './data';
import Text from '../../Components/Text/.';
import {getStyles} from './defaultCSS';
import {useFontContext} from '../../Contexts/FontContext';

const Index = ({navigation}) => {
  const {selectedFontFamily, setSelectedFontFamily} = useFontContext();
  const styles = getStyles(selectedFontFamily);
  return (
    <BackgroundWrapper>
      <View style={styles.container}>
        <Text style={styles.header}>Account Sign up</Text>

        <View style={styles.body}>
          {accountSignUp.map((item, idx) => {
            return (
              <TextField
                key={idx}
                name={item.id}
                placeholder={item.placeHolder}
                label={item.displayName}
                validationType={item.validationType}
              />
            );
          })}
        </View>
        <View style={styles.bottom_section}>
          <Button
            dark
            title="Sign up"
            onPress={() => navigation.navigate('Login')}
          />
          <Button
            light
            title="Cancel"
            onPress={() => navigation.navigate('Welcome')}
          />
        </View>
      </View>
    </BackgroundWrapper>
  );
};

export default Index;
