import { useParams } from 'react-router-native';
import useRepository from '../hooks/useRepository';
import RepositoryItem from './RepositoryItem';
import { openURL } from 'expo-linking';

const SingleRepository = () => {
  const params = useParams();
  const { repository } = useRepository(params.id);

  const openInGitHub = (url) => {
    openURL(url);
  };

  return <RepositoryItem {...repository} openInGitHub={openInGitHub} />;
};

export default SingleRepository;
