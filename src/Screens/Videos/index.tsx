import React, { useEffect, useState } from 'react'
import { Button, Modal, ScrollView, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { stylesheet } from './defaultCss'
import { NavigationProp, RouteProp } from '@react-navigation/native'
import styles from '../../Styles/defaultCSS';
import Video from 'react-native-video';
import { videoTutorials as initialTutorials} from './data'
import { Alert } from 'react-native'



const Index = ({ navigation, route }: { navigation: NavigationProp<any>, route: RouteProp<any, 'Videos'> }) => {

  const [videoTutorials, setVideoTutorials] = useState([...initialTutorials])
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTutorial, setSelectedTutorial] = useState<any>(null); 
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');

  const tutorials = [...videoTutorials]

  useEffect(() => {
    if(route.params?.newTutorial){
      setVideoTutorials((prevTutorials) => [route.params?.newTutorial, ...prevTutorials]);
    }
  }, [route.params?.newTutorial])

  // Handle opening the modal and setting the selected tutorial data
  const handleUpdate = (tutorial: any) => {
    setSelectedTutorial(tutorial); // Set the tutorial to be edited
    setTitle(tutorial.title); // Prefill the title
    setDescription(tutorial.description); // Prefill the description
    setLink(tutorial.link); // Prefill the link
    setModalVisible(true); // Show the modal
  };

  // Handle saving the updated tutorial
  const handleSave = () => {
    if (!title || !description || !link) {
      Alert.alert('Validation Error', 'All fields are required');
      return;
    }

    const updatedTutorials = videoTutorials.map((tutorial) =>
      tutorial === selectedTutorial
        ? { ...tutorial, title, description, link } // Update the selected tutorial
        : tutorial
    );

    setVideoTutorials(updatedTutorials); // Update state with new tutorial data
    setModalVisible(false); // Close the modal
  };


  // Handle deleting a tutorial
  const handleDelete = (tutorialToDelete: any) => {
    Alert.alert(
      'Delete Confirmation',
      'Are you sure you want to delete this tutorial?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            const updatedTutorials = videoTutorials.filter(
              (tutorial) => tutorial !== tutorialToDelete
            );
            setVideoTutorials(updatedTutorials); // Update state with remaining tutorials
          },
          style: 'destructive',
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={{margin: 10}}>
        <Text style={styles.headerText}>Video Lessons</Text> 
      </View>

      <View style={{margin: 10}}>
        <Button title='Upload Video' onPress={() => navigation.navigate('UploadVideo')} />
      </View>
      
      <ScrollView style={{padding: 20}}>
      
      {
        tutorials.map((tutorial, index) => (
          <View key={index} style={stylesheet.container}>
            <Text style={styles.subheaderText}>{tutorial.title}</Text>
            <View>
              <Video
                source={{
                  uri: tutorial.link,
                }}
                style={stylesheet.webview}
                controls={true}
                paused={true}
                hideShutterView={true}
                resizeMode="contain"
                
              />
            </View>
            <Text style={styles.textNormal}>{tutorial.description}</Text>
            <View style={stylesheet.container}><Button title='Update' onPress={() => handleUpdate(tutorial)}/></View>
            <View style={stylesheet.container}><Button title="Delete" onPress={() => handleDelete(tutorial)}/></View>
        
          </View>
        )
        )
      }
      </ScrollView>

      {/* Modal for updating tutorial */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={stylesheet.modalContainer}>
          <View style={styles.container}>
            <Text style={styles.headerText}>Update Tutorial</Text>

            {/* Input fields for editing the tutorial */}
            <Text style={styles.textNormal}>Title</Text>
            <TextInput
              
              style={stylesheet.input}
              value={title}
              onChangeText={setTitle}
            />

            <Text style={styles.textNormal}>Description</Text>
            <TextInput
              
              style={stylesheet.input}
              value={description}
              onChangeText={setDescription}
            />

            <Text style={styles.textNormal}>Link</Text>
            <TextInput
              
              style={stylesheet.input}
              value={link}
              onChangeText={setLink}
            />

            {/* Buttons for saving or cancelling */}
            <Button title="Save Changes" onPress={handleSave} />
            <Button title="Cancel" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  )
}

export default Index
