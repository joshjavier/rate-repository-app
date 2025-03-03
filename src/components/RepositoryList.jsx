import { useState } from 'react';
import { FlatList, Pressable } from 'react-native';
import { useNavigate } from 'react-router-native';
import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';
import ItemSeparator from './ItemSeparator';
import SortPicker from './SortPicker';

export const RepositoryListContainer = ({
  repositories,
  goToRepo,
  selectedSort,
  setSelectedSort,
}) => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={
        <SortPicker selectedSort={selectedSort} setSelectedSort={setSelectedSort} />
      }
      renderItem={({ item: { id, ...item } }) => (
        <Pressable onPress={goToRepo(id)}>
          <RepositoryItem key={id} {...item} />
        </Pressable>
      )}
    />
  );
};

const RepositoryList = () => {
  const [selectedSort, setSelectedSort] = useState('latest');
  const { repositories } = useRepositories(selectedSort);
  const navigate = useNavigate();

  const goToRepo = (id) => () => {
    navigate(`/repository/${id}`);
  };

  return (
    <RepositoryListContainer
      repositories={repositories}
      goToRepo={goToRepo}
      selectedSort={selectedSort}
      setSelectedSort={setSelectedSort}
    />
  );
};

export default RepositoryList;
