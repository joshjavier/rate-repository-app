import { useFormik } from 'formik';
import { Pressable, StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-web';

import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: theme.fontSizes.body,
    gap: theme.fontSizes.body,
  },
  input: {
    borderColor: theme.colors.textSecondary,
    borderWidth: 1,
    borderRadius: 4,
    padding: theme.fontSizes.body,
    color: theme.colors.textSecondary,
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    padding: theme.fontSizes.body,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
  },
});

const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        style={styles.input}
      />
      <Pressable onPress={formik.handleSubmit} style={styles.button}>
        <Text fontWeight="bold" style={styles.buttonText}>
          Sign in
        </Text>
      </Pressable>
    </View>
  );
};

export default SignIn;
