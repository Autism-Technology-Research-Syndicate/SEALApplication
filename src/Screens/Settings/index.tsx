import React, { useState } from 'react';


import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Switch,
  Pressable,
  Touchable,
  TouchableOpacity,
  Image,
  Button,
  Alert,
  Platform,
  PermissionsAndroid
} from 'react-native';


import BackgroundWrapper from '../../Components/BackgroundWrapper/.';
// import Button from '../../Components/Button/.';
import LinkButton from '../../Components/LinkButton/.';
import TextField from '../../Components/TextField/.';
// import Text from '../../Components/Text/.';

import styles from './defaultCSS';


import {updateUserSettings} from '/Users/josereyes/Desktop/seals/project1/SEALApplication/Database/dbInitialization.js';
import {createSettingsTable} from '/Users/josereyes/Desktop/seals/project1/SEALApplication/Database/dbInitialization.js';
import {getUsers} from '/Users/josereyes/Desktop/seals/project1/SEALApplication/Database/dbInitialization.js';
import {insertUser} from '/Users/josereyes/Desktop/seals/project1/SEALApplication/Database/dbInitialization.js';
import { dropTable } from '/Users/josereyes/Desktop/seals/project1/SEALApplication/Database/dbInitialization.js';
import { getUserSettings } from '/Users/josereyes/Desktop/seals/project1/SEALApplication/Database/dbInitialization.js';
import{ dropTrigger } from '/Users/josereyes/Desktop/seals/project1/SEALApplication/Database/dbInitialization.js';
import{getAllUserSettings} from '/Users/josereyes/Desktop/seals/project1/SEALApplication/Database/dbInitialization.js';
import { useNotification } from '../../Features/useNotification';



