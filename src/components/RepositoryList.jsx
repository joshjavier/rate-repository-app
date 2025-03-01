import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, goToRepo }) => {
  const repositoryNodes = repositories ? repositories.edges.map((edge) => edge.node) : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item: { id, ...item } }) => (
        <Pressable onPress={goToRepo(id)}>
          <RepositoryItem key={id} {...item} />
        </Pressable>
      )}
    />
  );
};

const RepositoryList = () => {
  const { repositories } = useRepositories();
  const navigate = useNavigate();

  const goToRepo = (id) => () => {
    navigate(`/repository/${id}`);
  };

  return <RepositoryListContainer repositories={repositories} goToRepo={goToRepo} />;
};

export default RepositoryList;
