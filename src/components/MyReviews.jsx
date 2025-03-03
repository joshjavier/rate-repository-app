import { FlatList } from 'react-native';
import useAuthenticatedUser from '../hooks/useAuthenticatedUser';
import ItemSeparator from './ItemSeparator';
import ReviewItem from './ReviewItem';
import Text from './Text';
import theme from '../theme';

const MyReviewsContainer = ({ reviews }) => {
  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

const MyReviews = () => {
  const { reviews, loading, error } = useAuthenticatedUser({ withReviews: true });

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text color={theme.colors.error}>Something went wrong.</Text>;
  }

  return <MyReviewsContainer reviews={reviews} />;
};

export default MyReviews;
