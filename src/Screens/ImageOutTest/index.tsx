import { View, Image } from 'react-native';
import React from 'react';
import BackgroundWrapper from '../../Components/BackgroundWrapper';
import Text from '../../Components/Text';
import { getStyles } from './defaultCSS';
import { useFontContext } from '../../Contexts/FontContext';
import { Appbar } from 'react-native-paper';
import useCurriculumData from './data';

const Index = ({ navigation }) => {
  const { selectedFontConfig } = useFontContext();
  const styles = getStyles(selectedFontConfig);

  const { imageSrc, contentText } = useCurriculumData();

  return (
    <BackgroundWrapper>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <Text style={styles.header}>Screen to display image from curriculum</Text>
        <View style={styles.section}>
          <Text style={styles.subheader}>Images</Text>
          <View style={styles.row}>
            {imageSrc ? (
              <Image
                source={{ uri: imageSrc }}
                style={{ width: 100, height: 100 }}
              />
            ) : (
              <Text>No image available</Text>
            )}
          </View>
          <View style={styles.row}>
            <Text>{contentText}</Text>
          </View>
        </View>
      </View>
    </BackgroundWrapper>
  );
};

export default Index;
