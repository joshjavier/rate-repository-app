import { Pressable, StyleSheet } from 'react-native';
import { Link, useNavigate } from 'react-router-native';

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
  const navigate = useNavigate();

  const onSignOut = () => {
    signout();
    navigate('/');
  };

  return (
    <>
      <Link to="/" style={styles.tab}>
        <Text fontWeight="bold" style={styles.text}>
          Repositories
        </Text>
      </Link>
      {!user ? (
        <>
          <Link to="/login" style={styles.tab}>
            <Text fontWeight="bold" style={styles.text}>
              Sign in
            </Text>
          </Link>
          <Link to="/register" style={styles.tab}>
            <Text fontWeight="bold" style={styles.text}>
              Sign up
            </Text>
          </Link>
        </>
      ) : (
        <>
          <Link to="/new" style={styles.tab}>
            <Text fontWeight="bold" style={styles.text}>
              Create a review
            </Text>
          </Link>
          <Link to="/myreviews" style={styles.tab}>
            <Text fontWeight="bold" style={styles.text}>
              My reviews
            </Text>
          </Link>
          <Pressable onPress={onSignOut} style={styles.tab}>
            <Text fontWeight="bold" style={styles.text}>
              Sign out
            </Text>
          </Pressable>
        </>
      )}
    </>
  );
};

export default AppBarTab;
