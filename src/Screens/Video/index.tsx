import React, { useRef } from 'react'
import { Text, View } from "react-native"
import BackgroundWrapper from '../../Components/BackgroundWrapper';
import { styles } from '../SignUp/defaultCSS';
import { Appbar } from 'react-native-paper';
import Video, {VideoRef} from 'react-native-video';
import {WebView} from 'react-native-webview'



const Index =  ({navigation}) => {

    const videoRef = useRef<VideoRef>(null);

    return (
        <BackgroundWrapper >
            <View style={styles.container}>
                <Appbar.BackAction onPress={() => navigation.navigate('PersonalPage')} />

                <View style={styles.container}>
                    <Text style={styles.title}>Connected to managing device</Text>
                    <Text style={{fontSize: 15}}>Select alternative device</Text>
                </View>
                
                <View style={{padding: 10, borderColor: 'red', backgroundColor: 'green'}}>
                    <Text>Is there a video here?</Text>
                    <View style={{flex: 1, padding: 10, height: 400, backgroundColor: 'blue'}}>
                        <WebView
                            javaScriptEnabled={true}
                            domStorageEnabled={true}
                            cacheEnabled={false}
                            source={{uri: 'https://www.youtube.com/embed/jOu44mcs2A8'}}
                            onError={(syntheticEvent) => {
                                const { nativeEvent } = syntheticEvent;
                                console.log('WebView error: ', nativeEvent);
                            }}
                        />
                    </View>
                    
                </View>
            </View>
        </BackgroundWrapper>
        
    )
}

export default Index;