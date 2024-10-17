import {View} from 'react-native';
import Text from '../../Components/Text';
import { User } from '@/types/user';
import { PropsWithChildren } from 'react';
import { useAuth } from '../Authentication/AuthProvider';
import styles from './defaultCSS';

type ProtectedRouteProps = PropsWithChildren & {
  allowedRoles?: User['role'][];
};

export default function ProtectedRoute({
  allowedRoles,
  children,
}: ProtectedRouteProps) {
  const { currentUser } = useAuth();

  if (currentUser === undefined) {
    return <View style={styles.container}>
      <Text style={styles.header}>
        Loading...
        </Text>
        </View>;
  }

  if (
    currentUser === null ||
    (allowedRoles && !allowedRoles.includes(currentUser.role))
  ) {
    return <View style={styles.container}>
    <Text style={styles.header}>
      Permission Denied
      </Text>
      </View>;
  }

  return children;
}
