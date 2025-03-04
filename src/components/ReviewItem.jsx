import { Alert, Pressable, StyleSheet, View } from 'react-native';
import { Link } from 'react-router-native';
import Text from './Text';
import theme from '../theme';
import useDeleteReview from '../hooks/useDeleteReview';

const styles = StyleSheet.create({
  container: {
    padding: theme.fontSizes.body,
    gap: theme.fontSizes.body,
    backgroundColor: '#fff',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  rating: {
    borderColor: theme.colors.primary,
    borderWidth: 2,
    borderRadius: '999em',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    flexShrink: 1,
  },
  date: {
    color: theme.colors.textSecondary,
  },
  body: {
    marginTop: 4,
  },
  actions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: theme.fontSizes.body,
    rowGap: 4,
    width: '100%',
  },
  button: {
    borderRadius: 4,
    padding: theme.fontSizes.body,
    flex: 1,
    minWidth: 133,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

const ReviewItem = ({ review }) => {
  const { id, text, rating, createdAt, user, repository } = review;
  const [deleteReview] = useDeleteReview();

  const onDeleteReview = () => {
    Alert.alert('Delete review', 'Are you sure you want to delete this review?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel pressed'),
        style: 'cancel',
      },
      {
        text: 'Delete',
        onPress: () => deleteReview(id),
        style: 'destructive',
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.rating}>
        <Text color="primary" fontWeight="bold">
          {rating}
        </Text>
      </View>
      <View style={styles.text}>
        <Text fontWeight="bold">{user?.username ?? repository?.fullName}</Text>
        <Text style={styles.date}>
          {new Intl.DateTimeFormat('de-DE', { dateStyle: 'medium' }).format(new Date(createdAt))}
        </Text>
        <Text style={styles.body}>{text}</Text>
      </View>
      {repository && (
        <>
          <View style={styles.actions}>
            <Link
              to={`/repository/${repository.id}`}
              style={[styles.button, { backgroundColor: theme.colors.primary }]}
            >
              <Text fontWeight="bold" style={styles.buttonText}>
                View repository
              </Text>
            </Link>
            <Pressable
              onPress={onDeleteReview}
              style={[styles.button, { backgroundColor: theme.colors.error }]}
            >
              <Text fontWeight="bold" style={styles.buttonText}>
                Delete review
              </Text>
            </Pressable>
          </View>
        </>
      )}
    </View>
  );
};

export default ReviewItem;
