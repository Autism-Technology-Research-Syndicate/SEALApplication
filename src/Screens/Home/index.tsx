import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Login/.';

const Stack = createNativeStackNavigator();

const index = ({navigation}) => {
  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Welome" component={Login} options={{}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default index;


