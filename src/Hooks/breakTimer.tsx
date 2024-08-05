import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '../types/navigation';

const useBreakTimer = (interval: number) => {
  const navigation = useNavigation<NavigationProp>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Break');
    }, interval);

    return () => clearTimeout(timer);
  }, [interval, navigation]);
};

export default useBreakTimer;
