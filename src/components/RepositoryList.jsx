import { useState } from 'react';
import { FlatList, Pressable } from 'react-native';
import { useNavigate } from 'react-router-native';
import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';
import ItemSeparator from './ItemSeparator';
import SortPicker from './SortPicker';
import RepositorySearch from './RepositorySearch';
import { useDebounce } from 'use-debounce';

const RepositoryListHeader = ({ selectedSort, setSelectedSort, searchQuery, setSearchQuery }) => {
  return (
    <>
      <RepositorySearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <SortPicker selectedSort={selectedSort} setSelectedSort={setSelectedSort} />
    </>
  );
};

export const RepositoryListContainer = ({
  repositories,
  goToRepo,
  selectedSort,
  setSelectedSort,
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={
        <RepositoryListHeader
          selectedSort={selectedSort}
          setSelectedSort={setSelectedSort}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
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
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSort, setSelectedSort] = useState('latest');
  const [searchKeyword] = useDebounce(searchQuery, 500);
  const { repositories } = useRepositories({ sort: selectedSort, searchKeyword });
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
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
    />
  );
};

export default RepositoryList;
