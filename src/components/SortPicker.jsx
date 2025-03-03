import { Picker } from '@react-native-picker/picker';
import { StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    padding: theme.fontSizes.body,
    borderWidth: 0,
    margin: theme.fontSizes.body,
  },
});

const SortPicker = ({ selectedSort, setSelectedSort }) => {
  return (
    <Picker
      selectedValue={selectedSort}
      onValueChange={(itemValue) => setSelectedSort(itemValue)}
      style={styles.container}
    >
      <Picker.Item label="Latest repositories" value="latest" />
      <Picker.Item label="Highest rated repositories" value="highestRated" />
      <Picker.Item label="Lowest rated repositories" value="lowestRated" />
    </Picker>
  );
};

export default SortPicker;
