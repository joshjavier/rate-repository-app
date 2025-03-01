import { StyleSheet, View } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    padding: theme.fontSizes.body,
    gap: theme.fontSizes.body,
    backgroundColor: '#fff',
    flexDirection: 'row',
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
});

const ReviewItem = ({ review }) => {
  const { text, rating, createdAt, user } = review;

  return (
    <View style={styles.container}>
      <View style={styles.rating}>
        <Text color="primary" fontWeight="bold">
          {rating}
        </Text>
      </View>
      <View style={styles.text}>
        <Text fontWeight="bold">{user.username}</Text>
        <Text style={styles.date}>
          {new Intl.DateTimeFormat('de-DE', { dateStyle: 'medium' }).format(new Date(createdAt))}
        </Text>
        <Text style={styles.body}>{text}</Text>
      </View>
    </View>
  );
};

export default ReviewItem;
