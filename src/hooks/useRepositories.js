import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = ({ sort, searchKeyword, first = 10 } = {}) => {
  const sortArgs =
    sort === 'highestRated'
      ? { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' }
      : sort === 'lowestRated'
      ? { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' }
      : { orderBy: 'CREATED_AT', orderDirection: 'DESC' };

  const { data, error, loading, fetchMore } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: { ...sortArgs, searchKeyword, first },
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({ variables: { after: data.repositories.pageInfo.endCursor } });
  };

  return {
    repositories: data?.repositories.edges.map((e) => e.node),
    loading,
    error,
    fetchMore: handleFetchMore,
  };
};

export default useRepositories;
