import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeToSeal from '../WelcomeToSeal';
import Login from '../Login';
import PersonalPage from '../PersonalPage';
import AccountSignUp from '../AccountSignUp';

const Stack = createNativeStackNavigator();

const Index = ({navigation}) => {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeToSeal" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Welcome" component={WelcomeToSeal}  />
        <Stack.Screen name="Login" component={Login}  />
        <Stack.Screen name="Personal" component={PersonalPage}  />
        <Stack.Screen name="AccountSignUp" component={AccountSignUp}  />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;


