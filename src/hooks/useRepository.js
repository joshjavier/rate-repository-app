import { useQuery } from '@apollo/client';
import { GET_REPOSITORY, GET_REPOSITORY_WITH_REVIEWS } from '../graphql/queries';

const useRepository = (id, { withReviews = true, first = 10 } = {}) => {
  const { data, error, loading, fetchMore } = useQuery(
    withReviews ? GET_REPOSITORY_WITH_REVIEWS : GET_REPOSITORY,
    {
      variables: { id, first },
      fetchPolicy: 'cache-and-network',
    }
  );

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({ variables: { after: data.repository.reviews.pageInfo.endCursor } });
  };

  let repository, reviews;
  if (data?.repository) {
    ({ reviews, ...repository } = data.repository);
  }
  if (reviews) {
    reviews = reviews.edges.map((e) => e.node);
  }

  return { reviews, repository, loading, error, fetchMore: handleFetchMore };
};

export default useRepository;
