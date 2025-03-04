import { Pressable, StyleSheet, View } from 'react-native';
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
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    padding: theme.fontSizes.body,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
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
  url,
  openInGitHub,
}) => {
  return (
    <View
      testID="repositoryItem"
      style={[styles.container, url && { marginBottom: theme.fontSizes.body }]}
    >
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
      {url && (
        <Pressable style={styles.button} onPress={() => openInGitHub(url)}>
          <Text fontWeight="bold" style={styles.buttonText}>
            Open in GitHub
          </Text>
        </Pressable>
      )}
    </View>
  );
};

export default RepositoryItem;
