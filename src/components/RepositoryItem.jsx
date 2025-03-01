import { StyleSheet, View } from 'react-native';
import theme from '../theme';
import Text from './Text';
import Avatar from './Avatar';
import Stat from './Stat';
import Tag from './Tag';

const styles = StyleSheet.create({
  container: {
    gap: theme.fontSizes.body,
    padding: theme.fontSizes.body,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    gap: theme.fontSizes.body,
  },
  headerText: {
    alignItems: 'flex-start',
    flexShrink: 1,
    gap: 4,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

const RepositoryItem = ({
  fullName,
  description,
  language,
  stargazersCount,
  forksCount,
  reviewCount,
  ratingAverage,
  ownerAvatarUrl,
}) => {
  return (
    <View testID="repositoryItem" style={styles.container}>
      <View style={styles.header}>
        <Avatar image={ownerAvatarUrl} />
        <View style={styles.headerText}>
          <Text fontWeight="bold">{fullName}</Text>
          <Text>{description}</Text>
          <Tag label={language} />
        </View>
      </View>
      <View style={styles.stats}>
        <Stat value={stargazersCount} label="Stars" />
        <Stat value={forksCount} label="Forks" />
        <Stat value={reviewCount} label="Reviews" />
        <Stat value={ratingAverage} label="Rating" />
      </View>
    </View>
  );
};

export default RepositoryItem;
