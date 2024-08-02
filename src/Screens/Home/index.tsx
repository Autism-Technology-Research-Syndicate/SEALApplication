import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeToSeal from '../WelcomeToSeal';
import Login from '../Login';
import Personal from '../Personal';

const Stack = createNativeStackNavigator();

const Index = ({navigation}) => {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Welcome" component={WelcomeToSeal}  />
        <Stack.Screen name="Login" component={Login}  />
        <Stack.Screen name="Personal" component={Personal}  />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;


