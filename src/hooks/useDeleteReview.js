import { useMutation } from '@apollo/client';
import { DELETE_REVIEW } from '../graphql/mutations';
import { GET_AUTHENTICATED_USER } from '../graphql/queries';

const useDeleteReview = () => {
  const [mutate, result] = useMutation(DELETE_REVIEW);

  const deleteReview = async (id) => {
    await mutate({ variables: { id }, refetchQueries: [GET_AUTHENTICATED_USER] });
  };

  return [deleteReview, result];
};

export default useDeleteReview;
