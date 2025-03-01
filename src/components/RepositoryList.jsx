import { FlatList, Pressable } from 'react-native';
import { useNavigate } from 'react-router-native';
import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';
import ItemSeparator from './ItemSeparator';

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
