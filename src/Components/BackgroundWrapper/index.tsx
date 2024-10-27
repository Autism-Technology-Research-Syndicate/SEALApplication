import {View, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {getStyles} from './defaultCSS';
import {useFontContext} from '../../Contexts/FontContext';

const Index = ({children}) => {
  const {selectedFontConfig, setSelectedFontConfig} = useFontContext();
  const styles = getStyles(selectedFontConfig);

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <LinearGradient
          style={styles.background}
          useAngle={true}
          angle={45}
          angleCenter={{x: 0.5, y: 0.35}}
          end={{x: 1, y: 0}}
          colors={styles.background.colorList}>
          <View>{children}</View>
        </LinearGradient>
      </View>
    </ScrollView>
  );
};

export default Index;
