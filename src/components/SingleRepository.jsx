import { FlatList } from 'react-native';
import { useParams } from 'react-router-native';
import { openURL } from 'expo-linking';
import useRepository from '../hooks/useRepository';
import RepositoryItem from './RepositoryItem';
import ReviewItem from './ReviewItem';
import ItemSeparator from './ItemSeparator';

const RepositoryInfo = ({ repository }) => {
  const openInGitHub = (url) => {
    openURL(url);
  };

  return <RepositoryItem {...repository} openInGitHub={openInGitHub} />;
};

const SingleRepository = () => {
  const params = useParams();
  const { repository, reviews } = useRepository(params.id);

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default SingleRepository;
