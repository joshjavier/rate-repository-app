import { Pressable, StyleSheet, View } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.textPrimary,
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
      <Pressable style={styles.tab}>
        <Text fontWeight="bold" style={styles.text}>
          Repositories
        </Text>
      </Pressable>
    </View>
  );
};

export default AppBarTab;
