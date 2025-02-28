import { useQuery } from '@apollo/client';
import { GET_AUTHENTICATED_USER } from '../graphql/queries';

const useAuthenticatedUser = () => {
  const { data, loading, error } = useQuery(GET_AUTHENTICATED_USER, {
    fetchPolicy: 'cache-and-network',
  });

  return { user: data?.me, loading, error };
};

export default useAuthenticatedUser;
