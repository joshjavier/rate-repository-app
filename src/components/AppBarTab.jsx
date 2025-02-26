import { StyleSheet, View } from 'react-native';
import { Link } from 'react-router-native';

import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.textPrimary,
    flexDirection: 'row',
  },
  tab: {
    padding: theme.fontSizes.body,
  },
  text: {
    color: '#fff',
  },
});

const AppBarTab = () => {
  return (
    <View style={styles.container}>
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
    </View>
  );
};

export default AppBarTab;
