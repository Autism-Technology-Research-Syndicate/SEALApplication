import React, { useState } from 'react'
import { Alert, TextInput, View } from 'react-native'
import { Button, Text } from 'react-native-elements'
import { NavigationProp } from '@react-navigation/native'
import stylesheet from './defaultCss'
import styles from '../../Styles/defaultCSS';


const Index = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [link, setLink] = useState('')

  const handleSubmit = () => {
    
    try {
        if (!title || !description || !link) {
            Alert.alert('Validation Error', 'All fields are required')
        } else {
            const newTutorial = {
                title: title,
                description: description,
                link: link
            }
            
            navigation.navigate('Videos', {newTutorial})}
        
    } catch (error) {
        Alert.alert('Server error', 'Something went wrong, please try again later');
      }
    }

    
   
  return (
    <View style={stylesheet.container}>
        <View style={stylesheet.upper_body}>
            <Text style={stylesheet.header}>Video Details</Text>
        </View>


        <View style={stylesheet.body}>
            <Text style={styles.textNormal}>Title</Text>
            <TextInput
                placeholder='Enter the title of ths tutorial'
                style={stylesheet.input}
                value={title}
                onChangeText={setTitle}
            />

            <Text style={styles.textNormal}>Description</Text>
            <TextInput
                placeholder='Enter a description of what the video is about'
                style={stylesheet.input}
                value={description}
                onChangeText={setDescription}
            />

            <Text style={styles.textNormal}>Link</Text>
            <TextInput
                placeholder='Paste the link of the tutorial'
                style={stylesheet.input}
                value={link}
                onChangeText={setLink}
            />

            <Button title='Upload Video' onPress={handleSubmit}/>

        </View>
    </View>
  )
}

export default Index
