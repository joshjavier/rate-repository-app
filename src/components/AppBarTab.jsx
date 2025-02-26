import { StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  tab: {
    padding: theme.fontSizes.body,
  },
  text: {
    color: '#fff',
  },
});

const AppBarTab = () => {
  return (
    <>
      <Link to="/" style={styles.tab}>
        <Text fontWeight="bold" style={styles.text}>
          Repositories
        </Text>
      </Link>
      <Link to="/login" style={styles.tab}>
        <Text fontWeight="bold" style={styles.text}>
          Sign in
        </Text>
      </Link>
    </>
  );
};

export default AppBarTab;
