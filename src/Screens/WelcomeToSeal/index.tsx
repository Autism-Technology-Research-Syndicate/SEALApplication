// src/Screens/WelcomeToSeal/index.tsx

import React from 'react';
import {View, Text} from 'react-native';
import BackgroundWrapper from '../../Components/BackgroundWrapper';
import Button from '../../Components/Button';
import getStyles from './defaultCSS';
import {useSettingsContext} from '../../Contexts/SettingsContext';
import Seal from '../../Assets/svg/seal.svg';
import Hello from '../../Assets/svg/hello.svg';
import SessionOptimizerComponent from '../../prediction/sessionPrediction';
import useBreakTimer from '../../Hooks/BreakTimer';
import {NavigationProp} from '@react-navigation/native';

const Index = ({navigation}: {navigation: NavigationProp<any>}) => {
  useBreakTimer(15 * 60 * 1000); // Set the timer interval in milliseconds

  const {selectedConfig} = useSettingsContext();
  const styles = getStyles(selectedConfig.font);

  return (
    <BackgroundWrapper>
      <View style={styles.container}>
        <View style={styles.body}>
          <Seal width={85} height={85} />
          <View style={styles.middle_section}>
            <Text style={styles.header}>Welcome to SEAL</Text>
          </View>
          {/* <Text style={styles.subheader}>
            (Special Education Assistive Learning)
          </Text> */}
          <Text style={styles.subheader}>
            (Special Education Assistive Learning)
          </Text>
          <Hello width={275} height={275} />
        </View>
        <View style={styles.bottom_section}>
          <Button
            title="Learner login"
            onPress={() => navigation.navigate('Login')}
          />
          <Button light title="Teacher login" />
          {/* <Button light title="Teacher login" /> */}
        </View>

        {/* For temporary testing purpose, Session combos output */}
        <SessionOptimizerComponent />
        {/*  */}
      </View>
    </BackgroundWrapper>
  );
};

export default Index;
