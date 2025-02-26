import { Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 4,
    width: 40,
    height: 40,
  },
});

const Avatar = ({ image }) => {
  return <Image source={{ uri: image }} style={styles.avatar} />;
};

export default Avatar;
