import { StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    margin: theme.fontSizes.body,
  },
});

const RepositorySearch = ({ searchQuery, setSearchQuery }) => {
  return (
    <Searchbar
      placeholder="Search for a repository"
      onChangeText={setSearchQuery}
      value={searchQuery}
      theme={{
        roundness: 1,
        colors: { elevation: { level3: '#fff' }, onSurfaceVariant: theme.colors.textPrimary },
      }}
      style={styles.container}
    />
  );
};

export default RepositorySearch;
