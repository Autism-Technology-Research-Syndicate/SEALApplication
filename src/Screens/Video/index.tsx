import React from 'react'
import {Text, View } from "react-native"
import BackgroundWrapper from '../../Components/BackgroundWrapper';
import { Appbar } from 'react-native-paper';
import {WebView} from 'react-native-webview'
import { NavigationProp } from '@react-navigation/native';
import { styles } from '../SignUp/defaultCSS';


interface Input {
    title: string,
    description: string,
    uri: string
}

interface Props {
    navigation: NavigationProp<any>
    input?: Input
}
const Index: React.FC<Props> =  ({navigation, input}) => {


    return (
        <BackgroundWrapper >
            <View style={styles.container}>
                <Appbar.BackAction onPress={() => navigation.navigate('PersonalPage')} />

                <View style={[styles.container, {justifyContent: 'center', alignItems: 'center' }]}>
                    <Text style={styles.title}>{input?.title ?? 'Title is not available'}</Text>
                    <Text style={{fontSize: 15}}>{input?.description ?? 'Description is not available'}</Text>
                </View>
                
                <View style={[styles.container
                    , {borderRadius: 15}]}>
                    <View style={{flex: 1, padding: 2, height: 350, borderRadius: 15, borderWidth: 2.5, borderColor: 'gray'}}>
                        <WebView
                            javaScriptEnabled={true}
                            domStorageEnabled={true}
                            cacheEnabled={false}
                            source={{uri: input?.uri ?? 'https://www.youtube.com/embed/_6R7Ym6Vy_I?si=j6DoD-tJklOEQ1wq'}}
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