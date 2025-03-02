import { useApolloClient, useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';

const useCreateReview = () => {
  const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const createReview = async ({ repositoryName, ownerName, rating, text }) => {
    const { data, errors } = await mutate({
      variables: { repositoryName, ownerName, rating, text },
    });
    apolloClient.resetStore();

    return { review: data?.createReview, errors };
  };

  return [createReview, result];
};

export default useCreateReview;
