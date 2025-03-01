import { useQuery } from '@apollo/client';
import { GET_REPOSITORY, GET_REPOSITORY_WITH_REVIEWS } from '../graphql/queries';

const useRepository = (id, { withReviews = true } = {}) => {
  const { data, error, loading } = useQuery(
    withReviews ? GET_REPOSITORY_WITH_REVIEWS : GET_REPOSITORY,
    {
      variables: { id },
      fetchPolicy: 'cache-and-network',
    }
  );

  if (loading || error) {
    return { data, error, loading };
  }

  const {
    repository: { reviews, ...repository },
  } = data;

  return { reviews: reviews.edges.map((e) => e.node), repository, loading, error };
};

export default useRepository;
