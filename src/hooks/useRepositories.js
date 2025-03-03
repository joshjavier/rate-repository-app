import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = ({ sort, searchKeyword }) => {
  const sortArgs =
    sort === 'highestRated'
      ? { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' }
      : sort === 'lowestRated'
      ? { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' }
      : { orderBy: 'CREATED_AT', orderDirection: 'DESC' };

  const { data, error, loading, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: { ...sortArgs, searchKeyword },
  });

  if (loading || error) {
    return { repositories: data?.repositories, loading, error };
  }

  return { repositories: data.repositories.edges.map((e) => e.node), loading, refetch };
};

export default useRepositories;
