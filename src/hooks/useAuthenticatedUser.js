import { useQuery } from '@apollo/client';
import { GET_AUTHENTICATED_USER } from '../graphql/queries';

const useAuthenticatedUser = ({ withReviews = false } = {}) => {
  const { data, loading, error } = useQuery(GET_AUTHENTICATED_USER, {
    fetchPolicy: 'cache-and-network',
    variables: { withReviews },
  });

  let user, reviews;
  if (data?.me) {
    ({ reviews, ...user } = data.me);
  }
  if (reviews) {
    reviews = reviews.edges.map((e) => e.node);
  }

  return { user, reviews, loading, error };
};

export default useAuthenticatedUser;
