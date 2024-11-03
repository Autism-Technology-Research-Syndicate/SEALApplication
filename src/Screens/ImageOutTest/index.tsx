import { View } from 'react-native';
import React from 'react';
import BackgroundWrapper from '../../Components/BackgroundWrapper';
import Text from '../../Components/Text';
import {getStyles} from './defaultCSS';
import { useFontContext } from '../../Contexts/FontContext';
import { Appbar } from 'react-native-paper';


const Index: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { selectedFontConfig } = useFontContext();
  const styles = getStyles(selectedFontConfig);

  return (
    <BackgroundWrapper>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <Text style={styles.header}>Screen to display image from curriculum</Text>
        <View style={styles.section}>
          <View style={{flex: 1}}>
            <View style={styles.row}>
              <Text style={styles.subheader}> Achievements</Text>
            </View>
          </View>
        </View>
      </View>
    </BackgroundWrapper>
  );
};

export default Index;
