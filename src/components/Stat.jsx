import { StyleSheet, View } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

const Stat = ({ value, label }) => {
  const formatNumber = (number) =>
    Intl.NumberFormat('en-US', { notation: 'compact', compactDisplay: 'short' }).format(number);

  return (
    <View style={styles.container}>
      <Text fontWeight="bold">{formatNumber(value)}</Text>
      <Text>{label}</Text>
    </View>
  );
};

export default Stat;
