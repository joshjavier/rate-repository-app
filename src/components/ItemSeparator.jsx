import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = ({ style }) => <View style={[styles.separator, style]} />;

export default ItemSeparator;