const index = ({ navigation }) => {

  const {
    displayNotification,
    displayTriggerNotification,
    getTriggerNotificationIds,
    cancelTriggerNotifications,
    cancelAllNotifications,
    openNotificationSettings
  } = useNotification();

  const handleDisplayNotification = () => { 
    displayNotification('Hello', 'This is a notification');
  }

  const handleCancelAllTriggerNotifications = () => {
    cancelAllNotifications();
  }

    //The settings features can be changed to the acually features
  type Settings = {
    featureA: boolean;
    featureB: boolean;
    featureC: boolean;
    featureD: boolean;
    featureE: boolean;
    featureF: boolean;
    featureG: boolean;
    featureH: boolean;
  };
  
  const defaultSettings: Settings = {
    featureA: false,
    featureB: false,
    featureC: false,
    featureD: false,
    featureE: false,
    featureF: false,
    featureG: false,
    featureH: false,
  };

  const [settings, setSettings] = useState<Settings>(defaultSettings);
  

  //can run this to insert a user into the database 
  // const getSettings = () => {
  //   //this is to check the update settings did work 
  //   // dropTable('Users');
  //   // dropTable('UserSettingsv3');

  //   // dropTrigger('create_default_settings');
  //   insertUser('yes', 'yes', 1, 1, 'yes', 1, 1, 'yes', 1)

    
  //   getAllUserSettings()
  //   .then(results => {
  //     console.log('Users:', results);
  //   })
  //   .catch(error => {
  //     console.error('Error with getting user :', error);
      
  //   });


  // };

  const saveSettings = () => {
    //Update the settings in the database based on of userid and settings object
    updateUserSettings(1, settings)
    .then(results => {
      Alert.alert('Settings saved successfully!');
    })
    .catch(error => {
      console.error('Error saving settings:', error);
      console.error('Error saving settings:', settings);
      Alert.alert('Failed to save settings.');
    });
    //get user settigns based on userid - this is to check user settings did update
    getUserSettings(1)
    .then(results => {
      console.log('Users:', results);
    })
    .catch(error => {
      console.error('Error with getting user :', error);
      
    });

  };
//this is state for making the features false or true that will be sent to the database 
  const [enable,setEnable] = useState(false);

  const handleToggleSwitch = (feature: keyof Settings): boolean => {
    setSettings(prevSettings => ({
      ...prevSettings,
      [feature]: !prevSettings[feature],
    }));
    console.log(`settings[${feature}]`, settings[feature]);
    console.log(`settings`, settings);
    return !settings[feature];
  };



  return (
    <ScrollView
      scrollEnabled={true}
      contentInsetAdjustmentBehavior='automatic'
    >
      <View style={styles.container}>
        <View style={styles.section}>
          <TouchableOpacity onPress={() => navigation.navigate('Main')}
            style={{
              zIndex: 1,
              width: 34,
              height: 34,
            }}
          >
            <Image
              style={{
                width: 24,
                height: 24,
                position: 'relative',
                overflow: 'hidden',
                zIndex: 6,
                marginTop: 48,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 18,
                
              }}
              source={require('./assets/images/0193bb55-aa6d-4cd6-88f5-58443b74afd2.png')}
              resizeMode='cover'
            />
          </TouchableOpacity>
          {/* this is the start of the settings toggle view box */}
          <ImageBackground
            style={{
              width: 133,
              height: 49,
              position: 'relative',
              zIndex: 4,
              marginTop: 454,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0.5,
            }}
            source={require('./assets/images/c74b045e-32dd-492f-8547-0e2bbfe3df24.png')}
            resizeMode='cover'
          />
          <ImageBackground
            style={{
              width: 25,
              height: 25,
              position: 'relative',
              zIndex: 5,
              marginTop: 3,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 284,
            }}
            source={require('./assets/images/93d66223-c0f3-4e1e-8953-516a85a44641.png')}
          />
          <Text
            style={{
              display: 'flex',
              width: 49,
              height: 22,
              justifyContent: 'center',
              alignItems: 'flex-start',
              fontFamily: 'Helvetica Neue',
              fontSize: 13,
              fontWeight: '500',
              lineHeight: 15.873,
              color: '#f4f5f5',
              letterSpacing: 0.26,
              position: 'relative',
              textAlign: 'center',
              zIndex: 3,
              marginTop: 2,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 272,
            }}
            numberOfLines={1}
          >
          </Text>
          <ImageBackground
            style={{
              width: 641,
              height: 878,
              position: 'absolute',
              top: -218,
              left: -102,
            }}
            source={require('./assets/images/8e9996ab-d0b1-4df0-82b1-8703a4fd0f6d.png')}
            resizeMode='cover'
          />
          <ImageBackground
            style={{
              width: '6.11%',
              height: '3.44%',
              position: 'absolute',
              top: '21.41%',
              left: '9.17%',
              zIndex: 7,
            }}
            source={require('./assets/images/c7c6d0dd-1aeb-4479-bfc8-d6cea24633b4.png')}
          />
          <Text
            style={{
              display: 'flex',
              width: 202,
              height: 72,
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              fontFamily: 'Helvetica Neue',
              fontSize: 18,
              fontWeight: '700',
              lineHeight: 21.978,
              color: '#305070',
              letterSpacing: 0.36,
              position: 'absolute',
              top: 138,
              left: 63,
              textAlign: 'left',
              zIndex: 1,
            }}
          >
           
            Settings
          </Text>
          
          <Text
            style={{
              display: 'flex',
              width: 297,
              height: 331,
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              fontFamily: 'Helvetica Neue',
              fontSize: 16,
              fontWeight: '400',
              lineHeight: 40,
              color: '#305070',
              position: 'absolute',
              top: 178,
              left: 34,
              textAlign: 'left',
              overflow: 'hidden',
              zIndex: 16,
            }}
          >
            Video resolution{'\n'}Brightness/contrast{'\n'}Color blindness
            preferences{'\n'}Font sizes{'\n'}Dyslexic font options{'\n'}Audio
            sensitivities{'\n'}Light sensitivities{'\n'}Notification preferences
          </Text>
       
          <View
            style={{
              display: 'flex',
              width: 66,
              height: 20,
              paddingTop: 2,
              paddingRight: 2,
              paddingBottom: 2,
              paddingLeft: 0,
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'nowrap',

             

              borderColor: '#617275',
              borderStyle: 'solid',
              position: 'absolute',
              top: 189,
              left: 291,
              overflow: 'hidden',
              zIndex: 29,
            }}
          >

            <Switch
              value={settings.featureA}
              onValueChange={()=>handleToggleSwitch('featureA')}
              thumbColor={settings.featureA ? '#305070' : '#ffffff'} // corrected color
            />

            <View
              style={{
                width: 16,
                height: 16,
                flexShrink: 0,
                position: 'relative',
                zIndex: 30,
              }}
            />
            
          </View>

          <ImageBackground
            style={{
              width: 297,
              height: 1,
              position: 'absolute',
              top: 218.088,
              left: 34,
              zIndex: 8,
            }}
            source={require('./assets/images/14b9ccb2-67fa-4580-bc68-25a9c1e3d8d0.png')}
            resizeMode='cover'
          />
          <View
            style={{
              display: 'flex',
              width: 66,
              height: 20,
              paddingTop: 2,
              paddingRight: 2,
              paddingBottom: 2,
              paddingLeft: 0,
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'nowrap',
          
              borderColor: '#617275',
              borderStyle: 'solid',
              position: 'absolute',
              top: 229,
              left: 291,
              overflow: 'hidden',
              zIndex: 32,
            }}
          >
              
              <Switch
              value={settings.featureB}
              onValueChange={()=>handleToggleSwitch('featureB')}
              thumbColor={settings.featureB ? '#305070' : '#ffffff'} // corrected color
            />

               
            <View
              style={{
                width: 16,
                height: 16,
                flexShrink: 0,
                position: 'relative',
                zIndex: 33,
              }}
            />
             


          </View>

          <ImageBackground
            style={{
              width: 297,
              height: 1,
              position: 'absolute',
              top: 259,
              left: 34,
              zIndex: 9,
            }}
            source={require('./assets/images/a750d20a-906c-472c-b4fe-05db453f04cc.png')}
            resizeMode='cover'
          />
          <View
            style={{
              display: 'flex',
              width: 66,
              height: 20,
              paddingTop: 2,
              paddingRight: 2,
              paddingBottom: 2,
              paddingLeft: 0,
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'nowrap',
          
              borderColor: '#617275',
              borderStyle: 'solid',
              position: 'absolute',

              top: 270,
              left: 291,
              overflow: 'hidden',
              zIndex: 35,
            }}
          >
            <Switch
              value={settings.featureC}
              onValueChange={()=>handleToggleSwitch('featureC')}
              thumbColor={settings.featureC ? '#305070' : '#ffffff'} // corrected color
            />

            <View
              style={{
                width: 16,
                height: 16,
                flexShrink: 0,
                position: 'relative',
                zIndex: 36,
              }}
            />
              

          </View>

          <ImageBackground
            style={{
              width: 297,
              height: 1,
              position: 'absolute',
              top: 299,
              left: 34,
              zIndex: 10,
            }}
            source={require('./assets/images/664ac660-4bea-4f9a-9bc8-21a8513c9da1.png')}
            resizeMode='cover'
          />
          <View
            style={{
              display: 'flex',
              width: 66,
              height: 20,
              paddingTop: 2,
              paddingRight: 2,
              paddingBottom: 2,
              paddingLeft: 0,
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'nowrap',
          
              borderColor: '#617275',
              borderStyle: 'solid',
              position: 'absolute',

              top: 311,
              left: 291,
              overflow: 'hidden',
              zIndex: 26,
            }}
          >
            <Switch
                value={settings.featureD}
                onValueChange={()=>handleToggleSwitch('featureD')}
                thumbColor={settings.featureD ? '#305070' : '#ffffff'} // corrected color
              />

            <View
              style={{
                width: 16,
                height: 16,
                flexShrink: 0,
                position: 'relative',
                zIndex: 27,
              }}
            />
              

          </View>

          <ImageBackground
            style={{
              width: 297,
              height: 1,
              position: 'absolute',
              top: 339,
              left: 34,
              zIndex: 11,
            }}
            source={require('./assets/images/19272486-e057-4558-af97-2584ac921370.png')}
            resizeMode='cover'
          />
          <View
            style={{
              display: 'flex',
              width: 66,
              height: 20,
              paddingTop: 2,
              paddingRight: 2,
              paddingBottom: 2,
              paddingLeft: 0,
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'nowrap',
          
              borderColor: '#617275',
              borderStyle: 'solid',
              position: 'absolute',


              top: 351,
              left: 291,
              overflow: 'hidden',
              zIndex: 23,
            }}
          >
           <Switch
                  value={settings.featureE}
                  onValueChange={()=>handleToggleSwitch('featureE')}
                  thumbColor={settings.featureE? '#305070' : '#ffffff'} // corrected color
                />

            <View
              style={{
                width: 16,
                height: 16,
                flexShrink: 0,
                position: 'relative',
                zIndex: 24,
              }}
            />
              
              

          </View>

          <ImageBackground
            style={{
              width: 297,
              height: 1,
              position: 'absolute',
              top: 379,
              left: 34,
              zIndex: 12,
            }}
            source={require('./assets/images/a46e11bd-07d3-4295-a8f0-637ca0364bac.png')}
            resizeMode='cover'
          />
          <View
            style={{
              display: 'flex',
              width: 66,
              height: 20,
              paddingTop: 2,
              paddingRight: 2,
              paddingBottom: 2,
              paddingLeft: 0,
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'nowrap',
          
              borderColor: '#617275',
              borderStyle: 'solid',
              position: 'absolute',


              top: 389,
              left: 291,
              overflow: 'hidden',
              zIndex: 20,
            }}
          >
            <Switch
                value={settings.featureF}
                onValueChange={()=>handleToggleSwitch('featureF')}
                thumbColor={settings.featureF ? '#305070' : '#ffffff'} // corrected color
              />

            <View
              style={{
                width: 16,
                height: 16,
                flexShrink: 0,
                position: 'relative',
                zIndex: 21,
              }}
            />
              

          </View>

          <ImageBackground
            style={{
              width: 297,
              height: 1,
              position: 'absolute',
              top: 419,
              left: 34,
              zIndex: 13,
            }}
            source={require('./assets/images/0472aba0-7d58-4848-83c5-3502fcc8990f.png')}
            resizeMode='cover'
          />
          <View
            style={{
              width: 24,
              height: 23,
              position: 'absolute',
              top: 428,
              left: 306,
              overflow: 'hidden',
              zIndex: 38,
            }}
          >
            <ImageBackground
              style={{
                width: 12,
                height: 7.106,
                position: 'relative',
                zIndex: 39,
                marginTop: 7.868,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 6,
              }}
              source={require('./assets/images/822bec52-25b2-4ecf-8017-74ab1592c139.png')}
            />
          </View>
          <ImageBackground
            style={{
              width: 297,
              height: 1,
              position: 'absolute',
              top: 459,
              left: 34,
              zIndex: 14,
            }}
            source={require('./assets/images/d2481ce5-66e3-441f-833f-d873425d0f5c.png')}
            resizeMode='cover'
          />
          <View
            style={{
              display: 'flex',
              width: 66,
              height: 20,
              paddingTop: 2,
              paddingRight: 2,
              paddingBottom: 2,
              paddingLeft: 0,
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'nowrap',
          
              borderColor: '#617275',
              borderStyle: 'solid',
              position: 'absolute',


              top: 470,
              left: 291,
              overflow: 'hidden',
              zIndex: 17,
            }}
          >
            <Switch
                value={settings.featureG}
                onValueChange={()=>handleToggleSwitch('featureG')}
                thumbColor={settings.featureG ? '#305070' : '#ffffff'} // corrected color
            />

            <View
              style={{
                width: 16,
                height: 16,
                flexShrink: 0,
                position: 'relative',
                zIndex: 18,
              }}
            />
              
          </View>

          {/* test for notifications */}
           <Button title='Save Settings' onPress={saveSettings} /> 

           {/* testing the notifications */}
           {/* <Button title='display notification ' onPress={handleDisplayNotification} /> 
           <Button title='cancel all notifications ' onPress={handleCancelAllTriggerNotifications} /> 
           <Button title='go to device settings ' onPress = {openNotificationSettings} /> */}


           
            
       
          <ImageBackground
            style={{
              width: 297,
              height: 1,
              position: 'absolute',
              top: 499,
              left: 34,
              zIndex: 15,
            }}
            source={require('./assets/images/a9628dcf-1c7c-4d22-9248-8f80e9d21a53.png')}
            resizeMode='cover'
          />
      
      </View>
     </View>
    </ScrollView>

  );
}
export default index;
