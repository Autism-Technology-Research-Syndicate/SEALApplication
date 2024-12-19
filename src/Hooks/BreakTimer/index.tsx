import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types'; // Adjust path as needed

type NavigationProps = StackNavigationProp<RootStackParamList, 'Break'>;

const useBreakTimer = (interval: number) => {
  const navigation = useNavigation<NavigationProps>();

  useEffect(() => {
    const timer = setInterval(() => {
      // navigation.navigate('Break'); // Ensure 'Break' screen is added to your navigator
    }, interval);

    return () => clearInterval(timer);
  }, [interval, navigation]);
};

export default useBreakTimer;
