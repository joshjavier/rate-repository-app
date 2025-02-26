import { StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  tag: {
    backgroundColor: theme.colors.primary,
    color: '#fff',
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 6,
  },
});

const Tag = ({ label }) => {
  return <Text style={styles.tag}>{label}</Text>;
};

export default Tag;
