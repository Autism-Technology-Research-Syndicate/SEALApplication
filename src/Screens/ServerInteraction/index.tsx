import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  View,
  TextInput,
} from 'react-native';
import {getStyles} from './defaultCSS';
import {useSettingsContext} from '../../Contexts/FontContext';
import axios from 'axios';
import BackgroundWrapper from '../../Components/BackgroundWrapper/.';
import Text from '../../Components/Text/.';
import Button from '../../Components/Button/.';
import {NavigationProp} from '@react-navigation/native';
import {Appbar} from 'react-native-paper';
import {useAuth} from '../../Components/Authentication/AuthProvider';
import ProtectedRoute from '../../Components/Authorization/ProtectedRoute';
import Seal from '../../Assets/svg/seal.svg';

const ServerInteraction = ({navigation}: {navigation: NavigationProp<any>}) => {
  const {currentUser} = useAuth();
  const {selectedConfig} = useSettingsContext();
  const styles = getStyles(selectedConfig.font);

  const [data, setData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [pingMessage, setPingMessage] = useState<string>(''); // State to store ping message

  const API_BASE_URL = 'http://10.0.2.2:3000/api/data'; // Base URL of the server
  // Function to send ping to server with a message
  async function sendPing() {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.post(
        API_BASE_URL,
        {message: pingMessage},
        {
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: 5000, // Timeout in milliseconds
        },
      );

      setData(`Ping response: ${JSON.stringify(response.data)}`);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <BackgroundWrapper>
      <View style={styles.container}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <ProtectedRoute allowedRoles={['admin', 'viewer']}>
          <Seal width={85} height={85} style={styles.body} />
          <Text style={styles.header}>Send message to your Teacher</Text>
          {loading && <ActivityIndicator size="large" color="#0000ff" />}
          {data && <Text style={styles.text}>{data}</Text>}
          {error && <Text style={styles.error}>{`Error: ${error}`}</Text>}

          {/* Input for ping message */}
          <TextInput
            style={styles.input}
            value={pingMessage}
            onChangeText={setPingMessage}
            placeholder="Enter ping message"
          />

          <View style={styles.bottom_section}>
            {/* Button to send the ping */}
            <Button light title="Send" onPress={sendPing} />
            {/* <Button
              light
              title="Home"
              onPress={() => navigation.navigate('Home')}
            /> */}
          </View>
        </ProtectedRoute>
      </View>
    </BackgroundWrapper>
  );
};

export default ServerInteraction;
