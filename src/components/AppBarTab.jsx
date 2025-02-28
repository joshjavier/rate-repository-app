import { Pressable, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

import Text from './Text';
import theme from '../theme';
import useAuthenticatedUser from '../hooks/useAuthenticatedUser';
import useSignOut from '../hooks/useSignOut';

const styles = StyleSheet.create({
  tab: {
    padding: theme.fontSizes.body,
  },
  text: {
    color: '#fff',
  },
});

const AppBarTab = () => {
  const { user } = useAuthenticatedUser();
  const signout = useSignOut();
  console.log(user);

  return (
    <>
      <Link to="/" style={styles.tab}>
        <Text fontWeight="bold" style={styles.text}>
          Repositories
        </Text>
      </Link>
      {!user ? (
        <Link to="/login" style={styles.tab}>
          <Text fontWeight="bold" style={styles.text}>
            Sign in
          </Text>
        </Link>
      ) : (
        <Pressable onPress={() => signout()} style={styles.tab}>
          <Text fontWeight="bold" style={styles.text}>
            Sign out
          </Text>
        </Pressable>
      )}
    </>
  );
};

export default AppBarTab;
